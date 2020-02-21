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
        className: "jsx-3044087591",
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
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-3044087591" + " " + "card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("img", {
        src: "https://i1.wp.com/www.yogaplus.sg/wp-content/uploads/2017/12/171013-171013-First-Cut-Yoga-Arab-St-2.0-68.jpg?fit=840%2C561&ssl=1",
        alt: "",
        width: "100%",
        height: "350",
        className: "jsx-3044087591" + " " + "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Your Kickstarter pathway"), __jsx("h3", {
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Hi ", this.state.username, ", welcome to your kickstarter pathway profile."), __jsx("div", {
        className: "jsx-3044087591" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3044087591" + " " + "row ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3044087591" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPrivateClass,
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Private Class"), __jsx("p", {
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Book your initial assessment private class with one of our founders"), __jsx("br", {
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Insert image?"), bookedPrivateFirstClass ? __jsx("h1", {
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "BOOKED") : __jsx("h1", {
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "NOT BOOKED"))), __jsx("div", {
        className: "jsx-3044087591" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Book your public class"), __jsx("p", {
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Recap and review your lesson"), __jsx("br", {
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Insert image?"))), __jsx("div", {
        className: "jsx-3044087591" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "PublicClass")), __jsx("div", {
        className: "jsx-3044087591" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "PublicClass")), __jsx("div", {
        className: "jsx-3044087591" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "PublicClass")), __jsx("div", {
        className: "jsx-3044087591" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "PublicClass")), __jsx("div", {
        className: "jsx-3044087591" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-3044087591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Private Class"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3044087591",
        __self: this
      }, ".card-space.jsx-3044087591{padding-top:5%;padding-bottom:5%;}.special.jsx-3044087591{border:1px solid blue;padding:10px;}*.jsx-3044087591{text-align:center;}p.jsx-3044087591{font-size:12px;}h3.jsx-3044087591{font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9raWNrc3RhcnRlcnBhdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0tNLEFBSXVCLEFBS08sQUFLSixBQUlILEFBSUEsZUFqQkcsQUFjbkIsQUFJQSxHQVJBLElBTGMsV0FKZCxFQUtBIiwiZmlsZSI6Ii9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9raWNrc3RhcnRlcnBhdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuLy8gaW1wb3J0IFByaXZhdGVDbGFzcyBmcm9tICcuLi9jb21wb25lbnRzL1ByaXZhdGVDbGFzcyc7XG5pbXBvcnQgUHJpdmF0ZUNsYXNzIGZyb20gJy4vUHJpdmF0ZUNsYXNzJztcbmltcG9ydCBQdWJsaWNDbGFzcyBmcm9tICcuL1B1YmxpY0NsYXNzJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbi8vIGltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpY2tzdGFydGVycGF0aCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR1c2VybmFtZSAgICAgICAgICAgICAgICA6ICdjdXN0b21lcicsXG5cdFx0XHRib29rZWRQcml2YXRlRmlyc3RDbGFzcyA6IGZhbHNlLFxuXHRcdFx0Ym9va2VkRmlyc3RQdWJsaWNDbGFzcyAgOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHQvLyBjb21wb25lbnREaWRNb3VudCgpIHtcblx0Ly8gXHRsZXQgdG9rZW4gPSBcIkJlYXJlclwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIik7XG5cdC8vIFx0QXhpb3Moe21ldGhvZDogJ2dldCcsIHVybDogJy9hcGkvcG9zZXMnLCBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogdG9rZW4gfX0pXG5cdC8vIFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdC8vIFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBwb3NlczogcmVzcG9uc2UuZGF0YX0pXG5cdC8vIFx0XHR9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpXG5cdC8vIH1cblxuXHQvLyBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcblx0Ly8gXHQvLyBjb25zb2xlLmxvZygnSGVsbG8nLCBib29rZWRQcml2YXRlRmlyc3RDbGFzcyk7XG5cdC8vIFx0dGhpcy5zZXRTdGF0ZSh7XG5cdC8vIFx0XHRib29rZWRQcml2YXRlRmlyc3RDbGFzcyA6IHRydWVcblx0Ly8gXHR9KTtcblx0Ly8gfTtcblxuXHQvLyBUbyByZWRpcmVjdCB0byBwcml2YXRlIGNsYXNzXG5cdHRvUHJpdmF0ZUNsYXNzID0gKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCdCdXR0b24gaGFzIGJlZW4gY2xpY2tlZCcpO1xuXHRcdGNvbnNvbGUubG9nKFwiQnV0dG9uJ3Mgc3RhdGUgaXNcIiwgdGhpcy5zdGF0ZS5ib29rZWRQcml2YXRlRmlyc3RDbGFzcyk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRib29rZWRQcml2YXRlRmlyc3RDbGFzcyA6IHRydWVcblx0XHR9KTtcblx0XHRSb3V0ZXIucHVzaCgnL1ByaXZhdGVDbGFzcycpO1xuXHRcdC8vIDxQcml2YXRlQ2xhc3MgYm9va2VkRmlyc3RDbGFzcz17dGhpcy5ib29rZWRGaXJzdENsYXNzfSAvPjtcblx0fTtcblxuXHQvLyBUbyByZWRpcmVjdCB0byBwdWJsaWMgY2xhc3Ncblx0dG9QdWJsaWNDbGFzcyA9ICgpID0+IHtcblx0XHRjb25zb2xlLmxvZygnQnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQnKTtcblx0XHRjb25zb2xlLmxvZyhcIkJ1dHRvbidzIHRvIHB1YmxpYyBjbGFzcyBzdGF0ZSBpc1wiLCB0aGlzLnN0YXRlLmJvb2tlZEZpcnN0UHVibGljQ2xhc3MpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Ym9va2VkRmlyc3RQdWJsaWNDbGFzcyA6IHRydWVcblx0XHR9KTtcblx0XHRSb3V0ZXIucHVzaCgnL1B1YmxpY0NsYXNzJyk7XG5cdFx0Ly8gPFByaXZhdGVDbGFzcyBib29rZWRGaXJzdENsYXNzPXt0aGlzLmJvb2tlZEZpcnN0Q2xhc3N9IC8+O1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBib29rZWRQcml2YXRlRmlyc3RDbGFzcyA9IHRoaXMuc3RhdGUuYm9va2VkUHJpdmF0ZUZpcnN0Q2xhc3M7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dCB0aXRsZT1cIktpY2tzdGFydGVyIFByb2ZpbGVcIj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPllvdXIgSm91cm5leSBCZWdpbnMgaGVyZTwvdGl0bGU+XG5cdFx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG5cdFx0XHRcdFx0XHRpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiXG5cdFx0XHRcdFx0XHRjcm9zc29yaWdpbj1cImFub255bW91c1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9IZWFkPlxuXG5cdFx0XHRcdHsvKiA8YnV0dG9uIG9uQ2xpY2sgPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93RGV0YWlsczogdHJ1ZX0pfSBjbGFzc05hbWU9XCJjbGFzcy1ib3hcIj5Qcml2YXRlIENsYXNzPC9idXR0b24+ICovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc3BhY2VcIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtYi00XCJcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vaTEud3AuY29tL3d3dy55b2dhcGx1cy5zZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8xMi8xNzEwMTMtMTcxMDEzLUZpcnN0LUN1dC1Zb2dhLUFyYWItU3QtMi4wLTY4LmpwZz9maXQ9ODQwJTJDNTYxJnNzbD0xXCJcblx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHR3aWR0aD1cIjEwMCVcIlxuXHRcdFx0XHRcdFx0aGVpZ2h0PVwiMzUwXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxoMT5Zb3VyIEtpY2tzdGFydGVyIHBhdGh3YXk8L2gxPlxuXHRcdFx0XHRcdDxoMz5IaSB7dGhpcy5zdGF0ZS51c2VybmFtZX0sIHdlbGNvbWUgdG8geW91ciBraWNrc3RhcnRlciBwYXRod2F5IHByb2ZpbGUuPC9oMz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XG5cdFx0XHRcdFx0XHRcdHsvKiBGaXJzdCBzZWN0aW9uICAqL31cblxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbSBzcGVjaWFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBvbkNsaWNrPXt0aGlzLnRvUHJpdmF0ZUNsYXNzfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMz5Qcml2YXRlIENsYXNzPC9oMz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPkJvb2sgeW91ciBpbml0aWFsIGFzc2Vzc21lbnQgcHJpdmF0ZSBjbGFzcyB3aXRoIG9uZSBvZiBvdXIgZm91bmRlcnM8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPkluc2VydCBpbWFnZT88L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Ym9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MgPyA8aDE+Qk9PS0VEPC9oMT4gOiA8aDE+Tk9UIEJPT0tFRDwvaDE+fVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHR7LyogRmlyc3Qgc2VjdGlvbiAgKi99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHNwZWNpYWxcIj5cblx0XHRcdFx0XHRcdFx0XHR7LyogPExpbmsgaHJlZj1cIi9QdWJsaWNDbGFzc1wiPiAqL31cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9e3RoaXMudG9QdWJsaWNDbGFzc30+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDM+UHVibGljIENsYXNzPC9oMz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPkJvb2sgeW91ciBwdWJsaWMgY2xhc3M8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5SZWNhcCBhbmQgcmV2aWV3IHlvdXIgbGVzc29uPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5JbnNlcnQgaW1hZ2U/PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8L0xpbms+ICovfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHR7LyogRmlyc3Qgc2VjdGlvbiAgKi99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHNwZWNpYWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDM+UHVibGljQ2xhc3M8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0ey8qIEZpcnN0IHNlY3Rpb24gICovfVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbSBzcGVjaWFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzPlB1YmxpY0NsYXNzPC9oMz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHsvKiBGaXJzdCBzZWN0aW9uICAqL31cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20gc3BlY2lhbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz5QdWJsaWNDbGFzczwvaDM+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7LyogRmlyc3Qgc2VjdGlvbiAgKi99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHNwZWNpYWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDM+UHVibGljQ2xhc3M8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0ey8qIEZpcnN0IHNlY3Rpb24gICovfVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbSBzcGVjaWFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzPlByaXZhdGUgQ2xhc3M8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0ey8qIDx1bCBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9Qcml2YXRlQ2xhc3NcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9Qcml2YXRlQ2xhc3N9IGNsYXNzTmFtZT1cImNsYXNzLWJveFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0UHJpdmF0ZSBDbGFzc1xuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwiXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvUHJpdmF0ZUNsYXNzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvUHJpdmF0ZUNsYXNzfSBjbGFzc05hbWU9XCJjbGFzcy1ib3hcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFByaXZhdGUgQ2xhc3Ncblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPiAqL31cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0ey8qIDxMaW5rIGhyZWY9XCIvUHJpdmF0ZUNsYXNzXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvUHJpdmF0ZUNsYXNzfSBjbGFzc05hbWU9XCJjbGFzcy1ib3hcIj5cblx0XHRcdFx0XHRcdFByaXZhdGUgQ2xhc3Ncblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0PExpbmsgaHJlZj1cIi9QdWJsaWNDbGFzc1wiPlxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy50b1B1YmxpY0NsYXNzfSBjbGFzc05hbWU9XCJjbGFzcy1ib3hcIj5cblx0XHRcdFx0XHRcdFB1YmxpYyBDbGFzc1xuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L0xpbms+ICovfVxuXG5cdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdFx0e2Bcblx0XHRcdFx0XHRcdC5jYXJkLXNwYWNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gbWFyZ2luLXRvcDogNTBweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDUlO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNSU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5zcGVjaWFsIHtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgYmx1ZTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0KiB7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/kickstarterpath.js */"));
    }
  }]);

  return Kickstarterpath;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=kickstarterpath.js.15596b0fc4b39a1b193e.hot-update.js.map