webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Modal; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ \"./node_modules/emailjs-com/source/index.js\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Volumes/Studio Hard Drive/Dev_loper/dryJohn/frontend/dryjohn/src/components/Modal.js\",\n    _s = $RefreshSig$();\n\n\n\n\nconst MAIL_USER = process.env.MAIL_USER;\nconst MAIL_TEMPLATE_ID = process.env.MAIL_TEMPLATE_ID;\nconst MAIL_SERVICE_ID = process.env.MAIL_SERVICE_ID;\nconst MAIL_ACCESS_TOKEN = process.env.MAIL_ACCESS_TOKEN;\nObject(emailjs_com__WEBPACK_IMPORTED_MODULE_2__[\"init\"])(MAIL_USER);\nconsole.log(process.env);\nfunction Modal({\n  setModal\n}) {\n  _s();\n\n  const {\n    0: contactSent,\n    1: setContactSent\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: name,\n    1: setName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const {\n    0: phone,\n    1: setPhone\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const {\n    0: message,\n    1: setMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n\n  const onNameChange = e => setName(e.target.value);\n\n  const onEmailChange = e => setEmail(e.target.value);\n\n  const onPhoneChange = e => setPhone(e.target.value);\n\n  const onMessageChange = e => setMessage(e.target.value); // Send POST request to backend to add data to database\n  // const data = [name, email, phone, message];\n  // const handleSubmit = (e) => {\n  //   e.preventDefault();\n  //   fetch(\"/api/contact\", headers).then(\n  //     (res) =>\n  //       res\n  //         .json()\n  //         .then((res) => console.log(res))\n  //         .catch((err) => console.error(err))\n  //   );\n  //   setContactSent(true);\n  //   setModal(false);\n  // };\n  // const headers = {\n  //   method: \"POST\",\n  //   headers: { \"Content-Type\": \"application/json\" },\n  //   body: JSON.stringify(data),\n  // };\n\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    emailjs_com__WEBPACK_IMPORTED_MODULE_2___default.a.sendForm(\"service_d75tve8\", \"dry_john\", e.target, \"user_rDK5kppEAA50sEtArxyPx\").then(result => {\n      console.log(result.text);\n      setContactSent(true);\n    }, error => {\n      console.log(error.text);\n    });\n    e.target.reset();\n  }\n\n  const styles = {\n    wrapper: {\n      position: \"absolute\",\n      background: \"#222d\",\n      color: \"#fff\",\n      zIndex: 4,\n      width: \"100vw\",\n      height: \"100vh\",\n      zIndex: 50,\n      top: 0,\n      right: 0,\n      left: 0,\n      bottom: 0\n    },\n    container: {\n      display: \"flex\",\n      flexDirection: \"column\",\n      alignItems: \"center\",\n      justifyContent: \"center\",\n      height: \"100%\"\n    },\n    input: {\n      height: \"25px\",\n      border: \".5px black solid\",\n      borderRadius: \"5px\",\n      width: \"350px\",\n      marginTop: \"10px\"\n    },\n    inputCheck: {\n      height: \"25px\",\n      border: \".5px black solid\",\n      borderRadius: \"5px\",\n      display: \"flex\",\n      marginTop: \"10px\"\n    },\n    form: {\n      display: \"flex\",\n      flexDirection: \"column\"\n    },\n    close: {\n      position: \"absolute\",\n      top: \"200px\",\n      right: \"200px\",\n      margin: \"50px\",\n      cursor: \"pointer\",\n      zIndex: 50\n    },\n    line1: {\n      background: \"#fff\",\n      width: \"25px\",\n      height: \"3px\",\n      margin: \"3px\",\n      transform: \"rotate(-45deg) translateY(4px)\"\n    },\n    line2: {\n      background: \"#fff\",\n      width: \"25px\",\n      height: \"3px\",\n      margin: \"3px\",\n      transform: \"rotate(45deg)translateY(-4px)\"\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: styles.wrapper,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      onClick: () => setModal(false),\n      style: styles.close,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: styles.line1\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: styles.line2\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: styles.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Contact\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 9\n      }, this), !contactSent ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        style: styles.form,\n        onSubmit: handleSubmit,\n        method: \"POST\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          style: styles.input,\n          placeholder: \"Name\",\n          type: \"text\",\n          name: \"name\",\n          onChange: onNameChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          style: styles.input,\n          placeholder: \"Email Address\",\n          name: \"email\",\n          type: \"email\",\n          onChange: onEmailChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 144,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          style: styles.input,\n          placeholder: \"Phone Number\",\n          type: \"text\",\n          name: \"phone_number\",\n          onChange: onPhoneChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          style: styles.input,\n          name: \"message\",\n          placeholder: \"Message\",\n          type: \"textarea\",\n          onChange: onMessageChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 158,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          style: styles.input,\n          type: \"submit\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 166,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"We will contact you as soon as possible!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 169,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 128,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Modal, \"Issa/juKz+mWIkbqMVfyk4NahLE=\");\n\n_c = Modal;\n\nvar _c;\n\n$RefreshReg$(_c, \"Modal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwuanM/NDdmMiJdLCJuYW1lcyI6WyJNQUlMX1VTRVIiLCJwcm9jZXNzIiwiZW52IiwiTUFJTF9URU1QTEFURV9JRCIsIk1BSUxfU0VSVklDRV9JRCIsIk1BSUxfQUNDRVNTX1RPS0VOIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJNb2RhbCIsInNldE1vZGFsIiwiY29udGFjdFNlbnQiLCJzZXRDb250YWN0U2VudCIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGhvbmUiLCJzZXRQaG9uZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwib25OYW1lQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25FbWFpbENoYW5nZSIsIm9uUGhvbmVDaGFuZ2UiLCJvbk1lc3NhZ2VDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsanMiLCJzZW5kRm9ybSIsInRoZW4iLCJyZXN1bHQiLCJ0ZXh0IiwiZXJyb3IiLCJyZXNldCIsInN0eWxlcyIsIndyYXBwZXIiLCJwb3NpdGlvbiIsImJhY2tncm91bmQiLCJjb2xvciIsInpJbmRleCIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwicmlnaHQiLCJsZWZ0IiwiYm90dG9tIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJpbnB1dCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsImlucHV0Q2hlY2siLCJmb3JtIiwiY2xvc2UiLCJtYXJnaW4iLCJjdXJzb3IiLCJsaW5lMSIsInRyYW5zZm9ybSIsImxpbmUyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsU0FBOUI7QUFDQSxNQUFN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RSxrQkFBUSxFQUFFM0I7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRCRixlQThCRTtBQUFRLGVBQUssRUFBRVUsTUFBTSxDQUFDaUIsS0FBdEI7QUFBNkIsY0FBSSxFQUFDLFFBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxnQkFrQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQ0Q7O0dBbkt1QjlDLEs7O0tBQUFBLEsiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZW1haWxqcyBmcm9tIFwiZW1haWxqcy1jb21cIjtcbmltcG9ydCB7IGluaXQgfSBmcm9tIFwiZW1haWxqcy1jb21cIjtcblxuY29uc3QgTUFJTF9VU0VSID0gcHJvY2Vzcy5lbnYuTUFJTF9VU0VSO1xuY29uc3QgTUFJTF9URU1QTEFURV9JRCA9IHByb2Nlc3MuZW52Lk1BSUxfVEVNUExBVEVfSUQ7XG5jb25zdCBNQUlMX1NFUlZJQ0VfSUQgPSBwcm9jZXNzLmVudi5NQUlMX1NFUlZJQ0VfSUQ7XG5jb25zdCBNQUlMX0FDQ0VTU19UT0tFTiA9IHByb2Nlc3MuZW52Lk1BSUxfQUNDRVNTX1RPS0VOO1xuaW5pdChNQUlMX1VTRVIpO1xuY29uc29sZS5sb2cocHJvY2Vzcy5lbnYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoeyBzZXRNb2RhbCB9KSB7XG4gIGNvbnN0IFtjb250YWN0U2VudCwgc2V0Q29udGFjdFNlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IG9uTmFtZUNoYW5nZSA9IChlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgY29uc3Qgb25FbWFpbENoYW5nZSA9IChlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7XG4gIGNvbnN0IG9uUGhvbmVDaGFuZ2UgPSAoZSkgPT4gc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpO1xuICBjb25zdCBvbk1lc3NhZ2VDaGFuZ2UgPSAoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSk7XG5cbiAgLy8gU2VuZCBQT1NUIHJlcXVlc3QgdG8gYmFja2VuZCB0byBhZGQgZGF0YSB0byBkYXRhYmFzZVxuICAvLyBjb25zdCBkYXRhID0gW25hbWUsIGVtYWlsLCBwaG9uZSwgbWVzc2FnZV07XG4gIC8vIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyAgIGZldGNoKFwiL2FwaS9jb250YWN0XCIsIGhlYWRlcnMpLnRoZW4oXG4gIC8vICAgICAocmVzKSA9PlxuICAvLyAgICAgICByZXNcbiAgLy8gICAgICAgICAuanNvbigpXG4gIC8vICAgICAgICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzKSlcbiAgLy8gICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKVxuICAvLyAgICk7XG5cbiAgLy8gICBzZXRDb250YWN0U2VudCh0cnVlKTtcbiAgLy8gICBzZXRNb2RhbChmYWxzZSk7XG4gIC8vIH07XG4gIC8vIGNvbnN0IGhlYWRlcnMgPSB7XG4gIC8vICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgLy8gICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gIC8vICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gIC8vIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZW1haWxqc1xuICAgICAgLnNlbmRGb3JtKFxuICAgICAgICBcInNlcnZpY2VfZDc1dHZlOFwiLFxuICAgICAgICBcImRyeV9qb2huXCIsXG4gICAgICAgIGUudGFyZ2V0LFxuICAgICAgICBcInVzZXJfckRLNWtwcEVBQTUwc0V0QXJ4eVB4XCJcbiAgICAgIClcbiAgICAgIC50aGVuKFxuICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnRleHQpO1xuICAgICAgICAgIHNldENvbnRhY3RTZW50KHRydWUpXG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIGUudGFyZ2V0LnJlc2V0KCk7XG4gIH1cbiAgY29uc3Qgc3R5bGVzID0ge1xuICAgIHdyYXBwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBiYWNrZ3JvdW5kOiBcIiMyMjJkXCIsXG4gICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICB6SW5kZXg6IDQsXG4gICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICB6SW5kZXg6IDUwLFxuICAgICAgdG9wOiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgIH0sXG4gICAgY29udGFpbmVyOiB7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgIGhlaWdodDogXCIyNXB4XCIsXG4gICAgICBib3JkZXI6IFwiLjVweCBibGFjayBzb2xpZFwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgd2lkdGg6IFwiMzUwcHhcIixcbiAgICAgIG1hcmdpblRvcDogXCIxMHB4XCIsXG4gICAgfSxcbiAgICBpbnB1dENoZWNrOiB7XG4gICAgICBoZWlnaHQ6IFwiMjVweFwiLFxuICAgICAgYm9yZGVyOiBcIi41cHggYmxhY2sgc29saWRcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuXG4gICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIH0sXG4gICAgY2xvc2U6IHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICB0b3A6IFwiMjAwcHhcIixcbiAgICAgIHJpZ2h0OiBcIjIwMHB4XCIsXG4gICAgICBtYXJnaW46IFwiNTBweFwiLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIHpJbmRleDogNTAsXG4gICAgfSxcbiAgICBsaW5lMToge1xuICAgICAgYmFja2dyb3VuZDogXCIjZmZmXCIsXG4gICAgICB3aWR0aDogXCIyNXB4XCIsXG4gICAgICBoZWlnaHQ6IFwiM3B4XCIsXG4gICAgICBtYXJnaW46IFwiM3B4XCIsXG4gICAgICB0cmFuc2Zvcm06IFwicm90YXRlKC00NWRlZykgdHJhbnNsYXRlWSg0cHgpXCIsXG4gICAgfSxcbiAgICBsaW5lMjoge1xuICAgICAgYmFja2dyb3VuZDogXCIjZmZmXCIsXG4gICAgICB3aWR0aDogXCIyNXB4XCIsXG4gICAgICBoZWlnaHQ6IFwiM3B4XCIsXG4gICAgICBtYXJnaW46IFwiM3B4XCIsXG4gICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDQ1ZGVnKXRyYW5zbGF0ZVkoLTRweClcIixcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbChmYWxzZSl9IHN0eWxlPXtzdHlsZXMuY2xvc2V9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubGluZTF9PjwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubGluZTJ9PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGgxPkNvbnRhY3Q8L2gxPlxuICAgICAgICB7IWNvbnRhY3RTZW50ID8gKFxuICAgICAgICAgIDxmb3JtIHN0eWxlPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25OYW1lQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25FbWFpbENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXJcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwaG9uZV9udW1iZXJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25QaG9uZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25NZXNzYWdlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmlucHV0IH10eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPldlIHdpbGwgY29udGFjdCB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZSE8L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Modal.js\n");

/***/ })

})