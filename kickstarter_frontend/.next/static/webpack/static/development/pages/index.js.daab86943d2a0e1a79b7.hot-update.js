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
      }, __jsx("img", {
        src: "https://media.timeout.com/images/104103651/630/472/image.jpg",
        className: "jsx-328882442" + " " + "col-sm float-left leftImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-328882442" + " " + "col-sm rightImage ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-328882442" + " " + "form-signin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("img", {
        src: "data:image/png;base64,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",
        alt: "",
        width: "120",
        height: "120",
        className: "jsx-328882442" + " " + "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-328882442" + " " + "h3 mb-3 font-weight-normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Please sign in"), __jsx("label", {
        htmlFor: "username",
        className: "jsx-328882442" + " " + "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Username"), __jsx("input", {
        type: "username",
        id: "username",
        name: "username",
        placeholder: "Username",
        required: "",
        autoFocus: "",
        value: this.state.username,
        onChange: this.handleChange,
        className: "jsx-328882442" + " " + "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "password",
        className: "jsx-328882442" + " " + "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
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
        className: "jsx-328882442" + " " + "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), __jsx("button", {
        type: "submit",
        className: "jsx-328882442" + " " + "btn btn-lg btn-primary btn-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Sign in"))))), __jsx("h1", {
        className: "jsx-328882442",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Index page"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "328882442",
        __self: this
      }, ".col-sm.jsx-328882442{height:700px;width:100%;}.card-space.jsx-328882442{margin-top:3%;}img.jsx-328882442{object-fit:cover;object-position:0 80%;}.image-stack.jsx-328882442{display:grid;grid-template-columns:repeat(12,1fr);position:relative;}.image-stack__item--top.jsx-328882442{grid-column:1 / span 8;grid-row:1;padding-top:20%;z-index:1;}.image-stack__item--bottom.jsx-328882442{grid-column:4 / -1;grid-row:1;}.rightImage.jsx-328882442{margin-left:10px;padding:5px;}.leftImage.jsx-328882442{margin-right:10px;padding:5px;}.jumbo1.jsx-328882442{background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));background-size:cover;background-position:10% 30%;min-height:300px;padding-top:20%;padding-bottom:20%;}.jumbo1words.jsx-328882442{color:white;font-family:\"Permanent Marker\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSGdCLEFBR29CLEFBT0MsQUFTRyxBQU1KLEFBTVUsQUFNSixBQUtGLEFBS0MsQUFLaUQsQUFVdkQsWUFDbUIsQ0EzRHBCLEFBc0IyQixDQWZ2QyxHQVN1QixBQXVCVixDQUtBLENBVkQsSUFOQSxDQXpCWixLQXFDQSxDQUxBLEFBVUEsSUFoQmlCLEtBWmpCLElBMkNBLE9BckNtQixBQU9SLFVBQ1gsQUFrQnVCLFFBekJ2QixjQTBCNkIsNEJBRVgsaUJBQ0QsZ0JBQ0csbUJBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9sb2dpbic7XG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjdXJyZW50VXNlciA6ICcnLFxuXHRcdFx0ZGVsZXRlICAgICAgOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHR1c2VyU3RhdGUgPSAodXNlcikgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoXG5cdFx0XHR7XG5cdFx0XHRcdGN1cnJlbnRVc2VyIDogdXNlclxuXHRcdFx0fSxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3VzZXIgbG9nZ2VkIGluJyk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fTtcblxuXHR0b0xvZ291dCA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgY3VycmVudFVzZXI6ICcnIH0pO1xuXHR9O1xuXG5cdHRvRGVsZXRlID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBkZWxldGU6IHRydWUgfSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0IHRpdGxlPVwiSG9tZVwiPlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+WW91ciBZb2dhIEpvdXJuZXk8L3RpdGxlPlxuXHRcdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuXHRcdFx0XHRcdFx0aW50ZWdyaXR5PVwic2hhMzg0LWdnT3lSMGlYQ2JNUXYzWGlwbWEzNE1EK2RILzFmUTc4NC9qNmNZL2lKVFFVT2hjV3I3eDlKdm9SeFQyTVp3MVRcIlxuXHRcdFx0XHRcdFx0Y3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2FyZC1zcGFjZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHR7LyogTGVmdC1zaWRlICAqL31cblx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9tZWRpYS50aW1lb3V0LmNvbS9pbWFnZXMvMTA0MTAzNjUxLzYzMC80NzIvaW1hZ2UuanBnXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLXNtIGZsb2F0LWxlZnQgbGVmdEltYWdlXCJcblx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdHsvKiBSaWdodCBTaWRlICAqL31cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHJpZ2h0SW1hZ2UgXCI+XG5cdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZm9ybS1zaWduaW5cIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtYi00XCJcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBT1VBQUFEY0NBTUFBQUM0WXBaQkFBQUFpbEJNVkVYLy8vOEFBQUQ4L1B6NStmbjYrdnIwOVBUdjcrL3A2ZW5iMjl2dTd1N3o4L1BvNk9qajQrTVVGQlRmMzkvTnpjMVJVVkd2cjY5cGFXa2ZIeCtLaW9vNk9qcTl2YjNFeE1RdExTM1IwZEVuSnlkL2YzOFlHQmhpWW1LbnA2ZENRa0oyZG5hU2twS2NuSnhkWFYweU1qSkZSVVZVVkZRTEN3dU5qWTIzdDdkb2FHaGVYbDU1ZVhtaW9xSjRMZHJXQUFBVkVFbEVRVlI0bk4wZGFidXBYRlFsa3RLZ1VXaFFrcXYvLy9kdWU2MGRvUnhVaDlQNjhEN3Z4V0d2MWp6dTBlajNnZVVrNjZBdVU0WmhsdnZRWlQ5d2hINkI1V2NMTzllZDFOa0hSbmdJZklZSnBwOCtWSmZBaXRPRm9vVzZuNmJtTWJUbkhIbk45ZmE1T09JV2lzdC8rbnl0Z2VVbDE5SU93VDR1bU5UVUkvdEN2c21pUU0vZE9hcnd3Zk8xQm00bTJGcGs2RWtzRnhneXEyTmt6OGRYbjJENWthQW54dXhEQjJ3TDNOVE5JazlYelJVZ0NLckdscmliVDBuaHllYm13cDlFa2x0WW9iNzNTL3dJbzU0MFpWNGpmTW8vM2ZxTFdyYkE4S0E2NnpOK3pOby81dTUwM1BCcGtmdHJTTEw4SWpPU00zcnBPdDZmY3FVSndUOEovRnpKOWRXWmdMRWFoTm5pN3h1SUt2Q0NGZTVLRk5ONDcrWFduYUw1NHpDV3JIQmZvcmhPZ3NnU2hrWERBaVoyZEhSS0t1NE56WjBPaklnRlNGdmRMKzFGY3JBVzRsL1RtRS9BNHBBc0tZcU9aMG1ENDlNQ1dNRTdjK3BPbXc2UWlJVldWVTV5cVc4T2Y5clhiZ1plOFNpcm1ybzJxQWp4QXB4N29MeWFHTGI0NmRQMEE2d1FVUzlPRGQzaFdRMkVtZllQQlhLZkMwUEZjYVFFeUt4SnZoZ3NqbnhrWWtRY1NZTzBIQUN1Q2pqS0orblRKK2tQWmhIRXhrdmQvZlJKK2dQVzFZR09PMjJJamh3RlVRTnVOY1BGcDAvU0kwZ2hxTmJBSHF4aUxVRFFTVmtqenVlZlBraWZZQU8zYmdaTnlKRkdVdi95WWRDRTVFTmlRUHcvbVJ4K0d1WWVDWlAxZ1lhUUZCWW40Z2dZazArZm8xY1FpQ3RnNW9OV095TmhROEpJYTloSUxnaVMvNVJCNngxRThpZ01HMG5wV0NDcER6aklJaUFSeFJNTU5IbFZ3cHlZa0dEQVVSYUJtVkg0QXFkaG04a1JINlZNNmcwMG4zeUc3YkpnMTRFcm5wRzlJaWJrMDZmb0dZU0VZZllEem1FQlRBb2JZdHFmUGtYUHdCZnFkWlY5K2hROUE2czVEQk45K2hSOWc2SVc2blhZVVVqaDJBV0Y1aG02RGVIejlmQTF6MGd4R1hrN2RINmRGZEhXYWVpTzNTaG5HSFhvN3NCSVNKbVY5dWxEOUExODRmUjRmN0s3K2hYSVpDWlJQbjJJdmtIYU1YSTA3RnhXNGRwRmEyWS82SklQQWRJYllYMzZFSDBERjZiTVp1ajhPbEtLMEhud3FrY3Nva3B2K0tRMEdXZndYZzkvWUJoajREbm1Rc0dhakRsNHFSeUhCU2s3eTZUemx2YVZuYk9TejhTZHhjNXp6MW50dmxIR3R4MU9LQzlJUmZBYjh3MWMwbDNFSmV5WUx5MEoyZ3l6NjZpTkVKRk12cEJoMllDUncyNDhBdUVJUGJUYlRyNnNXeEJpeHUvR2pKQThad0hHTjJyWVBPMm82aXg2Z09UbUc2dTc0cEdSdTJHeGtEU1lNdjVYMWdRTEY5YnNKSnVld2FUSjhqdUQxRWhtOUM2K3g4VXhqT2diaFhJMDB4bW1pMEtldEFjazMwc0NDbDZpaG4xR0M3YkpMRHRRRnpOVXJ3L3Q3c1RObERwM2dkZGdydnBCRmFxdG5XUHpOYk5wK1IwRmNCSE1LdDU2ZGl4LzRkOXB0a3VaTkxqWFRkTURIVmZkMStrdFZseTRWbWEzYzBCbko0WnA3OTJ4dGcrYUo3L2F3U0FxVzBPamZNTGJPcUp5dktYWUlpalhIREQzVHY1WXlEeC9UWnFQV21sdVYyWFc3VlUvOUpneXpIVWZsT3NWK2lqRWw2UXdMbEc1TG5TenlqL21BdnViRHM3cGRwL1N0NDV0Zk5Cc3hleGJ1OVlrYTBUYzErcEJ4bHBTRVBlQW5PYnFsOVVwZnZWUnNKYktWRUc5UWxQd1ZwZTM5Q2YxR251L2w0VXY0dWYyUG15RzYxR3FRc2x1bllMUHFNYTFyMUNwZUpPczVUUFhVTjFvcE96UzgrdkYvejNudWtqRzdrNEM1M29IdVdZSkxhVlJmYzBpcjZsSVhLdmsxdFZwcTUzTWl2RFpaeVRUSU12QTFiK2N4amJwZTZaaENRdFhlMGF3Mkt6Z29NUHRxNjdQeEszRjhvZ3lWZVZFaVFqcUV1MndUU2tTNTFOV013OFZiZW1la1FTQkpPeXJucm5lcGZ0elZPdDVRem9ubWt5K2JYRmhDMTdUMjFwTERYR282a2QyUytSUUI0MXI0enk4UTlBai92eEZ2cVFkeFRFTzZXdWllMzRHQWo0Qk5YdkZsMUw4T2l5NXFCRExsaTZaQUl3bFgwMHFRS00wQ3FDYlVJb1E2VjhRdkR6NlNkNHJaYkZtSm1jS2htZGRZMTRmQVdDNXZzVnlVbEJZYTZkOGFMZ1ZWTXRsTEtpamY0QVgySmgwZ3lySEpyTi9LUlU5clZTZU5aa0ZQaVRNc0RKZURDTklIWVJaNXpldlNpb1R0d3lnTTFBdHlaWFRnNFFneU13TU1DSFUzSSszZ0JhZVFxREt4VHRqd3AyM3JiRHdyY3Z3Vlk4SHNMeExWYmlGdFd5WDhVSGVYRjlISWhaQlRaM1FmcmZMTXlDT1ZrRkwrSmVJTGs5cW5ESGhEMEhvb3ZNRTZhUDA5UTF5d0xGM1dHWnRVNVRqSEhUTDVvcXpST0JTOGxzQ0dNcGxLUlFDeUdnTXpKMmh3YjhnU1E0ait4SFJoYUpCMUxKK2VZdTM4NmNNQ1dCNWw0OE1DK1BTeXZNUklONXlyazJ1UlY3ekYyZWZxRlEzSXh1TUEwU3pjK29UWHNSWkJBNU95WWN0OGdTV0Z5WWJiMk41SFhzLzR3a205cllqbE5NWmVkdEcrUkRYaWJtdENYSWdxWVNIZ1hNWnM2UUpoOEVITU5RV2VlQ0NDVXVkOXVWOEpBSEpLeFJSVUlTZC9DZUsxR0k1OVcvSjhDTGd6NXZYRHhsVURNbitUTkFSUHg5M0N2d3JrMDlqM3Rhcy9MaE5uWUIwd2NMRDJGMHdFa3FIZnYySUpDdzdaak1IT0hiTThRV0lCUkF1RWxyMnZ2QkluR3Y3TkFmTVF4RUU3ZXE0Q2lDeUszNlpBM0ZPS3lsTmtRWm1UREp6eVh2eTVRSE16Nkhac2dGTFVWQnNLOVB5RUJ6ZjlURTBETTg3QmJxdUU1L0Nib2hjbndWTTlaalgrZ3VZbUNSNGVTU2RkZjBPYWlVZ3BWOHhsQm5kcHBOcUkwRHFlRkc5Um9sa1U4NStiaVNyOWNXeHI4SjJESGE1elNRWEc5YVFFbjFUYndMUGtLbHFTc1RhTEVTUjJ3SlZLOEhRdEtSWE1CTmdUM0IyTnAzNTVmeEJyV2xodDdVSUF0OFFHa1o0bkhjQlk1SHJOQ2Z2d2RRL0lhQ090RG1qb3NBUEh6anF5MS85b1VaSkdkc2pJSjFlNmw2MmZJZXdSWDJNT05reERSQnJSQ1FNSm0zanhlSXp2UDVwREplQzR0bEpjTHlLMHdISGg3akxRbEplL2tvb0QzcmdwNkFteTJkVEJER1hRMWZNL1Z3THo3dXdGclhNbXFiTFhRYlJURkQ0Zk84YkVoWnM1ZXBLVmpDVkI3bzhwOGMrdndYbk5jVFNUWmN2K00vT2ZydUxUNkJNRGhXR3NuTHdpejFZNkhJcTc2bEhOZlgycXJvN0J0NGhndHpDMnN0c1JYRUZZWWE0YlZyVkxWMzQ2YXRFQmFzQmxZNEZhdVBOOWNIUU9ZY2tIM0w2OFI1SnVYam1Sb1ZvczFDdUlIbXBXVTFRSVoybkNGaVcwZ280NmRZelQxQ0Ezb1FJZnVvcTRrSlhhRTFJaWFiOWtwK2RBVk9DR25EbEs0YVZ6cFppSjZGemdHa1JWcUJ2cENxbVJrb1Z5MW9nREhLRjVVY1ZMRy9NOThoc1V4cm53RStYc3dyTDA2VGpQOEtsRUdSVmxCdjRyZmh6NEFHV2FaeXhlMVllaElROFlRRUk3TVdNWm90UzNjV2NTbWw1cUVKTzdvMmdUVDZYM01RZlRodW5ZSTRwMk1walVxaGxCLzRBRnk2TnlnUXRxTlVVa2M0cVdNNjB5MkxkL1pRcVRJTWRjY0toWEE5NUVpaVBVTVpqTTN5blpyWUhua1p5WXh4WFRJc2w0QUlRNjJJcHBQSzhLdkJ3QkdGdzZWTHlrSHVuZ29XR2xDVERXTUc0R0lxVTRDM3VTS2JMdGFOOVNXQVN0U0QxbGhpWUx2Q3RmWTN4dE9wb3VXelRUK0RpK2Y0QkczSEM5bGptVHZHSkE1YWwyTE9aQ1lLRU11eGl0Y0VkejdWZFJiMzQ1TmdnbDZ2RVBLOHloZVE4aXdHZVIwU0JRMTIxcnBNMUVGai9CcWMxYzN5LzczY1JVOVZnNVBraE9LOGZSYW1rSEZ0aWFRT1p5M0xQSEltZTZEdDRVREhGQ0ZsWXFTU2FDelZhaHRVZ296QWdRWDJoV2hOWWk2VU01dnRORU0rcDVEU3QybVdLbUFJNURUQlVTRWxHTG5VQUYxWVJNV2orWjBVdGEzWjVhMzFPaWJBNWVSVHBTZUl3WkdQcTY0QlpIWlpwcThhY1cvY1JVVDNSYitRaFhGSTFRYkNPVlZvUm1Ib2xRNjZQQ2tzbDhHeTVMY29XNmI3Q2xKUlBIV1FnczJHQUNSVDViWk5FeXB4YWxFWXg4WEVHSDJoN01ja2FZaUtYSzFpcm51QXMzenRyZVdrZU5aSHFJa2FseW9SMzRSSEl6ajY2aW5VbTNsa21uS0JwN1FmUnZuZFJWbnBKVnJ3RFFuQ1dvZFE4b1lvMXpzekJsUjRObml5ODVob3B5Nk90TW9GOFJZV1VFOFdJU2ZwSEQ2MWJqY0Z2Ti9GU1hxLzhRR3ZNZWluNnhyaXpHa3c3TEF1Zk9VamkxU3BPanFFOWczUzZVMkd5ZVhBUlYxVnJFZzBibjlRL2d0VE1Oa3k4RmFKMnViQmtiZk5jVXg2b0VrNmEzMit4TDZMMWRxdnQyYWxyVzVidFN2eG9EaTZNWHFXQUZOS0F3amVVcHFmSm41Q3ZDN003eTBqQmN4VmtVdk9oMkRlQ0N5WTlkTmFyRHJydkpoVktpdEduazZHNXpUcU9Gclkya3BqcGhZS012WmExOVJxNEx5bThEUmdZMzBuK21CZEYvc0dUcFBXSFphUVJwOEtQSGp5UHQ2SER2a0JvODBqdktvYy9nVVYzdFpwcjR1YjBzK3E3dTVGOUxDVDRyM2FNenN2TUhlUG9kbCtESGkyenNSZGdOZlF6WHp3b1R4Mlp0V3IwZU9mVmxlSnZBN0R6aUZtOUZzYUpidVJUVzlycjNpc3Y2S2JGbVVaOHgxZU03OVEyeW5wN082UDlJOHc2MnM4OFJVLzFlZlpuSlMwNEorZFdYOWovWFFkWTlmR2ZKUWtyUlArSVNxYitvZkh6WDN3RGlGaXR1UzEwTndEclFzOFo0Mjh4ekV6L3lINWh6RmFaVHprdHZCMUFNak9PSmdxVnlyNlAxdzF3NnJPa1pPZmFIaU9ZVUNMWllGQ3dmNHVVUDU2V0UzSjhIcVpCOUkyQ0VVdEhNeDU5QTZhVEcxSVVGK0JkZWsyRWM0TGR5UndHSTkvWnkzOFBXeXlyUC9ZSWVDVkVISmRCaHZHaGdybU5xTnMrN3NtaUgxK1k5cXMvSEd6azNFTUMvSmx1TkJxQTBzYXRqdGVXU01aT2ozcFk5OEppSy9mRGVvdGdJSTVGMUhGMlF6Q3VUTHVkV0JpVFROOWRHMTRIZ0xuOWhpb3h3Q1F5VXhwRVhsd3RFWXE1WFpNU1E1eFQ1enpMUlhEYTVnaU95MmhkUWZhcTVRdHNqTzE2b3dkV29KNzBUbDRBZXB0SFU3YzE2OUxpbkJOY0YzTlJLbHQyeDkzQ0dBckR5ODdkWXRyVjFGVHJuZEY2dVhON2d3SlU0RHJNeHlCZ2VtWFhlWVJEbTVWMzlXcE53QlM2ckdjM0NuaUt0ckxyWlcyUzJndkQwcTZtdEQ1N1pLTmkybTF2ODhjczFnZ2EvdXg5d0VKU25ac2h1aTNpZEJjdGUxSkhTazd6MFN1Ly8vNFpabnZVanVjMFdTZ3JxWFhKWFBlZituWTV1cXdSMVBFSUg0RysyOWcxdmcyR281M00wRlVCTzI3dm13MUdwTWp5L3NKR0JVKzdxbEd3SXRUTDYyL0M0TkR4M1hldEpiREJxSjVtYnZMdXhodVcxcnhxTk9YVWUrQVFZWUV5N1h5bFFmWkFETmdvZlhObUR5T3VPcW5FTHNnR2F6aEJONkh6bEJZKzlLaWh4bExvMzdlSU9hR2t2Ty9taERYbWN0TmlhQ3p1bXAzYmJvbkl6N0lSbFlqUjN3bC9zRTJMZENMZEFIU3BMWTJHMEdDQi9hUWRSMXdqMmhHM2FleVRFT0wxRytwT3dwVFc4bTRjWlVKa2NubG9RSEtNVFdlYnp2TWdMTG9FelhKZ3ZORVFRM3RUN3Z0cnhVUGh2OHRObEtTalFxdVdvem8xQUxteVI3RzhrTW92TjVEU1hrOG51emt1amc0M0xpN2xZWWJpZXBLb0d3Q3QvbkQyM0h1NUg0K0wwRmJlVGFOQTArNjlySmFBRVZlYkhzY0dnRDdONWNNT1VjRjVWVkFVTkFkM0R3ZnFrYzBaSytxbWU5MFA3VU0vME4zTTlSV3cwWXZUTTdSQk5iMDlMbVFPbXUwOXJScTlYT2I4R2FaRWdINXFhVjdzeVJURzgxOXEweXROYjQ2THBHcXVlMkJadnQ3VmJBZlF0UFhUUE1WWVc3NnkvWWFXa05PYmhBWUxKbXZmbUVNYll3dGQwcjNxbVlBZjhtTUNtN2dyeitjbnRwaXV1c1ZISVE5MDNheFpjSml0Zy9VSWR3QVp3WnF1NEx2UEZTZlFueFJOdWhmbHRsNDVCaitoK2U0V0ZvVjUwMzBiQ0VielQrUlh3TTQ5dDk2d2RHQlBONElNTWNHREdqNjJ4UzU3V0s4R2lSbi9tV3d6bVg5OWF2MVdPYzU4Vy82WmdJdlZQSVhEb2pEM3NDaVNpNTRYQk9KR3IzL09kVThva25mYmlrQllINUFTMjJEVkhncDVNSHVzUHVremt2VGhhdnZEbzU3am9ET1QzdHBYNUdPOVVYOWlncTBIQjVZMkZUL3RUcEZZS3Q0K3pEa0paZit1ZmtzVEdNV1VHOU9FWTNRSis5ak1MNUFjMjdPYWs1eWswQS9PZ3dZanpqN1NadEQ3bEJqME5mbU5ESXN1NGZ1WnRHWUExYjE2UWFlSklUbXFtamZJamhTVkhUcG1kdWNvd1FLMVl4T3BKT2lWWGZaeHlhU3dmS2owYW1BR2NkTjZsOWNrYVdmWmtRNzFNczc5M2RnOHBIcWFXdFJtT0FMVExMVXRnTGc5TDI0dG5PVGdvYTVWejdvSzFkakY5bmllYjZtNzNBTWFtNXBLaHp6ZFY5WEhJbDVJbDc2Nm1ZekxxR096VEFMTm5Zc2N4NGx6TjlmTnluaEwzWFF5SkVnYUdsSHhCdDluRi9TOGVGN3lkTitZY01JN3NCSFNWV3pHcStzcFRyTldaMHNZK3RTOVZVNEQ5OUxZUSt6Q1cxMitmT1RYajFJRGlldDJtNHdvTGV1NmdIbUZ6b3RzK3JndUEyYSs5UGZNazJzMDRDbXJVWU1Dd1FyUFhhS1FFeUk2RGR0cW1MNEpPSklSZkx2SmwxZkMvZklleDMzWXVKWWFLME9yL0VvTmNNSzJYSjJsOXRMS0RQTmpMZVlvZUNFemR0V2g1S1VhYklVSHFneTduYzNMbGZic3pJNTI1YVBxNTZaaXlFMjBXeVhLaXBLUzVRZnZkUEtNUTZUWjVUQjFBOUFRZWFYbmlqU2RTbTRXVnZTeTJzdFY5eXlNQkhTd3M1QWo2emg0bnVkKzVEZTZvcUZRdEthNlZ4TnpWVEU5bTM2NjBtRmNVZi9kSGFlejYvMTlGZWpwVmxRSWRKM2Y3dU1UbkRvVTA2U3Z0YmtrWUUxLy84NHFaYmUreFhHZGhIM2QyZ2NCVjVzRkllK0NGTzJ2NW4yZGZ6VzlFeDBCZEJGODVzcFZWdEFNZmUrYnB1bXIvNEl3Vy9UVzRndUxZSndlTWcvUEFUOFhYSVdzOFZoTWUxNWh6TWpkM2NQeG5RRExCRGNEdjZoelFzcWdiZmNWZmp2Z09QODMzcmJRSWVDcXREOHloL0kyUUZQdVY5NjIwQ0dBNW1teDV1VlBBTFFUTlNkK2h3R3dIcy9SdnZLMmhjNEFtbE9XMFJmZVM5UWhzTnNWMmZ3NGJNMkRPd0FmREs4TUFUaEE4dGtsK244VU9JMkVsTTF0aysvRHRQdTlIdThDUmJLUHFkVHB3ZnVTRWZReEZLcjBmcndCS2R6Y0Z5cy9BTmlzMlJPU2hSbk8xRmVYdS9jQVdFRHVhSXRFTFFnYjliWU45cmNCOTVFMXRjSjNBMkxrdkhnaFFjY0FkOW1rUnQ4ZWo3S0ptNnBkL1FObndlTC9GcXR1bjRWNWFLcldaeHlyR1NoWC8xZnl5Mk5iWDNyMkI3emtCUmt1VGplL0ZXck5Jek0rTkM1RDZ3azRpeFM1VjAvY0R0RFpMOXFCbklTL3FvWncyWnkvL1ZVSGJMNzFtU1Q4TlRYRTJ0QmlkUHh0Qm1LRkU4TWsrZTlFQmRNRFZOSDZXTFB3RTdEa2NxNUtZYjAzNEhCMC9GTlhUMCtJclBqNW9sYzI0aFhTcnBUNitlZlNBcTRYazBXRWo1b3Ayb0dvR0tSRUdIczlMcEI3NGhRV1dhcWFoRW92QXNvckI1aG51dHNBOE9zZ2FjZkNmL2E5ckhNQjVaUURib0hXUGg4SmtXVnZwRHNzMXZOT0RlakV3alY1YWwzejZpZUFsVEo5U1pvdnUzT0lwSzBPblZUcXRsL2Q5aHFJTG15RmQ0N05TNGlmQjk0KytUTHk2dnc3NkhpQnFiYUhWY2NudTQycVlHZXcwTG13SFU3UTJPdjNVZUN0QU5iNEpaRXlmZWVBM0VUSVVCaGxjNVAzMTNEUkZqZzMwc2xDcHVVbXNpWHhoV095L0ZTd2lyOUZGUFd3RlQvOEFreXRjQU9YYWUwTWpTeXovaG00dVdCcllhQkMyK1VxQ1JvV2MzOFpjSXNDMFJqNnRmUlFzNFZwVTRmaW1DL3d5N1poc0RlaDEwdjJqNGZNL1Fzb0l2Q1NuWitnZlhnZHE3cDNpUEt0WnRuQ1Fwb1hJRW1DWXBPcnhZelRVZlVkYkdaYnFVRm9GYlQvTXlnaWtJbUZMUEoyTWZRNHkrdVZZL3FxcXU3M3hYOFNNM2JPMTR2SjhjYUxNbGVhL055VStxWEFqa1hKTFlUTzAxVm5lWFhCVVNvdll6VXdTRlB4L0pjSStCOCtORnZUdW9IMjlnQUFBQUJKUlU1RXJrSmdnZz09XCJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjEyMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIxMjBcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImgzIG1iLTMgZm9udC13ZWlnaHQtbm9ybWFsXCI+UGxlYXNlIHNpZ24gaW48L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRVc2VybmFtZVxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidXNlcm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJ1c2VybmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwidXNlcm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0YXV0b0ZvY3VzPVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFBhc3N3b3JkXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkPVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgdHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0U2lnbiBpblxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0ey8qIEp1bWJvIGRlc2lnbiAgKi99XG5cdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvMVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00IGp1bWJvMXdvcmRzXCI+SW1hZ2U8L2gxPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj4gKi99XG5cblx0XHRcdFx0ey8qIHt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyID8gKFxuXHRcdFx0XHRcdDxLaWNrc3RhcnRlcnBhdGggY3VycmVudFVzZXI9e3RoaXMuc3RhdGUuY3VycmVudFVzZXJ9IC8+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PExvZ2luIHVzZXJTdGF0ZT17dGhpcy51c2VyU3RhdGV9IC8+XG5cdFx0XHRcdCl9ICovfVxuXHRcdFx0XHR7LyogPEtpY2tzdGFydGVycGF0aCBjdXJyZW50VXNlcj17dGhpcy5zdGF0ZS5jdXJyZW50VXNlcn0gLz57JyAnfSAqL31cblxuXHRcdFx0XHR7LyogPGltZyBzcmM9XCIvaW1hZ2VzL3Rlc3QuanBnXCIgLz4gKi99XG5cdFx0XHRcdDxoMT5JbmRleCBwYWdlPC9oMT5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5jb2wtc20ge1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA3MDBweDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0Ly8gYm9yZGVyOiBibGFjayAxcHggc29saWQ7XG5cdFx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5jYXJkLXNwYWNlIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDMlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIC5sZWZ0SW1hZ2Uge1xuXHRcdFx0XHRcdC8vIFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdFx0XHRcdC8vIFx0cGFkZGluZzogNXB4O1xuXHRcdFx0XHRcdC8vIH1cblxuXHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0XHRcdG9iamVjdC1wb3NpdGlvbjogMCA4MCU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gU3RhY2tcblx0XHRcdFx0XHQuaW1hZ2Utc3RhY2sge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5pbWFnZS1zdGFja19faXRlbS0tdG9wIHtcblx0XHRcdFx0XHRcdGdyaWQtY29sdW1uOiAxIC8gc3BhbiA4O1xuXHRcdFx0XHRcdFx0Z3JpZC1yb3c6IDE7IC8vIG11c3QgYmUgb24gdGhlIHNhbWUgcm93IGFzIHRoZSBvdGhlciBpbWFnZVxuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDIwJTsgLy8gdGhpcyBwdXNoZXMgdGhlIGltYWdlIGRvd24sIGFuZCBrZWVwcyBpdCBwcm9wb3J0aW9uYWwgYXMgaXQgcmVzaXplc1xuXHRcdFx0XHRcdFx0ei1pbmRleDogMTsgLy8gbWFrZSB0aGlzIGltYWdlIHJlbmRlciBvbiB0b3Agb2YgdGhlIGJvdHRvbVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuaW1hZ2Utc3RhY2tfX2l0ZW0tLWJvdHRvbSB7XG5cdFx0XHRcdFx0XHRncmlkLWNvbHVtbjogNCAvIC0xO1xuXHRcdFx0XHRcdFx0Z3JpZC1yb3c6IDE7IC8vIG1ha2UgdGhpcyBpbWFnZSBiZSBvbiB0aGUgc2FtZSByb3dcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucmlnaHRJbWFnZSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTBweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQubGVmdEltYWdlIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuanVtYm8xIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSk7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMTAlIDMwJTtcblx0XHRcdFx0XHRcdC8qIG9wYWNpdHk6IDgwJTsgKi9cblx0XHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDMwMHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDIwJTtcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAyMCU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Lmp1bWJvMXdvcmRzIHtcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIlBlcm1hbmVudCBNYXJrZXJcIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.daab86943d2a0e1a79b7.hot-update.js.map