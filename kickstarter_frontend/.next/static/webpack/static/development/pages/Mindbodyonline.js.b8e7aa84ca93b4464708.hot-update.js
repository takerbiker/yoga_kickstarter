webpackHotUpdate("static/development/pages/Mindbodyonline.js",{

/***/ "./pages/Mindbodyonline.js":
/*!*********************************!*\
  !*** ./pages/Mindbodyonline.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mindbodyonline; });
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
/* harmony import */ var _base_mindbodyonline_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../base/mindbodyonline.js */ "./base/mindbodyonline.js");






var _jsxFileName = "/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/Mindbodyonline.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






 // import useSWR from 'swr';

var Mindbodyonline =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Mindbodyonline, _Component);

  function Mindbodyonline(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Mindbodyonline);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Mindbodyonline).call(this, props));
    _this.state = {
      schedule: ''
    };
    return _this;
  } // To fetch


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Mindbodyonline, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          schedule = _this$props.schedule,
          statusCode = _this$props.statusCode;

      if (statusCode) {
        return __jsx(_error__WEBPACK_IMPORTED_MODULE_11__["default"], {
          statusCode: statusCode,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        });
      }

      {}
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Class Schedule",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-1036960271",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Class Schedule"), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        className: "jsx-1036960271",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1036960271" + " " + "card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("img", {
        src: "https://scontent.fsin3-1.fna.fbcdn.net/v/t1.0-9/41679727_735312276806906_3214309389242466304_o.jpg?_nc_cat=101&_nc_oc=AQnd91_8ITD43jaU_HMAdEq0DW0ruvnIQ1NsxWtnzcGhq33y8rCT0uKR_zEMDQHinK8&_nc_ht=scontent.fsin3-1.fna&oh=ee2b126cca63973c2256f3a43890c75a&oe=5EB4DA01",
        alt: "",
        className: "jsx-1036960271" + " " + "imageHead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-1036960271" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1036960271" + " " + "textCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-1036960271",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Classes suitable for you!"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/PublicClass",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1036960271",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Back"))), _base_mindbodyonline_js__WEBPACK_IMPORTED_MODULE_13__["default"].map(function (x) {
        return __jsx("li", {
          key: x.classScheduleId,
          className: "jsx-1036960271",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-1036960271" + " " + "container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-1036960271" + " " + "eachListing row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-1036960271" + " " + "col-sm",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, __jsx("h5", {
          className: "jsx-1036960271",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, x.Date, " Sunday"), __jsx("p", {
          className: "jsx-1036960271",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, x.StartDateTime, " - ", x.EndDateTime), __jsx("p", {
          className: "jsx-1036960271",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, x.Location.Name)), __jsx("div", {
          className: "jsx-1036960271" + " " + "col-sm",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, __jsx("h5", {
          className: "jsx-1036960271",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, x.ClassDescription.Name), __jsx("p", {
          className: "jsx-1036960271",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, x.ClassDescription.Description)), __jsx("div", {
          className: "jsx-1036960271" + " " + "col-xs verticalAlign vertical",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, __jsx("a", {
          href: 'https://clients.mindbodyonline.com/LoginLaunch?studioid=590475',
          className: "jsx-1036960271",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, "Book class")))));
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1036960271",
        __self: this
      }, ".imageHead.jsx-1036960271{width:100%;height:300px;object-fit:cover;object-position:0 80%;}.card-space.jsx-1036960271{padding-top:3%;}.container.jsx-1036960271{padding:15px;}.textCenter.jsx-1036960271{text-align:center;margin:10px;}.eachListing.jsx-1036960271{margin-bottom:10px;padding:15px;box-shadow:9px 9px 9px rgb(240,240,240);}li.jsx-1036960271{list-style:none;}.vertical.jsx-1036960271{padding:4% 0;}a.jsx-1036960271{color:dark-blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9NaW5kYm9keW9ubGluZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSE0sQUFJbUIsQUFNSSxBQUlGLEFBSUssQUFNQyxBQVFILEFBUUgsQUFJRyxXQXZDSCxFQVVkLEFBMEJBLEVBOUJBLENBc0JBLEFBWUEsRUF6QmEsQ0FLQyxLQW5CSSxNQWVsQixFQU8yQyxTQXJCcEIsc0JBQ3ZCLFNBcUJBIiwiZmlsZSI6Ii9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9NaW5kYm9keW9ubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9fZXJyb3InO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc1NjaGVkdWxlIGZyb20gJy4uL2Jhc2UvbWluZGJvZHlvbmxpbmUuanMnO1xuLy8gaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5kYm9keW9ubGluZSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzY2hlZHVsZSA6ICcnXG5cdFx0fTtcblx0fVxuXG5cdC8vIFRvIGZldGNoXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jbGFzc2VzJyk7XG5cdFx0Y29uc3Qgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXMgPiAyMDAgPyByZXMuc3RhdHVzIDogZmFsc2U7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cdFx0Y29uc29sZS5sb2coYENsYXNzIHNjaGVkdWxlIGZldGNoLmApO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHNjaGVkdWxlICAgOiBkYXRhLFxuXHRcdFx0c3RhdHVzQ29kZVxuXHRcdH07XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBzY2hlZHVsZSwgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wcztcblxuXHRcdGlmIChzdGF0dXNDb2RlKSB7XG5cdFx0XHRyZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9e3N0YXR1c0NvZGV9IC8+O1xuXHRcdH1cblx0XHR7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQgdGl0bGU9XCJDbGFzcyBTY2hlZHVsZVwiPlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+Q2xhc3MgU2NoZWR1bGU8L3RpdGxlPlxuXHRcdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvSGVhZD5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc3BhY2VcIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZUhlYWRcIlxuXHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9zY29udGVudC5mc2luMy0xLmZuYS5mYmNkbi5uZXQvdi90MS4wLTkvNDE2Nzk3MjdfNzM1MzEyMjc2ODA2OTA2XzMyMTQzMDkzODkyNDI0NjYzMDRfby5qcGc/X25jX2NhdD0xMDEmX25jX29jPUFRbmQ5MV84SVRENDNqYVVfSE1BZEVxMERXMHJ1dm5JUTFOc3hXdG56Y0docTMzeThyQ1QwdUtSX3pFTURRSGluSzgmX25jX2h0PXNjb250ZW50LmZzaW4zLTEuZm5hJm9oPWVlMmIxMjZjY2E2Mzk3M2MyMjU2ZjNhNDM4OTBjNzVhJm9lPTVFQjREQTAxXCJcblx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0ey8qIHtjbGFzc1NjaGVkdWxlWzBdLmNsYXNzU2NoZWR1bGVJZH1cblx0XHRcdFx0XHR7Y2xhc3NTY2hlZHVsZVswXS5Mb2NhdGlvbi5OYW1lfVxuXHRcdFx0XHRcdHtjbGFzc1NjaGVkdWxlWzBdLkNsYXNzRGVzY3JpcHRpb24uTmFtZX0gKi99XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHRDZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PGgzPkNsYXNzZXMgc3VpdGFibGUgZm9yIHlvdSE8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1B1YmxpY0NsYXNzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGE+QmFjazwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7Y2xhc3NTY2hlZHVsZS5tYXAoKHgpID0+IChcblx0XHRcdFx0XHRcdFx0PGxpIGtleT17eC5jbGFzc1NjaGVkdWxlSWR9PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVhY2hMaXN0aW5nIHJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNT57eC5EYXRlfSBTdW5kYXk8L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3guU3RhcnREYXRlVGltZX0gLSB7eC5FbmREYXRlVGltZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e3guTG9jYXRpb24uTmFtZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNT57eC5DbGFzc0Rlc2NyaXB0aW9uLk5hbWV9PC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57eC5DbGFzc0Rlc2NyaXB0aW9uLkRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPHA+QXZhaWxhYmlsaXR5OiB7eC5Jc0F2YWlsYWJsZX08L3A+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wteHMgdmVydGljYWxBbGlnbiB2ZXJ0aWNhbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9eydodHRwczovL2NsaWVudHMubWluZGJvZHlvbmxpbmUuY29tL0xvZ2luTGF1bmNoP3N0dWRpb2lkPTU5MDQ3NSd9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Qm9vayBjbGFzc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdCkpfVxuXG5cdFx0XHRcdFx0XHR7LyogTUJPICAqL31cblx0XHRcdFx0XHRcdHsvKiB7c2NoZWR1bGUuQ2xhc3Nlcy5tYXAoKHgpID0+IChcblx0XHRcdFx0XHRcdDxsaSBrZXk9e3guQ2xhc3NTY2hlZHVsZUlkfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZWFjaExpc3Rpbmcgcm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPlN0YXJ0LWRhdGU6IHt4LlN0YXJ0RGF0ZVRpbWV9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+RW5kIGRhdGU6IHt4LkVuZERhdGVUaW1lfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPlN0dWRpbzoge3guTG9jYXRpb24uTmFtZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2w9c21cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPkNsYXNzIERlc2NyaXB0aW9uOiB7eC5DbGFzc0Rlc2NyaXB0aW9uLkRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPkF2YWlsYWJpbGl0eToge3guSXNBdmFpbGFibGV9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wteHMgdmVydGljYWxBbGlnbiB2ZXJ0aWNhbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXsnaHR0cHM6Ly9jbGllbnRzLm1pbmRib2R5b25saW5lLmNvbS9Mb2dpbkxhdW5jaD9zdHVkaW9pZD01OTA0NzUnfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRCb29rIGNsYXNzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0KSl9ICovfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHQuaW1hZ2VIZWFkIHtcblx0XHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzMDBweDtcblx0XHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0XHRcdG9iamVjdC1wb3NpdGlvbjogMCA4MCU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuY2FyZC1zcGFjZSB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAzJTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC50ZXh0Q2VudGVyIHtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHQvLyBwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuZWFjaExpc3Rpbmcge1xuXHRcdFx0XHRcdFx0XHQvLyBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdFx0XHQvLyB3aWR0aDogMTAwMHB4O1xuXHRcdFx0XHRcdFx0XHQvLyBtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogOXB4IDlweCA5cHggcmdiKDI0MCwgMjQwLCAyNDApO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC52ZXJ0aWNhbEFsaWduIHtcblx0XHRcdFx0XHRcdFx0Ly8gcGFkZGluZzogMiUgMDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnZlcnRpY2FsIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogNCUgMDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBkYXJrLWJsdWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cblxuLy8ge3Bvc2VzLm1hcCgocG9zZSkgPT4gKFxuLy8gXHQ8bGkga2V5PXtwb3NlLmlkfT5cbi8vIFx0XHQ8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwb3NlLmlkfWB9PlxuLy8gXHRcdFx0PGE+e3Bvc2UubmFtZX08L2E+XG4vLyBcdFx0PC9MaW5rPlxuLy8gXHRcdDxwPntwb3NlLmNhdGVnb3J5fTwvcD5cbi8vIFx0PC9saT5cbi8vICkpXG4iXX0= */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/Mindbodyonline.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      var res, statusCode, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()('http://localhost:3000/classes'));

            case 2:
              res = _context.sent;
              statusCode = res.status > 200 ? res.status : false;
              _context.next = 6;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

            case 6:
              data = _context.sent;
              console.log("Class schedule fetch.");
              return _context.abrupt("return", {
                schedule: data,
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

  return Mindbodyonline;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]); // {poses.map((pose) => (
// 	<li key={pose.id}>
// 		<Link href="/p/[id]" as={`/p/${pose.id}`}>
// 			<a>{pose.name}</a>
// 		</Link>
// 		<p>{pose.category}</p>
// 	</li>
// ))




/***/ })

})
//# sourceMappingURL=Mindbodyonline.js.b8e7aa84ca93b4464708.hot-update.js.map