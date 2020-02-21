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
        className: "jsx-934222617",
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
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-934222617" + " " + "card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("img", {
        src: "https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "",
        className: "jsx-934222617" + " " + "imageHead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-934222617" + " " + "container leftAlign",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Your Kickstarter pathway"), __jsx("h3", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Hi ", this.state.username, ", welcome to your kickstarter pathway profile."), __jsx("hr", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-934222617" + " " + "container containerBig",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-934222617" + " " + "row ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-934222617" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPrivateClass,
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx("h7", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "> Your First Step"), __jsx("h2", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Private Session"), __jsx("p", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Want to get started but no idea where to start? Book your 1-on-1 with our master trainers!", ' '), __jsx("button", {
        onClick: this.toPrivateClass,
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Start"), bookedPrivateFirstClass ? __jsx("h6", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "BOOKED") : __jsx("h6", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "NOT BOOKED"))), __jsx("div", {
        className: "jsx-934222617" + " " + "col-sm special row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Book your public class"), __jsx("p", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Recap and review your lesson"), __jsx("br", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Insert image?"))), __jsx("div", {
        className: "jsx-934222617" + " " + "col-sm special row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Book your public class"), __jsx("p", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Recap and review your lesson"), __jsx("br", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Insert image?")))), __jsx("div", {
        className: "jsx-934222617" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-934222617" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Book your public class"), __jsx("p", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Recap and review your lesson"), __jsx("br", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Insert image?"))), __jsx("div", {
        className: "jsx-934222617" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Book your public class"), __jsx("p", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Recap and review your lesson"), __jsx("br", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Insert image?"))), __jsx("div", {
        className: "jsx-934222617" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-934222617",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "PublicClass"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "934222617",
        __self: this
      }, ".imageHead.jsx-934222617{width:100%;height:300px;object-fit:cover;object-position:0 80%;}.card-space.jsx-934222617{padding-top:3%;}.leftAlign.jsx-934222617{text-align:left;padding-top:1%;margin-bottom:1%;}.special.jsx-934222617{padding:10px;margin:10px;box-shadow:9px 7px 25px -10px rgba(0,0,0,0.75);}p.jsx-934222617{font-size:12px;}h3.jsx-934222617{font-size:20px;}hr.jsx-934222617{width:1100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9raWNrc3RhcnRlcnBhdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMExNLEFBSW1CLEFBTUksQUFJQyxBQU1ILEFBTUUsQUFJQSxBQU9GLFdBaENBLEVBZ0JELEFBaUJiLEVBM0JBLEFBZ0JBLEFBSUEsQ0FoQmdCLFFBVEUsQ0FnQmlDLE1BTmpDLFVBVEssT0FVdkIsZUFUQSxTQWVBIiwiZmlsZSI6Ii9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9raWNrc3RhcnRlcnBhdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuLy8gaW1wb3J0IFByaXZhdGVDbGFzcyBmcm9tICcuLi9jb21wb25lbnRzL1ByaXZhdGVDbGFzcyc7XG5pbXBvcnQgUHJpdmF0ZUNsYXNzIGZyb20gJy4vUHJpdmF0ZUNsYXNzJztcbmltcG9ydCBQdWJsaWNDbGFzcyBmcm9tICcuL1B1YmxpY0NsYXNzJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbi8vIGltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpY2tzdGFydGVycGF0aCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR1c2VybmFtZSAgICAgICAgICAgICAgICA6ICdjdXN0b21lcicsXG5cdFx0XHRib29rZWRQcml2YXRlRmlyc3RDbGFzcyA6IGZhbHNlLFxuXHRcdFx0Ym9va2VkRmlyc3RQdWJsaWNDbGFzcyAgOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHQvLyBjb21wb25lbnREaWRNb3VudCgpIHtcblx0Ly8gXHRsZXQgdG9rZW4gPSBcIkJlYXJlclwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIik7XG5cdC8vIFx0QXhpb3Moe21ldGhvZDogJ2dldCcsIHVybDogJy9hcGkvcG9zZXMnLCBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogdG9rZW4gfX0pXG5cdC8vIFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdC8vIFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBwb3NlczogcmVzcG9uc2UuZGF0YX0pXG5cdC8vIFx0XHR9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpXG5cdC8vIH1cblxuXHQvLyBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcblx0Ly8gXHQvLyBjb25zb2xlLmxvZygnSGVsbG8nLCBib29rZWRQcml2YXRlRmlyc3RDbGFzcyk7XG5cdC8vIFx0dGhpcy5zZXRTdGF0ZSh7XG5cdC8vIFx0XHRib29rZWRQcml2YXRlRmlyc3RDbGFzcyA6IHRydWVcblx0Ly8gXHR9KTtcblx0Ly8gfTtcblxuXHQvLyBUbyByZWRpcmVjdCB0byBwcml2YXRlIGNsYXNzXG5cdHRvUHJpdmF0ZUNsYXNzID0gKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCdCdXR0b24gaGFzIGJlZW4gY2xpY2tlZCcpO1xuXHRcdGNvbnNvbGUubG9nKFwiQnV0dG9uJ3Mgc3RhdGUgaXNcIiwgdGhpcy5zdGF0ZS5ib29rZWRQcml2YXRlRmlyc3RDbGFzcyk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRib29rZWRQcml2YXRlRmlyc3RDbGFzcyA6IHRydWVcblx0XHR9KTtcblx0XHRSb3V0ZXIucHVzaCgnL1ByaXZhdGVDbGFzcycpO1xuXHRcdC8vIDxQcml2YXRlQ2xhc3MgYm9va2VkRmlyc3RDbGFzcz17dGhpcy5ib29rZWRGaXJzdENsYXNzfSAvPjtcblx0fTtcblxuXHQvLyBUbyByZWRpcmVjdCB0byBwdWJsaWMgY2xhc3Ncblx0dG9QdWJsaWNDbGFzcyA9ICgpID0+IHtcblx0XHRjb25zb2xlLmxvZygnQnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQnKTtcblx0XHRjb25zb2xlLmxvZyhcIkJ1dHRvbidzIHRvIHB1YmxpYyBjbGFzcyBzdGF0ZSBpc1wiLCB0aGlzLnN0YXRlLmJvb2tlZEZpcnN0UHVibGljQ2xhc3MpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Ym9va2VkRmlyc3RQdWJsaWNDbGFzcyA6IHRydWVcblx0XHR9KTtcblx0XHRSb3V0ZXIucHVzaCgnL1B1YmxpY0NsYXNzJyk7XG5cdFx0Ly8gPFByaXZhdGVDbGFzcyBib29rZWRGaXJzdENsYXNzPXt0aGlzLmJvb2tlZEZpcnN0Q2xhc3N9IC8+O1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBib29rZWRQcml2YXRlRmlyc3RDbGFzcyA9IHRoaXMuc3RhdGUuYm9va2VkUHJpdmF0ZUZpcnN0Q2xhc3M7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dCB0aXRsZT1cIktpY2tzdGFydGVyIFByb2ZpbGVcIj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPllvdXIgSm91cm5leSBCZWdpbnMgaGVyZTwvdGl0bGU+XG5cdFx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG5cdFx0XHRcdFx0XHRpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiXG5cdFx0XHRcdFx0XHRjcm9zc29yaWdpbj1cImFub255bW91c1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9IZWFkPlxuXG5cdFx0XHRcdHsvKiA8YnV0dG9uIG9uQ2xpY2sgPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93RGV0YWlsczogdHJ1ZX0pfSBjbGFzc05hbWU9XCJjbGFzcy1ib3hcIj5Qcml2YXRlIENsYXNzPC9idXR0b24+ICovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc3BhY2VcIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZUhlYWRcIlxuXHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NzQ1NDA0MTI2NjUtMWNkYWUyMTBhZTZiP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01MDAmcT02MFwiXG5cdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbGVmdEFsaWduXCI+XG5cdFx0XHRcdFx0XHQ8aDE+WW91ciBLaWNrc3RhcnRlciBwYXRod2F5PC9oMT5cblx0XHRcdFx0XHRcdDxoMz5IaSB7dGhpcy5zdGF0ZS51c2VybmFtZX0sIHdlbGNvbWUgdG8geW91ciBraWNrc3RhcnRlciBwYXRod2F5IHByb2ZpbGUuPC9oMz5cblx0XHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lckJpZ1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XG5cdFx0XHRcdFx0XHRcdHsvKiBGaXJzdCByb3cgZmlyc3QgYm94ICAqL31cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20gc3BlY2lhbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgb25DbGljaz17dGhpcy50b1ByaXZhdGVDbGFzc30+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDc+PiBZb3VyIEZpcnN0IFN0ZXA8L2g3PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPlByaXZhdGUgU2Vzc2lvbjwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0V2FudCB0byBnZXQgc3RhcnRlZCBidXQgbm8gaWRlYSB3aGVyZSB0byBzdGFydD8gQm9vayB5b3VyIDEtb24tMSB3aXRoIG91ciBtYXN0ZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhaW5lcnMheycgJ31cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy50b1ByaXZhdGVDbGFzc30+U3RhcnQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdHtib29rZWRQcml2YXRlRmlyc3RDbGFzcyA/IDxoNj5CT09LRUQ8L2g2PiA6IDxoNj5OT1QgQk9PS0VEPC9oNj59XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdHsvKiBGaXJzdCByb3cgc2Vjb25kIGJveCAgKi99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHNwZWNpYWwgcm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBvbkNsaWNrPXt0aGlzLnRvUHVibGljQ2xhc3N9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzPlB1YmxpYyBDbGFzczwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5Cb29rIHlvdXIgcHVibGljIGNsYXNzPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+UmVjYXAgYW5kIHJldmlldyB5b3VyIGxlc3NvbjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+SW5zZXJ0IGltYWdlPzwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0ey8qIEZpcnN0IHJvdyB0aGlyZCBib3ggICovfVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbSBzcGVjaWFsIHJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgb25DbGljaz17dGhpcy50b1B1YmxpY0NsYXNzfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMz5QdWJsaWMgQ2xhc3M8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+Qm9vayB5b3VyIHB1YmxpYyBjbGFzczwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPlJlY2FwIGFuZCByZXZpZXcgeW91ciBsZXNzb248L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPkluc2VydCBpbWFnZT88L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdHsvKiBGaXJzdCBzZWN0aW9uICAqL31cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20gc3BlY2lhbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgb25DbGljaz17dGhpcy50b1B1YmxpY0NsYXNzfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMz5QdWJsaWMgQ2xhc3M8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+Qm9vayB5b3VyIHB1YmxpYyBjbGFzczwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPlJlY2FwIGFuZCByZXZpZXcgeW91ciBsZXNzb248L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPkluc2VydCBpbWFnZT88L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7LyogRmlyc3Qgc2VjdGlvbiAgKi99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHNwZWNpYWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9e3RoaXMudG9QdWJsaWNDbGFzc30+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDM+UHVibGljIENsYXNzPC9oMz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPkJvb2sgeW91ciBwdWJsaWMgY2xhc3M8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5SZWNhcCBhbmQgcmV2aWV3IHlvdXIgbGVzc29uPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5JbnNlcnQgaW1hZ2U/PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0ey8qIEZpcnN0IHNlY3Rpb24gICovfVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbSBzcGVjaWFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzPlB1YmxpY0NsYXNzPC9oMz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHsvKiBGaXJzdCBzZWN0aW9uICAqL31cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0ey8qIDx1bCBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9Qcml2YXRlQ2xhc3NcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9Qcml2YXRlQ2xhc3N9IGNsYXNzTmFtZT1cImNsYXNzLWJveFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0UHJpdmF0ZSBDbGFzc1xuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwiXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvUHJpdmF0ZUNsYXNzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvUHJpdmF0ZUNsYXNzfSBjbGFzc05hbWU9XCJjbGFzcy1ib3hcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFByaXZhdGUgQ2xhc3Ncblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPiAqL31cblx0XHRcdFx0ey8qIDwvZGl2PiAqL31cblxuXHRcdFx0XHR7LyogPExpbmsgaHJlZj1cIi9Qcml2YXRlQ2xhc3NcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9Qcml2YXRlQ2xhc3N9IGNsYXNzTmFtZT1cImNsYXNzLWJveFwiPlxuXHRcdFx0XHRcdFx0UHJpdmF0ZSBDbGFzc1xuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQ8TGluayBocmVmPVwiL1B1YmxpY0NsYXNzXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvUHVibGljQ2xhc3N9IGNsYXNzTmFtZT1cImNsYXNzLWJveFwiPlxuXHRcdFx0XHRcdFx0UHVibGljIENsYXNzXG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvTGluaz4gKi99XG5cblx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0LmltYWdlSGVhZCB7XG5cdFx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMzAwcHg7XG5cdFx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRcdFx0XHRvYmplY3QtcG9zaXRpb246IDAgODAlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmNhcmQtc3BhY2Uge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMyU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5sZWZ0QWxpZ24ge1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMSU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDElO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnNwZWNpYWwge1xuXHRcdFx0XHRcdFx0XHQvLyBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDlweCA3cHggMjVweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRwIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIC5jb250YWluZXJCaWcge1xuXHRcdFx0XHRcdFx0Ly8gXHRib3JkZXI6IDJweCBzb2xpZCByZWQ7XG5cdFx0XHRcdFx0XHQvLyB9XG5cblx0XHRcdFx0XHRcdGhyIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDExMDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuIl19 */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/kickstarterpath.js */"));
    }
  }]);

  return Kickstarterpath;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=kickstarterpath.js.d1e44783a28414e3dc0b.hot-update.js.map