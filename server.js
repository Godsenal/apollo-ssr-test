/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./build/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/server.js":
/*!*************************!*\
  !*** ./build/server.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"babel-runtime/helpers/asyncToGenerator\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _server = __webpack_require__(/*! ../src/server */ \"./src/server.js\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use(_express2.default.static(\"dist\"));\n\napp.get(\"*\", function () {\n  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {\n    var _ref2, html, apolloState, finalHtml;\n\n    return _regenerator2.default.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return (0, _server2.default)();\n\n          case 2:\n            _ref2 = _context.sent;\n            html = _ref2.html;\n            apolloState = _ref2.apolloState;\n            finalHtml = \"<!DOCTYPE html>\" + \"<html><head>\" + \"<title>Apollo Client 3 and SSR bug</title>\" + '<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">' + '<script type=\"application/javascript\">' + (\"window.apolloState = \" + (0, _stringify2.default)(apolloState) + \";\") + \"</script></head><body>\" + (\"<div id=\\\"app\\\">\" + html + \"</div>\") + \"<script type=\\\"application/javascript\\\" src=\\\"/app.js\\\"></script>\" + \"</body></html>\";\n            return _context.abrupt(\"return\", res.send(finalHtml));\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\nvar PORT = 8000;\n\napp.listen(PORT, function () {\n  console.log(\"\\uD83D\\uDE80 Server is running on port \" + PORT + \" |\", new Date().toLocaleString());\n});\n\n//# sourceURL=webpack:///./build/server.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"babel-runtime/helpers/slicedToArray\");\n\nvar _slicedToArray3 = _interopRequireDefault(_slicedToArray2);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _client = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar GET_POSTS = { kind: \"Document\", definitions: [{ kind: \"OperationDefinition\", operation: \"query\", variableDefinitions: [], directives: [], selectionSet: { kind: \"SelectionSet\", selections: [{ kind: \"Field\", name: { kind: \"Name\", value: \"posts\" }, arguments: [], directives: [], selectionSet: { kind: \"SelectionSet\", selections: [{ kind: \"Field\", name: { kind: \"Name\", value: \"data\" }, arguments: [], directives: [], selectionSet: { kind: \"SelectionSet\", selections: [{ kind: \"Field\", name: { kind: \"Name\", value: \"id\" }, arguments: [], directives: [] }, { kind: \"Field\", name: { kind: \"Name\", value: \"title\" }, arguments: [], directives: [] }] } }] } }] } }], loc: { start: 0, end: 62, source: { body: \"query {\\n  posts {\\n    data {\\n      id\\n      title\\n    }\\n  }\\n}\\n\", name: \"GraphQL request\", locationOffset: { line: 1, column: 1 } } } };\nvar GET_ALBUMS = { kind: \"Document\", definitions: [{ kind: \"OperationDefinition\", operation: \"query\", variableDefinitions: [], directives: [], selectionSet: { kind: \"SelectionSet\", selections: [{ kind: \"Field\", name: { kind: \"Name\", value: \"albums\" }, arguments: [], directives: [], selectionSet: { kind: \"SelectionSet\", selections: [{ kind: \"Field\", name: { kind: \"Name\", value: \"data\" }, arguments: [], directives: [], selectionSet: { kind: \"SelectionSet\", selections: [{ kind: \"Field\", name: { kind: \"Name\", value: \"id\" }, arguments: [], directives: [] }, { kind: \"Field\", name: { kind: \"Name\", value: \"title\" }, arguments: [], directives: [] }] } }] } }] } }], loc: { start: 0, end: 63, source: { body: \"query {\\n  albums {\\n    data {\\n      id\\n      title\\n    }\\n  }\\n}\\n\", name: \"GraphQL request\", locationOffset: { line: 1, column: 1 } } } };\n\n\nvar Component = function Component(_ref) {\n  var query = _ref.query,\n      fieldName = _ref.fieldName;\n\n  var _useQuery = (0, _client.useQuery)(query, {\n    fetchPolicy: \"network-only\",\n    nextFetchPolicy: \"cache-first\"\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      client = _useQuery.client;\n\n  if (loading) return _react2.default.createElement(\n    \"div\",\n    null,\n    \"Loading...\"\n  );\n\n  var handleEvict = function handleEvict() {\n    var firstData = data[fieldName].data[0];\n\n    client.cache.evict({\n      id: client.cache.identify(firstData)\n    });\n    client.cache.gc();\n  };\n\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      \"button\",\n      { onClick: handleEvict },\n      \"evict first data\"\n    ),\n    _react2.default.createElement(\n      \"ul\",\n      null,\n      data[fieldName].data.map(function (p) {\n        return _react2.default.createElement(\n          \"li\",\n          { key: p.id },\n          p.title\n        );\n      })\n    )\n  );\n};\n\nvar App = function App() {\n  var _useState = (0, _react.useState)(\"ssr\"),\n      _useState2 = (0, _slicedToArray3.default)(_useState, 2),\n      mode = _useState2[0],\n      setMode = _useState2[1];\n\n  var props = mode === \"ssr\" ? { query: GET_POSTS, fieldName: \"posts\" } : { query: GET_ALBUMS, fieldName: \"albums\" };\n\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      \"button\",\n      {\n        onClick: function onClick() {\n          return setMode(function (prev) {\n            return prev === \"ssr\" ? \"csr\" : \"ssr\";\n          });\n        }\n      },\n      \"change mode\"\n    ),\n    _react2.default.createElement(Component, props)\n  );\n};\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/constans.js":
/*!*************************!*\
  !*** ./src/constans.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar API_URL = exports.API_URL = 'https://graphqlzero.almansi.me/api';\n\n//# sourceURL=webpack:///./src/constans.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"babel-runtime/helpers/asyncToGenerator\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _nodeFetch = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n\nvar _nodeFetch2 = _interopRequireDefault(_nodeFetch);\n\nvar _app = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _constans = __webpack_require__(/*! ./constans */ \"./src/constans.js\");\n\nvar _client = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n\nvar _ssr = __webpack_require__(/*! @apollo/client/react/ssr */ \"@apollo/client/react/ssr\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar apolloClient = new _client.ApolloClient({\n  ssrMode: true,\n  link: new _client.HttpLink({\n    uri: _constans.API_URL,\n    fetch: _nodeFetch2.default\n  }),\n  cache: new _client.InMemoryCache(),\n  defaultOptions: {\n    watchQuery: {\n      nextFetchPolicy: \"cache-first\"\n    }\n  }\n});\n\nvar renderApp = function () {\n  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {\n    var html, apolloState;\n    return _regenerator2.default.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return (0, _ssr.getDataFromTree)(_app2.default);\n\n          case 2:\n            html = (0, _server.renderToString)(_react2.default.createElement(\n              _client.ApolloProvider,\n              { client: apolloClient },\n              _react2.default.createElement(_app2.default, null)\n            ));\n            apolloState = apolloClient.extract();\n            return _context.abrupt(\"return\", { html: html, apolloState: apolloState });\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function renderApp() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nexports.default = renderApp;\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");\n\n//# sourceURL=webpack:///external_%22@apollo/client%22?");

/***/ }),

/***/ "@apollo/client/react/ssr":
/*!*******************************************!*\
  !*** external "@apollo/client/react/ssr" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client/react/ssr\");\n\n//# sourceURL=webpack:///external_%22@apollo/client/react/ssr%22?");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/*!*********************************************************!*\
  !*** external "babel-runtime/helpers/asyncToGenerator" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/regenerator%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });