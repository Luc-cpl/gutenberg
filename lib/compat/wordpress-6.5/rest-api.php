<?php
/**
 * PHP and WordPress configuration compatibility functions for the Gutenberg
 * editor plugin changes related to REST API.
 *
 * @package gutenberg
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Silence is golden.' );
}

/**
 * Registers the Global Styles Revisions REST API routes.
 */
function gutenberg_register_global_styles_revisions_endpoints() {
	$global_styles_revisions_controller = new Gutenberg_REST_Global_Styles_Revisions_Controller_6_5();
	$global_styles_revisions_controller->register_routes();
}
add_action( 'rest_api_init', 'gutenberg_register_global_styles_revisions_endpoints' );

/** 
 * Registers the block pattern categories REST API routes.
 */
function gutenberg_register_rest_block_pattern_categories_routes() {
	$block_patterns = new Gutenberg_REST_Block_Pattern_Categories_Controller();
	$block_patterns->register_routes();
}
add_action( 'rest_api_init', 'gutenberg_register_rest_block_pattern_categories_routes' );