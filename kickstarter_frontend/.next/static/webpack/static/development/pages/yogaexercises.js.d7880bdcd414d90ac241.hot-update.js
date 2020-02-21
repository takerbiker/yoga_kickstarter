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
        className: "jsx-3500940452" + " " + "container",
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
      }, ".card-space.jsx-3500940452{padding-top:3%;}.imageHead.jsx-3500940452{width:100%;height:300px;object-fit:cover;object-position:0 80%;}.container-books.jsx-3500940452{position:absolute;top:150px;left:80px;}.listingCard.jsx-3500940452{text-align:center;}.book-title.jsx-3500940452,.listed-by.jsx-3500940452{color:black;margin:0 auto;width:200px;}.img-thumb.jsx-3500940452{max-width:200px;height:300px;object-fit:cover;margin-top:50px;box-shadow:9px 3px 6px rgb(173,173,173);}li.jsx-3500940452{list-style-type:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy95b2dhZXhlcmNpc2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFZ0IsQUFHc0IsQUFLSixBQU9PLEFBTUEsQUFLTixBQU9JLEFBVUssV0FsQ1IsQ0FtQkMsR0F4QmYsQ0E4QmMsRUFsQkgsQUFNWCxHQXNCQSxHQWxDa0IsRUFtQkwsRUFaRixDQWtCTyxTQWpCbEIsQUFZQSxHQW5CdUIsS0F5Qk4sZ0JBQzBCLENBekIzQyx1Q0E0QkEiLCJmaWxlIjoiL1VzZXJzL3NoYWhyYW5pcmFoaW1hbi9Qcm9qZWN0cy95b2dhX2tpY2tzdGFydGVyL2tpY2tzdGFydGVyX2Zyb250ZW5kL3BhZ2VzL3lvZ2FleGVyY2lzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJzsgLy8gRm9yIGZldGNoIEFQSVxuaW1wb3J0IEVycm9yIGZyb20gJy4vX2Vycm9yJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFlvZ2FleGVyY2lzZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHQvLyBzdGF0ZSA9IHtcblx0Ly8gXHRwb3NlczogbnVsbFxuXHQvLyB9XG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3NlcycpO1xuXHRcdGNvbnN0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzID4gMjAwID8gcmVzLnN0YXR1cyA6IGZhbHNlO1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXHRcdGNvbnNvbGUubG9nKGBZb2dhIGV4ZXJjaXNlcyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdC8vIHBvc2VzIDogZGF0YS5tYXAoKGVudHJ5KSA9PiBlbnRyeS5wb3NlKVxuXHRcdFx0cG9zZXMgICAgICA6IGRhdGEsXG5cdFx0XHRzdGF0dXNDb2RlXG5cdFx0fTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHBvc2VzLCBzdGF0dXNDb2RlIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0aWYgKHN0YXR1c0NvZGUpIHtcblx0XHRcdHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17c3RhdHVzQ29kZX0gLz47XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0IHRpdGxlPVwiWW9nYSBFeGVyY2lzZXNcIj5cblx0XHRcdFx0e2NvbnNvbGUubG9nKHBvc2VzKX1cblx0XHRcdFx0ey8qIHtjb25zb2xlLmxvZyh0eXBlb2YgdGhpcy5wcm9wcyl9ICAqL31cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPllvdXIgWW9nYSBKb3VybmV5PC90aXRsZT5cblx0XHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcblx0XHRcdFx0XHRcdGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCJcblx0XHRcdFx0XHRcdGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLXNwYWNlXCI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VIZWFkXCJcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDc0NTQwNDEyNjY1LTFjZGFlMjEwYWU2Yj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9NjBcIlxuXHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8aDM+WW9nYSBFeGVyY2lzZXM8L2gzPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItYm9va3NcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0XHR7cG9zZXMubWFwKChwb3NlKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtwb3NlLmlkfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wgbGlzdGluZ0NhcmQgY29sLXNtLTNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17cG9zZS5pbWFnZX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy10aHVtYlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImJvb2stdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Bvc2UuaWR9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPntwb3NlLm5hbWV9PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsaXN0ZWQtYnlcIj57cG9zZS5jYXRlZ29yeX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIDwvZGl2PiAqL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmNhcmQtc3BhY2Uge1xuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDMlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5pbWFnZUhlYWQge1xuXHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0XHRvYmplY3QtcG9zaXRpb246IDAgODAlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5jb250YWluZXItYm9va3Mge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0dG9wOiAxNTBweDtcblx0XHRcdFx0XHRcdGxlZnQ6IDgwcHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Lmxpc3RpbmdDYXJkIHtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYm9vay10aXRsZSxcblx0XHRcdFx0XHQubGlzdGVkLWJ5IHtcblx0XHRcdFx0XHRcdGNvbG9yOiBibGFjaztcblx0XHRcdFx0XHRcdC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDIwMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5pbWctdGh1bWIge1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAyMDBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMzAwcHg7XG5cdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDUwcHg7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiA5cHggM3B4IDZweCByZ2IoMTczLCAxNzMsIDE3Myk7XG5cdFx0XHRcdFx0XHQvLyBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblx0XHRcdFx0XHRcdC8qIGJvcmRlci1yYWRpdXM6IDI4cHg7ICovXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXG5cdFx0XHRcdHsvKiA8dWw+XG5cdFx0XHRcdFx0e3Bvc2VzLm1hcCgocG9zZSkgPT4gKFxuXHRcdFx0XHRcdFx0PGxpIGtleT17cG9zZS5pZH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtwb3NlLmltYWdlfSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCIuLi5cIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cG9zZS5pZH1gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT57cG9zZS5uYW1lfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+e3Bvc2UuY2F0ZWdvcnl9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvdWw+ICovfVxuXHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly93d3cueW9nYWpvdXJuYWwuY29tLy5pbWFnZS9hcl8xOjElMkNjX2ZpbGwlMkNjc19zcmdiJTJDZmxfcHJvZ3Jlc3NpdmUlMkNnX2ZhY2VzOmNlbnRlciUyQ3FfYXV0bzpnb29kJTJDd182MjAvTVRRMk1qSTNPRGN5TURFNU9UZ3hPVEl4L2Nvdy1mYWNlLXdpdGgtZWFnbGUtYXJtcy1mb3JoaXBzLmpwZ1wiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxuXHRcdFx0XHRcdFx0YWx0PVwiLi4uXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cblx0XHRcdFx0XHRcdFx0U29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXAgdGhlIGJ1bGsgb2YgdGhlIGNhcmQnc1xuXHRcdFx0XHRcdFx0XHRjb250ZW50LlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj4gKi99XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG59XG4iXX0= */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/yogaexercises.js */"));
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
//# sourceMappingURL=yogaexercises.js.d7880bdcd414d90ac241.hot-update.js.map