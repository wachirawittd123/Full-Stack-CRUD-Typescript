"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/common.tsx":
/*!************************!*\
  !*** ./lib/common.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"redirectPage\": () => (/* binding */ redirectPage)\n/* harmony export */ });\nconst redirectPage = (user)=>{\n    if (user) {\n        const getCookie = JSON.parse(user);\n        return {\n            props: {\n                user: getCookie\n            }\n        };\n    } else {\n        return {\n            redirect: {\n                destination: \"/login\",\n                permanent: false\n            }\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29tbW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sTUFBTUEsWUFBWSxHQUFHLENBQUNDLElBQVEsR0FBSztJQUN0QyxJQUFHQSxJQUFJLEVBQUU7UUFDTCxNQUFPQyxTQUFTLEdBQWdCQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsSUFBSSxDQUFDO1FBQ2hELE9BQU87WUFDSEksS0FBSyxFQUFFO2dCQUNISixJQUFJLEVBQUVDLFNBQVM7YUFDbEI7U0FDSjtLQUNKLE1BQU07UUFDSCxPQUFPO1lBQ0hJLFFBQVEsRUFBRTtnQkFDTkMsV0FBVyxFQUFFLFFBQVE7Z0JBQ3JCQyxTQUFTLEVBQUUsS0FBSzthQUNuQjtTQUNKO0tBQ0o7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9jb21tb24udHN4PzQ1NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUNvb2tpZVVzZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlXCJcblxuZXhwb3J0IGNvbnN0IHJlZGlyZWN0UGFnZSA9ICh1c2VyOmFueSkgPT4ge1xuICAgIGlmKHVzZXIpIHtcbiAgICAgICAgY29uc3QgIGdldENvb2tpZTogSUNvb2tpZVVzZXIgPSBKU09OLnBhcnNlKHVzZXIpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIHVzZXI6IGdldENvb2tpZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246IFwiL2xvZ2luXCIsXG4gICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJyZWRpcmVjdFBhZ2UiLCJ1c2VyIiwiZ2V0Q29va2llIiwiSlNPTiIsInBhcnNlIiwicHJvcHMiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/common.tsx\n");

/***/ }),

/***/ "./lib/index.tsx":
/*!***********************!*\
  !*** ./lib/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./lib/common.tsx\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _common__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _common__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LnRzeD8yMTJjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2NvbW1vblwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/index.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib */ \"./lib/index.tsx\");\n\n\n\nasync function getServerSideProps(context) {\n    return (0,_lib__WEBPACK_IMPORTED_MODULE_2__.redirectPage)(context.req?.cookies?.user);\n}\nconst MainPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"test\"\n    }, void 0, false, {\n        fileName: \"/Users/macbookm2jypy/Documents/Project/crud-typescript/client/pages/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ2tEO0FBRVo7QUFFL0IsZUFBZUUsa0JBQWtCLENBQUNDLE9BQVksRUFBRTtJQUNuRCxPQUFPRixrREFBWSxDQUFDRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsT0FBTyxFQUFFQyxJQUFJLENBQUM7Q0FDbEQ7QUFFRCxNQUFNQyxRQUFRLEdBQWEsSUFBTTtJQUM3QixxQkFDSSw4REFBQ0MsS0FBRztrQkFBQyxNQUVMOzs7OztpQkFBTSxDQUNUO0NBQ0o7QUFFRCxpRUFBZUQsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyByZWRpcmVjdFBhZ2UgfSBmcm9tIFwiLi4vbGliXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dDogYW55KSB7XG4gICAgcmV0dXJuIHJlZGlyZWN0UGFnZShjb250ZXh0LnJlcT8uY29va2llcz8udXNlcilcbn1cblxuY29uc3QgTWFpblBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB0ZXN0XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJyZWRpcmVjdFBhZ2UiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVxIiwiY29va2llcyIsInVzZXIiLCJNYWluUGFnZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();