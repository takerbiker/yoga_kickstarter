webpackHotUpdate("static/development/pages/yogaexercises.js",{

/***/ "./pages/yogaexercises.js":
/*!********************************!*\
  !*** ./pages/yogaexercises.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Yogaexercises; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_error */ "./pages/_error.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/yogaexercises.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;
// import Header from '../components/Header';


 // For fetch API





var Yogaexercises =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Yogaexercises, _Component);

  function Yogaexercises() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Yogaexercises);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Yogaexercises).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Yogaexercises, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          poses = _this$props.poses,
          statusCode = _this$props.statusCode;

      if (statusCode) {
        return __jsx(_error__WEBPACK_IMPORTED_MODULE_11__["default"], {
          statusCode: statusCode,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        });
      }

      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Yoga Exercises",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, console.log(poses), __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-3500940452",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Your Yoga Journey"), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
        crossorigin: "anonymous",
        className: "jsx-3500940452",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-3500940452" + " " + "card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("img", {
        src: "https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "",
        className: "jsx-3500940452" + " " + "imageHead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-3500940452" + " " + "container card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-3500940452",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Yoga Exercises"), __jsx("div", {
        className: "jsx-3500940452" + " " + "container-books",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3500940452" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, poses.map(function (pose) {
        return __jsx("li", {
          key: pose.id,
          className: "jsx-3500940452",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-3500940452" + " " + "col listingCard col-sm-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, __jsx("img", {
          src: pose.image,
          className: "jsx-3500940452" + " " + "img-fluid img-thumb",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-3500940452" + " " + "book-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/p/[id]",
          as: "/p/".concat(pose.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, __jsx("a", {
          className: "jsx-3500940452",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, pose.name))), __jsx("p", {
          className: "jsx-3500940452" + " " + "listed-by",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, pose.category)));
      }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3500940452",
        __self: this
      }, ".card-space.jsx-3500940452{padding-top:3%;}.imageHead.jsx-3500940452{width:100%;height:300px;object-fit:cover;object-position:0 80%;}.container-books.jsx-3500940452{position:absolute;top:150px;left:80px;}.listingCard.jsx-3500940452{text-align:center;}.book-title.jsx-3500940452,.listed-by.jsx-3500940452{color:black;margin:0 auto;width:200px;}.img-thumb.jsx-3500940452{max-width:200px;height:300px;object-fit:cover;margin-top:50px;box-shadow:9px 3px 6px rgb(173,173,173);}li.jsx-3500940452{list-style-type:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy95b2dhZXhlcmNpc2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFZ0IsQUFHc0IsQUFLSixBQU9PLEFBTUEsQUFLTixBQU9JLEFBVUssV0FsQ1IsQ0FtQkMsR0F4QmYsQ0E4QmMsRUFsQkgsQUFNWCxHQXNCQSxHQWxDa0IsRUFtQkwsRUFaRixDQWtCTyxTQWpCbEIsQUFZQSxHQW5CdUIsS0F5Qk4sZ0JBQzBCLENBekIzQyx1Q0E0QkEiLCJmaWxlIjoiL1VzZXJzL3NoYWhyYW5pcmFoaW1hbi9Qcm9qZWN0cy95b2dhX2tpY2tzdGFydGVyL2tpY2tzdGFydGVyX2Zyb250ZW5kL3BhZ2VzL3lvZ2FleGVyY2lzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJzsgLy8gRm9yIGZldGNoIEFQSVxuaW1wb3J0IEVycm9yIGZyb20gJy4vX2Vycm9yJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFlvZ2FleGVyY2lzZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHQvLyBzdGF0ZSA9IHtcblx0Ly8gXHRwb3NlczogbnVsbFxuXHQvLyB9XG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3NlcycpO1xuXHRcdGNvbnN0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzID4gMjAwID8gcmVzLnN0YXR1cyA6IGZhbHNlO1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXHRcdGNvbnNvbGUubG9nKGBZb2dhIGV4ZXJjaXNlcyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdC8vIHBvc2VzIDogZGF0YS5tYXAoKGVudHJ5KSA9PiBlbnRyeS5wb3NlKVxuXHRcdFx0cG9zZXMgICAgICA6IGRhdGEsXG5cdFx0XHRzdGF0dXNDb2RlXG5cdFx0fTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHBvc2VzLCBzdGF0dXNDb2RlIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0aWYgKHN0YXR1c0NvZGUpIHtcblx0XHRcdHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17c3RhdHVzQ29kZX0gLz47XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0IHRpdGxlPVwiWW9nYSBFeGVyY2lzZXNcIj5cblx0XHRcdFx0e2NvbnNvbGUubG9nKHBvc2VzKX1cblx0XHRcdFx0ey8qIHtjb25zb2xlLmxvZyh0eXBlb2YgdGhpcy5wcm9wcyl9ICAqL31cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPllvdXIgWW9nYSBKb3VybmV5PC90aXRsZT5cblx0XHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcblx0XHRcdFx0XHRcdGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCJcblx0XHRcdFx0XHRcdGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLXNwYWNlXCI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VIZWFkXCJcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDc0NTQwNDEyNjY1LTFjZGFlMjEwYWU2Yj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9NjBcIlxuXHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNhcmQtc3BhY2VcIj5cblx0XHRcdFx0XHRcdDxoMz5Zb2dhIEV4ZXJjaXNlczwvaDM+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1ib29rc1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdHtwb3Nlcy5tYXAoKHBvc2UpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e3Bvc2UuaWR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbCBsaXN0aW5nQ2FyZCBjb2wtc20tM1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtwb3NlLmltYWdlfSBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nLXRodW1iXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj4gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYm9vay10aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cG9zZS5pZH1gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+e3Bvc2UubmFtZX08L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxpc3RlZC1ieVwiPntwb3NlLmNhdGVnb3J5fTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPC9kaXY+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuY2FyZC1zcGFjZSB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMyU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmltYWdlSGVhZCB7XG5cdFx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMzAwcHg7XG5cdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0XHRcdG9iamVjdC1wb3NpdGlvbjogMCA4MCU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmNvbnRhaW5lci1ib29rcyB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR0b3A6IDE1MHB4O1xuXHRcdFx0XHRcdFx0bGVmdDogODBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQubGlzdGluZ0NhcmQge1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5ib29rLXRpdGxlLFxuXHRcdFx0XHRcdC5saXN0ZWQtYnkge1xuXHRcdFx0XHRcdFx0Y29sb3I6IGJsYWNrO1xuXHRcdFx0XHRcdFx0Ly8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0XHR3aWR0aDogMjAwcHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmltZy10aHVtYiB7XG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDIwMHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAzMDBweDtcblx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNTBweDtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDlweCAzcHggNnB4IHJnYigxNzMsIDE3MywgMTczKTtcblx0XHRcdFx0XHRcdC8vIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuXHRcdFx0XHRcdFx0LyogYm9yZGVyLXJhZGl1czogMjhweDsgKi9cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cblx0XHRcdFx0ey8qIDx1bD5cblx0XHRcdFx0XHR7cG9zZXMubWFwKChwb3NlKSA9PiAoXG5cdFx0XHRcdFx0XHQ8bGkga2V5PXtwb3NlLmlkfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e3Bvc2UuaW1hZ2V9IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIi4uLlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwb3NlLmlkfWB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPntwb3NlLm5hbWV9PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD57cG9zZS5jYXRlZ29yeX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC91bD4gKi99XG5cdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL3d3dy55b2dham91cm5hbC5jb20vLmltYWdlL2FyXzE6MSUyQ2NfZmlsbCUyQ2NzX3NyZ2IlMkNmbF9wcm9ncmVzc2l2ZSUyQ2dfZmFjZXM6Y2VudGVyJTJDcV9hdXRvOmdvb2QlMkN3XzYyMC9NVFEyTWpJM09EY3lNREU1T1RneE9USXgvY293LWZhY2Utd2l0aC1lYWdsZS1hcm1zLWZvcmhpcHMuanBnXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXG5cdFx0XHRcdFx0XHRhbHQ9XCIuLi5cIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRTb21lIHF1aWNrIGV4YW1wbGUgdGV4dCB0byBidWlsZCBvbiB0aGUgY2FyZCB0aXRsZSBhbmQgbWFrZSB1cCB0aGUgYnVsayBvZiB0aGUgY2FyZCdzXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQuXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PiAqL31cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/yogaexercises.js */"));
    }
  }], [{
    key: "getInitialProps",
    // state = {
    // 	poses: null
    // }
    value: function getInitialProps() {
      var res, statusCode, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()('http://localhost:3000/poses'));

            case 2:
              res = _context.sent;
              statusCode = res.status > 200 ? res.status : false;
              _context.next = 6;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

            case 6:
              data = _context.sent;
              console.log("Yoga exercises data fetched. Count: ".concat(data.length));
              return _context.abrupt("return", {
                // poses : data.map((entry) => entry.pose)
                poses: data,
                statusCode: statusCode
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return Yogaexercises;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=yogaexercises.js.ca896b4c7642d8f068e6.hot-update.js.map