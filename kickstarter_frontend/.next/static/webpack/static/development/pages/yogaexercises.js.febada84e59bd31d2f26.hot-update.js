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
          lineNumber: 38
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-1691333319",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Your Yoga Journey"), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
        crossorigin: "anonymous",
        className: "jsx-1691333319",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1691333319" + " " + "container card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("img", {
        src: "https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "",
        className: "jsx-1691333319" + " " + "imageHead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), __jsx("h3", {
        className: "jsx-1691333319",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Yoga Exercises"), __jsx("div", {
        className: "jsx-1691333319" + " " + "container-books",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1691333319" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, poses.map(function (pose) {
        return __jsx("li", {
          key: pose.id,
          className: "jsx-1691333319",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-1691333319" + " " + "col listingCard col-sm-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, __jsx("img", {
          src: pose.image,
          className: "jsx-1691333319" + " " + "img-fluid img-thumb",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-1691333319" + " " + "book-title",
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
          className: "jsx-1691333319",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, pose.name))), __jsx("p", {
          className: "jsx-1691333319" + " " + "listed-by",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, pose.category)));
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1691333319",
        __self: this
      }, ".card-space.jsx-1691333319{padding-top:5%;padding-bottom:5%;text-align:center;font-family:\"Permanent Marker\";}.imageHead.jsx-1691333319{width:100%;height:300px;object-fit:cover;object-position:0 80%;}.container-books.jsx-1691333319{position:absolute;top:150px;left:80px;}.listingCard.jsx-1691333319{text-align:center;}.book-title.jsx-1691333319,.listed-by.jsx-1691333319{color:black;margin:0 auto;width:200px;}.img-thumb.jsx-1691333319{max-width:200px;height:300px;object-fit:cover;margin-top:50px;box-shadow:9px 3px 6px rgb(173,173,173);}li.jsx-1691333319{list-style-type:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy95b2dhZXhlcmNpc2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFZ0IsQUFJc0IsQUFTSixBQU9PLEFBTUEsQUFLTixBQU9JLEFBVUssV0FsQ1IsQ0FtQkMsR0E1QkksQ0FrQ0wsRUFsQkgsQUFNWCxHQXNCQSxHQWxDa0IsRUFtQkwsRUFaRixDQWtCTyxJQWxDQyxLQWlCbkIsQUFZQSxHQW5CdUIsS0F5Qk4sS0FqQ2UsV0FrQ1csQ0F6QjNDLG1CQVJBLG9CQW9DQSIsImZpbGUiOiIvVXNlcnMvc2hhaHJhbmlyYWhpbWFuL1Byb2plY3RzL3lvZ2Ffa2lja3N0YXJ0ZXIva2lja3N0YXJ0ZXJfZnJvbnRlbmQvcGFnZXMveW9nYWV4ZXJjaXNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnOyAvLyBGb3IgZmV0Y2ggQVBJXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9fZXJyb3InO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWW9nYWV4ZXJjaXNlcyBleHRlbmRzIENvbXBvbmVudCB7XG5cdC8vIHN0YXRlID0ge1xuXHQvLyBcdHBvc2VzOiBudWxsXG5cdC8vIH1cblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bvc2VzJyk7XG5cdFx0Y29uc3Qgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXMgPiAyMDAgPyByZXMuc3RhdHVzIDogZmFsc2U7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cdFx0Y29uc29sZS5sb2coYFlvZ2EgZXhlcmNpc2VzIGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Ly8gcG9zZXMgOiBkYXRhLm1hcCgoZW50cnkpID0+IGVudHJ5LnBvc2UpXG5cdFx0XHRwb3NlcyAgICAgIDogZGF0YSxcblx0XHRcdHN0YXR1c0NvZGVcblx0XHR9O1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgcG9zZXMsIHN0YXR1c0NvZGUgfSA9IHRoaXMucHJvcHM7XG5cblx0XHRpZiAoc3RhdHVzQ29kZSkge1xuXHRcdFx0cmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXtzdGF0dXNDb2RlfSAvPjtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQgdGl0bGU9XCJZb2dhIEV4ZXJjaXNlc1wiPlxuXHRcdFx0XHR7Y29uc29sZS5sb2cocG9zZXMpfVxuXHRcdFx0XHR7Lyoge2NvbnNvbGUubG9nKHR5cGVvZiB0aGlzLnByb3BzKX0gICovfVxuXG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5Zb3VyIFlvZ2EgSm91cm5leTwvdGl0bGU+XG5cdFx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG5cdFx0XHRcdFx0XHRpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiXG5cdFx0XHRcdFx0XHRjcm9zc29yaWdpbj1cImFub255bW91c1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9IZWFkPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNhcmQtc3BhY2VcIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZUhlYWRcIlxuXHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NzQ1NDA0MTI2NjUtMWNkYWUyMTBhZTZiP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01MDAmcT02MFwiXG5cdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGgzPllvZ2EgRXhlcmNpc2VzPC9oMz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1ib29rc1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0e3Bvc2VzLm1hcCgocG9zZSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e3Bvc2UuaWR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wgbGlzdGluZ0NhcmQgY29sLXNtLTNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e3Bvc2UuaW1hZ2V9IGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctdGh1bWJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj4gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImJvb2stdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwb3NlLmlkfWB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+e3Bvc2UubmFtZX08L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxpc3RlZC1ieVwiPntwb3NlLmNhdGVnb3J5fTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIDwvZGl2PiAqL31cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuY2FyZC1zcGFjZSB7XG5cdFx0XHRcdFx0XHQvLyBtYXJnaW4tdG9wOiA1MHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDUlO1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDUlO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0Ly8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiUGVybWFuZW50IE1hcmtlclwiO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5pbWFnZUhlYWQge1xuXHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0XHRvYmplY3QtcG9zaXRpb246IDAgODAlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5jb250YWluZXItYm9va3Mge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0dG9wOiAxNTBweDtcblx0XHRcdFx0XHRcdGxlZnQ6IDgwcHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Lmxpc3RpbmdDYXJkIHtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYm9vay10aXRsZSxcblx0XHRcdFx0XHQubGlzdGVkLWJ5IHtcblx0XHRcdFx0XHRcdGNvbG9yOiBibGFjaztcblx0XHRcdFx0XHRcdC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDIwMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5pbWctdGh1bWIge1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAyMDBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMzAwcHg7XG5cdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDUwcHg7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiA5cHggM3B4IDZweCByZ2IoMTczLCAxNzMsIDE3Myk7XG5cdFx0XHRcdFx0XHQvLyBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblx0XHRcdFx0XHRcdC8qIGJvcmRlci1yYWRpdXM6IDI4cHg7ICovXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXG5cdFx0XHRcdHsvKiA8dWw+XG5cdFx0XHRcdFx0e3Bvc2VzLm1hcCgocG9zZSkgPT4gKFxuXHRcdFx0XHRcdFx0PGxpIGtleT17cG9zZS5pZH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtwb3NlLmltYWdlfSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCIuLi5cIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cG9zZS5pZH1gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT57cG9zZS5uYW1lfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+e3Bvc2UuY2F0ZWdvcnl9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvdWw+ICovfVxuXHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly93d3cueW9nYWpvdXJuYWwuY29tLy5pbWFnZS9hcl8xOjElMkNjX2ZpbGwlMkNjc19zcmdiJTJDZmxfcHJvZ3Jlc3NpdmUlMkNnX2ZhY2VzOmNlbnRlciUyQ3FfYXV0bzpnb29kJTJDd182MjAvTVRRMk1qSTNPRGN5TURFNU9UZ3hPVEl4L2Nvdy1mYWNlLXdpdGgtZWFnbGUtYXJtcy1mb3JoaXBzLmpwZ1wiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxuXHRcdFx0XHRcdFx0YWx0PVwiLi4uXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cblx0XHRcdFx0XHRcdFx0U29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXAgdGhlIGJ1bGsgb2YgdGhlIGNhcmQnc1xuXHRcdFx0XHRcdFx0XHRjb250ZW50LlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj4gKi99XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG59XG4iXX0= */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/yogaexercises.js */"));
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
//# sourceMappingURL=yogaexercises.js.febada84e59bd31d2f26.hot-update.js.map