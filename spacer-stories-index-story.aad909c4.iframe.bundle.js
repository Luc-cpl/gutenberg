"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[7131],{"./packages/components/src/context/constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_3:()=>CONNECTED_NAMESPACE,cT:()=>COMPONENT_NAMESPACE,rE:()=>CONNECT_STATIC_NAMESPACE});const COMPONENT_NAMESPACE="data-wp-component",CONNECTED_NAMESPACE="data-wp-c16t",CONNECT_STATIC_NAMESPACE="__contextSystemKey__"},"./packages/components/src/context/context-connect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>hasConnectNamespace,Iq:()=>contextConnect,Kc:()=>contextConnectWithoutRef});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/warning/build-module/index.js"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/context/constants.js"),_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/context/get-styled-class-name-from-key.ts");function contextConnect(Component,namespace){return _contextConnect(Component,namespace,{forwardsRef:!0})}function contextConnectWithoutRef(Component,namespace){return _contextConnect(Component,namespace)}function _contextConnect(Component,namespace,options){const WrappedComponent=options?.forwardsRef?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component):Component;void 0===namespace&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__.Z)("contextConnect: Please provide a namespace");let mergedNamespace=WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]||[namespace];return Array.isArray(namespace)&&(mergedNamespace=[...mergedNamespace,...namespace]),"string"==typeof namespace&&(mergedNamespace=[...mergedNamespace,namespace]),Object.assign(WrappedComponent,{[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]:[...new Set(mergedNamespace)],displayName:namespace,selector:`.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__.l)(namespace)}`})}function getConnectNamespace(Component){if(!Component)return[];let namespaces=[];return Component[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]&&(namespaces=Component[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]),Component.type&&Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]&&(namespaces=Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]),namespaces}function hasConnectNamespace(Component,match){return!!Component&&("string"==typeof match?getConnectNamespace(Component).includes(match):!!Array.isArray(match)&&match.some((result=>getConnectNamespace(Component).includes(result))))}},"./packages/components/src/context/context-system-provider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G8:()=>ContextSystemProvider,eb:()=>useComponentsContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),deepmerge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/deepmerge/dist/cjs.js"),deepmerge__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_1__),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_2__),is_plain_object__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/warning/build-module/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/hooks/use-update-effect.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ComponentsContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),useComponentsContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ComponentsContext);const BaseContextSystemProvider=({children,value})=>{const contextValue=function useContextSystemBridge({value}){const parentContext=useComponentsContext(),valueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>{fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_2___default()(valueRef.current,value)&&valueRef.current!==value&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__.Z)(`Please memoize your context: ${JSON.stringify(value)}`)}),[value]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(null!=parentContext?parentContext:{},null!=value?value:{},{isMergeableObject:is_plain_object__WEBPACK_IMPORTED_MODULE_6__.P})),[parentContext,value])}({value});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ComponentsContext.Provider,{value:contextValue,children})};BaseContextSystemProvider.displayName="BaseContextSystemProvider";const ContextSystemProvider=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(BaseContextSystemProvider);BaseContextSystemProvider.__docgenInfo={description:"A Provider component that can modify props for connected components within\nthe Context system.\n\n@example\n```jsx\n<ContextSystemProvider value={{ Button: { size: 'small' }}}>\n  <Button>...</Button>\n</ContextSystemProvider>\n```\n\n@template {Record<string, any>} T\n@param {Object}                    options\n@param {import('react').ReactNode} options.children Children to render.\n@param {T}                         options.value    Props to render into connected components.\n@return {JSX.Element} A Provider wrapped component.",methods:[],displayName:"BaseContextSystemProvider"}},"./packages/components/src/context/get-styled-class-name-from-key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>getStyledClassNameFromKey});var change_case__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/param-case/dist.es2015/index.js");const getStyledClassNameFromKey=(0,__webpack_require__("./node_modules/memize/dist/index.js").Z)((function getStyledClassName(namespace){return`components-${(0,change_case__WEBPACK_IMPORTED_MODULE_0__.o)(namespace)}`}))},"./packages/components/src/context/use-context-system.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useContextSystem});var build_module=__webpack_require__("./packages/warning/build-module/index.js"),context_system_provider=__webpack_require__("./packages/components/src/context/context-system-provider.js"),constants=__webpack_require__("./packages/components/src/context/constants.js");var get_styled_class_name_from_key=__webpack_require__("./packages/components/src/context/get-styled-class-name-from-key.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useContextSystem(props,namespace){const contextSystemProps=(0,context_system_provider.eb)();void 0===namespace&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,build_module.Z)("useContextSystem: Please provide a namespace");const contextProps=contextSystemProps?.[namespace]||{},finalComponentProps={[constants._3]:!0,...(componentName=namespace,{[constants.cT]:componentName})};var componentName;const{_overrides:overrideProps,...otherContextProps}=contextProps,initialMergedProps=Object.entries(otherContextProps).length?Object.assign({},otherContextProps,props):props,classes=(0,use_cx.I)()((0,get_styled_class_name_from_key.l)(namespace),props.className),rendered="function"==typeof initialMergedProps.renderChildren?initialMergedProps.renderChildren(initialMergedProps):initialMergedProps.children;for(const key in initialMergedProps)finalComponentProps[key]=initialMergedProps[key];for(const key in overrideProps)finalComponentProps[key]=overrideProps[key];return void 0!==rendered&&(finalComponentProps.children=rendered),finalComponentProps.className=classes,finalComponentProps}},"./packages/components/src/utils/hooks/use-update-effect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useUpdateEffect(effect,deps){const mounted=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mounted.current)return effect();mounted.current=!0}),deps)}},"./packages/components/src/utils/rtl.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>rtl});var _emotion_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js");const LOWER_LEFT_REGEXP=new RegExp(/-left/g),LOWER_RIGHT_REGEXP=new RegExp(/-right/g),UPPER_LEFT_REGEXP=new RegExp(/Left/g),UPPER_RIGHT_REGEXP=new RegExp(/Right/g);function getConvertedKey(key){return"left"===key?"right":"right"===key?"left":LOWER_LEFT_REGEXP.test(key)?key.replace(LOWER_LEFT_REGEXP,"-right"):LOWER_RIGHT_REGEXP.test(key)?key.replace(LOWER_RIGHT_REGEXP,"-left"):UPPER_LEFT_REGEXP.test(key)?key.replace(UPPER_LEFT_REGEXP,"Right"):UPPER_RIGHT_REGEXP.test(key)?key.replace(UPPER_RIGHT_REGEXP,"Left"):key}const convertLTRToRTL=(ltrStyles={})=>Object.fromEntries(Object.entries(ltrStyles).map((([key,value])=>[getConvertedKey(key),value])));function rtl(ltrStyles={},rtlStyles){return()=>rtlStyles?(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.dZ)()?(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(rtlStyles,""):(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(ltrStyles,""):(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.dZ)()?(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(convertLTRToRTL(ltrStyles),""):(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(ltrStyles,"")}rtl.watch=()=>(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.dZ)()},"./packages/components/src/utils/space.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>space});const GRID_BASE="4px";function space(value){if(void 0===value)return;if(!value)return"0";const asInt="number"==typeof value?value:Number(value);return"undefined"!=typeof window&&window.CSS?.supports?.("margin",value.toString())||Number.isNaN(asInt)?value.toString():`calc(${GRID_BASE} * ${value})`}},"./packages/components/src/view/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const View=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e19lxcc00"})("");View.selector=".components-view",View.displayName="View";const __WEBPACK_DEFAULT_EXPORT__=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.\n\n```jsx\nimport { View } from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<View>\n\t\t\t Code is Poetry\n\t\t</View>\n\t);\n}\n```",displayName:"View",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/spacer/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/spacer/component.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const controls=["margin","marginY","marginX","marginTop","marginBottom","marginLeft","marginRight","padding","paddingY","paddingX","paddingTop","paddingBottom","paddingLeft","paddingRight"].reduce(((acc,prop)=>({...acc,[prop]:{control:{type:"text"}}})),{}),__WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.Z,title:"Components (Experimental)/Spacer",argTypes:{as:{control:{type:"text"}},children:{control:{type:"text"}},...controls},parameters:{sourceLink:"packages/components/src/spacer",controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},BlackBox=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{backgroundColor:"black",width:"100px",height:"100px"}});BlackBox.displayName="BlackBox";const Default=(({onChange,...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlackBox,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlackBox,{})]})).bind({});Default.args={children:"This is the spacer"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...args\n}) => {\n  return <>\n            <BlackBox />\n            <Spacer {...args} />\n            <BlackBox />\n        </>;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);