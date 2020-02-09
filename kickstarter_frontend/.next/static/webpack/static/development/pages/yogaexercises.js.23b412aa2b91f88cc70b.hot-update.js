webpackHotUpdate("static/development/pages/yogaexercises.js",{

/***/ "./pages/yogaexercises.js":
/*!********************************!*\
  !*** ./pages/yogaexercises.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
var _this = undefined,
    _jsxFileName = "/Users/shahranirahiman/Projects/yoga-kickstarter/kickstarter_frontend/pages/yogaexercises.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Yogaexercises = function Yogaexercises() {
  // constructor(props) {
  //     super(props)
  //     this.state = {
  //         poses: []
  //     }
  // }
  componentDidMount = function componentDidMount() {
    _this.getExercises();
  };

  getExercises = function getExercises() {
    fetch('http://localhost:3000/poses').then(function (response) {
      return response.json();
    }).then(function (json) {
      return console.log(json);
    })["catch"](function (error) {
      return console.error(error);
    });
  };

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Exercises for beginners"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "List out the execises here, pull from API"));
};

/* harmony default export */ __webpack_exports__["default"] = (Yogaexercises);

/***/ })

})
//# sourceMappingURL=yogaexercises.js.23b412aa2b91f88cc70b.hot-update.js.map