/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "./build";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\n__webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _server = _interopRequireDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _bodyParser = _interopRequireDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\n\nvar _app = __webpack_require__(/*! ./src/pages/app */ \"./src/pages/app.js\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _routes = _interopRequireDefault(__webpack_require__(/*! ./src/pages/routes */ \"./src/pages/routes.js\"));\n\nvar _serializeJavascript = _interopRequireDefault(__webpack_require__(/*! serialize-javascript */ \"serialize-javascript\"));\n\nvar app = (0, _express[\"default\"])();\nvar PORT = process.env.PORT || 3000;\napp.use(_bodyParser[\"default\"].json());\napp.use(_express[\"default\"][\"static\"](\"build/public\"));\napp.get(\"*\", function (req, res) {\n  var activeRoute = _routes[\"default\"].find(function (route) {\n    return (0, _reactRouterDom.matchPath)(req.url, route);\n  }) || {};\n  var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(\"\") : Promise.resolve();\n  promise.then(function (data) {\n    var context = {\n      data: data\n    };\n\n    var content = _server[\"default\"].renderToString( /*#__PURE__*/_react[\"default\"].createElement(_reactRouterDom.StaticRouter, {\n      location: req.url,\n      context: context\n    }, /*#__PURE__*/_react[\"default\"].createElement(_app.App, null)));\n\n    var helmet = _reactHelmet.Helmet.renderStatic();\n\n    var html = \"\\n  <html>\\n    <head>\\n        \" + helmet.title.toString() + \"\\n        \" + helmet.meta.toString() + \"\\n        <script>window.__INITIAL_DATA__ = \" + (0, _serializeJavascript[\"default\"])(data) + \"</script>\\n        <link rel=\\\"stylesheet\\\" href=\\\"https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css\\\" integrity=\\\"sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu\\\" crossorigin=\\\"anonymous\\\">\\n        <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"./style.css\\\" />\\n        </head>\\n    <body>\\n        <div id=\\\"root\\\">\\n            \" + content + \"\\n        </div>\\n        <script src=\\\"client_bundle.js\\\"></script>\\n        \\n    </body>\\n  </html>\\n  \";\n    res.send(html);\n  });\n});\napp.listen(PORT, function () {\n  console.log(\"App running \" + PORT);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIuanM/MWQ2OSJdLCJuYW1lcyI6WyJhcHAiLCJQT1JUIiwicHJvY2VzcyIsImVudiIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwiZXhwcmVzcyIsImdldCIsInJlcSIsInJlcyIsImFjdGl2ZVJvdXRlIiwicm91dGVzIiwiZmluZCIsInJvdXRlIiwidXJsIiwicHJvbWlzZSIsImZldGNoSW5pdGlhbERhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJkYXRhIiwiY29udGV4dCIsImNvbnRlbnQiLCJSZWFjdERPTVNlcnZlciIsInJlbmRlclRvU3RyaW5nIiwiaGVsbWV0IiwiSGVsbWV0IiwicmVuZGVyU3RhdGljIiwiaHRtbCIsInRpdGxlIiwidG9TdHJpbmciLCJtZXRhIiwic2VuZCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsMEJBQVo7QUFFQSxJQUFNQyxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLElBQW9CLElBQWpDO0FBQ0FELEdBQUcsQ0FBQ0ksR0FBSixDQUFRQyx1QkFBV0MsSUFBWCxFQUFSO0FBQ0FOLEdBQUcsQ0FBQ0ksR0FBSixDQUFRRyw4QkFBZSxjQUFmLENBQVI7QUFFQVAsR0FBRyxDQUFDUSxHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3pCLE1BQU1DLFdBQVcsR0FBR0MsbUJBQU9DLElBQVAsQ0FBWSxVQUFDQyxLQUFEO0FBQUEsV0FBVywrQkFBVUwsR0FBRyxDQUFDTSxHQUFkLEVBQW1CRCxLQUFuQixDQUFYO0FBQUEsR0FBWixLQUFxRCxFQUF6RTtBQUVBLE1BQU1FLE9BQU8sR0FBR0wsV0FBVyxDQUFDTSxnQkFBWixHQUNaTixXQUFXLENBQUNNLGdCQUFaLENBQTZCLEVBQTdCLENBRFksR0FFWkMsT0FBTyxDQUFDQyxPQUFSLEVBRko7QUFJQUgsU0FBTyxDQUFDSSxJQUFSLENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ3JCLFFBQU1DLE9BQU8sR0FBRztBQUFFRCxVQUFJLEVBQUpBO0FBQUYsS0FBaEI7O0FBRUEsUUFBTUUsT0FBTyxHQUFHQyxtQkFBZUMsY0FBZixlQUNkLGdDQUFDLDRCQUFEO0FBQWMsY0FBUSxFQUFFaEIsR0FBRyxDQUFDTSxHQUE1QjtBQUFpQyxhQUFPLEVBQUVPO0FBQTFDLG9CQUNFLGdDQUFDLFFBQUQsT0FERixDQURjLENBQWhCOztBQUtBLFFBQU1JLE1BQU0sR0FBR0Msb0JBQU9DLFlBQVAsRUFBZjs7QUFDQSxRQUFNQyxJQUFJLHdDQUdKSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUMsUUFBYixFQUhJLGtCQUlKTCxNQUFNLENBQUNNLElBQVAsQ0FBWUQsUUFBWixFQUpJLG9EQUs4QixxQ0FBVVYsSUFBVixDQUw5Qix3WUFXQUUsT0FYQSwrR0FBVjtBQW1CQWIsT0FBRyxDQUFDdUIsSUFBSixDQUFTSixJQUFUO0FBQ0QsR0E3QkQ7QUE4QkQsQ0FyQ0Q7QUF1Q0E3QixHQUFHLENBQUNrQyxNQUFKLENBQVdqQyxJQUFYLEVBQWlCLFlBQU07QUFDckJrQyxTQUFPLENBQUNDLEdBQVIsa0JBQTJCbkMsSUFBM0I7QUFDRCxDQUZEIiwiZmlsZSI6Ii4vc2VydmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQGJhYmVsL3BvbHlmaWxsXCI7XHJcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XHJcbmltcG9ydCB7IFN0YXRpY1JvdXRlciwgbWF0Y2hQYXRoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuL3NyYy9wYWdlcy9hcHBcIjtcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gXCIuL3NyYy9wYWdlcy9yb3V0ZXNcIjtcclxuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIjtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwiYnVpbGQvcHVibGljXCIpKTtcclxuXHJcbmFwcC5nZXQoXCIqXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IGFjdGl2ZVJvdXRlID0gcm91dGVzLmZpbmQoKHJvdXRlKSA9PiBtYXRjaFBhdGgocmVxLnVybCwgcm91dGUpKSB8fCB7fTtcclxuXHJcbiAgY29uc3QgcHJvbWlzZSA9IGFjdGl2ZVJvdXRlLmZldGNoSW5pdGlhbERhdGFcclxuICAgID8gYWN0aXZlUm91dGUuZmV0Y2hJbml0aWFsRGF0YShcIlwiKVxyXG4gICAgOiBQcm9taXNlLnJlc29sdmUoKTtcclxuXHJcbiAgcHJvbWlzZS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0geyBkYXRhIH07XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKFxyXG4gICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXtjb250ZXh0fT5cclxuICAgICAgICA8QXBwIC8+XHJcbiAgICAgIDwvU3RhdGljUm91dGVyPlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGhlbG1ldCA9IEhlbG1ldC5yZW5kZXJTdGF0aWMoKTtcclxuICAgIGNvbnN0IGh0bWwgPSBgXHJcbiAgPGh0bWw+XHJcbiAgICA8aGVhZD5cclxuICAgICAgICAke2hlbG1ldC50aXRsZS50b1N0cmluZygpfVxyXG4gICAgICAgICR7aGVsbWV0Lm1ldGEudG9TdHJpbmcoKX1cclxuICAgICAgICA8c2NyaXB0PndpbmRvdy5fX0lOSVRJQUxfREFUQV9fID0gJHtzZXJpYWxpemUoZGF0YSl9PC9zY3JpcHQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjQuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtSFNNeGNSVFJ4bk4rQmRnMEpkYnhZS3JUaGVjT0t1SDV6Q1lvdGxTQWNwMStjOHhteVRlOUdZZzFsOWE2OXBzdVwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIuL3N0eWxlLmNzc1wiIC8+XHJcbiAgICAgICAgPC9oZWFkPlxyXG4gICAgPGJvZHk+XHJcbiAgICAgICAgPGRpdiBpZD1cInJvb3RcIj5cclxuICAgICAgICAgICAgJHtjb250ZW50fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiY2xpZW50X2J1bmRsZS5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIFxyXG4gICAgPC9ib2R5PlxyXG4gIDwvaHRtbD5cclxuICBgO1xyXG5cclxuICAgIHJlcy5zZW5kKGh0bWwpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBBcHAgcnVubmluZyAke1BPUlR9YCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server.js\n");

/***/ }),

/***/ "./src/pages/HackerNewsLayout.js":
/*!***************************************!*\
  !*** ./src/pages/HackerNewsLayout.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"@babel/runtime/helpers/interopRequireWildcard\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.HackerNewsLayout = void 0;\n\nvar _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\"));\n\nvar _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"@babel/runtime/helpers/inheritsLoose\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactCharts = __webpack_require__(/*! react-charts */ \"react-charts\");\n\nfunction MyChart(props) {\n  var data = [{\n    label: \"Series 1\",\n    data: props.points\n  }];\n  var options = {\n    scales: {\n      yAxes: [{\n        scaleLabel: {\n          display: true,\n          labelString: \"Y text\"\n        }\n      }],\n      xAxes: [{\n        scaleLabel: {\n          display: true,\n          labelString: \"X text\"\n        }\n      }]\n    }\n  };\n\n  var axes = _react[\"default\"].useMemo(function () {\n    return [{\n      primary: true,\n      type: \"ordinal\",\n      position: \"bottom\"\n    }, {\n      type: \"linear\",\n      position: \"left\"\n    }];\n  }, []);\n\n  return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n    style: {\n      width: \"100%\",\n      height: \"300px\"\n    }\n  }, /*#__PURE__*/_react[\"default\"].createElement(_reactCharts.Chart, {\n    data: data,\n    axes: axes,\n    options: options\n  }));\n}\n\nvar HackerNewsLayout = /*#__PURE__*/function (_React$Component) {\n  (0, _inheritsLoose2[\"default\"])(HackerNewsLayout, _React$Component);\n\n  function HackerNewsLayout(props) {\n    var _this;\n\n    _this = _React$Component.call(this, props) || this;\n    var news;\n\n    if (false) {} else {\n      news = props.staticContext.data;\n    }\n\n    _this.state = {\n      news: news,\n      loading: news ? false : true\n    };\n    _this.fetchNews = _this.fetchNews.bind((0, _assertThisInitialized2[\"default\"])(_this));\n    return _this;\n  }\n\n  var _proto = HackerNewsLayout.prototype;\n\n  _proto.componentDidMount = function componentDidMount() {\n    if (!this.state.news) {\n      this.fetchNews(this.props.match.params.id);\n    }\n  };\n\n  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {\n    if (prevProps.match.params.id !== this.props.match.params.id) {\n      this.fetchNews(this.props.match.params.id);\n    }\n  };\n\n  _proto.fetchNews = function fetchNews(id) {\n    var _this2 = this;\n\n    this.setState(function () {\n      return {\n        loading: true\n      };\n    });\n    this.props.fetchInitialData(id).then(function (news) {\n      return _this2.setState(function () {\n        return {\n          news: news,\n          loading: false\n        };\n      });\n    });\n  };\n\n  _proto.render = function render() {\n    var _this$state = this.state,\n        news = _this$state.news,\n        loading = _this$state.loading;\n    var points = [];\n\n    var head = function head() {\n      return /*#__PURE__*/_react[\"default\"].createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react[\"default\"].createElement(\"title\", null, \"Hacker News\"));\n    };\n\n    return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"App wrapper\"\n    }, head(), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"grid-container\"\n    }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"row header\"\n    }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"col-md-1 col-sm-1 col-xs-1\"\n    }, \"Comments\"), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"col-md-1 col-sm-1 col-xs-1\"\n    }, \"Vote count\"), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"col-md-1 col-sm-1 col-xs-1\"\n    }, \"UpVote\"), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"col-md-9 col-sm-9 col-xs-9\"\n    }, \"New Details\")), news && news.hits && news.hits.map(function (news) {\n      points.push([news.objectID, news.points]);\n      return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        className: \"row row-data\"\n      }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        className: \"col-md-1 col-sm-1 col-xs-1\"\n      }, news.num_comments), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        className: \"col-md-1 col-sm-1 col-xs-1\"\n      }, news.points), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        className: \"col-md-1 col-sm-1 col-xs-1\"\n      }, \" \", /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        className: \"triangle\"\n      })), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        className: \"col-md-9 col-sm-9 col-xs-9\"\n      }, news.title + \" \" + news.title + \" by \" + news.author));\n    }), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      \"class\": \"row\"\n    }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"paginator\"\n    }, /*#__PURE__*/_react[\"default\"].createElement(\"span\", null, /*#__PURE__*/_react[\"default\"].createElement(_reactRouterDom.Link, {\n      to: \"/\" + (parseInt(this.props.match.params.id, 10) - 1)\n    }, \"Prev\")), /*#__PURE__*/_react[\"default\"].createElement(\"span\", null, /*#__PURE__*/_react[\"default\"].createElement(_reactRouterDom.Link, {\n      to: \"/\" + (parseInt(this.props.match.params.id, 10) + 1)\n    }, \"Next\"))))), /*#__PURE__*/_react[\"default\"].createElement(MyChart, {\n      points: points\n    }));\n  };\n\n  return HackerNewsLayout;\n}(_react[\"default\"].Component);\n\nexports.HackerNewsLayout = HackerNewsLayout;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSGFja2VyTmV3c0xheW91dC5qcz8zYTljIl0sIm5hbWVzIjpbIk15Q2hhcnQiLCJwcm9wcyIsImRhdGEiLCJsYWJlbCIsInBvaW50cyIsIm9wdGlvbnMiLCJzY2FsZXMiLCJ5QXhlcyIsInNjYWxlTGFiZWwiLCJkaXNwbGF5IiwibGFiZWxTdHJpbmciLCJ4QXhlcyIsImF4ZXMiLCJSZWFjdCIsInVzZU1lbW8iLCJwcmltYXJ5IiwidHlwZSIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJIYWNrZXJOZXdzTGF5b3V0IiwibmV3cyIsIl9faXNCcm93c2VyX18iLCJzdGF0aWNDb250ZXh0Iiwic3RhdGUiLCJsb2FkaW5nIiwiZmV0Y2hOZXdzIiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNldFN0YXRlIiwiZmV0Y2hJbml0aWFsRGF0YSIsInRoZW4iLCJyZW5kZXIiLCJoZWFkIiwiaGl0cyIsIm1hcCIsInB1c2giLCJvYmplY3RJRCIsIm51bV9jb21tZW50cyIsInRpdGxlIiwiYXV0aG9yIiwicGFyc2VJbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUVBLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ3RCLE1BQU1DLElBQUksR0FBRyxDQUNYO0FBQ0VDLFNBQUssRUFBRSxVQURUO0FBRUVELFFBQUksRUFBRUQsS0FBSyxDQUFDRztBQUZkLEdBRFcsQ0FBYjtBQU9BLE1BQU1DLE9BQU8sR0FBRztBQUNkQyxVQUFNLEVBQUU7QUFDTkMsV0FBSyxFQUFFLENBQ0w7QUFDRUMsa0JBQVUsRUFBRTtBQUNWQyxpQkFBTyxFQUFFLElBREM7QUFFVkMscUJBQVcsRUFBRTtBQUZIO0FBRGQsT0FESyxDQURE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RDtBQUFNLFFBQUUsU0FBTWdCLFFBQVEsQ0FBQyxLQUFLOUMsS0FBTCxDQUFXNEIsS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0JDLEVBQXpCLEVBQTZCLEVBQTdCLENBQVIsR0FBMkMsQ0FBakQ7QUFBUixjQURGLENBUEYsQ0FERixDQTVCRixDQUZGLGVBOENFLGdDQUFDLE9BQUQ7QUFBUyxZQUFNLEVBQUUzQjtBQUFqQixNQTlDRixDQURGO0FBa0RELEc7OztFQXRHbUNTLGtCQUFNbUMsUyIsImZpbGUiOiIuL3NyYy9wYWdlcy9IYWNrZXJOZXdzTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xyXG5pbXBvcnQgXCIuL0hhY2tlck5ld3MuY3NzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBDaGFydCB9IGZyb20gXCJyZWFjdC1jaGFydHNcIjtcclxuXHJcbmZ1bmN0aW9uIE15Q2hhcnQocHJvcHMpIHtcclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJTZXJpZXMgMVwiLFxyXG4gICAgICBkYXRhOiBwcm9wcy5wb2ludHMsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBzY2FsZXM6IHtcclxuICAgICAgeUF4ZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGxhYmVsU3RyaW5nOiBcIlkgdGV4dFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICB4QXhlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgbGFiZWxTdHJpbmc6IFwiWCB0ZXh0XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGF4ZXMgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gW1xyXG4gICAgICB7IHByaW1hcnk6IHRydWUsIHR5cGU6IFwib3JkaW5hbFwiLCBwb3NpdGlvbjogXCJib3R0b21cIiB9LFxyXG4gICAgICB7IHR5cGU6IFwibGluZWFyXCIsIHBvc2l0aW9uOiBcImxlZnRcIiB9LFxyXG4gICAgXSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjMwMHB4XCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxDaGFydCBkYXRhPXtkYXRhfSBheGVzPXtheGVzfSBvcHRpb25zPXtvcHRpb25zfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhY2tlck5ld3NMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICBsZXQgbmV3cztcclxuICAgIGlmIChfX2lzQnJvd3Nlcl9fKSB7XHJcbiAgICAgIG5ld3MgPSB3aW5kb3cuX19JTklUSUFMX0RBVEFfXztcclxuICAgICAgZGVsZXRlIHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3cyA9IHByb3BzLnN0YXRpY0NvbnRleHQuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuZXdzLFxyXG4gICAgICBsb2FkaW5nOiBuZXdzID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmZldGNoTmV3cyA9IHRoaXMuZmV0Y2hOZXdzLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5uZXdzKSB7XHJcbiAgICAgIHRoaXMuZmV0Y2hOZXdzKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICBpZiAocHJldlByb3BzLm1hdGNoLnBhcmFtcy5pZCAhPT0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpIHtcclxuICAgICAgdGhpcy5mZXRjaE5ld3ModGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmZXRjaE5ld3MoaWQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcclxuICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgIH0pKTtcclxuXHJcbiAgICB0aGlzLnByb3BzLmZldGNoSW5pdGlhbERhdGEoaWQpLnRoZW4oKG5ld3MpID0+XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcclxuICAgICAgICBuZXdzLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICB9KSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG5ld3MsIGxvYWRpbmcgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgcG9pbnRzID0gW107XHJcbiAgICBjb25zdCBoZWFkID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgICA8dGl0bGU+SGFja2VyIE5ld3M8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVsbWV0PlxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgQXBwIHdyYXBwZXJgfT5cclxuICAgICAgICB7aGVhZCgpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyaWQtY29udGFpbmVyXCJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEgY29sLXNtLTEgY29sLXhzLTFcIj5Db21tZW50czwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xIGNvbC1zbS0xIGNvbC14cy0xXCI+Vm90ZSBjb3VudDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xIGNvbC1zbS0xIGNvbC14cy0xXCI+VXBWb3RlPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTkgY29sLXNtLTkgY29sLXhzLTlcIj5OZXcgRGV0YWlsczwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAge25ld3MgJiZcclxuICAgICAgICAgICAgbmV3cy5oaXRzICYmXHJcbiAgICAgICAgICAgIG5ld3MuaGl0cy5tYXAoKG5ld3MpID0+IHtcclxuICAgICAgICAgICAgICBwb2ludHMucHVzaChbbmV3cy5vYmplY3RJRCwgbmV3cy5wb2ludHNdKTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LWRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMSBjb2wtc20tMSBjb2wteHMtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuZXdzLm51bV9jb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEgY29sLXNtLTEgY29sLXhzLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bmV3cy5wb2ludHN9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xIGNvbC1zbS0xIGNvbC14cy0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInRyaWFuZ2xlXCJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOSBjb2wtc20tOSBjb2wteHMtOVwiPntgJHtuZXdzLnRpdGxlfSAke25ld3MudGl0bGV9IGJ5ICR7bmV3cy5hdXRob3J9YH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRvclwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e2AvJHtwYXJzZUludCh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCwgMTApIC0gMX1gfT5cclxuICAgICAgICAgICAgICAgICAgUHJldlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz17YC8ke3BhcnNlSW50KHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkLCAxMCkgKyAxfWB9PlxyXG4gICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxNeUNoYXJ0IHBvaW50cz17cG9pbnRzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/HackerNewsLayout.js\n");

/***/ }),

/***/ "./src/pages/NavBar.js":
/*!*****************************!*\
  !*** ./src/pages/NavBar.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.NavBar = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar NavBar = function NavBar() {\n  var languages = [{\n    name: \"All\",\n    param: \"all\"\n  }, {\n    name: \"JavaScript\",\n    param: \"javascript\"\n  }, {\n    name: \"Ruby\",\n    param: \"ruby\"\n  }, {\n    name: \"Python\",\n    param: \"python\"\n  }, {\n    name: \"Java\",\n    param: \"java\"\n  }];\n  return /*#__PURE__*/_react[\"default\"].createElement(\"ul\", null, languages.map(function (_ref) {\n    var name = _ref.name,\n        param = _ref.param;\n    return /*#__PURE__*/_react[\"default\"].createElement(\"li\", {\n      key: param\n    }, /*#__PURE__*/_react[\"default\"].createElement(_reactRouterDom.NavLink, {\n      activeStyle: {\n        fontWeight: \"bold\"\n      },\n      to: \"/popular/\" + param\n    }, name));\n  }));\n};\n\nexports.NavBar = NavBar;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTmF2QmFyLmpzPzExOWMiXSwibmFtZXMiOlsiTmF2QmFyIiwibGFuZ3VhZ2VzIiwibmFtZSIsInBhcmFtIiwibWFwIiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUMxQixNQUFNQyxTQUFTLEdBQUcsQ0FDaEI7QUFDRUMsUUFBSSxFQUFFLEtBRFI7QUFFRUMsU0FBSyxFQUFFO0FBRlQsR0FEZ0IsRUFLaEI7QUFDRUQsUUFBSSxFQUFFLFlBRFI7QUFFRUMsU0FBSyxFQUFFO0FBRlQsR0FMZ0IsRUFTaEI7QUFDRUQsUUFBSSxFQUFFLE1BRFI7QUFFRUMsU0FBSyxFQUFFO0FBRlQsR0FUZ0IsRUFhaEI7QUFDRUQsUUFBSSxFQUFFLFFBRFI7QUFFRUMsU0FBSyxFQUFFO0FBRlQsR0FiZ0IsRUFpQmhCO0FBQ0VELFFBQUksRUFBRSxNQURSO0FBRUVDLFNBQUssRUFBRTtBQUZULEdBakJnQixDQUFsQjtBQXVCQSxzQkFDRSw0Q0FDR0YsU0FBUyxDQUFDRyxHQUFWLENBQWM7QUFBQSxRQUFHRixJQUFILFFBQUdBLElBQUg7QUFBQSxRQUFTQyxLQUFULFFBQVNBLEtBQVQ7QUFBQSx3QkFDYjtBQUFJLFNBQUcsRUFBRUE7QUFBVCxvQkFDRSxnQ0FBQyx1QkFBRDtBQUNFLGlCQUFXLEVBQUU7QUFBRUUsa0JBQVUsRUFBRTtBQUFkLE9BRGY7QUFFRSxRQUFFLGdCQUFjRjtBQUZsQixPQUlHRCxJQUpILENBREYsQ0FEYTtBQUFBLEdBQWQsQ0FESCxDQURGO0FBY0QsQ0F0Q00iLCJmaWxlIjoiLi9zcmMvcGFnZXMvTmF2QmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgbGFuZ3VhZ2VzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkFsbFwiLFxyXG4gICAgICBwYXJhbTogXCJhbGxcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSmF2YVNjcmlwdFwiLFxyXG4gICAgICBwYXJhbTogXCJqYXZhc2NyaXB0XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJ1YnlcIixcclxuICAgICAgcGFyYW06IFwicnVieVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQeXRob25cIixcclxuICAgICAgcGFyYW06IFwicHl0aG9uXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkphdmFcIixcclxuICAgICAgcGFyYW06IFwiamF2YVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHVsPlxyXG4gICAgICB7bGFuZ3VhZ2VzLm1hcCgoeyBuYW1lLCBwYXJhbSB9KSA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17cGFyYW19PlxyXG4gICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgYWN0aXZlU3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX1cclxuICAgICAgICAgICAgdG89e2AvcG9wdWxhci8ke3BhcmFtfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/NavBar.js\n");

/***/ }),

/***/ "./src/pages/app.js":
/*!**************************!*\
  !*** ./src/pages/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.App = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"@babel/runtime/helpers/extends\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"@babel/runtime/helpers/objectWithoutPropertiesLoose\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _routes = _interopRequireDefault(__webpack_require__(/*! ./routes */ \"./src/pages/routes.js\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _NavBar = __webpack_require__(/*! ./NavBar */ \"./src/pages/NavBar.js\");\n\nvar App = function App() {\n  return /*#__PURE__*/_react[\"default\"].createElement(_react[\"default\"].Fragment, null, /*#__PURE__*/_react[\"default\"].createElement(_reactRouterDom.Switch, null, _routes[\"default\"].map(function (_ref) {\n    var path = _ref.path,\n        exact = _ref.exact,\n        Component = _ref.component,\n        rest = (0, _objectWithoutPropertiesLoose2[\"default\"])(_ref, [\"path\", \"exact\", \"component\"]);\n    return /*#__PURE__*/_react[\"default\"].createElement(_reactRouterDom.Route, {\n      key: path,\n      path: path,\n      exact: exact,\n      render: function render(props) {\n        return /*#__PURE__*/_react[\"default\"].createElement(Component, (0, _extends2[\"default\"])({}, props, rest));\n      }\n    });\n  })));\n};\n\nexports.App = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBwLmpzP2NiZDUiXSwibmFtZXMiOlsiQXBwIiwicm91dGVzIiwibWFwIiwicGF0aCIsImV4YWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwicmVzdCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRU8sSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU07QUFBQSxzQkFDakIsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLHFCQUNFLGdDQUFDLHNCQUFELFFBQ0dDLG1CQUFPQyxHQUFQLENBQVc7QUFBQSxRQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxRQUFTQyxLQUFULFFBQVNBLEtBQVQ7QUFBQSxRQUEyQkMsU0FBM0IsUUFBZ0JDLFNBQWhCO0FBQUEsUUFBeUNDLElBQXpDO0FBQUEsd0JBQ1YsZ0NBQUMscUJBQUQ7QUFDRSxTQUFHLEVBQUVKLElBRFA7QUFFRSxVQUFJLEVBQUVBLElBRlI7QUFHRSxXQUFLLEVBQUVDLEtBSFQ7QUFJRSxZQUFNLEVBQUUsZ0JBQUNJLEtBQUQ7QUFBQSw0QkFBVyxnQ0FBQyxTQUFELGdDQUFlQSxLQUFmLEVBQTBCRCxJQUExQixFQUFYO0FBQUE7QUFKVixNQURVO0FBQUEsR0FBWCxDQURILENBREYsQ0FEaUI7QUFBQSxDQUFaIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXNcIjtcclxuaW1wb3J0IHsgUm91dGUsIExpbmssIFJlZGlyZWN0LCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tIFwiLi9OYXZCYXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBcHAgPSAoKSA9PiAoXHJcbiAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgPFN3aXRjaD5cclxuICAgICAge3JvdXRlcy5tYXAoKHsgcGF0aCwgZXhhY3QsIGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pID0+IChcclxuICAgICAgICA8Um91dGVcclxuICAgICAgICAgIGtleT17cGF0aH1cclxuICAgICAgICAgIHBhdGg9e3BhdGh9XHJcbiAgICAgICAgICBleGFjdD17ZXhhY3R9XHJcbiAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPENvbXBvbmVudCB7Li4ucHJvcHN9IHsuLi5yZXN0fSAvPn1cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgIDwvU3dpdGNoPlxyXG4gIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/app.js\n");

/***/ }),

/***/ "./src/pages/routes.js":
/*!*****************************!*\
  !*** ./src/pages/routes.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _HackerNewsLayout = __webpack_require__(/*! ./HackerNewsLayout */ \"./src/pages/HackerNewsLayout.js\");\n\nvar _fetch = __webpack_require__(/*! ./../utilites/fetch */ \"./src/utilites/fetch.js\");\n\nvar routes = [{\n  path: \"/:id\",\n  exact: true,\n  component: _HackerNewsLayout.HackerNewsLayout,\n  fetchInitialData: function fetchInitialData(path) {\n    if (path === void 0) {\n      path = \"\";\n    }\n\n    var pageNumber = parseInt(path.split(\"/\").pop(), 10);\n    pageNumber = pageNumber ? pageNumber : 1;\n    return (0, _fetch.fetchNews)(\"https://hn.algolia.com/api/v1/search?tags=story&page=\" + pageNumber);\n  }\n}];\nvar _default = routes;\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcm91dGVzLmpzPzZjNjYiXSwibmFtZXMiOlsicm91dGVzIiwicGF0aCIsImV4YWN0IiwiY29tcG9uZW50IiwiSGFja2VyTmV3c0xheW91dCIsImZldGNoSW5pdGlhbERhdGEiLCJwYWdlTnVtYmVyIiwicGFyc2VJbnQiLCJzcGxpdCIsInBvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxDQUNiO0FBQ0VDLE1BQUksRUFBRSxNQURSO0FBRUVDLE9BQUssRUFBRSxJQUZUO0FBR0VDLFdBQVMsRUFBRUMsa0NBSGI7QUFJRUMsa0JBQWdCLEVBQUUsMEJBQUNKLElBQUQsRUFBZTtBQUFBLFFBQWRBLElBQWM7QUFBZEEsVUFBYyxHQUFQLEVBQU87QUFBQTs7QUFDL0IsUUFBSUssVUFBVSxHQUFHQyxRQUFRLENBQUNOLElBQUksQ0FBQ08sS0FBTCxDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCLEVBQUQsRUFBd0IsRUFBeEIsQ0FBekI7QUFDQUgsY0FBVSxHQUFHQSxVQUFVLEdBQUdBLFVBQUgsR0FBZ0IsQ0FBdkM7QUFDQSxXQUFPLGdGQUNtREEsVUFEbkQsQ0FBUDtBQUdEO0FBVkgsQ0FEYSxDQUFmO2VBZWVOLE0iLCJmaWxlIjoiLi9zcmMvcGFnZXMvcm91dGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFja2VyTmV3c0xheW91dCB9IGZyb20gXCIuL0hhY2tlck5ld3NMYXlvdXRcIjtcclxuaW1wb3J0IHsgZmV0Y2hOZXdzIH0gZnJvbSBcIi4vLi4vdXRpbGl0ZXMvZmV0Y2hcIjtcclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiBcIi86aWRcIixcclxuICAgIGV4YWN0OiB0cnVlLFxyXG4gICAgY29tcG9uZW50OiBIYWNrZXJOZXdzTGF5b3V0LFxyXG4gICAgZmV0Y2hJbml0aWFsRGF0YTogKHBhdGggPSBcIlwiKSA9PiB7XHJcbiAgICAgIGxldCBwYWdlTnVtYmVyID0gcGFyc2VJbnQocGF0aC5zcGxpdChcIi9cIikucG9wKCksIDEwKTtcclxuICAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXIgPyBwYWdlTnVtYmVyIDogMTtcclxuICAgICAgcmV0dXJuIGZldGNoTmV3cyhcclxuICAgICAgICBgaHR0cHM6Ly9obi5hbGdvbGlhLmNvbS9hcGkvdjEvc2VhcmNoP3RhZ3M9c3RvcnkmcGFnZT0ke3BhZ2VOdW1iZXJ9YFxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/routes.js\n");

/***/ }),

/***/ "./src/utilites/fetch.js":
/*!*******************************!*\
  !*** ./src/utilites/fetch.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"@babel/runtime/helpers/interopRequireWildcard\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchNews = void 0;\n\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\"));\n\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"axios\"));\n\nvar fetchNews = /*#__PURE__*/function () {\n  var _ref = (0, _asyncToGenerator2[\"default\"])( /*#__PURE__*/_regenerator[\"default\"].mark(function _callee(url, options) {\n    var response;\n    return _regenerator[\"default\"].wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _axios[\"default\"].get(url, {\n              params: options\n            });\n\n          case 2:\n            response = _context.sent;\n            return _context.abrupt(\"return\", response.data);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function fetchNews(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nexports.fetchNews = fetchNews;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0ZXMvZmV0Y2guanM/MDFlYiJdLCJuYW1lcyI6WyJmZXRjaE5ld3MiLCJ1cmwiLCJvcHRpb25zIiwiYXhpb3MiLCJnZXQiLCJwYXJhbXMiLCJyZXNwb25zZSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVPLElBQU1BLFNBQVM7QUFBQSwyRkFBRyxpQkFBT0MsR0FBUCxFQUFZQyxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0FDLGtCQUFNQyxHQUFOLENBQVVILEdBQVYsRUFBZTtBQUFFSSxvQkFBTSxFQUFFSDtBQUFWLGFBQWYsQ0FEQTs7QUFBQTtBQUNqQkksb0JBRGlCO0FBQUEsNkNBR2hCQSxRQUFRLENBQUNDLElBSE87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVFAsU0FBUztBQUFBO0FBQUE7QUFBQSxHQUFmIiwiZmlsZSI6Ii4vc3JjL3V0aWxpdGVzL2ZldGNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoTmV3cyA9IGFzeW5jICh1cmwsIG9wdGlvbnMpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwsIHsgcGFyYW1zOiBvcHRpb25zIH0pO1xyXG5cclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utilites/fetch.js\n");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcG9seWZpbGxcIj83MDhkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBiYWJlbC9wb2x5ZmlsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9wb2x5ZmlsbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@babel/polyfill\n");

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/assertThisInitialized\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiP2U0ZTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@babel/runtime/helpers/assertThisInitialized\n");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIj8wNzJjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@babel/runtime/helpers/asyncToGenerator\n");

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/extends\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIj9kZjliIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@babel/runtime/helpers/extends\n");

/***/ }),

/***/ "@babel/runtime/helpers/inheritsLoose":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/inheritsLoose" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inheritsLoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2VcIj9jZGZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@babel/runtime/helpers/inheritsLoose\n");

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireDefault":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireDefault" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/interopRequireDefault\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiPzU0YTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@babel/runtime/helpers/interopRequireDefault\n");

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireWildcard":
/*!****************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireWildcard" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/interopRequireWildcard\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIj8xNGE1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@babel/runtime/helpers/interopRequireWildcard\n");

/***/ }),

/***/ "@babel/runtime/helpers/objectWithoutPropertiesLoose":
/*!**********************************************************************!*\
  !*** external "@babel/runtime/helpers/objectWithoutPropertiesLoose" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/objectWithoutPropertiesLoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIj8yNjE4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@babel/runtime/helpers/objectWithoutPropertiesLoose\n");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiPzY4NGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@babel/runtime/regenerator\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzgxODgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYm9keS1wYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///body-parser\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/MjJmZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJleHByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-charts":
/*!*******************************!*\
  !*** external "react-charts" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-charts\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jaGFydHNcIj8zMWIwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWNoYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNoYXJ0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-charts\n");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCI/OTQzOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1kb20vc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dom/server\n");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIj9jOWQwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWhlbG1ldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-helmet\n");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCI/NTNiOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1yb3V0ZXItZG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-router-dom\n");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiPzE2ZjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2VyaWFsaXplLWphdmFzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///serialize-javascript\n");

/***/ })

/******/ });