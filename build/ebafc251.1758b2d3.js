(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{221:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(237)),o=["components"],s={id:"index-gettingstarted",title:"1. Getting Started",sidebar_label:"1. Getting Started",slug:"/howtos/moviesdatabase/getting-started"},d={unversionedId:"howtos/moviesdatabase/getting-started/index-gettingstarted",id:"howtos/moviesdatabase/getting-started/index-gettingstarted",isDocsHomePage:!1,title:"1. Getting Started",description:"RediSearch is a real-time indexing and search engine.RediSearch provides a simple and fast way to index and query data using any field (secondary index), and do search and aggregation on an indexed dataset.",source:"@site/docs/howtos/moviesdatabase/getting-started/index-gettingstarted.mdx",slug:"/howtos/moviesdatabase/getting-started",permalink:"/howtos/moviesdatabase/getting-started",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/moviesdatabase/getting-started/index-gettingstarted.mdx",version:"current",sidebar_label:"1. Getting Started",sidebar:"docs",previous:{title:"How to cache REST API responses Using Redis & NodeJS",permalink:"/howtos/caching"},next:{title:"2. Install Redisearch",permalink:"/howtos/moviesdatabase/install"}},c=[],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://redisearch.io"},"RediSearch")," is a real-time indexing and search engine.RediSearch provides a simple and fast way to index and query data using any field (secondary index), and do search and aggregation on an indexed dataset.\nIn this tutorial you will learn how to install and use the ",Object(i.b)("a",{parentName:"p",href:"https://redisearch.io"},"RediSearch")," module that provides an indexing and full text search engine for Redis.\nAs a bonus, this tutorial lets you discover the new major release (2.0) and see how to use it, in your application."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Install RediSearch 2.0 & Insert Data"),Object(i.b)("li",{parentName:"ul"},"Create Index"),Object(i.b)("li",{parentName:"ul"},"Query Data"),Object(i.b)("li",{parentName:"ul"},"Manage Indexes"),Object(i.b)("li",{parentName:"ul"},"Import Sample Dataset"),Object(i.b)("li",{parentName:"ul"},"Querying the Movie Dataset"),Object(i.b)("li",{parentName:"ul"},"Aggregation"),Object(i.b)("li",{parentName:"ul"},"Advanced Options"),Object(i.b)("li",{parentName:"ul"},"Sample Application")),Object(i.b)("p",null,"Let's get started..."))}u.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,g=u["".concat(o,".").concat(b)]||u[b]||p[b]||i;return n?r.a.createElement(g,s(s({ref:t},c),{},{components:n})):r.a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);