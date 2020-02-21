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
        className: "jsx-3120670711",
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
        className: "jsx-3120670711",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-3120670711" + " " + "container card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3120670711" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("img", {
        src: "https://media.timeout.com/images/104103651/630/472/image.jpg",
        className: "jsx-3120670711" + " " + "col-sm float-left leftImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-3120670711" + " " + "col-sm rightImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Sign Up", __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-3120670711" + " " + "form-signin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-3120670711" + " " + "h3 mb-3 font-weight-normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Please sign in"), __jsx("label", {
        htmlFor: "username",
        className: "jsx-3120670711" + " " + "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
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
        className: "jsx-3120670711" + " " + "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "password",
        className: "jsx-3120670711" + " " + "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
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
        className: "jsx-3120670711" + " " + "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), __jsx("button", {
        type: "submit",
        className: "jsx-3120670711" + " " + "btn btn-lg btn-primary btn-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Sign in"))))), __jsx("h1", {
        className: "jsx-3120670711",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Index page"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3120670711",
        __self: this
      }, ".col-sm.jsx-3120670711{height:700px;width:100%;}.card-space.jsx-3120670711{margin-top:3%;}.rightImage.jsx-3120670711{padding:30px;border:2px solid red;}img.jsx-3120670711{object-fit:cover;object-position:0 80%;}.image-stack.jsx-3120670711{display:grid;grid-template-columns:repeat(12,1fr);position:relative;}.image-stack__item--top.jsx-3120670711{grid-column:1 / span 8;grid-row:1;padding-top:20%;z-index:1;}.image-stack__item--bottom.jsx-3120670711{grid-column:4 / -1;grid-row:1;}.rightImage.jsx-3120670711{margin-left:10px;padding:5px;}.leftImage.jsx-3120670711{margin-right:10px;padding:5px;}.jumbo1.jsx-3120670711{background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));background-size:cover;background-position:10% 30%;min-height:300px;padding-top:20%;padding-bottom:20%;}.jumbo1words.jsx-3120670711{color:white;font-family:\"Permanent Marker\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSGdCLEFBR29CLEFBT0MsQUFTRCxBQUtJLEFBTUosQUFNVSxBQU1KLEFBS0YsQUFLQyxBQUtpRCxBQVV2RCxZQUNtQixDQWhFcEIsQUFnQlUsQUFXaUIsQ0FwQnZDLEdBY3VCLEFBdUJWLENBS0EsQ0FWRCxJQU5BLENBOUJaLEtBMENBLENBTEEsQUFVQSxJQWpDQSxBQWlCaUIsS0FaakIsSUEyQ0EsT0FyQ21CLEFBT1IsVUFDWCxBQWtCdUIsUUF6QnZCLGNBMEI2Qiw0QkFFWCxpQkFDRCxnQkFDRyxtQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3NoYWhyYW5pcmFoaW1hbi9Qcm9qZWN0cy95b2dhX2tpY2tzdGFydGVyL2tpY2tzdGFydGVyX2Zyb250ZW5kL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2xvZ2luJztcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGN1cnJlbnRVc2VyIDogJycsXG5cdFx0XHRkZWxldGUgICAgICA6IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdHVzZXJTdGF0ZSA9ICh1c2VyKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZShcblx0XHRcdHtcblx0XHRcdFx0Y3VycmVudFVzZXIgOiB1c2VyXG5cdFx0XHR9LFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygndXNlciBsb2dnZWQgaW4nKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9O1xuXG5cdHRvTG9nb3V0ID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VXNlcjogJycgfSk7XG5cdH07XG5cblx0dG9EZWxldGUgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGRlbGV0ZTogdHJ1ZSB9KTtcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQgdGl0bGU9XCJIb21lXCI+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5Zb3VyIFlvZ2EgSm91cm5leTwvdGl0bGU+XG5cdFx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG5cdFx0XHRcdFx0XHRpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiXG5cdFx0XHRcdFx0XHRjcm9zc09yaWdpbj1cImFub255bW91c1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjYXJkLXNwYWNlXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdHsvKiBMZWZ0LXNpZGUgICovfVxuXHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL21lZGlhLnRpbWVvdXQuY29tL2ltYWdlcy8xMDQxMDM2NTEvNjMwLzQ3Mi9pbWFnZS5qcGdcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtc20gZmxvYXQtbGVmdCBsZWZ0SW1hZ2VcIlxuXHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0ey8qIFJpZ2h0IFNpZGUgICovfVxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20gcmlnaHRJbWFnZVwiPlxuXHRcdFx0XHRcdFx0XHRTaWduIFVwXG5cdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZm9ybS1zaWduaW5cIj5cblx0XHRcdFx0XHRcdFx0XHR7LyogPGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWItNFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9VQUFBRGNDQU1BQUFDNFlwWkJBQUFBaWxCTVZFWC8vLzhBQUFEOC9QejUrZm42K3ZyMDlQVHY3Ky9wNmVuYjI5dnU3dTd6OC9QbzZPamo0K01VRkJUZjM5L056YzFSVVZHdnI2OXBhV2tmSHgrS2lvbzZPanE5dmIzRXhNUXRMUzNSMGRFbkp5ZC9mMzhZR0JoaVltS25wNmRDUWtKMmRuYVNrcEtjbkp4ZFhWMHlNakpGUlVWVVZGUUxDd3VOalkyM3Q3ZG9hR2hlWGw1NWVYbWlvcUo0TGRyV0FBQVZFRWxFUVZSNG5OMGRhYnVwWEZRbGt0S2dVV2hRa3F2Ly8vZHVlNjBkb1J4VWg5UDY4RDd2eFdHdjFqenUwZWozZ2VVazY2QXVVNFpobHZ2UVpUOXdoSDZCNVdjTE85ZWQxTmtIUm5nSWZJWUpwcDgrVkpmQWl0T0Zvb1c2bjZibU1iVG5ISG5OOWZhNU9PSVdpc3QvK255dGdlVWwxOUlPd1Q0dW1OVFVJL3RDdnNtaVFNL2RPYXJ3d2ZPMUJtNG0yRnBrNkVrc0Z4Z3lxMk5rejhkWG4yRDVrYUFueHV4REIyd0wzTlROSWs5WHpSVWdDS3JHbHJpYlQwbmh5ZWJtd3A5RWtsdFlvYjczUy93SW81NDBaVjRqZk1vLzNmcUxXcmJBOEtBNjZ6Tit6Tm8vNXU1MDNQQnBrZnRyU0xMOElqT1NNM3JwT3Q2ZmNxVUp3VDhKL0Z6SjlkV1pnTEVhaE5uaTd4dUlLdkNDRmU1S0ZOTjQ3K1hXbmFMNTR6Q1dySEJmb3JoT2dzZ1Noa1hEQWlaMmRIUktLdTROelowT2pJZ0ZTRnZkTCsxRmNyQVc0bC9UbUUvQTRwQXNLWXFPWjBtRDQ5TUNXTUU3YytwT213NlFpSVZXVlU1eXFXOE9mOXJYYmdaZThTaXJtcm8ycUFqeEFweDdvTHlhR0xiNDZkUDBBNndRVVM5T0RkM2hXUTJFbWZZUEJYS2ZDMFBGY2FRRXlLeEp2aGdzam54a1lrUWNTWU8wSEFDdUNqaktKK25USitrUFpoSEV4a3ZkL2ZSSitnUFcxWUdPTzIySWpod0ZVUU51TmNQRnAwL1NJMGdocU5iQUhxeGlMVURRU1Zranp1ZWZQa2lmWUFPM2JnWk55SkZHVXYveVlkQ0U1RU5pUVB3L21SeCtHdVllQ1pQMWdZYVFGQlluNGdnWWswK2ZvMWNRaUN0ZzVvTldPeU5oUThKSWE5aElMZ2lTLzVSQjZ4MUU4aWdNRzBucFdDQ3BEempJSWlBUnhSTU1OSGxWd3B5WWtHREFVUmFCbVZINEFxZGhtOGtSSDZWTTZnMDBuM3lHN2JKZzE0RXJucEc5SWliazA2Zm9HWVNFWWZZRHptRUJUQW9iWXRxZlBrWFB3QmZxZFpWOStoUTlBNnM1REJOOStoUjlnNklXNm5YWVVVamgyQVdGNWhtNkRlSHo5ZkExejBneEdYazdkSDZkRmRIV2FlaU8zU2huR0hYbzdzQklTSm1WOXVsRDlBMTg0ZlI0ZjdLNytoWElaQ1pSUG4ySXZrSGFNWEkwN0Z4VzRkcEZhMlkvNkpJUEFkSWJZWDM2RUgwREY2Yk1adWo4T2xLSzBIbndxa2Nzb2twditLUTBHV2Z3WGc5L1lCaGo0RG5tUXNHYWpEbDRxUnlIQlNrN3k2VHpsdmFWbmJPU3o4U2R4YzV6ejFudHZsSEd0eDFPS0M5SVJmQWI4dzFjMGwzRUpleVlMeTBKMmd5ejY2aU5FSkZNdnBCaDJZQ1J3MjQ4QXVFSVBiVGJUcjZzV3hCaXh1L0dqSkE4WndIR04ycllQTzJvNml4NmdPVG1HNnU3NHBHUnUyR3hrRFNZTXY1WDFnUUxGOWJzSkp1ZXdhVEo4anVEMUVobTlDNit4OFV4ak9nYmhYSTAweG1taTBLZXRBY2szMHNDQ2w2aWhuMUdDN2JKTER0UUZ6TlVydy90N3NUTmxEcDNnZGRncnZwQkZhcXRuV1B6TmJOcCtSMEZjQkhNS3Q1NmRpeC80ZDlwdGt1Wk5MalhUZE1ESFZmZDEra3RWbHk0Vm1hM2MwQm5KNFpwNzkyeHRnK2FKNy9hd1NBcVcwT2pmTUxiT3FKeXZLWFlJaWpYSEREM1R2NVl5RHgvVFpxUFdtbHVWMlhXN1ZVLzlKZ3l6SFVmbE9zVitpakVsNlF3TGxHNUxuU3p5ai9tQXZ1YkRzN3BkcC9TdDQ1dGZOQnN4ZXhidTlZa2EwVGMxK3BCeGxwU0VQZUFuT2JxbDlVcGZ2VlJzSmJLVkVHOVFsUHdWcGUzOUNmMUdudS9sNFV2NHVmMlBteUc2MUdxUXNsdW5ZTFBxTWExcjFDcGVKT3M1VFBYVU4xb3BPelM4K3ZGL3ozbnVrakc3azRDNTNvSHVXWUpMYVZSZmMwaXI2bElYS3ZrMXRWcHE1M01pdkRaWnlUVElNdkExYitjeGpicGU2WmhDUXRYZTBhdzJLemdvTVB0cTY3UHhLM0Y4b2d5VmVWRWlRanFFdTJ3VFNrUzUxTldNdzhWYmVtZWtRU0JKT3lybnJuZXBmdHpWT3Q1UXpvbm1reStiWEZoQzE3VDIxcExEWEdvNmtkMlMrUlFCNDFyNHp5OFE5QWovdnhGdnFRZHhURU82V3VpZTM0R0FqNEJOWHZGbDFMOE9peTVxQkRMbGk2WkFJd2xYMDBxUUtNMENxQ2JVSW9RNlY4UXZEejZTZDRyWmJGbUptY0tobWRkWTE0ZkFXQzV2c1Z5VWxCWWE2ZDhhTGdWVk10bExLaWpmNEFYMkpoMGd5ckhKck4vS1JVOXJWU2VOWmtGUGlUTXNESmVEQ05JSFlSWjV6ZXZTaW9UdHd5Z00xQXR5WlhUZzRRZ3lNd01NQ0hVM0krM2dCYWVRcURLeFR0andwMjNyYkR3cmN2d1ZZOEhzTHhMVmJpRnRXeVg4VUhlWEY5SEloWkJUWjNRZnJmTE15Q09Wa0ZMK0plSUxrOXFuREhoRDBIb292TUU2YVAwOVExeXdMRjNXR1p0VTVUakhIVEw1b3F6Uk9CUzhsc0NHTXBsS1JRQ3lHZ016SjJod2I4Z1NRNGoreEhSaGFKQjFMSitlWXUzODZjTUNXQjVsNDhNQytQU3l2TVJJTjV5cmsydVJWN3pGMmVmcUZRM0l4dU1BMFN6YytvVFhzUlpCQTVPeVljdDhnU1dGeVliYjJONUhYcy80d2ttOXJZamxOTVplZHRHK1JEWGlibXRDWElncVlTSGdYTVpzNlFKaDhFSE1OUVdlZUNDQ1V1ZDl1VjhKQUhKS3hSUlVJU2QvQ2VLMUdJNTlXL0o4Q0xnejV2WER4bFVETW4rVE5BUlB4OTNDdndyazA5ajN0YXMvTGhObllCMHdjTEQyRjB3RWtxSGZ2MklKQ3c3WmpNSE9IYk04UVdJQlJBdUVscjJ2dkJJbkd2N05BZk1ReEVFN2VxNENpQ3lLMzZaQTNGT0t5bE5rUVptVERKenlYdnk1UUhNejZIWnNnRkxVVkJzSzlQeUVCemY5VEUwRE04N0JicXVFNS9DYm9oY253Vk05WmpYK2d1WW1DUjRlU1NkZGYwT2FpVWdwVjh4bEJuZHBwTnFJMERxZUZHOVJvbGtVODUrYmlTcjljV3hyOEoyREhhNXpTUVhHOWFRRW4xVGJ3TFBrS2xxU3NUYUxFU1Iyd0pWSzhIUXRLUlhNQk5nVDNCMk5wMzU1ZnhCcldsaHQ3VUlBdDhRR2taNG5IY0JZNUhyTkNmdndkUS9JYUNPdERtam9zQVBIempxeTEvOW9VWkpHZHNqSUoxZTZsNjJmSWV3UlgyTU9Oa3hEUkJyUkNRTUptM2p4ZUl6dlA1cERKZUM0dGxKY0x5SzB3SEhoN2pMUWxKZS9rb29EM3JncDZBbXkyZFRCREdYUTFmTS9Wd0x6N3V3RnJYTW1xYkxYUWJSVEZENGZPOGJFaFpzNWVwS1ZqQ1ZCN284cDhjK3Z3WG5OY1RTVFpjditNL09mcnVMVDZCTURoV0dzbkx3aXoxWTZISXE3NmxITmZYMnFybzdCdDRoZ3R6QzJzdHNSWEVGWVlhNGJWclZMVjM0NmF0RUJhc0JsWTRGYXVQTjljSFFPWWNrSDNMNjhSNUp1WGptUm9Wb3MxQ3VJSG1wV1UxUUlaMm5DRmlXMGdvNDZkWXpUMUNBM29RSWZ1b3E0a0pYYUUxSWlhYjlrcCtkQVZPQ0duRGxLNGFWenBaaUo2RnpnR2tSVnFCdnBDcW1Sa29WeTFvZ0RIS0Y1VWNWTEcvTTk4aHNVeHJud0UrWHN3ckwwNlRqUDhLbEVHUlZsQnY0cmZoejRBR1dhWnl4ZTFZZWhJUThZUUVJN01XTVpvdFMzY1djU21sNXFFSk83bzJnVFQ2WDNNUWZUaHVuWUk0cDJNcGpVcWhsQi80QUZ5Nk55Z1F0cU5VVWtjNHFXTTYweTJMZC9aUXFUSU1kY2NLaFhBOTVFaWlQVU1aak0zeW5acllIbmtaeVl4eFhUSXNsNEFJUTYySXBwUEs4S3ZCd0JHRnc2Vkx5a0h1bmdvV0dsQ1REV01HNEdJcVU0QzN1U0tiTHRhTjlTV0FTdFNEMWxoaVlMdkN0ZlkzeHRPcG91V3pUVCtEaStmNEJHM0hDOWxqbVR2R0pBNWFsMkxPWkNZS0VNdXhpdGNFZHo3VmRSYjM0NU5nZ2w2dkVQSzh5aGVROGl3R2VSMFNCUTEyMXJwTTFFRmovQnFjMWMzeS83M2NSVTlWZzVQa2hPSzhmUmFta0hGdGlhUU9aeTNMUEhJbWU2RHQ0VURIRkNGbFlxU1NhQ3pWYWh0VWdvekFnUVgyaFdoTllpNlVNNXZ0TkVNK3A1RFN0Mm1XS21BSTVEVEJVU0VsR0xuVUFGMVlSTVdqK1owVXRhM1o1YTMxT2liQTVlUlRwU2VJd1pHUHE2NEJaSFpacHE4YWNXL2NSVVQzUmIrUWhYRkkxUWJDT1ZWb1JtSG9sUTY2UENrc2w4R3k1TGNvVzZiN0NsSlJQSFdRZ3MyR0FDUlQ1YlpORXlweGFsRVl4OFhFR0gyaDdNY2thWWlLWEsxaXJudUFzM3p0cmVXa2VOWkhxSWthbHlvUjM0UkhJemo2NmluVW0zbGttbktCcDdRZlJ2bmRSVm5wSlZyd0RRbkNXb2RROG9ZbzF6c3pCbFI0Tm5peTg1aG9weTZPdE1vRjhSWVdVRThXSVNmcEhENjFiamNGdk4vRlNYcS84UUd2TWVpbjZ4cml6R2t3N0xBdWZPVWppMVNwT2pxRTlnM1M2VTJHeWVYQVJWMVZyRWcwYm45US9ndFRNTmt5OEZhSjJ1YkJrYmZOY1V4Nm9FazZhMzIreEw2TDFkcXZ0MmFsclc1YnRTdnhvRGk2TVhxV0FGTktBd2plVXBxZkpuNUN2QzdNN3kwakJjeFZrVXZPaDJEZUNDeVk5ZE5hckRycnZKaFZLaXRHbms2RzV6VHFPRnJZMmtwanBoWUtNdlphMTlScTRMeW04RFJnWTMwbittQmRGL3NHVHBQV0haYVFScDhLUEhqeVB0NkhEdmtCbzgwanZLb2MvZ1VWM3RacHI0dWIwcytxN3U1RjlMQ1Q0cjNhTXpzdk1IZVBvZGwrREhpMnpzUmRnTmZRelh6d29UeDJadFdyMGVPZlZsZUp2QTdEemlGbTlGc2FKYnVSVFc5cnIzaXN2NktiRm1VWjh4MWVNNzlRMnlucDdPNlA5STh3NjJzODhSVS8xZWZabkpTMDRKK2RXWDlqL1hRZFk5ZkdmSlFrclJQK0lTcWIrb2ZIelgzd0RpRml0dVMxME53RHJRczhaNDI4eHpFei95SDVoekZhWlR6a3R2QjFBTWpPT0pncVZ5cjZQMXcxdzZyT2taT2ZhSGlPWVVDTFpZRkN3ZjR1VVA1NldFM0o4SHFaQjlJMkNFVXRITXg1OUE2YVRHMUlVRitCZGVrMkVjNExkeVJ3R0k5L1p5MzhQV3l5clAvWUllQ1ZFSEpkQmh2R2hncm1OcU5zKzdzbWlIMStZOXFzL0hHemszRU1DL0psdU5CcUEwc2F0anRlV1NNWk9qM3BZOThKaUsvZkRlb3RnSUk1RjFIRjJRekN1VEx1ZFdCaVRUTjlkRzE0SGdMbjloaW94d0NReVV4cEVYbHd0RVlxNVhaTVNRNXhUNXp6TFJYRGE1Z2lPeTJoZFFmYXE1UXRzak8xNm93ZFdvSjcwVGw0QWVwdEhVN2MxNjlMaW5CTmNGM05SS2x0Mng5M0NHQXJEeTg3ZFl0clYxRlRybmRGNnVYTjdnd0pVNERyTXh5QmdlbVhYZVlSRG01VjM5V3BOd0JTNnJHYzNDbmlLdHJMclpXMlMyZ3ZEMHE2bXRENTdaS05pMm0xdjg4Y3MxZ2dhL3V4OXdFSlNuWnNodWkzaWRCY3RlMUpIU2s3ejBTdS8vLzRaWm52VWp1YzBXU2dycVhYSlhQZWYrblk1dXF3UjFQRUlINEcrMjlnMXZnMkdvNTNNMEZVQk8yN3ZtdzFHcE1qeS9zSkdCVSs3cWxHd0l0VEw2Mi9DNE5EeDNYZXRKYkRCcUo1bWJ2THV4aHVXMXJ4cU5PWFVlK0FRWVlFeTdYeWxRZlpBRE5nb2ZYTm1EeU91T3FuRUxzZ0dhemhCTjZIemxCWSs5S2loeGxMbzM3ZUlPYUdrdk8vbWhEWG1jdE5pYUN6dW1wM2Jib25JejdJUmxZalIzd2wvc0UyTGRDTGRBSFNwTFkyRzBHQ0IvYVFkUjF3ajJoRzNhZXlURU9MMUcrcE93cFRXOG00Y1pVSmtjbmxvUUhLTVRXZWJ6dk1nTExvRXpYSmd2TkVRUTN0VDd2dHJ4VVBodjh0TmxLU2pRcXVXb3pvMUFMbXlSN0c4a01vdk41RFNYazhudXprdWpnNDNMaTdsWVliaWVwS29Hd0N0L25EMjNIdTVINCtMMEZiZVRhTkEwKzY5ckphQUVWZWJIc2NHZ0Q3TjVjTU9VY0Y1VlZBVU5BZDNEd2Zxa2MwWksrcW1lOTBQN1VNLzBOM005Uld3MFl2VE03UkJOYjA5TG1RT211MDlyUnE5WE9iOEdhWkVnSDVxYVY3c3lSVEc4MTlxMHl0TmI0NkxwR3F1ZTJCWnZ0N1ZiQWZRdFBYVFBNVllXNzZ5L1lhV2tOT2JoQVlMSm12Zm1FTWJZd3RkMHIzcW1ZQWY4bU1DbTdncnorY250cGl1dXNWSElROTAzYXhaY0ppdGcvVUlkd0Fad1pxdTRMdlBGU2ZRbnhSTnVoZmx0bDQ1QmoraCtlNFdGb1Y1MDMwYkNFYnpUK1JYd000OXQ5NndkR0JQTjRJTU1jR0RHajYyeFM1N1dLOEdpUm4vbVd3em1YOTlhdjFXT2M1OFcvNlpnSXZWUElYRG9qRDNzQ2lTaTU0WEJPSkdyMy9PZFU4b2tuZmJpa0JZSDVBUzIyRFZIZ3A1TUh1c1B1a3prdlRoYXZ2RG81N2pvRE9UM3RwWDVHTzlVWDlpZ3EwSEI1WTJGVC90VHBGWUt0NCt6RGtKWmYrdWZrc1RHTVdVRzlPRVkzUUorOWpNTDVBYzI3T2FrNXlrMEEvT2d3WWp6ajdTWnREN2xCajBOZm1ORElzdTRmdVp0R1lBMWIxNlFhZUpJVG1xbWpmSWpoU1ZIVHBtZHVjb3dRSzFZeE9wSk9pVlhmWnh5YVN3ZktqMGFtQUdjZE42bDlja2FXZlprUTcxTXM3OTNkZzhwSHFhV3RSbU9BTFRMTFV0Z0xnOUwyNHRuT1Rnb2E1Vno3b0sxZGpGOW5pZWI2bTczQU1hbTVwS2h6emRWOVhISWw1SWw3NjZtWXpMcUdPelRBTE5uWXNjeDRsek45Zk55bmhMM1hReUpFZ2FHbEh4QnQ5bkYvUzhlRjd5ZE4rWWNNSTdzQkhTVld6R3Erc3BUck5XWjBzWSt0UzlWVTREOTlMWVErekNXMTIrZk9UWGoxSURpZXQybTR3b0xldTZnSG1Gem90cytyZ3VBMmErOVBmTWsyczA0Q21yVVlNQ3dRclBYYUtRRXlJNkRkdHFtTDRKT0pJUmZMdkpsMWZDL2ZJZXgzM1l1SllhSzBPci9Fb05jTUsyWEoybDl0TEtEUE5qTGVZb2VDRXpkdFdoNUtVYWJJVUhxZ3k3bmMzTGxmYnN6STUyNWFQcTU2Wml5RTIwV3lYS2lwS1M1UWZ2ZFBLTVE2VFo1VEIxQTlBUWVhWG5palNkU200V1Z2U3kyc3RWOXl5TUJIU3dzNUFqNnpoNG51ZCs1RGU2b3FGUXRLYTZWeE56VlRFOW0zNjYwbUZjVWYvZEhhZXo2LzE5RmVqcFZsUUlkSjNmN3VNVG5Eb1UwNlN2dGJra1lFMS8vODRxWmJlK3hYR2RoSDNkMmdjQlY1c0ZJZStDRk8ydjVuMmRmelc5RXgwQmRCRjg1c3BWVnRBTWZlK2JwdW1yLzRJd1cvVFc0Z3VMWUp3ZU1nL1BBVDhYWElXczhWaE1lMTVoek1qZDNjUHhuUURMQkRjRHY2aHpRc3FnYmZjVmZqdmdPUDgzM3JiUUllQ3F0RDh5aC9JMlFGUHVWOTYyMENHQTVtbXg1dVZQQUxRVE5TZCtod0d3SHMvUnZ2SzJoYzRBbWxPVzBSZmVTOVFoc05zVjJmdzRiTTJET3dBZkRLOE1BVGhBOHRrbCtuOFVPSTJFbE0xdGsrL0R0UHU5SHU4Q1JiS1BxZFRwd2Z1U0VmUXhGS3IwZnJ3QktkemNGeXMvQU5pczJST1NoUm5PMUZlWHUvY0FXRUR1YUl0RUxRZ2I5YllOOXJjQjk1RTF0Y0ozQTJMa3ZIZ2hRY2NBZDlta1J0OGVqN0tKbTZwZC9RTm53ZUwvRnF0dW40VjVhS3JXWnh5ckdTaFgvMWZ5eTJOYlgzcjJCN3prQlJrdVRqZS9GV3JOSXpNK05DNUQ2d2s0aXhTNVYwL2NEdERaTDlxQm5JUy9xb1p3Mlp5Ly9WVUhiTDcxbVNUOE5UWEUydEJpZFB4dEJtS0ZFOE1rK2U5RUJkTURWTkg2V0xQd0U3RGtjcTVLWWIwMzRIQjAvRk5YVDArSXJQajVvbGMyNGhYU3JwVDYrZWZTQXE0WGswV0VqNW9wMm9Hb0dLUkVHSHM5THBCNzRoUVdXYXFhaEVvdkFzb3JCNWhudXRzQThPc2dhY2ZDZi9hOXJITUI1WlFEYm9IV1BoOEprV1Z2cERzczF2Tk9EZWpFd2pWNWFsM3o2aWVBbFRKOVNab3Z1M09JcEswT25WVHF0bC9kOWhxSUxteUZkNDdOUzRpZkI5NCsrVEx5NnZ3NzZIaUJxYmFIVmNjbnU0MnFZR2V3MExtd0hVN1EyT3YzVWVDdEFOYjRKWkV5ZmVlQTNFVElVQmhsYzVQMzEzRFJGamczMHNsQ3B1VW1zaVh4aFdPeS9GU3dpcjlGRlBXd0ZULzhBa3l0Y0FPWGFlME1qU3l6L2htNHVXQnJZYUJDMitVcUNSb1djMzhaY0lzQzBSajZ0ZlJRczRWcFU0ZmltQy93eTdaaHNEZWgxMHYyajRmTS9Rc29JdkNTblorZ2ZYZ2RxN3AzaVBLdFp0bkNRcG9YSUVtQ1lwT3J4WXpUVWZVZGJHWmJxVUZvRmJUL015Z2lrSW1GTFBKMk1mUTR5K3VWWS9xcXF1NzN4WDhTTTNiTzE0dko4Y2FMTWxlYS9OeVUrcVhBamtYSkxZVE8wMVZuZVhYQlVTb3ZZelV3U0ZQeC9KY0krQjgrTkZ2VHVvSDI5Z0FBQUFCSlJVNUVya0pnZ2c9PVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCIxMjBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMTIwXCJcblx0XHRcdFx0XHRcdFx0XHQvPiAqL31cblx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaDMgbWItMyBmb250LXdlaWdodC1ub3JtYWxcIj5QbGVhc2Ugc2lnbiBpbjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFVzZXJuYW1lXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ1c2VybmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cInVzZXJuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJ1c2VybmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRhdXRvRm9jdXM9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0UGFzc3dvcmRcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cIm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiB0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRTaWduIGluXG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHR7LyogSnVtYm8gZGVzaWduICAqL31cblx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwianVtYm8xXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQganVtYm8xd29yZHNcIj5JbWFnZTwvaDE+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PiAqL31cblxuXHRcdFx0XHR7Lyoge3RoaXMuc3RhdGUuY3VycmVudFVzZXIgPyAoXG5cdFx0XHRcdFx0PEtpY2tzdGFydGVycGF0aCBjdXJyZW50VXNlcj17dGhpcy5zdGF0ZS5jdXJyZW50VXNlcn0gLz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8TG9naW4gdXNlclN0YXRlPXt0aGlzLnVzZXJTdGF0ZX0gLz5cblx0XHRcdFx0KX0gKi99XG5cdFx0XHRcdHsvKiA8S2lja3N0YXJ0ZXJwYXRoIGN1cnJlbnRVc2VyPXt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyfSAvPnsnICd9ICovfVxuXG5cdFx0XHRcdHsvKiA8aW1nIHNyYz1cIi9pbWFnZXMvdGVzdC5qcGdcIiAvPiAqL31cblx0XHRcdFx0PGgxPkluZGV4IHBhZ2U8L2gxPlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmNvbC1zbSB7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDcwMHB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHQvLyBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDtcblx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmNhcmQtc3BhY2Uge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMyU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gLmxlZnRJbWFnZSB7XG5cdFx0XHRcdFx0Ly8gXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0Ly8gXHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0Ly8gfVxuXG5cdFx0XHRcdFx0LnJpZ2h0SW1hZ2Uge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMzBweDtcblx0XHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0XHRvYmplY3QtcG9zaXRpb246IDAgODAlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFN0YWNrXG5cdFx0XHRcdFx0LmltYWdlLXN0YWNrIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuaW1hZ2Utc3RhY2tfX2l0ZW0tLXRvcCB7XG5cdFx0XHRcdFx0XHRncmlkLWNvbHVtbjogMSAvIHNwYW4gODtcblx0XHRcdFx0XHRcdGdyaWQtcm93OiAxOyAvLyBtdXN0IGJlIG9uIHRoZSBzYW1lIHJvdyBhcyB0aGUgb3RoZXIgaW1hZ2Vcblx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAyMCU7IC8vIHRoaXMgcHVzaGVzIHRoZSBpbWFnZSBkb3duLCBhbmQga2VlcHMgaXQgcHJvcG9ydGlvbmFsIGFzIGl0IHJlc2l6ZXNcblx0XHRcdFx0XHRcdHotaW5kZXg6IDE7IC8vIG1ha2UgdGhpcyBpbWFnZSByZW5kZXIgb24gdG9wIG9mIHRoZSBib3R0b21cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmltYWdlLXN0YWNrX19pdGVtLS1ib3R0b20ge1xuXHRcdFx0XHRcdFx0Z3JpZC1jb2x1bW46IDQgLyAtMTtcblx0XHRcdFx0XHRcdGdyaWQtcm93OiAxOyAvLyBtYWtlIHRoaXMgaW1hZ2UgYmUgb24gdGhlIHNhbWUgcm93XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJpZ2h0SW1hZ2Uge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmxlZnRJbWFnZSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Lmp1bWJvMSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IDEwJSAzMCU7XG5cdFx0XHRcdFx0XHQvKiBvcGFjaXR5OiA4MCU7ICovXG5cdFx0XHRcdFx0XHRtaW4taGVpZ2h0OiAzMDBweDtcblx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAyMCU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMjAlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5qdW1ibzF3b3JkcyB7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJQZXJtYW5lbnQgTWFya2VyXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG59XG4iXX0= */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.669761a93467930a67e9.hot-update.js.map