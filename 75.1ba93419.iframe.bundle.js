"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[75],{"./node_modules/@ariakit/react-core/esm/__chunks/4B73HROV.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A5:()=>TabScopedContextProvider,Nt:()=>useTabProviderContext,aq:()=>useTabScopedContext});var _IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/IB7YUKH5.js"),ctx=(0,__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js").re)([_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_1__.Lq],[_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_1__.al]),useTabScopedContext=(ctx.useContext,ctx.useScopedContext),useTabProviderContext=ctx.useProviderContext,TabScopedContextProvider=(ctx.ContextProvider,ctx.ScopedContextProvider)},"./node_modules/@ariakit/react-core/esm/__chunks/BNUFNEVY.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>CompositeRow});var _IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/IB7YUKH5.js"),_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js"),_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js"),_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/I2VQ3XGR.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useCompositeRow=(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__.Bi)((_a=>{var _b=_a,{store,"aria-setsize":ariaSetSize,"aria-posinset":ariaPosInSet}=_b,props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.S0)(_b,["store","aria-setsize","aria-posinset"]);const context=(0,_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_4__.$)();store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__.kG)(store,!1);const id=(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__.Me)(props.id),baseElement=store.useState((state=>state.baseElement||void 0)),providerValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({id,baseElement,ariaSetSize,ariaPosInSet})),[id,baseElement,ariaSetSize,ariaPosInSet]);return props=(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__.OJ)(props,(element=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_4__.Ft.Provider,{value:providerValue,children:element})),[providerValue]),props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({id},props)})),CompositeRow=(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__.LM)((props=>{const htmlProps=useCompositeRow(props);return(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__.az)("div",htmlProps)}))},"./node_modules/@ariakit/react-core/esm/__chunks/CQMDBRG5.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useTabStore});var _7GBW5FLS=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/7GBW5FLS.js"),EKQEJRUF=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js"),_6O5OEQGF=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js"),_4R3V3JGP=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),react=__webpack_require__("./node_modules/react/index.js"),VEUNYQYR=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/VEUNYQYR.js"),MYUKSFP5=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/MYUKSFP5.js"),K6ELJFXN=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/K6ELJFXN.js"),I2VQ3XGR=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/I2VQ3XGR.js"),_chunks_4R3V3JGP=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js");function createTabStore(props={}){var _a;const syncState=null==(_a=props.store)?void 0:_a.getState(),composite=(0,VEUNYQYR.t)((0,_chunks_4R3V3JGP.EZ)((0,_chunks_4R3V3JGP.ih)({},props),{orientation:(0,I2VQ3XGR.LS)(props.orientation,null==syncState?void 0:syncState.orientation,"horizontal"),focusLoop:(0,I2VQ3XGR.LS)(props.focusLoop,null==syncState?void 0:syncState.focusLoop,!0)})),panels=(0,MYUKSFP5.h)(),initialState=(0,_chunks_4R3V3JGP.EZ)((0,_chunks_4R3V3JGP.ih)({},composite.getState()),{selectedId:(0,I2VQ3XGR.LS)(props.selectedId,null==syncState?void 0:syncState.selectedId,props.defaultSelectedId,void 0),selectOnMove:(0,I2VQ3XGR.LS)(props.selectOnMove,null==syncState?void 0:syncState.selectOnMove,!0)}),tab=(0,K6ELJFXN.MT)(initialState,composite,props.store);return(0,K6ELJFXN.cY)(tab,(()=>(0,K6ELJFXN.Z_)(tab,["moves"],(()=>{const{activeId,selectOnMove}=tab.getState();if(!selectOnMove)return;if(!activeId)return;const tabItem=composite.item(activeId);tabItem&&(tabItem.dimmed||tabItem.disabled||tab.setState("selectedId",tabItem.id))})))),(0,K6ELJFXN.cY)(tab,(()=>(0,K6ELJFXN.dC)(tab,["selectedId"],(state=>tab.setState("activeId",state.selectedId))))),(0,K6ELJFXN.cY)(tab,(()=>(0,K6ELJFXN.Z_)(tab,["selectedId","renderedItems"],(state=>{if(void 0!==state.selectedId)return;const{activeId,renderedItems}=tab.getState(),tabItem=composite.item(activeId);if(!tabItem||tabItem.disabled||tabItem.dimmed){const tabItem2=renderedItems.find((item=>!item.disabled&&!item.dimmed));tab.setState("selectedId",null==tabItem2?void 0:tabItem2.id)}else tab.setState("selectedId",tabItem.id)})))),(0,K6ELJFXN.cY)(tab,(()=>(0,K6ELJFXN.Z_)(tab,["renderedItems"],(state=>{const tabs=state.renderedItems;if(tabs.length)return(0,K6ELJFXN.Z_)(panels,["renderedItems"],(state2=>{const items=state2.renderedItems;items.some((panel=>!panel.tabId))&&items.forEach(((panel,i)=>{if(panel.tabId)return;const tabItem=tabs[i];tabItem&&panels.renderItem((0,_chunks_4R3V3JGP.EZ)((0,_chunks_4R3V3JGP.ih)({},panel),{tabId:tabItem.id}))}))}))})))),(0,_chunks_4R3V3JGP.EZ)((0,_chunks_4R3V3JGP.ih)((0,_chunks_4R3V3JGP.ih)({},composite),tab),{panels,setSelectedId:id=>tab.setState("selectedId",id),select:id=>{tab.setState("selectedId",id),composite.move(id)}})}function useTabStore(props={}){const[store,update]=(0,EKQEJRUF.oR)(createTabStore,props);return function useTabStoreProps(store,update,props){store=(0,_7GBW5FLS.b)(store,update,props),(0,EKQEJRUF.XS)(store,props,"selectedId","setSelectedId"),(0,EKQEJRUF.XS)(store,props,"selectOnMove");const[panels,updatePanels]=(0,EKQEJRUF.oR)((()=>store.panels),{});return(0,_6O5OEQGF.rf)(updatePanels,[store,updatePanels]),(0,react.useMemo)((()=>(0,_4R3V3JGP.EZ)((0,_4R3V3JGP.ih)({},store),{panels})),[store,panels])}(store,update,props)}},"./node_modules/@ariakit/react-core/esm/tab/tab-list.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>TabList});var _chunks_4B73HROV_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4B73HROV.js"),_chunks_7QTPYGNZ_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/7QTPYGNZ.js"),_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js"),_chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js"),_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/I2VQ3XGR.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useTabList=(0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((_a=>{var _b=_a,{store}=_b,props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store"]);const context=(0,_chunks_4B73HROV_js__WEBPACK_IMPORTED_MODULE_3__.Nt)();store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__.kG)(store,!1);const orientation=store.useState((state=>"both"===state.orientation?void 0:state.orientation));return props=(0,_chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__.OJ)(props,(element=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunks_4B73HROV_js__WEBPACK_IMPORTED_MODULE_3__.A5,{value:store,children:element})),[store]),props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.ih)({role:"tablist","aria-orientation":orientation},props),props=(0,_chunks_7QTPYGNZ_js__WEBPACK_IMPORTED_MODULE_6__.Q)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store},props))})),TabList=(0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__.LM)((props=>{const htmlProps=useTabList(props);return(0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__.az)("div",htmlProps)}))},"./node_modules/@ariakit/react-core/esm/tab/tab-panel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>TabPanel});var _chunks_UH3I23HL_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/UH3I23HL.js"),_chunks_4B73HROV_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4B73HROV.js"),_chunks_CLE7NTOY_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/CLE7NTOY.js"),_chunks_KK7H3W2B_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/KK7H3W2B.js"),_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js"),_chunks_SFCBA2JZ_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/SFCBA2JZ.js"),_chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js"),_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@ariakit/core/esm/utils/focus.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/I2VQ3XGR.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useTabPanel=(0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__.Bi)((_a=>{var _b=_a,{store,tabId:tabIdProp,getItem:getItemProp}=_b,props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.S0)(_b,["store","tabId","getItem"]);const context=(0,_chunks_4B73HROV_js__WEBPACK_IMPORTED_MODULE_4__.Nt)();store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__.kG)(store,!1);const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),id=(0,_chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__.Me)(props.id),[hasTabbableChildren,setHasTabbableChildren]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=ref.current;if(!element)return;const tabbable=(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__.SI)(element);setHasTabbableChildren(!!tabbable.length)}),[]);const getItem=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((item=>{const nextItem=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({},item),{id:id||item.id,tabId:tabIdProp});return getItemProp?getItemProp(nextItem):nextItem}),[id,tabIdProp,getItemProp]);props=(0,_chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__.OJ)(props,(element=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chunks_4B73HROV_js__WEBPACK_IMPORTED_MODULE_4__.A5,{value:store,children:element})),[store]);const tabId=store.panels.useState((()=>{var _a2;return tabIdProp||(null==(_a2=null==store?void 0:store.panels.item(id))?void 0:_a2.tabId)})),open=store.useState((state=>!!tabId&&state.selectedId===tabId));props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({id,role:"tabpanel","aria-labelledby":tabId||void 0},props),{ref:(0,_chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__.qq)(ref,props.ref)});const disclosure=(0,_chunks_SFCBA2JZ_js__WEBPACK_IMPORTED_MODULE_8__.M)({open});return props=(0,_chunks_KK7H3W2B_js__WEBPACK_IMPORTED_MODULE_9__.k)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({focusable:!hasTabbableChildren},props)),props=(0,_chunks_CLE7NTOY_js__WEBPACK_IMPORTED_MODULE_10__.fM)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({store:disclosure},props)),props=(0,_chunks_UH3I23HL_js__WEBPACK_IMPORTED_MODULE_11__.g)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({store:store.panels},props),{getItem}))})),TabPanel=(0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__.LM)((props=>{const htmlProps=useTabPanel(props);return(0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__.az)("div",htmlProps)}))},"./node_modules/@ariakit/react-core/esm/tab/tab.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Tab});var _chunks_QZLXIDNP_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/QZLXIDNP.js"),_chunks_4B73HROV_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4B73HROV.js"),_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js"),_chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js"),_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/I2VQ3XGR.js"),useTab=(0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((_a=>{var _b=_a,{store,accessibleWhenDisabled=!0,getItem:getItemProp}=_b,props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store","accessibleWhenDisabled","getItem"]);const context=(0,_chunks_4B73HROV_js__WEBPACK_IMPORTED_MODULE_3__.aq)();store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__.kG)(store,!1);const defaultId=(0,_chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__.Me)(),id=props.id||defaultId,dimmed=(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__.EE)(props),getItem=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((item=>{const nextItem=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.ih)({},item),{dimmed});return getItemProp?getItemProp(nextItem):nextItem}),[dimmed,getItemProp]),onClickProp=props.onClick,onClick=(0,_chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__.zX)((event=>{null==onClickProp||onClickProp(event),event.defaultPrevented||null==store||store.setSelectedId(id)})),panelId=store.panels.useState((state=>{var _a2;return null==(_a2=state.items.find((item=>item.tabId===id)))?void 0:_a2.id})),selected=store.useState((state=>!!id&&state.selectedId===id));return props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.ih)({id,role:"tab","aria-selected":selected,"aria-controls":panelId||void 0},props),{onClick}),props=(0,_chunks_QZLXIDNP_js__WEBPACK_IMPORTED_MODULE_6__.E)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store},props),{accessibleWhenDisabled,getItem,shouldRegisterItem:!!defaultId&&props.shouldRegisterItem}))})),Tab=(0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__.W5)((props=>{const htmlProps=useTab(props);return(0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__.az)("button",htmlProps)}))},"./packages/components/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YF:()=>useFloating,x7:()=>arrow});var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const arrow=options=>({name:"arrow",options,fn(state){const{element,padding}="function"==typeof options?options(state):options;return element&&function isRef(value){return{}.hasOwnProperty.call(value,"current")}(element)?null!=element.current?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element:element.current,padding}).fn(state):{}:element?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element,padding}).fn(state):{}}});var index="undefined"!=typeof document?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!{}.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function getDPR(element){if("undefined"==typeof window)return 1;return(element.ownerDocument.defaultView||window).devicePixelRatio||1}function roundByDPR(element,value){const dpr=getDPR(element);return Math.round(value*dpr)/dpr}function useLatestRef(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);return index((()=>{ref.current=value})),ref}function useFloating(options){void 0===options&&(options={});const{placement="bottom",strategy="absolute",middleware=[],platform,elements:{reference:externalReference,floating:externalFloating}={},transform=!0,whileElementsMounted,open}=options,[data,setData]=react__WEBPACK_IMPORTED_MODULE_0__.useState({x:0,y:0,strategy,placement,middlewareData:{},isPositioned:!1}),[latestMiddleware,setLatestMiddleware]=react__WEBPACK_IMPORTED_MODULE_0__.useState(middleware);deepEqual(latestMiddleware,middleware)||setLatestMiddleware(middleware);const[_reference,_setReference]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[_floating,_setFloating]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),setReference=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!=referenceRef.current&&(referenceRef.current=node,_setReference(node))}),[_setReference]),setFloating=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!==floatingRef.current&&(floatingRef.current=node,_setFloating(node))}),[_setFloating]),referenceEl=externalReference||_reference,floatingEl=externalFloating||_floating,referenceRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),floatingRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),dataRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(data),whileElementsMountedRef=useLatestRef(whileElementsMounted),platformRef=useLatestRef(platform),update=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(!referenceRef.current||!floatingRef.current)return;const config={placement,strategy,middleware:latestMiddleware};platformRef.current&&(config.platform=platformRef.current),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__.oo)(referenceRef.current,floatingRef.current,config).then((data=>{const fullData={...data,isPositioned:!0};isMountedRef.current&&!deepEqual(dataRef.current,fullData)&&(dataRef.current=fullData,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>{setData(fullData)})))}))}),[latestMiddleware,placement,strategy,platformRef]);index((()=>{!1===open&&dataRef.current.isPositioned&&(dataRef.current.isPositioned=!1,setData((data=>({...data,isPositioned:!1}))))}),[open]);const isMountedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]),index((()=>{if(referenceEl&&(referenceRef.current=referenceEl),floatingEl&&(floatingRef.current=floatingEl),referenceEl&&floatingEl){if(whileElementsMountedRef.current)return whileElementsMountedRef.current(referenceEl,floatingEl,update);update()}}),[referenceEl,floatingEl,update,whileElementsMountedRef]);const refs=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceRef,floating:floatingRef,setReference,setFloating})),[setReference,setFloating]),elements=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceEl,floating:floatingEl})),[referenceEl,floatingEl]),floatingStyles=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{const initialStyles={position:strategy,left:0,top:0};if(!elements.floating)return initialStyles;const x=roundByDPR(elements.floating,data.x),y=roundByDPR(elements.floating,data.y);return transform?{...initialStyles,transform:"translate("+x+"px, "+y+"px)",...getDPR(elements.floating)>=1.5&&{willChange:"transform"}}:{position:strategy,left:x,top:y}}),[strategy,transform,elements.floating,data.x,data.y]);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({...data,update,refs,elements,floatingStyles})),[data,update,refs,elements,floatingStyles])}},"./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>useReducedMotion});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs"),_state_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs");function useReducedMotion(){!_state_mjs__WEBPACK_IMPORTED_MODULE_1__.O.current&&(0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.A)();const[shouldReduceMotion]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_state_mjs__WEBPACK_IMPORTED_MODULE_1__.n.current);return shouldReduceMotion}}}]);