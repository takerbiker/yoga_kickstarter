webpackHotUpdate("static/development/pages/afterclassreview.js",{

/***/ "./pages/afterclassreview.js":
/*!***********************************!*\
  !*** ./pages/afterclassreview.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Afterclassreview; });
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






var _jsxFileName = "/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/afterclassreview.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


 // For fetch API



 // const Afterclassreview = (props) => (
// 	<Layout title="After class review">
// 		<Head>
// 			<title>Review your class s</title>
// 			<link
// 				rel="stylesheet"
// 				href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
// 				integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
// 				crossorigin="anonymous"
// 			/>
// 		</Head>
// 		<h1>Review your class</h1>
// 		<h3>Might not need this page any more</h3>
// 		<p>Tick all that apply. Which exercises did you learn during the class?</p>
// 		Insert checkboxes
// 		<p>Your comments (This is only for yourself)</p>
// 	</Layout>
// );

var Afterclassreview =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Afterclassreview, _Component);

  function Afterclassreview(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Afterclassreview);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Afterclassreview).call(this, props));
    _this.state = {
      comments: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Afterclassreview, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          poses = _this$props.poses,
          statusCode = _this$props.statusCode;

      if (statusCode) {
        return __jsx(_error__WEBPACK_IMPORTED_MODULE_11__["default"], {
          statusCode: statusCode,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        });
      }

      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "After Class Review",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-1847706654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Review your class"), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
        crossorigin: "anonymous",
        className: "jsx-1847706654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), __jsx("h1", {
        className: "jsx-1847706654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Review your class"), __jsx("h3", {
        className: "jsx-1847706654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Might not need this page any more"), __jsx("p", {
        className: "jsx-1847706654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Tick all that apply. Which exercises did you learn during the class?"), "Insert checkboxes", __jsx("p", {
        className: "jsx-1847706654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Your comments (This is only for yourself)"), console.log(poses), __jsx("div", {
        className: "jsx-1847706654" + " " + "input-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, poses.map(function (pose) {
        return __jsx("div", {
          "class": "input-group-prepend",
          className: "jsx-1847706654",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-1847706654" + " " + "form-control",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, pose.name), __jsx("div", {
          "class": "input-group-text",
          className: "jsx-1847706654",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, __jsx("input", {
          type: "checkbox",
          "aria-label": "Checkbox button for following text input",
          className: "jsx-1847706654",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        })));
      })), __jsx("ul", {
        className: "jsx-1847706654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, poses.map(function (pose) {
        return __jsx("li", {
          key: pose.id,
          className: "jsx-1847706654",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-1847706654" + " " + "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-1847706654" + " " + "card-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-1847706654" + " " + "card-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/p/[id]",
          as: "/p/".concat(pose.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, __jsx("a", {
          className: "jsx-1847706654",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, pose.name))), __jsx("p", {
          className: "jsx-1847706654",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, pose.category))));
      })), __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-1847706654" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "comments",
        className: "jsx-1847706654" + " " + "labels",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Comments"), __jsx("textarea", {
        type: "text",
        name: "comments",
        id: "comments",
        value: this.state.comments,
        onChange: this.handleChange,
        className: "jsx-1847706654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-1847706654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), __jsx("input", {
        type: "submit",
        value: "Submit",
        className: "jsx-1847706654" + " " + "btn btn-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1847706654",
        __self: this
      }, ".card.jsx-1847706654{width:18rem;border:orange solid 1px;}img.jsx-1847706654{width:12rem;}li.jsx-1847706654{list-style-type:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9hZnRlcmNsYXNzcmV2aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlJZ0IsQUFHbUIsQUFLQSxBQUlTLFlBUkcsQUFLekIsU0FJQSxlQVJBIiwiZmlsZSI6Ii9Vc2Vycy9zaGFocmFuaXJhaGltYW4vUHJvamVjdHMveW9nYV9raWNrc3RhcnRlci9raWNrc3RhcnRlcl9mcm9udGVuZC9wYWdlcy9hZnRlcmNsYXNzcmV2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnOyAvLyBGb3IgZmV0Y2ggQVBJXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9fZXJyb3InO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuLy8gY29uc3QgQWZ0ZXJjbGFzc3JldmlldyA9IChwcm9wcykgPT4gKFxuLy8gXHQ8TGF5b3V0IHRpdGxlPVwiQWZ0ZXIgY2xhc3MgcmV2aWV3XCI+XG4vLyBcdFx0PEhlYWQ+XG4vLyBcdFx0XHQ8dGl0bGU+UmV2aWV3IHlvdXIgY2xhc3MgczwvdGl0bGU+XG4vLyBcdFx0XHQ8bGlua1xuLy8gXHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcbi8vIFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4vLyBcdFx0XHRcdGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCJcbi8vIFx0XHRcdFx0Y3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuLy8gXHRcdFx0Lz5cbi8vIFx0XHQ8L0hlYWQ+XG4vLyBcdFx0PGgxPlJldmlldyB5b3VyIGNsYXNzPC9oMT5cbi8vIFx0XHQ8aDM+TWlnaHQgbm90IG5lZWQgdGhpcyBwYWdlIGFueSBtb3JlPC9oMz5cbi8vIFx0XHQ8cD5UaWNrIGFsbCB0aGF0IGFwcGx5LiBXaGljaCBleGVyY2lzZXMgZGlkIHlvdSBsZWFybiBkdXJpbmcgdGhlIGNsYXNzPzwvcD5cbi8vIFx0XHRJbnNlcnQgY2hlY2tib3hlc1xuLy8gXHRcdDxwPllvdXIgY29tbWVudHMgKFRoaXMgaXMgb25seSBmb3IgeW91cnNlbGYpPC9wPlxuLy8gXHQ8L0xheW91dD5cbi8vICk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFmdGVyY2xhc3NyZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y29tbWVudHMgOiAnJ1xuXHRcdH07XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zZXMnKTtcblx0XHRjb25zdCBzdGF0dXNDb2RlID0gcmVzLnN0YXR1cyA+IDIwMCA/IHJlcy5zdGF0dXMgOiBmYWxzZTtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblx0XHRjb25zb2xlLmxvZyhgWW9nYSBleGVyY2lzZXMgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHQvLyBwb3NlcyA6IGRhdGEubWFwKChlbnRyeSkgPT4gZW50cnkucG9zZSlcblx0XHRcdHBvc2VzICAgICAgOiBkYXRhLFxuXHRcdFx0c3RhdHVzQ29kZVxuXHRcdH07XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBwb3Nlcywgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wcztcblxuXHRcdGlmIChzdGF0dXNDb2RlKSB7XG5cdFx0XHRyZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9e3N0YXR1c0NvZGV9IC8+O1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dCB0aXRsZT1cIkFmdGVyIENsYXNzIFJldmlld1wiPlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+UmV2aWV3IHlvdXIgY2xhc3M8L3RpdGxlPlxuXHRcdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuXHRcdFx0XHRcdFx0aW50ZWdyaXR5PVwic2hhMzg0LWdnT3lSMGlYQ2JNUXYzWGlwbWEzNE1EK2RILzFmUTc4NC9qNmNZL2lKVFFVT2hjV3I3eDlKdm9SeFQyTVp3MVRcIlxuXHRcdFx0XHRcdFx0Y3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGgxPlJldmlldyB5b3VyIGNsYXNzPC9oMT5cblx0XHRcdFx0PGgzPk1pZ2h0IG5vdCBuZWVkIHRoaXMgcGFnZSBhbnkgbW9yZTwvaDM+XG5cdFx0XHRcdDxwPlRpY2sgYWxsIHRoYXQgYXBwbHkuIFdoaWNoIGV4ZXJjaXNlcyBkaWQgeW91IGxlYXJuIGR1cmluZyB0aGUgY2xhc3M/PC9wPlxuXHRcdFx0XHRJbnNlcnQgY2hlY2tib3hlc1xuXHRcdFx0XHQ8cD5Zb3VyIGNvbW1lbnRzIChUaGlzIGlzIG9ubHkgZm9yIHlvdXJzZWxmKTwvcD5cblx0XHRcdFx0ey8qIHtjb25zb2xlLmxvZyh0eXBlb2YgdGhpcy5wcm9wcyl9ICAqL31cblx0XHRcdFx0e2NvbnNvbGUubG9nKHBvc2VzKX1cblx0XHRcdFx0ey8qIENoZWNrYm94ZXMgICovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cblx0XHRcdFx0XHR7cG9zZXMubWFwKChwb3NlKSA9PiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj57cG9zZS5uYW1lfTwvcD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgYXJpYS1sYWJlbD1cIkNoZWNrYm94IGJ1dHRvbiBmb3IgZm9sbG93aW5nIHRleHQgaW5wdXRcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdHtwb3Nlcy5tYXAoKHBvc2UpID0+IChcblx0XHRcdFx0XHRcdDxsaSBrZXk9e3Bvc2UuaWR9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdFx0XHRcdFx0XHR7LyogPGltZyBzcmM9e3Bvc2UuaW1hZ2V9IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIi4uLlwiIC8+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cG9zZS5pZH1gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT57cG9zZS5uYW1lfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+e3Bvc2UuY2F0ZWdvcnl9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHRcdHsvKiBGb3JtIGZvciBjb21tZW50cyAgKi99XG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJjb21tZW50c1wiIGNsYXNzTmFtZT1cImxhYmVsc1wiPlxuXHRcdFx0XHRcdFx0Q29tbWVudHNcblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0bmFtZT1cImNvbW1lbnRzXCJcblx0XHRcdFx0XHRcdGlkPVwiY29tbWVudHNcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuY29tbWVudHN9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL3d3dy55b2dham91cm5hbC5jb20vLmltYWdlL2FyXzE6MSUyQ2NfZmlsbCUyQ2NzX3NyZ2IlMkNmbF9wcm9ncmVzc2l2ZSUyQ2dfZmFjZXM6Y2VudGVyJTJDcV9hdXRvOmdvb2QlMkN3XzYyMC9NVFEyTWpJM09EY3lNREU1T1RneE9USXgvY293LWZhY2Utd2l0aC1lYWdsZS1hcm1zLWZvcmhpcHMuanBnXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXG5cdFx0XHRcdFx0XHRhbHQ9XCIuLi5cIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRTb21lIHF1aWNrIGV4YW1wbGUgdGV4dCB0byBidWlsZCBvbiB0aGUgY2FyZCB0aXRsZSBhbmQgbWFrZSB1cCB0aGUgYnVsayBvZiB0aGUgY2FyZCdzXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQuXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PiAqL31cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5jYXJkIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxOHJlbTtcblx0XHRcdFx0XHRcdGJvcmRlcjogb3JhbmdlIHNvbGlkIDFweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEycmVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGxpIHtcblx0XHRcdFx0XHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/shahranirahiman/Projects/yoga_kickstarter/kickstarter_frontend/pages/afterclassreview.js */"));
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
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()('http://localhost:3000/poses'));

            case 2:
              res = _context.sent;
              statusCode = res.status > 200 ? res.status : false;
              _context.next = 6;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

            case 6:
              data = _context.sent;
              console.log("Yoga exercises data fetched. Count: ".concat(data.length));
              return _context.abrupt("return", {
                // poses : data.map((entry) => entry.pose)
                poses: data,
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

  return Afterclassreview;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=afterclassreview.js.762de43f8a9df046ea42.hot-update.js.map