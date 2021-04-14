module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/api/contact.js":
/*!**********************************!*\
  !*** ./src/pages/api/contact.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handlebar; });\nconst nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\nfunction handlebar(req, res) {\n  console.log(\"Request\", req); // async..await is not allowed in global scope, must use a wrapper\n\n  async function main() {\n    // Generate test SMTP service account from ethereal.email\n    // Only needed if you don't have a real mail account for testing\n    let testAccount = await nodemailer.createTestAccount();\n    console.log('User', process.env.MAIL_USER); // create reusable transporter object using the default SMTP transport\n\n    let transporter = nodemailer.createTransport({\n      host: \"smtp.gmail.com\",\n      port: 587,\n      secure: false,\n      auth: {\n        user: process.env.MAIL_USER,\n        // generated ethereal user\n        pass: process.env.MAIL_PASS // generated ethereal password\n\n      }\n    }); // send mail with defined transport object\n\n    let info = await transporter.sendMail({\n      from: `${req.body[1]}`,\n      // sender address\n      to: process.env.MAIL_USER,\n      // list of receivers\n      subject: `Message from dry-john.com - ${req.body[0]}`,\n      // Subject line\n      text: `Hello from ${req.body[0]}, \\n \\n ${req.body[3]}\\n \\n Phone number ${req.body[2]}\\n\\n Email: ${req.body[1]}`,\n      // plain text body\n      html: `<h1>Hello from ${req.body[0]}</h1> \\n \\n <p>${req.body[3]}</p>\\n \\n <p>\n      Phone number ${req.body[2]}\\\n      </p>\n      <p>\n      \\n Email: ${req.body[1]}\n      </p>\n      ` // html body\n\n    });\n    console.log(\"Message sent: %s\", info.messageId); // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>\n    // Preview only available when sending through an Ethereal account\n\n    console.log(\"Preview URL: %s\", nodemailer.getTestMessageUrl(info)); // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...\n  }\n\n  main().catch(console.error);\n  res.end();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2NvbnRhY3QuanM/YjIyOCJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwicmVxdWlyZSIsImhhbmRsZWJhciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwidGVzdEFjY291bnQiLCJjcmVhdGVUZXN0QWNjb3VudCIsInByb2Nlc3MiLCJlbnYiLCJNQUlMX1VTRVIiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwiTUFJTF9QQVNTIiwiaW5mbyIsInNlbmRNYWlsIiwiZnJvbSIsImJvZHkiLCJ0byIsInN1YmplY3QiLCJ0ZXh0IiwiaHRtbCIsIm1lc3NhZ2VJZCIsImdldFRlc3RNZXNzYWdlVXJsIiwiY2F0Y2giLCJlcnJvciIsImVuZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLE1BQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUExQjs7QUFFZSxTQUFTQyxTQUFULENBQW1CQyxHQUFuQixFQUF3QkMsR0FBeEIsRUFBNkI7QUFDMUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJILEdBQXZCLEVBRDBDLENBRzFDOztBQUNBLGlCQUFlSSxJQUFmLEdBQXNCO0FBQ3BCO0FBQ0E7QUFDQSxRQUFJQyxXQUFXLEdBQUcsTUFBTVIsVUFBVSxDQUFDUyxpQkFBWCxFQUF4QjtBQUNKSixXQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsU0FBaEMsRUFKd0IsQ0FLcEI7O0FBQ0EsUUFBSUMsV0FBVyxHQUFHYixVQUFVLENBQUNjLGVBQVgsQ0FBMkI7QUFDM0NDLFVBQUksRUFBRSxnQkFEcUM7QUFFM0NDLFVBQUksRUFBRSxHQUZxQztBQUczQ0MsWUFBTSxFQUFFLEtBSG1DO0FBSTNDQyxVQUFJLEVBQUU7QUFDSkMsWUFBSSxFQUFFVCxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsU0FEZDtBQUN5QjtBQUM3QlEsWUFBSSxFQUFFVixPQUFPLENBQUNDLEdBQVIsQ0FBWVUsU0FGZCxDQUV5Qjs7QUFGekI7QUFKcUMsS0FBM0IsQ0FBbEIsQ0FOb0IsQ0FnQnBCOztBQUNBLFFBQUlDLElBQUksR0FBRyxNQUFNVCxXQUFXLENBQUNVLFFBQVosQ0FBcUI7QUFDcENDLFVBQUksRUFBRyxHQUFFckIsR0FBRyxDQUFDc0IsSUFBSixDQUFTLENBQVQsQ0FBWSxFQURlO0FBQ1o7QUFDeEJDLFFBQUUsRUFBRWhCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQUZvQjtBQUVUO0FBQzNCZSxhQUFPLEVBQUcsK0JBQThCeEIsR0FBRyxDQUFDc0IsSUFBSixDQUFTLENBQVQsQ0FBWSxFQUhoQjtBQUdtQjtBQUN2REcsVUFBSSxFQUFHLGNBQWF6QixHQUFHLENBQUNzQixJQUFKLENBQVMsQ0FBVCxDQUFZLFdBQVV0QixHQUFHLENBQUNzQixJQUFKLENBQVMsQ0FBVCxDQUFZLHNCQUFxQnRCLEdBQUcsQ0FBQ3NCLElBQUosQ0FBUyxDQUFULENBQVksZUFBY3RCLEdBQUcsQ0FBQ3NCLElBQUosQ0FBUyxDQUFULENBQVksRUFKN0U7QUFJZ0Y7QUFDcEhJLFVBQUksRUFBRyxrQkFBaUIxQixHQUFHLENBQUNzQixJQUFKLENBQVMsQ0FBVCxDQUFZLGtCQUFpQnRCLEdBQUcsQ0FBQ3NCLElBQUosQ0FBUyxDQUFULENBQVk7QUFDdkUscUJBQXFCdEIsR0FBRyxDQUFDc0IsSUFBSixDQUFTLENBQVQsQ0FBWTtBQUNqQztBQUNBO0FBQ0Esa0JBQWtCdEIsR0FBRyxDQUFDc0IsSUFBSixDQUFTLENBQVQsQ0FBWTtBQUM5QjtBQUNBLE9BWDBDLENBV2pDOztBQVhpQyxLQUFyQixDQUFqQjtBQWNBcEIsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NnQixJQUFJLENBQUNRLFNBQXJDLEVBL0JvQixDQWdDcEI7QUFFQTs7QUFDQXpCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCTixVQUFVLENBQUMrQixpQkFBWCxDQUE2QlQsSUFBN0IsQ0FBL0IsRUFuQ29CLENBb0NwQjtBQUNEOztBQUVEZixNQUFJLEdBQUd5QixLQUFQLENBQWEzQixPQUFPLENBQUM0QixLQUFyQjtBQUNBN0IsS0FBRyxDQUFDOEIsR0FBSjtBQUNEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS9jb250YWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgbm9kZW1haWxlciA9IHJlcXVpcmUoXCJub2RlbWFpbGVyXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGViYXIocmVxLCByZXMpIHtcbiAgY29uc29sZS5sb2coXCJSZXF1ZXN0XCIsIHJlcSk7XG5cbiAgLy8gYXN5bmMuLmF3YWl0IGlzIG5vdCBhbGxvd2VkIGluIGdsb2JhbCBzY29wZSwgbXVzdCB1c2UgYSB3cmFwcGVyXG4gIGFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG4gICAgLy8gR2VuZXJhdGUgdGVzdCBTTVRQIHNlcnZpY2UgYWNjb3VudCBmcm9tIGV0aGVyZWFsLmVtYWlsXG4gICAgLy8gT25seSBuZWVkZWQgaWYgeW91IGRvbid0IGhhdmUgYSByZWFsIG1haWwgYWNjb3VudCBmb3IgdGVzdGluZ1xuICAgIGxldCB0ZXN0QWNjb3VudCA9IGF3YWl0IG5vZGVtYWlsZXIuY3JlYXRlVGVzdEFjY291bnQoKTtcbmNvbnNvbGUubG9nKCdVc2VyJywgcHJvY2Vzcy5lbnYuTUFJTF9VU0VSKVxuICAgIC8vIGNyZWF0ZSByZXVzYWJsZSB0cmFuc3BvcnRlciBvYmplY3QgdXNpbmcgdGhlIGRlZmF1bHQgU01UUCB0cmFuc3BvcnRcbiAgICBsZXQgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICBob3N0OiBcInNtdHAuZ21haWwuY29tXCIsXG4gICAgICBwb3J0OiA1ODcsXG4gICAgICBzZWN1cmU6IGZhbHNlLFxuICAgICAgYXV0aDoge1xuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5NQUlMX1VTRVIsIC8vIGdlbmVyYXRlZCBldGhlcmVhbCB1c2VyXG4gICAgICAgIHBhc3M6IHByb2Nlc3MuZW52Lk1BSUxfUEFTUywgLy8gZ2VuZXJhdGVkIGV0aGVyZWFsIHBhc3N3b3JkXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gc2VuZCBtYWlsIHdpdGggZGVmaW5lZCB0cmFuc3BvcnQgb2JqZWN0XG4gICAgbGV0IGluZm8gPSBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XG4gICAgICBmcm9tOiBgJHtyZXEuYm9keVsxXX1gLCAvLyBzZW5kZXIgYWRkcmVzc1xuICAgICAgdG86IHByb2Nlc3MuZW52Lk1BSUxfVVNFUiwgLy8gbGlzdCBvZiByZWNlaXZlcnNcbiAgICAgIHN1YmplY3Q6IGBNZXNzYWdlIGZyb20gZHJ5LWpvaG4uY29tIC0gJHtyZXEuYm9keVswXX1gLCAvLyBTdWJqZWN0IGxpbmVcbiAgICAgIHRleHQ6IGBIZWxsbyBmcm9tICR7cmVxLmJvZHlbMF19LCBcXG4gXFxuICR7cmVxLmJvZHlbM119XFxuIFxcbiBQaG9uZSBudW1iZXIgJHtyZXEuYm9keVsyXX1cXG5cXG4gRW1haWw6ICR7cmVxLmJvZHlbMV19YCwgLy8gcGxhaW4gdGV4dCBib2R5XG4gICAgICBodG1sOiBgPGgxPkhlbGxvIGZyb20gJHtyZXEuYm9keVswXX08L2gxPiBcXG4gXFxuIDxwPiR7cmVxLmJvZHlbM119PC9wPlxcbiBcXG4gPHA+XG4gICAgICBQaG9uZSBudW1iZXIgJHtyZXEuYm9keVsyXX1cXFxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICBcXG4gRW1haWw6ICR7cmVxLmJvZHlbMV19XG4gICAgICA8L3A+XG4gICAgICBgLCAvLyBodG1sIGJvZHlcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSBzZW50OiAlc1wiLCBpbmZvLm1lc3NhZ2VJZCk7XG4gICAgLy8gTWVzc2FnZSBzZW50OiA8YjY1OGY4Y2EtNjI5Ni1jY2Y0LTgzMDYtODdkNTdhMGI0MzIxQGV4YW1wbGUuY29tPlxuXG4gICAgLy8gUHJldmlldyBvbmx5IGF2YWlsYWJsZSB3aGVuIHNlbmRpbmcgdGhyb3VnaCBhbiBFdGhlcmVhbCBhY2NvdW50XG4gICAgY29uc29sZS5sb2coXCJQcmV2aWV3IFVSTDogJXNcIiwgbm9kZW1haWxlci5nZXRUZXN0TWVzc2FnZVVybChpbmZvKSk7XG4gICAgLy8gUHJldmlldyBVUkw6IGh0dHBzOi8vZXRoZXJlYWwuZW1haWwvbWVzc2FnZS9XYVFLTWdLZGR4UURvb3UuLi5cbiAgfVxuXG4gIG1haW4oKS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgcmVzLmVuZCgpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/contact.js\n");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlbWFpbGVyXCI/M2Q1NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub2RlbWFpbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nodemailer\n");

/***/ })

/******/ });