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
        className: "jsx-112194851",
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
        className: "jsx-112194851",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-112194851" + " " + "jumbo1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-112194851" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-112194851" + " " + "display-4 jumbo1words",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Image"))), __jsx("div", {
        className: "jsx-112194851" + " " + "container card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-112194851" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("img", {
        src: "https://media.timeout.com/images/104103651/630/472/image.jpg",
        className: "jsx-112194851" + " " + "col-sm float-left leftImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-112194851" + " " + "col-sm rightImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-112194851" + " " + "form-signin",
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
        className: "jsx-112194851" + " " + "mb-4 logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), __jsx("h6", {
        className: "jsx-112194851" + " " + "h3 mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Your Yoga Journey Begins here!"), __jsx("label", {
        htmlFor: "username",
        className: "jsx-112194851" + " " + "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Username"), __jsx("br", {
        className: "jsx-112194851",
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
        className: "jsx-112194851" + " " + "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "password",
        className: "jsx-112194851" + " " + "sr-only",
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
        className: "jsx-112194851" + " " + "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), __jsx("button", {
        type: "submit",
        className: "jsx-112194851" + " " + "btn btn-lg btn-primary btn-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Sign in"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "112194851",
        __self: this
      }, ".col-sm.jsx-112194851{height:700px;width:100%;}.card-space.jsx-112194851{margin-top:3%;}.logo.jsx-112194851{display:block;margin:0 auto;}.rightImage.jsx-112194851{top:50%;padding:30px;border:2px solid red;margin:5px;}img.jsx-112194851{object-fit:cover;object-position:0 70%;}.leftImage.jsx-112194851{margin-right:10px;padding:5px;}.jumbo1.jsx-112194851{background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));background-size:cover;background-position:10% 30%;min-height:300px;margin-top:3%;padding-bottom:20%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SGdCLEFBR29CLEFBT0MsQUFJQSxBQVlOLEFBUVMsQUFLQyxBQUtpRCxRQWpCdEQsS0F2QkYsQ0FPWixBQUllLEdBb0JRLENBS1YsR0FaUyxHQXJCdEIsSUFTQSxFQXlCQSxTQUxBLEdBUFksV0FFWixPQWN1QixzQkFDTSw0QkFFWCxpQkFDSCxjQUNLLG1CQUNwQiIsImZpbGUiOiIvVXNlcnMvc2hhaHJhbmlyYWhpbWFuL1Byb2plY3RzL3lvZ2Ffa2lja3N0YXJ0ZXIva2lja3N0YXJ0ZXJfZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vbG9naW4nO1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y3VycmVudFVzZXIgOiAnJyxcblx0XHRcdGRlbGV0ZSAgICAgIDogZmFsc2Vcblx0XHR9O1xuXHR9XG5cblx0dXNlclN0YXRlID0gKHVzZXIpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKFxuXHRcdFx0e1xuXHRcdFx0XHRjdXJyZW50VXNlciA6IHVzZXJcblx0XHRcdH0sXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd1c2VyIGxvZ2dlZCBpbicpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH07XG5cblx0dG9Mb2dvdXQgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRVc2VyOiAnJyB9KTtcblx0fTtcblxuXHR0b0RlbGV0ZSA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgZGVsZXRlOiB0cnVlIH0pO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dCB0aXRsZT1cIkhvbWVcIj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPllvdXIgWW9nYSBKb3VybmV5PC90aXRsZT5cblx0XHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcblx0XHRcdFx0XHRcdGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCJcblx0XHRcdFx0XHRcdGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdFx0ey8qIEp1bWJvIGRlc2lnbiAgKi99XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwianVtYm8xXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQganVtYm8xd29yZHNcIj5JbWFnZTwvaDE+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjYXJkLXNwYWNlXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdHsvKiBMZWZ0LXNpZGUgICovfVxuXHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL21lZGlhLnRpbWVvdXQuY29tL2ltYWdlcy8xMDQxMDM2NTEvNjMwLzQ3Mi9pbWFnZS5qcGdcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtc20gZmxvYXQtbGVmdCBsZWZ0SW1hZ2VcIlxuXHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0ey8qIFJpZ2h0IFNpZGUgICovfVxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20gcmlnaHRJbWFnZVwiPlxuXHRcdFx0XHRcdFx0XHR7LyogU2lnbiBVcCAqL31cblx0XHRcdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJmb3JtLXNpZ25pblwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1iLTQgbG9nb1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9VQUFBRGNDQU1BQUFDNFlwWkJBQUFBaWxCTVZFWC8vLzhBQUFEOC9QejUrZm42K3ZyMDlQVHY3Ky9wNmVuYjI5dnU3dTd6OC9QbzZPamo0K01VRkJUZjM5L056YzFSVVZHdnI2OXBhV2tmSHgrS2lvbzZPanE5dmIzRXhNUXRMUzNSMGRFbkp5ZC9mMzhZR0JoaVltS25wNmRDUWtKMmRuYVNrcEtjbkp4ZFhWMHlNakpGUlVWVVZGUUxDd3VOalkyM3Q3ZG9hR2hlWGw1NWVYbWlvcUo0TGRyV0FBQVZFRWxFUVZSNG5OMGRhYnVwWEZRbGt0S2dVV2hRa3F2Ly8vZHVlNjBkb1J4VWg5UDY4RDd2eFdHdjFqenUwZWozZ2VVazY2QXVVNFpobHZ2UVpUOXdoSDZCNVdjTE85ZWQxTmtIUm5nSWZJWUpwcDgrVkpmQWl0T0Zvb1c2bjZibU1iVG5ISG5OOWZhNU9PSVdpc3QvK255dGdlVWwxOUlPd1Q0dW1OVFVJL3RDdnNtaVFNL2RPYXJ3d2ZPMUJtNG0yRnBrNkVrc0Z4Z3lxMk5rejhkWG4yRDVrYUFueHV4REIyd0wzTlROSWs5WHpSVWdDS3JHbHJpYlQwbmh5ZWJtd3A5RWtsdFlvYjczUy93SW81NDBaVjRqZk1vLzNmcUxXcmJBOEtBNjZ6Tit6Tm8vNXU1MDNQQnBrZnRyU0xMOElqT1NNM3JwT3Q2ZmNxVUp3VDhKL0Z6SjlkV1pnTEVhaE5uaTd4dUlLdkNDRmU1S0ZOTjQ3K1hXbmFMNTR6Q1dySEJmb3JoT2dzZ1Noa1hEQWlaMmRIUktLdTROelowT2pJZ0ZTRnZkTCsxRmNyQVc0bC9UbUUvQTRwQXNLWXFPWjBtRDQ5TUNXTUU3YytwT213NlFpSVZXVlU1eXFXOE9mOXJYYmdaZThTaXJtcm8ycUFqeEFweDdvTHlhR0xiNDZkUDBBNndRVVM5T0RkM2hXUTJFbWZZUEJYS2ZDMFBGY2FRRXlLeEp2aGdzam54a1lrUWNTWU8wSEFDdUNqaktKK25USitrUFpoSEV4a3ZkL2ZSSitnUFcxWUdPTzIySWpod0ZVUU51TmNQRnAwL1NJMGdocU5iQUhxeGlMVURRU1Zranp1ZWZQa2lmWUFPM2JnWk55SkZHVXYveVlkQ0U1RU5pUVB3L21SeCtHdVllQ1pQMWdZYVFGQlluNGdnWWswK2ZvMWNRaUN0ZzVvTldPeU5oUThKSWE5aElMZ2lTLzVSQjZ4MUU4aWdNRzBucFdDQ3BEempJSWlBUnhSTU1OSGxWd3B5WWtHREFVUmFCbVZINEFxZGhtOGtSSDZWTTZnMDBuM3lHN2JKZzE0RXJucEc5SWliazA2Zm9HWVNFWWZZRHptRUJUQW9iWXRxZlBrWFB3QmZxZFpWOStoUTlBNnM1REJOOStoUjlnNklXNm5YWVVVamgyQVdGNWhtNkRlSHo5ZkExejBneEdYazdkSDZkRmRIV2FlaU8zU2huR0hYbzdzQklTSm1WOXVsRDlBMTg0ZlI0ZjdLNytoWElaQ1pSUG4ySXZrSGFNWEkwN0Z4VzRkcEZhMlkvNkpJUEFkSWJZWDM2RUgwREY2Yk1adWo4T2xLSzBIbndxa2Nzb2twditLUTBHV2Z3WGc5L1lCaGo0RG5tUXNHYWpEbDRxUnlIQlNrN3k2VHpsdmFWbmJPU3o4U2R4YzV6ejFudHZsSEd0eDFPS0M5SVJmQWI4dzFjMGwzRUpleVlMeTBKMmd5ejY2aU5FSkZNdnBCaDJZQ1J3MjQ4QXVFSVBiVGJUcjZzV3hCaXh1L0dqSkE4WndIR04ycllQTzJvNml4NmdPVG1HNnU3NHBHUnUyR3hrRFNZTXY1WDFnUUxGOWJzSkp1ZXdhVEo4anVEMUVobTlDNit4OFV4ak9nYmhYSTAweG1taTBLZXRBY2szMHNDQ2w2aWhuMUdDN2JKTER0UUZ6TlVydy90N3NUTmxEcDNnZGRncnZwQkZhcXRuV1B6TmJOcCtSMEZjQkhNS3Q1NmRpeC80ZDlwdGt1Wk5MalhUZE1ESFZmZDEra3RWbHk0Vm1hM2MwQm5KNFpwNzkyeHRnK2FKNy9hd1NBcVcwT2pmTUxiT3FKeXZLWFlJaWpYSEREM1R2NVl5RHgvVFpxUFdtbHVWMlhXN1ZVLzlKZ3l6SFVmbE9zVitpakVsNlF3TGxHNUxuU3p5ai9tQXZ1YkRzN3BkcC9TdDQ1dGZOQnN4ZXhidTlZa2EwVGMxK3BCeGxwU0VQZUFuT2JxbDlVcGZ2VlJzSmJLVkVHOVFsUHdWcGUzOUNmMUdudS9sNFV2NHVmMlBteUc2MUdxUXNsdW5ZTFBxTWExcjFDcGVKT3M1VFBYVU4xb3BPelM4K3ZGL3ozbnVrakc3azRDNTNvSHVXWUpMYVZSZmMwaXI2bElYS3ZrMXRWcHE1M01pdkRaWnlUVElNdkExYitjeGpicGU2WmhDUXRYZTBhdzJLemdvTVB0cTY3UHhLM0Y4b2d5VmVWRWlRanFFdTJ3VFNrUzUxTldNdzhWYmVtZWtRU0JKT3lybnJuZXBmdHpWT3Q1UXpvbm1reStiWEZoQzE3VDIxcExEWEdvNmtkMlMrUlFCNDFyNHp5OFE5QWovdnhGdnFRZHhURU82V3VpZTM0R0FqNEJOWHZGbDFMOE9peTVxQkRMbGk2WkFJd2xYMDBxUUtNMENxQ2JVSW9RNlY4UXZEejZTZDRyWmJGbUptY0tobWRkWTE0ZkFXQzV2c1Z5VWxCWWE2ZDhhTGdWVk10bExLaWpmNEFYMkpoMGd5ckhKck4vS1JVOXJWU2VOWmtGUGlUTXNESmVEQ05JSFlSWjV6ZXZTaW9UdHd5Z00xQXR5WlhUZzRRZ3lNd01NQ0hVM0krM2dCYWVRcURLeFR0andwMjNyYkR3cmN2d1ZZOEhzTHhMVmJpRnRXeVg4VUhlWEY5SEloWkJUWjNRZnJmTE15Q09Wa0ZMK0plSUxrOXFuREhoRDBIb292TUU2YVAwOVExeXdMRjNXR1p0VTVUakhIVEw1b3F6Uk9CUzhsc0NHTXBsS1JRQ3lHZ016SjJod2I4Z1NRNGoreEhSaGFKQjFMSitlWXUzODZjTUNXQjVsNDhNQytQU3l2TVJJTjV5cmsydVJWN3pGMmVmcUZRM0l4dU1BMFN6YytvVFhzUlpCQTVPeVljdDhnU1dGeVliYjJONUhYcy80d2ttOXJZamxOTVplZHRHK1JEWGlibXRDWElncVlTSGdYTVpzNlFKaDhFSE1OUVdlZUNDQ1V1ZDl1VjhKQUhKS3hSUlVJU2QvQ2VLMUdJNTlXL0o4Q0xnejV2WER4bFVETW4rVE5BUlB4OTNDdndyazA5ajN0YXMvTGhObllCMHdjTEQyRjB3RWtxSGZ2MklKQ3c3WmpNSE9IYk04UVdJQlJBdUVscjJ2dkJJbkd2N05BZk1ReEVFN2VxNENpQ3lLMzZaQTNGT0t5bE5rUVptVERKenlYdnk1UUhNejZIWnNnRkxVVkJzSzlQeUVCemY5VEUwRE04N0JicXVFNS9DYm9oY253Vk05WmpYK2d1WW1DUjRlU1NkZGYwT2FpVWdwVjh4bEJuZHBwTnFJMERxZUZHOVJvbGtVODUrYmlTcjljV3hyOEoyREhhNXpTUVhHOWFRRW4xVGJ3TFBrS2xxU3NUYUxFU1Iyd0pWSzhIUXRLUlhNQk5nVDNCMk5wMzU1ZnhCcldsaHQ3VUlBdDhRR2taNG5IY0JZNUhyTkNmdndkUS9JYUNPdERtam9zQVBIempxeTEvOW9VWkpHZHNqSUoxZTZsNjJmSWV3UlgyTU9Oa3hEUkJyUkNRTUptM2p4ZUl6dlA1cERKZUM0dGxKY0x5SzB3SEhoN2pMUWxKZS9rb29EM3JncDZBbXkyZFRCREdYUTFmTS9Wd0x6N3V3RnJYTW1xYkxYUWJSVEZENGZPOGJFaFpzNWVwS1ZqQ1ZCN284cDhjK3Z3WG5OY1RTVFpjditNL09mcnVMVDZCTURoV0dzbkx3aXoxWTZISXE3NmxITmZYMnFybzdCdDRoZ3R6QzJzdHNSWEVGWVlhNGJWclZMVjM0NmF0RUJhc0JsWTRGYXVQTjljSFFPWWNrSDNMNjhSNUp1WGptUm9Wb3MxQ3VJSG1wV1UxUUlaMm5DRmlXMGdvNDZkWXpUMUNBM29RSWZ1b3E0a0pYYUUxSWlhYjlrcCtkQVZPQ0duRGxLNGFWenBaaUo2RnpnR2tSVnFCdnBDcW1Sa29WeTFvZ0RIS0Y1VWNWTEcvTTk4aHNVeHJud0UrWHN3ckwwNlRqUDhLbEVHUlZsQnY0cmZoejRBR1dhWnl4ZTFZZWhJUThZUUVJN01XTVpvdFMzY1djU21sNXFFSk83bzJnVFQ2WDNNUWZUaHVuWUk0cDJNcGpVcWhsQi80QUZ5Nk55Z1F0cU5VVWtjNHFXTTYweTJMZC9aUXFUSU1kY2NLaFhBOTVFaWlQVU1aak0zeW5acllIbmtaeVl4eFhUSXNsNEFJUTYySXBwUEs4S3ZCd0JHRnc2Vkx5a0h1bmdvV0dsQ1REV01HNEdJcVU0QzN1U0tiTHRhTjlTV0FTdFNEMWxoaVlMdkN0ZlkzeHRPcG91V3pUVCtEaStmNEJHM0hDOWxqbVR2R0pBNWFsMkxPWkNZS0VNdXhpdGNFZHo3VmRSYjM0NU5nZ2w2dkVQSzh5aGVROGl3R2VSMFNCUTEyMXJwTTFFRmovQnFjMWMzeS83M2NSVTlWZzVQa2hPSzhmUmFta0hGdGlhUU9aeTNMUEhJbWU2RHQ0VURIRkNGbFlxU1NhQ3pWYWh0VWdvekFnUVgyaFdoTllpNlVNNXZ0TkVNK3A1RFN0Mm1XS21BSTVEVEJVU0VsR0xuVUFGMVlSTVdqK1owVXRhM1o1YTMxT2liQTVlUlRwU2VJd1pHUHE2NEJaSFpacHE4YWNXL2NSVVQzUmIrUWhYRkkxUWJDT1ZWb1JtSG9sUTY2UENrc2w4R3k1TGNvVzZiN0NsSlJQSFdRZ3MyR0FDUlQ1YlpORXlweGFsRVl4OFhFR0gyaDdNY2thWWlLWEsxaXJudUFzM3p0cmVXa2VOWkhxSWthbHlvUjM0UkhJemo2NmluVW0zbGttbktCcDdRZlJ2bmRSVm5wSlZyd0RRbkNXb2RROG9ZbzF6c3pCbFI0Tm5peTg1aG9weTZPdE1vRjhSWVdVRThXSVNmcEhENjFiamNGdk4vRlNYcS84UUd2TWVpbjZ4cml6R2t3N0xBdWZPVWppMVNwT2pxRTlnM1M2VTJHeWVYQVJWMVZyRWcwYm45US9ndFRNTmt5OEZhSjJ1YkJrYmZOY1V4Nm9FazZhMzIreEw2TDFkcXZ0MmFsclc1YnRTdnhvRGk2TVhxV0FGTktBd2plVXBxZkpuNUN2QzdNN3kwakJjeFZrVXZPaDJEZUNDeVk5ZE5hckRycnZKaFZLaXRHbms2RzV6VHFPRnJZMmtwanBoWUtNdlphMTlScTRMeW04RFJnWTMwbittQmRGL3NHVHBQV0haYVFScDhLUEhqeVB0NkhEdmtCbzgwanZLb2MvZ1VWM3RacHI0dWIwcytxN3U1RjlMQ1Q0cjNhTXpzdk1IZVBvZGwrREhpMnpzUmRnTmZRelh6d29UeDJadFdyMGVPZlZsZUp2QTdEemlGbTlGc2FKYnVSVFc5cnIzaXN2NktiRm1VWjh4MWVNNzlRMnlucDdPNlA5STh3NjJzODhSVS8xZWZabkpTMDRKK2RXWDlqL1hRZFk5ZkdmSlFrclJQK0lTcWIrb2ZIelgzd0RpRml0dVMxME53RHJRczhaNDI4eHpFei95SDVoekZhWlR6a3R2QjFBTWpPT0pncVZ5cjZQMXcxdzZyT2taT2ZhSGlPWVVDTFpZRkN3ZjR1VVA1NldFM0o4SHFaQjlJMkNFVXRITXg1OUE2YVRHMUlVRitCZGVrMkVjNExkeVJ3R0k5L1p5MzhQV3l5clAvWUllQ1ZFSEpkQmh2R2hncm1OcU5zKzdzbWlIMStZOXFzL0hHemszRU1DL0psdU5CcUEwc2F0anRlV1NNWk9qM3BZOThKaUsvZkRlb3RnSUk1RjFIRjJRekN1VEx1ZFdCaVRUTjlkRzE0SGdMbjloaW94d0NReVV4cEVYbHd0RVlxNVhaTVNRNXhUNXp6TFJYRGE1Z2lPeTJoZFFmYXE1UXRzak8xNm93ZFdvSjcwVGw0QWVwdEhVN2MxNjlMaW5CTmNGM05SS2x0Mng5M0NHQXJEeTg3ZFl0clYxRlRybmRGNnVYTjdnd0pVNERyTXh5QmdlbVhYZVlSRG01VjM5V3BOd0JTNnJHYzNDbmlLdHJMclpXMlMyZ3ZEMHE2bXRENTdaS05pMm0xdjg4Y3MxZ2dhL3V4OXdFSlNuWnNodWkzaWRCY3RlMUpIU2s3ejBTdS8vLzRaWm52VWp1YzBXU2dycVhYSlhQZWYrblk1dXF3UjFQRUlINEcrMjlnMXZnMkdvNTNNMEZVQk8yN3ZtdzFHcE1qeS9zSkdCVSs3cWxHd0l0VEw2Mi9DNE5EeDNYZXRKYkRCcUo1bWJ2THV4aHVXMXJ4cU5PWFVlK0FRWVlFeTdYeWxRZlpBRE5nb2ZYTm1EeU91T3FuRUxzZ0dhemhCTjZIemxCWSs5S2loeGxMbzM3ZUlPYUdrdk8vbWhEWG1jdE5pYUN6dW1wM2Jib25JejdJUmxZalIzd2wvc0UyTGRDTGRBSFNwTFkyRzBHQ0IvYVFkUjF3ajJoRzNhZXlURU9MMUcrcE93cFRXOG00Y1pVSmtjbmxvUUhLTVRXZWJ6dk1nTExvRXpYSmd2TkVRUTN0VDd2dHJ4VVBodjh0TmxLU2pRcXVXb3pvMUFMbXlSN0c4a01vdk41RFNYazhudXprdWpnNDNMaTdsWVliaWVwS29Hd0N0L25EMjNIdTVINCtMMEZiZVRhTkEwKzY5ckphQUVWZWJIc2NHZ0Q3TjVjTU9VY0Y1VlZBVU5BZDNEd2Zxa2MwWksrcW1lOTBQN1VNLzBOM005Uld3MFl2VE03UkJOYjA5TG1RT211MDlyUnE5WE9iOEdhWkVnSDVxYVY3c3lSVEc4MTlxMHl0TmI0NkxwR3F1ZTJCWnZ0N1ZiQWZRdFBYVFBNVllXNzZ5L1lhV2tOT2JoQVlMSm12Zm1FTWJZd3RkMHIzcW1ZQWY4bU1DbTdncnorY250cGl1dXNWSElROTAzYXhaY0ppdGcvVUlkd0Fad1pxdTRMdlBGU2ZRbnhSTnVoZmx0bDQ1QmoraCtlNFdGb1Y1MDMwYkNFYnpUK1JYd000OXQ5NndkR0JQTjRJTU1jR0RHajYyeFM1N1dLOEdpUm4vbVd3em1YOTlhdjFXT2M1OFcvNlpnSXZWUElYRG9qRDNzQ2lTaTU0WEJPSkdyMy9PZFU4b2tuZmJpa0JZSDVBUzIyRFZIZ3A1TUh1c1B1a3prdlRoYXZ2RG81N2pvRE9UM3RwWDVHTzlVWDlpZ3EwSEI1WTJGVC90VHBGWUt0NCt6RGtKWmYrdWZrc1RHTVdVRzlPRVkzUUorOWpNTDVBYzI3T2FrNXlrMEEvT2d3WWp6ajdTWnREN2xCajBOZm1ORElzdTRmdVp0R1lBMWIxNlFhZUpJVG1xbWpmSWpoU1ZIVHBtZHVjb3dRSzFZeE9wSk9pVlhmWnh5YVN3ZktqMGFtQUdjZE42bDlja2FXZlprUTcxTXM3OTNkZzhwSHFhV3RSbU9BTFRMTFV0Z0xnOUwyNHRuT1Rnb2E1Vno3b0sxZGpGOW5pZWI2bTczQU1hbTVwS2h6emRWOVhISWw1SWw3NjZtWXpMcUdPelRBTE5uWXNjeDRsek45Zk55bmhMM1hReUpFZ2FHbEh4QnQ5bkYvUzhlRjd5ZE4rWWNNSTdzQkhTVld6R3Erc3BUck5XWjBzWSt0UzlWVTREOTlMWVErekNXMTIrZk9UWGoxSURpZXQybTR3b0xldTZnSG1Gem90cytyZ3VBMmErOVBmTWsyczA0Q21yVVlNQ3dRclBYYUtRRXlJNkRkdHFtTDRKT0pJUmZMdkpsMWZDL2ZJZXgzM1l1SllhSzBPci9Fb05jTUsyWEoybDl0TEtEUE5qTGVZb2VDRXpkdFdoNUtVYWJJVUhxZ3k3bmMzTGxmYnN6STUyNWFQcTU2Wml5RTIwV3lYS2lwS1M1UWZ2ZFBLTVE2VFo1VEIxQTlBUWVhWG5palNkU200V1Z2U3kyc3RWOXl5TUJIU3dzNUFqNnpoNG51ZCs1RGU2b3FGUXRLYTZWeE56VlRFOW0zNjYwbUZjVWYvZEhhZXo2LzE5RmVqcFZsUUlkSjNmN3VNVG5Eb1UwNlN2dGJra1lFMS8vODRxWmJlK3hYR2RoSDNkMmdjQlY1c0ZJZStDRk8ydjVuMmRmelc5RXgwQmRCRjg1c3BWVnRBTWZlK2JwdW1yLzRJd1cvVFc0Z3VMWUp3ZU1nL1BBVDhYWElXczhWaE1lMTVoek1qZDNjUHhuUURMQkRjRHY2aHpRc3FnYmZjVmZqdmdPUDgzM3JiUUllQ3F0RDh5aC9JMlFGUHVWOTYyMENHQTVtbXg1dVZQQUxRVE5TZCtod0d3SHMvUnZ2SzJoYzRBbWxPVzBSZmVTOVFoc05zVjJmdzRiTTJET3dBZkRLOE1BVGhBOHRrbCtuOFVPSTJFbE0xdGsrL0R0UHU5SHU4Q1JiS1BxZFRwd2Z1U0VmUXhGS3IwZnJ3QktkemNGeXMvQU5pczJST1NoUm5PMUZlWHUvY0FXRUR1YUl0RUxRZ2I5YllOOXJjQjk1RTF0Y0ozQTJMa3ZIZ2hRY2NBZDlta1J0OGVqN0tKbTZwZC9RTm53ZUwvRnF0dW40VjVhS3JXWnh5ckdTaFgvMWZ5eTJOYlgzcjJCN3prQlJrdVRqZS9GV3JOSXpNK05DNUQ2d2s0aXhTNVYwL2NEdERaTDlxQm5JUy9xb1p3Mlp5Ly9WVUhiTDcxbVNUOE5UWEUydEJpZFB4dEJtS0ZFOE1rK2U5RUJkTURWTkg2V0xQd0U3RGtjcTVLWWIwMzRIQjAvRk5YVDArSXJQajVvbGMyNGhYU3JwVDYrZWZTQXE0WGswV0VqNW9wMm9Hb0dLUkVHSHM5THBCNzRoUVdXYXFhaEVvdkFzb3JCNWhudXRzQThPc2dhY2ZDZi9hOXJITUI1WlFEYm9IV1BoOEprV1Z2cERzczF2Tk9EZWpFd2pWNWFsM3o2aWVBbFRKOVNab3Z1M09JcEswT25WVHF0bC9kOWhxSUxteUZkNDdOUzRpZkI5NCsrVEx5NnZ3NzZIaUJxYmFIVmNjbnU0MnFZR2V3MExtd0hVN1EyT3YzVWVDdEFOYjRKWkV5ZmVlQTNFVElVQmhsYzVQMzEzRFJGamczMHNsQ3B1VW1zaVh4aFdPeS9GU3dpcjlGRlBXd0ZULzhBa3l0Y0FPWGFlME1qU3l6L2htNHVXQnJZYUJDMitVcUNSb1djMzhaY0lzQzBSajZ0ZlJRczRWcFU0ZmltQy93eTdaaHNEZWgxMHYyajRmTS9Rc29JdkNTblorZ2ZYZ2RxN3AzaVBLdFp0bkNRcG9YSUVtQ1lwT3J4WXpUVWZVZGJHWmJxVUZvRmJUL015Z2lrSW1GTFBKMk1mUTR5K3VWWS9xcXF1NzN4WDhTTTNiTzE0dko4Y2FMTWxlYS9OeVUrcVhBamtYSkxZVE8wMVZuZVhYQlVTb3ZZelV3U0ZQeC9KY0krQjgrTkZ2VHVvSDI5Z0FBQUFCSlJVNUVya0pnZ2c9PVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCIxMjBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMTIwXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJoMyBtYi0zXCI+WW91ciBZb2dhIEpvdXJuZXkgQmVnaW5zIGhlcmUhPC9oNj5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0VXNlcm5hbWVcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInVzZXJuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwidXNlcm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cInVzZXJuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkPVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdGF1dG9Gb2N1cz1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFBhc3N3b3JkXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkPVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgdHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0U2lnbiBpblxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0ey8qIHt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyID8gKFxuXHRcdFx0XHRcdDxLaWNrc3RhcnRlcnBhdGggY3VycmVudFVzZXI9e3RoaXMuc3RhdGUuY3VycmVudFVzZXJ9IC8+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PExvZ2luIHVzZXJTdGF0ZT17dGhpcy51c2VyU3RhdGV9IC8+XG5cdFx0XHRcdCl9ICovfVxuXG5cdFx0XHRcdHsvKiA8S2lja3N0YXJ0ZXJwYXRoIGN1cnJlbnRVc2VyPXt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyfSAvPnsnICd9ICovfVxuXG5cdFx0XHRcdHsvKiA8aW1nIHNyYz1cIi9pbWFnZXMvdGVzdC5qcGdcIiAvPiAqL31cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5jb2wtc20ge1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA3MDBweDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0Ly8gYm9yZGVyOiBibGFjayAxcHggc29saWQ7XG5cdFx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5jYXJkLXNwYWNlIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDMlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5sb2dvIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gLmxlZnRJbWFnZSB7XG5cdFx0XHRcdFx0Ly8gXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0Ly8gXHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0Ly8gfVxuXG5cdFx0XHRcdFx0LnJpZ2h0SW1hZ2Uge1xuXHRcdFx0XHRcdFx0Ly8gZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHQvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR0b3A6IDUwJTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDMwcHg7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCByZWQ7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDVweDtcblx0XHRcdFx0XHRcdC8vIGJveC1zaGFkb3c6IDlweCA3cHggMjVweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0XHRcdG9iamVjdC1wb3NpdGlvbjogMCA3MCU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmxlZnRJbWFnZSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Lmp1bWJvMSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IDEwJSAzMCU7XG5cdFx0XHRcdFx0XHQvKiBvcGFjaXR5OiA4MCU7ICovXG5cdFx0XHRcdFx0XHRtaW4taGVpZ2h0OiAzMDBweDtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDMlO1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDIwJTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyAuanVtYm8xd29yZHMge1xuXHRcdFx0XHRcdC8vIFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdC8vIFx0Zm9udC1mYW1pbHk6IFwiUGVybWFuZW50IE1hcmtlclwiO1xuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuIl19 */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.4da623b37b87bec740cf.hot-update.js.map