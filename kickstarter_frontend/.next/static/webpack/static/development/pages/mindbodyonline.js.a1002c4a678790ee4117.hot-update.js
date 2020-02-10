webpackHotUpdate("static/development/pages/mindbodyonline.js",{

/***/ "./pages/mindbodyonline.js":
/*!*********************************!*\
  !*** ./pages/mindbodyonline.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/mindbodyonline.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 // import useSWR from 'swr';

var Mindbodyonline = function Mindbodyonline(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "MBO API"), console.log(props), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}; //Problem 1: THE LINK
//Problem 2: Need to include the key. CORS issue.
// Mindbodyonline.getInitialProps = async function() {
// 	const res = await fetch('https://api.mindbodyonline.com/public/v6/class/classschedules?');
// 	const data = await res.json();
// 	console.log(`Class schedule data fetched.`);
// 	return {
// 		schedule : data
// 	};
// };


Mindbodyonline.getInitialProps = function _callee(url, data) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('https://api.mindbodyonline.com/public/v6/class/classschedules?', {
            method: 'GET',
            body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data),
            headers: {
              'Content-Type': 'application/json',
              'API-Key': 'f50b5ea43c1440b5af21be52f91ff903',
              SiteId: '-99',
              Authorization: 'null',
              'Access-Control-Allow-Origin': '*'
            }
          }).then(function (response) {
            return response.json;
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Mindbodyonline); // method: 'Get',
// headers: {
//     'Content-Type: application/json',
//     'API-Key: f50b5ea43c1440b5af21be52f91ff903',
//     'SiteId': '-99'
//     'Authorization': 'null',
// }
// Mindbodyonline.getInitialProps = async function(url, data) {
// 	return fetch('https://api.mindbodyonline.com/public/v6/class/classschedules?', {
// 		method  : 'GET',
// 		body    : JSON.stringify(data),
// 		headers : {
// 			'Content-Type' : 'application/json',
// 			'API-Key'      : 'f50b5ea43c1440b5af21be52f91ff903',
// 			SiteId         : '-99',
// 			Authorization  : 'null'
// 		}
// 	}).then((response) => response.json);
// };

/***/ })

})
//# sourceMappingURL=mindbodyonline.js.a1002c4a678790ee4117.hot-update.js.map