!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./build",r(r.s=6)}([function(e,t){e.exports=require("@babel/runtime/helpers/interopRequireDefault")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(14),n=r(19),l=[{path:"/:id",exact:!0,component:a.HackerNewsLayout,fetchInitialData:function(e){void 0===e&&(e="");var t=parseInt(e.split("/").pop(),10);return t=t||1,(0,n.fetchNews)("https://hn.algolia.com/api/v1/search?tags=story&page="+t)}}];t.default=l},function(e,t){e.exports=require("@babel/runtime/helpers/interopRequireWildcard")},function(e,t){e.exports=require("react-helmet")},function(e,t,r){"use strict";var a=r(0);r(7);var n=a(r(8)),l=a(r(1)),o=a(r(9)),i=r(2),s=a(r(10)),u=r(11),c=r(5),d=a(r(3)),p=a(r(24)),f=(0,n.default)(),m=process.env.PORT||3e3;f.use(s.default.json()),f.use(n.default.static("build/public")),f.get("*",(function(e,t){var r=d.default.find((function(t){return(0,i.matchPath)(e.url,t)}))||{};(r.fetchInitialData?r.fetchInitialData(""):Promise.resolve()).then((function(r){var a={data:r},n=o.default.renderToString(l.default.createElement(i.StaticRouter,{location:e.url,context:a},l.default.createElement(u.App,null))),s=c.Helmet.renderStatic(),d="\n  <html>\n    <head>\n        "+s.title.toString()+"\n        "+s.meta.toString()+"\n        <script>window.__INITIAL_DATA__ = "+(0,p.default)(r)+'<\/script>\n        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">\n        <link rel="stylesheet" type="text/css" href="./style.css" />\n        </head>\n    <body>\n        <div id="root">\n            '+n+'\n        </div>\n        <script src="client_bundle.js"><\/script>\n        \n    </body>\n  </html>\n  ';t.send(d)}))})),f.listen(m,(function(){console.log("App running "+m)}))},function(e,t){e.exports=require("@babel/polyfill")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("body-parser")},function(e,t,r){"use strict";var a=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var n=a(r(12)),l=a(r(13)),o=a(r(1)),i=a(r(3)),s=r(2);r(23);t.App=function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement(s.Switch,null,i.default.map((function(e){var t=e.path,r=e.exact,a=e.component,i=(0,l.default)(e,["path","exact","component"]);return o.default.createElement(s.Route,{key:t,path:t,exact:r,render:function(e){return o.default.createElement(a,(0,n.default)({},e,i))}})}))))}},function(e,t){e.exports=require("@babel/runtime/helpers/extends")},function(e,t){e.exports=require("@babel/runtime/helpers/objectWithoutPropertiesLoose")},function(e,t,r){"use strict";var a=r(4),n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.HackerNewsLayout=void 0;var l=n(r(15)),o=n(r(16)),i=a(r(1)),s=r(5),u=r(2),c=r(17),d=r(18);function p(e){var t=[{label:"Series 1",data:e.points}],r=i.default.useMemo((function(){return[{primary:!0,type:"ordinal",position:"bottom"},{type:"linear",position:"left"}]}),[]);return i.default.createElement("div",{style:{width:"100%",height:"300px",marginTop:"1rem"}},i.default.createElement(c.Chart,{data:t,axes:r,options:{scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Y text"}}],xAxes:[{scaleLabel:{display:!0,labelString:"X text"}}]}}}))}var f=function(e){function t(t){var r,a;return r=e.call(this,t)||this,a=t.staticContext.data,r.state={news:a,loading:!a},r.fetchNews=r.fetchNews.bind((0,l.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.state.news||this.fetchNews(this.props.match.params.id)},r.componentDidUpdate=function(e,t){e.match.params.id!==this.props.match.params.id&&this.fetchNews(this.props.match.params.id)},r.fetchNews=function(e){var t=this;this.setState((function(){return{loading:!0}})),this.props.fetchInitialData(e).then((function(e){return t.setState((function(){return{news:e,loading:!1}}))}))},r.render=function(){var e=this.state,t=e.news,r=(e.loading,[]);return i.default.createElement("div",{className:"App wrapper"},i.default.createElement(s.Helmet,null,i.default.createElement("title",null,"Hacker News")),i.default.createElement("div",{className:"gridcontainer"},i.default.createElement("div",{className:"row header"},i.default.createElement("div",{className:"col-md-1 col-sm-1 col-xs-1"},"Comments"),i.default.createElement("div",{className:"col-md-1 col-sm-1 col-xs-1"},"Vote count"),i.default.createElement("div",{className:"col-md-1 col-sm-1 col-xs-1"},"UpVote"),i.default.createElement("div",{className:"col-md-9 col-sm-9 col-xs-9"},"New Details")),t&&t.hits&&t.hits.map((function(e){return r.push([e.objectID,e.points]),i.default.createElement("div",{className:"row row-data"},i.default.createElement("div",{className:"col-md-1 col-sm-1 col-xs-1"},e.num_comments),i.default.createElement("div",{className:"col-md-1 col-sm-1 col-xs-1"},e.points),i.default.createElement("div",{className:"col-md-1 col-sm-1 col-xs-1"}," ",i.default.createElement("div",{className:"triangle"})),i.default.createElement("div",{className:"col-md-9 col-sm-9 col-xs-9"},e.title," ",e.title,i.default.createElement("span",{className:"hostName"},e.url?(0,d.extractHostname)(e.url):""),"by ",e.author))})),i.default.createElement("div",{class:"row"},i.default.createElement("div",{className:"paginator"},i.default.createElement("span",null,i.default.createElement(u.Link,{to:"/"+(parseInt(this.props.match.params.id,10)-1)},"Prev")),i.default.createElement("span",null,i.default.createElement(u.Link,{to:"/"+(parseInt(this.props.match.params.id,10)+1)},"Next"))))),i.default.createElement(p,{points:r}))},t}(i.default.Component);t.HackerNewsLayout=f},function(e,t){e.exports=require("@babel/runtime/helpers/assertThisInitialized")},function(e,t){e.exports=require("@babel/runtime/helpers/inheritsLoose")},function(e,t){e.exports=require("react-charts")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractHostname=void 0;t.extractHostname=function(e){return(e.indexOf("//")>-1?e.split("/")[2]:e.split("/")[0]).split(":")[0].split("?")[0]}},function(e,t,r){"use strict";var a=r(4),n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.fetchNews=void 0;var l=n(r(20)),o=n(r(21)),i=(a(r(1)),n(r(22))),s=function(){var e=(0,o.default)(l.default.mark((function e(t,r){var a;return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.default.get(t,{params:r});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();t.fetchNews=s},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("axios")},function(e,t,r){"use strict";var a=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var n=a(r(1)),l=r(2);t.NavBar=function(){return n.default.createElement("ul",null,[{name:"All",param:"all"},{name:"JavaScript",param:"javascript"},{name:"Ruby",param:"ruby"},{name:"Python",param:"python"},{name:"Java",param:"java"}].map((function(e){var t=e.name,r=e.param;return n.default.createElement("li",{key:r},n.default.createElement(l.NavLink,{activeStyle:{fontWeight:"bold"},to:"/popular/"+r},t))})))}},function(e,t){e.exports=require("serialize-javascript")}]);