webpackHotUpdate("static/development/pages/PublicClass2.js",{

/***/ "./pages/PublicClass2.js":
/*!*******************************!*\
  !*** ./pages/PublicClass2.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PublicClass2; });
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/PublicClass2.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





var PublicClass2 =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PublicClass2, _React$Component);

  function PublicClass2(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PublicClass2);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PublicClass2).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (e) {
      _this.setState({
        comments: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmitComments", function (e) {
      e.preventDefault();
      console.log(_this.state.comments);

      _this.setState({
        commentShow: true
      });
    });

    _this.state = {
      comments: '',
      lessonReviewed: false,
      classBooked: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PublicClass2, [{
    key: "render",
    value: function render() {
      return __jsx(_components_MyLayoutOut__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Your public class",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-1609413248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Your public class"), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        className: "jsx-1609413248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1609413248" + " " + "card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("img", {
        src: "https://i1.wp.com/www.yogaplus.sg/wp-content/uploads/2019/07/2nd-batch-190519-Acro-Partner-Yoga-Rated-36-1.jpg?resize=1024%2C429&ssl=1",
        alt: "",
        className: "jsx-1609413248" + " " + "imageHead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-1609413248" + " " + "card container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-1609413248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "What would you like to do?"), __jsx("div", {
        className: "jsx-1609413248" + " " + "row first-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/Mindbodyonline2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1609413248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-1609413248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Class Schedule")))), __jsx("div", {
        className: "jsx-1609413248" + " " + "row first-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/Afterclassreview2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1609413248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-1609413248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Recap and review! Which exercises do you remember?")))), __jsx("div", {
        className: "jsx-1609413248" + " " + "row first-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("form", {
        onSubmit: this.handleSubmitComments,
        className: "jsx-1609413248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("label", {
        className: "jsx-1609413248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-1609413248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Comments"), __jsx("textarea", {
        value: this.state.comments,
        onChange: this.handleChange,
        className: "jsx-1609413248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-1609413248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), this.state.commentShow ? __jsx("div", {
        className: "jsx-1609413248" + " " + "box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-1609413248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "My reflection: ", this.state.comments)) : ''), __jsx("br", {
        className: "jsx-1609413248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), __jsx("input", {
        type: "submit",
        value: "Submit",
        className: "jsx-1609413248" + " " + "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), ' '))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/Kickstarterpathpublic2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1609413248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Back"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1609413248",
        __self: this
      }, ".imageHead.jsx-1609413248{width:100%;height:300px;object-fit:cover;object-position:0 60%;}.card-space.jsx-1609413248{padding-top:3%;text-align:center;padding-bottom:10px;}.card.jsx-1609413248{margin-top:1%;margin-bottom:1%;width:40%;padding:2%;box-shadow:7px 7px 7px -10px rgba(0,0,0,0.75);}textarea.jsx-1609413248{width:250px;height:80px;}.first-row.jsx-1609413248{border:grey 1px solid;width:100%;margin:0 auto;margin-bottom:4px;padding:1%;display:block;box-shadow:5px 3px 5px rgb(240,240,240);}.btn-primary.jsx-1609413248{margin-left:1px;margin:0 auto;background-color:skyblue;border:black;}a.jsx-1609413248{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9QdWJsaWNDbGFzczIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUdNLEFBSW1CLEFBT0ksQUFNRCxBQVVGLEFBS1UsQUFVTixBQU9KLFdBNUNDLENBdUJELEFBc0JiLEVBaENrQixDQU5DLENBK0JKLE1BVkgsRUEzQk0sQUF1QmxCLE1BZTBCLENBeEJmLEVBUFUsQUFxQk4sUUEzQlEsQUFlWCxNQWFPLEtBWitCLENBVGxELEVBK0JjLFFBcENkLEVBMkJZLEdBVVosUUFUZSxjQUM0QixRQWQzQyxnQ0FlQSIsImZpbGUiOiIvVXNlcnMvc2hhaHJhbmlyYWhpbWFuL1Byb2plY3RzL3lvZ2Ffa2lja3N0YXJ0ZXIva2lja3N0YXJ0ZXJfZnJvbnRlbmQvcGFnZXMvUHVibGljQ2xhc3MyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dE91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0T3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdWJsaWNDbGFzczIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y29tbWVudHMgICAgICAgOiAnJyxcblx0XHRcdGxlc3NvblJldmlld2VkIDogZmFsc2UsXG5cdFx0XHRjbGFzc0Jvb2tlZCAgICA6IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbW1lbnRzOiBlLnRhcmdldC52YWx1ZSB9KTtcblx0fTtcblxuXHQvLyBIYW5kbGUgU3VibWl0IENvbW1lbnRzXG5cdGhhbmRsZVN1Ym1pdENvbW1lbnRzID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS5jb21tZW50cyk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjb21tZW50U2hvdyA6IHRydWVcblx0XHR9KTtcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXRPdXQgdGl0bGU9XCJZb3VyIHB1YmxpYyBjbGFzc1wiPlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+WW91ciBwdWJsaWMgY2xhc3M8L3RpdGxlPlxuXHRcdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvSGVhZD5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc3BhY2VcIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZUhlYWRcIlxuXHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9pMS53cC5jb20vd3d3LnlvZ2FwbHVzLnNnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA3LzJuZC1iYXRjaC0xOTA1MTktQWNyby1QYXJ0bmVyLVlvZ2EtUmF0ZWQtMzYtMS5qcGc/cmVzaXplPTEwMjQlMkM0Mjkmc3NsPTFcIlxuXHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxoMz5XaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGRvPzwvaDM+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBmaXJzdC1yb3dcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9NaW5kYm9keW9ubGluZTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoNj5DbGFzcyBTY2hlZHVsZTwvaDY+XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZmlyc3Qtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvQWZ0ZXJjbGFzc3JldmlldzJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoNj5SZWNhcCBhbmQgcmV2aWV3ISBXaGljaCBleGVyY2lzZXMgZG8geW91IHJlbWVtYmVyPzwvaDY+XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlyc3Qtcm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMz5Db21tZW50czwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PiAqL31cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZmlyc3Qtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdENvbW1lbnRzfT5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDY+Q29tbWVudHM8L2g2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIHZhbHVlPXt0aGlzLnN0YXRlLmNvbW1lbnRzfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLmNvbW1lbnRTaG93ID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPk15IHJlZmxlY3Rpb246IHt0aGlzLnN0YXRlLmNvbW1lbnRzfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPnsnICd9XG5cdFx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9LaWNrc3RhcnRlcnBhdGhwdWJsaWMyXCI+XG5cdFx0XHRcdFx0XHQ8YT5CYWNrPC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0LmltYWdlSGVhZCB7XG5cdFx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMzAwcHg7XG5cdFx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRcdFx0XHRvYmplY3QtcG9zaXRpb246IDAgNjAlO1xuXHRcdFx0XHRcdFx0XHQvLyBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmNhcmQtc3BhY2Uge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMyU7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5jYXJkIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMSU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDElO1xuXHRcdFx0XHRcdFx0XHQvLyBtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDQwJTtcblx0XHRcdFx0XHRcdFx0Ly8gZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDIlO1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiA3cHggN3B4IDdweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0ZXh0YXJlYSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAyNTBweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA4MHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuZmlyc3Qtcm93IHtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBncmV5IDFweCBzb2xpZDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA0cHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDElO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogNXB4IDNweCA1cHggcmdiKDI0MCwgMjQwLCAyNDApO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuYnRuLXByaW1hcnkge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMXB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBibGFjaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBibGFjaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PC9MYXlvdXRPdXQ+XG5cdFx0KTtcblx0fVxufVxuIl19 */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/PublicClass2.js */"));
    }
  }]);

  return PublicClass2;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=PublicClass2.js.141459829511dc9a13a7.hot-update.js.map