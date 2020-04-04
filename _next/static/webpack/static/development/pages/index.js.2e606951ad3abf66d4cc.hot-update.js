webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SectionProjects/ProjectCard/index.js":
/*!*********************************************************!*\
  !*** ./components/SectionProjects/ProjectCard/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/SectionProjects/ProjectCard/styles.js");
var _this = undefined,
    _jsxFileName = "/home/laferu/projetos/Laferu.github.io/components/SectionProjects/ProjectCard/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ProjectCard = function ProjectCard(_ref) {
  var data = _ref.data;
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["StyledCard"], {
    img: data.img,
    title: data.title,
    href: data.url,
    target: "_blank",
    rel: "noopener",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flipper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "front",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, data.title)), __jsx("div", {
    className: "back",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "Tecnologias:"), data.tecnologias.map(function (e, index) {
    return __jsx("li", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, e);
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

/***/ })

})
//# sourceMappingURL=index.js.2e606951ad3abf66d4cc.hot-update.js.map