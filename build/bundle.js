!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./build",n(n.s=7)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@babel/runtime/helpers/interopRequireDefault")},function(e,t){e.exports=require("@babel/runtime/helpers/interopRequireWildcard")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("@babel/runtime/helpers/extends")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(14),a=n(23),i=[{path:"/:id?",exact:!0,component:r.HackerNewsLayout,fetchInitialData:function(e){void 0===e&&(e="");var t=parseInt(e.split("/").pop(),10);return t=t||1,(0,a.fetchNews)("https://hn.algolia.com/api/v1/search?tags=story&page="+t)}}];t.default=i},function(e,t){e.exports=require("react-helmet")},function(e,t,n){"use strict";var r=n(1);n(8);var a=r(n(9)),i=r(n(0)),o=r(n(10)),s=n(3),l=r(n(11)),u=n(12),c=n(6),d=r(n(5)),f=r(n(27)),p=(0,a.default)(),m=process.env.PORT||3e3;p.use(l.default.json()),p.use(a.default.static("build/public")),p.get("*",(function(e,t){var n=d.default.find((function(t){return(0,s.matchPath)(e.url,t)}))||{};(n.fetchInitialData?n.fetchInitialData(""):Promise.resolve()).then((function(n){var r={data:n},a=o.default.renderToString(i.default.createElement(s.StaticRouter,{location:e.url,context:r},i.default.createElement(u.App,null))),l=c.Helmet.renderStatic(),d="\n  <html>\n    <head>\n        "+l.title.toString()+"\n        "+l.meta.toString()+"\n        <script>window.__INITIAL_DATA__ = "+(0,f.default)(n)+'<\/script>\n        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">\n        <link rel="stylesheet" type="text/css" href="./style.css" />\n        </head>\n    <body>\n        <div id="root">\n            '+a+'\n        </div>\n        <script src="client_bundle.js"><\/script>\n        \n    </body>\n  </html>\n  ';t.send(d)}))})),p.listen(m,(function(){console.log("App running "+m)}))},function(e,t){e.exports=require("@babel/polyfill")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("body-parser")},function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var a=r(n(4)),i=r(n(13)),o=r(n(0)),s=r(n(5)),l=n(3);t.App=function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement(l.Switch,null,s.default.map((function(e){var t=e.path,n=e.exact,r=e.component,s=(0,i.default)(e,["path","exact","component"]);return o.default.createElement(l.Route,{key:t,path:t,exact:n,render:function(e){return o.default.createElement(r,(0,a.default)({},e,s))}})}))))}},function(e,t){e.exports=require("@babel/runtime/helpers/objectWithoutPropertiesLoose")},function(e,t,n){"use strict";var r=n(2),a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.HackerNewsLayout=void 0;var i=a(n(4)),o=a(n(15)),s=a(n(16)),l=a(n(17)),u=r(n(0)),c=n(6),d=n(18),f=n(21),p=function(e){function t(t){var n,r;return n=e.call(this,t)||this,(0,l.default)((0,o.default)(n),"toggle",(function(e){var t=n.state.news.hits.map((function(t,n){return n===e?(0,i.default)({},t,{show:!1}):(0,i.default)({},t)}));n.setState({news:Object.assign({},n.state.news,{hits:t})},(function(){console.log(n.state)}))})),(0,l.default)((0,o.default)(n),"upvote",(function(e){var t=n.state.news.hits.map((function(t,n){if(n===e){var r=parseInt(t.points,10)+1;return(0,i.default)({},t,{points:r})}return(0,i.default)({},t)}));n.setState({news:Object.assign({},n.state.news,{hits:t})},(function(){console.log(n.state)}))})),r=t.staticContext.data,n.state={news:r,loading:!r,points:[]},n.fetchNews=n.fetchNews.bind((0,o.default)(n)),n}(0,s.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.state.news||this.fetchNews(this.props.match.params.id)},n.componentDidUpdate=function(e,t){e.match.params.id!==this.props.match.params.id&&this.fetchNews(this.props.match.params.id)},n.fetchNews=function(e){var t=this;this.setState((function(){return{loading:!0}})),this.props.fetchInitialData(e).then((function(e){return t.setState((function(){return{news:e,loading:!1}}))}))},n.render=function(){var e=this.state,t=e.news,n=(e.loading,[]);t.hits.map((function(e){return n.push([e.objectID,e.points])}));return u.default.createElement("div",{className:"App wrapper"},u.default.createElement(c.Helmet,null,u.default.createElement("title",null,"Hacker News")),u.default.createElement(d.News,{news:t,id:"number"!=typeof this.props.match.params.id?1:this.props.match.params.id,toggle:this.toggle,upvote:this.upvote}),u.default.createElement(f.LineChart,{points:n}))},t}(u.default.Component);t.HackerNewsLayout=p},function(e,t){e.exports=require("@babel/runtime/helpers/assertThisInitialized")},function(e,t){e.exports=require("@babel/runtime/helpers/inheritsLoose")},function(e,t){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.News=void 0;var a=r(n(0)),i=n(19),o=n(20);t.News=function(e){var t=e.news,n=e.id,r=e.toggle,s=e.upvote;return a.default.createElement("div",{className:"gridcontainer"},a.default.createElement("div",{className:"row header"},a.default.createElement("div",{className:"col-md-1 col-sm-1 col-xs-1"},"Comments"),a.default.createElement("div",{className:"col-md-1 col-sm-1 col-xs-1"},"Vote count"),a.default.createElement("div",{className:"col-md-1 col-sm-1 col-xs-1"},"UpVote"),a.default.createElement("div",{className:"col-md-9 col-sm-9 col-xs-9"},"New Details")),t&&t.hits&&t.hits.map((function(e,t){return a.default.createElement(a.default.Fragment,null,void 0===e.show||e.show?a.default.createElement("div",{className:"row row-data"},a.default.createElement("div",{className:"col-md-1 col-sm-1 col-xs-1"},e.num_comments),a.default.createElement("div",{className:"col-md-1 col-sm-1 col-xs-1"},e.points),a.default.createElement("div",{className:"col-md-1 col-sm-1 col-xs-1"}," ",a.default.createElement("div",{onClick:function(){return s(t)},className:"triangle"})),a.default.createElement("div",{className:"col-md-9 col-sm-9 col-xs-9"},e.title," ",e.title,a.default.createElement("span",{className:"hostName"},e.url?(0,i.extractHostname)(e.url):""),"by ",e.author,a.default.createElement("span",{className:"hideButton",onClick:function(){return r(t)}},"Hide"))):null)})),a.default.createElement("div",{className:"row"},a.default.createElement(o.Pagination,{id:n})))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractHostname=void 0;t.extractHostname=function(e){return(e.indexOf("//")>-1?e.split("/")[2]:e.split("/")[0]).split(":")[0].split("?")[0]}},function(e,t,n){"use strict";var r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.Pagination=void 0;var a=r(n(0)),i=n(3);t.Pagination=function(e){var t=e.id;return a.default.createElement("div",{className:"paginator"},a.default.createElement("span",null,a.default.createElement(i.Link,{to:"/"+(parseInt(t,10)-1)},"Prev")),a.default.createElement("span",null,a.default.createElement(i.Link,{to:"/"+(parseInt(t,10)+1)},"Next")))}},function(e,t,n){"use strict";var r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.LineChart=void 0;var a=r(n(0)),i=n(22);t.LineChart=function(e){var t=[{label:"Series 1",data:e.points}],n=a.default.useMemo((function(){return[{primary:!0,type:"ordinal",position:"bottom"},{type:"linear",position:"left"}]}),[]);return a.default.createElement("div",{style:{width:"100%",height:"300px",marginTop:"1rem"}},a.default.createElement(i.Chart,{data:t,axes:n,options:{scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Y text"}}],xAxes:[{scaleLabel:{display:!0,labelString:"X text"}}]}}}))}},function(e,t){e.exports=require("react-charts")},function(e,t,n){"use strict";var r=n(2),a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.fetchNews=void 0;var i=a(n(24)),o=a(n(25)),s=(r(n(0)),a(n(26))),l=function(){var e=(0,o.default)(i.default.mark((function e(t,n){var r;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.default.get(t,{params:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();t.fetchNews=l},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("serialize-javascript")}]);