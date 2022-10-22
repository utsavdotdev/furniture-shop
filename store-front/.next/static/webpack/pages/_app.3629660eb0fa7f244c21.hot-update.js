"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/nav-bar.jsx":
/*!***************************************!*\
  !*** ./components/layout/nav-bar.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBar": function() { return /* binding */ NavBar; }
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _context_display_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/display-context */ "./context/display-context.js");
/* harmony import */ var _context_store_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/store-context */ "./context/store-context.js");
/* harmony import */ var _public_mylogo_PNG__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/mylogo.PNG */ "./public/mylogo.PNG");
/* harmony import */ var _styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/nav-bar.module.css */ "./styles/nav-bar.module.css");
/* harmony import */ var _styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_helper_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/helper-functions */ "./utils/helper-functions.js");
/* harmony import */ var _nav_links__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav-links */ "./components/layout/nav-links.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\reactjs\\devshop\\store-front\\components\\layout\\nav-bar.jsx",
    _this = undefined,
    _s = $RefreshSig$();














var NavBar = function NavBar() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_display_context__WEBPACK_IMPORTED_MODULE_4__.default),
      updateCartViewDisplay = _useContext.updateCartViewDisplay;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_store_context__WEBPACK_IMPORTED_MODULE_5__.default),
      cart = _useContext2.cart;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
      isCheckout = _useState[0],
      setIsCheckout = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      navbar = _useState2[0],
      setNavbar = _useState2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (router.pathname === "/checkout" || router.pathname === "/payment") {
      setIsCheckout(true);
    } else {
      setIsCheckout(false);
    }
  }, [router.pathname]);

  var handleHamburgur = function handleHamburgur() {
    setNavbar(!navbar);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: (_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
        style: {
          width: "125px"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          src: _public_mylogo_PNG__WEBPACK_IMPORTED_MODULE_6__.default,
          height: "40px",
          width: "100%",
          alt: "logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this), "Furni.shop"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: (_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_10___default().navBtnContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: (_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_10___default().navLinks),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_nav_links__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this), navbar ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: (_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_10___default().navLinksSm),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_nav_links__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: (_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_10___default().hamburgurBtn),
        onClick: function onClick() {
          return handleHamburgur();
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__.FaHamburger, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), !isCheckout ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
        className: (_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_10___default().btn),
        onClick: function onClick() {
          return updateCartViewDisplay();
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_12__.BiShoppingBag, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
          children: cart.items.length > 0 ? cart.items.map(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_7__.quantity).reduce(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_7__.sum) : 0
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, _this);
};

_s(NavBar, "1JLJK8IahCalkaFhTWc6D0ygqYM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c;

$RefreshReg$(_c, "NavBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zNjI5NjYwZWIwZmE3ZjI0NGMyMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sSUFBTWdCLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDMUIsb0JBQWtDWixpREFBVSxDQUFDSyw2REFBRCxDQUE1QztBQUFBLE1BQVFRLHFCQUFSLGVBQVFBLHFCQUFSOztBQUNBLHFCQUFpQmIsaURBQVUsQ0FBQ00sMkRBQUQsQ0FBM0I7QUFBQSxNQUFRUSxJQUFSLGdCQUFRQSxJQUFSOztBQUNBLGtCQUFvQ1osK0NBQVEsQ0FBQyxJQUFELENBQTVDO0FBQUEsTUFBT2EsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBNEJkLCtDQUFRLENBQUMsS0FBRCxDQUFwQztBQUFBLE1BQU9lLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUVBLE1BQU1DLE1BQU0sR0FBR3JCLHNEQUFTLEVBQXhCO0FBRUFHLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlrQixNQUFNLENBQUNDLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUNELE1BQU0sQ0FBQ0MsUUFBUCxLQUFvQixVQUEzRCxFQUF1RTtBQUNyRUosTUFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYjtBQUNELEtBRkQsTUFFTztBQUNMQSxNQUFBQSxhQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0Q7QUFDRixHQU5RLEVBTU4sQ0FBQ0csTUFBTSxDQUFDQyxRQUFSLENBTk0sQ0FBVDs7QUFRQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJILElBQUFBLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFFVCw4RUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFBRyxhQUFLLEVBQUU7QUFBRWUsVUFBQUEsS0FBSyxFQUFFO0FBQVQsU0FBVjtBQUFBLGdDQUNFLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFFaEIsdURBQVo7QUFBd0IsZ0JBQU0sRUFBQyxNQUEvQjtBQUFzQyxlQUFLLEVBQUMsTUFBNUM7QUFBbUQsYUFBRyxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBT0U7QUFBSyxlQUFTLEVBQUVDLG9GQUFoQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUEsNkVBQWhCO0FBQUEsK0JBQ0UsOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUlHUyxNQUFNLGdCQUNMO0FBQUssaUJBQVMsRUFBRVQsK0VBQWhCO0FBQUEsK0JBQ0UsOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESyxHQUlILElBUk4sZUFTRTtBQUFLLGlCQUFTLEVBQUVBLGlGQUFoQjtBQUFxQyxlQUFPLEVBQUU7QUFBQSxpQkFBTWEsZUFBZSxFQUFyQjtBQUFBLFNBQTlDO0FBQUEsK0JBQ0UsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixFQVlHLENBQUNOLFVBQUQsZ0JBQ0M7QUFDRSxpQkFBUyxFQUFFUCx3RUFEYjtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNSyxxQkFBcUIsRUFBM0I7QUFBQSxTQUZYO0FBQUEsZ0NBSUUsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixFQUlvQixHQUpwQixlQUtFO0FBQUEsb0JBQ0dDLElBQUksQ0FBQ2UsS0FBTCxDQUFXQyxNQUFYLEdBQW9CLENBQXBCLEdBQXdCaEIsSUFBSSxDQUFDZSxLQUFMLENBQVdFLEdBQVgsQ0FBZXRCLDZEQUFmLEVBQXlCdUIsTUFBekIsQ0FBZ0N0Qix3REFBaEMsQ0FBeEIsR0FBK0Q7QUFEbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxHQVVHLElBdEJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0NELENBdERNOztHQUFNRTtVQU1JZDs7O0tBTkpjO0FBd0RiLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L25hdi1iYXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCaVNob3BwaW5nQmFnIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XHJcbmltcG9ydCB7IEZhSGFtYnVyZ2VyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCBEaXNwbGF5Q29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9kaXNwbGF5LWNvbnRleHRcIjtcclxuaW1wb3J0IFN0b3JlQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9zdG9yZS1jb250ZXh0XCI7XHJcbmltcG9ydCBNZWR1c2FMb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvbXlsb2dvLlBOR1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvbmF2LWJhci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHF1YW50aXR5LCBzdW0gfSBmcm9tIFwiLi4vLi4vdXRpbHMvaGVscGVyLWZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgTmF2TGlua3MgZnJvbSBcIi4vbmF2LWxpbmtzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2QmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdXBkYXRlQ2FydFZpZXdEaXNwbGF5IH0gPSB1c2VDb250ZXh0KERpc3BsYXlDb250ZXh0KTtcclxuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoU3RvcmVDb250ZXh0KTtcclxuICBjb25zdCBbaXNDaGVja291dCwgc2V0SXNDaGVja291dF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbmF2YmFyLCBzZXROYXZiYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2NoZWNrb3V0XCIgfHwgcm91dGVyLnBhdGhuYW1lID09PSBcIi9wYXltZW50XCIpIHtcclxuICAgICAgc2V0SXNDaGVja291dCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzQ2hlY2tvdXQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSGFtYnVyZ3VyID0gKCkgPT4ge1xyXG4gICAgc2V0TmF2YmFyKCFuYXZiYXIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGEgc3R5bGU9e3sgd2lkdGg6IFwiMTI1cHhcIiB9fT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e01lZHVzYUxvZ299IGhlaWdodD1cIjQwcHhcIiB3aWR0aD1cIjEwMCVcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgIEZ1cm5pLnNob3BcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZCdG5Db250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlua3N9PlxyXG4gICAgICAgICAgPE5hdkxpbmtzLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7bmF2YmFyID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZMaW5rc1NtfT5cclxuICAgICAgICAgICAgPE5hdkxpbmtzLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGFtYnVyZ3VyQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVIYW1idXJndXIoKX0+XHJcbiAgICAgICAgICA8RmFIYW1idXJnZXIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHshaXNDaGVja291dCA/IChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnRufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVDYXJ0Vmlld0Rpc3BsYXkoKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJpU2hvcHBpbmdCYWcgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIHtjYXJ0Lml0ZW1zLmxlbmd0aCA+IDAgPyBjYXJ0Lml0ZW1zLm1hcChxdWFudGl0eSkucmVkdWNlKHN1bSkgOiAwfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCaVNob3BwaW5nQmFnIiwiRmFIYW1idXJnZXIiLCJEaXNwbGF5Q29udGV4dCIsIlN0b3JlQ29udGV4dCIsIk1lZHVzYUxvZ28iLCJzdHlsZXMiLCJxdWFudGl0eSIsInN1bSIsIk5hdkxpbmtzIiwiTmF2QmFyIiwidXBkYXRlQ2FydFZpZXdEaXNwbGF5IiwiY2FydCIsImlzQ2hlY2tvdXQiLCJzZXRJc0NoZWNrb3V0IiwibmF2YmFyIiwic2V0TmF2YmFyIiwicm91dGVyIiwicGF0aG5hbWUiLCJoYW5kbGVIYW1idXJndXIiLCJjb250YWluZXIiLCJ3aWR0aCIsIm5hdkJ0bkNvbnRhaW5lciIsIm5hdkxpbmtzIiwibmF2TGlua3NTbSIsImhhbWJ1cmd1ckJ0biIsImJ0biIsIml0ZW1zIiwibGVuZ3RoIiwibWFwIiwicmVkdWNlIl0sInNvdXJjZVJvb3QiOiIifQ==