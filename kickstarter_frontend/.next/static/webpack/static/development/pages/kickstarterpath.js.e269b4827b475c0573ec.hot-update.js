webpackHotUpdate("static/development/pages/kickstarterpath.js",{

/***/ "./pages/kickstarterpath.js":
/*!**********************************!*\
  !*** ./pages/kickstarterpath.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Kickstarterpath; });
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
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _PrivateClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrivateClass */ "./pages/PrivateClass.js");
/* harmony import */ var _PublicClass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PublicClass */ "./pages/PublicClass.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/kickstarterpath.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;
// import Header from '../components/Header';

 // import PrivateClass from '../components/PrivateClass';





 // import Axios from 'axios';

var Kickstarterpath =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Kickstarterpath, _Component);

  function Kickstarterpath(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Kickstarterpath);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Kickstarterpath).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toPrivateClass", function () {
      console.log('Button has been clicked');
      console.log("Button's state is", _this.state.bookedPrivateFirstClass);

      _this.setState({
        bookedPrivateFirstClass: true
      });

      next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/PrivateClass'); // <PrivateClass bookedFirstClass={this.bookedFirstClass} />;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toPublicClass", function () {
      console.log('Button has been clicked');
      console.log("Button's to public class state is", _this.state.bookedFirstPublicClass);

      _this.setState({
        bookedFirstPublicClass: true
      });

      next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/PublicClass'); // <PrivateClass bookedFirstClass={this.bookedFirstClass} />;
    });

    _this.state = {
      username: 'customer',
      bookedPrivateFirstClass: false,
      bookedFirstPublicClass: false
    };
    return _this;
  } // componentDidMount() {
  // 	let token = "Bearer" + localStorage.getItem("jwt");
  // 	Axios({method: 'get', url: '/api/poses', headers: { 'Authorization': token }})
  // 		.then(response => {
  // 			this.setState({ poses: response.data})
  // 		}).catch(error => console.log('error', error))
  // }
  // componentDidMount = () => {
  // 	// console.log('Hello', bookedPrivateFirstClass);
  // 	this.setState({
  // 		bookedPrivateFirstClass : true
  // 	});
  // };
  // To redirect to private class


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Kickstarterpath, [{
    key: "render",
    value: function render() {
      var bookedPrivateFirstClass = this.state.bookedPrivateFirstClass;
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Kickstarter Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Your Journey Begins here"), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
        crossorigin: "anonymous",
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-2253748303" + " " + "card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("img", {
        src: "https://images.unsplash.com/photo-1536007164800-b7f11331f35c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        alt: "",
        className: "jsx-2253748303" + " " + "imageHead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Your Kickstarter pathway"), __jsx("h3", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Hi ", this.state.username, ", welcome to your kickstarter pathway profile."), __jsx("div", {
        className: "jsx-2253748303" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2253748303" + " " + "row ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2253748303" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPrivateClass,
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Private Class"), __jsx("p", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Book your initial assessment private class with one of our founders"), __jsx("br", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Insert image?"), bookedPrivateFirstClass ? __jsx("h1", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "BOOKED") : __jsx("h1", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "NOT BOOKED"))), __jsx("div", {
        className: "jsx-2253748303" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Book your public class"), __jsx("p", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Recap and review your lesson"), __jsx("br", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Insert image?"))), __jsx("div", {
        className: "jsx-2253748303" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "PublicClass")), __jsx("div", {
        className: "jsx-2253748303" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "PublicClass")), __jsx("div", {
        className: "jsx-2253748303" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "PublicClass")), __jsx("div", {
        className: "jsx-2253748303" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "PublicClass")), __jsx("div", {
        className: "jsx-2253748303" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-2253748303",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Private Class"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2253748303",
        __self: this
      }, ".imageHead.jsx-2253748303{background-size:contain;width:100%;crop:10%;}.card-space.jsx-2253748303{padding-top:5%;padding-bottom:5%;}.special.jsx-2253748303{border:1px solid blue;padding:10px;}*.jsx-2253748303{text-align:center;}p.jsx-2253748303{font-size:12px;}h3.jsx-2253748303{font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9raWNrc3RhcnRlcnBhdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0tNLEFBR2dDLEFBT1QsQUFLTyxBQUtKLEFBSUgsQUFJQSxlQWpCRyxBQWNuQixBQUlBLEdBUkEsSUFMYyxFQVpGLFNBUVosRUFOVSxBQVdWLFNBVkEiLCJmaWxlIjoiL1VzZXJzL3NoYWhyYW5pcmFoaW1hbi9Qcm9qZWN0cy95b2dhX2tpY2tzdGFydGVyL2tpY2tzdGFydGVyX2Zyb250ZW5kL3BhZ2VzL2tpY2tzdGFydGVycGF0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG4vLyBpbXBvcnQgUHJpdmF0ZUNsYXNzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJpdmF0ZUNsYXNzJztcbmltcG9ydCBQcml2YXRlQ2xhc3MgZnJvbSAnLi9Qcml2YXRlQ2xhc3MnO1xuaW1wb3J0IFB1YmxpY0NsYXNzIGZyb20gJy4vUHVibGljQ2xhc3MnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuLy8gaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2lja3N0YXJ0ZXJwYXRoIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHVzZXJuYW1lICAgICAgICAgICAgICAgIDogJ2N1c3RvbWVyJyxcblx0XHRcdGJvb2tlZFByaXZhdGVGaXJzdENsYXNzIDogZmFsc2UsXG5cdFx0XHRib29rZWRGaXJzdFB1YmxpY0NsYXNzICA6IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHQvLyBcdGxldCB0b2tlbiA9IFwiQmVhcmVyXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFwiKTtcblx0Ly8gXHRBeGlvcyh7bWV0aG9kOiAnZ2V0JywgdXJsOiAnL2FwaS9wb3NlcycsIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiB0b2tlbiB9fSlcblx0Ly8gXHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0Ly8gXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHBvc2VzOiByZXNwb25zZS5kYXRhfSlcblx0Ly8gXHRcdH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSlcblx0Ly8gfVxuXG5cdC8vIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuXHQvLyBcdC8vIGNvbnNvbGUubG9nKCdIZWxsbycsIGJvb2tlZFByaXZhdGVGaXJzdENsYXNzKTtcblx0Ly8gXHR0aGlzLnNldFN0YXRlKHtcblx0Ly8gXHRcdGJvb2tlZFByaXZhdGVGaXJzdENsYXNzIDogdHJ1ZVxuXHQvLyBcdH0pO1xuXHQvLyB9O1xuXG5cdC8vIFRvIHJlZGlyZWN0IHRvIHByaXZhdGUgY2xhc3Ncblx0dG9Qcml2YXRlQ2xhc3MgPSAoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coJ0J1dHRvbiBoYXMgYmVlbiBjbGlja2VkJyk7XG5cdFx0Y29uc29sZS5sb2coXCJCdXR0b24ncyBzdGF0ZSBpc1wiLCB0aGlzLnN0YXRlLmJvb2tlZFByaXZhdGVGaXJzdENsYXNzKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGJvb2tlZFByaXZhdGVGaXJzdENsYXNzIDogdHJ1ZVxuXHRcdH0pO1xuXHRcdFJvdXRlci5wdXNoKCcvUHJpdmF0ZUNsYXNzJyk7XG5cdFx0Ly8gPFByaXZhdGVDbGFzcyBib29rZWRGaXJzdENsYXNzPXt0aGlzLmJvb2tlZEZpcnN0Q2xhc3N9IC8+O1xuXHR9O1xuXG5cdC8vIFRvIHJlZGlyZWN0IHRvIHB1YmxpYyBjbGFzc1xuXHR0b1B1YmxpY0NsYXNzID0gKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCdCdXR0b24gaGFzIGJlZW4gY2xpY2tlZCcpO1xuXHRcdGNvbnNvbGUubG9nKFwiQnV0dG9uJ3MgdG8gcHVibGljIGNsYXNzIHN0YXRlIGlzXCIsIHRoaXMuc3RhdGUuYm9va2VkRmlyc3RQdWJsaWNDbGFzcyk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRib29rZWRGaXJzdFB1YmxpY0NsYXNzIDogdHJ1ZVxuXHRcdH0pO1xuXHRcdFJvdXRlci5wdXNoKCcvUHVibGljQ2xhc3MnKTtcblx0XHQvLyA8UHJpdmF0ZUNsYXNzIGJvb2tlZEZpcnN0Q2xhc3M9e3RoaXMuYm9va2VkRmlyc3RDbGFzc30gLz47XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGJvb2tlZFByaXZhdGVGaXJzdENsYXNzID0gdGhpcy5zdGF0ZS5ib29rZWRQcml2YXRlRmlyc3RDbGFzcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0IHRpdGxlPVwiS2lja3N0YXJ0ZXIgUHJvZmlsZVwiPlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+WW91ciBKb3VybmV5IEJlZ2lucyBoZXJlPC90aXRsZT5cblx0XHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcblx0XHRcdFx0XHRcdGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCJcblx0XHRcdFx0XHRcdGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdFx0ey8qIDxidXR0b24gb25DbGljayA9eygpID0+IHRoaXMuc2V0U3RhdGUoe3Nob3dEZXRhaWxzOiB0cnVlfSl9IGNsYXNzTmFtZT1cImNsYXNzLWJveFwiPlByaXZhdGUgQ2xhc3M8L2J1dHRvbj4gKi99XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1zcGFjZVwiPlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlSGVhZFwiXG5cdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzNjAwNzE2NDgwMC1iN2YxMTMzMWYzNWM/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEzNTAmcT04MFwiXG5cdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGgxPllvdXIgS2lja3N0YXJ0ZXIgcGF0aHdheTwvaDE+XG5cdFx0XHRcdFx0PGgzPkhpIHt0aGlzLnN0YXRlLnVzZXJuYW1lfSwgd2VsY29tZSB0byB5b3VyIGtpY2tzdGFydGVyIHBhdGh3YXkgcHJvZmlsZS48L2gzPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cblx0XHRcdFx0XHRcdFx0ey8qIEZpcnN0IHNlY3Rpb24gICovfVxuXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHNwZWNpYWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9e3RoaXMudG9Qcml2YXRlQ2xhc3N9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzPlByaXZhdGUgQ2xhc3M8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+Qm9vayB5b3VyIGluaXRpYWwgYXNzZXNzbWVudCBwcml2YXRlIGNsYXNzIHdpdGggb25lIG9mIG91ciBmb3VuZGVyczwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+SW5zZXJ0IGltYWdlPzwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdHtib29rZWRQcml2YXRlRmlyc3RDbGFzcyA/IDxoMT5CT09LRUQ8L2gxPiA6IDxoMT5OT1QgQk9PS0VEPC9oMT59XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdHsvKiBGaXJzdCBzZWN0aW9uICAqL31cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20gc3BlY2lhbFwiPlxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8TGluayBocmVmPVwiL1B1YmxpY0NsYXNzXCI+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgb25DbGljaz17dGhpcy50b1B1YmxpY0NsYXNzfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMz5QdWJsaWMgQ2xhc3M8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+Qm9vayB5b3VyIHB1YmxpYyBjbGFzczwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPlJlY2FwIGFuZCByZXZpZXcgeW91ciBsZXNzb248L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPkluc2VydCBpbWFnZT88L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0ey8qIDwvTGluaz4gKi99XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdHsvKiBGaXJzdCBzZWN0aW9uICAqL31cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20gc3BlY2lhbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz5QdWJsaWNDbGFzczwvaDM+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7LyogRmlyc3Qgc2VjdGlvbiAgKi99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHNwZWNpYWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDM+UHVibGljQ2xhc3M8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0ey8qIEZpcnN0IHNlY3Rpb24gICovfVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbSBzcGVjaWFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzPlB1YmxpY0NsYXNzPC9oMz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHsvKiBGaXJzdCBzZWN0aW9uICAqL31cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20gc3BlY2lhbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz5QdWJsaWNDbGFzczwvaDM+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7LyogRmlyc3Qgc2VjdGlvbiAgKi99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHNwZWNpYWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDM+UHJpdmF0ZSBDbGFzczwvaDM+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHR7LyogPHVsIGNsYXNzTmFtZT1cIlwiPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIlwiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1ByaXZhdGVDbGFzc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy50b1ByaXZhdGVDbGFzc30gY2xhc3NOYW1lPVwiY2xhc3MtYm94XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRQcml2YXRlIENsYXNzXG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvbGk+XG5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9Qcml2YXRlQ2xhc3NcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9Qcml2YXRlQ2xhc3N9IGNsYXNzTmFtZT1cImNsYXNzLWJveFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0UHJpdmF0ZSBDbGFzc1xuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvdWw+ICovfVxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHR7LyogPExpbmsgaHJlZj1cIi9Qcml2YXRlQ2xhc3NcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9Qcml2YXRlQ2xhc3N9IGNsYXNzTmFtZT1cImNsYXNzLWJveFwiPlxuXHRcdFx0XHRcdFx0UHJpdmF0ZSBDbGFzc1xuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQ8TGluayBocmVmPVwiL1B1YmxpY0NsYXNzXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvUHVibGljQ2xhc3N9IGNsYXNzTmFtZT1cImNsYXNzLWJveFwiPlxuXHRcdFx0XHRcdFx0UHVibGljIENsYXNzXG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvTGluaz4gKi99XG5cblx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0LmltYWdlSGVhZCB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdC8vIGhlaWdodDogMzUwcHg7XG5cdFx0XHRcdFx0XHRcdGNyb3A6IDEwJTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5jYXJkLXNwYWNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gbWFyZ2luLXRvcDogNTBweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDUlO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNSU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5zcGVjaWFsIHtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgYmx1ZTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0KiB7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/kickstarterpath.js */"));
    }
  }]);

  return Kickstarterpath;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=kickstarterpath.js.e269b4827b475c0573ec.hot-update.js.map