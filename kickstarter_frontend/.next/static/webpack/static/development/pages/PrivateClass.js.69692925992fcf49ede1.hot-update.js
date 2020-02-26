webpackHotUpdate("static/development/pages/PrivateClass.js",{

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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmit", function (e) {
      console.log('Inside comments section');
      console.log(_this.state.comments);
      e.preventDefault(); // alert('A comment was submitted: ' + this.state.comments);
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
          lineNumber: 74
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-2813407235",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Your private class"), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        className: "jsx-2813407235",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-2813407235" + " " + "card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("img", {
        src: "https://i1.wp.com/www.yogaplus.sg/wp-content/uploads/2019/07/2nd-batch-190519-Acro-Partner-Yoga-Rated-36-1.jpg?resize=1024%2C429&ssl=1",
        alt: "",
        className: "jsx-2813407235" + " " + "imageHead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-2813407235" + " " + "jumbo1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2813407235" + " " + "card container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, this.state.isShowSession ? __jsx("h3", {
        className: "jsx-2813407235",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Book your session with one of our master teachers!") : __jsx("h3", {
        className: "jsx-2813407235",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "What would you like to do?"), __jsx("div", {
        className: "jsx-2813407235" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2813407235" + " " + "col-sm first-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, this.state.isShowSession ? __jsx(_bookprivatesession__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isShowSession: this.state.isShowSession,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }) : __jsx("button", {
        onClick: this.toggleSession,
        type: "button",
        className: "jsx-2813407235" + " " + "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Book your private session")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/Kickstarterpathlogin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-2813407235",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Back")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2813407235",
        __self: this
      }, ".imageHead.jsx-2813407235{width:100%;height:300px;object-fit:cover;object-position:0 60%;}.card-space.jsx-2813407235{padding-top:4%;text-align:center;padding-bottom:10px;}.card.jsx-2813407235{width:40%;padding:1%;box-shadow:7px 7px 7px -10px rgba(0,0,0,0.75);}textarea.jsx-2813407235{width:300px;height:80px;}.first-row.jsx-2813407235{display:inline;margin:1%;}.btn-primary.jsx-2813407235{margin-left:1px;margin:0 auto;background-color:skyblue;border:black;}.jumbo1.jsx-2813407235{background-size:cover;background-position:10% 30%;padding-top:10%;padding-bottom:10%;}a.jsx-2813407235{font-color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9Qcml2YXRlQ2xhc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0pNLEFBSW1CLEFBUUksQUFVTCxBQU9FLEFBS0csQUFLQyxBQVFNLEFBU0wsVUFoQ04sQ0FuQkUsQ0F5QkQsR0FqQk0sQUFzQlIsQ0FLSSxDQWlCZixJQWhDa0QsQ0F1QnJCLEVBMUNYLEFBeUJsQixDQUtBLEtBSzBCLEdBMUJMLFFBUkUsU0E0Q04sR0FuQ2pCLEVBMEJjLFFBakNkLEdBMkNvQixDQTFCcEIsQ0FpQkEsaUJBVUEiLCJmaWxlIjoiL1VzZXJzL3NoYWhyYW5pcmFoaW1hbi9Qcm9qZWN0cy95b2dhX2tpY2tzdGFydGVyL2tpY2tzdGFydGVyX2Zyb250ZW5kL3BhZ2VzL1ByaXZhdGVDbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXRPdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dE91dCc7XG5pbXBvcnQgQm9va1ByaXZhdGVTZXNzaW9uIGZyb20gJy4vYm9va3ByaXZhdGVzZXNzaW9uJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaXZhdGVDbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR1c2VybmFtZSAgICAgICAgICAgICAgICA6ICcnLFxuXHRcdFx0Ly8gYm9va2VkICAgOiBmYWxzZSxcblx0XHRcdGNvbW1lbnRzICAgICAgICAgICAgICAgIDogJycsXG5cdFx0XHQvLyB2YWx1ZSAgICA6ICdCaWFuY2EnLFxuXHRcdFx0Ym9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MgOiB0aGlzLnByb3BzLmJvb2tlZFByaXZhdGVGaXJzdENsYXNzLFxuXHRcdFx0aXNTaG93U2Vzc2lvbiAgICAgICAgICAgOiBmYWxzZSxcblx0XHRcdHN0aWxsQ2FuQm9vayAgICAgICAgICAgIDogdHJ1ZVxuXHRcdH07XG5cdH1cblxuXHR0b2dnbGVTZXNzaW9uID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0aXNTaG93U2Vzc2lvbiA6IHRydWVcblx0XHR9KTtcblx0fTtcblxuXHQvLyBoYW5kbGVDb21tZW50cyA9IChlKSA9PiB7XG5cdC8vIFx0Y29uc29sZS5sb2coJ0luc2lkZSBjb21tZW50cyBzZWN0aW9ucycpO1xuXHQvLyBcdGUucHJldmVudERlZmF1bHQoKTtcblx0Ly8gXHQvLyBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcblx0Ly8gXHR0aGlzLnNldFN0YXRlKHsgY29tbWVudHM6IGUudGFyZ2V0LnZhbHVlIH0pO1xuXHQvLyB9O1xuXG5cdC8vIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG5cdC8vIFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHQvLyBcdGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXHQvLyBcdHRoaXMuc2V0U3RhdGUoeyBjb21tZW50czogdmFsdWUgfSk7XG5cblx0Ly8gXHRmZXRjaCgnLi4uLicsIHtcblx0Ly8gXHRcdG1ldGhvZCA6ICdQT1NUJyxcblx0Ly8gXHRcdGJvZHkgICA6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnRzKVxuXHQvLyBcdH0pO1xuXHQvLyB9O1xuXG5cdC8vIEhhbmRsZSBjaGFuZ2UgZm9yIGNvbW1lbnRzIHNlY3Rpb25cblx0aGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgY29tbWVudHM6IGUudGFyZ2V0LnZhbHVlIH0pO1xuXHRcdC8vIHRoaXMucHJvcHMuYm9va2VkRmlyc3RDbGFzcyh0aGlzLnN0YXRlLmJvb2tlZEZpcnN0Q2xhc3MpXG5cdH07XG5cblx0Ly8gSGFuZGxlIHN1Ym1pdCBmb3IgY29tbWVudHMgc2VjdGlvblxuXHRoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCdJbnNpZGUgY29tbWVudHMgc2VjdGlvbicpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY29tbWVudHMpO1xuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vIGFsZXJ0KCdBIGNvbW1lbnQgd2FzIHN1Ym1pdHRlZDogJyArIHRoaXMuc3RhdGUuY29tbWVudHMpO1xuXHR9O1xuXG5cdC8vIFRvIGhhbmRsZSBib29raW5nIG9mIHNlc3Npb24gYnV0dG9uXG5cdGhhbmRsZUJvb2tTZXNzaW9uID0gKGUpID0+IHtcblx0XHRhbGVydCgnQm9va2VkIGZpcnN0IHNlc3Npb24nKTtcblx0XHRSb3V0ZXIucHVzaCgnL0Jvb2tQcml2YXRlU2Vzc2lvbicpO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmJvb2tlZEZpcnN0Q2xhc3MpO1xuXHRcdC8vIHtcblx0XHQvLyBcdHRoaXMuc3RhdGUuYm9va2VkUHJpdmF0ZUZpcnN0Q2xhc3M7XG5cdFx0Ly8gfVxuXHRcdGNvbnN0IHJlY29yZGVkQ29tbWVudHMgPSB0aGlzLnN0YXRlLmNvbW1lbnRzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXRPdXQgdGl0bGU9XCJZb3VyIHByaXZhdGUgY2xhc3NcIj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPllvdXIgcHJpdmF0ZSBjbGFzczwvdGl0bGU+XG5cdFx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9IZWFkPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1zcGFjZVwiPlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlSGVhZFwiXG5cdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2kxLndwLmNvbS93d3cueW9nYXBsdXMuc2cvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDcvMm5kLWJhdGNoLTE5MDUxOS1BY3JvLVBhcnRuZXItWW9nYS1SYXRlZC0zNi0xLmpwZz9yZXNpemU9MTAyNCUyQzQyOSZzc2w9MVwiXG5cdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqdW1ibzFcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lckNvbnRlbnRcIj4gKi99XG5cdFx0XHRcdFx0XHRcdHsvKiA8aDE+V2hhdCB3b3VsZCB5b3UgbGlrZSB0byBkbz88L2gxPiAqL31cblx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUuaXNTaG93U2Vzc2lvbiA/IChcblx0XHRcdFx0XHRcdFx0XHQ8aDM+Qm9vayB5b3VyIHNlc3Npb24gd2l0aCBvbmUgb2Ygb3VyIG1hc3RlciB0ZWFjaGVycyE8L2gzPlxuXHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdDxoMz5XaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGRvPzwvaDM+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIGZpcnN0LXJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFNob3cgY29tbWVudHMgYnkgaW5zdHJ1Y3RvclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIGZpcnN0LXJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUuaXNTaG93U2Vzc2lvbiA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJvb2tQcml2YXRlU2Vzc2lvbiBpc1Nob3dTZXNzaW9uPXt0aGlzLnN0YXRlLmlzU2hvd1Nlc3Npb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlU2Vzc2lvbn0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEJvb2sgeW91ciBwcml2YXRlIHNlc3Npb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0ey8qIExJTksgT05MWSAgKi99XG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3Qtcm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUJvb2tTZXNzaW9ufSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRCb29rIHlvdXIgZmlyc3QgU2Vzc2lvblxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpcnN0LXJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdENvbW1lbnRzOjxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgdmFsdWU9e3RoaXMuc3RhdGUuY29tbWVudHN9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPnsnICd9XG5cdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PiAqL31cblx0XHRcdFx0XHRcdFx0ey8qIHtyZWNvcmRlZENvbW1lbnRzfSAqL31cblx0XHRcdFx0XHRcdFx0ey8qIHt0aGlzLnN0YXRlLmNvbW1lbnRzfSAqL31cblx0XHRcdFx0XHRcdFx0ey8qIDxkaXY+U2hvdyBjb21tZW50cyBieSBpbnN0cnVjdG9yPC9kaXY+ICovfVxuXHRcdFx0XHRcdFx0XHR7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHRcdFNob3cgY29tbWVudHMgYnkgaW5zdHJ1Y3RvclxuXHRcdFx0XHRcdFx0PC9idXR0b24+ICovfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL0tpY2tzdGFydGVycGF0aGxvZ2luXCI+XG5cdFx0XHRcdFx0XHRcdDxhPkJhY2s8L2E+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdFx0e2Bcblx0XHRcdFx0XHRcdC5pbWFnZUhlYWQge1xuXHRcdFx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0XHRcdFx0b2JqZWN0LXBvc2l0aW9uOiAwIDYwJTtcblx0XHRcdFx0XHRcdFx0Ly8gbWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5jYXJkLXNwYWNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gbWFyZ2luLXRvcDogNTBweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDQlO1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5jYXJkIHtcblx0XHRcdFx0XHRcdFx0Ly8gbWFyZ2luLXRvcDogMSU7XG5cdFx0XHRcdFx0XHRcdC8vIG1hcmdpbi1ib3R0b206IDElO1xuXHRcdFx0XHRcdFx0XHQvLyBtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDQwJTtcblx0XHRcdFx0XHRcdFx0Ly8gZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDElO1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiA3cHggN3B4IDdweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0ZXh0YXJlYSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAzMDBweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA4MHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuZmlyc3Qtcm93IHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDElO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuYnRuLXByaW1hcnkge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMXB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBibGFjaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5qdW1ibzEge1xuXHRcdFx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyMjgsIDI1NSwgMjUzLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xuXHRcdFx0XHRcdFx0XHQvLyBcdHVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTk3Mjg2MDMyNjMtMTM3MjZhYmNlNWZkP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjUwJnE9ODAnKTtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMTAlIDMwJTtcblx0XHRcdFx0XHRcdFx0Lyogb3BhY2l0eTogODAlOyAqL1xuXHRcdFx0XHRcdFx0XHQvLyBtaW4taGVpZ2h0OiAzMDBweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDEwJTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDEwJTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtY29sb3I6IGJsYWNrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L0xheW91dE91dD5cblx0XHQpO1xuXHR9XG59XG4iXX0= */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/PrivateClass.js */"));
    }
  }]);

  return PrivateClass;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=PrivateClass.js.69692925992fcf49ede1.hot-update.js.map