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
/* harmony import */ var _components_MyLayoutOut__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MyLayoutOut */ "./components/MyLayoutOut.js");
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
      username: 'takerbiker',
      bookedPrivateFirstClass: false,
      bookedFirstPublicClass: false
    };
    return _this;
  } // componentDidMount = () => {
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
      return __jsx(_components_MyLayoutOut__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Kickstarter Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Your Journey Begins here"), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-2882728807" + " " + "card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("img", {
        src: "https://scontent.fsin3-1.fna.fbcdn.net/v/t1.0-9/41679727_735312276806906_3214309389242466304_o.jpg?_nc_cat=101&_nc_oc=AQnd91_8ITD43jaU_HMAdEq0DW0ruvnIQ1NsxWtnzcGhq33y8rCT0uKR_zEMDQHinK8&_nc_ht=scontent.fsin3-1.fna&oh=ee2b126cca63973c2256f3a43890c75a&oe=5EB4DA01",
        alt: "",
        className: "jsx-2882728807" + " " + "imageHead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-2882728807" + " " + "container leftAlign",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Your Kickstarter Pathway"), __jsx("h3", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Hi ", this.state.username, ", welcome to the amazing world of yoga! Now, you can keep track of your progress."), __jsx("hr", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-2882728807" + " " + "container containerBig",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2882728807" + " " + "row ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2882728807" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPrivateClass,
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "> Your First Step"), __jsx("h2", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Private Session"), __jsx("p", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Want to get started but no idea where to start? Book your 1-on-1 with our master trainers!"), __jsx("button", {
        onClick: this.toPrivateClass,
        className: "jsx-2882728807" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Start"))), __jsx("div", {
        className: "jsx-2882728807" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "> Basics"), __jsx("h2", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Get familiar with basic poses and exercises that will make your yoga practice more fulfilling!"), __jsx("button", {
        onClick: this.toPublicClass,
        className: "jsx-2882728807" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Start"))), __jsx("div", {
        className: "jsx-2882728807" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "> Basics"), __jsx("h2", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Get familiar with basic poses and exercises that will make your yoga practice more fulfilling!"), __jsx("button", {
        onClick: this.toPublicClass,
        className: "jsx-2882728807" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Start")))), __jsx("div", {
        className: "jsx-2882728807" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2882728807" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "> Basics"), __jsx("h2", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Learn some basic poses and exercises that will make your yoga practice more fulfilling in the long run!"), __jsx("button", {
        onClick: this.toPublicClass,
        className: "jsx-2882728807" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Start"))), __jsx("div", {
        className: "jsx-2882728807" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "> Explore"), __jsx("h2", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "You should be a little more familiar with the basics by now. Up for a little challenge?"), __jsx("button", {
        onClick: this.toPublicClass,
        className: "jsx-2882728807" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "Start"))), __jsx("div", {
        className: "jsx-2882728807" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPrivateClass,
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "> Be Free"), __jsx("h2", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Private Session"), __jsx("p", {
        className: "jsx-2882728807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Come and recap what you have learnt with a 1-on-1 session with our master trainers!"), __jsx("button", {
        onClick: this.toPrivateClass,
        className: "jsx-2882728807" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Start")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2882728807",
        __self: this
      }, ".imageHead.jsx-2882728807{width:100%;height:300px;object-fit:cover;object-position:0 80%;}.card-space.jsx-2882728807{padding-top:3%;}.leftAlign.jsx-2882728807{text-align:left;padding-top:1%;margin-bottom:1%;}.special.jsx-2882728807{padding:15px;margin:10px;box-shadow:9px 7px 25px -10px rgba(0,0,0,0.75);background-color:white;}p.jsx-2882728807{font-size:12px;}h3.jsx-2882728807{font-size:20px;}hr.jsx-2882728807{width:1100px;}.title.jsx-2882728807{font-family:\"Nanum Myeongjo\",500;font-size:30px;}.jumbo1.jsx-2882728807{background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1533628635777-112b2239b1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');padding-bottom:20%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9raWNrc3RhcnRlcnBhdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNktNLEFBSW1CLEFBTUksQUFJQyxBQU1ILEFBT0UsQUFJQSxBQUlGLEFBSXFCLEFBSzRHLFdBdkNqSSxFQWdCRCxBQWViLEVBekJBLEFBaUJBLEFBSUEsQ0FqQmdCLFFBVEUsQ0FnQmlDLE1BTmpDLEVBd0JGLFFBakNPLE9BVXZCLEFBd0JBLGVBakNBLFNBZXdCLHVCQUN4Qiw0R0FxQm9CLG1CQUNwQiIsImZpbGUiOiIvVXNlcnMvc2hhaHJhbmlyYWhpbWFuL1Byb2plY3RzL3lvZ2Ffa2lja3N0YXJ0ZXIva2lja3N0YXJ0ZXJfZnJvbnRlbmQvcGFnZXMva2lja3N0YXJ0ZXJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dE91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0T3V0JztcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBQcml2YXRlQ2xhc3MgZnJvbSAnLi9Qcml2YXRlQ2xhc3MnO1xuaW1wb3J0IFB1YmxpY0NsYXNzIGZyb20gJy4vUHVibGljQ2xhc3MnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaWNrc3RhcnRlcnBhdGggZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dXNlcm5hbWUgICAgICAgICAgICAgICAgOiAndGFrZXJiaWtlcicsXG5cdFx0XHRib29rZWRQcml2YXRlRmlyc3RDbGFzcyA6IGZhbHNlLFxuXHRcdFx0Ym9va2VkRmlyc3RQdWJsaWNDbGFzcyAgOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHQvLyBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcblx0Ly8gXHQvLyBjb25zb2xlLmxvZygnSGVsbG8nLCBib29rZWRQcml2YXRlRmlyc3RDbGFzcyk7XG5cdC8vIFx0dGhpcy5zZXRTdGF0ZSh7XG5cdC8vIFx0XHRib29rZWRQcml2YXRlRmlyc3RDbGFzcyA6IHRydWVcblx0Ly8gXHR9KTtcblx0Ly8gfTtcblxuXHQvLyBUbyByZWRpcmVjdCB0byBwcml2YXRlIGNsYXNzXG5cdHRvUHJpdmF0ZUNsYXNzID0gKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCdCdXR0b24gaGFzIGJlZW4gY2xpY2tlZCcpO1xuXHRcdGNvbnNvbGUubG9nKFwiQnV0dG9uJ3Mgc3RhdGUgaXNcIiwgdGhpcy5zdGF0ZS5ib29rZWRQcml2YXRlRmlyc3RDbGFzcyk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRib29rZWRQcml2YXRlRmlyc3RDbGFzcyA6IHRydWVcblx0XHR9KTtcblx0XHRSb3V0ZXIucHVzaCgnL1ByaXZhdGVDbGFzcycpO1xuXHRcdC8vIDxQcml2YXRlQ2xhc3MgYm9va2VkRmlyc3RDbGFzcz17dGhpcy5ib29rZWRGaXJzdENsYXNzfSAvPjtcblx0fTtcblxuXHQvLyBUbyByZWRpcmVjdCB0byBwdWJsaWMgY2xhc3Ncblx0dG9QdWJsaWNDbGFzcyA9ICgpID0+IHtcblx0XHRjb25zb2xlLmxvZygnQnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQnKTtcblx0XHRjb25zb2xlLmxvZyhcIkJ1dHRvbidzIHRvIHB1YmxpYyBjbGFzcyBzdGF0ZSBpc1wiLCB0aGlzLnN0YXRlLmJvb2tlZEZpcnN0UHVibGljQ2xhc3MpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Ym9va2VkRmlyc3RQdWJsaWNDbGFzcyA6IHRydWVcblx0XHR9KTtcblx0XHRSb3V0ZXIucHVzaCgnL1B1YmxpY0NsYXNzJyk7XG5cdFx0Ly8gPFByaXZhdGVDbGFzcyBib29rZWRGaXJzdENsYXNzPXt0aGlzLmJvb2tlZEZpcnN0Q2xhc3N9IC8+O1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBib29rZWRQcml2YXRlRmlyc3RDbGFzcyA9IHRoaXMuc3RhdGUuYm9va2VkUHJpdmF0ZUZpcnN0Q2xhc3M7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dE91dCB0aXRsZT1cIktpY2tzdGFydGVyIFByb2ZpbGVcIj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPllvdXIgSm91cm5leSBCZWdpbnMgaGVyZTwvdGl0bGU+XG5cdFx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJqdW1ibzFcIj4gKi99XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1zcGFjZVwiPlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlSGVhZFwiXG5cdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL3Njb250ZW50LmZzaW4zLTEuZm5hLmZiY2RuLm5ldC92L3QxLjAtOS80MTY3OTcyN183MzUzMTIyNzY4MDY5MDZfMzIxNDMwOTM4OTI0MjQ2NjMwNF9vLmpwZz9fbmNfY2F0PTEwMSZfbmNfb2M9QVFuZDkxXzhJVEQ0M2phVV9ITUFkRXEwRFcwcnV2bklRMU5zeFd0bnpjR2hxMzN5OHJDVDB1S1JfekVNRFFIaW5LOCZfbmNfaHQ9c2NvbnRlbnQuZnNpbjMtMS5mbmEmb2g9ZWUyYjEyNmNjYTYzOTczYzIyNTZmM2E0Mzg5MGM3NWEmb2U9NUVCNERBMDFcIlxuXHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGxlZnRBbGlnblwiPlxuXHRcdFx0XHRcdFx0PGgxPllvdXIgS2lja3N0YXJ0ZXIgUGF0aHdheTwvaDE+XG5cdFx0XHRcdFx0XHQ8aDM+XG5cdFx0XHRcdFx0XHRcdEhpIHt0aGlzLnN0YXRlLnVzZXJuYW1lfSwgd2VsY29tZSB0byB0aGUgYW1hemluZyB3b3JsZCBvZiB5b2dhISBOb3csIHlvdSBjYW4ga2VlcCB0cmFjayBvZlxuXHRcdFx0XHRcdFx0XHR5b3VyIHByb2dyZXNzLlxuXHRcdFx0XHRcdFx0PC9oMz5cblx0XHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lckJpZ1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XG5cdFx0XHRcdFx0XHRcdHsvKiBGaXJzdCByb3cgZmlyc3QgYm94ICAqL31cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20gc3BlY2lhbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgb25DbGljaz17dGhpcy50b1ByaXZhdGVDbGFzc30+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDY+PiBZb3VyIEZpcnN0IFN0ZXA8L2g2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPlByaXZhdGUgU2Vzc2lvbjwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0V2FudCB0byBnZXQgc3RhcnRlZCBidXQgbm8gaWRlYSB3aGVyZSB0byBzdGFydD8gQm9vayB5b3VyIDEtb24tMSB3aXRoIG91ciBtYXN0ZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhaW5lcnMhXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9e3RoaXMudG9Qcml2YXRlQ2xhc3N9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTdGFydFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdHsvKiBGaXJzdCByb3cgc2Vjb25kIGJveCAgKi99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHNwZWNpYWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9e3RoaXMudG9QdWJsaWNDbGFzc30+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDY+PiBCYXNpY3M8L2g2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPlB1YmxpYyBDbGFzczwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0R2V0IGZhbWlsaWFyIHdpdGggYmFzaWMgcG9zZXMgYW5kIGV4ZXJjaXNlcyB0aGF0IHdpbGwgbWFrZSB5b3VyIHlvZ2EgcHJhY3RpY2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0bW9yZSBmdWxmaWxsaW5nIVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt0aGlzLnRvUHVibGljQ2xhc3N9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTdGFydFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdHsvKiBGaXJzdCByb3cgdGhpcmQgYm94ICAqL31cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20gc3BlY2lhbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgb25DbGljaz17dGhpcy50b1B1YmxpY0NsYXNzfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoNj4+IEJhc2ljczwvaDY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDI+UHVibGljIENsYXNzPC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRHZXQgZmFtaWxpYXIgd2l0aCBiYXNpYyBwb3NlcyBhbmQgZXhlcmNpc2VzIHRoYXQgd2lsbCBtYWtlIHlvdXIgeW9nYSBwcmFjdGljZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb3JlIGZ1bGZpbGxpbmchXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9e3RoaXMudG9QdWJsaWNDbGFzc30+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFN0YXJ0XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0ey8qIFNlY29uZCByb3cgZmlyc3QgYm94ICAqL31cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20gc3BlY2lhbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgb25DbGljaz17dGhpcy50b1B1YmxpY0NsYXNzfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoNj4+IEJhc2ljczwvaDY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDI+UHVibGljIENsYXNzPC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRMZWFybiBzb21lIGJhc2ljIHBvc2VzIGFuZCBleGVyY2lzZXMgdGhhdCB3aWxsIG1ha2UgeW91ciB5b2dhIHByYWN0aWNlIG1vcmVcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZnVsZmlsbGluZyBpbiB0aGUgbG9uZyBydW4hXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9e3RoaXMudG9QdWJsaWNDbGFzc30+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFN0YXJ0XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0ey8qIFNlY29uZCByb3cgc2Vjb25kIGJveCAgKi99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHNwZWNpYWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9e3RoaXMudG9QdWJsaWNDbGFzc30+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDY+PiBFeHBsb3JlPC9oNj5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5QdWJsaWMgQ2xhc3M8L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFlvdSBzaG91bGQgYmUgYSBsaXR0bGUgbW9yZSBmYW1pbGlhciB3aXRoIHRoZSBiYXNpY3MgYnkgbm93LiBVcCBmb3IgYSBsaXR0bGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhbGxlbmdlP1xuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt0aGlzLnRvUHVibGljQ2xhc3N9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTdGFydFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdHsvKiBTZWNvbmQgcm93IHRoaXJkIGJveCAgKi99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHNwZWNpYWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9e3RoaXMudG9Qcml2YXRlQ2xhc3N9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2Pj4gQmUgRnJlZTwvaDY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDI+UHJpdmF0ZSBTZXNzaW9uPC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRDb21lIGFuZCByZWNhcCB3aGF0IHlvdSBoYXZlIGxlYXJudCB3aXRoIGEgMS1vbi0xIHNlc3Npb24gd2l0aCBvdXIgbWFzdGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRyYWluZXJzIVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt0aGlzLnRvUHJpdmF0ZUNsYXNzfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0U3RhcnRcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHQuaW1hZ2VIZWFkIHtcblx0XHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzMDBweDtcblx0XHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0XHRcdG9iamVjdC1wb3NpdGlvbjogMCA4MCU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuY2FyZC1zcGFjZSB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAzJTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmxlZnRBbGlnbiB7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxJTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMSU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuc3BlY2lhbCB7XG5cdFx0XHRcdFx0XHRcdC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMTBweDtcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogOXB4IDdweCAyNXB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRwIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aHIge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTEwMHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQudGl0bGUge1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJOYW51bSBNeWVvbmdqb1wiLCA1MDA7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMzBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5qdW1ibzEge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMSkpLFxuXHRcdFx0XHRcdFx0XHRcdHVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzM2Mjg2MzU3NzctMTEyYjIyMzliMWM3P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjUwJnE9ODAnKTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDIwJTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PC9MYXlvdXRPdXQ+XG5cdFx0KTtcblx0fVxufVxuIl19 */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/kickstarterpath.js */"));
    }
  }]);

  return Kickstarterpath;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=kickstarterpath.js.876ae3784e344dad7f93.hot-update.js.map