(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{237:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),i=d(n),O=a,p=i["".concat(o,".").concat(O)]||i[O]||j[O]||b;return n?r.a.createElement(p,s(s({ref:t},c),{},{components:n})):r.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,o=new Array(b);o[0]=O;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<b;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return i}));var a=n(3),r=n(7),b=(n(0),n(237)),o=["components"],s={id:"index-redisjson-cheatsheet",title:"RedisJSON Cheatsheet",sidebar_label:"RedisJSON CheatSheet",slug:"/howtos/redisjson/redisjson-cheatsheet"},l={unversionedId:"howtos/redisjson/redisjson-cheatsheet/index-redisjson-cheatsheet",id:"howtos/redisjson/redisjson-cheatsheet/index-redisjson-cheatsheet",isDocsHomePage:!1,title:"RedisJSON Cheatsheet",description:"| Command\t| Purpose        | Syntax\t        |",source:"@site/docs/howtos/redisjson/redisjson-cheatsheet/index-redisjson-cheatsheet.mdx",slug:"/howtos/redisjson/redisjson-cheatsheet",permalink:"/howtos/redisjson/redisjson-cheatsheet",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisjson/redisjson-cheatsheet/index-redisjson-cheatsheet.mdx",version:"current",sidebar_label:"RedisJSON CheatSheet",sidebar:"docs",previous:{title:"Indexing JSON document using RediSearch",permalink:"/howtos/redisjson/jsonind-document"},next:{title:"How to build a Shopping cart app using NodeJS and RedisJSON",permalink:"/howtos/redisjson/shoppingcart"}},c=[],d={toc:c};function i(e){var t=e.components,n=Object(r.a)(e,o);return Object(b.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Command"),Object(b.b)("th",{parentName:"tr",align:"left"},"Purpose"),Object(b.b)("th",{parentName:"tr",align:"left"},"Syntax"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsonget"},"JSON.GET")))),Object(b.b)("td",{parentName:"tr",align:"left"},"Return the value at path in JSON serialized form"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.GET ","<","key",">"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsonset"},"JSON.SET")))),Object(b.b)("td",{parentName:"tr",align:"left"},"Sets the JSON value at path in key"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.SET ","<","key",">"," ","<","path",">"," ","<","json",">"," ","[NX ","|"," XX]"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"hTtps://oss.redislabs.com/redisjson/commands/#jsonmget"},"JSON.MGET")))),Object(b.b)("td",{parentName:"tr",align:"left"},"Returns the values at path from multiple key"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.MGET ","<","key",">"," ","[key ...]"," ","<","path",">"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsontype"},"JSON.TYPE")))),Object(b.b)("td",{parentName:"tr",align:"left"},"Report the type of JSON value at path ."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.TYPE ","<","key",">"," ","[path]"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsonnumincrby"},"JSON.NUMINCRBY")))),Object(b.b)("td",{parentName:"tr",align:"left"},"Increments the number value stored at path by number"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.NUMINCRBY ","<","key",">"," ","<","path",">"," ","<","number",">"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsonnummultby"},"JSON.NUMMULTBY")))),Object(b.b)("td",{parentName:"tr",align:"left"},"Multiplies the number value stored at path by number"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.NUMMULTBY ","<","key",">"," ","<","path",">"," ","<","number",">"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsonstrappend"},"JSON.STRAPPEND")))),Object(b.b)("td",{parentName:"tr",align:"left"},"Append the json-string value(s) the string at path"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.STRAPPEND ","<","key",">","  ","[path]"," ","<","json-string",">"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsonarrappend"},"JSON.ARRAPPEND")))),Object(b.b)("td",{parentName:"tr",align:"left"},"Append the json value(s) into the array at path after the last element in it"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.ARRAPPEND ","<","key",">"," ","<","path",">"," ","<","json",">","  ","[json ...]"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsonstrlen"},"JSON.STRLEN")))),Object(b.b)("td",{parentName:"tr",align:"left"},"Report the length of the JSON String at path in key"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.STRLEN ","<","key",">"," ","[path]"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsonarrlen"},"JSON.ARRLEN")))),Object(b.b)("td",{parentName:"tr",align:"left"},"Report the length of the JSON Array at path in key"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.ARRLEN ","<","key",">"," ","[path]"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsonarrinsert"},"JSON.ARRINSERT")))),Object(b.b)("td",{parentName:"tr",align:"left"},"Insert the json value(s) into the array at path before the index (shifts to the right)"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.ARRINSERT ","<","key",">"," ","<","path",">"," ","<","index",">"," ","<","json",">"," ","[json ...]"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsonarrindex"},"JSON.ARRINDEX")))),Object(b.b)("td",{parentName:"tr",align:"left"},"Search for the first occurrence of a scalar JSON value in an array"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.ARRINDEX ","<","key",">"," ","<","path",">"," ","<","json-scalar",">"," [start ","[stop]","]"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsonarrpop"},"JSON.ARRPOP")))),Object(b.b)("td",{parentName:"tr",align:"left"},"Remove and return element from the index in the array"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.ARRPOP ","<","key",">","  [path ","[index]","]"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsonarrtrim"},"JSON.ARRTRIM")))),Object(b.b)("td",{parentName:"tr",align:"left"},"Trim an array so that it contains only the specified inclusive range of elements"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.ARRTRIM ","<","key",">"," ","<","path",">"," ","<","start",">"," ","<","stop",">"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsonobjkeys"},"JON.OBJKEYS")))),Object(b.b)("td",{parentName:"tr",align:"left"},"Return the keys in the object that's referenced by path"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.OBJKEYS ","<","key",">"," ","[path]"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsonobjlen"},"JSON.OBJLEN")))),Object(b.b)("td",{parentName:"tr",align:"left"},"Report the number of keys in the JSON Object at path in key"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.OBJLEN ","<","key",">"," ","[path]"," "))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsondebug"},"JSON.DEBUG")))),Object(b.b)("td",{parentName:"tr",align:"left"},"Report information"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.DEBUG ","<","subcommand & arguments",">"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsonresp"},"JSON.RESP")))),Object(b.b)("td",{parentName:"tr",align:"left"},"Return the JSON in key in Redis Serialization Protocol (RESP)"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.RESP ","<","key",">"," ","[path]"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsonforget"},"JSON.FORGET")))),Object(b.b)("td",{parentName:"tr",align:"left"},"An Alias for ",Object(b.b)("a",{parentName:"td",href:"https://oss.redislabs.com/redisjson/commands/#jsondel"},"JSON.DEL")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("code",null,"JSON.DEL ","<","key",">"," ","[path]"))))))}i.isMDXComponent=!0}}]);