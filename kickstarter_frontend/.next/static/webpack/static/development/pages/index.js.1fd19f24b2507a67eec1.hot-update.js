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
        className: "jsx-3755127523",
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
        className: "jsx-3755127523",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-3755127523" + " " + "container card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3755127523" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3755127523" + " " + "image-stack",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("div", {
        "class": "image-stack__item image-stack__item--top",
        className: "jsx-3755127523",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("img", {
        src: "https://media.timeout.com/images/104103651/630/472/image.jpg",
        className: "jsx-3755127523" + " " + "col-sm leftImage img-fluid rounded float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })), __jsx("div", {
        "class": "image-stack__item image-stack__item--bottom",
        className: "jsx-3755127523",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("img", {
        src: "https://images.unsplash.com/photo-1555367072-90923442306e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        className: "jsx-3755127523" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }))), __jsx("div", {
        className: "jsx-3755127523" + " " + "col-sm rightImage ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Sign Up?"))), __jsx("h1", {
        className: "jsx-3755127523",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Index page"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3755127523",
        __self: this
      }, ".col-sm.jsx-3755127523{height:700px;width:100%;}.card-space.jsx-3755127523{margin-top:3%;}img.jsx-3755127523{object-fit:cover;object-position:0 80%;}.image-stack.jsx-3755127523{display:grid;grid-template-columns:repeat(12,1fr);position:relative;}.rightImage.jsx-3755127523{margin-left:10px;padding:5px;}.leftImage.jsx-3755127523{margin-right:10px;padding:5px;}.jumbo1.jsx-3755127523{background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));background-size:cover;background-position:10% 30%;min-height:300px;padding-top:20%;padding-bottom:20%;}.jumbo1words.jsx-3755127523{color:white;font-family:\"Permanent Marker\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRmdCLEFBR29CLEFBT0MsQUFTRyxBQU1KLEFBS0ksQUFLQyxBQUtpRCxBQVV2RCxZQUNtQixDQS9DcEIsQUFzQjJCLENBZnZDLEdBU3VCLEFBV1YsQ0FLQSxNQTdCYixLQXlCQSxDQUtBLFNBaEJBLElBK0JBLE9BekJtQixVQWNJLFFBYnZCLGNBYzZCLDRCQUVYLGlCQUNELGdCQUNHLG1CQUNwQiIsImZpbGUiOiIvVXNlcnMvc2hhaHJhbmlyYWhpbWFuL1Byb2plY3RzL3lvZ2Ffa2lja3N0YXJ0ZXIva2lja3N0YXJ0ZXJfZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vbG9naW4nO1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y3VycmVudFVzZXIgOiAnJyxcblx0XHRcdGRlbGV0ZSAgICAgIDogZmFsc2Vcblx0XHR9O1xuXHR9XG5cblx0dXNlclN0YXRlID0gKHVzZXIpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKFxuXHRcdFx0e1xuXHRcdFx0XHRjdXJyZW50VXNlciA6IHVzZXJcblx0XHRcdH0sXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd1c2VyIGxvZ2dlZCBpbicpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH07XG5cblx0dG9Mb2dvdXQgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRVc2VyOiAnJyB9KTtcblx0fTtcblxuXHR0b0RlbGV0ZSA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgZGVsZXRlOiB0cnVlIH0pO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dCB0aXRsZT1cIkhvbWVcIj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPllvdXIgWW9nYSBKb3VybmV5PC90aXRsZT5cblx0XHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcblx0XHRcdFx0XHRcdGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCJcblx0XHRcdFx0XHRcdGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNhcmQtc3BhY2VcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZS1zdGFja1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW1hZ2Utc3RhY2tfX2l0ZW0gaW1hZ2Utc3RhY2tfX2l0ZW0tLXRvcFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vbWVkaWEudGltZW91dC5jb20vaW1hZ2VzLzEwNDEwMzY1MS82MzAvNDcyL2ltYWdlLmpwZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtc20gbGVmdEltYWdlIGltZy1mbHVpZCByb3VuZGVkIGZsb2F0LWxlZnRcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW1hZ2Utc3RhY2tfX2l0ZW0gaW1hZ2Utc3RhY2tfX2l0ZW0tLWJvdHRvbVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTU1MzY3MDcyLTkwOTIzNDQyMzA2ZT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9NjBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbSByaWdodEltYWdlIFwiPlNpZ24gVXA/PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdHsvKiBKdW1ibyBkZXNpZ24gICovfVxuXHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJqdW1ibzFcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNCBqdW1ibzF3b3Jkc1wiPkltYWdlPC9oMT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+ICovfVxuXG5cdFx0XHRcdHsvKiB7dGhpcy5zdGF0ZS5jdXJyZW50VXNlciA/IChcblx0XHRcdFx0XHQ8S2lja3N0YXJ0ZXJwYXRoIGN1cnJlbnRVc2VyPXt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyfSAvPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxMb2dpbiB1c2VyU3RhdGU9e3RoaXMudXNlclN0YXRlfSAvPlxuXHRcdFx0XHQpfSAqL31cblx0XHRcdFx0ey8qIDxLaWNrc3RhcnRlcnBhdGggY3VycmVudFVzZXI9e3RoaXMuc3RhdGUuY3VycmVudFVzZXJ9IC8+eycgJ30gKi99XG5cblx0XHRcdFx0ey8qIDxpbWcgc3JjPVwiL2ltYWdlcy90ZXN0LmpwZ1wiIC8+ICovfVxuXHRcdFx0XHQ8aDE+SW5kZXggcGFnZTwvaDE+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuY29sLXNtIHtcblx0XHRcdFx0XHRcdGhlaWdodDogNzAwcHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdC8vIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xuXHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuY2FyZC1zcGFjZSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAzJTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyAubGVmdEltYWdlIHtcblx0XHRcdFx0XHQvLyBcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHRcdFx0XHQvLyBcdHBhZGRpbmc6IDVweDtcblx0XHRcdFx0XHQvLyB9XG5cblx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0XHRvYmplY3QtcG9zaXRpb246IDAgODAlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFN0YWNrXG5cdFx0XHRcdFx0LmltYWdlLXN0YWNrIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnJpZ2h0SW1hZ2Uge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmxlZnRJbWFnZSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Lmp1bWJvMSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IDEwJSAzMCU7XG5cdFx0XHRcdFx0XHQvKiBvcGFjaXR5OiA4MCU7ICovXG5cdFx0XHRcdFx0XHRtaW4taGVpZ2h0OiAzMDBweDtcblx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAyMCU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMjAlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5qdW1ibzF3b3JkcyB7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJQZXJtYW5lbnQgTWFya2VyXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG59XG4iXX0= */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.1fd19f24b2507a67eec1.hot-update.js.map