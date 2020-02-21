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
        className: "jsx-328882442" + " " + "col-smfloat-left",
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
      }, ".col-sm.jsx-328882442{height:700px;width:100%;}.card-space.jsx-328882442{margin-top:3%;}img.jsx-328882442{object-fit:cover;object-position:0 80%;}.image-stack.jsx-328882442{display:grid;grid-template-columns:repeat(12,1fr);position:relative;}.image-stack__item--top.jsx-328882442{grid-column:1 / span 8;grid-row:1;padding-top:20%;z-index:1;}.image-stack__item--bottom.jsx-328882442{grid-column:4 / -1;grid-row:1;}.rightImage.jsx-328882442{margin-left:10px;padding:5px;}.leftImage.jsx-328882442{margin-right:10px;padding:5px;}.jumbo1.jsx-328882442{background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));background-size:cover;background-position:10% 30%;min-height:300px;padding-top:20%;padding-bottom:20%;}.jumbo1words.jsx-328882442{color:white;font-family:\"Permanent Marker\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRmdCLEFBR29CLEFBT0MsQUFTRyxBQU1KLEFBTVUsQUFNSixBQUtGLEFBS0MsQUFLaUQsQUFVdkQsWUFDbUIsQ0EzRHBCLEFBc0IyQixDQWZ2QyxHQVN1QixBQXVCVixDQUtBLENBVkQsSUFOQSxDQXpCWixLQXFDQSxDQUxBLEFBVUEsSUFoQmlCLEtBWmpCLElBMkNBLE9BckNtQixBQU9SLFVBQ1gsQUFrQnVCLFFBekJ2QixjQTBCNkIsNEJBRVgsaUJBQ0QsZ0JBQ0csbUJBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9sb2dpbic7XG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjdXJyZW50VXNlciA6ICcnLFxuXHRcdFx0ZGVsZXRlICAgICAgOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHR1c2VyU3RhdGUgPSAodXNlcikgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoXG5cdFx0XHR7XG5cdFx0XHRcdGN1cnJlbnRVc2VyIDogdXNlclxuXHRcdFx0fSxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3VzZXIgbG9nZ2VkIGluJyk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fTtcblxuXHR0b0xvZ291dCA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgY3VycmVudFVzZXI6ICcnIH0pO1xuXHR9O1xuXG5cdHRvRGVsZXRlID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBkZWxldGU6IHRydWUgfSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0IHRpdGxlPVwiSG9tZVwiPlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+WW91ciBZb2dhIEpvdXJuZXk8L3RpdGxlPlxuXHRcdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuXHRcdFx0XHRcdFx0aW50ZWdyaXR5PVwic2hhMzg0LWdnT3lSMGlYQ2JNUXYzWGlwbWEzNE1EK2RILzFmUTc4NC9qNmNZL2lKVFFVT2hjV3I3eDlKdm9SeFQyTVp3MVRcIlxuXHRcdFx0XHRcdFx0Y3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2FyZC1zcGFjZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXN0YWNrXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbWFnZS1zdGFja19faXRlbSBpbWFnZS1zdGFja19faXRlbS0tdG9wXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTUzNjcwNzItOTA5MjM0NDIzMDZlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01MDAmcT02MFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW1hZ2Utc3RhY2tfX2l0ZW0gaW1hZ2Utc3RhY2tfX2l0ZW0tLWJvdHRvbVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vbWVkaWEudGltZW91dC5jb20vaW1hZ2VzLzEwNDEwMzY1MS82MzAvNDcyL2ltYWdlLmpwZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtc21mbG9hdC1sZWZ0XCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbSByaWdodEltYWdlIFwiPlNpZ24gVXA/PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdHsvKiBKdW1ibyBkZXNpZ24gICovfVxuXHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJqdW1ibzFcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNCBqdW1ibzF3b3Jkc1wiPkltYWdlPC9oMT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+ICovfVxuXG5cdFx0XHRcdHsvKiB7dGhpcy5zdGF0ZS5jdXJyZW50VXNlciA/IChcblx0XHRcdFx0XHQ8S2lja3N0YXJ0ZXJwYXRoIGN1cnJlbnRVc2VyPXt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyfSAvPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxMb2dpbiB1c2VyU3RhdGU9e3RoaXMudXNlclN0YXRlfSAvPlxuXHRcdFx0XHQpfSAqL31cblx0XHRcdFx0ey8qIDxLaWNrc3RhcnRlcnBhdGggY3VycmVudFVzZXI9e3RoaXMuc3RhdGUuY3VycmVudFVzZXJ9IC8+eycgJ30gKi99XG5cblx0XHRcdFx0ey8qIDxpbWcgc3JjPVwiL2ltYWdlcy90ZXN0LmpwZ1wiIC8+ICovfVxuXHRcdFx0XHQ8aDE+SW5kZXggcGFnZTwvaDE+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuY29sLXNtIHtcblx0XHRcdFx0XHRcdGhlaWdodDogNzAwcHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdC8vIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xuXHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuY2FyZC1zcGFjZSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAzJTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyAubGVmdEltYWdlIHtcblx0XHRcdFx0XHQvLyBcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHRcdFx0XHQvLyBcdHBhZGRpbmc6IDVweDtcblx0XHRcdFx0XHQvLyB9XG5cblx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0XHRvYmplY3QtcG9zaXRpb246IDAgODAlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFN0YWNrXG5cdFx0XHRcdFx0LmltYWdlLXN0YWNrIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuaW1hZ2Utc3RhY2tfX2l0ZW0tLXRvcCB7XG5cdFx0XHRcdFx0XHRncmlkLWNvbHVtbjogMSAvIHNwYW4gODtcblx0XHRcdFx0XHRcdGdyaWQtcm93OiAxOyAvLyBtdXN0IGJlIG9uIHRoZSBzYW1lIHJvdyBhcyB0aGUgb3RoZXIgaW1hZ2Vcblx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAyMCU7IC8vIHRoaXMgcHVzaGVzIHRoZSBpbWFnZSBkb3duLCBhbmQga2VlcHMgaXQgcHJvcG9ydGlvbmFsIGFzIGl0IHJlc2l6ZXNcblx0XHRcdFx0XHRcdHotaW5kZXg6IDE7IC8vIG1ha2UgdGhpcyBpbWFnZSByZW5kZXIgb24gdG9wIG9mIHRoZSBib3R0b21cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmltYWdlLXN0YWNrX19pdGVtLS1ib3R0b20ge1xuXHRcdFx0XHRcdFx0Z3JpZC1jb2x1bW46IDQgLyAtMTtcblx0XHRcdFx0XHRcdGdyaWQtcm93OiAxOyAvLyBtYWtlIHRoaXMgaW1hZ2UgYmUgb24gdGhlIHNhbWUgcm93XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJpZ2h0SW1hZ2Uge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmxlZnRJbWFnZSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Lmp1bWJvMSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IDEwJSAzMCU7XG5cdFx0XHRcdFx0XHQvKiBvcGFjaXR5OiA4MCU7ICovXG5cdFx0XHRcdFx0XHRtaW4taGVpZ2h0OiAzMDBweDtcblx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAyMCU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMjAlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5qdW1ibzF3b3JkcyB7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJQZXJtYW5lbnQgTWFya2VyXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG59XG4iXX0= */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.82b5b3e4b130d235ff53.hot-update.js.map