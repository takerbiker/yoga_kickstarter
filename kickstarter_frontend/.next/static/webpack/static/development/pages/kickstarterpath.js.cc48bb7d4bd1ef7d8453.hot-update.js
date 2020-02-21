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
        className: "jsx-1864104252",
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
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1864104252" + " " + "card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("img", {
        src: "https://images.unsplash.com/photo-1536007164800-b7f11331f35c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        alt: "",
        className: "jsx-1864104252" + " " + "imageHead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Your Kickstarter pathway"), __jsx("h3", {
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Hi ", this.state.username, ", welcome to your kickstarter pathway profile."), __jsx("div", {
        className: "jsx-1864104252" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1864104252" + " " + "row ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1864104252" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPrivateClass,
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Private Class"), __jsx("p", {
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Book your initial assessment private class with one of our founders"), __jsx("br", {
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Insert image?"), bookedPrivateFirstClass ? __jsx("h1", {
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "BOOKED") : __jsx("h1", {
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "NOT BOOKED"))), __jsx("div", {
        className: "jsx-1864104252" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Book your public class"), __jsx("p", {
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Recap and review your lesson"), __jsx("br", {
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Insert image?"))), __jsx("div", {
        className: "jsx-1864104252" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "PublicClass")), __jsx("div", {
        className: "jsx-1864104252" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "PublicClass")), __jsx("div", {
        className: "jsx-1864104252" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "PublicClass")), __jsx("div", {
        className: "jsx-1864104252" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "PublicClass")), __jsx("div", {
        className: "jsx-1864104252" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-1864104252",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Private Class"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1864104252",
        __self: this
      }, ".imageHead.jsx-1864104252{background-size:contain;width:100%;height:300px;object-fit:cover;object-position:100% 130%;}.card-space.jsx-1864104252{padding-top:5%;padding-bottom:5%;}.special.jsx-1864104252{border:1px solid blue;padding:10px;}*.jsx-1864104252{text-align:center;}p.jsx-1864104252{font-size:12px;}h3.jsx-1864104252{font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9raWNrc3RhcnRlcnBhdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0tNLEFBR2dDLEFBUVQsQUFLTyxBQUtKLEFBSUgsQUFJQSxlQWpCRyxBQWNuQixBQUlBLEdBUkEsSUFMYyxFQWJGLFNBU1osRUFSYyxBQWFkLGFBWmtCLGlCQUNTLDBCQUMzQiIsImZpbGUiOiIvVXNlcnMvc2hhaHJhbmlyYWhpbWFuL1Byb2plY3RzL3lvZ2Ffa2lja3N0YXJ0ZXIva2lja3N0YXJ0ZXJfZnJvbnRlbmQvcGFnZXMva2lja3N0YXJ0ZXJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbi8vIGltcG9ydCBQcml2YXRlQ2xhc3MgZnJvbSAnLi4vY29tcG9uZW50cy9Qcml2YXRlQ2xhc3MnO1xuaW1wb3J0IFByaXZhdGVDbGFzcyBmcm9tICcuL1ByaXZhdGVDbGFzcyc7XG5pbXBvcnQgUHVibGljQ2xhc3MgZnJvbSAnLi9QdWJsaWNDbGFzcyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG4vLyBpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaWNrc3RhcnRlcnBhdGggZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dXNlcm5hbWUgICAgICAgICAgICAgICAgOiAnY3VzdG9tZXInLFxuXHRcdFx0Ym9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MgOiBmYWxzZSxcblx0XHRcdGJvb2tlZEZpcnN0UHVibGljQ2xhc3MgIDogZmFsc2Vcblx0XHR9O1xuXHR9XG5cblx0Ly8gY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdC8vIFx0bGV0IHRva2VuID0gXCJCZWFyZXJcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0XCIpO1xuXHQvLyBcdEF4aW9zKHttZXRob2Q6ICdnZXQnLCB1cmw6ICcvYXBpL3Bvc2VzJywgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IHRva2VuIH19KVxuXHQvLyBcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHQvLyBcdFx0XHR0aGlzLnNldFN0YXRlKHsgcG9zZXM6IHJlc3BvbnNlLmRhdGF9KVxuXHQvLyBcdFx0fSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpKVxuXHQvLyB9XG5cblx0Ly8gY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG5cdC8vIFx0Ly8gY29uc29sZS5sb2coJ0hlbGxvJywgYm9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MpO1xuXHQvLyBcdHRoaXMuc2V0U3RhdGUoe1xuXHQvLyBcdFx0Ym9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MgOiB0cnVlXG5cdC8vIFx0fSk7XG5cdC8vIH07XG5cblx0Ly8gVG8gcmVkaXJlY3QgdG8gcHJpdmF0ZSBjbGFzc1xuXHR0b1ByaXZhdGVDbGFzcyA9ICgpID0+IHtcblx0XHRjb25zb2xlLmxvZygnQnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQnKTtcblx0XHRjb25zb2xlLmxvZyhcIkJ1dHRvbidzIHN0YXRlIGlzXCIsIHRoaXMuc3RhdGUuYm9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Ym9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MgOiB0cnVlXG5cdFx0fSk7XG5cdFx0Um91dGVyLnB1c2goJy9Qcml2YXRlQ2xhc3MnKTtcblx0XHQvLyA8UHJpdmF0ZUNsYXNzIGJvb2tlZEZpcnN0Q2xhc3M9e3RoaXMuYm9va2VkRmlyc3RDbGFzc30gLz47XG5cdH07XG5cblx0Ly8gVG8gcmVkaXJlY3QgdG8gcHVibGljIGNsYXNzXG5cdHRvUHVibGljQ2xhc3MgPSAoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coJ0J1dHRvbiBoYXMgYmVlbiBjbGlja2VkJyk7XG5cdFx0Y29uc29sZS5sb2coXCJCdXR0b24ncyB0byBwdWJsaWMgY2xhc3Mgc3RhdGUgaXNcIiwgdGhpcy5zdGF0ZS5ib29rZWRGaXJzdFB1YmxpY0NsYXNzKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGJvb2tlZEZpcnN0UHVibGljQ2xhc3MgOiB0cnVlXG5cdFx0fSk7XG5cdFx0Um91dGVyLnB1c2goJy9QdWJsaWNDbGFzcycpO1xuXHRcdC8vIDxQcml2YXRlQ2xhc3MgYm9va2VkRmlyc3RDbGFzcz17dGhpcy5ib29rZWRGaXJzdENsYXNzfSAvPjtcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgYm9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MgPSB0aGlzLnN0YXRlLmJvb2tlZFByaXZhdGVGaXJzdENsYXNzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQgdGl0bGU9XCJLaWNrc3RhcnRlciBQcm9maWxlXCI+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5Zb3VyIEpvdXJuZXkgQmVnaW5zIGhlcmU8L3RpdGxlPlxuXHRcdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuXHRcdFx0XHRcdFx0aW50ZWdyaXR5PVwic2hhMzg0LWdnT3lSMGlYQ2JNUXYzWGlwbWEzNE1EK2RILzFmUTc4NC9qNmNZL2lKVFFVT2hjV3I3eDlKdm9SeFQyTVp3MVRcIlxuXHRcdFx0XHRcdFx0Y3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvSGVhZD5cblxuXHRcdFx0XHR7LyogPGJ1dHRvbiBvbkNsaWNrID17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2hvd0RldGFpbHM6IHRydWV9KX0gY2xhc3NOYW1lPVwiY2xhc3MtYm94XCI+UHJpdmF0ZSBDbGFzczwvYnV0dG9uPiAqL31cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLXNwYWNlXCI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VIZWFkXCJcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTM2MDA3MTY0ODAwLWI3ZjExMzMxZjM1Yz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTM1MCZxPTgwXCJcblx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8aDE+WW91ciBLaWNrc3RhcnRlciBwYXRod2F5PC9oMT5cblx0XHRcdFx0XHQ8aDM+SGkge3RoaXMuc3RhdGUudXNlcm5hbWV9LCB3ZWxjb21lIHRvIHlvdXIga2lja3N0YXJ0ZXIgcGF0aHdheSBwcm9maWxlLjwvaDM+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IFwiPlxuXHRcdFx0XHRcdFx0XHR7LyogRmlyc3Qgc2VjdGlvbiAgKi99XG5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20gc3BlY2lhbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgb25DbGljaz17dGhpcy50b1ByaXZhdGVDbGFzc30+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDM+UHJpdmF0ZSBDbGFzczwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5Cb29rIHlvdXIgaW5pdGlhbCBhc3Nlc3NtZW50IHByaXZhdGUgY2xhc3Mgd2l0aCBvbmUgb2Ygb3VyIGZvdW5kZXJzPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5JbnNlcnQgaW1hZ2U/PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2Jvb2tlZFByaXZhdGVGaXJzdENsYXNzID8gPGgxPkJPT0tFRDwvaDE+IDogPGgxPk5PVCBCT09LRUQ8L2gxPn1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0ey8qIEZpcnN0IHNlY3Rpb24gICovfVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbSBzcGVjaWFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxMaW5rIGhyZWY9XCIvUHVibGljQ2xhc3NcIj4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBvbkNsaWNrPXt0aGlzLnRvUHVibGljQ2xhc3N9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzPlB1YmxpYyBDbGFzczwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5Cb29rIHlvdXIgcHVibGljIGNsYXNzPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+UmVjYXAgYW5kIHJldmlldyB5b3VyIGxlc3NvbjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+SW5zZXJ0IGltYWdlPzwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHR7LyogPC9MaW5rPiAqL31cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0ey8qIEZpcnN0IHNlY3Rpb24gICovfVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbSBzcGVjaWFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzPlB1YmxpY0NsYXNzPC9oMz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHsvKiBGaXJzdCBzZWN0aW9uICAqL31cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20gc3BlY2lhbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz5QdWJsaWNDbGFzczwvaDM+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7LyogRmlyc3Qgc2VjdGlvbiAgKi99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHNwZWNpYWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDM+UHVibGljQ2xhc3M8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0ey8qIEZpcnN0IHNlY3Rpb24gICovfVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbSBzcGVjaWFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzPlB1YmxpY0NsYXNzPC9oMz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHsvKiBGaXJzdCBzZWN0aW9uICAqL31cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20gc3BlY2lhbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz5Qcml2YXRlIENsYXNzPC9oMz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdHsvKiA8dWwgY2xhc3NOYW1lPVwiXCI+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwiXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvUHJpdmF0ZUNsYXNzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvUHJpdmF0ZUNsYXNzfSBjbGFzc05hbWU9XCJjbGFzcy1ib3hcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFByaXZhdGUgQ2xhc3Ncblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIlwiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1ByaXZhdGVDbGFzc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy50b1ByaXZhdGVDbGFzc30gY2xhc3NOYW1lPVwiY2xhc3MtYm94XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRQcml2YXRlIENsYXNzXG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PC91bD4gKi99XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdHsvKiA8TGluayBocmVmPVwiL1ByaXZhdGVDbGFzc1wiPlxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy50b1ByaXZhdGVDbGFzc30gY2xhc3NOYW1lPVwiY2xhc3MtYm94XCI+XG5cdFx0XHRcdFx0XHRQcml2YXRlIENsYXNzXG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvUHVibGljQ2xhc3NcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9QdWJsaWNDbGFzc30gY2xhc3NOYW1lPVwiY2xhc3MtYm94XCI+XG5cdFx0XHRcdFx0XHRQdWJsaWMgQ2xhc3Ncblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9MaW5rPiAqL31cblxuXHRcdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHQuaW1hZ2VIZWFkIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzMDBweDtcblx0XHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0XHRcdG9iamVjdC1wb3NpdGlvbjogMTAwJSAxMzAlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmNhcmQtc3BhY2Uge1xuXHRcdFx0XHRcdFx0XHQvLyBtYXJnaW4tdG9wOiA1MHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogNSU7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiA1JTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnNwZWNpYWwge1xuXHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQqIHtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRwIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuIl19 */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/kickstarterpath.js */"));
    }
  }]);

  return Kickstarterpath;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=kickstarterpath.js.cc48bb7d4bd1ef7d8453.hot-update.js.map