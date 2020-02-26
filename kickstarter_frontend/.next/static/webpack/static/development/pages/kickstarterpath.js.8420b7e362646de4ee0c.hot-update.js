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
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Your Journey Begins here"), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1508557450" + " " + "card-space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("img", {
        src: "https://scontent.fsin3-1.fna.fbcdn.net/v/t1.0-9/41679727_735312276806906_3214309389242466304_o.jpg?_nc_cat=101&_nc_oc=AQnd91_8ITD43jaU_HMAdEq0DW0ruvnIQ1NsxWtnzcGhq33y8rCT0uKR_zEMDQHinK8&_nc_ht=scontent.fsin3-1.fna&oh=ee2b126cca63973c2256f3a43890c75a&oe=5EB4DA01",
        alt: "",
        className: "jsx-1508557450" + " " + "imageHead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-1508557450" + " " + "container leftAlign",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Your Kickstarter Pathway"), __jsx("h3", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Hi ", this.state.username, ", welcome to the amazing world of yoga! Now, you can keep track of your progress."), __jsx("hr", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1508557450" + " " + "container containerBig",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1508557450" + " " + "row ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1508557450" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPrivateClass,
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "> Your First Step"), __jsx("h2", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Private Session"), __jsx("p", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Want to get started but no idea where to start? Book your 1-on-1 with our master trainers!"), __jsx("button", {
        onClick: this.toPrivateClass,
        className: "jsx-1508557450" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Start"))), __jsx("div", {
        className: "jsx-1508557450" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "> Basics"), __jsx("h2", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Get familiar with basic poses and exercises that will make your yoga practice more fulfilling!"), __jsx("button", {
        onClick: this.toPublicClass,
        className: "jsx-1508557450" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Start"))), __jsx("div", {
        className: "jsx-1508557450" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "> Basics"), __jsx("h2", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Get familiar with basic poses and exercises that will make your yoga practice more fulfilling!"), __jsx("button", {
        onClick: this.toPublicClass,
        className: "jsx-1508557450" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Start")))), __jsx("div", {
        className: "jsx-1508557450" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1508557450" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "> Basics"), __jsx("h2", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Learn some basic poses and exercises that will make your yoga practice more fulfilling in the long run!"), __jsx("button", {
        onClick: this.toPublicClass,
        className: "jsx-1508557450" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Start"))), __jsx("div", {
        className: "jsx-1508557450" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPublicClass,
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "> Explore"), __jsx("h2", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Public Class"), __jsx("p", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "You should be a little more familiar with the basics by now. Up for a little challenge?"), __jsx("button", {
        onClick: this.toPublicClass,
        className: "jsx-1508557450" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "Start"))), __jsx("div", {
        className: "jsx-1508557450" + " " + "col-sm special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, __jsx("div", {
        onClick: this.toPrivateClass,
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "> Be Free"), __jsx("h2", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Private Session"), __jsx("p", {
        className: "jsx-1508557450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Come and recap what you have learnt with a 1-on-1 session with our master trainers!"), __jsx("button", {
        onClick: this.toPrivateClass,
        className: "jsx-1508557450" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Start")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1508557450",
        __self: this
      }, ".imageHead.jsx-1508557450{width:100%;height:300px;object-fit:cover;object-position:0 80%;}.card-space.jsx-1508557450{padding-top:3%;}.leftAlign.jsx-1508557450{text-align:left;padding-top:1%;margin-bottom:1%;}.special.jsx-1508557450{padding:15px;margin:10px;box-shadow:9px 7px 25px -10px rgba(0,0,0,0.75);background-color:white;}p.jsx-1508557450{font-size:12px;}h3.jsx-1508557450{font-size:20px;}hr.jsx-1508557450{width:1100px;}.title.jsx-1508557450{font-family:\"Nanum Myeongjo\",500;font-size:30px;}.jumbo1.jsx-1508557450{background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1533628635777-112b2239b1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');padding-bottom:20%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9raWNrc3RhcnRlcnBhdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNktNLEFBSW1CLEFBTUksQUFJQyxBQU1ILEFBT0UsQUFJQSxBQU9GLEFBSXFCLEFBSzRHLFdBMUNqSSxFQWdCRCxBQWtCYixFQTVCQSxBQWlCQSxBQUlBLENBakJnQixRQVRFLENBZ0JpQyxNQU5qQyxFQTJCRixRQXBDTyxPQVV2QixBQTJCQSxlQXBDQSxTQWV3Qix1QkFDeEIsNEdBd0JvQixtQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3NoYWhyYW5pcmFoaW1hbi9Qcm9qZWN0cy95b2dhX2tpY2tzdGFydGVyL2tpY2tzdGFydGVyX2Zyb250ZW5kL3BhZ2VzL2tpY2tzdGFydGVycGF0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXRPdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dE91dCc7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUHJpdmF0ZUNsYXNzIGZyb20gJy4vUHJpdmF0ZUNsYXNzJztcbmltcG9ydCBQdWJsaWNDbGFzcyBmcm9tICcuL1B1YmxpY0NsYXNzJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2lja3N0YXJ0ZXJwYXRoIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHVzZXJuYW1lICAgICAgICAgICAgICAgIDogJ3Rha2VyYmlrZXInLFxuXHRcdFx0Ym9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MgOiBmYWxzZSxcblx0XHRcdGJvb2tlZEZpcnN0UHVibGljQ2xhc3MgIDogZmFsc2Vcblx0XHR9O1xuXHR9XG5cblx0Ly8gY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG5cdC8vIFx0Ly8gY29uc29sZS5sb2coJ0hlbGxvJywgYm9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MpO1xuXHQvLyBcdHRoaXMuc2V0U3RhdGUoe1xuXHQvLyBcdFx0Ym9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MgOiB0cnVlXG5cdC8vIFx0fSk7XG5cdC8vIH07XG5cblx0Ly8gVG8gcmVkaXJlY3QgdG8gcHJpdmF0ZSBjbGFzc1xuXHR0b1ByaXZhdGVDbGFzcyA9ICgpID0+IHtcblx0XHRjb25zb2xlLmxvZygnQnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQnKTtcblx0XHRjb25zb2xlLmxvZyhcIkJ1dHRvbidzIHN0YXRlIGlzXCIsIHRoaXMuc3RhdGUuYm9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Ym9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MgOiB0cnVlXG5cdFx0fSk7XG5cdFx0Um91dGVyLnB1c2goJy9Qcml2YXRlQ2xhc3MnKTtcblx0XHQvLyA8UHJpdmF0ZUNsYXNzIGJvb2tlZEZpcnN0Q2xhc3M9e3RoaXMuYm9va2VkRmlyc3RDbGFzc30gLz47XG5cdH07XG5cblx0Ly8gVG8gcmVkaXJlY3QgdG8gcHVibGljIGNsYXNzXG5cdHRvUHVibGljQ2xhc3MgPSAoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coJ0J1dHRvbiBoYXMgYmVlbiBjbGlja2VkJyk7XG5cdFx0Y29uc29sZS5sb2coXCJCdXR0b24ncyB0byBwdWJsaWMgY2xhc3Mgc3RhdGUgaXNcIiwgdGhpcy5zdGF0ZS5ib29rZWRGaXJzdFB1YmxpY0NsYXNzKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGJvb2tlZEZpcnN0UHVibGljQ2xhc3MgOiB0cnVlXG5cdFx0fSk7XG5cdFx0Um91dGVyLnB1c2goJy9QdWJsaWNDbGFzcycpO1xuXHRcdC8vIDxQcml2YXRlQ2xhc3MgYm9va2VkRmlyc3RDbGFzcz17dGhpcy5ib29rZWRGaXJzdENsYXNzfSAvPjtcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgYm9va2VkUHJpdmF0ZUZpcnN0Q2xhc3MgPSB0aGlzLnN0YXRlLmJvb2tlZFByaXZhdGVGaXJzdENsYXNzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXRPdXQgdGl0bGU9XCJLaWNrc3RhcnRlciBQcm9maWxlXCI+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5Zb3VyIEpvdXJuZXkgQmVnaW5zIGhlcmU8L3RpdGxlPlxuXHRcdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwianVtYm8xXCI+ICovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc3BhY2VcIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZUhlYWRcIlxuXHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9zY29udGVudC5mc2luMy0xLmZuYS5mYmNkbi5uZXQvdi90MS4wLTkvNDE2Nzk3MjdfNzM1MzEyMjc2ODA2OTA2XzMyMTQzMDkzODkyNDI0NjYzMDRfby5qcGc/X25jX2NhdD0xMDEmX25jX29jPUFRbmQ5MV84SVRENDNqYVVfSE1BZEVxMERXMHJ1dm5JUTFOc3hXdG56Y0docTMzeThyQ1QwdUtSX3pFTURRSGluSzgmX25jX2h0PXNjb250ZW50LmZzaW4zLTEuZm5hJm9oPWVlMmIxMjZjY2E2Mzk3M2MyMjU2ZjNhNDM4OTBjNzVhJm9lPTVFQjREQTAxXCJcblx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBsZWZ0QWxpZ25cIj5cblx0XHRcdFx0XHRcdDxoMT5Zb3VyIEtpY2tzdGFydGVyIFBhdGh3YXk8L2gxPlxuXHRcdFx0XHRcdFx0PGgzPlxuXHRcdFx0XHRcdFx0XHRIaSB7dGhpcy5zdGF0ZS51c2VybmFtZX0sIHdlbGNvbWUgdG8gdGhlIGFtYXppbmcgd29ybGQgb2YgeW9nYSEgTm93LCB5b3UgY2FuIGtlZXAgdHJhY2sgb2Zcblx0XHRcdFx0XHRcdFx0eW91ciBwcm9ncmVzcy5cblx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXJCaWdcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IFwiPlxuXHRcdFx0XHRcdFx0XHR7LyogRmlyc3Qgcm93IGZpcnN0IGJveCAgKi99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHNwZWNpYWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9e3RoaXMudG9Qcml2YXRlQ2xhc3N9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2Pj4gWW91ciBGaXJzdCBTdGVwPC9oNj5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5Qcml2YXRlIFNlc3Npb248L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFdhbnQgdG8gZ2V0IHN0YXJ0ZWQgYnV0IG5vIGlkZWEgd2hlcmUgdG8gc3RhcnQ/IEJvb2sgeW91ciAxLW9uLTEgd2l0aCBvdXIgbWFzdGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRyYWluZXJzIVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt0aGlzLnRvUHJpdmF0ZUNsYXNzfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0U3RhcnRcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHR7LyogRmlyc3Qgcm93IHNlY29uZCBib3ggICovfVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbSBzcGVjaWFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBvbkNsaWNrPXt0aGlzLnRvUHVibGljQ2xhc3N9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2Pj4gQmFzaWNzPC9oNj5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5QdWJsaWMgQ2xhc3M8L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdEdldCBmYW1pbGlhciB3aXRoIGJhc2ljIHBvc2VzIGFuZCBleGVyY2lzZXMgdGhhdCB3aWxsIG1ha2UgeW91ciB5b2dhIHByYWN0aWNlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vcmUgZnVsZmlsbGluZyFcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy50b1B1YmxpY0NsYXNzfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0U3RhcnRcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHR7LyogRmlyc3Qgcm93IHRoaXJkIGJveCAgKi99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHNwZWNpYWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9e3RoaXMudG9QdWJsaWNDbGFzc30+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDY+PiBCYXNpY3M8L2g2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPlB1YmxpYyBDbGFzczwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0R2V0IGZhbWlsaWFyIHdpdGggYmFzaWMgcG9zZXMgYW5kIGV4ZXJjaXNlcyB0aGF0IHdpbGwgbWFrZSB5b3VyIHlvZ2EgcHJhY3RpY2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0bW9yZSBmdWxmaWxsaW5nIVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt0aGlzLnRvUHVibGljQ2xhc3N9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTdGFydFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdHsvKiBTZWNvbmQgcm93IGZpcnN0IGJveCAgKi99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtIHNwZWNpYWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9e3RoaXMudG9QdWJsaWNDbGFzc30+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDY+PiBCYXNpY3M8L2g2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPlB1YmxpYyBDbGFzczwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0TGVhcm4gc29tZSBiYXNpYyBwb3NlcyBhbmQgZXhlcmNpc2VzIHRoYXQgd2lsbCBtYWtlIHlvdXIgeW9nYSBwcmFjdGljZSBtb3JlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZ1bGZpbGxpbmcgaW4gdGhlIGxvbmcgcnVuIVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt0aGlzLnRvUHVibGljQ2xhc3N9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTdGFydFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdHsvKiBTZWNvbmQgcm93IHNlY29uZCBib3ggICovfVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbSBzcGVjaWFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBvbkNsaWNrPXt0aGlzLnRvUHVibGljQ2xhc3N9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2Pj4gRXhwbG9yZTwvaDY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDI+UHVibGljIENsYXNzPC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRZb3Ugc2hvdWxkIGJlIGEgbGl0dGxlIG1vcmUgZmFtaWxpYXIgd2l0aCB0aGUgYmFzaWNzIGJ5IG5vdy4gVXAgZm9yIGEgbGl0dGxlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoYWxsZW5nZT9cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy50b1B1YmxpY0NsYXNzfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0U3RhcnRcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHR7LyogU2Vjb25kIHJvdyB0aGlyZCBib3ggICovfVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbSBzcGVjaWFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBvbkNsaWNrPXt0aGlzLnRvUHJpdmF0ZUNsYXNzfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoNj4+IEJlIEZyZWU8L2g2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPlByaXZhdGUgU2Vzc2lvbjwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Q29tZSBhbmQgcmVjYXAgd2hhdCB5b3UgaGF2ZSBsZWFybnQgd2l0aCBhIDEtb24tMSBzZXNzaW9uIHdpdGggb3VyIG1hc3RlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFpbmVycyFcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy50b1ByaXZhdGVDbGFzc30+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFN0YXJ0XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0LmltYWdlSGVhZCB7XG5cdFx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMzAwcHg7XG5cdFx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRcdFx0XHRvYmplY3QtcG9zaXRpb246IDAgODAlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmNhcmQtc3BhY2Uge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMyU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5sZWZ0QWxpZ24ge1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMSU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDElO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnNwZWNpYWwge1xuXHRcdFx0XHRcdFx0XHQvLyBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDlweCA3cHggMjVweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyAuY29udGFpbmVyQmlnIHtcblx0XHRcdFx0XHRcdC8vIFx0Ym9yZGVyOiAycHggc29saWQgcmVkO1xuXHRcdFx0XHRcdFx0Ly8gfVxuXG5cdFx0XHRcdFx0XHRociB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMTAwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC50aXRsZSB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIk5hbnVtIE15ZW9uZ2pvXCIsIDUwMDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lmp1bWJvMSB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4xKSksXG5cdFx0XHRcdFx0XHRcdFx0dXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzMzYyODYzNTc3Ny0xMTJiMjIzOWIxYzc/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE2NTAmcT04MCcpO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMjAlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L0xheW91dE91dD5cblx0XHQpO1xuXHR9XG59XG4iXX0= */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/kickstarterpath.js */"));
    }
  }]);

  return Kickstarterpath;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=kickstarterpath.js.8420b7e362646de4ee0c.hot-update.js.map