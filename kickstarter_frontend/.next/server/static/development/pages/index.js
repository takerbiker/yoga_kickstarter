module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import Link from 'next/link';
// import Head from 'next/head';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import Layout from '../components/MyLayout';
// // const linkStyle = {
// // 	marginRight : 15
// // };
// const Header = () => (
// 	<Layout>
// 	<nav className="navbar navbar-expand-md navbar-dark fixed-top">
// 		<Head>
// 			<title>Your Yoga Journey</title>
// 			<link
// 				rel="stylesheet"
// 				href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
// 				integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
// 				crossorigin="anonymous"
// 			/>
// 		</Head>
// 		<a className="navbar-brand" href="/">
// 			Yoga Kickstarter
// 			</a>
// 		<Link href="/">
// 			<a style={linkStyle}>Home</a>
// 		</Link>
// 		<Link href="/about">
// 			<a style={linkStyle}>About</a>
// 		</Link>
// 		<Link href="/yogaexercises">
// 			<a style={linkStyle}>Yoga Exercises for Beginners</a>
// 		</Link>
// 		<Link href="/kickstarterpath">
// 			<a style={linkStyle}>Your kickstarter journey</a>
// 		</Link>
// 		<Link href="/afterclassreview">
// 			<a style={linkStyle}>After class review. (To delete)</a>
// 		</Link>
// 		<Link href="/mindbodyonline">
// 			<a style={linkStyle}>Mindbody online API link</a>
// 		</Link>
// 		{/* <p>Above: Part of header</p> */}
// 	</nav>
// 	</Layout>
// );
// export default Header;

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/components/MyLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // const layoutStyle = {
// 	margin  : 20,
// 	padding : 20,
// 	border  : '1px solid #DDD'
// };

const Layout = (props, title) => // <div style={layoutStyle}>
__jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Yoga Kickstarter"), __jsx("link", {
  rel: "stylesheet",
  href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
  integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
  crossOrigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/components/Navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Navbar extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "jsx-3991514691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-3991514691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Your Yoga Journey"), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
      crossorigin: "anonymous",
      className: "jsx-3991514691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })), __jsx("nav", {
      className: "jsx-3991514691" + " " + "navbar navbar-expand-md navbar-dark fixed-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      className: "navbar-brand",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3991514691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Yoga Kickstarter")), __jsx("button", {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarsExampleDefault",
      "aria-controls": "navbarsExampleDefault",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      className: "jsx-3991514691" + " " + "navbar-toggler ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-3991514691" + " " + "navbar-toggler-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    })), __jsx("div", {
      id: "navbarsExampleDefault",
      className: "jsx-3991514691" + " " + "collapse navbar-collapse",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("ul", {
      className: "jsx-3991514691" + " " + "navbar-nav ml-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("li", {
      className: "jsx-3991514691" + " " + "nav-item active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3991514691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Home"))), __jsx("li", {
      className: "jsx-3991514691" + " " + "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/about",
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3991514691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "About"))), __jsx("li", {
      className: "jsx-3991514691" + " " + "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/yogaexercises",
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3991514691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Yoga Exercises"))), __jsx("li", {
      className: "jsx-3991514691" + " " + "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/kickstarterpath",
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3991514691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Kickstarter Path"))), __jsx("li", {
      className: "jsx-3991514691" + " " + "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/afterclassreview",
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3991514691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "After class review(delete)"))), __jsx("li", {
      className: "jsx-3991514691" + " " + "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/mindbodyonline",
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3991514691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "Mindbody API"))), __jsx("li", {
      className: "jsx-3991514691" + " " + "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/login",
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3991514691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Log In")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3991514691",
      __self: this
    }, "*.jsx-3991514691{color:black;text-align:right;font-family:\"Open Sans\",sans-serif;font-size:1rem;text-transform:lowercase;padding:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9jb21wb25lbnRzL05hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2R3dCLEFBRzZCLFlBQ0ssaUJBQ21CLG1DQUNyQixlQUNVLHlCQUNiLFlBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9jb21wb25lbnRzL05hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5Zb3VyIFlvZ2EgSm91cm5leTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmtcblx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuXHRcdFx0XHRpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiXG5cdFx0XHRcdGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcblx0XHRcdCAgICAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLW1kIG5hdmJhci1kYXJrIGZpeGVkLXRvcFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhPllvZ2EgS2lja3N0YXJ0ZXI8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlciBcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhcnNFeGFtcGxlRGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJzRXhhbXBsZURlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhcnNFeGFtcGxlRGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIveW9nYWV4ZXJjaXNlc1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPllvZ2EgRXhlcmNpc2VzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2tpY2tzdGFydGVycGF0aFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPktpY2tzdGFydGVyIFBhdGg8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWZ0ZXJjbGFzc3Jldmlld1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFmdGVyIGNsYXNzIHJldmlldyhkZWxldGUpPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21pbmRib2R5b25saW5lXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+TWluZGJvZHkgQVBJPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+TG9nIEluPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUbyB0b2dnbGUgbG9nIGluIG9yIGxvZyBvdXQgYnV0dG9uICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7dGhpcy5wcm9wcy5jdXJyZW50VXNlciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMudG9Mb2dvdXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkxvZ291dDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkxvZyBJbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX0gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBmb3Igc2lnbnVwICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHt0aGlzLnByb3BzLmN1cnJlbnRVc2VyID8gKCcnXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TaWduIFVwPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxuXG5cblxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBgfVxuXG5cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICB7LyogPHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAycHggc29saWQgb3JhbmdlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAubmF2YmFyLWRhcmsgLm5hdmJhci1icmFuZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogb3JhbmdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUGVybWFuZW50IE1hcmtlclwiLCBjdXJzaXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0YH08L3N0eWxlPiAqL31cblxuXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdfQ== */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/components/Navbar.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/adminprofile.js":
/*!*******************************!*\
  !*** ./pages/adminprofile.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminProfile; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/adminprofile.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import Header from '../components/Header';



class AdminProfile extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Admin Profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-3435744911",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Admin Profile"), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
      crossorigin: "anonymous",
      className: "jsx-3435744911",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-3435744911" + " " + "container card-space",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Admin Profile"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3435744911",
      __self: this
    }, ".card-space.jsx-3435744911{padding-top:5%;padding-bottom:5%;text-align:center;}li.jsx-3435744911{list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9hZG1pbnByb2ZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JNLEFBSXVCLEFBT0MsZUFORSxDQU9uQixpQkFObUIsa0JBRW5CIiwiZmlsZSI6Ii9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9hZG1pbnByb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZG1pblByb2ZpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQgdGl0bGU9XCJBZG1pbiBQcm9maWxlXCI+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5BZG1pbiBQcm9maWxlPC90aXRsZT5cblx0XHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcblx0XHRcdFx0XHRcdGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCJcblx0XHRcdFx0XHRcdGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2FyZC1zcGFjZVwiPkFkbWluIFByb2ZpbGU8L2Rpdj5cblxuXHRcdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHQuY2FyZC1zcGFjZSB7XG5cdFx0XHRcdFx0XHRcdC8vIG1hcmdpbi10b3A6IDUwcHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiA1JTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDUlO1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG59XG4iXX0= */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/adminprofile.js */"));
  }

}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./pages/login.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import Link from 'next/link';



class Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "userState", user => {
      this.setState({
        currentUser: user
      }, () => {
        console.log('user logged in');
      });
    });

    _defineProperty(this, "toLogout", () => {
      this.setState({
        currentUser: ''
      });
    });

    _defineProperty(this, "toDelete", () => {
      this.setState({
        delete: true
      });
    });

    this.state = {
      currentUser: '',
      delete: false
    };
  }

  render() {
    return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-137108301",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Your Yoga Journey"), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
      crossOrigin: "anonymous",
      className: "jsx-137108301",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-137108301" + " " + "container card-space",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-137108301" + " " + "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("img", {
      src: "https://media.timeout.com/images/104103651/630/472/image.jpg",
      className: "jsx-137108301" + " " + "col-sm float-left leftImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-137108301" + " " + "col-sm rightImage card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("img", {
      src: "data:image/png;base64,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",
      width: "120",
      height: "120",
      className: "jsx-137108301" + " " + "card-img-top logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), __jsx("form", {
      onSubmit: this.handleSubmit,
      className: "jsx-137108301" + " " + "form-signin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("img", {
      src: "",
      alt: "",
      width: "120",
      height: "120",
      className: "jsx-137108301" + " " + "mb-4 logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), __jsx("h6", {
      className: "jsx-137108301" + " " + "h3 mb-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "Your Yoga Journey Begins here!"), __jsx("label", {
      htmlFor: "username",
      className: "jsx-137108301" + " " + "sr-only",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "Username"), __jsx("br", {
      className: "jsx-137108301",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), __jsx("input", {
      type: "username",
      id: "username",
      name: "username",
      placeholder: "Username",
      required: "",
      autoFocus: "",
      value: this.state.username,
      onChange: this.handleChange,
      className: "jsx-137108301" + " " + "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "password",
      className: "jsx-137108301" + " " + "sr-only",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Password"), __jsx("input", {
      type: "password",
      id: "password",
      name: "name",
      placeholder: "Password",
      required: "",
      value: this.state.password,
      onChange: this.handleChange,
      className: "jsx-137108301" + " " + "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), __jsx("button", {
      type: "submit",
      className: "jsx-137108301" + " " + "btn btn-lg btn-primary btn-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "Sign in"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "137108301",
      __self: this
    }, ".col-sm.jsx-137108301{height:700px;width:100%;}.card-space.jsx-137108301{margin-top:3%;}.logo.jsx-137108301{display:block;margin:0 auto;}.rightImage.jsx-137108301{top:50%;padding:30px;margin:5px;box-shadow:9px 7px 25px -10px rgba(0,0,0,0.55);}img.jsx-137108301{object-fit:cover;object-position:0 70%;}.leftImage.jsx-137108301{margin-right:10px;padding:5px;}.jumbo1.jsx-137108301{background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));background-size:contain;background-position:10% 30%;margin-top:3%;padding-bottom:20%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SGdCLEFBR29CLEFBT0MsQUFJQSxBQVlOLEFBUVMsQUFLQyxBQUtpRCxRQWpCdEQsS0F2QkYsQ0FPWixBQUllLEdBb0JRLENBS1YsR0FYRCxHQXRCWixJQVNBLEVBeUJBLEVBWG1ELE9BTW5ELHFCQVN5QixtQkFkekIsS0FlNkIsNEJBRWQsY0FDSyxtQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3NoYWhyYW5pcmFoaW1hbi9Qcm9qZWN0cy95b2dhX2tpY2tzdGFydGVyL2tpY2tzdGFydGVyX2Zyb250ZW5kL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2xvZ2luJztcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGN1cnJlbnRVc2VyIDogJycsXG5cdFx0XHRkZWxldGUgICAgICA6IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdHVzZXJTdGF0ZSA9ICh1c2VyKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZShcblx0XHRcdHtcblx0XHRcdFx0Y3VycmVudFVzZXIgOiB1c2VyXG5cdFx0XHR9LFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygndXNlciBsb2dnZWQgaW4nKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9O1xuXG5cdHRvTG9nb3V0ID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VXNlcjogJycgfSk7XG5cdH07XG5cblx0dG9EZWxldGUgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGRlbGV0ZTogdHJ1ZSB9KTtcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQgdGl0bGU9XCJIb21lXCI+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5Zb3VyIFlvZ2EgSm91cm5leTwvdGl0bGU+XG5cdFx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG5cdFx0XHRcdFx0XHRpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiXG5cdFx0XHRcdFx0XHRjcm9zc09yaWdpbj1cImFub255bW91c1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9IZWFkPlxuXG5cdFx0XHRcdHsvKiBKdW1ibyBkZXNpZ24gICovfVxuXHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJqdW1ibzFcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNCBqdW1ibzF3b3Jkc1wiPkltYWdlPC9oMT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+ICovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjYXJkLXNwYWNlXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdHsvKiBMZWZ0LXNpZGUgICovfVxuXHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL21lZGlhLnRpbWVvdXQuY29tL2ltYWdlcy8xMDQxMDM2NTEvNjMwLzQ3Mi9pbWFnZS5qcGdcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtc20gZmxvYXQtbGVmdCBsZWZ0SW1hZ2VcIlxuXHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0ey8qIFJpZ2h0IFNpZGUgICovfVxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20gcmlnaHRJbWFnZSBjYXJkXCI+XG5cdFx0XHRcdFx0XHRcdHsvKiBTaWduIFVwICovfVxuXHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wIGxvZ29cIlxuXHRcdFx0XHRcdFx0XHRcdHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBT1VBQUFEY0NBTUFBQUM0WXBaQkFBQUFpbEJNVkVYLy8vOEFBQUQ4L1B6NStmbjYrdnIwOVBUdjcrL3A2ZW5iMjl2dTd1N3o4L1BvNk9qajQrTVVGQlRmMzkvTnpjMVJVVkd2cjY5cGFXa2ZIeCtLaW9vNk9qcTl2YjNFeE1RdExTM1IwZEVuSnlkL2YzOFlHQmhpWW1LbnA2ZENRa0oyZG5hU2twS2NuSnhkWFYweU1qSkZSVVZVVkZRTEN3dU5qWTIzdDdkb2FHaGVYbDU1ZVhtaW9xSjRMZHJXQUFBVkVFbEVRVlI0bk4wZGFidXBYRlFsa3RLZ1VXaFFrcXYvLy9kdWU2MGRvUnhVaDlQNjhEN3Z4V0d2MWp6dTBlajNnZVVrNjZBdVU0WmhsdnZRWlQ5d2hINkI1V2NMTzllZDFOa0hSbmdJZklZSnBwOCtWSmZBaXRPRm9vVzZuNmJtTWJUbkhIbk45ZmE1T09JV2lzdC8rbnl0Z2VVbDE5SU93VDR1bU5UVUkvdEN2c21pUU0vZE9hcnd3Zk8xQm00bTJGcGs2RWtzRnhneXEyTmt6OGRYbjJENWthQW54dXhEQjJ3TDNOVE5JazlYelJVZ0NLckdscmliVDBuaHllYm13cDlFa2x0WW9iNzNTL3dJbzU0MFpWNGpmTW8vM2ZxTFdyYkE4S0E2NnpOK3pOby81dTUwM1BCcGtmdHJTTEw4SWpPU00zcnBPdDZmY3FVSndUOEovRnpKOWRXWmdMRWFoTm5pN3h1SUt2Q0NGZTVLRk5ONDcrWFduYUw1NHpDV3JIQmZvcmhPZ3NnU2hrWERBaVoyZEhSS0t1NE56WjBPaklnRlNGdmRMKzFGY3JBVzRsL1RtRS9BNHBBc0tZcU9aMG1ENDlNQ1dNRTdjK3BPbXc2UWlJVldWVTV5cVc4T2Y5clhiZ1plOFNpcm1ybzJxQWp4QXB4N29MeWFHTGI0NmRQMEE2d1FVUzlPRGQzaFdRMkVtZllQQlhLZkMwUEZjYVFFeUt4SnZoZ3NqbnhrWWtRY1NZTzBIQUN1Q2pqS0orblRKK2tQWmhIRXhrdmQvZlJKK2dQVzFZR09PMjJJamh3RlVRTnVOY1BGcDAvU0kwZ2hxTmJBSHF4aUxVRFFTVmtqenVlZlBraWZZQU8zYmdaTnlKRkdVdi95WWRDRTVFTmlRUHcvbVJ4K0d1WWVDWlAxZ1lhUUZCWW40Z2dZazArZm8xY1FpQ3RnNW9OV095TmhROEpJYTloSUxnaVMvNVJCNngxRThpZ01HMG5wV0NDcER6aklJaUFSeFJNTU5IbFZ3cHlZa0dEQVVSYUJtVkg0QXFkaG04a1JINlZNNmcwMG4zeUc3YkpnMTRFcm5wRzlJaWJrMDZmb0dZU0VZZllEem1FQlRBb2JZdHFmUGtYUHdCZnFkWlY5K2hROUE2czVEQk45K2hSOWc2SVc2blhZVVVqaDJBV0Y1aG02RGVIejlmQTF6MGd4R1hrN2RINmRGZEhXYWVpTzNTaG5HSFhvN3NCSVNKbVY5dWxEOUExODRmUjRmN0s3K2hYSVpDWlJQbjJJdmtIYU1YSTA3RnhXNGRwRmEyWS82SklQQWRJYllYMzZFSDBERjZiTVp1ajhPbEtLMEhud3FrY3Nva3B2K0tRMEdXZndYZzkvWUJoajREbm1Rc0dhakRsNHFSeUhCU2s3eTZUemx2YVZuYk9TejhTZHhjNXp6MW50dmxIR3R4MU9LQzlJUmZBYjh3MWMwbDNFSmV5WUx5MEoyZ3l6NjZpTkVKRk12cEJoMllDUncyNDhBdUVJUGJUYlRyNnNXeEJpeHUvR2pKQThad0hHTjJyWVBPMm82aXg2Z09UbUc2dTc0cEdSdTJHeGtEU1lNdjVYMWdRTEY5YnNKSnVld2FUSjhqdUQxRWhtOUM2K3g4VXhqT2diaFhJMDB4bW1pMEtldEFjazMwc0NDbDZpaG4xR0M3YkpMRHRRRnpOVXJ3L3Q3c1RObERwM2dkZGdydnBCRmFxdG5XUHpOYk5wK1IwRmNCSE1LdDU2ZGl4LzRkOXB0a3VaTkxqWFRkTURIVmZkMStrdFZseTRWbWEzYzBCbko0WnA3OTJ4dGcrYUo3L2F3U0FxVzBPamZNTGJPcUp5dktYWUlpalhIREQzVHY1WXlEeC9UWnFQV21sdVYyWFc3VlUvOUpneXpIVWZsT3NWK2lqRWw2UXdMbEc1TG5TenlqL21BdnViRHM3cGRwL1N0NDV0Zk5Cc3hleGJ1OVlrYTBUYzErcEJ4bHBTRVBlQW5PYnFsOVVwZnZWUnNKYktWRUc5UWxQd1ZwZTM5Q2YxR251L2w0VXY0dWYyUG15RzYxR3FRc2x1bllMUHFNYTFyMUNwZUpPczVUUFhVTjFvcE96UzgrdkYvejNudWtqRzdrNEM1M29IdVdZSkxhVlJmYzBpcjZsSVhLdmsxdFZwcTUzTWl2RFpaeVRUSU12QTFiK2N4amJwZTZaaENRdFhlMGF3Mkt6Z29NUHRxNjdQeEszRjhvZ3lWZVZFaVFqcUV1MndUU2tTNTFOV013OFZiZW1la1FTQkpPeXJucm5lcGZ0elZPdDVRem9ubWt5K2JYRmhDMTdUMjFwTERYR282a2QyUytSUUI0MXI0enk4UTlBai92eEZ2cVFkeFRFTzZXdWllMzRHQWo0Qk5YdkZsMUw4T2l5NXFCRExsaTZaQUl3bFgwMHFRS00wQ3FDYlVJb1E2VjhRdkR6NlNkNHJaYkZtSm1jS2htZGRZMTRmQVdDNXZzVnlVbEJZYTZkOGFMZ1ZWTXRsTEtpamY0QVgySmgwZ3lySEpyTi9LUlU5clZTZU5aa0ZQaVRNc0RKZURDTklIWVJaNXpldlNpb1R0d3lnTTFBdHlaWFRnNFFneU13TU1DSFUzSSszZ0JhZVFxREt4VHRqd3AyM3JiRHdyY3Z3Vlk4SHNMeExWYmlGdFd5WDhVSGVYRjlISWhaQlRaM1FmcmZMTXlDT1ZrRkwrSmVJTGs5cW5ESGhEMEhvb3ZNRTZhUDA5UTF5d0xGM1dHWnRVNVRqSEhUTDVvcXpST0JTOGxzQ0dNcGxLUlFDeUdnTXpKMmh3YjhnU1E0ait4SFJoYUpCMUxKK2VZdTM4NmNNQ1dCNWw0OE1DK1BTeXZNUklONXlyazJ1UlY3ekYyZWZxRlEzSXh1TUEwU3pjK29UWHNSWkJBNU95WWN0OGdTV0Z5WWJiMk41SFhzLzR3a205cllqbE5NWmVkdEcrUkRYaWJtdENYSWdxWVNIZ1hNWnM2UUpoOEVITU5RV2VlQ0NDVXVkOXVWOEpBSEpLeFJSVUlTZC9DZUsxR0k1OVcvSjhDTGd6NXZYRHhsVURNbitUTkFSUHg5M0N2d3JrMDlqM3Rhcy9MaE5uWUIwd2NMRDJGMHdFa3FIZnYySUpDdzdaak1IT0hiTThRV0lCUkF1RWxyMnZ2QkluR3Y3TkFmTVF4RUU3ZXE0Q2lDeUszNlpBM0ZPS3lsTmtRWm1UREp6eVh2eTVRSE16Nkhac2dGTFVWQnNLOVB5RUJ6ZjlURTBETTg3QmJxdUU1L0Nib2hjbndWTTlaalgrZ3VZbUNSNGVTU2RkZjBPYWlVZ3BWOHhsQm5kcHBOcUkwRHFlRkc5Um9sa1U4NStiaVNyOWNXeHI4SjJESGE1elNRWEc5YVFFbjFUYndMUGtLbHFTc1RhTEVTUjJ3SlZLOEhRdEtSWE1CTmdUM0IyTnAzNTVmeEJyV2xodDdVSUF0OFFHa1o0bkhjQlk1SHJOQ2Z2d2RRL0lhQ090RG1qb3NBUEh6anF5MS85b1VaSkdkc2pJSjFlNmw2MmZJZXdSWDJNT05reERSQnJSQ1FNSm0zanhlSXp2UDVwREplQzR0bEpjTHlLMHdISGg3akxRbEplL2tvb0QzcmdwNkFteTJkVEJER1hRMWZNL1Z3THo3dXdGclhNbXFiTFhRYlJURkQ0Zk84YkVoWnM1ZXBLVmpDVkI3bzhwOGMrdndYbk5jVFNUWmN2K00vT2ZydUxUNkJNRGhXR3NuTHdpejFZNkhJcTc2bEhOZlgycXJvN0J0NGhndHpDMnN0c1JYRUZZWWE0YlZyVkxWMzQ2YXRFQmFzQmxZNEZhdVBOOWNIUU9ZY2tIM0w2OFI1SnVYam1Sb1ZvczFDdUlIbXBXVTFRSVoybkNGaVcwZ280NmRZelQxQ0Ezb1FJZnVvcTRrSlhhRTFJaWFiOWtwK2RBVk9DR25EbEs0YVZ6cFppSjZGemdHa1JWcUJ2cENxbVJrb1Z5MW9nREhLRjVVY1ZMRy9NOThoc1V4cm53RStYc3dyTDA2VGpQOEtsRUdSVmxCdjRyZmh6NEFHV2FaeXhlMVllaElROFlRRUk3TVdNWm90UzNjV2NTbWw1cUVKTzdvMmdUVDZYM01RZlRodW5ZSTRwMk1walVxaGxCLzRBRnk2TnlnUXRxTlVVa2M0cVdNNjB5MkxkL1pRcVRJTWRjY0toWEE5NUVpaVBVTVpqTTN5blpyWUhua1p5WXh4WFRJc2w0QUlRNjJJcHBQSzhLdkJ3QkdGdzZWTHlrSHVuZ29XR2xDVERXTUc0R0lxVTRDM3VTS2JMdGFOOVNXQVN0U0QxbGhpWUx2Q3RmWTN4dE9wb3VXelRUK0RpK2Y0QkczSEM5bGptVHZHSkE1YWwyTE9aQ1lLRU11eGl0Y0VkejdWZFJiMzQ1TmdnbDZ2RVBLOHloZVE4aXdHZVIwU0JRMTIxcnBNMUVGai9CcWMxYzN5LzczY1JVOVZnNVBraE9LOGZSYW1rSEZ0aWFRT1p5M0xQSEltZTZEdDRVREhGQ0ZsWXFTU2FDelZhaHRVZ296QWdRWDJoV2hOWWk2VU01dnRORU0rcDVEU3QybVdLbUFJNURUQlVTRWxHTG5VQUYxWVJNV2orWjBVdGEzWjVhMzFPaWJBNWVSVHBTZUl3WkdQcTY0QlpIWlpwcThhY1cvY1JVVDNSYitRaFhGSTFRYkNPVlZvUm1Ib2xRNjZQQ2tzbDhHeTVMY29XNmI3Q2xKUlBIV1FnczJHQUNSVDViWk5FeXB4YWxFWXg4WEVHSDJoN01ja2FZaUtYSzFpcm51QXMzenRyZVdrZU5aSHFJa2FseW9SMzRSSEl6ajY2aW5VbTNsa21uS0JwN1FmUnZuZFJWbnBKVnJ3RFFuQ1dvZFE4b1lvMXpzekJsUjRObml5ODVob3B5Nk90TW9GOFJZV1VFOFdJU2ZwSEQ2MWJqY0Z2Ti9GU1hxLzhRR3ZNZWluNnhyaXpHa3c3TEF1Zk9VamkxU3BPanFFOWczUzZVMkd5ZVhBUlYxVnJFZzBibjlRL2d0VE1Oa3k4RmFKMnViQmtiZk5jVXg2b0VrNmEzMit4TDZMMWRxdnQyYWxyVzVidFN2eG9EaTZNWHFXQUZOS0F3amVVcHFmSm41Q3ZDN003eTBqQmN4VmtVdk9oMkRlQ0N5WTlkTmFyRHJydkpoVktpdEduazZHNXpUcU9Gclkya3BqcGhZS012WmExOVJxNEx5bThEUmdZMzBuK21CZEYvc0dUcFBXSFphUVJwOEtQSGp5UHQ2SER2a0JvODBqdktvYy9nVVYzdFpwcjR1YjBzK3E3dTVGOUxDVDRyM2FNenN2TUhlUG9kbCtESGkyenNSZGdOZlF6WHp3b1R4Mlp0V3IwZU9mVmxlSnZBN0R6aUZtOUZzYUpidVJUVzlycjNpc3Y2S2JGbVVaOHgxZU03OVEyeW5wN082UDlJOHc2MnM4OFJVLzFlZlpuSlMwNEorZFdYOWovWFFkWTlmR2ZKUWtyUlArSVNxYitvZkh6WDN3RGlGaXR1UzEwTndEclFzOFo0Mjh4ekV6L3lINWh6RmFaVHprdHZCMUFNak9PSmdxVnlyNlAxdzF3NnJPa1pPZmFIaU9ZVUNMWllGQ3dmNHVVUDU2V0UzSjhIcVpCOUkyQ0VVdEhNeDU5QTZhVEcxSVVGK0JkZWsyRWM0TGR5UndHSTkvWnkzOFBXeXlyUC9ZSWVDVkVISmRCaHZHaGdybU5xTnMrN3NtaUgxK1k5cXMvSEd6azNFTUMvSmx1TkJxQTBzYXRqdGVXU01aT2ozcFk5OEppSy9mRGVvdGdJSTVGMUhGMlF6Q3VUTHVkV0JpVFROOWRHMTRIZ0xuOWhpb3h3Q1F5VXhwRVhsd3RFWXE1WFpNU1E1eFQ1enpMUlhEYTVnaU95MmhkUWZhcTVRdHNqTzE2b3dkV29KNzBUbDRBZXB0SFU3YzE2OUxpbkJOY0YzTlJLbHQyeDkzQ0dBckR5ODdkWXRyVjFGVHJuZEY2dVhON2d3SlU0RHJNeHlCZ2VtWFhlWVJEbTVWMzlXcE53QlM2ckdjM0NuaUt0ckxyWlcyUzJndkQwcTZtdEQ1N1pLTmkybTF2ODhjczFnZ2EvdXg5d0VKU25ac2h1aTNpZEJjdGUxSkhTazd6MFN1Ly8vNFpabnZVanVjMFdTZ3JxWFhKWFBlZituWTV1cXdSMVBFSUg0RysyOWcxdmcyR281M00wRlVCTzI3dm13MUdwTWp5L3NKR0JVKzdxbEd3SXRUTDYyL0M0TkR4M1hldEpiREJxSjVtYnZMdXhodVcxcnhxTk9YVWUrQVFZWUV5N1h5bFFmWkFETmdvZlhObUR5T3VPcW5FTHNnR2F6aEJONkh6bEJZKzlLaWh4bExvMzdlSU9hR2t2Ty9taERYbWN0TmlhQ3p1bXAzYmJvbkl6N0lSbFlqUjN3bC9zRTJMZENMZEFIU3BMWTJHMEdDQi9hUWRSMXdqMmhHM2FleVRFT0wxRytwT3dwVFc4bTRjWlVKa2NubG9RSEtNVFdlYnp2TWdMTG9FelhKZ3ZORVFRM3RUN3Z0cnhVUGh2OHRObEtTalFxdVdvem8xQUxteVI3RzhrTW92TjVEU1hrOG51emt1amc0M0xpN2xZWWJpZXBLb0d3Q3QvbkQyM0h1NUg0K0wwRmJlVGFOQTArNjlySmFBRVZlYkhzY0dnRDdONWNNT1VjRjVWVkFVTkFkM0R3ZnFrYzBaSytxbWU5MFA3VU0vME4zTTlSV3cwWXZUTTdSQk5iMDlMbVFPbXUwOXJScTlYT2I4R2FaRWdINXFhVjdzeVJURzgxOXEweXROYjQ2THBHcXVlMkJadnQ3VmJBZlF0UFhUUE1WWVc3NnkvWWFXa05PYmhBWUxKbXZmbUVNYll3dGQwcjNxbVlBZjhtTUNtN2dyeitjbnRwaXV1c1ZISVE5MDNheFpjSml0Zy9VSWR3QVp3WnF1NEx2UEZTZlFueFJOdWhmbHRsNDVCaitoK2U0V0ZvVjUwMzBiQ0VielQrUlh3TTQ5dDk2d2RHQlBONElNTWNHREdqNjJ4UzU3V0s4R2lSbi9tV3d6bVg5OWF2MVdPYzU4Vy82WmdJdlZQSVhEb2pEM3NDaVNpNTRYQk9KR3IzL09kVThva25mYmlrQllINUFTMjJEVkhncDVNSHVzUHVremt2VGhhdnZEbzU3am9ET1QzdHBYNUdPOVVYOWlncTBIQjVZMkZUL3RUcEZZS3Q0K3pEa0paZit1ZmtzVEdNV1VHOU9FWTNRSis5ak1MNUFjMjdPYWs1eWswQS9PZ3dZanpqN1NadEQ3bEJqME5mbU5ESXN1NGZ1WnRHWUExYjE2UWFlSklUbXFtamZJamhTVkhUcG1kdWNvd1FLMVl4T3BKT2lWWGZaeHlhU3dmS2owYW1BR2NkTjZsOWNrYVdmWmtRNzFNczc5M2RnOHBIcWFXdFJtT0FMVExMVXRnTGc5TDI0dG5PVGdvYTVWejdvSzFkakY5bmllYjZtNzNBTWFtNXBLaHp6ZFY5WEhJbDVJbDc2Nm1ZekxxR096VEFMTm5Zc2N4NGx6TjlmTnluaEwzWFF5SkVnYUdsSHhCdDluRi9TOGVGN3lkTitZY01JN3NCSFNWV3pHcStzcFRyTldaMHNZK3RTOVZVNEQ5OUxZUSt6Q1cxMitmT1RYajFJRGlldDJtNHdvTGV1NmdIbUZ6b3RzK3JndUEyYSs5UGZNazJzMDRDbXJVWU1Dd1FyUFhhS1FFeUk2RGR0cW1MNEpPSklSZkx2SmwxZkMvZklleDMzWXVKWWFLME9yL0VvTmNNSzJYSjJsOXRMS0RQTmpMZVlvZUNFemR0V2g1S1VhYklVSHFneTduYzNMbGZic3pJNTI1YVBxNTZaaXlFMjBXeVhLaXBLUzVRZnZkUEtNUTZUWjVUQjFBOUFRZWFYbmlqU2RTbTRXVnZTeTJzdFY5eXlNQkhTd3M1QWo2emg0bnVkKzVEZTZvcUZRdEthNlZ4TnpWVEU5bTM2NjBtRmNVZi9kSGFlejYvMTlGZWpwVmxRSWRKM2Y3dU1UbkRvVTA2U3Z0YmtrWUUxLy84NHFaYmUreFhHZGhIM2QyZ2NCVjVzRkllK0NGTzJ2NW4yZGZ6VzlFeDBCZEJGODVzcFZWdEFNZmUrYnB1bXIvNEl3Vy9UVzRndUxZSndlTWcvUEFUOFhYSVdzOFZoTWUxNWh6TWpkM2NQeG5RRExCRGNEdjZoelFzcWdiZmNWZmp2Z09QODMzcmJRSWVDcXREOHloL0kyUUZQdVY5NjIwQ0dBNW1teDV1VlBBTFFUTlNkK2h3R3dIcy9SdnZLMmhjNEFtbE9XMFJmZVM5UWhzTnNWMmZ3NGJNMkRPd0FmREs4TUFUaEE4dGtsK244VU9JMkVsTTF0aysvRHRQdTlIdThDUmJLUHFkVHB3ZnVTRWZReEZLcjBmcndCS2R6Y0Z5cy9BTmlzMlJPU2hSbk8xRmVYdS9jQVdFRHVhSXRFTFFnYjliWU45cmNCOTVFMXRjSjNBMkxrdkhnaFFjY0FkOW1rUnQ4ZWo3S0ptNnBkL1FObndlTC9GcXR1bjRWNWFLcldaeHlyR1NoWC8xZnl5Mk5iWDNyMkI3emtCUmt1VGplL0ZXck5Jek0rTkM1RDZ3azRpeFM1VjAvY0R0RFpMOXFCbklTL3FvWncyWnkvL1ZVSGJMNzFtU1Q4TlRYRTJ0QmlkUHh0Qm1LRkU4TWsrZTlFQmRNRFZOSDZXTFB3RTdEa2NxNUtZYjAzNEhCMC9GTlhUMCtJclBqNW9sYzI0aFhTcnBUNitlZlNBcTRYazBXRWo1b3Ayb0dvR0tSRUdIczlMcEI3NGhRV1dhcWFoRW92QXNvckI1aG51dHNBOE9zZ2FjZkNmL2E5ckhNQjVaUURib0hXUGg4SmtXVnZwRHNzMXZOT0RlakV3alY1YWwzejZpZUFsVEo5U1pvdnUzT0lwSzBPblZUcXRsL2Q5aHFJTG15RmQ0N05TNGlmQjk0KytUTHk2dnc3NkhpQnFiYUhWY2NudTQycVlHZXcwTG13SFU3UTJPdjNVZUN0QU5iNEpaRXlmZWVBM0VUSVVCaGxjNVAzMTNEUkZqZzMwc2xDcHVVbXNpWHhoV095L0ZTd2lyOUZGUFd3RlQvOEFreXRjQU9YYWUwTWpTeXovaG00dVdCcllhQkMyK1VxQ1JvV2MzOFpjSXNDMFJqNnRmUlFzNFZwVTRmaW1DL3d5N1poc0RlaDEwdjJqNGZNL1Fzb0l2Q1NuWitnZlhnZHE3cDNpUEt0WnRuQ1Fwb1hJRW1DWXBPcnhZelRVZlVkYkdaYnFVRm9GYlQvTXlnaWtJbUZMUEoyTWZRNHkrdVZZL3FxcXU3M3hYOFNNM2JPMTR2SjhjYUxNbGVhL055VStxWEFqa1hKTFlUTzAxVm5lWFhCVVNvdll6VXdTRlB4L0pjSStCOCtORnZUdW9IMjlnQUFBQUJKUlU1RXJrSmdnZz09XCJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjEyMFwiXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMTIwXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJmb3JtLXNpZ25pblwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwibWItNCBsb2dvXCIgc3JjPVwiXCIgYWx0PVwiXCIgd2lkdGg9XCIxMjBcIiBoZWlnaHQ9XCIxMjBcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJoMyBtYi0zXCI+WW91ciBZb2dhIEpvdXJuZXkgQmVnaW5zIGhlcmUhPC9oNj5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0VXNlcm5hbWVcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInVzZXJuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwidXNlcm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cInVzZXJuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkPVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdGF1dG9Gb2N1cz1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFBhc3N3b3JkXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkPVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgdHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0U2lnbiBpblxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0ey8qIHt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyID8gKFxuXHRcdFx0XHRcdDxLaWNrc3RhcnRlcnBhdGggY3VycmVudFVzZXI9e3RoaXMuc3RhdGUuY3VycmVudFVzZXJ9IC8+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PExvZ2luIHVzZXJTdGF0ZT17dGhpcy51c2VyU3RhdGV9IC8+XG5cdFx0XHRcdCl9ICovfVxuXG5cdFx0XHRcdHsvKiA8S2lja3N0YXJ0ZXJwYXRoIGN1cnJlbnRVc2VyPXt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyfSAvPnsnICd9ICovfVxuXG5cdFx0XHRcdHsvKiA8aW1nIHNyYz1cIi9pbWFnZXMvdGVzdC5qcGdcIiAvPiAqL31cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5jb2wtc20ge1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA3MDBweDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0Ly8gYm9yZGVyOiBibGFjayAxcHggc29saWQ7XG5cdFx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5jYXJkLXNwYWNlIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDMlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5sb2dvIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gLmxlZnRJbWFnZSB7XG5cdFx0XHRcdFx0Ly8gXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0Ly8gXHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0Ly8gfVxuXG5cdFx0XHRcdFx0LnJpZ2h0SW1hZ2Uge1xuXHRcdFx0XHRcdFx0Ly8gZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHQvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR0b3A6IDUwJTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDMwcHg7XG5cdFx0XHRcdFx0XHQvLyBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDVweDtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDlweCA3cHggMjVweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0XHRcdG9iamVjdC1wb3NpdGlvbjogMCA3MCU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmxlZnRJbWFnZSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Lmp1bWJvMSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMTAlIDMwJTtcblx0XHRcdFx0XHRcdC8qIG9wYWNpdHk6IDgwJTsgKi9cblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDMlO1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDIwJTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyAuanVtYm8xd29yZHMge1xuXHRcdFx0XHRcdC8vIFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdC8vIFx0Zm9udC1mYW1pbHk6IFwiUGVybWFuZW50IE1hcmtlclwiO1xuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuIl19 */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/index.js */"));
  }

}

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _adminprofile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adminprofile */ "./pages/adminprofile.js");
var _jsxFileName = "/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // For fetch API





 // import Kickstarterpath from './kickstarterpath';


class Login extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", e => {
      this.setState({
        [e.target.id]: e.target.value
      });
    });

    _defineProperty(this, "handleSubmit", event => {
      event.preventDefault();
      console.log(this.state.users);

      if (this.state.username === 'customer') {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/kickstarterpath'); // <Kickstarterpath username={this.state.username} />;
      } else if (this.state.username === 'admin') {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/adminprofile'); // <AdminProfile username={this.state.username} />;
      }
    });

    this.state = {
      username: '',
      password: '',
      users: '',
      currentUser: '',
      message: '',
      redirect: false
    };
  }

  static async getInitialProps() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:3000/users');
    const data = await res.json();
    console.log(`User data fetched. Count: ${data.length}`);
    return {
      // poses : data.map((entry) => entry.pose)
      users: data
    };
  }

  render() {
    // if (this.state.redirect === true) {
    // 	return <Redirect to="/kickstarter" />;
    // }
    // console.log(this.state.user, this.state.password);
    const {
      users
    } = this.props;
    return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Log in Page",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-1297371386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Review your class"), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
      crossorigin: "anonymous",
      className: "jsx-1297371386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })), console.log(users), __jsx("div", {
      className: "jsx-1297371386" + " " + "bodyCenter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("form", {
      onSubmit: this.handleSubmit,
      className: "jsx-1297371386" + " " + "form-signin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("img", {
      src: "data:image/png;base64,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",
      alt: "",
      width: "120",
      height: "120",
      className: "jsx-1297371386" + " " + "mb-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }), __jsx("h1", {
      className: "jsx-1297371386" + " " + "h3 mb-3 font-weight-normal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "Please sign in"), __jsx("label", {
      htmlFor: "username",
      className: "jsx-1297371386" + " " + "sr-only",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "Username"), __jsx("input", {
      type: "username",
      id: "username",
      name: "username",
      placeholder: "Username",
      required: "",
      autoFocus: "",
      value: this.state.username,
      onChange: this.handleChange,
      className: "jsx-1297371386" + " " + "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "password",
      className: "jsx-1297371386" + " " + "sr-only",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "Password"), __jsx("input", {
      type: "password",
      id: "password",
      name: "name",
      placeholder: "Password",
      required: "",
      value: this.state.password,
      onChange: this.handleChange,
      className: "jsx-1297371386" + " " + "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), __jsx("button", {
      type: "submit",
      className: "jsx-1297371386" + " " + "btn btn-lg btn-primary btn-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, "Sign in"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1297371386",
      __self: this
    }, ".bodyCenter.jsx-1297371386{width:350px;display:block;margin:0 auto;padding-top:5%;padding-bottom:5%;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9sb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSGdCLEFBR21CLFlBQ0UsY0FDQSxjQUNDLGVBQ0csa0JBQ0Esa0JBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnOyAvLyBGb3IgZmV0Y2ggQVBJXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0Jztcbi8vIGltcG9ydCBLaWNrc3RhcnRlcnBhdGggZnJvbSAnLi9raWNrc3RhcnRlcnBhdGgnO1xuaW1wb3J0IEFkbWluUHJvZmlsZSBmcm9tICcuL2FkbWlucHJvZmlsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHVzZXJuYW1lICAgIDogJycsXG5cdFx0XHRwYXNzd29yZCAgICA6ICcnLFxuXHRcdFx0dXNlcnMgICAgICAgOiAnJyxcblx0XHRcdGN1cnJlbnRVc2VyIDogJycsXG5cdFx0XHRtZXNzYWdlICAgICA6ICcnLFxuXHRcdFx0cmVkaXJlY3QgICAgOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcnMnKTtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblx0XHRjb25zb2xlLmxvZyhgVXNlciBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdC8vIHBvc2VzIDogZGF0YS5tYXAoKGVudHJ5KSA9PiBlbnRyeS5wb3NlKVxuXHRcdFx0dXNlcnMgOiBkYXRhXG5cdFx0fTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlIH0pO1xuXHR9O1xuXG5cdC8vIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuXHQvLyBcdHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0LmlkXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuXHQvLyB9O1xuXG5cdGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS51c2Vycyk7XG5cdFx0aWYgKHRoaXMuc3RhdGUudXNlcm5hbWUgPT09ICdjdXN0b21lcicpIHtcblx0XHRcdFJvdXRlci5wdXNoKCcva2lja3N0YXJ0ZXJwYXRoJyk7XG5cdFx0XHQvLyA8S2lja3N0YXJ0ZXJwYXRoIHVzZXJuYW1lPXt0aGlzLnN0YXRlLnVzZXJuYW1lfSAvPjtcblx0XHR9IGVsc2UgaWYgKHRoaXMuc3RhdGUudXNlcm5hbWUgPT09ICdhZG1pbicpIHtcblx0XHRcdFJvdXRlci5wdXNoKCcvYWRtaW5wcm9maWxlJyk7XG5cdFx0XHQvLyA8QWRtaW5Qcm9maWxlIHVzZXJuYW1lPXt0aGlzLnN0YXRlLnVzZXJuYW1lfSAvPjtcblx0XHR9XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdC8vIGlmICh0aGlzLnN0YXRlLnJlZGlyZWN0ID09PSB0cnVlKSB7XG5cdFx0Ly8gXHRyZXR1cm4gPFJlZGlyZWN0IHRvPVwiL2tpY2tzdGFydGVyXCIgLz47XG5cdFx0Ly8gfVxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudXNlciwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XG5cdFx0Y29uc3QgeyB1c2VycyB9ID0gdGhpcy5wcm9wcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dCB0aXRsZT1cIkxvZyBpbiBQYWdlXCI+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5SZXZpZXcgeW91ciBjbGFzczwvdGl0bGU+XG5cdFx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG5cdFx0XHRcdFx0XHRpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiXG5cdFx0XHRcdFx0XHRjcm9zc29yaWdpbj1cImFub255bW91c1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHR7Y29uc29sZS5sb2codXNlcnMpfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvZHlDZW50ZXJcIj5cblx0XHRcdFx0XHR7LyogRk9STSAgKi99XG5cdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJmb3JtLXNpZ25pblwiPlxuXHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtYi00XCJcblx0XHRcdFx0XHRcdFx0c3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPVUFBQURjQ0FNQUFBQzRZcFpCQUFBQWlsQk1WRVgvLy84QUFBRDgvUHo1K2ZuNit2cjA5UFR2NysvcDZlbmIyOXZ1N3U3ejgvUG82T2pqNCtNVUZCVGYzOS9OemMxUlVWR3ZyNjlwYVdrZkh4K0tpb282T2pxOXZiM0V4TVF0TFMzUjBkRW5KeWQvZjM4WUdCaGlZbUtucDZkQ1FrSjJkbmFTa3BLY25KeGRYVjB5TWpKRlJVVlVWRlFMQ3d1TmpZMjN0N2RvYUdoZVhsNTVlWG1pb3FKNExkcldBQUFWRUVsRVFWUjRuTjBkYWJ1cFhGUWxrdEtnVVdoUWtxdi8vL2R1ZTYwZG9SeFVoOVA2OEQ3dnhXR3Yxanp1MGVqM2dlVWs2NkF1VTRaaGx2dlFaVDl3aEg2QjVXY0xPOWVkMU5rSFJuZ0lmSVlKcHA4K1ZKZkFpdE9Gb29XNm42Ym1NYlRuSEhuTjlmYTVPT0lXaXN0LytueXRnZVVsMTlJT3dUNHVtTlRVSS90Q3ZzbWlRTS9kT2Fyd3dmTzFCbTRtMkZwazZFa3NGeGd5cTJOa3o4ZFhuMkQ1a2FBbnh1eERCMndMM05UTklrOVh6UlVnQ0tyR2xyaWJUMG5oeWVibXdwOUVrbHRZb2I3M1Mvd0lvNTQwWlY0amZNby8zZnFMV3JiQThLQTY2ek4rek5vLzV1NTAzUEJwa2Z0clNMTDhJak9TTTNycE90NmZjcVVKd1Q4Si9Geko5ZFdaZ0xFYWhObmk3eHVJS3ZDQ0ZlNUtGTk40NytYV25hTDU0ekNXckhCZm9yaE9nc2dTaGtYREFpWjJkSFJLS3U0TnpaME9qSWdGU0Z2ZEwrMUZjckFXNGwvVG1FL0E0cEFzS1lxT1owbUQ0OU1DV01FN2MrcE9tdzZRaUlWV1ZVNXlxVzhPZjlyWGJnWmU4U2lybXJvMnFBanhBcHg3b0x5YUdMYjQ2ZFAwQTZ3UVVTOU9EZDNoV1EyRW1mWVBCWEtmQzBQRmNhUUV5S3hKdmhnc2pueGtZa1FjU1lPMEhBQ3VDampLSituVEora1BaaEhFeGt2ZC9mUkorZ1BXMVlHT08yMklqaHdGVVFOdU5jUEZwMC9TSTBnaHFOYkFIcXhpTFVEUVNWa2p6dWVmUGtpZllBTzNiZ1pOeUpGR1V2L3lZZENFNUVOaVFQdy9tUngrR3VZZUNaUDFnWWFRRkJZbjRnZ1lrMCtmbzFjUWlDdGc1b05XT3lOaFE4SklhOWhJTGdpUy81UkI2eDFFOGlnTUcwbnBXQ0NwRHpqSUlpQVJ4Uk1NTkhsVndweVlrR0RBVVJhQm1WSDRBcWRobThrUkg2Vk02ZzAwbjN5RzdiSmcxNEVybnBHOUlpYmswNmZvR1lTRVlmWUR6bUVCVEFvYll0cWZQa1hQd0JmcWRaVjkraFE5QTZzNURCTjkraFI5ZzZJVzZuWFlVVWpoMkFXRjVobTZEZUh6OWZBMXowZ3hHWGs3ZEg2ZEZkSFdhZWlPM1NobkdIWG83c0JJU0ptVjl1bEQ5QTE4NGZSNGY3SzcraFhJWkNaUlBuMkl2a0hhTVhJMDdGeFc0ZHBGYTJZLzZKSVBBZEliWVgzNkVIMERGNmJNWnVqOE9sS0swSG53cWtjc29rcHYrS1EwR1dmd1hnOS9ZQmhqNERubVFzR2FqRGw0cVJ5SEJTazd5NlR6bHZhVm5iT1N6OFNkeGM1enoxbnR2bEhHdHgxT0tDOUlSZkFiOHcxYzBsM0VKZXlZTHkwSjJneXo2NmlORUpGTXZwQmgyWUNSdzI0OEF1RUlQYlRiVHI2c1d4Qml4dS9HakpBOFp3SEdOMnJZUE8ybzZpeDZnT1RtRzZ1NzRwR1J1Mkd4a0RTWU12NVgxZ1FMRjlic0pKdWV3YVRKOGp1RDFFaG05QzYreDhVeGpPZ2JoWEkwMHhtbWkwS2V0QWNrMzBzQ0NsNmlobjFHQzdiSkxEdFFGek5VcncvdDdzVE5sRHAzZ2RkZ3J2cEJGYXF0bldQek5iTnArUjBGY0JITUt0NTZkaXgvNGQ5cHRrdVpOTGpYVGRNREhWZmQxK2t0Vmx5NFZtYTNjMEJuSjRacDc5Mnh0ZythSjcvYXdTQXFXME9qZk1MYk9xSnl2S1hZSWlqWEhERDNUdjVZeUR4L1RacVBXbWx1VjJYVzdWVS85Smd5ekhVZmxPc1YraWpFbDZRd0xsRzVMblN6eWovbUF2dWJEczdwZHAvU3Q0NXRmTkJzeGV4YnU5WWthMFRjMStwQnhscFNFUGVBbk9icWw5VXBmdlZSc0piS1ZFRzlRbFB3VnBlMzlDZjFHbnUvbDRVdjR1ZjJQbXlHNjFHcVFzbHVuWUxQcU1hMXIxQ3BlSk9zNVRQWFVOMW9wT3pTOCt2Ri96M251a2pHN2s0QzUzb0h1V1lKTGFWUmZjMGlyNmxJWEt2azF0VnBxNTNNaXZEWlp5VFRJTXZBMWIrY3hqYnBlNlpoQ1F0WGUwYXcyS3pnb01QdHE2N1B4SzNGOG9neVZlVkVpUWpxRXUyd1RTa1M1MU5XTXc4VmJlbWVrUVNCSk95cm5ybmVwZnR6Vk90NVF6b25ta3krYlhGaEMxN1QyMXBMRFhHbzZrZDJTK1JRQjQxcjR6eThROUFqL3Z4RnZxUWR4VEVPNld1aWUzNEdBajRCTlh2RmwxTDhPaXk1cUJETGxpNlpBSXdsWDAwcVFLTTBDcUNiVUlvUTZWOFF2RHo2U2Q0clpiRm1KbWNLaG1kZFkxNGZBV0M1dnNWeVVsQllhNmQ4YUxnVlZNdGxMS2lqZjRBWDJKaDBneXJISnJOL0tSVTlyVlNlTlprRlBpVE1zREplRENOSUhZUlo1emV2U2lvVHR3eWdNMUF0eVpYVGc0UWd5TXdNTUNIVTNJKzNnQmFlUXFES3hUdGp3cDIzcmJEd3JjdndWWThIc0x4TFZiaUZ0V3lYOFVIZVhGOUhJaFpCVFozUWZyZkxNeUNPVmtGTCtKZUlMazlxbkRIaEQwSG9vdk1FNmFQMDlRMXl3TEYzV0dadFU1VGpISFRMNW9xelJPQlM4bHNDR01wbEtSUUN5R2dNekoyaHdiOGdTUTRqK3hIUmhhSkIxTEorZVl1Mzg2Y01DV0I1bDQ4TUMrUFN5dk1SSU41eXJrMnVSVjd6RjJlZnFGUTNJeHVNQTBTemMrb1RYc1JaQkE1T3lZY3Q4Z1NXRnlZYmIyTjVIWHMvNHdrbTlyWWpsTk1aZWR0RytSRFhpYm10Q1hJZ3FZU0hnWE1aczZRSmg4RUhNTlFXZWVDQ0NVdWQ5dVY4SkFISkt4UlJVSVNkL0NlSzFHSTU5Vy9KOENMZ3o1dlhEeGxVRE1uK1ROQVJQeDkzQ3Z3cmswOWozdGFzL0xoTm5ZQjB3Y0xEMkYwd0VrcUhmdjJJSkN3N1pqTUhPSGJNOFFXSUJSQXVFbHIydnZCSW5HdjdOQWZNUXhFRTdlcTRDaUN5SzM2WkEzRk9LeWxOa1FabVRESnp5WHZ5NVFITXo2SFpzZ0ZMVVZCc0s5UHlFQnpmOVRFMERNODdCYnF1RTUvQ2JvaGNud1ZNOVpqWCtndVltQ1I0ZVNTZGRmME9haVVncFY4eGxCbmRwcE5xSTBEcWVGRzlSb2xrVTg1K2JpU3I5Y1d4cjhKMkRIYTV6U1FYRzlhUUVuMVRid0xQa0tscVNzVGFMRVNSMndKVks4SFF0S1JYTUJOZ1QzQjJOcDM1NWZ4QnJXbGh0N1VJQXQ4UUdrWjRuSGNCWTVIck5DZnZ3ZFEvSWFDT3REbWpvc0FQSHpqcXkxLzlvVVpKR2RzaklKMWU2bDYyZklld1JYMk1PTmt4RFJCclJDUU1KbTNqeGVJenZQNXBESmVDNHRsSmNMeUswd0hIaDdqTFFsSmUva29vRDNyZ3A2QW15MmRUQkRHWFExZk0vVndMejd1d0ZyWE1tcWJMWFFiUlRGRDRmTzhiRWhaczVlcEtWakNWQjdvOHA4Yyt2d1huTmNUU1RaY3YrTS9PZnJ1TFQ2Qk1EaFdHc25Md2l6MVk2SElxNzZsSE5mWDJxcm83QnQ0aGd0ekMyc3RzUlhFRllZYTRiVnJWTFYzNDZhdEVCYXNCbFk0RmF1UE45Y0hRT1lja0gzTDY4UjVKdVhqbVJvVm9zMUN1SUhtcFdVMVFJWjJuQ0ZpVzBnbzQ2ZFl6VDFDQTNvUUlmdW9xNGtKWGFFMUlpYWI5a3ArZEFWT0NHbkRsSzRhVnpwWmlKNkZ6Z0drUlZxQnZwQ3FtUmtvVnkxb2dESEtGNVVjVkxHL005OGhzVXhybndFK1hzd3JMMDZUalA4S2xFR1JWbEJ2NHJmaHo0QUdXYVp5eGUxWWVoSVE4WVFFSTdNV01ab3RTM2NXY1NtbDVxRUpPN28yZ1RUNlgzTVFmVGh1bllJNHAyTXBqVXFobEIvNEFGeTZOeWdRdHFOVVVrYzRxV002MHkyTGQvWlFxVElNZGNjS2hYQTk1RWlpUFVNWmpNM3luWnJZSG5rWnlZeHhYVElzbDRBSVE2MklwcFBLOEt2QndCR0Z3NlZMeWtIdW5nb1dHbENURFdNRzRHSXFVNEMzdVNLYkx0YU45U1dBU3RTRDFsaGlZTHZDdGZZM3h0T3BvdVd6VFQrRGkrZjRCRzNIQzlsam1UdkdKQTVhbDJMT1pDWUtFTXV4aXRjRWR6N1ZkUmIzNDVOZ2dsNnZFUEs4eWhlUThpd0dlUjBTQlExMjFycE0xRUZqL0JxYzFjM3kvNzNjUlU5Vmc1UGtoT0s4ZlJhbWtIRnRpYVFPWnkzTFBISW1lNkR0NFVESEZDRmxZcVNTYUN6VmFodFVnb3pBZ1FYMmhXaE5ZaTZVTTV2dE5FTStwNURTdDJtV0ttQUk1RFRCVVNFbEdMblVBRjFZUk1XaitaMFV0YTNaNWEzMU9pYkE1ZVJUcFNlSXdaR1BxNjRCWkhaWnBxOGFjVy9jUlVUM1JiK1FoWEZJMVFiQ09WVm9SbUhvbFE2NlBDa3NsOEd5NUxjb1c2YjdDbEpSUEhXUWdzMkdBQ1JUNWJaTkV5cHhhbEVZeDhYRUdIMmg3TWNrYVlpS1hLMWlybnVBczN6dHJlV2tlTlpIcUlrYWx5b1IzNFJISXpqNjZpblVtM2xrbW5LQnA3UWZSdm5kUlZucEpWcndEUW5DV29kUThvWW8xenN6QmxSNE5uaXk4NWhvcHk2T3RNb0Y4UllXVUU4V0lTZnBIRDYxYmpjRnZOL0ZTWHEvOFFHdk1laW42eHJpekdrdzdMQXVmT1VqaTFTcE9qcUU5ZzNTNlUyR3llWEFSVjFWckVnMGJuOVEvZ3RUTU5reThGYUoydWJCa2JmTmNVeDZvRWs2YTMyK3hMNkwxZHF2dDJhbHJXNWJ0U3Z4b0RpNk1YcVdBRk5LQXdqZVVwcWZKbjVDdkM3TTd5MGpCY3hWa1V2T2gyRGVDQ3lZOWROYXJEcnJ2SmhWS2l0R25rNkc1elRxT0ZyWTJrcGpwaFlLTXZaYTE5UnE0THltOERSZ1kzMG4rbUJkRi9zR1RwUFdIWmFRUnA4S1BIanlQdDZIRHZrQm84MGp2S29jL2dVVjN0WnByNHViMHMrcTd1NUY5TENUNHIzYU16c3ZNSGVQb2RsK0RIaTJ6c1JkZ05mUXpYendvVHgyWnRXcjBlT2ZWbGVKdkE3RHppRm05RnNhSmJ1UlRXOXJyM2lzdjZLYkZtVVo4eDFlTTc5UTJ5bnA3TzZQOUk4dzYyczg4UlUvMWVmWm5KUzA0SitkV1g5ai9YUWRZOWZHZkpRa3JSUCtJU3FiK29mSHpYM3dEaUZpdHVTMTBOd0RyUXM4WjQyOHh6RXoveUg1aHpGYVpUemt0dkIxQU1qT09KZ3FWeXI2UDF3MXc2ck9rWk9mYUhpT1lVQ0xaWUZDd2Y0dVVQNTZXRTNKOEhxWkI5STJDRVV0SE14NTlBNmFURzFJVUYrQmRlazJFYzRMZHlSd0dJOS9aeTM4UFd5eXJQL1lJZUNWRUhKZEJodkdoZ3JtTnFOcys3c21pSDErWTlxcy9IR3prM0VNQy9KbHVOQnFBMHNhdGp0ZVdTTVpPajNwWTk4SmlLL2ZEZW90Z0lJNUYxSEYyUXpDdVRMdWRXQmlUVE45ZEcxNEhnTG45aGlveHdDUXlVeHBFWGx3dEVZcTVYWk1TUTV4VDV6ekxSWERhNWdpT3kyaGRRZmFxNVF0c2pPMTZvd2RXb0o3MFRsNEFlcHRIVTdjMTY5TGluQk5jRjNOUktsdDJ4OTNDR0FyRHk4N2RZdHJWMUZUcm5kRjZ1WE43Z3dKVTREck14eUJnZW1YWGVZUkRtNVYzOVdwTndCUzZyR2MzQ25pS3RyTHJaVzJTMmd2RDBxNm10RDU3WktOaTJtMXY4OGNzMWdnYS91eDl3RUpTblpzaHVpM2lkQmN0ZTFKSFNrN3owU3UvLy80WlpudlVqdWMwV1NncnFYWEpYUGVmK25ZNXVxd1IxUEVJSDRHKzI5ZzF2ZzJHbzUzTTBGVUJPMjd2bXcxR3BNankvc0pHQlUrN3FsR3dJdFRMNjIvQzRORHgzWGV0SmJEQnFKNW1idkx1eGh1VzFyeHFOT1hVZStBUVlZRXk3WHlsUWZaQUROZ29mWE5tRHlPdU9xbkVMc2dHYXpoQk42SHpsQlkrOUtpaHhsTG8zN2VJT2FHa3ZPL21oRFhtY3ROaWFDenVtcDNiYm9uSXo3SVJsWWpSM3dsL3NFMkxkQ0xkQUhTcExZMkcwR0NCL2FRZFIxd2oyaEczYWV5VEVPTDFHK3BPd3BUVzhtNGNaVUprY25sb1FIS01UV2VienZNZ0xMb0V6WEpndk5FUVEzdFQ3dnRyeFVQaHY4dE5sS1NqUXF1V296bzFBTG15UjdHOGtNb3ZONURTWGs4bnV6a3VqZzQzTGk3bFlZYmllcEtvR3dDdC9uRDIzSHU1SDQrTDBGYmVUYU5BMCs2OXJKYUFFVmViSHNjR2dEN041Y01PVWNGNVZWQVVOQWQzRHdmcWtjMFpLK3FtZTkwUDdVTS8wTjNNOVJXdzBZdlRNN1JCTmIwOUxtUU9tdTA5clJxOVhPYjhHYVpFZ0g1cWFWN3N5UlRHODE5cTB5dE5iNDZMcEdxdWUyQlp2dDdWYkFmUXRQWFRQTVZZVzc2eS9ZYVdrTk9iaEFZTEptdmZtRU1iWXd0ZDByM3FtWUFmOG1NQ203Z3J6K2NudHBpdXVzVkhJUTkwM2F4WmNKaXRnL1VJZHdBWndacXU0THZQRlNmUW54Uk51aGZsdGw0NUJqK2grZTRXRm9WNTAzMGJDRWJ6VCtSWHdNNDl0OTZ3ZEdCUE40SU1NY0dER2o2MnhTNTdXSzhHaVJuL21Xd3ptWDk5YXYxV09jNThXLzZaZ0l2VlBJWERvakQzc0NpU2k1NFhCT0pHcjMvT2RVOG9rbmZiaWtCWUg1QVMyMkRWSGdwNU1IdXNQdWt6a3ZUaGF2dkRvNTdqb0RPVDN0cFg1R085VVg5aWdxMEhCNVkyRlQvdFRwRllLdDQrekRrSlpmK3Vma3NUR01XVUc5T0VZM1FKKzlqTUw1QWMyN09hazV5azBBL09nd1lqemo3U1p0RDdsQmowTmZtTkRJc3U0ZnVadEdZQTFiMTZRYWVKSVRtcW1qZklqaFNWSFRwbWR1Y293UUsxWXhPcEpPaVZYZlp4eWFTd2ZLajBhbUFHY2RONmw5Y2thV2Zaa1E3MU1zNzkzZGc4cEhxYVd0Um1PQUxUTExVdGdMZzlMMjR0bk9UZ29hNVZ6N29LMWRqRjluaWViNm03M0FNYW01cEtoenpkVjlYSElsNUlsNzY2bVl6THFHT3pUQUxObllzY3g0bHpOOWZOeW5oTDNYUXlKRWdhR2xIeEJ0OW5GL1M4ZUY3eWROK1ljTUk3c0JIU1ZXekdxK3NwVHJOV1owc1krdFM5VlU0RDk5TFlRK3pDVzEyK2ZPVFhqMUlEaWV0Mm00d29MZXU2Z0htRnpvdHMrcmd1QTJhKzlQZk1rMnMwNENtclVZTUN3UXJQWGFLUUV5STZEZHRxbUw0Sk9KSVJmTHZKbDFmQy9mSWV4MzNZdUpZYUswT3IvRW9OY01LMlhKMmw5dExLRFBOakxlWW9lQ0V6ZHRXaDVLVWFiSVVIcWd5N25jM0xsZmJzekk1MjVhUHE1NlppeUUyMFd5WEtpcEtTNVFmdmRQS01RNlRaNVRCMUE5QVFlYVhuaWpTZFNtNFdWdlN5MnN0Vjl5eU1CSFN3czVBajZ6aDRudWQrNURlNm9xRlF0S2E2VnhOelZURTltMzY2MG1GY1VmL2RIYWV6Ni8xOUZlanBWbFFJZEozZjd1TVRuRG9VMDZTdnRia2tZRTEvLzg0cVpiZSt4WEdkaEgzZDJnY0JWNXNGSWUrQ0ZPMnY1bjJkZnpXOUV4MEJkQkY4NXNwVlZ0QU1mZSticHVtci80SXdXL1RXNGd1TFlKd2VNZy9QQVQ4WFhJV3M4VmhNZTE1aHpNamQzY1B4blFETEJEY0R2Nmh6UXNxZ2JmY1ZmanZnT1A4MzNyYlFJZUNxdEQ4eWgvSTJRRlB1Vjk2MjBDR0E1bW14NXVWUEFMUVROU2QraHdHd0hzL1J2dksyaGM0QW1sT1cwUmZlUzlRaHNOc1YyZnc0Yk0yRE93QWZESzhNQVRoQTh0a2wrbjhVT0kyRWxNMXRrKy9EdFB1OUh1OENSYktQcWRUcHdmdVNFZlF4RktyMGZyd0JLZHpjRnlzL0FOaXMyUk9TaFJuTzFGZVh1L2NBV0VEdWFJdEVMUWdiOWJZTjlyY0I5NUUxdGNKM0EyTGt2SGdoUWNjQWQ5bWtSdDhlajdLSm02cGQvUU5ud2VML0ZxdHVuNFY1YUtyV1p4eXJHU2hYLzFmeXkyTmJYM3IyQjd6a0JSa3VUamUvRldyTkl6TStOQzVENndrNGl4UzVWMC9jRHREWkw5cUJuSVMvcW9adzJaeS8vVlVIYkw3MW1TVDhOVFhFMnRCaWRQeHRCbUtGRThNaytlOUVCZE1EVk5INldMUHdFN0RrY3E1S1liMDM0SEIwL0ZOWFQwK0lyUGo1b2xjMjRoWFNycFQ2K2VmU0FxNFhrMFdFajVvcDJvR29HS1JFR0hzOUxwQjc0aFFXV2FxYWhFb3ZBc29yQjVobnV0c0E4T3NnYWNmQ2YvYTlySE1CNVpRRGJvSFdQaDhKa1dWdnBEc3Mxdk5PRGVqRXdqVjVhbDN6NmllQWxUSjlTWm92dTNPSXBLME9uVlRxdGwvZDlocUlMbXlGZDQ3TlM0aWZCOTQrK1RMeTZ2dzc2SGlCcWJhSFZjY251NDJxWUdldzBMbXdIVTdRMk92M1VlQ3RBTmI0SlpFeWZlZUEzRVRJVUJobGM1UDMxM0RSRmpnMzBzbENwdVVtc2lYeGhXT3kvRlN3aXI5RkZQV3dGVC84QWt5dGNBT1hhZTBNalN5ei9obTR1V0JyWWFCQzIrVXFDUm9XYzM4WmNJc0MwUmo2dGZSUXM0VnBVNGZpbUMvd3k3WmhzRGVoMTB2Mmo0Zk0vUXNvSXZDU25aK2dmWGdkcTdwM2lQS3RadG5DUXBvWElFbUNZcE9yeFl6VFVmVWRiR1picVVGb0ZiVC9NeWdpa0ltRkxQSjJNZlE0eSt1VlkvcXFxdTczeFg4U00zYk8xNHZKOGNhTE1sZWEvTnlVK3FYQWprWEpMWVRPMDFWbmVYWEJVU292WXpVd1NGUHgvSmNJK0I4K05GdlR1b0gyOWdBQUFBQkpSVTVFcmtKZ2dnPT1cIlxuXHRcdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdFx0XHR3aWR0aD1cIjEyMFwiXG5cdFx0XHRcdFx0XHRcdGhlaWdodD1cIjEyMFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImgzIG1iLTMgZm9udC13ZWlnaHQtbm9ybWFsXCI+UGxlYXNlIHNpZ24gaW48L2gxPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cblx0XHRcdFx0XHRcdFx0VXNlcm5hbWVcblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT1cInVzZXJuYW1lXCJcblx0XHRcdFx0XHRcdFx0aWQ9XCJ1c2VybmFtZVwiXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJ1c2VybmFtZVwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZD1cIlwiXG5cdFx0XHRcdFx0XHRcdGF1dG9Gb2N1cz1cIlwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cblx0XHRcdFx0XHRcdFx0UGFzc3dvcmRcblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0aWQ9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkPVwiXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiB0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHRcdFNpZ24gaW5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuYm9keUNlbnRlciB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMzUwcHg7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDUlO1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDUlO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuIl19 */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/login.js */"));
  }

}

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map