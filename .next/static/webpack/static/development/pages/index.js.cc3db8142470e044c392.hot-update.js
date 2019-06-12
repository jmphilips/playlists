webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/bender/workspace/playlist/pages/index.js";




var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      playlistName: ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, function (props) {
    var values = props.values,
        touched = props.touched,
        errors = props.errors,
        dirty = props.dirty,
        isSubmitting = props.isSubmitting,
        handleChange = props.handleChange,
        handleBlur = props.handleBlur,
        handleSubmit = props.handleSubmit,
        handleReset = props.handleReset;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "Playlist Name",
      style: {
        display: 'block'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Playlist Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "playlistName",
      placeholder: "Enter your Playlist Name",
      type: "text",
      value: values.playlistName,
      onChange: handleChange,
      onBlur: handleBlur,
      className: errors.playlistName && touched.playlistName ? 'text-input error' : 'text-input',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), errors.playlistName && touched.playlistName && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-feedback",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, errors.playlistName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "outline",
      onClick: handleReset,
      disabled: !dirty || isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Reset"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Submit"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.cc3db8142470e044c392.hot-update.js.map