webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SectionProjects/ProjectCard/styles.js":
/*!**********************************************************!*\
  !*** ./components/SectionProjects/ProjectCard/styles.js ***!
  \**********************************************************/
/*! exports provided: StyledCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledCard", function() { return StyledCard; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 200px;\n  height: 300px;\n  box-shadow: 2.5px 2.5px 8px #CCC;\n  border-radius: 5px;\n\n  .flipper {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform-style: preserve-3d;\n    transition: transform .8s;\n\n    .front {\n      /* padding: 10px; */\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n      background: url(", ");\n\n      h3 {\n        color: #FFF;\n        text-shadow: 2.5px 2.5px 8px #000;\n        padding: 10px;\n        background: #00000040;\n        font-size: .8rem;\n      }\n    }\n\n    .back {\n      padding: 10px;\n      display: flex;\n      flex-direction: column;\n      background: #FFF;\n      justify-content: center;\n      transform: rotate3d(0, 1, 0, 180deg);\n\n      ul {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        font-size: .9rem;\n\n        h4 {\n          margin: 0;\n          margin-bottom: 10px;\n        }\n\n        li + li {\n          margin-top: 3px;\n        }\n      }\n    }\n\n    .back, .front {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      backface-visibility: hidden;\n    }\n  }\n\n  :hover .flipper {\n    transform: rotate3d(0, 1, 0, 180deg);\n  }\n\n  h3 {\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a(_templateObject(), function (props) {
  return props.img;
});

/***/ })

})
//# sourceMappingURL=index.js.73e45b6ac9843e0f2166.hot-update.js.map