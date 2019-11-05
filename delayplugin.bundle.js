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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6973);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6973:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6974);


/***/ }),

/***/ 6974:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//add delay in require plugin here\n\n//HSCore.Plugin.registerPluginLoader(`hsw.plugin.ngmmixpaint.Plugin`, () => import(/* webpackChunkName: \"ngmmixpaint\" */'./ngmmixpaint/plugin'));\n__webpack_require__(7409);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjk3NC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWIvcGx1Z2luL2RlbGF5LW1vZHVsZXMuanM/ZDVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vYWRkIGRlbGF5IGluIHJlcXVpcmUgcGx1Z2luIGhlcmVcblxuLy9IU0NvcmUuUGx1Z2luLnJlZ2lzdGVyUGx1Z2luTG9hZGVyKGBoc3cucGx1Z2luLm5nbW1peHBhaW50LlBsdWdpbmAsICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm5nbW1peHBhaW50XCIgKi8nLi9uZ21taXhwYWludC9wbHVnaW4nKSk7XG5yZXF1aXJlKCcuL3Rlc3QvcGx1Z2luLmpzJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYi9wbHVnaW4vZGVsYXktbW9kdWxlcy5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6974\n");

/***/ }),

/***/ 7409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TestPlugin = function (_HSCore$Plugin$IPlugi) {\n    _inherits(TestPlugin, _HSCore$Plugin$IPlugi);\n\n    function TestPlugin() {\n        _classCallCheck(this, TestPlugin);\n\n        return _possibleConstructorReturn(this, _HSCore$Plugin$IPlugi.call(this));\n    }\n\n    return TestPlugin;\n}(HSCore.Plugin.IPlugin);\n\nmodule.exports = TestPlugin;\n\nHSCore.Plugin.registerPluginDelay(\"test.plugin\", TestPlugin);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzQwOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWIvcGx1Z2luL3Rlc3QvcGx1Z2luLmpzP2NkZjgiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGVzdFBsdWdpbiBleHRlbmRzIEhTQ29yZS5QbHVnaW4uSVBsdWdpbiB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVzdFBsdWdpbjtcblxuSFNDb3JlLlBsdWdpbi5yZWdpc3RlclBsdWdpbkRlbGF5KGB0ZXN0LnBsdWdpbmAsIFRlc3RQbHVnaW4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYi9wbHVnaW4vdGVzdC9wbHVnaW4uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7QUFMQTtBQUNBO0FBTUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7409\n");

/***/ })

/******/ });