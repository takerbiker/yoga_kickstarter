webpackHotUpdate("static/development/pages/Kickstarterpathlogin.js",{

/***/ "./pages/Kickstarterpathlogin.js":
/*!***************************************!*\
  !*** ./pages/Kickstarterpathlogin.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Kickstarterpathlogin; });
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







var _jsxFileName = "/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/Kickstarterpathlogin.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;








var Kickstarterpathlogin =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Kickstarterpathlogin, _Component);

  function Kickstarterpathlogin(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Kickstarterpathlogin);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Kickstarterpathlogin).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toPrivateClass", function () {
      console.log('Button has been clicked');
      console.log("Button's state is", _this.state.bookedPrivateFirstClass);

      _this.setState({
        bookedPrivateFirstClass: true
      });

      next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/PrivateClass');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toPublicClass", function () {
      console.log('Button has been clicked');
      console.log("Button's to public class state is", _this.state.bookedFirstPublicClass);

      _this.setState({
        bookedFirstPublicClass: true
      });

      next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/PublicClass');
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


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Kickstarterpathlogin, [{
    key: "render",
    value: function render() {
      var bookedPrivateFirstClass = this.state.bookedPrivateFirstClass;
      return __jsx(_components_MyLayoutOut__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Kickstarter Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Your Journey Begins here"), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-4081902434" + " " + "card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("img", {
        src: "https://scontent.fsin3-1.fna.fbcdn.net/v/t1.0-9/41679727_735312276806906_3214309389242466304_o.jpg?_nc_cat=101&_nc_oc=AQnd91_8ITD43jaU_HMAdEq0DW0ruvnIQ1NsxWtnzcGhq33y8rCT0uKR_zEMDQHinK8&_nc_ht=scontent.fsin3-1.fna&oh=ee2b126cca63973c2256f3a43890c75a&oe=5EB4DA01",
        alt: "",
        className: "jsx-4081902434" + " " + "imageHead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-4081902434" + " " + "container leftAlign",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Your Kickstarter Pathway"), __jsx("h3", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Hi ", this.state.username, ", welcome to the amazing world of yoga! Now, you can keep track of your progress."), __jsx("hr", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-4081902434" + " " + "container containerBig",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-4081902434" + " " + "row ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-4081902434" + " " + "col-sm special specialColor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "> Your First Step"), __jsx("h2", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Private Session"), __jsx("p", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Want to get started but no idea where to start? Book your 1-on-1 with our master trainers!"), __jsx("div", {
        className: "jsx-4081902434" + " " + "box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("b", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Booked:")), __jsx("div", {
        className: "jsx-4081902434" + " " + "box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("b", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Tuesdays 7pm - 8pm with Angie")))), __jsx("div", {
        className: "jsx-4081902434" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "> Basics"), __jsx("h2", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Get familiar with basic poses and exercises that will make your yoga practice more fulfilling!"), __jsx("button", {
        onClick: this.toPublicClass,
        className: "jsx-4081902434" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Start"))), __jsx("div", {
        className: "jsx-4081902434" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "> Basics"), __jsx("h2", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Get familiar with basic poses and exercises that will make your yoga practice more fulfilling!"), __jsx("button", {
        onClick: this.toPublicClass,
        className: "jsx-4081902434" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Start")))), __jsx("div", {
        className: "jsx-4081902434" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-4081902434" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "> Basics"), __jsx("h2", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Learn some basic poses and exercises that will make your yoga practice more fulfilling in the long run!"), __jsx("button", {
        onClick: this.toPublicClass,
        className: "jsx-4081902434" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Start"))), __jsx("div", {
        className: "jsx-4081902434" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "> Explore"), __jsx("h2", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "You should be a little more familiar with the basics by now. Up for a little challenge?"), __jsx("button", {
        onClick: this.toPublicClass,
        className: "jsx-4081902434" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "Start"))), __jsx("div", {
        className: "jsx-4081902434" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPrivateClass,
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "> Be Free"), __jsx("h2", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Private Session"), __jsx("p", {
        className: "jsx-4081902434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Come and recap what you have learnt with a 1-on-1 session with our master trainers!"), __jsx("button", {
        onClick: this.toPrivateClass,
        className: "jsx-4081902434" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Start")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4081902434",
        __self: this
      }, ".imageHead.jsx-4081902434{width:100%;height:300px;object-fit:cover;object-position:0 80%;}.card-space.jsx-4081902434{padding-top:3%;}.leftAlign.jsx-4081902434{text-align:left;padding-top:1%;margin-bottom:1%;}.special.jsx-4081902434{padding:15px;margin:10px;box-shadow:9px 7px 25px -10px rgba(0,0,0,0.75);}.specialColor.jsx-4081902434{background-color:#1e9dba;}p.jsx-4081902434{font-size:12px;}h3.jsx-4081902434{font-size:20px;}hr.jsx-4081902434{width:1100px;}.box.jsx-4081902434{display:inline;margin:2px;padding:2px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9LaWNrc3RhcnRlcnBhdGhsb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0TU0sQUFJbUIsQUFNSSxBQUlDLEFBTUgsQUFLWSxBQUlWLEFBSUEsQUFPRixBQUdFLFdBdENGLEVBZ0JELEFBb0JiLEVBOUJBLEFBbUJBLEFBSUEsQUFVWSxDQTdCSSxRQVRFLENBZ0JpQyxBQUluRCxDQW1CYSxLQTdCSyxPQStCTCxHQXhDVSxPQVV2QixFQWdDQSxhQXpDQSxTQWVBIiwiZmlsZSI6Ii9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9LaWNrc3RhcnRlcnBhdGhsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXRPdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dE91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFByaXZhdGVDbGFzcyBmcm9tICcuL1ByaXZhdGVDbGFzcyc7XG5pbXBvcnQgUHVibGljQ2xhc3MgZnJvbSAnLi9QdWJsaWNDbGFzcyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpY2tzdGFydGVycGF0aGxvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHVzZXJuYW1lICAgICAgICAgICAgICAgIDogJ3Rha2VyYmlrZXInLFxuXHRcdFx0Ym9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MgOiBmYWxzZSxcblx0XHRcdGJvb2tlZEZpcnN0UHVibGljQ2xhc3MgIDogZmFsc2Vcblx0XHR9O1xuXHR9XG5cblx0Ly8gY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG5cdC8vIFx0Ly8gY29uc29sZS5sb2coJ0hlbGxvJywgYm9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MpO1xuXHQvLyBcdHRoaXMuc2V0U3RhdGUoe1xuXHQvLyBcdFx0Ym9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MgOiB0cnVlXG5cdC8vIFx0fSk7XG5cdC8vIH07XG5cblx0Ly8gVG8gcmVkaXJlY3QgdG8gcHJpdmF0ZSBjbGFzc1xuXHR0b1ByaXZhdGVDbGFzcyA9ICgpID0+IHtcblx0XHRjb25zb2xlLmxvZygnQnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQnKTtcblx0XHRjb25zb2xlLmxvZyhcIkJ1dHRvbidzIHN0YXRlIGlzXCIsIHRoaXMuc3RhdGUuYm9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Ym9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MgOiB0cnVlXG5cdFx0fSk7XG5cdFx0Um91dGVyLnB1c2goJy9Qcml2YXRlQ2xhc3MnKTtcblx0fTtcblxuXHQvLyBUbyByZWRpcmVjdCB0byBwdWJsaWMgY2xhc3Ncblx0dG9QdWJsaWNDbGFzcyA9ICgpID0+IHtcblx0XHRjb25zb2xlLmxvZygnQnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQnKTtcblx0XHRjb25zb2xlLmxvZyhcIkJ1dHRvbidzIHRvIHB1YmxpYyBjbGFzcyBzdGF0ZSBpc1wiLCB0aGlzLnN0YXRlLmJvb2tlZEZpcnN0UHVibGljQ2xhc3MpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Ym9va2VkRmlyc3RQdWJsaWNDbGFzcyA6IHRydWVcblx0XHR9KTtcblx0XHRSb3V0ZXIucHVzaCgnL1B1YmxpY0NsYXNzJyk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGJvb2tlZFByaXZhdGVGaXJzdENsYXNzID0gdGhpcy5zdGF0ZS5ib29rZWRQcml2YXRlRmlyc3RDbGFzcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0T3V0IHRpdGxlPVwiS2lja3N0YXJ0ZXIgUHJvZmlsZVwiPlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+WW91ciBKb3VybmV5IEJlZ2lucyBoZXJlPC90aXRsZT5cblx0XHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLXNwYWNlXCI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VIZWFkXCJcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vc2NvbnRlbnQuZnNpbjMtMS5mbmEuZmJjZG4ubmV0L3YvdDEuMC05LzQxNjc5NzI3XzczNTMxMjI3NjgwNjkwNl8zMjE0MzA5Mzg5MjQyNDY2MzA0X28uanBnP19uY19jYXQ9MTAxJl9uY19vYz1BUW5kOTFfOElURDQzamFVX0hNQWRFcTBEVzBydXZuSVExTnN4V3RuemNHaHEzM3k4ckNUMHVLUl96RU1EUUhpbks4Jl9uY19odD1zY29udGVudC5mc2luMy0xLmZuYSZvaD1lZTJiMTI2Y2NhNjM5NzNjMjI1NmYzYTQzODkwYzc1YSZvZT01RUI0REEwMVwiXG5cdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbGVmdEFsaWduXCI+XG5cdFx0XHRcdFx0XHQ8aDE+WW91ciBLaWNrc3RhcnRlciBQYXRod2F5PC9oMT5cblx0XHRcdFx0XHRcdDxoMz5cblx0XHRcdFx0XHRcdFx0SGkge3RoaXMuc3RhdGUudXNlcm5hbWV9LCB3ZWxjb21lIHRvIHRoZSBhbWF6aW5nIHdvcmxkIG9mIHlvZ2EhIE5vdywgeW91IGNhbiBrZWVwIHRyYWNrIG9mXG5cdFx0XHRcdFx0XHRcdHlvdXIgcHJvZ3Jlc3MuXG5cdFx0XHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyQmlnXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cblx0XHRcdFx0XHRcdFx0ey8qIEZpcnN0IHJvdyBmaXJzdCBib3ggICovfVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbSBzcGVjaWFsIHNwZWNpYWxDb2xvclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDY+PiBZb3VyIEZpcnN0IFN0ZXA8L2g2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPlByaXZhdGUgU2Vzc2lvbjwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0V2FudCB0byBnZXQgc3RhcnRlZCBidXQgbm8gaWRlYSB3aGVyZSB0byBzdGFydD8gQm9vayB5b3VyIDEtb24tMSB3aXRoIG91ciBtYXN0ZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhaW5lcnMhXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Yj5Cb29rZWQ6PC9iPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Yj5UdWVzZGF5cyA3cG0gLSA4cG0gd2l0aCBBbmdpZTwvYj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHR7LyogRmlyc3Qgcm93IHNlY29uZCBib3ggICovfVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbSBzcGVjaWFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBvbkNsaWNrPXt0aGlzLnRvUHVibGljQ2xhc3N9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2Pj4gQmFzaWNzPC9oNj5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5QdWJsaWMgQ2xhc3M8L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdEdldCBmYW1pbGlhciB3aXRoIGJhc2ljIHBvc2VzIGFuZCBleGVyY2lzZXMgdGhhdCB3aWxsIG1ha2UgeW91ciB5b2dhIHByYWN0aWNlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vcmUgZnVsZmlsbGluZyFcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy50b1B1YmxpY0NsYXNzfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0U3RhcnRcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHR7LyogRmlyc3Qgcm93IHRoaXJkIGJveCAgKi99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHNwZWNpYWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9e3RoaXMudG9QdWJsaWNDbGFzc30+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDY+PiBCYXNpY3M8L2g2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPlB1YmxpYyBDbGFzczwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0R2V0IGZhbWlsaWFyIHdpdGggYmFzaWMgcG9zZXMgYW5kIGV4ZXJjaXNlcyB0aGF0IHdpbGwgbWFrZSB5b3VyIHlvZ2EgcHJhY3RpY2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0bW9yZSBmdWxmaWxsaW5nIVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt0aGlzLnRvUHVibGljQ2xhc3N9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTdGFydFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdHsvKiBTZWNvbmQgcm93IGZpcnN0IGJveCAgKi99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHNwZWNpYWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9e3RoaXMudG9QdWJsaWNDbGFzc30+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDY+PiBCYXNpY3M8L2g2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPlB1YmxpYyBDbGFzczwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0TGVhcm4gc29tZSBiYXNpYyBwb3NlcyBhbmQgZXhlcmNpc2VzIHRoYXQgd2lsbCBtYWtlIHlvdXIgeW9nYSBwcmFjdGljZSBtb3JlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZ1bGZpbGxpbmcgaW4gdGhlIGxvbmcgcnVuIVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt0aGlzLnRvUHVibGljQ2xhc3N9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTdGFydFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdHsvKiBTZWNvbmQgcm93IHNlY29uZCBib3ggICovfVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbSBzcGVjaWFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBvbkNsaWNrPXt0aGlzLnRvUHVibGljQ2xhc3N9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2Pj4gRXhwbG9yZTwvaDY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDI+UHVibGljIENsYXNzPC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRZb3Ugc2hvdWxkIGJlIGEgbGl0dGxlIG1vcmUgZmFtaWxpYXIgd2l0aCB0aGUgYmFzaWNzIGJ5IG5vdy4gVXAgZm9yIGEgbGl0dGxlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoYWxsZW5nZT9cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy50b1B1YmxpY0NsYXNzfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0U3RhcnRcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHR7LyogU2Vjb25kIHJvdyB0aGlyZCBib3ggICovfVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbSBzcGVjaWFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBvbkNsaWNrPXt0aGlzLnRvUHJpdmF0ZUNsYXNzfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoNj4+IEJlIEZyZWU8L2g2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPlByaXZhdGUgU2Vzc2lvbjwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Q29tZSBhbmQgcmVjYXAgd2hhdCB5b3UgaGF2ZSBsZWFybnQgd2l0aCBhIDEtb24tMSBzZXNzaW9uIHdpdGggb3VyIG1hc3RlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFpbmVycyFcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy50b1ByaXZhdGVDbGFzc30+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFN0YXJ0XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0ey8qIDx1bCBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9Qcml2YXRlQ2xhc3NcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9Qcml2YXRlQ2xhc3N9IGNsYXNzTmFtZT1cImNsYXNzLWJveFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0UHJpdmF0ZSBDbGFzc1xuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwiXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvUHJpdmF0ZUNsYXNzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvUHJpdmF0ZUNsYXNzfSBjbGFzc05hbWU9XCJjbGFzcy1ib3hcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFByaXZhdGUgQ2xhc3Ncblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPiAqL31cblx0XHRcdFx0ey8qIDwvZGl2PiAqL31cblxuXHRcdFx0XHR7LyogPExpbmsgaHJlZj1cIi9Qcml2YXRlQ2xhc3NcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9Qcml2YXRlQ2xhc3N9IGNsYXNzTmFtZT1cImNsYXNzLWJveFwiPlxuXHRcdFx0XHRcdFx0UHJpdmF0ZSBDbGFzc1xuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQ8TGluayBocmVmPVwiL1B1YmxpY0NsYXNzXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvUHVibGljQ2xhc3N9IGNsYXNzTmFtZT1cImNsYXNzLWJveFwiPlxuXHRcdFx0XHRcdFx0UHVibGljIENsYXNzXG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvTGluaz4gKi99XG5cblx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0LmltYWdlSGVhZCB7XG5cdFx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMzAwcHg7XG5cdFx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRcdFx0XHRvYmplY3QtcG9zaXRpb246IDAgODAlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmNhcmQtc3BhY2Uge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMyU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5sZWZ0QWxpZ24ge1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMSU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDElO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnNwZWNpYWwge1xuXHRcdFx0XHRcdFx0XHQvLyBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDlweCA3cHggMjVweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnNwZWNpYWxDb2xvciB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMxZTlkYmE7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHAge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gLmNvbnRhaW5lckJpZyB7XG5cdFx0XHRcdFx0XHQvLyBcdGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcblx0XHRcdFx0XHRcdC8vIH1cblxuXHRcdFx0XHRcdFx0aHIge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTEwMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmJveCB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAycHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDJweDtcblx0XHRcdFx0XHRcdFx0Ly8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvTGF5b3V0T3V0PlxuXHRcdCk7XG5cdH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/Kickstarterpathlogin.js */"));
    }
  }]);

  return Kickstarterpathlogin;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=Kickstarterpathlogin.js.91f2f275162696d06a5c.hot-update.js.map