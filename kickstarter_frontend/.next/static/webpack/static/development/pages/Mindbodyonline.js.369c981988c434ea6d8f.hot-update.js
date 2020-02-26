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

      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Class Schedule",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-3763392331",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Class Schedule"), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        className: "jsx-3763392331",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-3763392331" + " " + "card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("img", {
        src: "https://scontent.fsin3-1.fna.fbcdn.net/v/t1.0-9/41679727_735312276806906_3214309389242466304_o.jpg?_nc_cat=101&_nc_oc=AQnd91_8ITD43jaU_HMAdEq0DW0ruvnIQ1NsxWtnzcGhq33y8rCT0uKR_zEMDQHinK8&_nc_ht=scontent.fsin3-1.fna&oh=ee2b126cca63973c2256f3a43890c75a&oe=5EB4DA01",
        alt: "",
        className: "jsx-3763392331" + " " + "imageHead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-3763392331" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3763392331" + " " + "textCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-3763392331",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Classes suitable for you!"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/PublicClass",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3763392331",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Back"))), _base_mindbodyonline_js__WEBPACK_IMPORTED_MODULE_13__["default"].map(function (x) {
        return __jsx("li", {
          key: x.classScheduleId,
          className: "jsx-3763392331",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-3763392331" + " " + "container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-3763392331" + " " + "eachListing row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-3763392331" + " " + "col-sm",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, __jsx("h5", {
          className: "jsx-3763392331",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, x.Date, " Sunday"), __jsx("p", {
          className: "jsx-3763392331",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, x.StartDateTime, " - ", x.EndDateTime), __jsx("p", {
          className: "jsx-3763392331",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, x.Location.Name)), __jsx("div", {
          className: "jsx-3763392331" + " " + "col-sm",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, __jsx("h5", {
          className: "jsx-3763392331",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, x.ClassDescription.Name), __jsx("p", {
          className: "jsx-3763392331",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, x.ClassDescription.Description)), __jsx("div", {
          className: "jsx-3763392331" + " " + "col-xs verticalAlign vertical",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, __jsx("a", {
          href: 'https://clients.mindbodyonline.com/LoginLaunch?studioid=590475',
          className: "jsx-3763392331",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, "Book class")))));
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3763392331",
        __self: this
      }, ".imageHead.jsx-3763392331{width:100%;height:300px;object-fit:cover;object-position:0 80%;}.card-space.jsx-3763392331{padding-top:3%;}.container.jsx-3763392331{padding:15px;}.textCenter.jsx-3763392331{text-align:center;margin:10px;}.eachListing.jsx-3763392331{margin-bottom:10px;padding:15px;box-shadow:9px 9px 9px rgb(240,240,240);}li.jsx-3763392331{list-style:none;}.vertical.jsx-3763392331{padding:4% 0;}a.jsx-3763392331{color:dark-blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9NaW5kYm9keW9ubGluZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSE0sQUFHbUIsQUFNSSxBQUlGLEFBSUssQUFNQyxBQVFILEFBSUgsQUFJRyxXQW5DSCxFQVVkLEFBc0JBLEVBMUJBLENBc0JBLEFBUUEsRUFyQmEsQ0FLQyxLQW5CSSxNQWVsQixFQU8yQyxTQXJCcEIsc0JBQ3ZCLFNBcUJBIiwiZmlsZSI6Ii9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9NaW5kYm9keW9ubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9fZXJyb3InO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc1NjaGVkdWxlIGZyb20gJy4uL2Jhc2UvbWluZGJvZHlvbmxpbmUuanMnO1xuLy8gaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5kYm9keW9ubGluZSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzY2hlZHVsZSA6ICcnXG5cdFx0fTtcblx0fVxuXG5cdC8vIFRvIGZldGNoXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jbGFzc2VzJyk7XG5cdFx0Y29uc3Qgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXMgPiAyMDAgPyByZXMuc3RhdHVzIDogZmFsc2U7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cdFx0Y29uc29sZS5sb2coYENsYXNzIHNjaGVkdWxlIGZldGNoLmApO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHNjaGVkdWxlICAgOiBkYXRhLFxuXHRcdFx0c3RhdHVzQ29kZVxuXHRcdH07XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBzY2hlZHVsZSwgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wcztcblxuXHRcdGlmIChzdGF0dXNDb2RlKSB7XG5cdFx0XHRyZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9e3N0YXR1c0NvZGV9IC8+O1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0IHRpdGxlPVwiQ2xhc3MgU2NoZWR1bGVcIj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPkNsYXNzIFNjaGVkdWxlPC90aXRsZT5cblx0XHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLXNwYWNlXCI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VIZWFkXCJcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vc2NvbnRlbnQuZnNpbjMtMS5mbmEuZmJjZG4ubmV0L3YvdDEuMC05LzQxNjc5NzI3XzczNTMxMjI3NjgwNjkwNl8zMjE0MzA5Mzg5MjQyNDY2MzA0X28uanBnP19uY19jYXQ9MTAxJl9uY19vYz1BUW5kOTFfOElURDQzamFVX0hNQWRFcTBEVzBydXZuSVExTnN4V3RuemNHaHEzM3k4ckNUMHVLUl96RU1EUUhpbks4Jl9uY19odD1zY29udGVudC5mc2luMy0xLmZuYSZvaD1lZTJiMTI2Y2NhNjM5NzNjMjI1NmYzYTQzODkwYzc1YSZvZT01RUI0REEwMVwiXG5cdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdHsvKiB7Y2xhc3NTY2hlZHVsZVswXS5jbGFzc1NjaGVkdWxlSWR9XG5cdFx0XHRcdFx0XHR7Y2xhc3NTY2hlZHVsZVswXS5Mb2NhdGlvbi5OYW1lfVxuXHRcdFx0XHRcdFx0e2NsYXNzU2NoZWR1bGVbMF0uQ2xhc3NEZXNjcmlwdGlvbi5OYW1lfSAqL31cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dENlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8aDM+Q2xhc3NlcyBzdWl0YWJsZSBmb3IgeW91ITwvaDM+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvUHVibGljQ2xhc3NcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YT5CYWNrPC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHtjbGFzc1NjaGVkdWxlLm1hcCgoeCkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8bGkga2V5PXt4LmNsYXNzU2NoZWR1bGVJZH0+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZWFjaExpc3Rpbmcgcm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1Pnt4LkRhdGV9IFN1bmRheTwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7eC5TdGFydERhdGVUaW1lfSAtIHt4LkVuZERhdGVUaW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57eC5Mb2NhdGlvbi5OYW1lfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1Pnt4LkNsYXNzRGVzY3JpcHRpb24uTmFtZX08L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPnt4LkNsYXNzRGVzY3JpcHRpb24uRGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8cD5BdmFpbGFiaWxpdHk6IHt4LklzQXZhaWxhYmxlfTwvcD4gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC14cyB2ZXJ0aWNhbEFsaWduIHZlcnRpY2FsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17J2h0dHBzOi8vY2xpZW50cy5taW5kYm9keW9ubGluZS5jb20vTG9naW5MYXVuY2g/c3R1ZGlvaWQ9NTkwNDc1J30+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRCb29rIGNsYXNzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0KSl9XG5cblx0XHRcdFx0XHRcdHsvKiBNQk8gICovfVxuXHRcdFx0XHRcdFx0ey8qIHtzY2hlZHVsZS5DbGFzc2VzLm1hcCgoeCkgPT4gKFxuXHRcdFx0XHRcdFx0PGxpIGtleT17eC5DbGFzc1NjaGVkdWxlSWR9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlYWNoTGlzdGluZyByb3dcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+U3RhcnQtZGF0ZToge3guU3RhcnREYXRlVGltZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5FbmQgZGF0ZToge3guRW5kRGF0ZVRpbWV9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+U3R1ZGlvOiB7eC5Mb2NhdGlvbi5OYW1lfTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbD1zbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+Q2xhc3MgRGVzY3JpcHRpb246IHt4LkNsYXNzRGVzY3JpcHRpb24uRGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+QXZhaWxhYmlsaXR5OiB7eC5Jc0F2YWlsYWJsZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC14cyB2ZXJ0aWNhbEFsaWduIHZlcnRpY2FsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9eydodHRwczovL2NsaWVudHMubWluZGJvZHlvbmxpbmUuY29tL0xvZ2luTGF1bmNoP3N0dWRpb2lkPTU5MDQ3NSd9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEJvb2sgY2xhc3Ncblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQpKX0gKi99XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdFx0e2Bcblx0XHRcdFx0XHRcdC5pbWFnZUhlYWQge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzMDBweDtcblx0XHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0XHRcdG9iamVjdC1wb3NpdGlvbjogMCA4MCU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuY2FyZC1zcGFjZSB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAzJTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC50ZXh0Q2VudGVyIHtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHQvLyBwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuZWFjaExpc3Rpbmcge1xuXHRcdFx0XHRcdFx0XHQvLyBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdFx0XHQvLyB3aWR0aDogMTAwMHB4O1xuXHRcdFx0XHRcdFx0XHQvLyBtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogOXB4IDlweCA5cHggcmdiKDI0MCwgMjQwLCAyNDApO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC52ZXJ0aWNhbCB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDQlIDA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGEge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogZGFyay1ibHVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG59XG4iXX0= */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/Mindbodyonline.js */"));
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
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=Mindbodyonline.js.369c981988c434ea6d8f.hot-update.js.map