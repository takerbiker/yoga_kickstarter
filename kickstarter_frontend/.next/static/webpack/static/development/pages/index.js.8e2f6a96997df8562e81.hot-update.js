webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login */ "./pages/login.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

 // import Link from 'next/link';




var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "userState", function (user) {
      _this.setState({
        currentUser: user
      }, function () {
        console.log('user logged in');
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toLogout", function () {
      _this.setState({
        currentUser: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toDelete", function () {
      _this.setState({
        "delete": true
      });
    });

    _this.state = {
      currentUser: '',
      "delete": false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-328882442",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Your Yoga Journey"), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
        crossOrigin: "anonymous",
        className: "jsx-328882442",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-328882442" + " " + "container card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-328882442" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-328882442" + " " + "image-stack",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("div", {
        "class": "image-stack__item image-stack__item--top",
        className: "jsx-328882442",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("img", {
        src: "https://images.unsplash.com/photo-1555367072-90923442306e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        className: "jsx-328882442" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })), __jsx("div", {
        "class": "image-stack__item image-stack__item--bottom",
        className: "jsx-328882442",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("img", {
        src: "https://media.timeout.com/images/104103651/630/472/image.jpg",
        className: "jsx-328882442" + " " + "col-sm float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }))), __jsx("div", {
        className: "jsx-328882442" + " " + "col-sm rightImage ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Sign Up?"))), __jsx("h1", {
        className: "jsx-328882442",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Index page"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "328882442",
        __self: this
      }, ".col-sm.jsx-328882442{height:700px;width:100%;}.card-space.jsx-328882442{margin-top:3%;}img.jsx-328882442{object-fit:cover;object-position:0 80%;}.image-stack.jsx-328882442{display:grid;grid-template-columns:repeat(12,1fr);position:relative;}.image-stack__item--top.jsx-328882442{grid-column:1 / span 8;grid-row:1;padding-top:20%;z-index:1;}.image-stack__item--bottom.jsx-328882442{grid-column:4 / -1;grid-row:1;}.rightImage.jsx-328882442{margin-left:10px;padding:5px;}.leftImage.jsx-328882442{margin-right:10px;padding:5px;}.jumbo1.jsx-328882442{background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));background-size:cover;background-position:10% 30%;min-height:300px;padding-top:20%;padding-bottom:20%;}.jumbo1words.jsx-328882442{color:white;font-family:\"Permanent Marker\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRmdCLEFBR29CLEFBT0MsQUFTRyxBQU1KLEFBTVUsQUFNSixBQUtGLEFBS0MsQUFLaUQsQUFVdkQsWUFDbUIsQ0EzRHBCLEFBc0IyQixDQWZ2QyxHQVN1QixBQXVCVixDQUtBLENBVkQsSUFOQSxDQXpCWixLQXFDQSxDQUxBLEFBVUEsSUFoQmlCLEtBWmpCLElBMkNBLE9BckNtQixBQU9SLFVBQ1gsQUFrQnVCLFFBekJ2QixjQTBCNkIsNEJBRVgsaUJBQ0QsZ0JBQ0csbUJBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9sb2dpbic7XG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjdXJyZW50VXNlciA6ICcnLFxuXHRcdFx0ZGVsZXRlICAgICAgOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHR1c2VyU3RhdGUgPSAodXNlcikgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoXG5cdFx0XHR7XG5cdFx0XHRcdGN1cnJlbnRVc2VyIDogdXNlclxuXHRcdFx0fSxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3VzZXIgbG9nZ2VkIGluJyk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fTtcblxuXHR0b0xvZ291dCA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgY3VycmVudFVzZXI6ICcnIH0pO1xuXHR9O1xuXG5cdHRvRGVsZXRlID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBkZWxldGU6IHRydWUgfSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0IHRpdGxlPVwiSG9tZVwiPlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+WW91ciBZb2dhIEpvdXJuZXk8L3RpdGxlPlxuXHRcdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuXHRcdFx0XHRcdFx0aW50ZWdyaXR5PVwic2hhMzg0LWdnT3lSMGlYQ2JNUXYzWGlwbWEzNE1EK2RILzFmUTc4NC9qNmNZL2lKVFFVT2hjV3I3eDlKdm9SeFQyTVp3MVRcIlxuXHRcdFx0XHRcdFx0Y3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2FyZC1zcGFjZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXN0YWNrXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbWFnZS1zdGFja19faXRlbSBpbWFnZS1zdGFja19faXRlbS0tdG9wXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTUzNjcwNzItOTA5MjM0NDIzMDZlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01MDAmcT02MFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW1hZ2Utc3RhY2tfX2l0ZW0gaW1hZ2Utc3RhY2tfX2l0ZW0tLWJvdHRvbVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vbWVkaWEudGltZW91dC5jb20vaW1hZ2VzLzEwNDEwMzY1MS82MzAvNDcyL2ltYWdlLmpwZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtc20gZmxvYXQtbGVmdFwiXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20gcmlnaHRJbWFnZSBcIj5TaWduIFVwPzwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHR7LyogSnVtYm8gZGVzaWduICAqL31cblx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwianVtYm8xXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQganVtYm8xd29yZHNcIj5JbWFnZTwvaDE+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PiAqL31cblxuXHRcdFx0XHR7Lyoge3RoaXMuc3RhdGUuY3VycmVudFVzZXIgPyAoXG5cdFx0XHRcdFx0PEtpY2tzdGFydGVycGF0aCBjdXJyZW50VXNlcj17dGhpcy5zdGF0ZS5jdXJyZW50VXNlcn0gLz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8TG9naW4gdXNlclN0YXRlPXt0aGlzLnVzZXJTdGF0ZX0gLz5cblx0XHRcdFx0KX0gKi99XG5cdFx0XHRcdHsvKiA8S2lja3N0YXJ0ZXJwYXRoIGN1cnJlbnRVc2VyPXt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyfSAvPnsnICd9ICovfVxuXG5cdFx0XHRcdHsvKiA8aW1nIHNyYz1cIi9pbWFnZXMvdGVzdC5qcGdcIiAvPiAqL31cblx0XHRcdFx0PGgxPkluZGV4IHBhZ2U8L2gxPlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmNvbC1zbSB7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDcwMHB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHQvLyBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDtcblx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmNhcmQtc3BhY2Uge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMyU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gLmxlZnRJbWFnZSB7XG5cdFx0XHRcdFx0Ly8gXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0Ly8gXHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0Ly8gfVxuXG5cdFx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRcdFx0b2JqZWN0LXBvc2l0aW9uOiAwIDgwJTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBTdGFja1xuXHRcdFx0XHRcdC5pbWFnZS1zdGFjayB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmltYWdlLXN0YWNrX19pdGVtLS10b3Age1xuXHRcdFx0XHRcdFx0Z3JpZC1jb2x1bW46IDEgLyBzcGFuIDg7XG5cdFx0XHRcdFx0XHRncmlkLXJvdzogMTsgLy8gbXVzdCBiZSBvbiB0aGUgc2FtZSByb3cgYXMgdGhlIG90aGVyIGltYWdlXG5cdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMjAlOyAvLyB0aGlzIHB1c2hlcyB0aGUgaW1hZ2UgZG93biwgYW5kIGtlZXBzIGl0IHByb3BvcnRpb25hbCBhcyBpdCByZXNpemVzXG5cdFx0XHRcdFx0XHR6LWluZGV4OiAxOyAvLyBtYWtlIHRoaXMgaW1hZ2UgcmVuZGVyIG9uIHRvcCBvZiB0aGUgYm90dG9tXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5pbWFnZS1zdGFja19faXRlbS0tYm90dG9tIHtcblx0XHRcdFx0XHRcdGdyaWQtY29sdW1uOiA0IC8gLTE7XG5cdFx0XHRcdFx0XHRncmlkLXJvdzogMTsgLy8gbWFrZSB0aGlzIGltYWdlIGJlIG9uIHRoZSBzYW1lIHJvd1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yaWdodEltYWdlIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogNXB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5sZWZ0SW1hZ2Uge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogNXB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5qdW1ibzEge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMCUgMzAlO1xuXHRcdFx0XHRcdFx0Lyogb3BhY2l0eTogODAlOyAqL1xuXHRcdFx0XHRcdFx0bWluLWhlaWdodDogMzAwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMjAlO1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDIwJTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuanVtYm8xd29yZHMge1xuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiUGVybWFuZW50IE1hcmtlclwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuIl19 */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.8e2f6a96997df8562e81.hot-update.js.map