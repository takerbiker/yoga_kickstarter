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
        className: "jsx-1887723795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Your public class"), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        className: "jsx-1887723795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1887723795" + " " + "card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("img", {
        src: "https://i1.wp.com/www.yogaplus.sg/wp-content/uploads/2019/07/2nd-batch-190519-Acro-Partner-Yoga-Rated-36-1.jpg?resize=1024%2C429&ssl=1",
        alt: "",
        className: "jsx-1887723795" + " " + "imageHead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-1887723795" + " " + "card container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-1887723795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "What would you like to do?"), __jsx("div", {
        className: "jsx-1887723795" + " " + "row first-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/mindbodyonline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1887723795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-1887723795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Class Schedule")))), __jsx("div", {
        className: "jsx-1887723795" + " " + "row first-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/Afterclassreview",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1887723795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-1887723795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Recap and review! Which exercises do you remember?")))), __jsx("div", {
        className: "jsx-1887723795" + " " + "row first-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("form", {
        onSubmit: this.handleSubmitComments,
        className: "jsx-1887723795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("label", {
        className: "jsx-1887723795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-1887723795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Comments"), __jsx("textarea", {
        value: this.state.comments,
        onChange: this.handleChange,
        className: "jsx-1887723795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-1887723795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), this.state.commentShow ? __jsx("div", {
        className: "jsx-1887723795" + " " + "box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-1887723795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "My reflection: ", this.state.comments)) : ''), __jsx("br", {
        className: "jsx-1887723795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), __jsx("input", {
        type: "submit",
        value: "Submit",
        className: "jsx-1887723795" + " " + "btn btn-primary",
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
        className: "jsx-1887723795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Back"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1887723795",
        __self: this
      }, ".imageHead.jsx-1887723795{width:100%;height:300px;object-fit:cover;object-position:0 60%;}.card-space.jsx-1887723795{padding-top:3%;text-align:center;padding-bottom:10px;}.card.jsx-1887723795{margin-top:1%;margin-bottom:1%;width:40%;padding:2%;box-shadow:7px 7px 7px -10px rgba(0,0,0,0.75);}textarea.jsx-1887723795{width:250px;height:80px;}.first-row.jsx-1887723795{border:grey 1px solid;width:100%;margin:0 auto;margin-bottom:4px;padding:1%;display:block;box-shadow:5px 3px 5px rgb(240,240,240);}.btn-primary.jsx-1887723795{margin-left:1px;margin:0 auto;background-color:skyblue;border:black;}a.jsx-1887723795{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9QdWJsaWNDbGFzczIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUdNLEFBSW1CLEFBUUksQUFPRCxBQVVGLEFBS1UsQUFVTixBQU9KLFdBOUNDLENBeUJELEFBc0JiLEVBaENrQixDQVBDLENBZ0NKLE1BVkgsRUE3Qk0sQUF5QmxCLE1BZTBCLENBeEJmLEVBUFUsQUFxQk4sUUE3QlEsQUFpQlgsTUFhTyxLQVorQixDQVRsRCxFQStCYyxRQXRDZCxFQTZCWSxHQVVaLFFBVGUsY0FDNEIsUUFkM0MsZ0NBZUEiLCJmaWxlIjoiL1VzZXJzL3NoYWhyYW5pcmFoaW1hbi9Qcm9qZWN0cy95b2dhX2tpY2tzdGFydGVyL2tpY2tzdGFydGVyX2Zyb250ZW5kL3BhZ2VzL1B1YmxpY0NsYXNzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXRPdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dE91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVibGljQ2xhc3MyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGNvbW1lbnRzICAgICAgIDogJycsXG5cdFx0XHRsZXNzb25SZXZpZXdlZCA6IGZhbHNlLFxuXHRcdFx0Y2xhc3NCb29rZWQgICAgOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBjb21tZW50czogZS50YXJnZXQudmFsdWUgfSk7XG5cdH07XG5cblx0Ly8gSGFuZGxlIFN1Ym1pdCBDb21tZW50c1xuXHRoYW5kbGVTdWJtaXRDb21tZW50cyA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY29tbWVudHMpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y29tbWVudFNob3cgOiB0cnVlXG5cdFx0fSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0T3V0IHRpdGxlPVwiWW91ciBwdWJsaWMgY2xhc3NcIj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPllvdXIgcHVibGljIGNsYXNzPC90aXRsZT5cblx0XHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLXNwYWNlXCI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VIZWFkXCJcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vaTEud3AuY29tL3d3dy55b2dhcGx1cy5zZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy8ybmQtYmF0Y2gtMTkwNTE5LUFjcm8tUGFydG5lci1Zb2dhLVJhdGVkLTM2LTEuanBnP3Jlc2l6ZT0xMDI0JTJDNDI5JnNzbD0xXCJcblx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8aDM+V2hhdCB3b3VsZCB5b3UgbGlrZSB0byBkbz88L2gzPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZmlyc3Qtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvbWluZGJvZHlvbmxpbmVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoNj5DbGFzcyBTY2hlZHVsZTwvaDY+XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZmlyc3Qtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvQWZ0ZXJjbGFzc3Jldmlld1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2PlJlY2FwIGFuZCByZXZpZXchIFdoaWNoIGV4ZXJjaXNlcyBkbyB5b3UgcmVtZW1iZXI/PC9oNj5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaXJzdC1yb3dcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzPkNvbW1lbnRzPC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+ICovfVxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBmaXJzdC1yb3dcIj5cblx0XHRcdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0Q29tbWVudHN9PlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdDxoNj5Db21tZW50czwvaDY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgdmFsdWU9e3RoaXMuc3RhdGUuY29tbWVudHN9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUuY29tbWVudFNob3cgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+TXkgcmVmbGVjdGlvbjoge3RoaXMuc3RhdGUuY29tbWVudHN9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCcnXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+eycgJ31cblx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL0tpY2tzdGFydGVycGF0aHB1YmxpYzJcIj5cblx0XHRcdFx0XHRcdDxhPkJhY2s8L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHQuaW1hZ2VIZWFkIHtcblx0XHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzMDBweDtcblx0XHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0XHRcdG9iamVjdC1wb3NpdGlvbjogMCA2MCU7XG5cdFx0XHRcdFx0XHRcdC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuY2FyZC1zcGFjZSB7XG5cdFx0XHRcdFx0XHRcdC8vIG1hcmdpbi10b3A6IDUwcHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAzJTtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHQvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuY2FyZCB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDElO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxJTtcblx0XHRcdFx0XHRcdFx0Ly8gbWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA0MCU7XG5cdFx0XHRcdFx0XHRcdC8vIGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAyJTtcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogN3B4IDdweCA3cHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGV4dGFyZWEge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMjUwcHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogODBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmZpcnN0LXJvdyB7XG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogZ3JleSAxcHggc29saWQ7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxJTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDVweCAzcHggNXB4IHJnYigyNDAsIDI0MCwgMjQwKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmJ0bi1wcmltYXJ5IHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDFweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogYmxhY2s7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGEge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogYmxhY2s7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvTGF5b3V0T3V0PlxuXHRcdCk7XG5cdH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/PublicClass2.js */"));
    }
  }]);

  return PublicClass2;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=PublicClass2.js.869106377d732e627d8a.hot-update.js.map