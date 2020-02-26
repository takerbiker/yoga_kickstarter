webpackHotUpdate("static/development/pages/Kickstarterpathlogin.js",{

/***/ "./pages/PublicClass.js":
/*!******************************!*\
  !*** ./pages/PublicClass.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PublicClass; });
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







var _jsxFileName = "/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/PublicClass.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





var PublicClass =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PublicClass, _React$Component);

  function PublicClass(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PublicClass);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PublicClass).call(this, props));

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
      classBooked: false,
      commentShow: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PublicClass, [{
    key: "render",
    value: function render() {
      return __jsx(_components_MyLayoutOut__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Your public class",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-3209025962",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Your public class"), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        className: "jsx-3209025962",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-3209025962" + " " + "card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("img", {
        src: "https://i1.wp.com/www.yogaplus.sg/wp-content/uploads/2019/07/2nd-batch-190519-Acro-Partner-Yoga-Rated-36-1.jpg?resize=1024%2C429&ssl=1",
        alt: "",
        className: "jsx-3209025962" + " " + "imageHead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-3209025962" + " " + "card container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-3209025962",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "What would you like to do?"), __jsx("div", {
        className: "jsx-3209025962" + " " + "row first-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/Mindbodyonline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-3209025962",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Class Schedule"))), __jsx("div", {
        className: "jsx-3209025962" + " " + "row first-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/Afterclassreview",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3209025962",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-3209025962",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Recap and review! Which exercises do you remember?")))), __jsx("div", {
        className: "jsx-3209025962" + " " + "row first-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("form", {
        onSubmit: this.handleSubmitComments,
        className: "jsx-3209025962",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("label", {
        className: "jsx-3209025962",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-3209025962",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Comments"), __jsx("textarea", {
        value: this.state.comments,
        onChange: this.handleChange,
        className: "jsx-3209025962",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-3209025962",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), this.state.commentShow ? __jsx("div", {
        className: "jsx-3209025962" + " " + "box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-3209025962",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "My reflection: ", this.state.comments)) : ''), __jsx("br", {
        className: "jsx-3209025962",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), __jsx("input", {
        type: "submit",
        value: "Submit",
        className: "jsx-3209025962" + " " + "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), ' '))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/Kickstarterpathpublic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3209025962",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Back"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3209025962",
        __self: this
      }, ".imageHead.jsx-3209025962{width:100%;height:300px;object-fit:cover;object-position:0 60%;}.card-space.jsx-3209025962{padding-top:3%;text-align:center;padding-bottom:10px;}.card.jsx-3209025962{margin-top:1%;margin-bottom:1%;width:40%;padding:2%;box-shadow:7px 7px 7px -10px rgba(0,0,0,0.75);}textarea.jsx-3209025962{width:250px;height:80px;}.btn-primary.jsx-3209025962{margin-left:1px;margin:0 auto;background-color:skyblue;border:black;}.first-row.jsx-3209025962{border:grey 1px solid;width:100%;margin:0 auto;margin-bottom:4px;padding:1%;display:block;box-shadow:5px 3px 5px rgb(240,240,240);}a.jsx-3209025962{color:black;}.blue.jsx-3209025962 a.jsx-3209025962{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9QdWJsaWNDbGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnR00sQUFJbUIsQUFPSSxBQU1ELEFBVUYsQUFLSSxBQU9NLEFBVVYsQUFJRCxXQWhERSxBQWlEZCxDQTFCYSxBQXNCYixFQWhDa0IsQ0FOQyxDQXFCSixNQU9ILEVBbENNLEFBdUJsQixNQUswQixDQWRmLEVBUFUsQUE0Qk4sUUFsQ1EsQUFlWCxNQW9CTyxLQW5CK0IsQ0FUbEQsRUFxQmMsUUExQmQsRUFrQ1ksR0FQWixRQVFlLGNBQzRCLFFBckIzQyxnQ0FzQkEiLCJmaWxlIjoiL1VzZXJzL3NoYWhyYW5pcmFoaW1hbi9Qcm9qZWN0cy95b2dhX2tpY2tzdGFydGVyL2tpY2tzdGFydGVyX2Zyb250ZW5kL3BhZ2VzL1B1YmxpY0NsYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dE91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0T3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdWJsaWNDbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjb21tZW50cyAgICAgICA6ICcnLFxuXHRcdFx0bGVzc29uUmV2aWV3ZWQgOiBmYWxzZSxcblx0XHRcdGNsYXNzQm9va2VkICAgIDogZmFsc2UsXG5cdFx0XHRjb21tZW50U2hvdyAgICA6IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbW1lbnRzOiBlLnRhcmdldC52YWx1ZSB9KTtcblx0fTtcblxuXHQvLyBIYW5kbGUgU3VibWl0IENvbW1lbnRzXG5cdGhhbmRsZVN1Ym1pdENvbW1lbnRzID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS5jb21tZW50cyk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjb21tZW50U2hvdyA6IHRydWVcblx0XHR9KTtcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXRPdXQgdGl0bGU9XCJZb3VyIHB1YmxpYyBjbGFzc1wiPlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+WW91ciBwdWJsaWMgY2xhc3M8L3RpdGxlPlxuXHRcdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvSGVhZD5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc3BhY2VcIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZUhlYWRcIlxuXHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9pMS53cC5jb20vd3d3LnlvZ2FwbHVzLnNnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA3LzJuZC1iYXRjaC0xOTA1MTktQWNyby1QYXJ0bmVyLVlvZ2EtUmF0ZWQtMzYtMS5qcGc/cmVzaXplPTEwMjQlMkM0Mjkmc3NsPTFcIlxuXHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxoMz5XaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGRvPzwvaDM+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBmaXJzdC1yb3dcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9NaW5kYm9keW9ubGluZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoNj5DbGFzcyBTY2hlZHVsZTwvaDY+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBmaXJzdC1yb3dcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9BZnRlcmNsYXNzcmV2aWV3XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDY+UmVjYXAgYW5kIHJldmlldyEgV2hpY2ggZXhlcmNpc2VzIGRvIHlvdSByZW1lbWJlcj88L2g2PlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpcnN0LXJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDM+Q29tbWVudHM8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGZpcnN0LXJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXRDb21tZW50c30+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2PkNvbW1lbnRzPC9oNj5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSB2YWx1ZT17dGhpcy5zdGF0ZS5jb21tZW50c30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5jb21tZW50U2hvdyA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5NeSByZWZsZWN0aW9uOiB7dGhpcy5zdGF0ZS5jb21tZW50c308L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0Jydcblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz57JyAnfVxuXHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvS2lja3N0YXJ0ZXJwYXRocHVibGljXCI+XG5cdFx0XHRcdFx0XHQ8YT5CYWNrPC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0LmltYWdlSGVhZCB7XG5cdFx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMzAwcHg7XG5cdFx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRcdFx0XHRvYmplY3QtcG9zaXRpb246IDAgNjAlO1xuXHRcdFx0XHRcdFx0XHQvLyBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmNhcmQtc3BhY2Uge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMyU7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5jYXJkIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMSU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDElO1xuXHRcdFx0XHRcdFx0XHQvLyBtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDQwJTtcblx0XHRcdFx0XHRcdFx0Ly8gZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDIlO1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiA3cHggN3B4IDdweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0ZXh0YXJlYSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAyNTBweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA4MHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuYnRuLXByaW1hcnkge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMXB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBibGFjaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmZpcnN0LXJvdyB7XG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogZ3JleSAxcHggc29saWQ7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxJTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDVweCAzcHggNXB4IHJnYigyNDAsIDI0MCwgMjQwKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBibGFjaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmJsdWUgYSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBibHVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L0xheW91dE91dD5cblx0XHQpO1xuXHR9XG59XG4iXX0= */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/PublicClass.js */"));
    }
  }]);

  return PublicClass;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=Kickstarterpathlogin.js.7b5e36c4d7a7777cfa6d.hot-update.js.map