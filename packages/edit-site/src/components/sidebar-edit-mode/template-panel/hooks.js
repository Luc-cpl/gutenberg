/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { useMemo } from '@wordpress/element';
import { store as coreStore } from '@wordpress/core-data';
import { parse } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { store as editSiteStore } from '../../../store';
import { PATTERN_TYPES } from '../../../utils/constants';
import { unlock } from '../../../lock-unlock';

function injectThemeAttributeInBlockTemplateContent(
	block,
	currentThemeStylesheet
) {
	block.innerBlocks = block.innerBlocks.map( ( innerBlock ) => {
		return injectThemeAttributeInBlockTemplateContent(
			innerBlock,
			currentThemeStylesheet
		);
	} );

	if (
		block.name === 'core/template-part' &&
		block.attributes.theme === undefined
	) {
		block.attributes.theme = currentThemeStylesheet;
	}
	return block;
}

/**
 * Filter all patterns and return only the ones that are compatible with the current template.
 *
 * @param {Array}  patterns An array of patterns.
 * @param {Object} template The current template.
 * @return {Array} Array of patterns that are compatible with the current template.
 */
function filterPatterns( patterns, template ) {
	// Filter out duplicates.
	const filterOutDuplicatesByName = ( currentItem, index, items ) =>
		index === items.findIndex( ( item ) => currentItem.name === item.name );

	// Looks for patterns that have the same template type as the current template,
	// or have a block type that matches the current template area.
	const filterCompatiblePatterns = ( pattern ) =>
		pattern.templateTypes?.includes( template.slug ) ||
		pattern.blockTypes?.includes( 'core/template-part/' + template.area );

	return patterns.filter(
		filterOutDuplicatesByName && filterCompatiblePatterns
	);
}

/**
 * Map the array of patterns to a format that can be used by the Block Pattern List component.
 *
 * @param {Array}  patterns               An array of patterns.
 * @param {string} currentThemeStylesheet The current theme path.
 * @return {Array} Array of pattern objects that are compatible with the current template.
 */
function preparePatterns( patterns, currentThemeStylesheet ) {
	return patterns.map( ( pattern ) => ( {
		...pattern,
		keywords: pattern.keywords || [],
		type: PATTERN_TYPES.theme,
		blocks: parse( pattern.content, {
			__unstableSkipMigrationLogs: true,
		} ).map( ( block ) =>
			injectThemeAttributeInBlockTemplateContent(
				block,
				currentThemeStylesheet
			)
		),
	} ) );
}

export function useAvailablePatterns( template ) {
	const { blockPatterns, restBlockPatterns, currentThemeStylesheet } =
		useSelect( ( select ) => {
			const { getSettings } = unlock( select( editSiteStore ) );
			const settings = getSettings();

			return {
				blockPatterns:
					settings.__experimentalAdditionalBlockPatterns ??
					settings.__experimentalBlockPatterns,
				restBlockPatterns: select( coreStore ).getBlockPatterns(),
				currentThemeStylesheet:
					select( coreStore ).getCurrentTheme().stylesheet,
			};
		}, [] );

	return useMemo( () => {
		const mergedPatterns = [
			...( blockPatterns || [] ),
			...( restBlockPatterns || [] ),
		];
		const filteredPatterns = filterPatterns( mergedPatterns, template );
		return preparePatterns( filteredPatterns, currentThemeStylesheet );
	}, [ blockPatterns, restBlockPatterns, template, currentThemeStylesheet ] );
}