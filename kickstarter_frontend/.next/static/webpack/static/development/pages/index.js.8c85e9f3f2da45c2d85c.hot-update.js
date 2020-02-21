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
        className: "jsx-3334143493",
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
        className: "jsx-3334143493",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-3334143493" + " " + "container card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3334143493" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("img", {
        src: "https://media.timeout.com/images/104103651/630/472/image.jpg",
        className: "jsx-3334143493" + " " + "col-sm float-left leftImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-3334143493" + " " + "col-sm rightImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-3334143493" + " " + "form-signin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("img", {
        src: "data:image/png;base64,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",
        alt: "",
        width: "120",
        height: "120",
        className: "jsx-3334143493" + " " + "mb-4 logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), __jsx("h6", {
        className: "jsx-3334143493" + " " + "h3 mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Your Yoga Journey Begins here!"), __jsx("label", {
        htmlFor: "username",
        className: "jsx-3334143493" + " " + "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Username"), __jsx("br", {
        className: "jsx-3334143493",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), __jsx("input", {
        type: "username",
        id: "username",
        name: "username",
        placeholder: "Username",
        required: "",
        autoFocus: "",
        value: this.state.username,
        onChange: this.handleChange,
        className: "jsx-3334143493" + " " + "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "password",
        className: "jsx-3334143493" + " " + "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Password"), __jsx("input", {
        type: "password",
        id: "password",
        name: "name",
        placeholder: "Password",
        required: "",
        value: this.state.password,
        onChange: this.handleChange,
        className: "jsx-3334143493" + " " + "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), __jsx("button", {
        type: "submit",
        className: "jsx-3334143493" + " " + "btn btn-lg btn-primary btn-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Sign in"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3334143493",
        __self: this
      }, ".col-sm.jsx-3334143493{height:700px;width:100%;}.card-space.jsx-3334143493{margin-top:3%;}.logo.jsx-3334143493{display:block;margin:0 auto;}.rightImage.jsx-3334143493{top:50%;padding:30px;border:2px solid red;margin:5px;box-shadow:9px 7px 25px -10px rgba(0,0,0,0.55);}img.jsx-3334143493{object-fit:cover;object-position:0 70%;}.leftImage.jsx-3334143493{margin-right:10px;padding:5px;}.jumbo1.jsx-3334143493{background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));background-size:contain;background-position:10% 30%;margin-top:3%;padding-bottom:20%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SGdCLEFBR29CLEFBT0MsQUFJQSxBQVlOLEFBUVMsQUFLQyxBQUtpRCxRQWpCdEQsS0F2QkYsQ0FPWixBQUllLEdBb0JRLENBS1YsR0FaUyxHQXJCdEIsSUFTQSxFQXlCQSxTQUxBLEdBUFksV0FDdUMsT0FlMUIsd0JBQ0ksZ0JBZjdCLFlBaUJlLGNBQ0ssbUJBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9sb2dpbic7XG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjdXJyZW50VXNlciA6ICcnLFxuXHRcdFx0ZGVsZXRlICAgICAgOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHR1c2VyU3RhdGUgPSAodXNlcikgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoXG5cdFx0XHR7XG5cdFx0XHRcdGN1cnJlbnRVc2VyIDogdXNlclxuXHRcdFx0fSxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3VzZXIgbG9nZ2VkIGluJyk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fTtcblxuXHR0b0xvZ291dCA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgY3VycmVudFVzZXI6ICcnIH0pO1xuXHR9O1xuXG5cdHRvRGVsZXRlID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBkZWxldGU6IHRydWUgfSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0IHRpdGxlPVwiSG9tZVwiPlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+WW91ciBZb2dhIEpvdXJuZXk8L3RpdGxlPlxuXHRcdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuXHRcdFx0XHRcdFx0aW50ZWdyaXR5PVwic2hhMzg0LWdnT3lSMGlYQ2JNUXYzWGlwbWEzNE1EK2RILzFmUTc4NC9qNmNZL2lKVFFVT2hjV3I3eDlKdm9SeFQyTVp3MVRcIlxuXHRcdFx0XHRcdFx0Y3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvSGVhZD5cblxuXHRcdFx0XHR7LyogSnVtYm8gZGVzaWduICAqL31cblx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwianVtYm8xXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQganVtYm8xd29yZHNcIj5JbWFnZTwvaDE+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PiAqL31cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2FyZC1zcGFjZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHR7LyogTGVmdC1zaWRlICAqL31cblx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9tZWRpYS50aW1lb3V0LmNvbS9pbWFnZXMvMTA0MTAzNjUxLzYzMC80NzIvaW1hZ2UuanBnXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLXNtIGZsb2F0LWxlZnQgbGVmdEltYWdlXCJcblx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdHsvKiBSaWdodCBTaWRlICAqL31cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHJpZ2h0SW1hZ2VcIj5cblx0XHRcdFx0XHRcdFx0ey8qIFNpZ24gVXAgKi99XG5cdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZm9ybS1zaWduaW5cIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtYi00IGxvZ29cIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPVUFBQURjQ0FNQUFBQzRZcFpCQUFBQWlsQk1WRVgvLy84QUFBRDgvUHo1K2ZuNit2cjA5UFR2NysvcDZlbmIyOXZ1N3U3ejgvUG82T2pqNCtNVUZCVGYzOS9OemMxUlVWR3ZyNjlwYVdrZkh4K0tpb282T2pxOXZiM0V4TVF0TFMzUjBkRW5KeWQvZjM4WUdCaGlZbUtucDZkQ1FrSjJkbmFTa3BLY25KeGRYVjB5TWpKRlJVVlVWRlFMQ3d1TmpZMjN0N2RvYUdoZVhsNTVlWG1pb3FKNExkcldBQUFWRUVsRVFWUjRuTjBkYWJ1cFhGUWxrdEtnVVdoUWtxdi8vL2R1ZTYwZG9SeFVoOVA2OEQ3dnhXR3Yxanp1MGVqM2dlVWs2NkF1VTRaaGx2dlFaVDl3aEg2QjVXY0xPOWVkMU5rSFJuZ0lmSVlKcHA4K1ZKZkFpdE9Gb29XNm42Ym1NYlRuSEhuTjlmYTVPT0lXaXN0LytueXRnZVVsMTlJT3dUNHVtTlRVSS90Q3ZzbWlRTS9kT2Fyd3dmTzFCbTRtMkZwazZFa3NGeGd5cTJOa3o4ZFhuMkQ1a2FBbnh1eERCMndMM05UTklrOVh6UlVnQ0tyR2xyaWJUMG5oeWVibXdwOUVrbHRZb2I3M1Mvd0lvNTQwWlY0amZNby8zZnFMV3JiQThLQTY2ek4rek5vLzV1NTAzUEJwa2Z0clNMTDhJak9TTTNycE90NmZjcVVKd1Q4Si9Geko5ZFdaZ0xFYWhObmk3eHVJS3ZDQ0ZlNUtGTk40NytYV25hTDU0ekNXckhCZm9yaE9nc2dTaGtYREFpWjJkSFJLS3U0TnpaME9qSWdGU0Z2ZEwrMUZjckFXNGwvVG1FL0E0cEFzS1lxT1owbUQ0OU1DV01FN2MrcE9tdzZRaUlWV1ZVNXlxVzhPZjlyWGJnWmU4U2lybXJvMnFBanhBcHg3b0x5YUdMYjQ2ZFAwQTZ3UVVTOU9EZDNoV1EyRW1mWVBCWEtmQzBQRmNhUUV5S3hKdmhnc2pueGtZa1FjU1lPMEhBQ3VDampLSituVEora1BaaEhFeGt2ZC9mUkorZ1BXMVlHT08yMklqaHdGVVFOdU5jUEZwMC9TSTBnaHFOYkFIcXhpTFVEUVNWa2p6dWVmUGtpZllBTzNiZ1pOeUpGR1V2L3lZZENFNUVOaVFQdy9tUngrR3VZZUNaUDFnWWFRRkJZbjRnZ1lrMCtmbzFjUWlDdGc1b05XT3lOaFE4SklhOWhJTGdpUy81UkI2eDFFOGlnTUcwbnBXQ0NwRHpqSUlpQVJ4Uk1NTkhsVndweVlrR0RBVVJhQm1WSDRBcWRobThrUkg2Vk02ZzAwbjN5RzdiSmcxNEVybnBHOUlpYmswNmZvR1lTRVlmWUR6bUVCVEFvYll0cWZQa1hQd0JmcWRaVjkraFE5QTZzNURCTjkraFI5ZzZJVzZuWFlVVWpoMkFXRjVobTZEZUh6OWZBMXowZ3hHWGs3ZEg2ZEZkSFdhZWlPM1NobkdIWG83c0JJU0ptVjl1bEQ5QTE4NGZSNGY3SzcraFhJWkNaUlBuMkl2a0hhTVhJMDdGeFc0ZHBGYTJZLzZKSVBBZEliWVgzNkVIMERGNmJNWnVqOE9sS0swSG53cWtjc29rcHYrS1EwR1dmd1hnOS9ZQmhqNERubVFzR2FqRGw0cVJ5SEJTazd5NlR6bHZhVm5iT1N6OFNkeGM1enoxbnR2bEhHdHgxT0tDOUlSZkFiOHcxYzBsM0VKZXlZTHkwSjJneXo2NmlORUpGTXZwQmgyWUNSdzI0OEF1RUlQYlRiVHI2c1d4Qml4dS9HakpBOFp3SEdOMnJZUE8ybzZpeDZnT1RtRzZ1NzRwR1J1Mkd4a0RTWU12NVgxZ1FMRjlic0pKdWV3YVRKOGp1RDFFaG05QzYreDhVeGpPZ2JoWEkwMHhtbWkwS2V0QWNrMzBzQ0NsNmlobjFHQzdiSkxEdFFGek5VcncvdDdzVE5sRHAzZ2RkZ3J2cEJGYXF0bldQek5iTnArUjBGY0JITUt0NTZkaXgvNGQ5cHRrdVpOTGpYVGRNREhWZmQxK2t0Vmx5NFZtYTNjMEJuSjRacDc5Mnh0ZythSjcvYXdTQXFXME9qZk1MYk9xSnl2S1hZSWlqWEhERDNUdjVZeUR4L1RacVBXbWx1VjJYVzdWVS85Smd5ekhVZmxPc1YraWpFbDZRd0xsRzVMblN6eWovbUF2dWJEczdwZHAvU3Q0NXRmTkJzeGV4YnU5WWthMFRjMStwQnhscFNFUGVBbk9icWw5VXBmdlZSc0piS1ZFRzlRbFB3VnBlMzlDZjFHbnUvbDRVdjR1ZjJQbXlHNjFHcVFzbHVuWUxQcU1hMXIxQ3BlSk9zNVRQWFVOMW9wT3pTOCt2Ri96M251a2pHN2s0QzUzb0h1V1lKTGFWUmZjMGlyNmxJWEt2azF0VnBxNTNNaXZEWlp5VFRJTXZBMWIrY3hqYnBlNlpoQ1F0WGUwYXcyS3pnb01QdHE2N1B4SzNGOG9neVZlVkVpUWpxRXUyd1RTa1M1MU5XTXc4VmJlbWVrUVNCSk95cm5ybmVwZnR6Vk90NVF6b25ta3krYlhGaEMxN1QyMXBMRFhHbzZrZDJTK1JRQjQxcjR6eThROUFqL3Z4RnZxUWR4VEVPNld1aWUzNEdBajRCTlh2RmwxTDhPaXk1cUJETGxpNlpBSXdsWDAwcVFLTTBDcUNiVUlvUTZWOFF2RHo2U2Q0clpiRm1KbWNLaG1kZFkxNGZBV0M1dnNWeVVsQllhNmQ4YUxnVlZNdGxMS2lqZjRBWDJKaDBneXJISnJOL0tSVTlyVlNlTlprRlBpVE1zREplRENOSUhZUlo1emV2U2lvVHR3eWdNMUF0eVpYVGc0UWd5TXdNTUNIVTNJKzNnQmFlUXFES3hUdGp3cDIzcmJEd3JjdndWWThIc0x4TFZiaUZ0V3lYOFVIZVhGOUhJaFpCVFozUWZyZkxNeUNPVmtGTCtKZUlMazlxbkRIaEQwSG9vdk1FNmFQMDlRMXl3TEYzV0dadFU1VGpISFRMNW9xelJPQlM4bHNDR01wbEtSUUN5R2dNekoyaHdiOGdTUTRqK3hIUmhhSkIxTEorZVl1Mzg2Y01DV0I1bDQ4TUMrUFN5dk1SSU41eXJrMnVSVjd6RjJlZnFGUTNJeHVNQTBTemMrb1RYc1JaQkE1T3lZY3Q4Z1NXRnlZYmIyTjVIWHMvNHdrbTlyWWpsTk1aZWR0RytSRFhpYm10Q1hJZ3FZU0hnWE1aczZRSmg4RUhNTlFXZWVDQ0NVdWQ5dVY4SkFISkt4UlJVSVNkL0NlSzFHSTU5Vy9KOENMZ3o1dlhEeGxVRE1uK1ROQVJQeDkzQ3Z3cmswOWozdGFzL0xoTm5ZQjB3Y0xEMkYwd0VrcUhmdjJJSkN3N1pqTUhPSGJNOFFXSUJSQXVFbHIydnZCSW5HdjdOQWZNUXhFRTdlcTRDaUN5SzM2WkEzRk9LeWxOa1FabVRESnp5WHZ5NVFITXo2SFpzZ0ZMVVZCc0s5UHlFQnpmOVRFMERNODdCYnF1RTUvQ2JvaGNud1ZNOVpqWCtndVltQ1I0ZVNTZGRmME9haVVncFY4eGxCbmRwcE5xSTBEcWVGRzlSb2xrVTg1K2JpU3I5Y1d4cjhKMkRIYTV6U1FYRzlhUUVuMVRid0xQa0tscVNzVGFMRVNSMndKVks4SFF0S1JYTUJOZ1QzQjJOcDM1NWZ4QnJXbGh0N1VJQXQ4UUdrWjRuSGNCWTVIck5DZnZ3ZFEvSWFDT3REbWpvc0FQSHpqcXkxLzlvVVpKR2RzaklKMWU2bDYyZklld1JYMk1PTmt4RFJCclJDUU1KbTNqeGVJenZQNXBESmVDNHRsSmNMeUswd0hIaDdqTFFsSmUva29vRDNyZ3A2QW15MmRUQkRHWFExZk0vVndMejd1d0ZyWE1tcWJMWFFiUlRGRDRmTzhiRWhaczVlcEtWakNWQjdvOHA4Yyt2d1huTmNUU1RaY3YrTS9PZnJ1TFQ2Qk1EaFdHc25Md2l6MVk2SElxNzZsSE5mWDJxcm83QnQ0aGd0ekMyc3RzUlhFRllZYTRiVnJWTFYzNDZhdEVCYXNCbFk0RmF1UE45Y0hRT1lja0gzTDY4UjVKdVhqbVJvVm9zMUN1SUhtcFdVMVFJWjJuQ0ZpVzBnbzQ2ZFl6VDFDQTNvUUlmdW9xNGtKWGFFMUlpYWI5a3ArZEFWT0NHbkRsSzRhVnpwWmlKNkZ6Z0drUlZxQnZwQ3FtUmtvVnkxb2dESEtGNVVjVkxHL005OGhzVXhybndFK1hzd3JMMDZUalA4S2xFR1JWbEJ2NHJmaHo0QUdXYVp5eGUxWWVoSVE4WVFFSTdNV01ab3RTM2NXY1NtbDVxRUpPN28yZ1RUNlgzTVFmVGh1bllJNHAyTXBqVXFobEIvNEFGeTZOeWdRdHFOVVVrYzRxV002MHkyTGQvWlFxVElNZGNjS2hYQTk1RWlpUFVNWmpNM3luWnJZSG5rWnlZeHhYVElzbDRBSVE2MklwcFBLOEt2QndCR0Z3NlZMeWtIdW5nb1dHbENURFdNRzRHSXFVNEMzdVNLYkx0YU45U1dBU3RTRDFsaGlZTHZDdGZZM3h0T3BvdVd6VFQrRGkrZjRCRzNIQzlsam1UdkdKQTVhbDJMT1pDWUtFTXV4aXRjRWR6N1ZkUmIzNDVOZ2dsNnZFUEs4eWhlUThpd0dlUjBTQlExMjFycE0xRUZqL0JxYzFjM3kvNzNjUlU5Vmc1UGtoT0s4ZlJhbWtIRnRpYVFPWnkzTFBISW1lNkR0NFVESEZDRmxZcVNTYUN6VmFodFVnb3pBZ1FYMmhXaE5ZaTZVTTV2dE5FTStwNURTdDJtV0ttQUk1RFRCVVNFbEdMblVBRjFZUk1XaitaMFV0YTNaNWEzMU9pYkE1ZVJUcFNlSXdaR1BxNjRCWkhaWnBxOGFjVy9jUlVUM1JiK1FoWEZJMVFiQ09WVm9SbUhvbFE2NlBDa3NsOEd5NUxjb1c2YjdDbEpSUEhXUWdzMkdBQ1JUNWJaTkV5cHhhbEVZeDhYRUdIMmg3TWNrYVlpS1hLMWlybnVBczN6dHJlV2tlTlpIcUlrYWx5b1IzNFJISXpqNjZpblVtM2xrbW5LQnA3UWZSdm5kUlZucEpWcndEUW5DV29kUThvWW8xenN6QmxSNE5uaXk4NWhvcHk2T3RNb0Y4UllXVUU4V0lTZnBIRDYxYmpjRnZOL0ZTWHEvOFFHdk1laW42eHJpekdrdzdMQXVmT1VqaTFTcE9qcUU5ZzNTNlUyR3llWEFSVjFWckVnMGJuOVEvZ3RUTU5reThGYUoydWJCa2JmTmNVeDZvRWs2YTMyK3hMNkwxZHF2dDJhbHJXNWJ0U3Z4b0RpNk1YcVdBRk5LQXdqZVVwcWZKbjVDdkM3TTd5MGpCY3hWa1V2T2gyRGVDQ3lZOWROYXJEcnJ2SmhWS2l0R25rNkc1elRxT0ZyWTJrcGpwaFlLTXZaYTE5UnE0THltOERSZ1kzMG4rbUJkRi9zR1RwUFdIWmFRUnA4S1BIanlQdDZIRHZrQm84MGp2S29jL2dVVjN0WnByNHViMHMrcTd1NUY5TENUNHIzYU16c3ZNSGVQb2RsK0RIaTJ6c1JkZ05mUXpYendvVHgyWnRXcjBlT2ZWbGVKdkE3RHppRm05RnNhSmJ1UlRXOXJyM2lzdjZLYkZtVVo4eDFlTTc5UTJ5bnA3TzZQOUk4dzYyczg4UlUvMWVmWm5KUzA0SitkV1g5ai9YUWRZOWZHZkpRa3JSUCtJU3FiK29mSHpYM3dEaUZpdHVTMTBOd0RyUXM4WjQyOHh6RXoveUg1aHpGYVpUemt0dkIxQU1qT09KZ3FWeXI2UDF3MXc2ck9rWk9mYUhpT1lVQ0xaWUZDd2Y0dVVQNTZXRTNKOEhxWkI5STJDRVV0SE14NTlBNmFURzFJVUYrQmRlazJFYzRMZHlSd0dJOS9aeTM4UFd5eXJQL1lJZUNWRUhKZEJodkdoZ3JtTnFOcys3c21pSDErWTlxcy9IR3prM0VNQy9KbHVOQnFBMHNhdGp0ZVdTTVpPajNwWTk4SmlLL2ZEZW90Z0lJNUYxSEYyUXpDdVRMdWRXQmlUVE45ZEcxNEhnTG45aGlveHdDUXlVeHBFWGx3dEVZcTVYWk1TUTV4VDV6ekxSWERhNWdpT3kyaGRRZmFxNVF0c2pPMTZvd2RXb0o3MFRsNEFlcHRIVTdjMTY5TGluQk5jRjNOUktsdDJ4OTNDR0FyRHk4N2RZdHJWMUZUcm5kRjZ1WE43Z3dKVTREck14eUJnZW1YWGVZUkRtNVYzOVdwTndCUzZyR2MzQ25pS3RyTHJaVzJTMmd2RDBxNm10RDU3WktOaTJtMXY4OGNzMWdnYS91eDl3RUpTblpzaHVpM2lkQmN0ZTFKSFNrN3owU3UvLy80WlpudlVqdWMwV1NncnFYWEpYUGVmK25ZNXVxd1IxUEVJSDRHKzI5ZzF2ZzJHbzUzTTBGVUJPMjd2bXcxR3BNankvc0pHQlUrN3FsR3dJdFRMNjIvQzRORHgzWGV0SmJEQnFKNW1idkx1eGh1VzFyeHFOT1hVZStBUVlZRXk3WHlsUWZaQUROZ29mWE5tRHlPdU9xbkVMc2dHYXpoQk42SHpsQlkrOUtpaHhsTG8zN2VJT2FHa3ZPL21oRFhtY3ROaWFDenVtcDNiYm9uSXo3SVJsWWpSM3dsL3NFMkxkQ0xkQUhTcExZMkcwR0NCL2FRZFIxd2oyaEczYWV5VEVPTDFHK3BPd3BUVzhtNGNaVUprY25sb1FIS01UV2VienZNZ0xMb0V6WEpndk5FUVEzdFQ3dnRyeFVQaHY4dE5sS1NqUXF1V296bzFBTG15UjdHOGtNb3ZONURTWGs4bnV6a3VqZzQzTGk3bFlZYmllcEtvR3dDdC9uRDIzSHU1SDQrTDBGYmVUYU5BMCs2OXJKYUFFVmViSHNjR2dEN041Y01PVWNGNVZWQVVOQWQzRHdmcWtjMFpLK3FtZTkwUDdVTS8wTjNNOVJXdzBZdlRNN1JCTmIwOUxtUU9tdTA5clJxOVhPYjhHYVpFZ0g1cWFWN3N5UlRHODE5cTB5dE5iNDZMcEdxdWUyQlp2dDdWYkFmUXRQWFRQTVZZVzc2eS9ZYVdrTk9iaEFZTEptdmZtRU1iWXd0ZDByM3FtWUFmOG1NQ203Z3J6K2NudHBpdXVzVkhJUTkwM2F4WmNKaXRnL1VJZHdBWndacXU0THZQRlNmUW54Uk51aGZsdGw0NUJqK2grZTRXRm9WNTAzMGJDRWJ6VCtSWHdNNDl0OTZ3ZEdCUE40SU1NY0dER2o2MnhTNTdXSzhHaVJuL21Xd3ptWDk5YXYxV09jNThXLzZaZ0l2VlBJWERvakQzc0NpU2k1NFhCT0pHcjMvT2RVOG9rbmZiaWtCWUg1QVMyMkRWSGdwNU1IdXNQdWt6a3ZUaGF2dkRvNTdqb0RPVDN0cFg1R085VVg5aWdxMEhCNVkyRlQvdFRwRllLdDQrekRrSlpmK3Vma3NUR01XVUc5T0VZM1FKKzlqTUw1QWMyN09hazV5azBBL09nd1lqemo3U1p0RDdsQmowTmZtTkRJc3U0ZnVadEdZQTFiMTZRYWVKSVRtcW1qZklqaFNWSFRwbWR1Y293UUsxWXhPcEpPaVZYZlp4eWFTd2ZLajBhbUFHY2RONmw5Y2thV2Zaa1E3MU1zNzkzZGc4cEhxYVd0Um1PQUxUTExVdGdMZzlMMjR0bk9UZ29hNVZ6N29LMWRqRjluaWViNm03M0FNYW01cEtoenpkVjlYSElsNUlsNzY2bVl6THFHT3pUQUxObllzY3g0bHpOOWZOeW5oTDNYUXlKRWdhR2xIeEJ0OW5GL1M4ZUY3eWROK1ljTUk3c0JIU1ZXekdxK3NwVHJOV1owc1krdFM5VlU0RDk5TFlRK3pDVzEyK2ZPVFhqMUlEaWV0Mm00d29MZXU2Z0htRnpvdHMrcmd1QTJhKzlQZk1rMnMwNENtclVZTUN3UXJQWGFLUUV5STZEZHRxbUw0Sk9KSVJmTHZKbDFmQy9mSWV4MzNZdUpZYUswT3IvRW9OY01LMlhKMmw5dExLRFBOakxlWW9lQ0V6ZHRXaDVLVWFiSVVIcWd5N25jM0xsZmJzekk1MjVhUHE1NlppeUUyMFd5WEtpcEtTNVFmdmRQS01RNlRaNVRCMUE5QVFlYVhuaWpTZFNtNFdWdlN5MnN0Vjl5eU1CSFN3czVBajZ6aDRudWQrNURlNm9xRlF0S2E2VnhOelZURTltMzY2MG1GY1VmL2RIYWV6Ni8xOUZlanBWbFFJZEozZjd1TVRuRG9VMDZTdnRia2tZRTEvLzg0cVpiZSt4WEdkaEgzZDJnY0JWNXNGSWUrQ0ZPMnY1bjJkZnpXOUV4MEJkQkY4NXNwVlZ0QU1mZSticHVtci80SXdXL1RXNGd1TFlKd2VNZy9QQVQ4WFhJV3M4VmhNZTE1aHpNamQzY1B4blFETEJEY0R2Nmh6UXNxZ2JmY1ZmanZnT1A4MzNyYlFJZUNxdEQ4eWgvSTJRRlB1Vjk2MjBDR0E1bW14NXVWUEFMUVROU2QraHdHd0hzL1J2dksyaGM0QW1sT1cwUmZlUzlRaHNOc1YyZnc0Yk0yRE93QWZESzhNQVRoQTh0a2wrbjhVT0kyRWxNMXRrKy9EdFB1OUh1OENSYktQcWRUcHdmdVNFZlF4RktyMGZyd0JLZHpjRnlzL0FOaXMyUk9TaFJuTzFGZVh1L2NBV0VEdWFJdEVMUWdiOWJZTjlyY0I5NUUxdGNKM0EyTGt2SGdoUWNjQWQ5bWtSdDhlajdLSm02cGQvUU5ud2VML0ZxdHVuNFY1YUtyV1p4eXJHU2hYLzFmeXkyTmJYM3IyQjd6a0JSa3VUamUvRldyTkl6TStOQzVENndrNGl4UzVWMC9jRHREWkw5cUJuSVMvcW9adzJaeS8vVlVIYkw3MW1TVDhOVFhFMnRCaWRQeHRCbUtGRThNaytlOUVCZE1EVk5INldMUHdFN0RrY3E1S1liMDM0SEIwL0ZOWFQwK0lyUGo1b2xjMjRoWFNycFQ2K2VmU0FxNFhrMFdFajVvcDJvR29HS1JFR0hzOUxwQjc0aFFXV2FxYWhFb3ZBc29yQjVobnV0c0E4T3NnYWNmQ2YvYTlySE1CNVpRRGJvSFdQaDhKa1dWdnBEc3Mxdk5PRGVqRXdqVjVhbDN6NmllQWxUSjlTWm92dTNPSXBLME9uVlRxdGwvZDlocUlMbXlGZDQ3TlM0aWZCOTQrK1RMeTZ2dzc2SGlCcWJhSFZjY251NDJxWUdldzBMbXdIVTdRMk92M1VlQ3RBTmI0SlpFeWZlZUEzRVRJVUJobGM1UDMxM0RSRmpnMzBzbENwdVVtc2lYeGhXT3kvRlN3aXI5RkZQV3dGVC84QWt5dGNBT1hhZTBNalN5ei9obTR1V0JyWWFCQzIrVXFDUm9XYzM4WmNJc0MwUmo2dGZSUXM0VnBVNGZpbUMvd3k3WmhzRGVoMTB2Mmo0Zk0vUXNvSXZDU25aK2dmWGdkcTdwM2lQS3RadG5DUXBvWElFbUNZcE9yeFl6VFVmVWRiR1picVVGb0ZiVC9NeWdpa0ltRkxQSjJNZlE0eSt1VlkvcXFxdTczeFg4U00zYk8xNHZKOGNhTE1sZWEvTnlVK3FYQWprWEpMWVRPMDFWbmVYWEJVU292WXpVd1NGUHgvSmNJK0I4K05GdlR1b0gyOWdBQUFBQkpSVTVFcmtKZ2dnPT1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPVwiMTIwXCJcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjEyMFwiXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwiaDMgbWItM1wiPllvdXIgWW9nYSBKb3VybmV5IEJlZ2lucyBoZXJlITwvaDY+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFVzZXJuYW1lXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ1c2VybmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cInVzZXJuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJ1c2VybmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRhdXRvRm9jdXM9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRQYXNzd29yZFxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIHR5cGU9XCJzdWJtaXRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFNpZ24gaW5cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdHsvKiB7dGhpcy5zdGF0ZS5jdXJyZW50VXNlciA/IChcblx0XHRcdFx0XHQ8S2lja3N0YXJ0ZXJwYXRoIGN1cnJlbnRVc2VyPXt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyfSAvPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxMb2dpbiB1c2VyU3RhdGU9e3RoaXMudXNlclN0YXRlfSAvPlxuXHRcdFx0XHQpfSAqL31cblxuXHRcdFx0XHR7LyogPEtpY2tzdGFydGVycGF0aCBjdXJyZW50VXNlcj17dGhpcy5zdGF0ZS5jdXJyZW50VXNlcn0gLz57JyAnfSAqL31cblxuXHRcdFx0XHR7LyogPGltZyBzcmM9XCIvaW1hZ2VzL3Rlc3QuanBnXCIgLz4gKi99XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuY29sLXNtIHtcblx0XHRcdFx0XHRcdGhlaWdodDogNzAwcHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdC8vIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xuXHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuY2FyZC1zcGFjZSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAzJTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQubG9nbyB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIC5sZWZ0SW1hZ2Uge1xuXHRcdFx0XHRcdC8vIFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdFx0XHRcdC8vIFx0cGFkZGluZzogNXB4O1xuXHRcdFx0XHRcdC8vIH1cblxuXHRcdFx0XHRcdC5yaWdodEltYWdlIHtcblx0XHRcdFx0XHRcdC8vIGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0Ly8gcG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0dG9wOiA1MCU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAzMHB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgcmVkO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiA1cHg7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiA5cHggN3B4IDI1cHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjU1KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0XHRvYmplY3QtcG9zaXRpb246IDAgNzAlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5sZWZ0SW1hZ2Uge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogNXB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5qdW1ibzEge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IDEwJSAzMCU7XG5cdFx0XHRcdFx0XHQvKiBvcGFjaXR5OiA4MCU7ICovXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAzJTtcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAyMCU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gLmp1bWJvMXdvcmRzIHtcblx0XHRcdFx0XHQvLyBcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHQvLyBcdGZvbnQtZmFtaWx5OiBcIlBlcm1hbmVudCBNYXJrZXJcIjtcblx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.8c85e9f3f2da45c2d85c.hot-update.js.map