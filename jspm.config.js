System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  depCache: {
    "app/main.js": [
      "react",
      "react-dom",
      "./Root"
    ],
    "npm:react-dom@15.4.0.js": [
      "npm:react-dom@15.4.0/index.js"
    ],
    "app/Root.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "react",
      "react-router",
      "redux",
      "react-redux",
      "./base/Base",
      "redux-promise-middleware",
      "redux-thunk",
      "redux-logger",
      "./reducers/rootReducer"
    ],
    "npm:react@15.4.0.js": [
      "npm:react@15.4.0/react.js"
    ],
    "npm:react-dom@15.4.0/index.js": [
      "./lib/ReactDOM"
    ],
    "npm:babel-runtime@5.8.38/helpers/get.js": [
      "../core-js/object/get-own-property-descriptor"
    ],
    "npm:babel-runtime@5.8.38/helpers/inherits.js": [
      "../core-js/object/create",
      "../core-js/object/set-prototype-of"
    ],
    "npm:babel-runtime@5.8.38/helpers/create-class.js": [
      "../core-js/object/define-property"
    ],
    "npm:redux-logger@2.6.1.js": [
      "npm:redux-logger@2.6.1/lib/index.js"
    ],
    "npm:redux-thunk@2.0.1.js": [
      "npm:redux-thunk@2.0.1/lib/index.js"
    ],
    "app/reducers/rootReducer.js": [
      "redux",
      "../horizontalProductView/reducers/index.js",
      "../UIControl/reducers/root"
    ],
    "npm:react-router@2.3.0.js": [
      "npm:react-router@2.3.0/lib/index"
    ],
    "npm:redux@3.6.0.js": [
      "npm:redux@3.6.0/lib/index.js"
    ],
    "npm:react-redux@4.4.5.js": [
      "npm:react-redux@4.4.5/lib/index.js"
    ],
    "app/base/Base.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "react",
      "react-redux",
      "../svgGenerator/SvgGenerator",
      "../UIControl/UIControl",
      "axios"
    ],
    "npm:redux-promise-middleware@4.1.0.js": [
      "npm:redux-promise-middleware@4.1.0/dist/index.js"
    ],
    "npm:react@15.4.0/react.js": [
      "./lib/React"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js": [
      "core-js/library/fn/object/get-own-property-descriptor"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/create.js": [
      "core-js/library/fn/object/create"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js": [
      "core-js/library/fn/object/set-prototype-of"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/define-property.js": [
      "core-js/library/fn/object/define-property"
    ],
    "npm:react-dom@15.4.0/lib/ReactDOM.js": [
      "./ReactDOMComponentTree",
      "./ReactDefaultInjection",
      "./ReactMount",
      "./ReactReconciler",
      "./ReactUpdates",
      "./ReactVersion",
      "./findDOMNode",
      "./getHostComponentFromComposite",
      "./renderSubtreeIntoContainer",
      "fbjs/lib/warning",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactInstrumentation",
      "./ReactDOMUnknownPropertyHook",
      "./ReactDOMNullInputValuePropHook",
      "./ReactDOMInvalidARIAHook",
      "process"
    ],
    "app/UIControl/reducers/root.js": [
      "redux",
      "./uiStructure"
    ],
    "app/horizontalProductView/reducers/index.js": [
      "babel-runtime/helpers/extends"
    ],
    "npm:react-router@2.3.0/lib/index.js": [
      "./Router",
      "./Link",
      "./IndexLink",
      "./IndexRedirect",
      "./IndexRoute",
      "./Redirect",
      "./Route",
      "./History",
      "./Lifecycle",
      "./RouteContext",
      "./useRoutes",
      "./RouteUtils",
      "./RouterContext",
      "./RoutingContext",
      "./PropTypes",
      "./match",
      "./useRouterHistory",
      "./PatternUtils",
      "./applyRouterMiddleware",
      "./browserHistory",
      "./hashHistory",
      "./createMemoryHistory"
    ],
    "npm:react-redux@4.4.5/lib/index.js": [
      "./components/Provider",
      "./components/connect"
    ],
    "app/UIControl/UIControl.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "react",
      "react-redux",
      "./actions/index",
      "./components/Menu",
      "./components/presentation/Footer",
      "./components/presentation/Header",
      "./components/presentation/Landing",
      "./components/presentation/ContactDisplay"
    ],
    "app/svgGenerator/SvgGenerator.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "react",
      "uuid-token-generator"
    ],
    "npm:axios@0.15.2.js": [
      "npm:axios@0.15.2/index.js"
    ],
    "npm:redux@3.6.0/lib/index.js": [
      "./createStore",
      "./combineReducers",
      "./bindActionCreators",
      "./applyMiddleware",
      "./compose",
      "./utils/warning",
      "process"
    ],
    "npm:redux-promise-middleware@4.1.0/dist/index.js": [
      "./isPromise"
    ],
    "npm:react@15.4.0/lib/React.js": [
      "object-assign",
      "./ReactChildren",
      "./ReactComponent",
      "./ReactPureComponent",
      "./ReactClass",
      "./ReactDOMFactories",
      "./ReactElement",
      "./ReactPropTypes",
      "./ReactVersion",
      "./onlyChild",
      "fbjs/lib/warning",
      "./ReactElementValidator",
      "process"
    ],
    "npm:core-js@1.2.7/library/fn/object/get-own-property-descriptor.js": [
      "../../modules/$",
      "../../modules/es6.object.get-own-property-descriptor"
    ],
    "npm:core-js@1.2.7/library/fn/object/create.js": [
      "../../modules/$"
    ],
    "npm:core-js@1.2.7/library/fn/object/set-prototype-of.js": [
      "../../modules/es6.object.set-prototype-of",
      "../../modules/$.core"
    ],
    "npm:core-js@1.2.7/library/fn/object/define-property.js": [
      "../../modules/$"
    ],
    "npm:react-dom@15.4.0/lib/ReactDefaultInjection.js": [
      "./ARIADOMPropertyConfig",
      "./BeforeInputEventPlugin",
      "./ChangeEventPlugin",
      "./DefaultEventPluginOrder",
      "./EnterLeaveEventPlugin",
      "./HTMLDOMPropertyConfig",
      "./ReactComponentBrowserEnvironment",
      "./ReactDOMComponent",
      "./ReactDOMComponentTree",
      "./ReactDOMEmptyComponent",
      "./ReactDOMTreeTraversal",
      "./ReactDOMTextComponent",
      "./ReactDefaultBatchingStrategy",
      "./ReactEventListener",
      "./ReactInjection",
      "./ReactReconcileTransaction",
      "./SVGDOMPropertyConfig",
      "./SelectEventPlugin",
      "./SimpleEventPlugin"
    ],
    "npm:react-dom@15.4.0/lib/getHostComponentFromComposite.js": [
      "./ReactNodeTypes"
    ],
    "npm:react-dom@15.4.0/lib/renderSubtreeIntoContainer.js": [
      "./ReactMount"
    ],
    "github:jspm/nodelibs-process@0.1.2.js": [
      "github:jspm/nodelibs-process@0.1.2/index"
    ],
    "npm:fbjs@0.8.6/lib/warning.js": [
      "./emptyFunction",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactInstrumentation.js": [
      "./ReactDebugTool",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactDOMComponentTree.js": [
      "./reactProdInvariant",
      "./DOMProperty",
      "./ReactDOMComponentFlags",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactMount.js": [
      "./reactProdInvariant",
      "./DOMLazyTree",
      "./DOMProperty",
      "react/lib/React",
      "./ReactBrowserEventEmitter",
      "react/lib/ReactCurrentOwner",
      "./ReactDOMComponentTree",
      "./ReactDOMContainerInfo",
      "./ReactDOMFeatureFlags",
      "./ReactFeatureFlags",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "./ReactMarkupChecksum",
      "./ReactReconciler",
      "./ReactUpdateQueue",
      "./ReactUpdates",
      "fbjs/lib/emptyObject",
      "./instantiateReactComponent",
      "fbjs/lib/invariant",
      "./setInnerHTML",
      "./shouldUpdateReactComponent",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactUpdates.js": [
      "./reactProdInvariant",
      "object-assign",
      "./CallbackQueue",
      "./PooledClass",
      "./ReactFeatureFlags",
      "./ReactReconciler",
      "./Transaction",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactReconciler.js": [
      "./ReactRef",
      "./ReactInstrumentation",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/findDOMNode.js": [
      "./reactProdInvariant",
      "react/lib/ReactCurrentOwner",
      "./ReactDOMComponentTree",
      "./ReactInstanceMap",
      "./getHostComponentFromComposite",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactDOMUnknownPropertyHook.js": [
      "./DOMProperty",
      "./EventPluginRegistry",
      "react/lib/ReactComponentTreeHook",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactDOMNullInputValuePropHook.js": [
      "react/lib/ReactComponentTreeHook",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactDOMInvalidARIAHook.js": [
      "./DOMProperty",
      "react/lib/ReactComponentTreeHook",
      "fbjs/lib/warning",
      "process"
    ],
    "app/UIControl/components/presentation/Landing.js": [
      "react"
    ],
    "npm:babel-runtime@5.8.38/helpers/extends.js": [
      "../core-js/object/assign"
    ],
    "app/UIControl/reducers/uiStructure.js": [
      "babel-runtime/helpers/extends"
    ],
    "npm:react-router@2.3.0/lib/IndexLink.js": [
      "react",
      "./Link"
    ],
    "npm:react-router@2.3.0/lib/applyRouterMiddleware.js": [
      "react",
      "./RouterContext"
    ],
    "app/UIControl/components/Menu.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "react",
      "react-motion",
      "../actions/index",
      "react-redux",
      "./SplitView"
    ],
    "app/UIControl/components/presentation/Footer.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "react",
      "./DisplaySingleItem",
      "../../actions/index",
      "react-redux",
      "react-motion"
    ],
    "app/UIControl/components/presentation/Header.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "react",
      "../../actions/index",
      "react-redux",
      "react-motion"
    ],
    "npm:uuid-token-generator@0.5.0.js": [
      "npm:uuid-token-generator@0.5.0/index.js"
    ],
    "app/UIControl/components/presentation/ContactDisplay.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "react",
      "./DisplaySingleItem",
      "../../actions/index",
      "react-redux",
      "react-motion"
    ],
    "npm:axios@0.15.2/index.js": [
      "./lib/axios"
    ],
    "npm:redux@3.6.0/lib/applyMiddleware.js": [
      "./compose"
    ],
    "npm:redux@3.6.0/lib/createStore.js": [
      "lodash/isPlainObject",
      "symbol-observable"
    ],
    "npm:react-router@2.3.0/lib/Link.js": [
      "react",
      "./routerWarning",
      "./PropTypes",
      "process"
    ],
    "npm:react-router@2.3.0/lib/IndexRedirect.js": [
      "react",
      "./routerWarning",
      "invariant",
      "./Redirect",
      "./InternalPropTypes",
      "process"
    ],
    "npm:react-router@2.3.0/lib/IndexRoute.js": [
      "react",
      "./routerWarning",
      "invariant",
      "./RouteUtils",
      "./InternalPropTypes",
      "process"
    ],
    "npm:react-router@2.3.0/lib/Route.js": [
      "react",
      "invariant",
      "./RouteUtils",
      "./InternalPropTypes",
      "process"
    ],
    "npm:react-router@2.3.0/lib/History.js": [
      "./routerWarning",
      "./InternalPropTypes",
      "process"
    ],
    "npm:react-router@2.3.0/lib/Redirect.js": [
      "react",
      "invariant",
      "./RouteUtils",
      "./PatternUtils",
      "./InternalPropTypes",
      "process"
    ],
    "npm:react-router@2.3.0/lib/Lifecycle.js": [
      "./routerWarning",
      "react",
      "invariant",
      "process"
    ],
    "npm:react-router@2.3.0/lib/RouteContext.js": [
      "./routerWarning",
      "react",
      "process"
    ],
    "npm:react-router@2.3.0/lib/RouterContext.js": [
      "invariant",
      "react",
      "./deprecateObjectProperties",
      "./getRouteParams",
      "./RouteUtils",
      "./routerWarning",
      "process"
    ],
    "npm:react-router@2.3.0/lib/RouteUtils.js": [
      "react",
      "./routerWarning",
      "process"
    ],
    "npm:react-router@2.3.0/lib/RoutingContext.js": [
      "react",
      "./RouterContext",
      "./routerWarning",
      "process"
    ],
    "npm:react-router@2.3.0/lib/PropTypes.js": [
      "react",
      "./deprecateObjectProperties",
      "./InternalPropTypes",
      "./routerWarning",
      "process"
    ],
    "npm:react-router@2.3.0/lib/match.js": [
      "invariant",
      "./createMemoryHistory",
      "./createTransitionManager",
      "./RouteUtils",
      "./RouterUtils",
      "process"
    ],
    "npm:react-router@2.3.0/lib/PatternUtils.js": [
      "invariant",
      "process"
    ],
    "npm:react-redux@4.4.5/lib/components/Provider.js": [
      "react",
      "../utils/storeShape",
      "../utils/warning",
      "process"
    ],
    "npm:react-redux@4.4.5/lib/components/connect.js": [
      "react",
      "../utils/storeShape",
      "../utils/shallowEqual",
      "../utils/wrapActionCreators",
      "../utils/warning",
      "lodash/isPlainObject",
      "hoist-non-react-statics",
      "invariant",
      "process"
    ],
    "npm:redux@3.6.0/lib/combineReducers.js": [
      "./createStore",
      "lodash/isPlainObject",
      "./utils/warning",
      "process"
    ],
    "npm:react-router@2.3.0/lib/Router.js": [
      "history/lib/createHashHistory",
      "history/lib/useQueries",
      "react",
      "./createTransitionManager",
      "./InternalPropTypes",
      "./RouterContext",
      "./RouteUtils",
      "./RouterUtils",
      "./routerWarning",
      "process"
    ],
    "npm:react-router@2.3.0/lib/useRoutes.js": [
      "history/lib/useQueries",
      "./createTransitionManager",
      "./routerWarning",
      "process"
    ],
    "npm:react-router@2.3.0/lib/useRouterHistory.js": [
      "history/lib/useQueries",
      "history/lib/useBasename"
    ],
    "npm:react-router@2.3.0/lib/browserHistory.js": [
      "history/lib/createBrowserHistory",
      "./createRouterHistory"
    ],
    "npm:react-router@2.3.0/lib/hashHistory.js": [
      "history/lib/createHashHistory",
      "./createRouterHistory"
    ],
    "npm:react-router@2.3.0/lib/createMemoryHistory.js": [
      "history/lib/useQueries",
      "history/lib/useBasename",
      "history/lib/createMemoryHistory"
    ],
    "npm:object-assign@4.1.0.js": [
      "npm:object-assign@4.1.0/index"
    ],
    "npm:react@15.4.0/lib/ReactDOMFactories.js": [
      "./ReactElement",
      "./ReactElementValidator",
      "process"
    ],
    "npm:react@15.4.0/lib/ReactChildren.js": [
      "./PooledClass",
      "./ReactElement",
      "fbjs/lib/emptyFunction",
      "./traverseAllChildren"
    ],
    "npm:react@15.4.0/lib/ReactComponent.js": [
      "./reactProdInvariant",
      "./ReactNoopUpdateQueue",
      "./canDefineProperty",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.0/lib/ReactPureComponent.js": [
      "object-assign",
      "./ReactComponent",
      "./ReactNoopUpdateQueue",
      "fbjs/lib/emptyObject"
    ],
    "npm:react@15.4.0/lib/ReactClass.js": [
      "./reactProdInvariant",
      "object-assign",
      "./ReactComponent",
      "./ReactElement",
      "./ReactPropTypeLocationNames",
      "./ReactNoopUpdateQueue",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.0/lib/ReactElement.js": [
      "object-assign",
      "./ReactCurrentOwner",
      "fbjs/lib/warning",
      "./canDefineProperty",
      "./ReactElementSymbol",
      "process"
    ],
    "npm:react@15.4.0/lib/ReactPropTypes.js": [
      "./ReactElement",
      "./ReactPropTypeLocationNames",
      "./ReactPropTypesSecret",
      "fbjs/lib/emptyFunction",
      "./getIteratorFn",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.0/lib/onlyChild.js": [
      "./reactProdInvariant",
      "./ReactElement",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.4.0/lib/ReactElementValidator.js": [
      "./ReactCurrentOwner",
      "./ReactComponentTreeHook",
      "./ReactElement",
      "./checkReactTypeSpec",
      "./canDefineProperty",
      "./getIteratorFn",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:core-js@1.2.7/library/modules/es6.object.get-own-property-descriptor.js": [
      "./$.to-iobject",
      "./$.object-sap"
    ],
    "npm:core-js@1.2.7/library/modules/es6.object.set-prototype-of.js": [
      "./$.export",
      "./$.set-proto"
    ],
    "npm:react-dom@15.4.0/lib/EnterLeaveEventPlugin.js": [
      "./EventPropagators",
      "./ReactDOMComponentTree",
      "./SyntheticMouseEvent"
    ],
    "npm:react-dom@15.4.0/lib/HTMLDOMPropertyConfig.js": [
      "./DOMProperty"
    ],
    "npm:react-dom@15.4.0/lib/ReactInjection.js": [
      "./DOMProperty",
      "./EventPluginHub",
      "./EventPluginUtils",
      "./ReactComponentEnvironment",
      "./ReactEmptyComponent",
      "./ReactBrowserEventEmitter",
      "./ReactHostComponent",
      "./ReactUpdates"
    ],
    "npm:react-dom@15.4.0/lib/DOMLazyTree.js": [
      "./DOMNamespaces",
      "./setInnerHTML",
      "./createMicrosoftUnsafeLocalFunction",
      "./setTextContent"
    ],
    "npm:react-dom@15.4.0/lib/ReactMarkupChecksum.js": [
      "./adler32"
    ],
    "npm:react-dom@15.4.0/lib/ReactDOMEmptyComponent.js": [
      "object-assign",
      "./DOMLazyTree",
      "./ReactDOMComponentTree"
    ],
    "npm:react-dom@15.4.0/lib/ReactComponentBrowserEnvironment.js": [
      "./DOMChildrenOperations",
      "./ReactDOMIDOperations",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactReconcileTransaction.js": [
      "object-assign",
      "./CallbackQueue",
      "./PooledClass",
      "./ReactBrowserEventEmitter",
      "./ReactInputSelection",
      "./ReactInstrumentation",
      "./Transaction",
      "./ReactUpdateQueue",
      "process"
    ],
    "github:jspm/nodelibs-process@0.1.2/index.js": [
      "process"
    ],
    "npm:fbjs@0.8.6/lib/invariant.js": [
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactBrowserEventEmitter.js": [
      "object-assign",
      "./EventPluginRegistry",
      "./ReactEventEmitterMixin",
      "./ViewportMetrics",
      "./getVendorPrefixedEventName",
      "./isEventSupported",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactDOMContainerInfo.js": [
      "./validateDOMNesting",
      "process"
    ],
    "npm:fbjs@0.8.6/lib/emptyObject.js": [
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactRef.js": [
      "./ReactOwner",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/BeforeInputEventPlugin.js": [
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./FallbackCompositionState",
      "./SyntheticCompositionEvent",
      "./SyntheticInputEvent"
    ],
    "npm:react-dom@15.4.0/lib/ChangeEventPlugin.js": [
      "./EventPluginHub",
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "./SyntheticEvent",
      "./getEventTarget",
      "./isEventSupported",
      "./isTextInputElement",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactDOMComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "./AutoFocusUtils",
      "./CSSPropertyOperations",
      "./DOMLazyTree",
      "./DOMNamespaces",
      "./DOMProperty",
      "./DOMPropertyOperations",
      "./EventPluginHub",
      "./EventPluginRegistry",
      "./ReactBrowserEventEmitter",
      "./ReactDOMComponentFlags",
      "./ReactDOMComponentTree",
      "./ReactDOMInput",
      "./ReactDOMOption",
      "./ReactDOMSelect",
      "./ReactDOMTextarea",
      "./ReactInstrumentation",
      "./ReactMultiChild",
      "./ReactServerRenderingTransaction",
      "fbjs/lib/emptyFunction",
      "./escapeTextContentForBrowser",
      "fbjs/lib/invariant",
      "./isEventSupported",
      "fbjs/lib/shallowEqual",
      "./validateDOMNesting",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactDOMTreeTraversal.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactDOMTextComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "./DOMChildrenOperations",
      "./DOMLazyTree",
      "./ReactDOMComponentTree",
      "./escapeTextContentForBrowser",
      "fbjs/lib/invariant",
      "./validateDOMNesting",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactDefaultBatchingStrategy.js": [
      "object-assign",
      "./ReactUpdates",
      "./Transaction",
      "fbjs/lib/emptyFunction"
    ],
    "npm:react-dom@15.4.0/lib/ReactEventListener.js": [
      "object-assign",
      "fbjs/lib/EventListener",
      "fbjs/lib/ExecutionEnvironment",
      "./PooledClass",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "./getEventTarget",
      "fbjs/lib/getUnboundedScrollPosition",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/SelectEventPlugin.js": [
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactDOMComponentTree",
      "./ReactInputSelection",
      "./SyntheticEvent",
      "fbjs/lib/getActiveElement",
      "./isTextInputElement",
      "fbjs/lib/shallowEqual"
    ],
    "npm:react-dom@15.4.0/lib/SimpleEventPlugin.js": [
      "./reactProdInvariant",
      "fbjs/lib/EventListener",
      "./EventPropagators",
      "./ReactDOMComponentTree",
      "./SyntheticAnimationEvent",
      "./SyntheticClipboardEvent",
      "./SyntheticEvent",
      "./SyntheticFocusEvent",
      "./SyntheticKeyboardEvent",
      "./SyntheticMouseEvent",
      "./SyntheticDragEvent",
      "./SyntheticTouchEvent",
      "./SyntheticTransitionEvent",
      "./SyntheticUIEvent",
      "./SyntheticWheelEvent",
      "fbjs/lib/emptyFunction",
      "./getEventCharCode",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactNodeTypes.js": [
      "./reactProdInvariant",
      "react/lib/React",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactDebugTool.js": [
      "./ReactInvalidSetStateWarningHook",
      "./ReactHostOperationHistoryHook",
      "react/lib/ReactComponentTreeHook",
      "fbjs/lib/ExecutionEnvironment",
      "fbjs/lib/performanceNow",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/DOMProperty.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactUpdateQueue.js": [
      "./reactProdInvariant",
      "react/lib/ReactCurrentOwner",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "./ReactUpdates",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/instantiateReactComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "./ReactCompositeComponent",
      "./ReactEmptyComponent",
      "./ReactHostComponent",
      "./getNextDebugID",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/setInnerHTML.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./DOMNamespaces",
      "./createMicrosoftUnsafeLocalFunction",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/CallbackQueue.js": [
      "./reactProdInvariant",
      "./PooledClass",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/PooledClass.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/Transaction.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/EventPluginRegistry.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.4.0/lib/ReactComponentTreeHook.js": [
      "./reactProdInvariant",
      "./ReactCurrentOwner",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:lodash@4.16.4/isPlainObject.js": [
      "./_getPrototype",
      "./isObjectLike"
    ],
    "npm:symbol-observable@1.0.4.js": [
      "npm:symbol-observable@1.0.4/index"
    ],
    "npm:hoist-non-react-statics@1.2.0.js": [
      "npm:hoist-non-react-statics@1.2.0/index.js"
    ],
    "npm:react-router@2.3.0/lib/InternalPropTypes.js": [
      "react"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/assign.js": [
      "core-js/library/fn/object/assign"
    ],
    "npm:react-motion@0.4.5.js": [
      "npm:react-motion@0.4.5/lib/react-motion.js"
    ],
    "app/UIControl/components/SplitView.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "react",
      "../actions/index",
      "react-motion",
      "./presentation/DisplayContain",
      "./presentation/GallerySubText",
      "./ContentGallery"
    ],
    "npm:axios@0.15.2/lib/axios.js": [
      "./utils",
      "./helpers/bind",
      "./core/Axios",
      "./cancel/Cancel",
      "./cancel/CancelToken",
      "./cancel/isCancel",
      "./helpers/spread"
    ],
    "npm:invariant@2.2.1.js": [
      "npm:invariant@2.2.1/browser.js"
    ],
    "npm:react-router@2.3.0/lib/getRouteParams.js": [
      "./PatternUtils"
    ],
    "npm:history@2.0.2/lib/useBasename.js": [
      "./ExecutionEnvironment",
      "./PathUtils",
      "./runTransitionHook",
      "./deprecate"
    ],
    "npm:react-router@2.3.0/lib/createRouterHistory.js": [
      "./useRouterHistory"
    ],
    "npm:uuid-token-generator@0.5.0/index.js": [
      "node-uuid",
      "buffer"
    ],
    "npm:react-router@2.3.0/lib/routerWarning.js": [
      "warning",
      "process"
    ],
    "npm:react-router@2.3.0/lib/deprecateObjectProperties.js": [
      "./routerWarning",
      "process"
    ],
    "npm:react-router@2.3.0/lib/RouterUtils.js": [
      "./deprecateObjectProperties",
      "process"
    ],
    "npm:react-redux@4.4.5/lib/utils/storeShape.js": [
      "react"
    ],
    "npm:react-redux@4.4.5/lib/utils/wrapActionCreators.js": [
      "redux"
    ],
    "npm:history@2.0.2/lib/createHashHistory.js": [
      "warning",
      "invariant",
      "./Actions",
      "./PathUtils",
      "./ExecutionEnvironment",
      "./DOMUtils",
      "./DOMStateStorage",
      "./createDOMHistory",
      "process"
    ],
    "npm:history@2.0.2/lib/useQueries.js": [
      "warning",
      "query-string",
      "./runTransitionHook",
      "./PathUtils",
      "./deprecate",
      "process"
    ],
    "npm:history@2.0.2/lib/createBrowserHistory.js": [
      "invariant",
      "./Actions",
      "./PathUtils",
      "./ExecutionEnvironment",
      "./DOMUtils",
      "./DOMStateStorage",
      "./createDOMHistory",
      "process"
    ],
    "npm:history@2.0.2/lib/createMemoryHistory.js": [
      "warning",
      "invariant",
      "./PathUtils",
      "./Actions",
      "./createHistory",
      "process"
    ],
    "npm:react-router@2.3.0/lib/createTransitionManager.js": [
      "./routerWarning",
      "history/lib/Actions",
      "./computeChangedRoutes",
      "./TransitionUtils",
      "./isActive",
      "./getComponents",
      "./matchRoutes",
      "process"
    ],
    "npm:react@15.4.0/lib/canDefineProperty.js": [
      "process"
    ],
    "npm:react@15.4.0/lib/ReactPropTypeLocationNames.js": [
      "process"
    ],
    "npm:react@15.4.0/lib/PooledClass.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.4.0/lib/traverseAllChildren.js": [
      "./reactProdInvariant",
      "./ReactCurrentOwner",
      "./ReactElementSymbol",
      "./getIteratorFn",
      "fbjs/lib/invariant",
      "./KeyEscapeUtils",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.0/lib/ReactNoopUpdateQueue.js": [
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.0/lib/checkReactTypeSpec.js": [
      "./reactProdInvariant",
      "./ReactPropTypeLocationNames",
      "./ReactPropTypesSecret",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "./ReactComponentTreeHook",
      "process"
    ],
    "npm:core-js@1.2.7/library/modules/$.object-sap.js": [
      "./$.export",
      "./$.core",
      "./$.fails"
    ],
    "npm:core-js@1.2.7/library/modules/$.to-iobject.js": [
      "./$.iobject",
      "./$.defined"
    ],
    "npm:core-js@1.2.7/library/modules/$.export.js": [
      "./$.global",
      "./$.core",
      "./$.ctx"
    ],
    "npm:core-js@1.2.7/library/modules/$.set-proto.js": [
      "./$",
      "./$.is-object",
      "./$.an-object",
      "./$.ctx"
    ],
    "npm:react-dom@15.4.0/lib/SyntheticMouseEvent.js": [
      "./SyntheticUIEvent",
      "./ViewportMetrics",
      "./getEventModifierState"
    ],
    "npm:process@0.11.9.js": [
      "npm:process@0.11.9/browser.js"
    ],
    "npm:react-dom@15.4.0/lib/ReactEventEmitterMixin.js": [
      "./EventPluginHub"
    ],
    "npm:react-dom@15.4.0/lib/SyntheticCompositionEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react-dom@15.4.0/lib/SyntheticInputEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react-dom@15.4.0/lib/SyntheticAnimationEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react-dom@15.4.0/lib/SyntheticClipboardEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react-dom@15.4.0/lib/SyntheticFocusEvent.js": [
      "./SyntheticUIEvent"
    ],
    "npm:react-dom@15.4.0/lib/SyntheticKeyboardEvent.js": [
      "./SyntheticUIEvent",
      "./getEventCharCode",
      "./getEventKey",
      "./getEventModifierState"
    ],
    "npm:react-dom@15.4.0/lib/SyntheticDragEvent.js": [
      "./SyntheticMouseEvent"
    ],
    "npm:react-dom@15.4.0/lib/SyntheticTouchEvent.js": [
      "./SyntheticUIEvent",
      "./getEventModifierState"
    ],
    "npm:react-dom@15.4.0/lib/SyntheticTransitionEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react-dom@15.4.0/lib/SyntheticUIEvent.js": [
      "./SyntheticEvent",
      "./getEventTarget"
    ],
    "npm:react-dom@15.4.0/lib/SyntheticWheelEvent.js": [
      "./SyntheticMouseEvent"
    ],
    "npm:fbjs@0.8.6/lib/performanceNow.js": [
      "./performance"
    ],
    "npm:react-dom@15.4.0/lib/FallbackCompositionState.js": [
      "object-assign",
      "./PooledClass",
      "./getTextContentAccessor"
    ],
    "npm:react-dom@15.4.0/lib/DOMChildrenOperations.js": [
      "./DOMLazyTree",
      "./Danger",
      "./ReactDOMComponentTree",
      "./ReactInstrumentation",
      "./createMicrosoftUnsafeLocalFunction",
      "./setInnerHTML",
      "./setTextContent",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactDOMIDOperations.js": [
      "./DOMChildrenOperations",
      "./ReactDOMComponentTree",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactServerRenderingTransaction.js": [
      "object-assign",
      "./PooledClass",
      "./Transaction",
      "./ReactInstrumentation",
      "./ReactServerUpdateQueue",
      "process"
    ],
    "npm:fbjs@0.8.6/lib/EventListener.js": [
      "./emptyFunction",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/EventPropagators.js": [
      "./EventPluginHub",
      "./EventPluginUtils",
      "./accumulateInto",
      "./forEachAccumulated",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/EventPluginHub.js": [
      "./reactProdInvariant",
      "./EventPluginRegistry",
      "./EventPluginUtils",
      "./ReactErrorUtils",
      "./accumulateInto",
      "./forEachAccumulated",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/EventPluginUtils.js": [
      "./reactProdInvariant",
      "./ReactErrorUtils",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactComponentEnvironment.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactHostComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/setTextContent.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./escapeTextContentForBrowser",
      "./setInnerHTML"
    ],
    "npm:react-dom@15.4.0/lib/ReactInputSelection.js": [
      "./ReactDOMSelection",
      "fbjs/lib/containsNode",
      "fbjs/lib/focusNode",
      "fbjs/lib/getActiveElement"
    ],
    "npm:react-dom@15.4.0/lib/getVendorPrefixedEventName.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react-dom@15.4.0/lib/isEventSupported.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react-dom@15.4.0/lib/validateDOMNesting.js": [
      "object-assign",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactOwner.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/SyntheticEvent.js": [
      "object-assign",
      "./PooledClass",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/AutoFocusUtils.js": [
      "./ReactDOMComponentTree",
      "fbjs/lib/focusNode"
    ],
    "npm:react-dom@15.4.0/lib/CSSPropertyOperations.js": [
      "./CSSProperty",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactInstrumentation",
      "fbjs/lib/camelizeStyleName",
      "./dangerousStyleValue",
      "fbjs/lib/hyphenateStyleName",
      "fbjs/lib/memoizeStringOnly",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/DOMPropertyOperations.js": [
      "./DOMProperty",
      "./ReactDOMComponentTree",
      "./ReactInstrumentation",
      "./quoteAttributeValueForBrowser",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactDOMInput.js": [
      "./reactProdInvariant",
      "object-assign",
      "./DOMPropertyOperations",
      "./LinkedValueUtils",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactDOMOption.js": [
      "object-assign",
      "react/lib/React",
      "./ReactDOMComponentTree",
      "./ReactDOMSelect",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactDOMSelect.js": [
      "object-assign",
      "./LinkedValueUtils",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactDOMTextarea.js": [
      "./reactProdInvariant",
      "object-assign",
      "./LinkedValueUtils",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactMultiChild.js": [
      "./reactProdInvariant",
      "./ReactComponentEnvironment",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "react/lib/ReactCurrentOwner",
      "./ReactReconciler",
      "./ReactChildReconciler",
      "fbjs/lib/emptyFunction",
      "./flattenChildren",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactInvalidSetStateWarningHook.js": [
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactCompositeComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "react/lib/React",
      "./ReactComponentEnvironment",
      "react/lib/ReactCurrentOwner",
      "./ReactErrorUtils",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "./ReactNodeTypes",
      "./ReactReconciler",
      "./checkReactTypeSpec",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/shallowEqual",
      "./shouldUpdateReactComponent",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:lodash@4.16.4/_getPrototype.js": [
      "./_overArg"
    ],
    "npm:symbol-observable@1.0.4/index.js": [
      "./lib/index"
    ],
    "app/UIControl/components/presentation/DisplayContain.js": [
      "react",
      "./Display"
    ],
    "app/UIControl/components/presentation/GallerySubText.js": [
      "react"
    ],
    "npm:core-js@1.2.7/library/fn/object/assign.js": [
      "../../modules/es6.object.assign",
      "../../modules/$.core"
    ],
    "npm:react-motion@0.4.5/lib/react-motion.js": [
      "./Motion",
      "./StaggeredMotion",
      "./TransitionMotion",
      "./spring",
      "./presets",
      "./reorderKeys"
    ],
    "app/UIControl/components/ContentGallery.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "react",
      "react-motion",
      "./presentation/GallerySubText"
    ],
    "npm:axios@0.15.2/lib/utils.js": [
      "./helpers/bind"
    ],
    "npm:axios@0.15.2/lib/core/Axios.js": [
      "../defaults",
      "../utils",
      "./InterceptorManager",
      "./dispatchRequest",
      "../helpers/isAbsoluteURL",
      "../helpers/combineURLs"
    ],
    "npm:axios@0.15.2/lib/cancel/CancelToken.js": [
      "./Cancel"
    ],
    "npm:node-uuid@1.4.7.js": [
      "npm:node-uuid@1.4.7/uuid.js"
    ],
    "github:jspm/nodelibs-buffer@0.1.0.js": [
      "github:jspm/nodelibs-buffer@0.1.0/index"
    ],
    "npm:warning@2.1.0.js": [
      "npm:warning@2.1.0/browser.js"
    ],
    "npm:query-string@3.0.3.js": [
      "npm:query-string@3.0.3/index"
    ],
    "npm:react-router@2.3.0/lib/computeChangedRoutes.js": [
      "./PatternUtils"
    ],
    "npm:react-router@2.3.0/lib/isActive.js": [
      "./PatternUtils"
    ],
    "npm:invariant@2.2.1/browser.js": [
      "process"
    ],
    "npm:history@2.0.2/lib/PathUtils.js": [
      "warning",
      "process"
    ],
    "npm:history@2.0.2/lib/deprecate.js": [
      "warning",
      "process"
    ],
    "npm:history@2.0.2/lib/runTransitionHook.js": [
      "warning",
      "process"
    ],
    "npm:history@2.0.2/lib/DOMStateStorage.js": [
      "warning",
      "process"
    ],
    "npm:history@2.0.2/lib/createDOMHistory.js": [
      "invariant",
      "./ExecutionEnvironment",
      "./DOMUtils",
      "./createHistory",
      "process"
    ],
    "npm:history@2.0.2/lib/createHistory.js": [
      "warning",
      "deep-equal",
      "./PathUtils",
      "./AsyncUtils",
      "./Actions",
      "./createLocation",
      "./runTransitionHook",
      "./deprecate",
      "process"
    ],
    "npm:react-router@2.3.0/lib/TransitionUtils.js": [
      "./AsyncUtils",
      "./routerWarning",
      "process"
    ],
    "npm:react-router@2.3.0/lib/getComponents.js": [
      "./AsyncUtils",
      "./deprecateObjectProperties",
      "./routerWarning",
      "process"
    ],
    "npm:react-router@2.3.0/lib/matchRoutes.js": [
      "./routerWarning",
      "./AsyncUtils",
      "./PatternUtils",
      "./RouteUtils",
      "process"
    ],
    "npm:core-js@1.2.7/library/modules/$.iobject.js": [
      "./$.cof"
    ],
    "npm:core-js@1.2.7/library/modules/$.ctx.js": [
      "./$.a-function"
    ],
    "npm:core-js@1.2.7/library/modules/$.an-object.js": [
      "./$.is-object"
    ],
    "npm:react-dom@15.4.0/lib/getEventKey.js": [
      "./getEventCharCode"
    ],
    "npm:fbjs@0.8.6/lib/performance.js": [
      "./ExecutionEnvironment"
    ],
    "npm:fbjs@0.8.6/lib/containsNode.js": [
      "./isTextNode"
    ],
    "npm:fbjs@0.8.6/lib/camelizeStyleName.js": [
      "./camelize"
    ],
    "npm:fbjs@0.8.6/lib/hyphenateStyleName.js": [
      "./hyphenate"
    ],
    "npm:react-dom@15.4.0/lib/quoteAttributeValueForBrowser.js": [
      "./escapeTextContentForBrowser"
    ],
    "npm:react-dom@15.4.0/lib/ReactErrorUtils.js": [
      "process"
    ],
    "npm:react-dom@15.4.0/lib/getTextContentAccessor.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react-dom@15.4.0/lib/Danger.js": [
      "./reactProdInvariant",
      "./DOMLazyTree",
      "fbjs/lib/ExecutionEnvironment",
      "fbjs/lib/createNodesFromMarkup",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactServerUpdateQueue.js": [
      "./ReactUpdateQueue",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/accumulateInto.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactDOMSelection.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./getNodeForCharacterOffset",
      "./getTextContentAccessor"
    ],
    "npm:react-dom@15.4.0/lib/dangerousStyleValue.js": [
      "./CSSProperty",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/LinkedValueUtils.js": [
      "./reactProdInvariant",
      "react/lib/React",
      "./ReactPropTypesSecret",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactChildReconciler.js": [
      "./ReactReconciler",
      "./instantiateReactComponent",
      "./KeyEscapeUtils",
      "./shouldUpdateReactComponent",
      "./traverseAllChildren",
      "fbjs/lib/warning",
      "react/lib/ReactComponentTreeHook",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/checkReactTypeSpec.js": [
      "./reactProdInvariant",
      "./ReactPropTypeLocationNames",
      "./ReactPropTypesSecret",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "react/lib/ReactComponentTreeHook",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/flattenChildren.js": [
      "./KeyEscapeUtils",
      "./traverseAllChildren",
      "fbjs/lib/warning",
      "react/lib/ReactComponentTreeHook",
      "process"
    ],
    "npm:symbol-observable@1.0.4/lib/index.js": [
      "./ponyfill"
    ],
    "npm:deep-equal@1.0.1.js": [
      "npm:deep-equal@1.0.1/index.js"
    ],
    "app/UIControl/components/presentation/Display.js": [
      "react",
      "./CodePenHandler",
      "./ImageSlider"
    ],
    "npm:core-js@1.2.7/library/modules/es6.object.assign.js": [
      "./$.export",
      "./$.object-assign"
    ],
    "npm:react-motion@0.4.5/lib/spring.js": [
      "./presets"
    ],
    "npm:axios@0.15.2/lib/core/InterceptorManager.js": [
      "../utils"
    ],
    "npm:axios@0.15.2/lib/core/dispatchRequest.js": [
      "../utils",
      "./transformData",
      "../cancel/isCancel",
      "../defaults"
    ],
    "npm:query-string@3.0.3/index.js": [
      "strict-uri-encode"
    ],
    "npm:react-motion@0.4.5/lib/Motion.js": [
      "./mapToZero",
      "./stripStyle",
      "./stepper",
      "performance-now",
      "raf",
      "./shouldStopAnimation",
      "react"
    ],
    "npm:react-motion@0.4.5/lib/StaggeredMotion.js": [
      "./mapToZero",
      "./stripStyle",
      "./stepper",
      "performance-now",
      "raf",
      "./shouldStopAnimation",
      "react"
    ],
    "npm:react-motion@0.4.5/lib/TransitionMotion.js": [
      "./mapToZero",
      "./stripStyle",
      "./stepper",
      "./mergeDiff",
      "performance-now",
      "raf",
      "./shouldStopAnimation",
      "react"
    ],
    "npm:react-motion@0.4.5/lib/reorderKeys.js": [
      "process"
    ],
    "npm:axios@0.15.2/lib/defaults.js": [
      "./utils",
      "./helpers/normalizeHeaderName",
      "./adapters/xhr",
      "process"
    ],
    "npm:node-uuid@1.4.7/uuid.js": [
      "crypto",
      "buffer"
    ],
    "github:jspm/nodelibs-buffer@0.1.0/index.js": [
      "buffer"
    ],
    "npm:warning@2.1.0/browser.js": [
      "process"
    ],
    "npm:history@2.0.2/lib/createLocation.js": [
      "warning",
      "./Actions",
      "./PathUtils",
      "process"
    ],
    "npm:fbjs@0.8.6/lib/isTextNode.js": [
      "./isNode"
    ],
    "npm:fbjs@0.8.6/lib/createNodesFromMarkup.js": [
      "./ExecutionEnvironment",
      "./createArrayFromMixed",
      "./getMarkupWrap",
      "./invariant",
      "process"
    ],
    "npm:react-dom@15.4.0/lib/ReactPropTypeLocationNames.js": [
      "process"
    ],
    "npm:react-dom@15.4.0/lib/traverseAllChildren.js": [
      "./reactProdInvariant",
      "react/lib/ReactCurrentOwner",
      "./ReactElementSymbol",
      "./getIteratorFn",
      "fbjs/lib/invariant",
      "./KeyEscapeUtils",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:deep-equal@1.0.1/index.js": [
      "./lib/keys",
      "./lib/is_arguments"
    ],
    "npm:strict-uri-encode@1.1.0.js": [
      "npm:strict-uri-encode@1.1.0/index"
    ],
    "app/UIControl/components/presentation/CodePenHandler.js": [
      "react"
    ],
    "app/UIControl/components/presentation/ImageSlider.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "react",
      "classnames"
    ],
    "npm:core-js@1.2.7/library/modules/$.object-assign.js": [
      "./$",
      "./$.to-object",
      "./$.iobject",
      "./$.fails"
    ],
    "npm:axios@0.15.2/lib/core/transformData.js": [
      "../utils"
    ],
    "npm:performance-now@0.2.0.js": [
      "npm:performance-now@0.2.0/lib/performance-now.js"
    ],
    "npm:raf@3.3.0.js": [
      "npm:raf@3.3.0/index.js"
    ],
    "github:jspm/nodelibs-crypto@0.1.0.js": [
      "github:jspm/nodelibs-crypto@0.1.0/index"
    ],
    "npm:axios@0.15.2/lib/helpers/normalizeHeaderName.js": [
      "../utils",
      "process"
    ],
    "npm:axios@0.15.2/lib/adapters/xhr.js": [
      "../utils",
      "../core/settle",
      "../helpers/buildURL",
      "../helpers/parseHeaders",
      "../helpers/isURLSameOrigin",
      "../core/createError",
      "../helpers/btoa",
      "../helpers/cookies",
      "process"
    ],
    "npm:buffer@3.6.0.js": [
      "npm:buffer@3.6.0/index.js"
    ],
    "npm:fbjs@0.8.6/lib/getMarkupWrap.js": [
      "./ExecutionEnvironment",
      "./invariant",
      "process"
    ],
    "npm:fbjs@0.8.6/lib/createArrayFromMixed.js": [
      "./invariant",
      "process"
    ],
    "npm:classnames@2.2.5.js": [
      "npm:classnames@2.2.5/index.js"
    ],
    "npm:core-js@1.2.7/library/modules/$.to-object.js": [
      "./$.defined"
    ],
    "npm:axios@0.15.2/lib/core/settle.js": [
      "./createError"
    ],
    "npm:axios@0.15.2/lib/helpers/buildURL.js": [
      "../utils"
    ],
    "npm:axios@0.15.2/lib/helpers/parseHeaders.js": [
      "../utils"
    ],
    "npm:axios@0.15.2/lib/helpers/isURLSameOrigin.js": [
      "../utils"
    ],
    "npm:axios@0.15.2/lib/core/createError.js": [
      "./enhanceError"
    ],
    "npm:axios@0.15.2/lib/helpers/cookies.js": [
      "../utils"
    ],
    "npm:raf@3.3.0/index.js": [
      "performance-now"
    ],
    "npm:performance-now@0.2.0/lib/performance-now.js": [
      "process"
    ],
    "github:jspm/nodelibs-crypto@0.1.0/index.js": [
      "crypto-browserify"
    ],
    "npm:buffer@3.6.0/index.js": [
      "base64-js",
      "ieee754",
      "isarray"
    ],
    "npm:crypto-browserify@3.11.0.js": [
      "npm:crypto-browserify@3.11.0/index"
    ],
    "npm:ieee754@1.1.8.js": [
      "npm:ieee754@1.1.8/index.js"
    ],
    "npm:base64-js@0.0.8.js": [
      "npm:base64-js@0.0.8/lib/b64.js"
    ],
    "npm:isarray@1.0.0.js": [
      "npm:isarray@1.0.0/index.js"
    ],
    "npm:crypto-browserify@3.11.0/index.js": [
      "randombytes",
      "create-hash",
      "create-hmac",
      "browserify-sign/algos",
      "pbkdf2",
      "browserify-cipher",
      "diffie-hellman",
      "browserify-sign",
      "create-ecdh",
      "public-encrypt"
    ],
    "npm:randombytes@2.0.3.js": [
      "npm:randombytes@2.0.3/browser.js"
    ],
    "npm:create-hash@1.1.2.js": [
      "npm:create-hash@1.1.2/browser.js"
    ],
    "npm:create-hmac@1.1.4.js": [
      "npm:create-hmac@1.1.4/browser.js"
    ],
    "npm:pbkdf2@3.0.9.js": [
      "npm:pbkdf2@3.0.9/browser.js"
    ],
    "npm:browserify-cipher@1.0.0.js": [
      "npm:browserify-cipher@1.0.0/browser.js"
    ],
    "npm:browserify-sign@4.0.0/algos.js": [
      "buffer"
    ],
    "npm:diffie-hellman@5.0.2.js": [
      "npm:diffie-hellman@5.0.2/browser.js"
    ],
    "npm:browserify-sign@4.0.0.js": [
      "npm:browserify-sign@4.0.0/browser.js"
    ],
    "npm:create-ecdh@4.0.0.js": [
      "npm:create-ecdh@4.0.0/browser.js"
    ],
    "npm:public-encrypt@4.0.0.js": [
      "npm:public-encrypt@4.0.0/browser.js"
    ],
    "npm:create-hash@1.1.2/browser.js": [
      "inherits",
      "./md5",
      "ripemd160",
      "sha.js",
      "cipher-base",
      "buffer"
    ],
    "npm:randombytes@2.0.3/browser.js": [
      "buffer",
      "process"
    ],
    "npm:pbkdf2@3.0.9/browser.js": [
      "create-hmac",
      "./precondition",
      "buffer",
      "process"
    ],
    "npm:create-hmac@1.1.4/browser.js": [
      "create-hash/browser",
      "inherits",
      "stream",
      "buffer"
    ],
    "npm:browserify-cipher@1.0.0/browser.js": [
      "evp_bytestokey",
      "browserify-aes/browser",
      "browserify-des",
      "browserify-des/modes",
      "browserify-aes/modes"
    ],
    "npm:public-encrypt@4.0.0/browser.js": [
      "./publicEncrypt",
      "./privateDecrypt"
    ],
    "npm:browserify-sign@4.0.0/browser.js": [
      "./algos",
      "create-hash",
      "inherits",
      "./sign",
      "stream",
      "./verify",
      "buffer"
    ],
    "npm:create-ecdh@4.0.0/browser.js": [
      "elliptic",
      "bn.js",
      "buffer"
    ],
    "npm:diffie-hellman@5.0.2/browser.js": [
      "./lib/generatePrime",
      "./lib/primes.json!systemjs-json",
      "./lib/dh",
      "buffer"
    ],
    "npm:inherits@2.0.1.js": [
      "npm:inherits@2.0.1/inherits_browser.js"
    ],
    "npm:ripemd160@1.0.1.js": [
      "npm:ripemd160@1.0.1/lib/ripemd160.js"
    ],
    "npm:create-hash@1.1.2/md5.js": [
      "./helpers"
    ],
    "npm:sha.js@2.4.8.js": [
      "npm:sha.js@2.4.8/index"
    ],
    "npm:cipher-base@1.0.3.js": [
      "npm:cipher-base@1.0.3/index.js"
    ],
    "github:jspm/nodelibs-stream@0.1.0.js": [
      "github:jspm/nodelibs-stream@0.1.0/index"
    ],
    "npm:evp_bytestokey@1.0.0.js": [
      "npm:evp_bytestokey@1.0.0/index.js"
    ],
    "npm:browserify-aes@1.0.6/browser.js": [
      "./encrypter",
      "./decrypter",
      "./modes"
    ],
    "npm:browserify-des@1.0.0.js": [
      "npm:browserify-des@1.0.0/index.js"
    ],
    "npm:elliptic@6.3.2.js": [
      "npm:elliptic@6.3.2/lib/elliptic.js"
    ],
    "npm:bn.js@4.11.6.js": [
      "npm:bn.js@4.11.6/lib/bn.js"
    ],
    "npm:public-encrypt@4.0.0/publicEncrypt.js": [
      "parse-asn1",
      "randombytes",
      "create-hash",
      "./mgf",
      "./xor",
      "bn.js",
      "./withPublic",
      "browserify-rsa",
      "buffer"
    ],
    "npm:public-encrypt@4.0.0/privateDecrypt.js": [
      "parse-asn1",
      "./mgf",
      "./xor",
      "bn.js",
      "browserify-rsa",
      "create-hash",
      "./withPublic",
      "buffer"
    ],
    "npm:browserify-sign@4.0.0/verify.js": [
      "./curves",
      "elliptic",
      "parse-asn1",
      "bn.js",
      "buffer"
    ],
    "npm:browserify-sign@4.0.0/sign.js": [
      "create-hmac",
      "browserify-rsa",
      "./curves",
      "elliptic",
      "parse-asn1",
      "bn.js",
      "buffer"
    ],
    "npm:diffie-hellman@5.0.2/lib/generatePrime.js": [
      "randombytes",
      "bn.js",
      "miller-rabin"
    ],
    "npm:diffie-hellman@5.0.2/lib/dh.js": [
      "bn.js",
      "miller-rabin",
      "./generatePrime",
      "randombytes",
      "buffer"
    ],
    "npm:create-hash@1.1.2/helpers.js": [
      "buffer"
    ],
    "npm:ripemd160@1.0.1/lib/ripemd160.js": [
      "buffer",
      "process"
    ],
    "npm:sha.js@2.4.8/index.js": [
      "./sha",
      "./sha1",
      "./sha224",
      "./sha256",
      "./sha384",
      "./sha512"
    ],
    "npm:cipher-base@1.0.3/index.js": [
      "stream",
      "inherits",
      "string_decoder",
      "buffer"
    ],
    "github:jspm/nodelibs-stream@0.1.0/index.js": [
      "stream-browserify"
    ],
    "npm:browserify-aes@1.0.6/encrypter.js": [
      "./aes",
      "cipher-base",
      "inherits",
      "./modes",
      "evp_bytestokey",
      "./streamCipher",
      "./authCipher",
      "./modes/ecb",
      "./modes/cbc",
      "./modes/cfb",
      "./modes/cfb8",
      "./modes/cfb1",
      "./modes/ofb",
      "./modes/ctr",
      "buffer"
    ],
    "npm:browserify-aes@1.0.6/decrypter.js": [
      "./aes",
      "cipher-base",
      "inherits",
      "./modes",
      "./streamCipher",
      "./authCipher",
      "evp_bytestokey",
      "./modes/ecb",
      "./modes/cbc",
      "./modes/cfb",
      "./modes/cfb8",
      "./modes/cfb1",
      "./modes/ofb",
      "./modes/ctr",
      "buffer"
    ],
    "npm:browserify-des@1.0.0/index.js": [
      "cipher-base",
      "des.js",
      "inherits",
      "buffer"
    ],
    "npm:evp_bytestokey@1.0.0/index.js": [
      "create-hash/md5",
      "buffer"
    ],
    "npm:parse-asn1@5.0.0.js": [
      "npm:parse-asn1@5.0.0/index.js"
    ],
    "npm:browserify-rsa@4.0.1.js": [
      "npm:browserify-rsa@4.0.1/index.js"
    ],
    "npm:miller-rabin@4.0.0.js": [
      "npm:miller-rabin@4.0.0/lib/mr.js"
    ],
    "npm:bn.js@4.11.6/lib/bn.js": [
      "buffer"
    ],
    "npm:public-encrypt@4.0.0/mgf.js": [
      "create-hash",
      "buffer"
    ],
    "npm:public-encrypt@4.0.0/withPublic.js": [
      "bn.js",
      "buffer"
    ],
    "npm:elliptic@6.3.2/lib/elliptic.js": [
      "../package.json!systemjs-json",
      "./elliptic/utils",
      "brorand",
      "./elliptic/hmac-drbg",
      "./elliptic/curve/index",
      "./elliptic/curves",
      "./elliptic/ec/index",
      "./elliptic/eddsa/index"
    ],
    "github:jspm/nodelibs-string_decoder@0.1.0.js": [
      "github:jspm/nodelibs-string_decoder@0.1.0/index"
    ],
    "npm:stream-browserify@1.0.0.js": [
      "npm:stream-browserify@1.0.0/index.js"
    ],
    "npm:des.js@1.0.0.js": [
      "npm:des.js@1.0.0/lib/des.js"
    ],
    "npm:sha.js@2.4.8/sha.js": [
      "inherits",
      "./hash",
      "buffer"
    ],
    "npm:sha.js@2.4.8/sha224.js": [
      "inherits",
      "./sha256",
      "./hash",
      "buffer"
    ],
    "npm:sha.js@2.4.8/sha1.js": [
      "inherits",
      "./hash",
      "buffer"
    ],
    "npm:sha.js@2.4.8/sha384.js": [
      "inherits",
      "./sha512",
      "./hash",
      "buffer"
    ],
    "npm:sha.js@2.4.8/sha512.js": [
      "inherits",
      "./hash",
      "buffer"
    ],
    "npm:sha.js@2.4.8/sha256.js": [
      "inherits",
      "./hash",
      "buffer"
    ],
    "npm:browserify-aes@1.0.6/aes.js": [
      "buffer"
    ],
    "npm:browserify-aes@1.0.6/streamCipher.js": [
      "./aes",
      "cipher-base",
      "inherits",
      "buffer"
    ],
    "npm:browserify-aes@1.0.6/authCipher.js": [
      "./aes",
      "cipher-base",
      "inherits",
      "./ghash",
      "buffer-xor",
      "buffer"
    ],
    "npm:browserify-aes@1.0.6/modes/cbc.js": [
      "buffer-xor"
    ],
    "npm:browserify-aes@1.0.6/modes/cfb.js": [
      "buffer-xor",
      "buffer"
    ],
    "npm:browserify-aes@1.0.6/modes/cfb1.js": [
      "buffer"
    ],
    "npm:browserify-aes@1.0.6/modes/cfb8.js": [
      "buffer"
    ],
    "npm:browserify-aes@1.0.6/modes/ctr.js": [
      "buffer-xor",
      "buffer"
    ],
    "npm:browserify-aes@1.0.6/modes/ofb.js": [
      "buffer-xor",
      "buffer"
    ],
    "npm:brorand@1.0.6.js": [
      "npm:brorand@1.0.6/index.js"
    ],
    "npm:elliptic@6.3.2/lib/elliptic/curve/index.js": [
      "./base",
      "./short",
      "./mont",
      "./edwards"
    ],
    "npm:browserify-rsa@4.0.1/index.js": [
      "bn.js",
      "randombytes",
      "buffer"
    ],
    "npm:elliptic@6.3.2/lib/elliptic/utils.js": [
      "bn.js"
    ],
    "npm:miller-rabin@4.0.0/lib/mr.js": [
      "bn.js",
      "brorand"
    ],
    "npm:elliptic@6.3.2/lib/elliptic/hmac-drbg.js": [
      "hash.js",
      "../elliptic"
    ],
    "npm:elliptic@6.3.2/lib/elliptic/curves.js": [
      "hash.js",
      "../elliptic",
      "./precomputed/secp256k1"
    ],
    "npm:parse-asn1@5.0.0/index.js": [
      "./asn1",
      "./aesid.json!systemjs-json",
      "./fixProc",
      "browserify-aes",
      "pbkdf2",
      "buffer"
    ],
    "npm:elliptic@6.3.2/lib/elliptic/ec/index.js": [
      "bn.js",
      "../../elliptic",
      "./key",
      "./signature"
    ],
    "npm:elliptic@6.3.2/lib/elliptic/eddsa/index.js": [
      "hash.js",
      "../../elliptic",
      "./key",
      "./signature"
    ],
    "npm:des.js@1.0.0/lib/des.js": [
      "./des/utils",
      "./des/cipher",
      "./des/des",
      "./des/cbc",
      "./des/ede"
    ],
    "npm:buffer-xor@1.0.3.js": [
      "npm:buffer-xor@1.0.3/index.js"
    ],
    "github:jspm/nodelibs-string_decoder@0.1.0/index.js": [
      "string_decoder"
    ],
    "npm:sha.js@2.4.8/hash.js": [
      "buffer"
    ],
    "npm:browserify-aes@1.0.6/ghash.js": [
      "buffer"
    ],
    "npm:stream-browserify@1.0.0/index.js": [
      "events",
      "inherits",
      "readable-stream/readable",
      "readable-stream/writable",
      "readable-stream/duplex",
      "readable-stream/transform",
      "readable-stream/passthrough"
    ],
    "npm:brorand@1.0.6/index.js": [
      "@empty"
    ],
    "npm:hash.js@1.0.3.js": [
      "npm:hash.js@1.0.3/lib/hash.js"
    ],
    "npm:browserify-aes@1.0.6.js": [
      "npm:browserify-aes@1.0.6/browser.js"
    ],
    "npm:elliptic@6.3.2/lib/elliptic/curve/base.js": [
      "bn.js",
      "../../elliptic"
    ],
    "npm:elliptic@6.3.2/lib/elliptic/curve/short.js": [
      "./index",
      "../../elliptic",
      "bn.js",
      "inherits"
    ],
    "npm:elliptic@6.3.2/lib/elliptic/curve/mont.js": [
      "./index",
      "bn.js",
      "inherits",
      "../../elliptic"
    ],
    "npm:elliptic@6.3.2/lib/elliptic/curve/edwards.js": [
      "./index",
      "../../elliptic",
      "bn.js",
      "inherits"
    ],
    "npm:parse-asn1@5.0.0/asn1.js": [
      "asn1.js"
    ],
    "npm:parse-asn1@5.0.0/fixProc.js": [
      "evp_bytestokey",
      "browserify-aes",
      "buffer"
    ],
    "npm:elliptic@6.3.2/lib/elliptic/eddsa/key.js": [
      "../../elliptic"
    ],
    "npm:elliptic@6.3.2/lib/elliptic/ec/key.js": [
      "bn.js"
    ],
    "npm:elliptic@6.3.2/lib/elliptic/ec/signature.js": [
      "bn.js",
      "../../elliptic"
    ],
    "npm:elliptic@6.3.2/lib/elliptic/eddsa/signature.js": [
      "bn.js",
      "../../elliptic"
    ],
    "npm:des.js@1.0.0/lib/des/cipher.js": [
      "minimalistic-assert",
      "buffer"
    ],
    "npm:string_decoder@0.10.31.js": [
      "npm:string_decoder@0.10.31/index.js"
    ],
    "github:jspm/nodelibs-events@0.1.1.js": [
      "github:jspm/nodelibs-events@0.1.1/index"
    ],
    "npm:readable-stream@1.1.14/duplex.js": [
      "./lib/_stream_duplex"
    ],
    "npm:readable-stream@1.1.14/transform.js": [
      "./lib/_stream_transform"
    ],
    "npm:readable-stream@1.1.14/writable.js": [
      "./lib/_stream_writable"
    ],
    "npm:readable-stream@1.1.14/passthrough.js": [
      "./lib/_stream_passthrough"
    ],
    "npm:des.js@1.0.0/lib/des/des.js": [
      "minimalistic-assert",
      "inherits",
      "../des"
    ],
    "npm:des.js@1.0.0/lib/des/cbc.js": [
      "minimalistic-assert",
      "inherits"
    ],
    "npm:buffer-xor@1.0.3/index.js": [
      "buffer"
    ],
    "npm:des.js@1.0.0/lib/des/ede.js": [
      "minimalistic-assert",
      "inherits",
      "../des"
    ],
    "npm:readable-stream@1.1.14/readable.js": [
      "./lib/_stream_readable",
      "stream-browserify/index",
      "./lib/_stream_writable",
      "./lib/_stream_duplex",
      "./lib/_stream_transform",
      "./lib/_stream_passthrough",
      "process"
    ],
    "npm:hash.js@1.0.3/lib/hash.js": [
      "./hash/utils",
      "./hash/common",
      "./hash/sha",
      "./hash/ripemd",
      "./hash/hmac"
    ],
    "npm:asn1.js@4.9.0.js": [
      "npm:asn1.js@4.9.0/lib/asn1.js"
    ],
    "npm:minimalistic-assert@1.0.0.js": [
      "npm:minimalistic-assert@1.0.0/index.js"
    ],
    "github:jspm/nodelibs-events@0.1.1/index.js": [
      "events"
    ],
    "npm:string_decoder@0.10.31/index.js": [
      "buffer"
    ],
    "npm:readable-stream@1.1.14/lib/_stream_duplex.js": [
      "core-util-is",
      "inherits",
      "./_stream_readable",
      "./_stream_writable",
      "process"
    ],
    "npm:readable-stream@1.1.14/lib/_stream_transform.js": [
      "./_stream_duplex",
      "core-util-is",
      "inherits",
      "process"
    ],
    "npm:readable-stream@1.1.14/lib/_stream_passthrough.js": [
      "./_stream_transform",
      "core-util-is",
      "inherits"
    ],
    "npm:readable-stream@1.1.14/lib/_stream_writable.js": [
      "buffer",
      "core-util-is",
      "inherits",
      "stream-browserify/index",
      "./_stream_duplex",
      "process"
    ],
    "npm:hash.js@1.0.3/lib/hash/common.js": [
      "../hash"
    ],
    "npm:hash.js@1.0.3/lib/hash/sha.js": [
      "../hash"
    ],
    "npm:hash.js@1.0.3/lib/hash/ripemd.js": [
      "../hash"
    ],
    "npm:hash.js@1.0.3/lib/hash/hmac.js": [
      "../hash"
    ],
    "npm:hash.js@1.0.3/lib/hash/utils.js": [
      "inherits"
    ],
    "npm:readable-stream@1.1.14/lib/_stream_readable.js": [
      "isarray",
      "buffer",
      "events",
      "stream-browserify/index",
      "core-util-is",
      "inherits",
      "@empty",
      "./_stream_duplex",
      "string_decoder",
      "process"
    ],
    "npm:asn1.js@4.9.0/lib/asn1.js": [
      "bn.js",
      "./asn1/api",
      "./asn1/base/index",
      "./asn1/constants/index",
      "./asn1/decoders/index",
      "./asn1/encoders/index"
    ],
    "npm:core-util-is@1.0.2.js": [
      "npm:core-util-is@1.0.2/lib/util.js"
    ],
    "npm:events@1.0.2.js": [
      "npm:events@1.0.2/events.js"
    ],
    "npm:isarray@0.0.1.js": [
      "npm:isarray@0.0.1/index.js"
    ],
    "npm:asn1.js@4.9.0/lib/asn1/base/index.js": [
      "./reporter",
      "./buffer",
      "./node"
    ],
    "npm:asn1.js@4.9.0/lib/asn1/constants/index.js": [
      "./der"
    ],
    "npm:asn1.js@4.9.0/lib/asn1/decoders/index.js": [
      "./der",
      "./pem"
    ],
    "npm:asn1.js@4.9.0/lib/asn1/api.js": [
      "../asn1",
      "inherits",
      "vm"
    ],
    "npm:asn1.js@4.9.0/lib/asn1/encoders/index.js": [
      "./der",
      "./pem"
    ],
    "npm:core-util-is@1.0.2/lib/util.js": [
      "buffer"
    ],
    "npm:asn1.js@4.9.0/lib/asn1/constants/der.js": [
      "./index"
    ],
    "npm:asn1.js@4.9.0/lib/asn1/base/node.js": [
      "./index",
      "minimalistic-assert"
    ],
    "npm:asn1.js@4.9.0/lib/asn1/base/reporter.js": [
      "inherits"
    ],
    "npm:asn1.js@4.9.0/lib/asn1/base/buffer.js": [
      "inherits",
      "./index",
      "buffer"
    ],
    "npm:asn1.js@4.9.0/lib/asn1/decoders/der.js": [
      "inherits",
      "../../asn1"
    ],
    "npm:asn1.js@4.9.0/lib/asn1/decoders/pem.js": [
      "inherits",
      "buffer",
      "./der"
    ],
    "github:jspm/nodelibs-vm@0.1.0.js": [
      "github:jspm/nodelibs-vm@0.1.0/index"
    ],
    "npm:asn1.js@4.9.0/lib/asn1/encoders/der.js": [
      "inherits",
      "buffer",
      "../../asn1"
    ],
    "npm:asn1.js@4.9.0/lib/asn1/encoders/pem.js": [
      "inherits",
      "./der"
    ],
    "github:jspm/nodelibs-vm@0.1.0/index.js": [
      "vm-browserify"
    ],
    "npm:vm-browserify@0.0.4.js": [
      "npm:vm-browserify@0.0.4/index.js"
    ],
    "npm:vm-browserify@0.0.4/index.js": [
      "indexof"
    ],
    "npm:indexof@0.0.1.js": [
      "npm:indexof@0.0.1/index"
    ]
  },

  map: {
    "axios": "npm:axios@0.15.3",
    "babel": "npm:babel-core@5.8.38",
    "babel-plugin-react-autoprefix": "npm:babel-plugin-react-autoprefix@1.0.1",
    "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
    "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
    "babel-polyfill": "npm:babel-polyfill@6.16.0",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "body-parser": "npm:body-parser@1.15.2",
    "classnames": "npm:classnames@2.2.5",
    "compression": "npm:compression@1.6.2",
    "cookie-session": "npm:cookie-session@2.0.0-alpha.2",
    "core-js": "npm:core-js@1.2.7",
    "cors": "npm:cors@2.8.1",
    "express": "npm:express@4.13.4",
    "express-jwt": "npm:express-jwt@5.1.0",
    "fs": "github:jspm/nodelibs-fs@0.1.2",
    "helmet": "npm:helmet@3.1.0",
    "inline-style-prefixer": "npm:inline-style-prefixer@2.0.5",
    "jsonp": "npm:jsonp@0.2.0",
    "jsonwebtoken": "npm:jsonwebtoken@7.1.9",
    "mongodb": "npm:mongodb@2.2.12",
    "react": "npm:react@15.4.1",
    "react-addons-css-transition-group": "npm:react-addons-css-transition-group@15.3.2",
    "react-dom": "npm:react-dom@15.4.1",
    "react-motion": "npm:react-motion@0.4.5",
    "react-redux": "npm:react-redux@4.4.5",
    "react-router": "npm:react-router@2.3.0",
    "reddit-api": "npm:reddit-api@0.0.24",
    "redux": "npm:redux@3.6.0",
    "redux-devtools": "npm:redux-devtools@3.3.1",
    "redux-logger": "npm:redux-logger@2.6.1",
    "scss": "github:KevCJones/plugin-scss@0.2.10",
    "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.5.7",
    "github:KevCJones/plugin-scss@0.2.10": {
      "autoprefixer": "npm:autoprefixer@6.3.6",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lodash": "npm:lodash@4.17.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@5.0.19",
      "reqwest": "github:ded/reqwest@2.0.5",
      "sass.js": "npm:sass.js@0.9.8",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "github:capaj/systemjs-hot-reloader@0.5.7": {
      "debug": "npm:debug@2.2.0",
      "socket.io-client": "github:socketio/socket.io-client@1.4.5",
      "weakee": "npm:weakee@1.0.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:accepts@1.2.13": {
      "mime-types": "npm:mime-types@2.1.13",
      "negotiator": "npm:negotiator@0.5.3"
    },
    "npm:accepts@1.3.3": {
      "mime-types": "npm:mime-types@2.1.13",
      "negotiator": "npm:negotiator@0.6.1"
    },
    "npm:amdefine@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asap@2.0.5": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.9.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:async@1.5.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:autoprefix@1.0.1": {
      "autoprefixer-core": "npm:autoprefixer-core@5.1.11",
      "camelcase": "npm:camelcase@1.2.1",
      "decamelize": "npm:decamelize@1.2.0"
    },
    "npm:autoprefixer-core@5.1.11": {
      "browserslist": "npm:browserslist@0.2.0",
      "caniuse-db": "npm:caniuse-db@1.0.30000588",
      "num2fraction": "npm:num2fraction@1.1.0",
      "postcss": "npm:postcss@4.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:autoprefixer@6.3.6": {
      "browserslist": "npm:browserslist@1.3.1",
      "caniuse-db": "npm:caniuse-db@1.0.30000588",
      "normalize-range": "npm:normalize-range@0.1.2",
      "num2fraction": "npm:num2fraction@1.2.2",
      "postcss": "npm:postcss@5.0.19",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:axios@0.15.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "follow-redirects": "npm:follow-redirects@1.0.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:babel-code-frame@6.16.0": {
      "chalk": "npm:chalk@1.1.3",
      "esutils": "npm:esutils@2.0.2",
      "js-tokens": "npm:js-tokens@2.0.0"
    },
    "npm:babel-helper-builder-react-jsx@6.18.0": {
      "babel-runtime": "npm:babel-runtime@6.18.0",
      "babel-types": "npm:babel-types@6.19.0",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@4.17.2"
    },
    "npm:babel-messages@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.18.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-react-autoprefix@1.0.1": {
      "autoprefix": "npm:autoprefix@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
      "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.18.0",
      "babel-template": "npm:babel-template@6.16.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-plugin-transform-react-jsx@6.8.0": {
      "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.18.0",
      "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
      "babel-runtime": "npm:babel-runtime@6.18.0"
    },
    "npm:babel-polyfill@6.16.0": {
      "babel-runtime": "npm:babel-runtime@6.18.0",
      "core-js": "npm:core-js@2.4.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regenerator-runtime": "npm:regenerator-runtime@0.9.6"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@6.18.0": {
      "core-js": "npm:core-js@2.4.1",
      "regenerator-runtime": "npm:regenerator-runtime@0.9.6"
    },
    "npm:babel-template@6.16.0": {
      "babel-runtime": "npm:babel-runtime@6.18.0",
      "babel-traverse": "npm:babel-traverse@6.19.0",
      "babel-types": "npm:babel-types@6.19.0",
      "babylon": "npm:babylon@6.14.1",
      "lodash": "npm:lodash@4.17.2"
    },
    "npm:babel-traverse@6.19.0": {
      "babel-code-frame": "npm:babel-code-frame@6.16.0",
      "babel-messages": "npm:babel-messages@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.18.0",
      "babel-types": "npm:babel-types@6.19.0",
      "babylon": "npm:babylon@6.14.1",
      "debug": "npm:debug@2.2.0",
      "globals": "npm:globals@9.14.0",
      "invariant": "npm:invariant@2.2.1",
      "lodash": "npm:lodash@4.17.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-types@6.19.0": {
      "babel-runtime": "npm:babel-runtime@6.18.0",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@4.17.2",
      "to-fast-properties": "npm:to-fast-properties@1.0.2"
    },
    "npm:babylon@6.14.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:base64-url@1.3.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:base64url@2.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:bn.js@4.11.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:body-parser@1.15.2": {
      "bytes": "npm:bytes@2.4.0",
      "content-type": "npm:content-type@1.0.2",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.1.0",
      "http-errors": "npm:http-errors@1.5.1",
      "iconv-lite": "npm:iconv-lite@0.4.13",
      "on-finished": "npm:on-finished@2.3.0",
      "qs": "npm:qs@6.2.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "raw-body": "npm:raw-body@2.1.7",
      "type-is": "npm:type-is@1.6.14",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.3",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserslist@0.2.0": {
      "caniuse-db": "npm:caniuse-db@1.0.30000588",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:browserslist@1.3.1": {
      "caniuse-db": "npm:caniuse-db@1.0.30000588",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:bson@0.5.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-equal-constant-time@1.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:cipher-base@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:compressible@2.0.9": {
      "mime-db": "npm:mime-db@1.25.0"
    },
    "npm:compression@1.6.2": {
      "accepts": "npm:accepts@1.3.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bytes": "npm:bytes@2.3.0",
      "compressible": "npm:compressible@2.0.9",
      "debug": "npm:debug@2.2.0",
      "on-headers": "npm:on-headers@1.0.1",
      "vary": "npm:vary@1.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:connect@3.4.1": {
      "debug": "npm:debug@2.2.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "finalhandler": "npm:finalhandler@0.4.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "parseurl": "npm:parseurl@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "utils-merge": "npm:utils-merge@1.0.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:content-disposition@0.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:content-security-policy-builder@1.1.0": {
      "dashify": "npm:dashify@0.2.2"
    },
    "npm:cookie-session@2.0.0-alpha.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cookies": "npm:cookies@0.6.1",
      "debug": "npm:debug@2.3.2",
      "on-headers": "npm:on-headers@1.0.1"
    },
    "npm:cookie-signature@1.0.6": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:cookies@0.6.1": {
      "depd": "npm:depd@1.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "keygrip": "npm:keygrip@1.0.1"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@2.4.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:cors@2.8.1": {
      "vary": "npm:vary@1.0.1"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:debug@2.1.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@2.2.0": {
      "ms": "npm:ms@0.7.1"
    },
    "npm:debug@2.3.2": {
      "ms": "npm:ms@0.7.2"
    },
    "npm:depd@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:destroy@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:ecdsa-sig-formatter@1.0.7": {
      "base64-url": "npm:base64-url@1.3.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:elliptic@6.3.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:es6-promise@3.2.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:etag@1.7.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:express-jwt@5.1.0": {
      "async": "npm:async@1.5.2",
      "express-unless": "npm:express-unless@0.3.0",
      "jsonwebtoken": "npm:jsonwebtoken@6.2.0",
      "lodash.set": "npm:lodash.set@4.3.2"
    },
    "npm:express-unless@0.3.0": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:express@4.13.4": {
      "accepts": "npm:accepts@1.2.13",
      "array-flatten": "npm:array-flatten@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "content-disposition": "npm:content-disposition@0.5.1",
      "content-type": "npm:content-type@1.0.2",
      "cookie": "npm:cookie@0.1.5",
      "cookie-signature": "npm:cookie-signature@1.0.6",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.1.0",
      "escape-html": "npm:escape-html@1.0.3",
      "etag": "npm:etag@1.7.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "finalhandler": "npm:finalhandler@0.4.1",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "merge-descriptors": "npm:merge-descriptors@1.0.1",
      "methods": "npm:methods@1.1.2",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "on-finished": "npm:on-finished@2.3.0",
      "parseurl": "npm:parseurl@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-to-regexp": "npm:path-to-regexp@0.1.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "proxy-addr": "npm:proxy-addr@1.0.10",
      "qs": "npm:qs@4.0.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "range-parser": "npm:range-parser@1.0.3",
      "send": "npm:send@0.13.1",
      "serve-static": "npm:serve-static@1.10.2",
      "type-is": "npm:type-is@1.6.14",
      "utils-merge": "npm:utils-merge@1.0.0",
      "vary": "npm:vary@1.0.1"
    },
    "npm:fbjs@0.8.6": {
      "core-js": "npm:core-js@1.2.7",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.3.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.12"
    },
    "npm:finalhandler@0.4.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "escape-html": "npm:escape-html@1.0.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "on-finished": "npm:on-finished@2.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "unpipe": "npm:unpipe@1.0.0"
    },
    "npm:follow-redirects@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "debug": "npm:debug@2.3.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:formidable@1.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:globals@9.14.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:has-flag@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:helmet-csp@2.1.0": {
      "camelize": "npm:camelize@1.0.0",
      "content-security-policy-builder": "npm:content-security-policy-builder@1.1.0",
      "dasherize": "npm:dasherize@2.0.0",
      "lodash.reduce": "npm:lodash.reduce@4.6.0",
      "platform": "npm:platform@1.3.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:helmet@3.1.0": {
      "connect": "npm:connect@3.4.1",
      "dns-prefetch-control": "npm:dns-prefetch-control@0.1.0",
      "dont-sniff-mimetype": "npm:dont-sniff-mimetype@1.0.0",
      "frameguard": "npm:frameguard@3.0.0",
      "helmet-csp": "npm:helmet-csp@2.1.0",
      "hide-powered-by": "npm:hide-powered-by@1.0.0",
      "hpkp": "npm:hpkp@2.0.0",
      "hsts": "npm:hsts@2.0.0",
      "ienoopen": "npm:ienoopen@1.0.0",
      "nocache": "npm:nocache@2.0.0",
      "referrer-policy": "npm:referrer-policy@1.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "x-xss-protection": "npm:x-xss-protection@1.0.0"
    },
    "npm:history@2.0.2": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@3.0.3",
      "warning": "npm:warning@2.1.0"
    },
    "npm:hoek@2.16.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:hsts@2.0.0": {
      "core-util-is": "npm:core-util-is@1.0.2"
    },
    "npm:http-errors@1.3.1": {
      "inherits": "npm:inherits@2.0.1",
      "statuses": "npm:statuses@1.2.1"
    },
    "npm:http-errors@1.5.1": {
      "inherits": "npm:inherits@2.0.3",
      "setprototypeof": "npm:setprototypeof@1.0.2",
      "statuses": "npm:statuses@1.3.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inline-style-prefixer@2.0.5": {
      "bowser": "npm:bowser@1.5.0",
      "hyphenate-style-name": "npm:hyphenate-style-name@1.0.2"
    },
    "npm:invariant@2.2.1": {
      "loose-envify": "npm:loose-envify@1.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isarray@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:isemail@1.2.0": {
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.6.3",
      "whatwg-fetch": "npm:whatwg-fetch@2.0.1"
    },
    "npm:joi@6.10.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "hoek": "npm:hoek@2.16.3",
      "isemail": "npm:isemail@1.2.0",
      "moment": "npm:moment@2.17.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "topo": "npm:topo@1.1.0"
    },
    "npm:js-base64@2.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:jsonp@0.2.0": {
      "debug": "npm:debug@2.1.3"
    },
    "npm:jsonwebtoken@6.2.0": {
      "joi": "npm:joi@6.10.1",
      "jws": "npm:jws@3.1.4",
      "ms": "npm:ms@0.7.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:jsonwebtoken@7.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "joi": "npm:joi@6.10.1",
      "jws": "npm:jws@3.1.4",
      "lodash.once": "npm:lodash.once@4.1.1",
      "ms": "npm:ms@0.7.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:jwa@1.1.4": {
      "base64url": "npm:base64url@2.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-equal-constant-time": "npm:buffer-equal-constant-time@1.0.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "ecdsa-sig-formatter": "npm:ecdsa-sig-formatter@1.0.7",
      "safe-buffer": "npm:safe-buffer@5.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jws@3.1.4": {
      "base64url": "npm:base64url@2.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "jwa": "npm:jwa@1.1.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:keygrip@1.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:lodash.once@4.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.reduce@4.6.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.set@4.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6"
    },
    "npm:mime-db@1.25.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:mime-types@2.1.13": {
      "mime-db": "npm:mime-db@1.25.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mime@1.2.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mime@1.3.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:mongodb-core@2.0.14": {
      "bson": "npm:bson@0.5.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "require_optional": "npm:require_optional@1.0.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:mongodb@2.2.12": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "es6-promise": "npm:es6-promise@3.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mongodb-core": "npm:mongodb-core@2.0.14",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.5",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:node-fetch@1.6.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:on-finished@2.3.0": {
      "ee-first": "npm:ee-first@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.9.0",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:parseurl@1.3.1": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:performance-now@0.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:postcss@4.0.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.2.0"
    },
    "npm:postcss@5.0.19": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3",
      "supports-color": "npm:supports-color@3.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:proxy-addr@1.0.10": {
      "forwarded": "npm:forwarded@0.1.0",
      "ipaddr.js": "npm:ipaddr.js@1.0.5"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:query-string@3.0.3": {
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:raf@3.3.0": {
      "performance-now": "npm:performance-now@0.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:raw-body@2.1.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bytes": "npm:bytes@2.4.0",
      "iconv-lite": "npm:iconv-lite@0.4.13",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "unpipe": "npm:unpipe@1.0.0"
    },
    "npm:react-addons-css-transition-group@15.3.2": {
      "react": "npm:react@15.4.1"
    },
    "npm:react-dom@15.4.1": {
      "fbjs": "npm:fbjs@0.8.6",
      "loose-envify": "npm:loose-envify@1.3.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.4.1"
    },
    "npm:react-motion@0.4.5": {
      "performance-now": "npm:performance-now@0.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "raf": "npm:raf@3.3.0",
      "react": "npm:react@15.4.1"
    },
    "npm:react-redux@4.4.5": {
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "invariant": "npm:invariant@2.2.1",
      "lodash": "npm:lodash@4.17.2",
      "loose-envify": "npm:loose-envify@1.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.4.1",
      "redux": "npm:redux@3.6.0"
    },
    "npm:react-router@2.3.0": {
      "history": "npm:history@2.0.2",
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react@15.4.1": {
      "fbjs": "npm:fbjs@0.8.6",
      "loose-envify": "npm:loose-envify@1.3.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.1.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:reddit-api@0.0.24": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "superagent": "npm:superagent@0.12.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:redux-devtools-instrument@1.3.2": {
      "lodash": "npm:lodash@4.17.2",
      "symbol-observable": "npm:symbol-observable@0.2.4"
    },
    "npm:redux-devtools@3.3.1": {
      "lodash": "npm:lodash@4.17.2",
      "react": "npm:react@15.4.1",
      "react-redux": "npm:react-redux@4.4.5",
      "redux": "npm:redux@3.6.0",
      "redux-devtools-instrument": "npm:redux-devtools-instrument@1.3.2"
    },
    "npm:redux@3.6.0": {
      "lodash": "npm:lodash@4.17.2",
      "lodash-es": "npm:lodash-es@4.16.4",
      "loose-envify": "npm:loose-envify@1.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "symbol-observable": "npm:symbol-observable@1.0.4"
    },
    "npm:regenerator-runtime@0.9.6": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:require_optional@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "resolve-from": "npm:resolve-from@2.0.0",
      "semver": "npm:semver@5.3.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:resolve-from@2.0.0": {
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:safe-buffer@5.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:sass.js@0.9.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:semver@5.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:send@0.13.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.1.0",
      "destroy": "npm:destroy@1.0.4",
      "escape-html": "npm:escape-html@1.0.3",
      "etag": "npm:etag@1.7.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http-errors": "npm:http-errors@1.3.1",
      "mime": "npm:mime@1.3.4",
      "ms": "npm:ms@0.7.1",
      "on-finished": "npm:on-finished@2.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "range-parser": "npm:range-parser@1.0.3",
      "statuses": "npm:statuses@1.2.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:serve-static@1.10.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "escape-html": "npm:escape-html@1.0.3",
      "parseurl": "npm:parseurl@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "send": "npm:send@0.13.1",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:sha.js@2.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.2.0": {
      "amdefine": "npm:amdefine@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:statuses@1.2.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:statuses@1.3.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:superagent@0.12.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cookiejar": "npm:cookiejar@1.3.0",
      "emitter-component": "npm:emitter-component@0.0.6",
      "formidable": "npm:formidable@1.0.9",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "methods": "npm:methods@0.0.1",
      "mime": "npm:mime@1.2.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@0.5.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:supports-color@3.1.2": {
      "has-flag": "npm:has-flag@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.9"
    },
    "npm:topo@1.1.0": {
      "hoek": "npm:hoek@2.16.3"
    },
    "npm:type-is@1.6.14": {
      "media-typer": "npm:media-typer@0.3.0",
      "mime-types": "npm:mime-types@2.1.13"
    },
    "npm:ua-parser-js@0.7.12": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:xtend@4.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    }
  }
});
