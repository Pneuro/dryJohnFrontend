webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Modal; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ \"./node_modules/emailjs-com/source/index.js\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Volumes/Studio Hard Drive/Dev_loper/dryJohn/frontend/dryjohn/src/components/Modal.js\",\n    _s = $RefreshSig$();\n\n\n\n\nconst MAIL_USER = process.env.MAIL_USER;\nconst MAIL_TEMPLATE_ID = process.env.MAIL_TEMPLATE_ID;\nconst MAIL_SERVICE_ID = process.env.MAIL_SERVICE_ID;\nconst MAIL_ACCESS_TOKEN = process.env.MAIL_ACCESS_TOKEN;\nObject(emailjs_com__WEBPACK_IMPORTED_MODULE_2__[\"init\"])(MAIL_USER);\nconsole.log(process.env);\nfunction Modal({\n  setModal\n}) {\n  _s();\n\n  const {\n    0: contactSent,\n    1: setContactSent\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: name,\n    1: setName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const {\n    0: phone,\n    1: setPhone\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const {\n    0: message,\n    1: setMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n\n  const onNameChange = e => setName(e.target.value);\n\n  const onEmailChange = e => setEmail(e.target.value);\n\n  const onPhoneChange = e => setPhone(e.target.value);\n\n  const onMessageChange = e => setMessage(e.target.value); // Send POST request to backend to add data to database\n  // const data = [name, email, phone, message];\n  // const handleSubmit = (e) => {\n  //   e.preventDefault();\n  //   fetch(\"/api/contact\", headers).then(\n  //     (res) =>\n  //       res\n  //         .json()\n  //         .then((res) => console.log(res))\n  //         .catch((err) => console.error(err))\n  //   );\n  //   setContactSent(true);\n  //   setModal(false);\n  // };\n  // const headers = {\n  //   method: \"POST\",\n  //   headers: { \"Content-Type\": \"application/json\" },\n  //   body: JSON.stringify(data),\n  // };\n\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    emailjs_com__WEBPACK_IMPORTED_MODULE_2___default.a.sendForm(\"service_d75tve8\", \"dry_john\", e.target, \"user_rDK5kppEAA50sEtArxyPx\").then(result => {\n      console.log(result.text);\n      setContent;\n    }, error => {\n      console.log(error.text);\n    });\n    e.target.reset();\n  }\n\n  const styles = {\n    wrapper: {\n      position: \"absolute\",\n      background: \"#222d\",\n      color: \"#fff\",\n      zIndex: 4,\n      width: \"100vw\",\n      height: \"100vh\",\n      zIndex: 50,\n      top: 0,\n      right: 0,\n      left: 0,\n      bottom: 0\n    },\n    container: {\n      display: \"flex\",\n      flexDirection: \"column\",\n      alignItems: \"center\",\n      justifyContent: \"center\",\n      height: \"100%\"\n    },\n    input: {\n      height: \"25px\",\n      border: \".5px black solid\",\n      borderRadius: \"5px\",\n      width: \"350px\",\n      marginTop: \"10px\"\n    },\n    inputCheck: {\n      height: \"25px\",\n      border: \".5px black solid\",\n      borderRadius: \"5px\",\n      display: \"flex\",\n      marginTop: \"10px\"\n    },\n    form: {\n      display: \"flex\",\n      flexDirection: \"column\"\n    },\n    close: {\n      position: \"absolute\",\n      top: \"200px\",\n      right: \"200px\",\n      margin: \"50px\",\n      cursor: \"pointer\",\n      zIndex: 50\n    },\n    line1: {\n      background: \"#fff\",\n      width: \"25px\",\n      height: \"3px\",\n      margin: \"3px\",\n      transform: \"rotate(-45deg) translateY(4px)\"\n    },\n    line2: {\n      background: \"#fff\",\n      width: \"25px\",\n      height: \"3px\",\n      margin: \"3px\",\n      transform: \"rotate(45deg)translateY(-4px)\"\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: styles.wrapper,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      onClick: () => setModal(false),\n      style: styles.close,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: styles.line1\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: styles.line2\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: styles.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Contact\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 9\n      }, this), !contactSent ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        style: styles.form,\n        onSubmit: handleSubmit,\n        method: \"POST\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          style: styles.input,\n          placeholder: \"Name\",\n          type: \"text\",\n          name: \"name\",\n          onChange: onNameChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          style: styles.input,\n          placeholder: \"Email Address\",\n          name: \"email\",\n          type: \"email\",\n          onChange: onEmailChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 144,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          style: styles.input,\n          placeholder: \"Phone Number\",\n          type: \"text\",\n          name: \"phone_number\",\n          onChange: onPhoneChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          style: styles.input,\n          name: \"message\",\n          placeholder: \"Message\",\n          type: \"textarea\",\n          onChange: onMessageChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 158,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 166,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"We will contact you as soon as possible!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 169,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 128,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Modal, \"Issa/juKz+mWIkbqMVfyk4NahLE=\");\n\n_c = Modal;\n\nvar _c;\n\n$RefreshReg$(_c, \"Modal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwuanM/NDdmMiJdLCJuYW1lcyI6WyJNQUlMX1VTRVIiLCJwcm9jZXNzIiwiZW52IiwiTUFJTF9URU1QTEFURV9JRCIsIk1BSUxfU0VSVklDRV9JRCIsIk1BSUxfQUNDRVNTX1RPS0VOIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJNb2RhbCIsInNldE1vZGFsIiwiY29udGFjdFNlbnQiLCJzZXRDb250YWN0U2VudCIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGhvbmUiLCJzZXRQaG9uZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwib25OYW1lQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25FbWFpbENoYW5nZSIsIm9uUGhvbmVDaGFuZ2UiLCJvbk1lc3NhZ2VDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsanMiLCJzZW5kRm9ybSIsInRoZW4iLCJyZXN1bHQiLCJ0ZXh0Iiwic2V0Q29udGVudCIsImVycm9yIiwicmVzZXQiLCJzdHlsZXMiLCJ3cmFwcGVyIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJ6SW5kZXgiLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaW5wdXQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Ub3AiLCJpbnB1dENoZWNrIiwiZm9ybSIsImNsb3NlIiwibWFyZ2luIiwiY3Vyc29yIiwibGluZTEiLCJ0cmFuc2Zvcm0iLCJsaW5lMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFNBQTlCO0FBQ0EsTUFBTUcsZ0JBQWdCLEdBQUdGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFBckM7QUFDQSxNQUFNQyxlQUFlLEdBQUdILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxlQUFwQztBQUNBLE1BQU1DLGlCQUFpQixHQUFHSixPQUFPLENBQUNDLEdBQVIsQ0FBWUcsaUJBQXRDO0FBQ0FDLHdEQUFJLENBQUNOLFNBQUQsQ0FBSjtBQUNBTyxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsT0FBTyxDQUFDQyxHQUFwQjtBQUNlLFNBQVNPLEtBQVQsQ0FBZTtBQUFFQztBQUFGLENBQWYsRUFBNkI7QUFBQTs7QUFDMUMsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxzREFBUSxDQUFDLEtBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JGLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDRyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkosc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CTixzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JSLHNEQUFRLENBQUMsRUFBRCxDQUF0Qzs7QUFDQSxRQUFNUyxZQUFZLEdBQUlDLENBQUQsSUFBT1IsT0FBTyxDQUFDUSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFuQzs7QUFDQSxRQUFNQyxhQUFhLEdBQUlILENBQUQsSUFBT04sUUFBUSxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFyQzs7QUFDQSxRQUFNRSxhQUFhLEdBQUlKLENBQUQsSUFBT0osUUFBUSxDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFyQzs7QUFDQSxRQUFNRyxlQUFlLEdBQUlMLENBQUQsSUFBT0YsVUFBVSxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUF6QyxDQVQwQyxDQVcxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsV0FBU0ksWUFBVCxDQUFzQk4sQ0FBdEIsRUFBeUI7QUFDdkJBLEtBQUMsQ0FBQ08sY0FBRjtBQUNBQyxzREFBTyxDQUNKQyxRQURILENBRUksaUJBRkosRUFHSSxVQUhKLEVBSUlULENBQUMsQ0FBQ0MsTUFKTixFQUtJLDRCQUxKLEVBT0dTLElBUEgsQ0FRS0MsTUFBRCxJQUFZO0FBQ1YzQixhQUFPLENBQUNDLEdBQVIsQ0FBWTBCLE1BQU0sQ0FBQ0MsSUFBbkI7QUFDQUMsZ0JBQVU7QUFDWCxLQVhMLEVBWUtDLEtBQUQsSUFBVztBQUNUOUIsYUFBTyxDQUFDQyxHQUFSLENBQVk2QixLQUFLLENBQUNGLElBQWxCO0FBQ0QsS0FkTDtBQWdCQVosS0FBQyxDQUFDQyxNQUFGLENBQVNjLEtBQVQ7QUFDRDs7QUFDRCxRQUFNQyxNQUFNLEdBQUc7QUFDYkMsV0FBTyxFQUFFO0FBQ1BDLGNBQVEsRUFBRSxVQURIO0FBRVBDLGdCQUFVLEVBQUUsT0FGTDtBQUdQQyxXQUFLLEVBQUUsTUFIQTtBQUlQQyxZQUFNLEVBQUUsQ0FKRDtBQUtQQyxXQUFLLEVBQUUsT0FMQTtBQU1QQyxZQUFNLEVBQUUsT0FORDtBQU9QRixZQUFNLEVBQUUsRUFQRDtBQVFQRyxTQUFHLEVBQUUsQ0FSRTtBQVNQQyxXQUFLLEVBQUUsQ0FUQTtBQVVQQyxVQUFJLEVBQUUsQ0FWQztBQVdQQyxZQUFNLEVBQUU7QUFYRCxLQURJO0FBY2JDLGFBQVMsRUFBRTtBQUNUQyxhQUFPLEVBQUUsTUFEQTtBQUVUQyxtQkFBYSxFQUFFLFFBRk47QUFHVEMsZ0JBQVUsRUFBRSxRQUhIO0FBSVRDLG9CQUFjLEVBQUUsUUFKUDtBQUtUVCxZQUFNLEVBQUU7QUFMQyxLQWRFO0FBcUJiVSxTQUFLLEVBQUU7QUFDTFYsWUFBTSxFQUFFLE1BREg7QUFFTFcsWUFBTSxFQUFFLGtCQUZIO0FBR0xDLGtCQUFZLEVBQUUsS0FIVDtBQUlMYixXQUFLLEVBQUUsT0FKRjtBQUtMYyxlQUFTLEVBQUU7QUFMTixLQXJCTTtBQTRCYkMsY0FBVSxFQUFFO0FBQ1ZkLFlBQU0sRUFBRSxNQURFO0FBRVZXLFlBQU0sRUFBRSxrQkFGRTtBQUdWQyxrQkFBWSxFQUFFLEtBSEo7QUFJVk4sYUFBTyxFQUFFLE1BSkM7QUFNVk8sZUFBUyxFQUFFO0FBTkQsS0E1QkM7QUFvQ2JFLFFBQUksRUFBRTtBQUNKVCxhQUFPLEVBQUUsTUFETDtBQUVKQyxtQkFBYSxFQUFFO0FBRlgsS0FwQ087QUF3Q2JTLFNBQUssRUFBRTtBQUNMckIsY0FBUSxFQUFFLFVBREw7QUFFTE0sU0FBRyxFQUFFLE9BRkE7QUFHTEMsV0FBSyxFQUFFLE9BSEY7QUFJTGUsWUFBTSxFQUFFLE1BSkg7QUFLTEMsWUFBTSxFQUFFLFNBTEg7QUFNTHBCLFlBQU0sRUFBRTtBQU5ILEtBeENNO0FBZ0RicUIsU0FBSyxFQUFFO0FBQ0x2QixnQkFBVSxFQUFFLE1BRFA7QUFFTEcsV0FBSyxFQUFFLE1BRkY7QUFHTEMsWUFBTSxFQUFFLEtBSEg7QUFJTGlCLFlBQU0sRUFBRSxLQUpIO0FBS0xHLGVBQVMsRUFBRTtBQUxOLEtBaERNO0FBdURiQyxTQUFLLEVBQUU7QUFDTHpCLGdCQUFVLEVBQUUsTUFEUDtBQUVMRyxXQUFLLEVBQUUsTUFGRjtBQUdMQyxZQUFNLEVBQUUsS0FISDtBQUlMaUIsWUFBTSxFQUFFLEtBSkg7QUFLTEcsZUFBUyxFQUFFO0FBTE47QUF2RE0sR0FBZjtBQWdFQSxzQkFDRTtBQUFLLFNBQUssRUFBRTNCLE1BQU0sQ0FBQ0MsT0FBbkI7QUFBQSw0QkFDRTtBQUFLLGFBQU8sRUFBRSxNQUFNOUIsUUFBUSxDQUFDLEtBQUQsQ0FBNUI7QUFBcUMsV0FBSyxFQUFFNkIsTUFBTSxDQUFDdUIsS0FBbkQ7QUFBQSw4QkFDRTtBQUFLLGFBQUssRUFBRXZCLE1BQU0sQ0FBQzBCO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssYUFBSyxFQUFFMUIsTUFBTSxDQUFDNEI7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBSyxXQUFLLEVBQUU1QixNQUFNLENBQUNZLFNBQW5CO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVHLENBQUN4QyxXQUFELGdCQUNDO0FBQU0sYUFBSyxFQUFFNEIsTUFBTSxDQUFDc0IsSUFBcEI7QUFBMEIsZ0JBQVEsRUFBRWhDLFlBQXBDO0FBQWtELGNBQU0sRUFBQyxNQUF6RDtBQUFBLGdDQUNFO0FBQ0UsZUFBSyxFQUFFVSxNQUFNLENBQUNpQixLQURoQjtBQUVFLHFCQUFXLEVBQUMsTUFGZDtBQUdFLGNBQUksRUFBQyxNQUhQO0FBSUUsY0FBSSxFQUFDLE1BSlA7QUFLRSxrQkFBUSxFQUFFbEM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBUUU7QUFDRSxlQUFLLEVBQUVpQixNQUFNLENBQUNpQixLQURoQjtBQUVFLHFCQUFXLEVBQUMsZUFGZDtBQUdFLGNBQUksRUFBQyxPQUhQO0FBSUUsY0FBSSxFQUFDLE9BSlA7QUFLRSxrQkFBUSxFQUFFOUI7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGLGVBZUU7QUFDRSxlQUFLLEVBQUVhLE1BQU0sQ0FBQ2lCLEtBRGhCO0FBRUUscUJBQVcsRUFBQyxjQUZkO0FBR0UsY0FBSSxFQUFDLE1BSFA7QUFJRSxjQUFJLEVBQUMsY0FKUDtBQUtFLGtCQUFRLEVBQUU3QjtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkYsZUFzQkU7QUFDRSxlQUFLLEVBQUVZLE1BQU0sQ0FBQ2lCLEtBRGhCO0FBRUUsY0FBSSxFQUFDLFNBRlA7QUFHRSxxQkFBVyxFQUFDLFNBSGQ7QUFJRSxjQUFJLEVBQUMsVUFKUDtBQUtFLGtCQUFRLEVBQUU1QjtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdEJGLGVBOEJFO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGdCQWtDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStDRDs7R0FuS3VCbkIsSzs7S0FBQUEsSyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBlbWFpbGpzIGZyb20gXCJlbWFpbGpzLWNvbVwiO1xuaW1wb3J0IHsgaW5pdCB9IGZyb20gXCJlbWFpbGpzLWNvbVwiO1xuXG5jb25zdCBNQUlMX1VTRVIgPSBwcm9jZXNzLmVudi5NQUlMX1VTRVI7XG5jb25zdCBNQUlMX1RFTVBMQVRFX0lEID0gcHJvY2Vzcy5lbnYuTUFJTF9URU1QTEFURV9JRDtcbmNvbnN0IE1BSUxfU0VSVklDRV9JRCA9IHByb2Nlc3MuZW52Lk1BSUxfU0VSVklDRV9JRDtcbmNvbnN0IE1BSUxfQUNDRVNTX1RPS0VOID0gcHJvY2Vzcy5lbnYuTUFJTF9BQ0NFU1NfVE9LRU47XG5pbml0KE1BSUxfVVNFUik7XG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbCh7IHNldE1vZGFsIH0pIHtcbiAgY29uc3QgW2NvbnRhY3RTZW50LCBzZXRDb250YWN0U2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgb25OYW1lQ2hhbmdlID0gKGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xuICBjb25zdCBvbkVtYWlsQ2hhbmdlID0gKGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcbiAgY29uc3Qgb25QaG9uZUNoYW5nZSA9IChlKSA9PiBzZXRQaG9uZShlLnRhcmdldC52YWx1ZSk7XG4gIGNvbnN0IG9uTWVzc2FnZUNoYW5nZSA9IChlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKTtcblxuICAvLyBTZW5kIFBPU1QgcmVxdWVzdCB0byBiYWNrZW5kIHRvIGFkZCBkYXRhIHRvIGRhdGFiYXNlXG4gIC8vIGNvbnN0IGRhdGEgPSBbbmFtZSwgZW1haWwsIHBob25lLCBtZXNzYWdlXTtcbiAgLy8gY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgZmV0Y2goXCIvYXBpL2NvbnRhY3RcIiwgaGVhZGVycykudGhlbihcbiAgLy8gICAgIChyZXMpID0+XG4gIC8vICAgICAgIHJlc1xuICAvLyAgICAgICAgIC5qc29uKClcbiAgLy8gICAgICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAvLyAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpXG4gIC8vICAgKTtcblxuICAvLyAgIHNldENvbnRhY3RTZW50KHRydWUpO1xuICAvLyAgIHNldE1vZGFsKGZhbHNlKTtcbiAgLy8gfTtcbiAgLy8gY29uc3QgaGVhZGVycyA9IHtcbiAgLy8gICBtZXRob2Q6IFwiUE9TVFwiLFxuICAvLyAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgLy8gICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgLy8gfTtcblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlbWFpbGpzXG4gICAgICAuc2VuZEZvcm0oXG4gICAgICAgIFwic2VydmljZV9kNzV0dmU4XCIsXG4gICAgICAgIFwiZHJ5X2pvaG5cIixcbiAgICAgICAgZS50YXJnZXQsXG4gICAgICAgIFwidXNlcl9yREs1a3BwRUFBNTBzRXRBcnh5UHhcIlxuICAgICAgKVxuICAgICAgLnRoZW4oXG4gICAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudGV4dCk7XG4gICAgICAgICAgc2V0Q29udGVudFxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICBlLnRhcmdldC5yZXNldCgpO1xuICB9XG4gIGNvbnN0IHN0eWxlcyA9IHtcbiAgICB3cmFwcGVyOiB7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgYmFja2dyb3VuZDogXCIjMjIyZFwiLFxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgekluZGV4OiA0LFxuICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgekluZGV4OiA1MCxcbiAgICAgIHRvcDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICB9LFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICBoZWlnaHQ6IFwiMjVweFwiLFxuICAgICAgYm9yZGVyOiBcIi41cHggYmxhY2sgc29saWRcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgIHdpZHRoOiBcIjM1MHB4XCIsXG4gICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxuICAgIH0sXG4gICAgaW5wdXRDaGVjazoge1xuICAgICAgaGVpZ2h0OiBcIjI1cHhcIixcbiAgICAgIGJvcmRlcjogXCIuNXB4IGJsYWNrIHNvbGlkXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcblxuICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIixcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICB9LFxuICAgIGNsb3NlOiB7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgdG9wOiBcIjIwMHB4XCIsXG4gICAgICByaWdodDogXCIyMDBweFwiLFxuICAgICAgbWFyZ2luOiBcIjUwcHhcIixcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICB6SW5kZXg6IDUwLFxuICAgIH0sXG4gICAgbGluZTE6IHtcbiAgICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgICAgd2lkdGg6IFwiMjVweFwiLFxuICAgICAgaGVpZ2h0OiBcIjNweFwiLFxuICAgICAgbWFyZ2luOiBcIjNweFwiLFxuICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVkoNHB4KVwiLFxuICAgIH0sXG4gICAgbGluZTI6IHtcbiAgICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgICAgd2lkdGg6IFwiMjVweFwiLFxuICAgICAgaGVpZ2h0OiBcIjNweFwiLFxuICAgICAgbWFyZ2luOiBcIjNweFwiLFxuICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg0NWRlZyl0cmFuc2xhdGVZKC00cHgpXCIsXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TW9kYWwoZmFsc2UpfSBzdHlsZT17c3R5bGVzLmNsb3NlfT5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmxpbmUxfT48L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmxpbmUyfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxoMT5Db250YWN0PC9oMT5cbiAgICAgICAgeyFjb250YWN0U2VudCA/IChcbiAgICAgICAgICA8Zm9ybSBzdHlsZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uTmFtZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRW1haWxDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwicGhvbmVfbnVtYmVyXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uUGhvbmVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uTWVzc2FnZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8cD5XZSB3aWxsIGNvbnRhY3QgeW91IGFzIHNvb24gYXMgcG9zc2libGUhPC9wPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Modal.js\n");

/***/ })

})