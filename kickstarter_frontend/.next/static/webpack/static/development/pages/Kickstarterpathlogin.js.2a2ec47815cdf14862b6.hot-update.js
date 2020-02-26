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
        className: "jsx-1533744524",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Your public class"), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        className: "jsx-1533744524",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1533744524" + " " + "card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("img", {
        src: "https://i1.wp.com/www.yogaplus.sg/wp-content/uploads/2019/07/2nd-batch-190519-Acro-Partner-Yoga-Rated-36-1.jpg?resize=1024%2C429&ssl=1",
        alt: "",
        className: "jsx-1533744524" + " " + "imageHead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-1533744524" + " " + "card container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-1533744524",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "What would you like to do?"), __jsx("div", {
        className: "jsx-1533744524" + " " + "row first-row",
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
        className: "jsx-1533744524",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Class Schedule"))), __jsx("div", {
        className: "jsx-1533744524" + " " + "row first-row",
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
        className: "jsx-1533744524",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-1533744524",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Recap and review! Which exercises do you remember?")))), __jsx("div", {
        className: "jsx-1533744524" + " " + "row first-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("form", {
        onSubmit: this.handleSubmitComments,
        className: "jsx-1533744524",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("label", {
        className: "jsx-1533744524",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-1533744524",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Comments"), __jsx("textarea", {
        value: this.state.comments,
        onChange: this.handleChange,
        className: "jsx-1533744524",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-1533744524",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), this.state.commentShow ? __jsx("div", {
        className: "jsx-1533744524" + " " + "box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-1533744524",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "My reflection: ", this.state.comments)) : ''), __jsx("br", {
        className: "jsx-1533744524",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), __jsx("input", {
        type: "submit",
        value: "Submit",
        className: "jsx-1533744524" + " " + "btn btn-primary",
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
        className: "jsx-1533744524",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Back"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1533744524",
        __self: this
      }, ".imageHead.jsx-1533744524{width:100%;height:300px;object-fit:cover;object-position:0 60%;}.card-space.jsx-1533744524{padding-top:3%;text-align:center;padding-bottom:10px;}.card.jsx-1533744524{margin-top:1%;margin-bottom:1%;width:40%;padding:2%;box-shadow:7px 7px 7px -10px rgba(0,0,0,0.75);}textarea.jsx-1533744524{width:250px;height:80px;}.btn-primary.jsx-1533744524{margin-left:1px;margin:0 auto;background-color:skyblue;border:black;}.first-row.jsx-1533744524{border:grey 1px solid;width:100%;margin:0 auto;margin-bottom:4px;padding:1%;display:block;box-shadow:5px 3px 5px rgb(240,240,240);}a.jsx-1533744524{color:black;}.blue.jsx-1533744524 a.jsx-1533744524{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9QdWJsaWNDbGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnR00sQUFJbUIsQUFRSSxBQU9ELEFBVUYsQUFLSSxBQU9NLEFBVVYsQUFJRCxXQWxERSxBQW1EZCxDQTFCYSxBQXNCYixFQWhDa0IsQ0FQQyxDQXNCSixNQU9ILEVBcENNLEFBeUJsQixNQUswQixDQWRmLEVBUFUsQUE0Qk4sUUFwQ1EsQUFpQlgsTUFvQk8sS0FuQitCLENBVGxELEVBcUJjLFFBNUJkLEVBb0NZLEdBUFosUUFRZSxjQUM0QixRQXJCM0MsZ0NBc0JBIiwiZmlsZSI6Ii9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9QdWJsaWNDbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXRPdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dE91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVibGljQ2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y29tbWVudHMgICAgICAgOiAnJyxcblx0XHRcdGxlc3NvblJldmlld2VkIDogZmFsc2UsXG5cdFx0XHRjbGFzc0Jvb2tlZCAgICA6IGZhbHNlLFxuXHRcdFx0Y29tbWVudFNob3cgICAgOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBjb21tZW50czogZS50YXJnZXQudmFsdWUgfSk7XG5cdH07XG5cblx0Ly8gSGFuZGxlIFN1Ym1pdCBDb21tZW50c1xuXHRoYW5kbGVTdWJtaXRDb21tZW50cyA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY29tbWVudHMpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y29tbWVudFNob3cgOiB0cnVlXG5cdFx0fSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0T3V0IHRpdGxlPVwiWW91ciBwdWJsaWMgY2xhc3NcIj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPllvdXIgcHVibGljIGNsYXNzPC90aXRsZT5cblx0XHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLXNwYWNlXCI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VIZWFkXCJcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vaTEud3AuY29tL3d3dy55b2dhcGx1cy5zZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy8ybmQtYmF0Y2gtMTkwNTE5LUFjcm8tUGFydG5lci1Zb2dhLVJhdGVkLTM2LTEuanBnP3Jlc2l6ZT0xMDI0JTJDNDI5JnNzbD0xXCJcblx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8aDM+V2hhdCB3b3VsZCB5b3UgbGlrZSB0byBkbz88L2gzPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZmlyc3Qtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvTWluZGJvZHlvbmxpbmVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDY+Q2xhc3MgU2NoZWR1bGU8L2g2PlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZmlyc3Qtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvQWZ0ZXJjbGFzc3Jldmlld1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2PlJlY2FwIGFuZCByZXZpZXchIFdoaWNoIGV4ZXJjaXNlcyBkbyB5b3UgcmVtZW1iZXI/PC9oNj5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaXJzdC1yb3dcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzPkNvbW1lbnRzPC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+ICovfVxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBmaXJzdC1yb3dcIj5cblx0XHRcdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0Q29tbWVudHN9PlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdDxoNj5Db21tZW50czwvaDY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgdmFsdWU9e3RoaXMuc3RhdGUuY29tbWVudHN9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUuY29tbWVudFNob3cgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+TXkgcmVmbGVjdGlvbjoge3RoaXMuc3RhdGUuY29tbWVudHN9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCcnXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+eycgJ31cblx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL0tpY2tzdGFydGVycGF0aHB1YmxpY1wiPlxuXHRcdFx0XHRcdFx0PGE+QmFjazwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdFx0e2Bcblx0XHRcdFx0XHRcdC5pbWFnZUhlYWQge1xuXHRcdFx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0XHRcdFx0b2JqZWN0LXBvc2l0aW9uOiAwIDYwJTtcblx0XHRcdFx0XHRcdFx0Ly8gbWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5jYXJkLXNwYWNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gbWFyZ2luLXRvcDogNTBweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDMlO1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5jYXJkIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMSU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDElO1xuXHRcdFx0XHRcdFx0XHQvLyBtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDQwJTtcblx0XHRcdFx0XHRcdFx0Ly8gZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDIlO1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiA3cHggN3B4IDdweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0ZXh0YXJlYSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAyNTBweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA4MHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuYnRuLXByaW1hcnkge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMXB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBibGFjaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmZpcnN0LXJvdyB7XG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogZ3JleSAxcHggc29saWQ7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxJTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDVweCAzcHggNXB4IHJnYigyNDAsIDI0MCwgMjQwKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBibGFjaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmJsdWUgYSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBibHVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L0xheW91dE91dD5cblx0XHQpO1xuXHR9XG59XG4iXX0= */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/PublicClass.js */"));
    }
  }]);

  return PublicClass;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=Kickstarterpathlogin.js.2a2ec47815cdf14862b6.hot-update.js.map