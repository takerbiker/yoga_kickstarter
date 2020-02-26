webpackHotUpdate("static/development/pages/kickstarterpath.js",{

/***/ "./pages/PrivateClass.js":
/*!*******************************!*\
  !*** ./pages/PrivateClass.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivateClass; });
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
/* harmony import */ var _components_MyLayoutOut__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MyLayoutOut */ "./components/MyLayoutOut.js");
/* harmony import */ var _bookprivatesession__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bookprivatesession */ "./pages/bookprivatesession.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/PrivateClass.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var PrivateClass =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PrivateClass, _React$Component);

  function PrivateClass(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PrivateClass);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PrivateClass).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleSession", function () {
      _this.setState({
        isShowSession: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (e) {
      _this.setState({
        comments: e.target.value
      }); // this.props.bookedFirstClass(this.state.bookedFirstClass)

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleBookSession", function (e) {
      alert('Booked first session');
      next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/BookPrivateSession');
    });

    _this.state = {
      username: '',
      // booked   : false,
      comments: '',
      // value    : 'Bianca',
      bookedPrivateFirstClass: _this.props.bookedPrivateFirstClass,
      isShowSession: false,
      stillCanBook: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PrivateClass, [{
    key: "render",
    value: function render() {
      // console.log(this.props.bookedFirstClass);
      // {
      // 	this.state.bookedPrivateFirstClass;
      // }
      var recordedComments = this.state.comments;
      return __jsx(_components_MyLayoutOut__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Your private class",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-2813407235",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Your private class"), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        className: "jsx-2813407235",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-2813407235" + " " + "card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("img", {
        src: "https://i1.wp.com/www.yogaplus.sg/wp-content/uploads/2019/07/2nd-batch-190519-Acro-Partner-Yoga-Rated-36-1.jpg?resize=1024%2C429&ssl=1",
        alt: "",
        className: "jsx-2813407235" + " " + "imageHead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-2813407235" + " " + "jumbo1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2813407235" + " " + "card container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.state.isShowSession ? __jsx("h3", {
        className: "jsx-2813407235",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Book your session with one of our master teachers!") : __jsx("h3", {
        className: "jsx-2813407235",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "What would you like to do?"), __jsx("div", {
        className: "jsx-2813407235" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2813407235" + " " + "col-sm first-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, this.state.isShowSession ? __jsx(_bookprivatesession__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isShowSession: this.state.isShowSession,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }) : __jsx("button", {
        onClick: this.toggleSession,
        type: "button",
        className: "jsx-2813407235" + " " + "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Book your private session")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/Kickstarterpathlogin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-2813407235",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Back")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2813407235",
        __self: this
      }, ".imageHead.jsx-2813407235{width:100%;height:300px;object-fit:cover;object-position:0 60%;}.card-space.jsx-2813407235{padding-top:4%;text-align:center;padding-bottom:10px;}.card.jsx-2813407235{width:40%;padding:1%;box-shadow:7px 7px 7px -10px rgba(0,0,0,0.75);}textarea.jsx-2813407235{width:300px;height:80px;}.first-row.jsx-2813407235{display:inline;margin:1%;}.btn-primary.jsx-2813407235{margin-left:1px;margin:0 auto;background-color:skyblue;border:black;}.jumbo1.jsx-2813407235{background-size:cover;background-position:10% 30%;padding-top:10%;padding-bottom:10%;}a.jsx-2813407235{font-color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9Qcml2YXRlQ2xhc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUlNLEFBSW1CLEFBUUksQUFVTCxBQU9FLEFBS0csQUFLQyxBQVFNLEFBU0wsVUFoQ04sQ0FuQkUsQ0F5QkQsR0FqQk0sQUFzQlIsQ0FLSSxDQWlCZixJQWhDa0QsQ0F1QnJCLEVBMUNYLEFBeUJsQixDQUtBLEtBSzBCLEdBMUJMLFFBUkUsU0E0Q04sR0FuQ2pCLEVBMEJjLFFBakNkLEdBMkNvQixDQTFCcEIsQ0FpQkEsaUJBVUEiLCJmaWxlIjoiL1VzZXJzL3NoYWhyYW5pcmFoaW1hbi9Qcm9qZWN0cy95b2dhX2tpY2tzdGFydGVyL2tpY2tzdGFydGVyX2Zyb250ZW5kL3BhZ2VzL1ByaXZhdGVDbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXRPdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dE91dCc7XG5pbXBvcnQgQm9va1ByaXZhdGVTZXNzaW9uIGZyb20gJy4vYm9va3ByaXZhdGVzZXNzaW9uJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaXZhdGVDbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR1c2VybmFtZSAgICAgICAgICAgICAgICA6ICcnLFxuXHRcdFx0Ly8gYm9va2VkICAgOiBmYWxzZSxcblx0XHRcdGNvbW1lbnRzICAgICAgICAgICAgICAgIDogJycsXG5cdFx0XHQvLyB2YWx1ZSAgICA6ICdCaWFuY2EnLFxuXHRcdFx0Ym9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MgOiB0aGlzLnByb3BzLmJvb2tlZFByaXZhdGVGaXJzdENsYXNzLFxuXHRcdFx0aXNTaG93U2Vzc2lvbiAgICAgICAgICAgOiBmYWxzZSxcblx0XHRcdHN0aWxsQ2FuQm9vayAgICAgICAgICAgIDogdHJ1ZVxuXHRcdH07XG5cdH1cblxuXHR0b2dnbGVTZXNzaW9uID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0aXNTaG93U2Vzc2lvbiA6IHRydWVcblx0XHR9KTtcblx0fTtcblxuXHQvLyBIYW5kbGUgY2hhbmdlIGZvciBjb21tZW50cyBzZWN0aW9uXG5cdGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbW1lbnRzOiBlLnRhcmdldC52YWx1ZSB9KTtcblx0XHQvLyB0aGlzLnByb3BzLmJvb2tlZEZpcnN0Q2xhc3ModGhpcy5zdGF0ZS5ib29rZWRGaXJzdENsYXNzKVxuXHR9O1xuXG5cdC8vIEhhbmRsZSBzdWJtaXQgZm9yIGNvbW1lbnRzIHNlY3Rpb25cblx0Ly8gaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcblx0Ly8gXHRjb25zb2xlLmxvZygnSW5zaWRlIGNvbW1lbnRzIHNlY3Rpb24nKTtcblx0Ly8gXHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmNvbW1lbnRzKTtcblx0Ly8gXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdC8vIFx0Ly8gYWxlcnQoJ0EgY29tbWVudCB3YXMgc3VibWl0dGVkOiAnICsgdGhpcy5zdGF0ZS5jb21tZW50cyk7XG5cdC8vIH07XG5cblx0Ly8gVG8gaGFuZGxlIGJvb2tpbmcgb2Ygc2Vzc2lvbiBidXR0b25cblx0aGFuZGxlQm9va1Nlc3Npb24gPSAoZSkgPT4ge1xuXHRcdGFsZXJ0KCdCb29rZWQgZmlyc3Qgc2Vzc2lvbicpO1xuXHRcdFJvdXRlci5wdXNoKCcvQm9va1ByaXZhdGVTZXNzaW9uJyk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuYm9va2VkRmlyc3RDbGFzcyk7XG5cdFx0Ly8ge1xuXHRcdC8vIFx0dGhpcy5zdGF0ZS5ib29rZWRQcml2YXRlRmlyc3RDbGFzcztcblx0XHQvLyB9XG5cdFx0Y29uc3QgcmVjb3JkZWRDb21tZW50cyA9IHRoaXMuc3RhdGUuY29tbWVudHM7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dE91dCB0aXRsZT1cIllvdXIgcHJpdmF0ZSBjbGFzc1wiPlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+WW91ciBwcml2YXRlIGNsYXNzPC90aXRsZT5cblx0XHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLXNwYWNlXCI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VIZWFkXCJcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vaTEud3AuY29tL3d3dy55b2dhcGx1cy5zZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy8ybmQtYmF0Y2gtMTkwNTE5LUFjcm8tUGFydG5lci1Zb2dhLVJhdGVkLTM2LTEuanBnP3Jlc2l6ZT0xMDI0JTJDNDI5JnNzbD0xXCJcblx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImp1bWJvMVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIGNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyQ29udGVudFwiPiAqL31cblx0XHRcdFx0XHRcdFx0ey8qIDxoMT5XaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGRvPzwvaDE+ICovfVxuXHRcdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5pc1Nob3dTZXNzaW9uID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxoMz5Cb29rIHlvdXIgc2Vzc2lvbiB3aXRoIG9uZSBvZiBvdXIgbWFzdGVyIHRlYWNoZXJzITwvaDM+XG5cdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0PGgzPldoYXQgd291bGQgeW91IGxpa2UgdG8gZG8/PC9oMz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtc20gZmlyc3Qtcm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0U2hvdyBjb21tZW50cyBieSBpbnN0cnVjdG9yXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20gZmlyc3Qtcm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5pc1Nob3dTZXNzaW9uID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm9va1ByaXZhdGVTZXNzaW9uIGlzU2hvd1Nlc3Npb249e3RoaXMuc3RhdGUuaXNTaG93U2Vzc2lvbn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy50b2dnbGVTZXNzaW9ufSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Qm9vayB5b3VyIHByaXZhdGUgc2Vzc2lvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHR7LyogTElOSyBPTkxZICAqL31cblx0XHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1yb3dcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQm9va1Nlc3Npb259IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdEJvb2sgeW91ciBmaXJzdCBTZXNzaW9uXG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PiAqL31cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlyc3Qtcm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Q29tbWVudHM6PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSB2YWx1ZT17dGhpcy5zdGF0ZS5jb21tZW50c30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+eycgJ31cblx0XHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+ICovfVxuXHRcdFx0XHRcdFx0XHR7Lyoge3JlY29yZGVkQ29tbWVudHN9ICovfVxuXHRcdFx0XHRcdFx0XHR7Lyoge3RoaXMuc3RhdGUuY29tbWVudHN9ICovfVxuXHRcdFx0XHRcdFx0XHR7LyogPGRpdj5TaG93IGNvbW1lbnRzIGJ5IGluc3RydWN0b3I8L2Rpdj4gKi99XG5cdFx0XHRcdFx0XHRcdHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj5cblx0XHRcdFx0XHRcdFx0U2hvdyBjb21tZW50cyBieSBpbnN0cnVjdG9yXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj4gKi99XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvS2lja3N0YXJ0ZXJwYXRobG9naW5cIj5cblx0XHRcdFx0XHRcdFx0PGE+QmFjazwvYT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0LmltYWdlSGVhZCB7XG5cdFx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMzAwcHg7XG5cdFx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRcdFx0XHRvYmplY3QtcG9zaXRpb246IDAgNjAlO1xuXHRcdFx0XHRcdFx0XHQvLyBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmNhcmQtc3BhY2Uge1xuXHRcdFx0XHRcdFx0XHQvLyBtYXJnaW4tdG9wOiA1MHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogNCU7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0Ly8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMTBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmNhcmQge1xuXHRcdFx0XHRcdFx0XHQvLyBtYXJnaW4tdG9wOiAxJTtcblx0XHRcdFx0XHRcdFx0Ly8gbWFyZ2luLWJvdHRvbTogMSU7XG5cdFx0XHRcdFx0XHRcdC8vIG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNDAlO1xuXHRcdFx0XHRcdFx0XHQvLyBkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMSU7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDdweCA3cHggN3B4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRleHRhcmVhIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDMwMHB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDgwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5maXJzdC1yb3cge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMSU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5idG4tcHJpbWFyeSB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxcHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xuXHRcdFx0XHRcdFx0XHRib3JkZXI6IGJsYWNrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lmp1bWJvMSB7XG5cdFx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDIyOCwgMjU1LCAyNTMsIDAuMSksIHJnYmEoMCwgMCwgMCwgMC4xKSk7XG5cdFx0XHRcdFx0XHRcdC8vIFx0dXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5OTcyODYwMzI2My0xMzcyNmFiY2U1ZmQ/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE2NTAmcT04MCcpO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMCUgMzAlO1xuXHRcdFx0XHRcdFx0XHQvKiBvcGFjaXR5OiA4MCU7ICovXG5cdFx0XHRcdFx0XHRcdC8vIG1pbi1oZWlnaHQ6IDMwMHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMTAlO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMTAlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1jb2xvcjogYmxhY2s7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvTGF5b3V0T3V0PlxuXHRcdCk7XG5cdH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/PrivateClass.js */"));
    }
  }]);

  return PrivateClass;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=kickstarterpath.js.1de57d0632fe7d22ca28.hot-update.js.map