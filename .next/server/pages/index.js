module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0EVa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Date; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9BML");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("PzR7");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__);



function Date({
  dateString
}) {
  const date = Object(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["Date"])(dateString);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("time", {
    dateTime: dateString,
    children: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(date, "LLLL	d, yyyy")
  });
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

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
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
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

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RXBc");


/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "85Sb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/components/NavLinks.js






function NavLinks({
  fontSize,
  mobile,
  navOpen
}) {
  const styles = {
    item: {
      color: "#3485bc",
      textDecoration: "none",
      listStyle: "none",
      padding: "1em",
      fontSize: fontSize,
      fontWeight: "bold",
      cursor: "pointer"
    },
    list: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: 0,
      left: 0,
      background: "#333e",
      width: "100vw",
      height: "100vh",
      zIndex: 1,
      fontSize: "24px"
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: !mobile ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/",
        style: styles.item,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].a, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: [0, 1],
            y: [100, 0]
          },
          transition: {
            delay: 0.2
          },
          style: styles.item,
          children: "Home"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/about",
        style: styles.item,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].a, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: [0, 1],
            y: [10, 0]
          },
          transition: {
            delay: 0.2
          },
          style: styles.item,
          children: "About"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: [0, 1],
          y: [10, 0]
        },
        transition: {
          delay: 0.3
        },
        href: "/product",
        style: styles.item,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].a, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: [0, 1],
            y: [10, 0]
          },
          transition: {
            delay: 0.2
          },
          style: styles.item,
          children: "Product"
        })
      })]
    }) : !navOpen ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: styles.list,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/",
        style: styles.item,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].a, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: [0, 1],
            y: [10, 0]
          },
          style: styles.item,
          children: "Home"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/about",
        style: styles.item,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].a, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: [0, 1],
            y: [10, 0]
          },
          style: styles.item,
          children: "About"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: [0, 1],
          y: [10, 0]
        },
        href: "/product",
        style: styles.item,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].a, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: [0, 1],
            y: [10, 0]
          },
          style: styles.item,
          children: "Products"
        })
      })]
    }) : ""
  });
}

/* harmony default export */ var components_NavLinks = (NavLinks);
// CONCATENATED MODULE: ./src/components/Burger.js





function Burger({
  navOpen,
  setNavOpen,
  mobile,
  setMobile
}) {
  const styles = {
    burger: {
      maxWidth: "30px",
      maxHeight: "30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "5px",
      border: "none",
      transition: ".3s ease all"
    },
    line1: {
      width: "25px",
      height: "3px",
      backgroundColor: "#3485bc",
      margin: "3px",
      transition: ".3 ease all",
      position: "relative",
      zIndex: 5
    },
    line2: {
      width: "25px",
      height: "3px",
      backgroundColor: "#3485bc",
      margin: "3px",
      transition: ".3 ease all",
      position: "relative",
      zIndex: 5
    },
    line3: {
      width: "25px",
      height: "3px",
      backgroundColor: "#3485bc",
      margin: "3px",
      transition: ".3 ease all",
      position: "relative",
      zIndex: 5
    },
    line1Open: {
      width: "25px",
      height: "3px",
      backgroundColor: "#8dc84a",
      margin: "3px",
      transition: ".3 ease all",
      transform: "rotate(45deg)translateY(5px)"
    },
    line2Open: {
      width: "25px",
      height: "0",
      backgroundColor: "#8dc84a",
      margin: "3px",
      transition: ".3 ease all"
    },
    line3Open: {
      width: "25px",
      height: "3px",
      backgroundColor: "#8dc84a",
      margin: "3px",
      transition: ".3 ease all",
      transform: "rotate(-45deg)translateY(-5px) "
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: styles.burger,
    children: !navOpen ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      onClick: () => setNavOpen(true),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: styles.line1
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: styles.line2
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: styles.line3
      })]
    }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      onClick: () => setNavOpen(false),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: styles.line1Open
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: styles.line2Open
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: styles.line3Open
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_NavLinks, {
        mobile: mobile
      })]
    })
  });
}

/* harmony default export */ var components_Burger = (Burger);
// CONCATENATED MODULE: ./src/components/Nav.js







function Nav() {
  const {
    0: mobile,
    1: setMobile
  } = Object(external_react_["useState"])(false);
  const {
    0: navOpen,
    1: setNavOpen
  } = Object(external_react_["useState"])(false);
  const navLogo = "/Assets/Images/nav_logo.png";
  Object(external_react_["useEffect"])(() => {
    if (window.innerWidth < 500) {
      console.log(window.innerWidth);
      setMobile(true);
      console.log(`Set mobile? ${mobile}`);
    } else {
      setMobile(false);
    }
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: Nav_styles.container,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: navLogo,
        alt: "dry john logo",
        style: Nav_styles.logo
      })
    }), !mobile ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
      style: Nav_styles.list,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_NavLinks, {
        mobile: mobile,
        navOpen: navOpen
      })
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Burger, {
      navOpen: navOpen,
      setNavOpen: setNavOpen,
      mobile: mobile
    })]
  });
}

/* harmony default export */ var components_Nav = __webpack_exports__["a"] = (Nav);
const Nav_styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#3485BC",
    background: "#fff",
    minHeight: "80px",
    position: "relative",
    top: "0",
    minWidth: "90vw",
    zIndex: 2
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr)",
    width: "500px"
  },
  logo: {
    maxHeight: "90px"
  }
};
Nav.defaultProps = {
  mobile: false,
  navOpen: false
};

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "JwsL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function Footer() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("footer", {
    style: styles.container,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
      src: "/Assets/Images/logo.png",
      alt: "footer logo",
      style: styles.logo
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      style: styles.list,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
          children: "About"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          style: styles.listItem,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            style: styles.item,
            href: "/about#info",
            children: "More Information"
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
          children: "Product"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          href: "https://www.amazon.com/Portable-Toilet-Bags-Compostable-Absorbent/dp/B078X3TCRG/ref=sr_1_2?crid=2RZVRI2TQJG7P&dchild=1&keywords=dry+john+toilet+bags&qid=1613490708&sprefix=dry+john%2Caps%2C174&sr=8-2",
          style: styles.item,
          children: "Order"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
          children: "Contact"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          style: styles.listItem,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            style: styles.item,
            href: "tel:+14191233231",
            children: "Phone"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          style: styles.listItem,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            style: styles.item,
            href: "mailto:dryjohn@gmail.com",
            children: "Email"
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
          children: "Administration"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          style: styles.item,
          href: "https://prismic.io/dashboard",
          exact: true,
          style: styles.item,
          children: "Login"
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      children: "Copyright \xA9 2021"
    })]
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Footer);
const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    color: "#fff",
    margin: "auto",
    marginTop: "20vh",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
    border: "#ddd 1px solid",
    background: "linear-gradient(164deg, rgba(229,230,229,.2) 0%, rgba(134,164,184,1) 100%)",
    borderBottom: "none",
    borderRadius: "10px 10px 0 0",
    width: "80vw",
    padding: "3em"
  },
  item: {
    textDecoration: "none",
    color: "#fff"
  },
  listItem: {
    listStyle: "none"
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))"
  },
  logo: {
    maxWidth: "50%"
  }
};

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PzR7":
/***/ (function(module, exports) {

module.exports = require("prismic-reactjs");

/***/ }),

/***/ "Qvm2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverImage; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function CoverImage({
  title,
  url,
  slug
}) {
  const image = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
    src: url,
    style: {
      maxWidth: "100%"
    },
    alt: `Cover Image for ${title}`,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("shadow-small", {
      "hover:shadow-medium transition-shadow duration-200": slug
    })
  });

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    children: slug ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      as: `/posts/${slug}`,
      href: "/posts/[slug]",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        "aria-label": title,
        children: image
      })
    }) : image
  });
}

/***/ }),

/***/ "RXBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./src/components/Nav.js + 2 modules
var Nav = __webpack_require__("85Sb");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "emailjs-com"
var external_emailjs_com_ = __webpack_require__("u8Nd");
var external_emailjs_com_default = /*#__PURE__*/__webpack_require__.n(external_emailjs_com_);

// CONCATENATED MODULE: ./src/components/Modal.js





const MAIL_USER = process.env.MAIL_USER;
const MAIL_TEMPLATE_ID = process.env.MAIL_TEMPLATE_ID;
const MAIL_SERVICE_ID = process.env.MAIL_SERVICE_ID;
const MAIL_ACCESS_TOKEN = process.env.MAIL_ACCESS_TOKEN;
Object(external_emailjs_com_["init"])(MAIL_USER);
console.log(process.env);
function Modal({
  setModal
}) {
  const {
    0: contactSent,
    1: setContactSent
  } = Object(external_react_["useState"])(false);
  const {
    0: name,
    1: setName
  } = Object(external_react_["useState"])("");
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])("");
  const {
    0: phone,
    1: setPhone
  } = Object(external_react_["useState"])("");
  const {
    0: message,
    1: setMessage
  } = Object(external_react_["useState"])("");

  const onNameChange = e => setName(e.target.value);

  const onEmailChange = e => setEmail(e.target.value);

  const onPhoneChange = e => setPhone(e.target.value);

  const onMessageChange = e => setMessage(e.target.value); // Send POST request to backend to add data to database
  // const data = [name, email, phone, message];
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("/api/contact", headers).then(
  //     (res) =>
  //       res
  //         .json()
  //         .then((res) => console.log(res))
  //         .catch((err) => console.error(err))
  //   );
  //   setContactSent(true);
  //   setModal(false);
  // };
  // const headers = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // };


  console.log("Event");

  function handleSubmit(e) {
    e.preventDefault();
    external_emailjs_com_default.a.sendForm("service_d75tve8", "dry_john", e.target, "user_rDK5kppEAA50sEtArxyPx").then(result => {
      console.log(result.text);
    }, error => {
      console.log(error.text);
    });
  }

  const styles = {
    wrapper: {
      position: "absolute",
      background: "#222d",
      color: "#fff",
      zIndex: 4,
      width: "100vw",
      height: "100vh",
      zIndex: 50,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%"
    },
    input: {
      height: "25px",
      border: ".5px black solid",
      borderRadius: "5px",
      width: "350px",
      marginTop: "10px"
    },
    inputCheck: {
      height: "25px",
      border: ".5px black solid",
      borderRadius: "5px",
      display: "flex",
      marginTop: "10px"
    },
    form: {
      display: "flex",
      flexDirection: "column"
    },
    close: {
      position: "absolute",
      top: "200px",
      right: "200px",
      margin: "50px",
      cursor: "pointer",
      zIndex: 50
    },
    line1: {
      background: "#fff",
      width: "25px",
      height: "3px",
      margin: "3px",
      transform: "rotate(-45deg) translateY(4px)"
    },
    line2: {
      background: "#fff",
      width: "25px",
      height: "3px",
      margin: "3px",
      transform: "rotate(45deg)translateY(-4px)"
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: styles.wrapper,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      onClick: () => setModal(false),
      style: styles.close,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: styles.line1
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: styles.line2
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: styles.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        children: "Contact"
      }), !contactSent ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        style: styles.form,
        onSubmit: handleSubmit,
        method: "POST",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          style: styles.input,
          placeholder: "Name",
          type: "text",
          name: "name",
          onChange: onNameChange
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          style: styles.input,
          placeholder: "Email Address",
          name: "email",
          type: "email",
          onChange: onEmailChange
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          style: styles.input,
          placeholder: "Phone Number",
          type: "text",
          name: "phone_number",
          onChange: onPhoneChange
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          style: styles.input,
          name: "message",
          placeholder: "Message",
          type: "textarea",
          onChange: onMessageChange
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          type: "submit",
          children: "Submit"
        })]
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "We will contact you as soon as possible!"
      })]
    })]
  });
}
// CONCATENATED MODULE: ./src/components/Header.js







function Header({
  setEmail,
  email
}) {
  const {
    0: modal,
    1: setModal
  } = Object(external_react_["useState"])(false);
  const {
    0: vid,
    1: setVid
  } = Object(external_react_["useState"])(false);
  const {
    0: mobile,
    1: setMobile
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    if (window.innerWidth < 500) {
      setMobile(true);
      setVid("100vh");
    } else {
      setMobile(false);
      setVid("100vw");
    }
  }, [mobile]);

  function openModal(e) {
    e.preventDefault();

    if (!modal) {
      setModal(true);
    } else {
      console.log(modal);
      setModal(false);
    }
  }

  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
      alignItems: "center",
      justifyItems: "center",
      margin: "auto",
      minHeight: "80vh"
    },
    logo: {
      zIndex: 1,
      width: "calc(50vw - 10%)",
      position: "relative",
      minWidth: "300px",
      justifySelf: "center"
    },
    headerText: {
      maxWidth: "600px",
      background: "#3339",
      padding: "1em",
      borderRadius: "5px"
    },
    h1: {
      fontSize: "41.89px",
      color: "#7fce5c",
      maxWidth: "80vw"
    },
    p: {
      maxWidth: "80vw",
      color: "#fff"
    },
    form: {
      display: "flex",
      marginTop: "5px"
    },
    link: {
      color: "#fff",
      textDecoration: "none"
    },
    input: {
      height: "25px",
      border: ".5px black solid",
      borderRadius: "1px"
    },
    video: {
      minWidth: vid,
      backgroundSize: "cover",
      zIndex: -1,
      position: "fixed",
      opacity: 1,
      overflow: "hidden",
      margin: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
    className: "header",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: styles.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("video", {
        src: "Assets/Videos/LQ_nologo.mp4",
        alt: "video",
        autoPlay: true,
        playsInline: true,
        controls: false,
        muted: true,
        loop: true,
        style: styles.video
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: styles.headerText,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_framer_motion_["motion"].h1, {
          initial: {
            opacity: 0
          },
          animate: {
            y: [40, 0],
            opacity: [0, 1]
          },
          transition: {
            duration: 0.3,
            delay: 0
          },
          style: styles.h1,
          children: ["We only get one planet.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), " Let's treat her with respect."]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].p, {
          initial: {
            opacity: 0
          },
          animate: {
            y: [40, 0],
            opacity: [0, 1]
          },
          transition: {
            duration: 0.3,
            delay: 0.3
          },
          style: styles.p,
          children: "Dry John Toilet Bags provide a perfect resource for disposing of your waste in an eco-friendly manner."
        }), !modal ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("form", {
          style: styles.form,
          onSubmit: openModal,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].button, {
            initial: {
              opacity: 0
            },
            animate: {
              y: [40, 0],
              opacity: [0, 1]
            },
            transition: {
              duration: 0.3
            },
            whileHover: {
              scale: 1.1
            },
            whileTap: {
              scale: 0.9
            },
            type: "submit",
            className: "button",
            children: "Contact Us"
          })
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal, {
          setEmail: setEmail,
          setModal: setModal
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("form", {
          style: styles.form,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].button, {
            initial: {
              opacity: 0
            },
            animate: {
              y: [50, 0],
              opacity: [0, 1]
            },
            transition: {
              duration: 0.3
            },
            whileHover: {
              scale: 1.1
            },
            whileTap: {
              scale: 0.9
            },
            type: "submit",
            className: "button",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "https://www.amazon.com/Portable-Toilet-Bags-Compostable-Absorbent/dp/B078X3TCRG/ref=sr_1_2?crid=2RZVRI2TQJG7P&dchild=1&keywords=dry+john+toilet+bags&qid=1613490708&sprefix=dry+john%2Caps%2C174&sr=8-2",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].p, {
                style: styles.link,
                initial: {
                  opacity: 0
                },
                animate: {
                  y: [40, 0],
                  opacity: [0, 1]
                },
                transition: {
                  duration: 0.1
                },
                whileHover: {
                  scale: 1.1
                },
                whileTap: {
                  scale: 0.9
                },
                children: "Order Now"
              })
            })
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].img, {
        initial: {
          opacity: 0
        },
        src: "/Assets/Images/header_logo.png",
        animate: {
          y: [100, 0],
          opacity: [0, 1],
          rotate: [1800, 0]
        },
        transition: {
          duration: 0.3,
          delay: 1.2
        },
        style: styles.logo
      })]
    })
  });
}

/* harmony default export */ var components_Header = (Header); // if screen is less than 1758 px can I change the CSS section

Header.defaultProps = {};
// CONCATENATED MODULE: ./src/components/Scene.js





function Scene() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_framer_motion_["motion"].svg, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "100vw",
      height: "",
      animate: {
        y: [400, 10]
      },
      transition: {
        duration: 0.3,
        delay: 1.5
      },
      style: Scene_styles.scene,
      viewBox: "0 0 1922.405 1412.016",
      className: "scene",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_483",
        "data-name": "Path 483",
        d: "M4554.832-765.079v-467.686l411.18,426.283,379.427-410.989,321.15,389.4,320.471-439.468,269.345,257.214,218.3,502.844H4554.832Z",
        transform: "translate(-4554.703 1356.895)",
        fill: "#585858"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_484",
        "data-name": "Path 484",
        d: "M4609.183-1110.5h-30.924l-46.856-26.939L4487.82-1110.5l-35.508-16.67-63.832,23.329,120.47-130.4Z",
        transform: "translate(-3717.703 1372.748)",
        fill: "#fff"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_485",
        "data-name": "Path 485",
        d: "M4597.329-1131.142l-19.071,20.642-46.856-26.939L4487.82-1110.5l-35.508-16.67-52.325,21.782,92.169-126.62Z",
        transform: "translate(-3059.703 1320.949)",
        fill: "#fff"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_486",
        "data-name": "Path 486",
        d: "M4625.333-1137.531l-42.1,19.277-48.042-4.616V-1232.1Z",
        transform: "translate(-4534.636 1355.446)",
        fill: "#fff"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_475",
        "data-name": "Path 475",
        d: "M4334-954.084l195.4-281.7,485.423,407.714,330.616-389.4,321.15,389.4,320.471-439.468,269.345,257.214v542.847H4334Z",
        transform: "translate(-4334 1316.163)",
        fill: "#414141"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_477",
        "data-name": "Path 477",
        d: "M4609.183-1110.5h-30.924l-46.856-26.939L4487.82-1110.5l-35.508-16.67-52.924,21.474,109.563-128.544Z",
        transform: "translate(-3497 1332.016)",
        fill: "#fff"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_481",
        "data-name": "Path 481",
        d: "M4597.329-1131.142l-19.071,20.642-46.856-26.939L4487.82-1110.5l-35.508-16.67-52.325,21.782,92.169-126.62Z",
        transform: "translate(-2839 1280.217)",
        fill: "#fff"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_479",
        "data-name": "Path 479",
        d: "M4625.333-1137.531l-42.1,19.277-40.493-19.277-52.4,19.277-28.23-19.277-36.424,19.277,84.242-117.244Z",
        transform: "translate(-4313.933 1314.714)",
        fill: "#fff"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_474",
        "data-name": "Path 474",
        d: "M4065-745.2l440.972-490.589L4966.906-799.6l313.937-416.591L5585.792-799.6,5985-1235.787V-384.58H4065Z",
        transform: "translate(-4065 1238.016)",
        fill: "#2f2f2f"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_482",
        "data-name": "Path 482",
        d: "M4065-386.82H5987.405L5986.229,176H4065Z",
        transform: "translate(-4065 1236.016)",
        fill: "#8dc84a"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
        id: "Group_77",
        "data-name": "Group 77",
        transform: "translate(110.202 517.794)",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_1",
          "data-name": "Path 1",
          d: "M940.419,477.673l15.78-15.788a281,281,0,0,0-6.071-31.082l-8.993,4.552,8.079-8.084c-3.349-12.628-6.366-20.778-6.366-20.778s-31.8,32.386-48.238,70.365l10.184,26.773L890.86,486.42a113.683,113.683,0,0,0-3.907,13.74c-10.056,46.992-2.861,88.372,16.071,92.423s42.432-30.759,52.488-77.751c3.118-14.568,3.083-30.515,1.554-45.587Z",
          transform: "translate(-304.588 -160.588)",
          fill: "#e6e6e6"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_2",
          "data-name": "Path 2",
          d: "M989.791,523.812l21.669-5.359a280.987,280.987,0,0,0,10.869-29.746l-10.052-.752,11.095-2.744c3.661-12.541,5.291-21.077,5.291-21.077S984.7,475.421,951,499.436l-5.121,28.183-3.032-21.936a113.676,113.676,0,0,0-10.447,9.743c-32.9,35.029-48.129,74.171-34.016,87.425s52.223-4.4,85.122-39.427c10.2-10.859,18.413-24.528,24.894-38.221Z",
          transform: "translate(-307.067 -173.934)",
          fill: "#e6e6e6"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_3",
          "data-name": "Path 3",
          d: "M725.339,255.625l5.323-41.781a530.14,530.14,0,0,0-44.945-39.38l-8.166,17.177,2.726-21.392c-19.577-14.981-33.489-23.662-33.489-23.662s-10.073,85.051,9.241,160.708l46.108,28.2-40.665-9.6A214.465,214.465,0,0,0,671.5,350.913c39.243,81.745,97.754,135.2,130.687,119.386s27.818-94.895-11.425-176.64c-12.166-25.342-30.627-49.1-50.31-69.832Z",
          transform: "translate(-249.427 -100.412)",
          fill: "#e6e6e6"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_4",
          "data-name": "Path 4",
          d: "M860.852,241.363l26.154-33.015a530.214,530.214,0,0,0-18.119-56.943l-15.87,10.483,13.391-16.9c-9.015-22.943-16.437-37.566-16.437-37.566s-52.586,67.6-75.159,142.35l24.894,47.974L769.857,268.5a214.481,214.481,0,0,0-4.344,26.6c-8.66,90.263,13.8,166.263,50.164,169.752S888.542,398,897.2,307.741c2.685-27.982-.837-57.865-6.971-85.784Z",
          transform: "translate(-277.093 -91.343)",
          fill: "#e6e6e6"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_5",
          "data-name": "Path 5",
          d: "M232.118,267.4l-2.646-43.839a552.813,552.813,0,0,0-53.683-31.634l-5.037,19.181L169.4,188.659c-22.961-11.554-38.9-17.751-38.9-17.751S136.667,260,171.123,333.772l52.708,19.955-43.525-1.953a223.652,223.652,0,0,0,15.129,23.688c56.055,76.145,126.365,119.566,157.042,96.983s10.1-102.618-45.95-178.764c-17.377-23.606-40.9-44.371-65.083-61.794Z",
          transform: "translate(-130.499 -106.043)",
          fill: "#e6e6e6"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_6",
          "data-name": "Path 6",
          d: "M378.658,221.625l20.4-38.9a552.844,552.844,0,0,0-29.6-54.829l-14.227,13.817L365.667,121.8c-13.684-21.759-24.124-35.3-24.124-35.3s-40.772,79.455-49.409,160.417l34.806,44.327-36.25-24.17a223.648,223.648,0,0,0,.707,28.1c8.626,94.158,46.37,167.672,84.3,164.2s61.694-82.623,53.068-176.781c-2.674-29.19-12.075-59.124-23.773-86.54Z",
          transform: "translate(-167.551 -86.5)",
          fill: "#e6e6e6"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
          id: "Ellipse_1",
          "data-name": "Ellipse 1",
          cx: "26.896",
          cy: "7.685",
          rx: "26.896",
          ry: "7.685",
          transform: "translate(298.315 513.339)",
          fill: "#e6e6e6"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
          id: "Ellipse_2",
          "data-name": "Ellipse 2",
          cx: "26.896",
          cy: "7.685",
          rx: "26.896",
          ry: "7.685",
          transform: "translate(591.103 543.309)",
          fill: "#e6e6e6"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
          id: "Ellipse_3",
          "data-name": "Ellipse 3",
          cx: "26.896",
          cy: "7.685",
          rx: "26.896",
          ry: "7.685",
          transform: "translate(647.201 480.294)",
          fill: "#e6e6e6"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
          id: "Ellipse_4",
          "data-name": "Ellipse 4",
          cx: "20.364",
          cy: "5.818",
          rx: "20.364",
          ry: "5.818",
          transform: "translate(543.458 461.741)",
          fill: "#e6e6e6"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
          id: "Ellipse_5",
          "data-name": "Ellipse 5",
          cx: "13.448",
          cy: "4.172",
          rx: "13.448",
          ry: "4.172",
          transform: "translate(109.272 459.546)",
          fill: "#e6e6e6"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
          id: "Ellipse_6",
          "data-name": "Ellipse 6",
          cx: "13.448",
          cy: "4.172",
          rx: "13.448",
          ry: "4.172",
          transform: "translate(56.247 506.422)",
          fill: "#e6e6e6"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
          id: "Ellipse_7",
          "data-name": "Ellipse 7",
          cx: "13.448",
          cy: "4.172",
          rx: "13.448",
          ry: "4.172",
          transform: "translate(56.247 432.649)",
          fill: "#e6e6e6"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_7",
          "data-name": "Path 7",
          d: "M799.8,589.389l-130.3-4.611-68.717,6.555-117.4,11.2L439.2,606.741l-102.314,34.12a2.29,2.29,0,0,1-2.866-2.982l.008-.008,17.744-46.931-1.867-1.376-48.829-35.88-.261-.192L237.5,543.842a5.309,5.309,0,0,1-3.55-8.284l96.428-138.371,50.673-72.7,5.495-7.892,210.792-2.913,205.8,269.234a4.027,4.027,0,0,1-3.343,6.47Z",
          transform: "translate(-154.229 -139.1)",
          fill: "#fff500"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_8",
          "data-name": "Path 8",
          d: "M325.934,244.529l-86.02,261.74-48.823-35.88,29.3-156.5,50.525-72.873.144.17Z",
          transform: "translate(-44.243 -55.803)",
          opacity: "0.2"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_9",
          "data-name": "Path 9",
          d: "M387.7,448.829c-9.761,23.464-13.216,43.063-24.794,39.524-15.85-4.845.792-21.983,10.552-45.448s16.657-41.463,24.794-39.524C413.417,407,397.457,425.365,387.7,448.829Z",
          transform: "translate(-182.789 -159.834)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_10",
          "data-name": "Path 10",
          d: "M413.99,397.278a11.825,11.825,0,0,0-11.844-11.806c-.267,0-.531.013-.793.031l-11.159-1.377a11.8,11.8,0,0,0-3.99-.685c-.375,0-.746.021-1.113.056l-.43-.053-.012.1a11.825,11.825,0,0,0-2.5,22.822l-.023.213,1.1.123a11.839,11.839,0,0,0,3.016.385c.113,0,.224-.006.337-.009l11.407,1.278a11.792,11.792,0,0,0,4.2.762,11.923,11.923,0,0,0,1.6-.113l.973.109.006-.285a11.827,11.827,0,0,0,9.23-11.555Z",
          transform: "translate(-186.969 -155.25)",
          fill: "#fff500"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_11",
          "data-name": "Path 11",
          d: "M413.99,397.278a11.825,11.825,0,0,0-11.844-11.806c-.267,0-.531.013-.793.031l-11.159-1.377a11.8,11.8,0,0,0-3.99-.685c-.375,0-.746.021-1.113.056l-.43-.053-.012.1a11.825,11.825,0,0,0-2.5,22.822l-.023.213,1.1.123a11.839,11.839,0,0,0,3.016.385c.113,0,.224-.006.337-.009l11.407,1.278a11.792,11.792,0,0,0,4.2.762,11.923,11.923,0,0,0,1.6-.113l.973.109.006-.285a11.827,11.827,0,0,0,9.23-11.555Z",
          transform: "translate(-186.969 -155.25)",
          fill: "#fff",
          opacity: "0.2"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_12",
          "data-name": "Path 12",
          d: "M220,547.992l-1.366-.717C253.62,480.6,352.568,338.127,353.563,336.7l1.267.881C353.835,339.007,254.941,481.4,220,547.992Z",
          transform: "translate(-150.905 -144.428)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_13",
          "data-name": "Path 13",
          d: "M359.412,648.216l-1.488-.405c.721-2.65,72.379-265.5,97.259-309.839l1.345.755C431.741,382.9,360.133,645.567,359.412,648.216Z",
          transform: "translate(-183.155 -144.723)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_14",
          "data-name": "Path 14",
          d: "M927.392,596.825c-38.2-62.932-182.471-257.835-183.924-259.8l1.24-.918c1.453,1.962,145.764,196.922,184,259.914Z",
          transform: "translate(-272.419 -144.292)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
          id: "Ellipse_8",
          "data-name": "Ellipse 8",
          cx: "5.398",
          cy: "6.941",
          rx: "5.398",
          ry: "6.941",
          transform: "translate(168.061 496.616) rotate(-0.092)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
          id: "Ellipse_9",
          "data-name": "Ellipse 9",
          cx: "5.398",
          cy: "6.941",
          rx: "5.398",
          ry: "6.941",
          transform: "translate(64.027 392.674) rotate(-0.092)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
          id: "Ellipse_10",
          "data-name": "Ellipse 10",
          cx: "5.398",
          cy: "6.941",
          rx: "5.398",
          ry: "6.941",
          transform: "translate(650.985 442.123) rotate(-0.092)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_15",
          "data-name": "Path 15",
          d: "M386.414,320.69l290.959,3.118A90.074,90.074,0,0,0,587.258,234.5l-111.041.179c-46.446.075-85.773,36.4-89.533,82.689Z",
          transform: "translate(-189.751 -120.766)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_16",
          "data-name": "Path 16",
          d: "M684.1,471.814H577.757a9.774,9.774,0,0,0-9.783,9.9l.092,7.777.945,83.256.015,1.606.031,2.651.031,2.59.177,15.608a9.789,9.789,0,0,0,9.575,9.675c.261,0,.53-.008.8-.023l25.252-1.537,36.533-2.229,12.895-.784,2.874-.177,20.1-1.222h.008l7.393-.453a9.8,9.8,0,0,0,9.191-9.767V481.6a9.793,9.793,0,0,0-9.783-9.783Z",
          transform: "translate(-231.787 -175.711)",
          opacity: "0.2"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_17",
          "data-name": "Path 17",
          d: "M701.352,450.576a2.614,2.614,0,0,0-1.936,1.11L687.7,451.7V448.6a9.793,9.793,0,0,0-9.783-9.783H571.575a9.774,9.774,0,0,0-9.783,9.9l.038,3.195-7.557.012a2.339,2.339,0,0,0-1.587-.735c-2.649,0-4.786,5.788-4.775,12.919s2.168,12.908,4.816,12.9a2.894,2.894,0,0,0,2.22-1.479l144.506-.232a2.613,2.613,0,0,0,1.94,1.1c2.648,0,4.786-5.788,4.775-12.919S704,450.572,701.352,450.576Z",
          transform: "translate(-227.142 -168.071)",
          fill: "#fff500"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_18",
          "data-name": "Path 18",
          d: "M701.352,450.576a2.614,2.614,0,0,0-1.936,1.11L687.7,451.7V448.6a9.793,9.793,0,0,0-9.783-9.783H571.575a9.774,9.774,0,0,0-9.783,9.9l.038,3.195-7.557.012a2.338,2.338,0,0,0-1.587-.735c-2.648,0-4.786,5.788-4.775,12.919s2.168,12.908,4.817,12.9a2.894,2.894,0,0,0,2.22-1.479l144.506-.232a2.613,2.613,0,0,0,1.939,1.1c2.649,0,4.786-5.788,4.775-12.919S704,450.572,701.352,450.576Z",
          transform: "translate(-227.142 -168.071)",
          fill: "#fff",
          opacity: "0.2"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_19",
          "data-name": "Path 19",
          d: "M727.391,661.207h0a6.25,6.25,0,0,1-9.813-1.677l-5.781-11.1,2.3-4.984,12.394,7.932a6.25,6.25,0,0,1,.9,9.829Z",
          transform: "translate(-265.086 -215.449)",
          fill: "#ffb8b8"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_20",
          "data-name": "Path 20",
          d: "M759.851,749.441a5.176,5.176,0,0,0-5.219-4.625,5.241,5.241,0,0,0-5.12,3.969h0l-5.12,24.863a10.055,10.055,0,0,0-.262,2.217c0,5.607,4.693,9.5,10.5,9.5s10.5-3.9,10.5-9.5a10.169,10.169,0,0,0-.363-2.659Z",
          transform: "translate(-272.573 -238.919)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_21",
          "data-name": "Path 21",
          d: "M806.6,760.562a11.754,11.754,0,0,0-1.674-1.224l-19.56-13.669c-1.9-1.2-3.938-1.162-5.415.281a3.806,3.806,0,0,0-.563,4.839L794.157,770.2a10.291,10.291,0,0,0,1.125,1.319c2.56,2.861,8.237,3.019,11.357,0C809.717,768.45,809.681,762.981,806.6,760.562Z",
          transform: "translate(-280.592 -238.919)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_22",
          "data-name": "Path 22",
          d: "M827.392,738.955H807.581a2.409,2.409,0,0,0-2.5,2.3,2.619,2.619,0,0,0,1.947,2.577l18.688,5.781c2.715.633,6.372-1.786,6.372-4.808C832.09,740.958,829.951,738.955,827.392,738.955Z",
          transform: "translate(-286.685 -237.562)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_23",
          "data-name": "Path 23",
          d: "M703.292,741.234a2.46,2.46,0,0,0-2.658-2.3H680.823c-2.5,0-4.6,2.7-4.6,5.716s3.55,5.581,6.273,4.948l18.969-5.781a2.38,2.38,0,0,0,1.826-2.588Z",
          transform: "translate(-256.85 -237.556)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_24",
          "data-name": "Path 24",
          d: "M722.025,745.693,702.459,759.3a9.1,9.1,0,0,0-1.688,1.224A7.407,7.407,0,0,0,700.392,771q.183.2.379.379a8.268,8.268,0,0,0,11.354,0,8.654,8.654,0,0,0,1.125-1.317l14.781-19.3a3.71,3.71,0,0,0-.563-4.8A4.22,4.22,0,0,0,722.025,745.693Z",
          transform: "translate(-261.987 -238.921)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_25",
          "data-name": "Path 25",
          d: "M762.525,709.786a2.1,2.1,0,0,0,.363-1.13c0-2.383-4.7-4.039-10.5-4.039s-10.5,1.656-10.5,4.039a2.013,2.013,0,0,0,.262.942l5.12,10.566h0c.587,1,2.7,1.694,5.12,1.687,2.726,0,4.991-.862,5.218-1.965Z",
          transform: "translate(-272.052 -229.612)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_26",
          "data-name": "Path 26",
          d: "M804.39,711.994c-3.12-1.283-8.8-1.216-11.357,0a9.186,9.186,0,0,0-1.125.561L777.138,720.8c-1,.653-.768,1.518.563,2.056a8.838,8.838,0,0,0,5.416.12l19.56-5.809a16.671,16.671,0,0,0,1.674-.52C807.431,715.622,807.467,713.3,804.39,711.994Z",
          transform: "translate(-280.071 -231.103)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_27",
          "data-name": "Path 27",
          d: "M829.84,725.673c0-1.284-3.657-2.312-6.372-2.043l-18.688,2.457c-1.117.157-1.947.52-1.947,1.1s1.218.976,2.5.976h19.811C827.7,728.157,829.84,727.306,829.84,725.673Z",
          transform: "translate(-286.164 -234.004)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_28",
          "data-name": "Path 28",
          d: "M699.217,726.087l-18.969-2.457c-2.723-.269-6.273.819-6.273,2.1s2.1,2.429,4.6,2.429h19.811c1.378,0,2.658-.378,2.658-.975S700.452,726.244,699.217,726.087Z",
          transform: "translate(-256.329 -234.005)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_29",
          "data-name": "Path 29",
          d: "M725.219,722.87c1.384-.546,1.547-1.372.563-2.04L711,712.628a7.77,7.77,0,0,0-1.125-.559,17.28,17.28,0,0,0-11.354,0q-.2.078-.379.161c-2.786,1.273-2.616,3.265.379,4.449a12.939,12.939,0,0,0,1.688.52l19.566,5.784A8.941,8.941,0,0,0,725.219,722.87Z",
          transform: "translate(-261.466 -231.115)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_30",
          "data-name": "Path 30",
          d: "M783.619,685.155c0,30.557-17.03,31.122-38.038,31.122s-55.5-6.045-38.038-31.122c18.416-26.449,50.008-76.863,38.037-79.533C745.581,605.622,783.619,654.6,783.619,685.155Z",
          transform: "translate(-262.996 -206.692)",
          fill: "#f9a825"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_31",
          "data-name": "Path 31",
          d: "M766.271,724.1c0,12.1-6.741,12.319-15.057,12.319s-21.968-2.393-15.057-12.319c7.29-10.469,19.795-30.425,15.057-31.482C751.214,692.618,766.271,712,766.271,724.1Z",
          transform: "translate(-270.289 -226.834)",
          fill: "#ff6584",
          opacity: "0.5"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_32",
          "data-name": "Path 32",
          d: "M694.193,613.318v5.464A9.8,9.8,0,0,1,685,628.55l-105.05,6.4a9.777,9.777,0,0,1-10.374-9.652l-.254-22.455,63.545-1.03Z",
          transform: "translate(-232.1 -205.81)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_33",
          "data-name": "Path 33",
          d: "M691.792,627.881,644.4,603.267a1.735,1.735,0,0,1-.884-1.122l-10.281-41.434a9.946,9.946,0,0,1,6.368-11.783l2.477-.867a4.274,4.274,0,0,1,5.53,2.89l10.133,36.479a1.734,1.734,0,0,0,.565.872L696.921,620.3a1.735,1.735,0,0,1,.325,2.316l-3.222,4.709A1.735,1.735,0,0,1,691.792,627.881Z",
          transform: "translate(-246.829 -193.309)",
          fill: "#e6e6e6"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_34",
          "data-name": "Path 34",
          d: "M646.951,546.98c-22.986-12.1-47.047-18.178-72.836-14.567,7.774-13.175,13.548-25.356,13.162-34.475a17.95,17.95,0,0,1,7.042-15.291,21.79,21.79,0,0,1,12.986-4.286h0a17.845,17.845,0,0,1,13.218-.526,13.9,13.9,0,0,1,8.061,7.983c.882,2.136,2.78,4.007,5.533,5.656a15.526,15.526,0,0,1,5.991,6.259,10.283,10.283,0,0,1-.438,10.912C648.57,518,648.6,532.046,646.951,546.98Z",
          transform: "translate(-233.209 -176.869)",
          fill: "#2f2e41"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
          id: "Ellipse_11",
          "data-name": "Ellipse 11",
          cx: "16.101",
          cy: "16.101",
          r: "16.101",
          transform: "translate(365.057 307.625)",
          fill: "#ffb8b8"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_35",
          "data-name": "Path 35",
          d: "M630.812,545.07l-18.784,1.917c1.008-10.983,1.4-21.117,0-28.751h18.784C627.244,530.39,627.557,539.053,630.812,545.07Z",
          transform: "translate(-241.987 -186.459)",
          fill: "#ffb8b8"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_36",
          "data-name": "Path 36",
          d: "M630.991,547.6q-.023,2.524-.108,5c-.392,11.788-1.875,22.4-5.917,30.216a27.158,27.158,0,0,1-2.928,4.572.134.134,0,0,1-.031.038,2.968,2.968,0,0,1-.254.307,21.737,21.737,0,0,1-2.743,2.836l-7.692,8.069-.354.369-2.244,1.5-11.558,7.7-27.757-14.916-.031-2.59-.031-2.651c6.171-8.745,10.021-20.119,12.465-33.067.669-3.543,1.237-7.208,1.721-10.974.33-2.605.622-5.264.876-7.961a4.253,4.253,0,0,1,.807-2.3.008.008,0,0,1,0-.006l.005,0c1.184-1.506,3.535-1.475,6.378-1.629,3.988-.215,7.915-2.282,11.443-.331a2.078,2.078,0,0,1,.254.138l10.351,11.5,4.757-5.126.223-.238,9.8,4.2a4.524,4.524,0,0,1,2.567,5.356Z",
          transform: "translate(-232.104 -189.401)",
          fill: "#e6e6e6"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_37",
          "data-name": "Path 37",
          d: "M609.153,621.458a15.551,15.551,0,0,1-1.092,5.728l-2.842,7.174L579.966,635.9c-.269.015-.538.023-.8.023a9.789,9.789,0,0,1-9.575-9.675l-.177-15.608-.031-2.59,9.191,3.9,8.96-4.811a13.43,13.43,0,0,1,1.5-.538,14.423,14.423,0,0,1,2.029-.484h.008c.33-.054.661-.1.991-.13a15.531,15.531,0,0,1,10.689,2.9,15.325,15.325,0,0,1,4.388,4.934,3.623,3.623,0,0,1,.223.415,14.992,14.992,0,0,1,1.368,3.627,15.729,15.729,0,0,1,.423,3.6Z",
          transform: "translate(-232.114 -206.757)",
          fill: "#2f2e41"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_38",
          "data-name": "Path 38",
          d: "M481.279,479.874l3.359,15.412,20.408,17.557-18.017-18.4Z",
          transform: "translate(-111.43 -111.105)",
          opacity: "0.2"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_39",
          "data-name": "Path 39",
          d: "M456.836,489.352l6.133,24.918,18.018,6.517-16.867-8.434Z",
          transform: "translate(-105.771 -113.299)",
          opacity: "0.2"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_40",
          "data-name": "Path 40",
          d: "M640.483,503.232c-11.866-5.459-25.282-7.016-37.185-1.15l1.533-13.8,26.068-4.217Z",
          transform: "translate(-239.966 -178.548)",
          fill: "#2f2e41"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_41",
          "data-name": "Path 41",
          d: "M619.026,574.209l-87.258-14.99,1.07-5.272,86.188,20.261Z",
          transform: "translate(-123.12 -128.255)",
          fill: "#3f3d56"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_42",
          "data-name": "Path 42",
          d: "M676.509,646.242h0a6.25,6.25,0,0,1-9.813-1.677l-5.781-11.1,2.3-4.984,12.394,7.932a6.25,6.25,0,0,1,.9,9.829Z",
          transform: "translate(-253.306 -211.984)",
          fill: "#ffb8b8"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_43",
          "data-name": "Path 43",
          d: "M640.91,612.916,593.517,588.3a1.735,1.735,0,0,1-.884-1.122l-10.281-41.434a9.946,9.946,0,0,1,6.367-11.782l2.477-.867a4.274,4.274,0,0,1,5.53,2.89l10.133,36.479a1.736,1.736,0,0,0,.565.872l38.614,31.994a1.735,1.735,0,0,1,.325,2.316l-3.222,4.709A1.735,1.735,0,0,1,640.91,612.916Z",
          transform: "translate(-235.048 -189.844)",
          fill: "#e6e6e6"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_44",
          "data-name": "Path 44",
          d: "M759.369,667.323a1.618,1.618,0,0,0,1.9-1.264l.874-4.376a1.611,1.611,0,0,0-1.264-1.9l-12.666-2.532a1.615,1.615,0,0,0-1.9,1.264l-.874,4.376a1.611,1.611,0,0,0,1.264,1.9Z",
          transform: "translate(-272.868 -218.639)",
          fill: "#e6e6e6"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_476",
        "data-name": "Path 476",
        d: "M4557.894-1185.63c19.88,18.881,58.046,55.4,58.046,55.4l-37.681,19.726-46.856-26.939L4487.82-1110.5l-35.508-16.67-57.15,16.67,110.891-123.839Z",
        transform: "translate(-4065 1236.016)",
        fill: "#fff"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_478",
        "data-name": "Path 478",
        d: "M4603.889-1108.494l-25.631-2-46.856-26.939L4487.82-1110.5l-35.508-16.67-48.45,25.847,103.907-138.934Z",
        transform: "translate(-3292 1261.016)",
        fill: "#fff"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_480",
        "data-name": "Path 480",
        d: "M4545.023-1120.9l-13.621-16.534L4487.82-1110.5l-35.508-16.67-63.521,16.67,156.232-172.517Z",
        transform: "translate(-2625 1283.016)",
        fill: "#fff"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_489",
        "data-name": "Path 489",
        d: "M4946.211-644.943l22.008-13.286,16.724,16.287,24.92-16.287,24.269,16.287,19.368-16.287s-35.276-126.348-33.862-183.513-64.943-83.718-51.418-13.194-22.008,206.948-22.008,206.948",
        transform: "translate(-4072.41 1640.048)",
        fill: "#8d5b2b"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_492",
        "data-name": "Path 492",
        d: "M4946.211-644.943l22.008-13.286,16.724,16.287,24.92-16.287,24.269,16.287,19.368-16.287s-35.276-126.348-33.862-183.513-64.943-83.718-51.418-13.194-22.008,206.948-22.008,206.948",
        transform: "translate(-3285.676 1595.502)",
        fill: "#8d5b2b"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_491",
        "data-name": "Path 491",
        d: "M4963.481-669.1c-17.917,13.582-4.95,52.934-25.393,39.357s-60.569-44.263-56.379-93.664,28.58-77.953,73.143-103.937,63.956-19.728,105.107,0,47.478,43.092,59.5,78.911,3.457,37.2-11.418,64.363S5084.53-639.8,5059.96-639.8s-13.034-21.979-37.153-29.305S4981.4-682.686,4963.481-669.1Z",
        transform: "translate(-3289.145 1411.04)",
        fill: "#517a21"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_516",
        "data-name": "Path 516",
        d: "M5100.285-1243.172s-3.924-8.417-5.3-9.852-1.753-.211-2.027-.781.647-.8,2.027-3.218,4.361-8.832,5.3-9.127-2.316,7.1,0,9.127a8.958,8.958,0,0,0,3.31,1.646c1.659.613-.652.234-.652.83,0,1-.341-.3-2.658,1.523S5100.285-1243.172,5100.285-1243.172Z",
        transform: "translate(-4073.356 1382.679)"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_520",
        "data-name": "Path 520",
        d: "M5100.285-1243.172s-3.924-8.417-5.3-9.852-1.753-.211-2.027-.781.647-.8,2.027-3.218,4.361-8.832,5.3-9.127-2.316,7.1,0,9.127a8.958,8.958,0,0,0,3.31,1.646c1.659.613-.652.234-.652.83,0,1-.341-.3-2.658,1.523S5100.285-1243.172,5100.285-1243.172Z",
        transform: "translate(-4093.231 1364.372)"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_517",
        "data-name": "Path 517",
        d: "M5100.285-1243.172s-3.924-8.417-5.3-9.852-1.753-.211-2.027-.781.647-.8,2.027-3.218,4.361-8.832,5.3-9.127-2.316,7.1,0,9.127a8.958,8.958,0,0,0,3.31,1.646c1.659.613-.652.234-.652.83,0,1-.341-.3-2.658,1.523S5100.285-1243.172,5100.285-1243.172Z",
        transform: "translate(-4073.587 1291.794)"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_521",
        "data-name": "Path 521",
        d: "M5100.285-1243.172s-3.924-8.417-5.3-9.852-1.753-.211-2.027-.781.647-.8,2.027-3.218,4.361-8.832,5.3-9.127-2.316,7.1,0,9.127a8.958,8.958,0,0,0,3.31,1.646c1.659.613-.652.234-.652.83,0,1-.341-.3-2.658,1.523S5100.285-1243.172,5100.285-1243.172Z",
        transform: "translate(-4105.711 1352.442)"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_518",
        "data-name": "Path 518",
        d: "M5100.285-1243.172s-3.924-8.417-5.3-9.852-1.753-.211-2.027-.781.647-.8,2.027-3.218,4.361-8.832,5.3-9.127-2.316,7.1,0,9.127a8.958,8.958,0,0,0,3.31,1.646c1.659.613-.652.234-.652.83,0,1-.341-.3-2.658,1.523S5100.285-1243.172,5100.285-1243.172Z",
        transform: "translate(-4090.52 1318.263)"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_519",
        "data-name": "Path 519",
        d: "M5100.285-1243.172s-3.924-8.417-5.3-9.852-1.753-.211-2.027-.781.647-.8,2.027-3.218,4.361-8.832,5.3-9.127-2.316,7.1,0,9.127a8.958,8.958,0,0,0,3.31,1.646c1.659.613-.652.234-.652.83,0,1-.341-.3-2.658,1.523S5100.285-1243.172,5100.285-1243.172Z",
        transform: "translate(-4042.423 1284.161)"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_835",
        "data-name": "Path 835",
        d: "M4963.481-669.1c-17.917,13.582-4.95,52.934-25.393,39.357s-60.569-44.263-56.379-93.664,28.58-77.953,73.143-103.937,63.956-19.728,105.107,0,47.478,43.092,59.5,78.911,3.457,37.2-11.418,64.363S5084.53-639.8,5059.96-639.8s-13.034-21.979-37.153-29.305S4981.4-682.686,4963.481-669.1Z",
        transform: "translate(-4073.275 1454.707)",
        fill: "#41621a"
      })]
    })
  });
}

/* harmony default export */ var components_Scene = (Scene);
const Scene_styles = {
  scene: {
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    width: "100%"
  }
};
// EXTERNAL MODULE: external "prismic-reactjs"
var external_prismic_reactjs_ = __webpack_require__("PzR7");

// EXTERNAL MODULE: ./src/components/Avatar.js
var Avatar = __webpack_require__("vmZo");

// EXTERNAL MODULE: ./src/components/date.js
var components_date = __webpack_require__("0EVa");

// EXTERNAL MODULE: ./src/components/cover-image.js
var cover_image = __webpack_require__("Qvm2");

// CONCATENATED MODULE: ./src/components/HeroPost.js







function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    style: HeroPost_styles.wrapper,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      children: "Most Recent Post"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        maxWidth: "80vw"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(cover_image["a" /* default */], {
        title: external_prismic_reactjs_["RichText"].asText(title),
        slug: slug,
        url: coverImage.url
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: "mb-4 text-4xl lg:text-6xl leading-tight",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            as: `/posts/${slug}`,
            href: "/posts/[slug]",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "hover:underline",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_prismic_reactjs_["RichText"], {
                render: title
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "mb-4 md:mb-0 text-lg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_date["a" /* default */], {
            dateString: date
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "text-lg leading-relaxed mb-4",
          children: excerpt
        }), author && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Avatar["a" /* default */], {
          name: author.name,
          picture: author.picture
        })]
      })]
    })]
  });
}
const HeroPost_styles = {
  wrapper: {
    position: "relative",
    zIndex: 5
  }
};
// CONCATENATED MODULE: ./src/components/News.js





function News({
  heroPost
}) {
  const styles = {
    wrapper: {
      color: "#fff",
      backgroundColor: "#3485BC",
      position: "relative",
      zIndex: 1,
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    title: {
      textAlign: "center"
    },
    entries: {
      overflow: "hidden",
      display: "grid",
      gridTemplateColumsn: "1fr",
      maxWidth: "500px",
      padding: "1em",
      margin: "auto",
      fontSize: "16px"
    },
    entry: {
      margin: "1em"
    },
    path: {
      position: "relative",
      zIndex: 2
    },
    fish: {
      position: "relative",
      padding: "1em"
    },
    entryImage: {
      width: "100%",
      borderRadius: "5px"
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: styles.wrapper,
    className: "news",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      style: styles.title,
      children: "Dry John News"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: styles.entries,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeroPost, {
        title: heroPost.title,
        coverImage: heroPost.coverimage,
        date: heroPost.date,
        author: heroPost.author,
        slug: heroPost._meta.uid,
        excerpt: heroPost.excerpt
      })
    })]
  });
}

/* harmony default export */ var components_News = (News);
News.defaultProps = {
  baseUrl: "https://dry-john-backend.herokuapp.com/"
};
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// CONCATENATED MODULE: ./src/components/AboutSection.js






function About() {
  const styles = {
    wrapper: {
      backgroundColor: "#8DC84A",
      color: "#fff",
      position: "relative",
      zIndex: 1
    },
    title: {
      textAlign: "center"
    },
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      position: "relative",
      padding: "5em 1em",
      zIndex: 1
    },
    trees: {
      position: "absolute",
      transform: "translateX(0vw)",
      zIndex: 0
    },
    text: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    image: {
      maxWidth: "30vw",
      minWidth: "280px",
      justifySelf: "center",
      borderRadius: "5px"
    },
    link: {
      textDecoration: "none",
      color: "#fff"
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: styles.wrapper,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      style: styles.title,
      children: "About Dry John"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "315.998",
      height: "472.289",
      viewBox: "0 0 315.998 472.289",
      style: styles.trees,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_523",
        "data-name": "Path 523",
        d: "M4946.211-644.943l22.008-13.286,16.724,16.287,24.92-16.287,24.269,16.287,19.368-16.287s-20.782-139.543-19.368-196.707c1.359-54.935-60.285-31.091-59.758-28.34,13.525,70.524-28.162,235.289-28.162,235.289",
        transform: "translate(-4892.916 1114.23)",
        fill: "#8d5b2b"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_525",
        "data-name": "Path 525",
        d: "M4946.211-716.67l15.754-9.51,11.971,11.659,17.838-11.659,17.372,11.659,13.864-11.659s-25.251-90.444-24.239-131.364-46.488-59.928-36.807-9.445-15.754,148.139-15.754,148.139",
        transform: "translate(-4755.816 1017.351)",
        fill: "#8d5b2b"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_526",
        "data-name": "Path 526",
        d: "M4940.158-718.966c-12.825,9.722-3.543,37.892-18.177,28.173s-43.357-31.685-40.357-67.047,20.458-55.8,52.357-74.4,45.782-14.122,75.239,0,33.986,30.847,42.59,56.486,2.474,26.632-8.173,46.073-16.828,31.693-34.417,31.693-9.33-15.733-26.6-20.978S4952.983-728.688,4940.158-718.966Z",
        transform: "translate(-4739.883 870.309)",
        fill: "#5f8830"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_524",
        "data-name": "Path 524",
        d: "M4903.326-647.517c-20.443-13.577-25.807-26.493-21.616-75.893s28.58-77.953,73.143-103.937,63.956-19.728,105.107,0,47.478,43.092,59.5,78.911,3.457,37.2-11.418,64.363-86.574,52-112.846,54.5S4923.769-633.941,4903.326-647.517Z",
        transform: "translate(-4880.385 937.909)",
        fill: "#517a21"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_528",
        "data-name": "Path 528",
        d: "M5100.285-1243.172s-3.924-8.417-5.3-9.852-1.753-.211-2.027-.781.647-.8,2.027-3.218,4.361-8.832,5.3-9.127-2.316,7.1,0,9.127a8.958,8.958,0,0,0,3.31,1.646c1.659.613-.652.234-.652.83,0,1-.341-.3-2.658,1.523S5100.285-1243.172,5100.285-1243.172Z",
        transform: "translate(5284.493 -1235.54) rotate(180)"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_527",
        "data-name": "Path 527",
        d: "M5100.285-1243.172s-3.924-8.417-5.3-9.852-1.753-.211-2.027-.781.647-.8,2.027-3.218,4.361-8.832,5.3-9.127-2.316,7.1,0,9.127a8.958,8.958,0,0,0,3.31,1.646c1.659.613-.652.234-.652.83,0,1-.341-.3-2.658,1.523S5100.285-1243.172,5100.285-1243.172Z",
        transform: "translate(5315.658 -1243.172) rotate(180)"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_529",
        "data-name": "Path 529",
        d: "M5100.285-1243.172s-3.924-8.417-5.3-9.852-1.753-.211-2.027-.781.647-.8,2.027-3.218,4.361-8.832,5.3-9.127-2.316,7.1,0,9.127a8.958,8.958,0,0,0,3.31,1.646c1.659.613-.652.234-.652.83,0,1-.341-.3-2.658,1.523S5100.285-1243.172,5100.285-1243.172Z",
        transform: "translate(5305.658 -1214.679) rotate(180)"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: styles.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/Assets/Images/beach_pete.jpg",
        alt: "Pete Phinney",
        style: styles.image
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: styles.text,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].p, {
          animate: {
            y: [40, 0],
            opacity: [0, 1]
          },
          transition: {
            duration: 0.5,
            delay: 0.1
          },
          style: {
            maxWidth: "90vw",
            fontSize: "1.3em"
          },
          children: "\"I try and live what I say. I want the world to be a less polluted place. That\u2019s a tall order. But if more of us do just a little bit more I believe we can make a noticeable difference. I take joy in knowing that for every Dry John toilet bag used, there is one less dose of human waste on the ground or in the water. Thank you so much for pitching in and helping make a difference! Sincerely, Pete Phinney\" - founder of Dry John, LLC"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "https://www.instagram.com/dry.john/",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaInstagram"], {
              style: styles.link,
              size: "2em"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "https://www.instagram.com/dry.john/",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaFacebook"], {
              style: styles.link,
              size: "2em"
            })
          })]
        })]
      })]
    })]
  });
}

/* harmony default export */ var AboutSection = (About);
// CONCATENATED MODULE: ./src/components/Testimonials.js





function Reviews() {
  const {
    0: data,
    1: setReviews
  } = Object(external_react_["useState"])([{
    id: "1",
    asin: {
      original: "B078X3TCRG",
      variant: ""
    },
    review_data: "Reviewed in the United States on July 2, 2020",
    date: {
      date: "July 2, 2020",
      unix: 1593655200
    },
    name: "geb49",
    rating: 5,
    title: "BEST EVER..",
    review: "FOR THOSE OF YOU WHO KNOW WHAT IT'S LIKE TO HAVE A TOILET NOT WORKING IN AN RV THIS IS THE PERFECT BACK UP! NO PUN INTENDED!!!! NO SMELLAND CAN ENGAGE ON A MAKE SHIFT TOILET ANYWHERE..",
    verified_purchase: true
  }, {
    id: "2",
    asin: {
      original: "B078X3TCRG",
      variant: ""
    },
    review_data: "Reviewed in the United States on July 2, 2020",
    date: {
      date: "February 8, 2018",
      unix: 1593655200
    },
    name: "geb49",
    rating: 5,
    title: "Great product and is environmentally friendly.",
    review: "Excellent Product! Works perfectly with the toilet when having plumbing issues. Plan to use this also for camping (RV or tent) boating and traveling. The organic media absorbs odor and the bags are compostable. Will definitely reorder! ",
    verified_purchase: true
  }, {
    id: "3",
    asin: {
      original: "B078X3TCRG",
      variant: ""
    },
    review_data: "Reviewed in the United States on December 24, 2019",
    date: {
      date: "December 24, 2019",
      unix: 1593655200
    },
    name: "geb49",
    rating: 5,
    title: "Camper's secret weapon.",
    review: "Great camping tool. Great for short distance travel in one's travel van , camper or SUV. ",
    verified_purchase: true
  }]); // const API = "https://dry-john.herokuapp.com";

  const headers = {
    header: {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      "Content-Type": "application/json"
    }
  }; // Load the reviews
  // useEffect(() => {
  //   fetch(`/reviews`, headers)
  //     .then((res) => res.json())
  //     .then((res) => setReviews(res))
  //     .catch((err) => console.error(err));
  // }, [data]);

  const star = /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaStar"], {});

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: Testimonials_styles.wrapper,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      children: "Testimonials"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: Testimonials_styles.container,
      children: data.map(review => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: Testimonials_styles.testimonial,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          children: review.title
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: [star, star, star, star, star]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: review.review
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: review.date.date
        })]
      }, review.id))
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      children: ["Reviews pulled from Amazon.com. to visit, ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        to: "/order",
        children: "click here."
      })]
    })]
  });
}

/* harmony default export */ var Testimonials = (Reviews);
const Testimonials_styles = {
  wrapper: {
    backgroundColor: "#517A21",
    color: "#8DC84A",
    minHeight: "40vh",
    position: "relative",
    zIndex: 1,
    padding: "1em"
  },
  container: {
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(375px, 1fr)",
    justifyContent: "center",
    gap: "2em"
  },
  path: {
    position: "relative",
    zIndex: 2
  },
  testimonial: {
    margin: "1em",
    padding: "1em",
    background: "#DBF0FF",
    borderRadius: "5px",
    color: "#333"
  }
};
// EXTERNAL MODULE: ./src/components/Footer.js
var Footer = __webpack_require__("JwsL");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/lib/api.js
var api = __webpack_require__("RvHS");

// CONCATENATED MODULE: ./src/pages/index.js












function index({
  preview,
  allPosts
}) {
  const heroPost = allPosts[0].node;
  const morePosts = allPosts.slice(1);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Dry John Toilet Bags"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:title",
        content: "Dry John Toilet Bags"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "",
        content: ""
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "target",
        content: "all"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "audience",
        content: "all"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:video",
        content: "https://www.dry-john.com/Assets/Videos/LQ_nologo.mp4"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "og:type",
        content: "website"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "rating",
        content: "safe for kids"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "og:image",
        content: "https://www.dry-john.com/Assets/Images/header_logo.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: "Dry John Toilet Bags for securing your waste in nature"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "keywords",
        content: "Dry John, Camping, Eco, Eco-friendly, compostable, toilet bags"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "copyright",
        content: "Dry John LLC"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "url",
        content: "http://www.dry-john.com"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "twitter:title",
        content: "Dry John Toilet Bags"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "Author",
        content: "Neuro Design Agency"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Nav["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Scene, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_News, {
      heroPost: heroPost,
      preview: preview,
      morePosts: morePosts
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(AboutSection, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Testimonials, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer["a" /* default */], {})]
  });
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (index);
async function getStaticProps({
  preview = false,
  previewData
}) {
  const allPosts = await Object(api["b" /* getAllPostsForHome */])(previewData);
  return {
    props: {
      preview,
      allPosts
    }
  };
}

/***/ }),

/***/ "RvHS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export API_TOKEN */
/* unused harmony export API_LOCALE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrismicClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllPostsWithSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllPostsForHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPostAndMorePosts; });
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vNl1");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_0__);

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`; // export const API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;

const API_TOKEN = process.env.PRISMIC_API_TOKEN;
const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;
const PrismicClient = prismic_javascript__WEBPACK_IMPORTED_MODULE_0___default.a.client(REF_API_URL, {
  accessToken: API_TOKEN
});

async function fetchAPI(query, {
  previewData,
  variables
} = {}) {
  const prismicAPI = await PrismicClient.getApi();
  const res = await fetch(`${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`, {
    headers: {
      "Prismic-Ref": (previewData === null || previewData === void 0 ? void 0 : previewData.ref) || prismicAPI.masterRef.ref,
      "Content-Type": "application/json",
      "Accept-Language": API_LOCALE,
      Authorization: `Token ${API_TOKEN}`
    }
  });

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error("Failed to fetch API");
  }

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

async function getAllPostsWithSlug() {
  var _data$allPosts;

  const data = await fetchAPI(`
    {
      allPosts {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `);
  return data === null || data === void 0 ? void 0 : (_data$allPosts = data.allPosts) === null || _data$allPosts === void 0 ? void 0 : _data$allPosts.edges;
}
async function getAllPostsForHome(previewData) {
  const data = await fetchAPI(`
    query {
      allPosts(sortBy: date_DESC) {
        edges {
          node {
            date
            title
            content
            coverimage
            excerpt
            author {
              ...on Author {
                name
                picture
              }
            }
            _meta {
              uid
            }
          }
        }
      }
    }
  `, {
    previewData
  });
  return data.allPosts.edges;
}
async function getPostAndMorePosts(slug, previewData) {
  const data = await fetchAPI(`
  query PostBySlug($slug: String!, $lang: String!) {
    post(uid: $slug, lang: $lang) {
      title
      content
      date
      coverimage
      author {
        ...on Author {
          name
          picture
        }
      }
      _meta {
        uid
      }
    }

   morePosts: allPosts(sortBy: date_DESC, first: 50) {
      edges {
        node {
          title
          content
          date
          coverimage
          excerpt
          author {
            ...on Author {
              name
              picture
            }
          }
          _meta {
            uid
          }
        }
      }
    }
  }
  `, {
    previewData,
    variables: {
      slug,
      lang: API_LOCALE
    }
  });
  data.morePosts = data.morePosts.edges.filter(({
    node
  }) => node._meta.uid !== slug).slice(0, 10);
  return data;
}

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    src: loader({
      src,
      quality,
      width: widths[last]
    }),
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ')
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
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

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(parsedHref, pages, applyBasePath = true) {
  const {
    pathname
  } = parsedHref;
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return parsedHref;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
        return true;
      }
    });
  }

  parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
  return parsedHref;
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
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
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
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


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = resolveDynamicRoute(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            resolveDynamicRoute(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
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
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
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
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = resolveDynamicRoute(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    let resolvedAs = asPath;

    if (false) {} // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
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

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

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

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

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

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

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
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "u8Nd":
/***/ (function(module, exports) {

module.exports = require("emailjs-com");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vNl1":
/***/ (function(module, exports) {

module.exports = require("prismic-javascript");

/***/ }),

/***/ "vmZo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Avatar; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function Avatar({
  name,
  picture
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "flex items-center",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
      src: picture.url,
      className: "w-12 h-12 rounded-full mr-4",
      alt: name[0].text,
      style: {
        width: "100px",
        borderRadius: "5px"
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "text-xl font-bold",
      children: ["by: ", name]
    })]
  });
}
Avatar.defaultProps = {
  name: "Pete Phinney",
  picture: ""
};

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wmQq":
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });