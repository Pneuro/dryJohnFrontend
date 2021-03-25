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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handlebar; });\nconst nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\nfunction handlebar(req, res) {\n  console.log(\"Request\", req.body[1]); // async..await is not allowed in global scope, must use a wrapper\n\n  async function main() {\n    // Generate test SMTP service account from ethereal.email\n    // Only needed if you don't have a real mail account for testing\n    let testAccount = await nodemailer.createTestAccount(); // create reusable transporter object using the default SMTP transport\n\n    let transporter = nodemailer.createTransport({\n      host: \"smtp.gmail.com\",\n      port: 465,\n      secure: true,\n      auth: {\n        user: process.env.MAIL_USER,\n        // generated ethereal user\n        pass: process.env.MAIL_PASS // generated ethereal password\n\n      }\n    }); // send mail with defined transport object\n\n    let info = await transporter.sendMail({\n      from: `${req.body[1]}`,\n      // sender address\n      to: \"thedylankendrick@gmail.com\",\n      // list of receivers\n      subject: `Message from dry-john.com - ${req.body[0]}`,\n      // Subject line\n      text: `Hello from ${req.body[0]}, \\n \\n ${req.body[3]}\\n \\n Phone number ${req.body[2]}\\n\\n Email: ${req.body[1]}`,\n      // plain text body\n      html: `<h1>Hello from ${req.body[0]}</h1> \\n \\n <p>${req.body[3]}</p>\\n \\n <p>\n      Phone number ${req.body[2]}\\\n      </p>\n      <p>\n      \\n Email: ${req.body[1]}\n      </p>\n      ` // html body\n\n    });\n    console.log(\"Message sent: %s\", info.messageId); // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>\n    // Preview only available when sending through an Ethereal account\n\n    console.log(\"Preview URL: %s\", nodemailer.getTestMessageUrl(info)); // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...\n  }\n\n  main().catch(console.error);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2NvbnRhY3QuanM/YjIyOCJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwicmVxdWlyZSIsImhhbmRsZWJhciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwibWFpbiIsInRlc3RBY2NvdW50IiwiY3JlYXRlVGVzdEFjY291bnQiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiTUFJTF9VU0VSIiwicGFzcyIsIk1BSUxfUEFTUyIsImluZm8iLCJzZW5kTWFpbCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJ0ZXh0IiwiaHRtbCIsIm1lc3NhZ2VJZCIsImdldFRlc3RNZXNzYWdlVXJsIiwiY2F0Y2giLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLE1BQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUExQjs7QUFDZSxTQUFTQyxTQUFULENBQW1CQyxHQUFuQixFQUF3QkMsR0FBeEIsRUFBNkI7QUFDMUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJILEdBQUcsQ0FBQ0ksSUFBSixDQUFTLENBQVQsQ0FBdkIsRUFEMEMsQ0FHMUM7O0FBQ0EsaUJBQWVDLElBQWYsR0FBc0I7QUFDcEI7QUFDQTtBQUNBLFFBQUlDLFdBQVcsR0FBRyxNQUFNVCxVQUFVLENBQUNVLGlCQUFYLEVBQXhCLENBSG9CLENBS3BCOztBQUNBLFFBQUlDLFdBQVcsR0FBR1gsVUFBVSxDQUFDWSxlQUFYLENBQTJCO0FBQzNDQyxVQUFJLEVBQUUsZ0JBRHFDO0FBRTNDQyxVQUFJLEVBQUUsR0FGcUM7QUFHM0NDLFlBQU0sRUFBRSxJQUhtQztBQUkzQ0MsVUFBSSxFQUFFO0FBQ0pDLFlBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFNBRGQ7QUFDeUI7QUFDN0JDLFlBQUksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLFNBRmQsQ0FFeUI7O0FBRnpCO0FBSnFDLEtBQTNCLENBQWxCLENBTm9CLENBZ0JwQjs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsTUFBTVosV0FBVyxDQUFDYSxRQUFaLENBQXFCO0FBQ3BDQyxVQUFJLEVBQUcsR0FBRXRCLEdBQUcsQ0FBQ0ksSUFBSixDQUFTLENBQVQsQ0FBWSxFQURlO0FBQ1o7QUFDeEJtQixRQUFFLEVBQUUsNEJBRmdDO0FBRUY7QUFDbENDLGFBQU8sRUFBRywrQkFBOEJ4QixHQUFHLENBQUNJLElBQUosQ0FBUyxDQUFULENBQVksRUFIaEI7QUFHbUI7QUFDdkRxQixVQUFJLEVBQUcsY0FBYXpCLEdBQUcsQ0FBQ0ksSUFBSixDQUFTLENBQVQsQ0FBWSxXQUFVSixHQUFHLENBQUNJLElBQUosQ0FBUyxDQUFULENBQVksc0JBQXFCSixHQUFHLENBQUNJLElBQUosQ0FBUyxDQUFULENBQVksZUFBY0osR0FBRyxDQUFDSSxJQUFKLENBQVMsQ0FBVCxDQUFZLEVBSjdFO0FBSWdGO0FBQ3BIc0IsVUFBSSxFQUFHLGtCQUFpQjFCLEdBQUcsQ0FBQ0ksSUFBSixDQUFTLENBQVQsQ0FBWSxrQkFBaUJKLEdBQUcsQ0FBQ0ksSUFBSixDQUFTLENBQVQsQ0FBWTtBQUN2RSxxQkFBcUJKLEdBQUcsQ0FBQ0ksSUFBSixDQUFTLENBQVQsQ0FBWTtBQUNqQztBQUNBO0FBQ0Esa0JBQWtCSixHQUFHLENBQUNJLElBQUosQ0FBUyxDQUFULENBQVk7QUFDOUI7QUFDQSxPQVgwQyxDQVdqQzs7QUFYaUMsS0FBckIsQ0FBakI7QUFjQUYsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NpQixJQUFJLENBQUNPLFNBQXJDLEVBL0JvQixDQWdDcEI7QUFFQTs7QUFDQXpCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCTixVQUFVLENBQUMrQixpQkFBWCxDQUE2QlIsSUFBN0IsQ0FBL0IsRUFuQ29CLENBb0NwQjtBQUNEOztBQUVEZixNQUFJLEdBQUd3QixLQUFQLENBQWEzQixPQUFPLENBQUM0QixLQUFyQjtBQUNEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS9jb250YWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgbm9kZW1haWxlciA9IHJlcXVpcmUoXCJub2RlbWFpbGVyXCIpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlYmFyKHJlcSwgcmVzKSB7XG4gIGNvbnNvbGUubG9nKFwiUmVxdWVzdFwiLCByZXEuYm9keVsxXSk7XG5cbiAgLy8gYXN5bmMuLmF3YWl0IGlzIG5vdCBhbGxvd2VkIGluIGdsb2JhbCBzY29wZSwgbXVzdCB1c2UgYSB3cmFwcGVyXG4gIGFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG4gICAgLy8gR2VuZXJhdGUgdGVzdCBTTVRQIHNlcnZpY2UgYWNjb3VudCBmcm9tIGV0aGVyZWFsLmVtYWlsXG4gICAgLy8gT25seSBuZWVkZWQgaWYgeW91IGRvbid0IGhhdmUgYSByZWFsIG1haWwgYWNjb3VudCBmb3IgdGVzdGluZ1xuICAgIGxldCB0ZXN0QWNjb3VudCA9IGF3YWl0IG5vZGVtYWlsZXIuY3JlYXRlVGVzdEFjY291bnQoKTtcblxuICAgIC8vIGNyZWF0ZSByZXVzYWJsZSB0cmFuc3BvcnRlciBvYmplY3QgdXNpbmcgdGhlIGRlZmF1bHQgU01UUCB0cmFuc3BvcnRcbiAgICBsZXQgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICBob3N0OiBcInNtdHAuZ21haWwuY29tXCIsXG4gICAgICBwb3J0OiA0NjUsXG4gICAgICBzZWN1cmU6IHRydWUsXG4gICAgICBhdXRoOiB7XG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52Lk1BSUxfVVNFUiwgLy8gZ2VuZXJhdGVkIGV0aGVyZWFsIHVzZXJcbiAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuTUFJTF9QQVNTLCAvLyBnZW5lcmF0ZWQgZXRoZXJlYWwgcGFzc3dvcmRcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBzZW5kIG1haWwgd2l0aCBkZWZpbmVkIHRyYW5zcG9ydCBvYmplY3RcbiAgICBsZXQgaW5mbyA9IGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcbiAgICAgIGZyb206IGAke3JlcS5ib2R5WzFdfWAsIC8vIHNlbmRlciBhZGRyZXNzXG4gICAgICB0bzogXCJ0aGVkeWxhbmtlbmRyaWNrQGdtYWlsLmNvbVwiLCAvLyBsaXN0IG9mIHJlY2VpdmVyc1xuICAgICAgc3ViamVjdDogYE1lc3NhZ2UgZnJvbSBkcnktam9obi5jb20gLSAke3JlcS5ib2R5WzBdfWAsIC8vIFN1YmplY3QgbGluZVxuICAgICAgdGV4dDogYEhlbGxvIGZyb20gJHtyZXEuYm9keVswXX0sIFxcbiBcXG4gJHtyZXEuYm9keVszXX1cXG4gXFxuIFBob25lIG51bWJlciAke3JlcS5ib2R5WzJdfVxcblxcbiBFbWFpbDogJHtyZXEuYm9keVsxXX1gLCAvLyBwbGFpbiB0ZXh0IGJvZHlcbiAgICAgIGh0bWw6IGA8aDE+SGVsbG8gZnJvbSAke3JlcS5ib2R5WzBdfTwvaDE+IFxcbiBcXG4gPHA+JHtyZXEuYm9keVszXX08L3A+XFxuIFxcbiA8cD5cbiAgICAgIFBob25lIG51bWJlciAke3JlcS5ib2R5WzJdfVxcXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgIFxcbiBFbWFpbDogJHtyZXEuYm9keVsxXX1cbiAgICAgIDwvcD5cbiAgICAgIGAsIC8vIGh0bWwgYm9keVxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJNZXNzYWdlIHNlbnQ6ICVzXCIsIGluZm8ubWVzc2FnZUlkKTtcbiAgICAvLyBNZXNzYWdlIHNlbnQ6IDxiNjU4ZjhjYS02Mjk2LWNjZjQtODMwNi04N2Q1N2EwYjQzMjFAZXhhbXBsZS5jb20+XG5cbiAgICAvLyBQcmV2aWV3IG9ubHkgYXZhaWxhYmxlIHdoZW4gc2VuZGluZyB0aHJvdWdoIGFuIEV0aGVyZWFsIGFjY291bnRcbiAgICBjb25zb2xlLmxvZyhcIlByZXZpZXcgVVJMOiAlc1wiLCBub2RlbWFpbGVyLmdldFRlc3RNZXNzYWdlVXJsKGluZm8pKTtcbiAgICAvLyBQcmV2aWV3IFVSTDogaHR0cHM6Ly9ldGhlcmVhbC5lbWFpbC9tZXNzYWdlL1dhUUtNZ0tkZHhRRG9vdS4uLlxuICB9XG5cbiAgbWFpbigpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/contact.js\n");

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