(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{236:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(237),c=t(20),i=t(25),o=t(253),s=t(3),m=t(7),u=t(244),d=t(247),b=t(240),f=t(263),h=t(264),v=t(295),E=t(248),g=t(246),p=(t(268),function(e){return r.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}),k=t(265),_=t(97),O=t.n(_),j=t(238),N=["item","onItemClick","collapsible","activePath"],y=["item","onItemClick","activePath","collapsible"];var w=function e(a,t){return"link"===a.type?Object(d.isSamePath)(a.href,t):"category"===a.type&&a.items.some((function(a){return e(a,t)}))};function C(e){var a,t,l,c=e.item,i=e.onItemClick,o=e.collapsible,d=e.activePath,b=Object(m.a)(e,N),f=c.items,h=c.label,v=w(c,d),E=(t=v,l=Object(n.useRef)(t),Object(n.useEffect)((function(){l.current=t}),[t]),l.current),g=Object(n.useState)((function(){return!!o&&(!v&&c.collapsed)})),p=g[0],k=g[1],_=Object(n.useRef)(null),j=Object(n.useState)(void 0),y=j[0],C=j[1],S=function(e){var a;void 0===e&&(e=!0),C(e?(null===(a=_.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){v&&!E&&p&&k(!1)}),[v,E,p]);var x=Object(n.useCallback)((function(e){e.preventDefault(),y||S(),setTimeout((function(){return k((function(e){return!e}))}),100)}),[y]);return 0===f.length?null:r.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":p}),key:h},r.a.createElement("a",Object(s.a)({className:Object(u.a)("menu__link",(a={"menu__link--sublist":o,"menu__link--active":o&&v},a[O.a.menuLinkText]=!o,a)),onClick:o?x:void 0,href:o?"#!":void 0},b),h),r.a.createElement("ul",{className:"menu__list",ref:_,style:{height:y},onTransitionEnd:function(){p||S(!1)}},f.map((function(e){return r.a.createElement(I,{tabIndex:p?"-1":"0",key:e.label,item:e,onItemClick:i,collapsible:o,activePath:d})}))))}function S(e){var a=e.item,t=e.onItemClick,n=e.activePath,l=(e.collapsible,Object(m.a)(e,y)),c=a.href,i=a.label,o=w(a,n);return r.a.createElement("li",{className:"menu__list-item",key:i},r.a.createElement(E.a,Object(s.a)({className:Object(u.a)("menu__link",{"menu__link--active":o}),to:c},Object(g.a)(c)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},l),i))}function I(e){switch(e.item.type){case"category":return r.a.createElement(C,e);case"link":default:return r.a.createElement(S,e)}}var x=function(e){var a,t,l=e.path,c=e.sidebar,i=e.sidebarCollapsible,o=void 0===i||i,s=e.onCollapse,m=e.isHidden,E=Object(n.useState)(!1),g=E[0],_=E[1],N=Object(d.useThemeConfig)(),y=N.navbar.hideOnScroll,w=N.hideableSidebar,C=Object(b.a)().isAnnouncementBarClosed,S=Object(v.a)().scrollY;Object(f.a)(g);var x=Object(h.a)();return Object(n.useEffect)((function(){x===h.b.desktop&&_(!1)}),[x]),r.a.createElement("div",{className:Object(u.a)(O.a.sidebar,(a={},a[O.a.sidebarWithHideableNavbar]=y,a[O.a.sidebarHidden]=m,a))},y&&r.a.createElement("div",{className:"sidebar-logo"},r.a.createElement("a",{href:Object(j.a)("/")},r.a.createElement("img",{src:Object(j.a)("/img/logo-1-dark.png"),tabIndex:-1}))),r.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",O.a.menu,(t={"menu--show":g},t[O.a.menuWithAnnouncementBar]=!C&&0===S,t))},r.a.createElement("button",{"aria-label":g?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){_(!g)}},g?r.a.createElement("span",{className:Object(u.a)(O.a.sidebarMenuIcon,O.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(k.a,{className:O.a.sidebarMenuIcon,height:24,width:24})),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(I,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),_(!1)},collapsible:o,activePath:l})})))),w&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(u.a)("button button--secondary button--outline",O.a.collapseSidebarButton),onClick:s},r.a.createElement(p,{className:O.a.collapseSidebarButtonIcon})))},F=t(245),T=t(291),M=t(251),L=t(98),H=t.n(L);function B(e){var a,t,i,s,m=e.currentDocRoute,b=e.versionMetadata,f=e.children,h=Object(c.default)(),v=h.siteConfig,E=h.isClient,g=b.pluginId,k=b.permalinkToSidebar,_=b.docsSidebars,O=b.version,j=k[m.path],N=_[j],y=Object(n.useState)(!1),w=y[0],C=y[1],S=Object(n.useState)(!1),I=S[0],T=S[1],M=Object(n.useCallback)((function(){I&&T(!1),C(!w)}),[I]);return r.a.createElement(o.a,{key:E,searchMetadatas:{version:O,tag:Object(d.docVersionSearchTag)(g,O)}},r.a.createElement("div",{className:H.a.docPage},N&&r.a.createElement("div",{className:Object(u.a)(H.a.docSidebarContainer,(a={},a[H.a.docSidebarContainerHidden]=w,a)),onTransitionEnd:function(e){e.currentTarget.classList.contains(H.a.docSidebarContainer)&&w&&T(!0)},role:"complementary"},r.a.createElement(x,{key:j,sidebar:N,path:m.path,sidebarCollapsible:null===(t=null===(i=v.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===t||t,onCollapse:M,isHidden:I}),I&&r.a.createElement("div",{className:H.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:M,onClick:M},r.a.createElement(p,null))),r.a.createElement("main",{className:H.a.docMainContainer},r.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",H.a.docItemWrapper,(s={},s[H.a.docItemWrapperEnhanced]=w,s))},r.a.createElement(l.a,{components:F.a},f)))))}a.default=function(e){var a=e.route.routes,t=e.versionMetadata,n=e.location,l=a.find((function(e){return Object(M.matchPath)(n.pathname,e)}));return l?r.a.createElement(B,{currentDocRoute:l,versionMetadata:t},Object(i.a)(a)):r.a.createElement(T.default,e)}},253:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(244),c=t(269),i=t(247),o=t(240),s=(t(57),t(3)),m=t(7),u=["color"],d=function(e){var a=e.color,t=void 0===a?"#161F31":a,n=Object(m.a)(e,u);return r.a.createElement("svg",Object(s.a)({width:"13",height:"13",xmlns:"http://www.w3.org/2000/svg"},n),r.a.createElement("path",{d:"M11.807 12.578a.744.744 0 00.547-.224.744.744 0 00.224-.547.698.698 0 00-.234-.537L7.383 6.29l4.96-4.981a.698.698 0 00.235-.538.744.744 0 00-.224-.546.744.744 0 00-.547-.225.698.698 0 00-.537.234L6.29 5.195 1.308.235A.698.698 0 00.77 0a.744.744 0 00-.546.225A.744.744 0 000 .77c0 .215.078.394.234.538l4.961 4.98-4.96 4.98a.698.698 0 00-.235.538c0 .214.075.397.225.547.15.15.332.224.546.224a.698.698 0 00.538-.234l4.98-4.98 4.98 4.98a.698.698 0 00.538.234z",fill:t,fillRule:"nonzero"}))};var b=function(){var e,a=Object(o.a)(),t=a.isAnnouncementBarClosed,n=a.closeAnnouncementBar,c=Object(i.useThemeConfig)().announcementBar;if(!c)return null;var s=c.content,m=(c.backgroundColor,c.textColor,c.isCloseable);return!s||m&&t?null:r.a.createElement("div",{className:"announcementBar",role:"banner"},r.a.createElement("div",{className:Object(l.a)("announcementBarContent",(e={},e.announcementBarCloseable=m,e)),dangerouslySetInnerHTML:{__html:s}}),m?r.a.createElement("button",{type:"button",className:"announcementBarClose",onClick:n,"aria-label":"Close"},r.a.createElement(d,{color:"#FFFFFF"})):null)},f=t(270);var h=function(e){var a=!1;return Object(n.useEffect)((function(){var e,t=document.querySelector(".redisearch-logo"),n=document.querySelector("#redis-sitesearch");a=!0,t.addEventListener("mousedown",(function(e){e.preventDefault()})),n.addEventListener("mousedown",(function(e){})),new f.a("#redis-sitesearch",{debounceTime:2,zIndex:100,search:function(a){var t=a.trim(),n="https://search-service.redislabs.com/search?q="+t+"*&site=https://developer.redis.com";if(0===a.length)return[];try{xhr.abort()}catch(l){}e=t;var r=function(e){var a=localStorage.getItem(e);if(!a)return null;var t=JSON.parse(a);return(new Date).getTime()>t.expiry?(localStorage.removeItem(e),null):t.value}(n);return r||new Promise((function(e){fetch(n).catch((function(a){console.error("Error querying search API: ",a),e([])})).then((function(a){return void 0!==a&&a.ok?a.json():(console.error("Error querying search API: ",a),void e([]))})).then((function(a){if(void 0!==a&&a){var r,l,c,i;if(a.results.length)r=a.results;else r=[{title:"No results",section_title:"No results found for '"+t.replace(/[&<>"'\/]/g,(function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"}[e]}))+"'",body:"",hierarchy:[""]}];l=n,c=3e4,i={value:r,expiry:(new Date).getTime()+c},localStorage.setItem(l,JSON.stringify(i)),e(r)}}))}))},renderResult:function(e,a){var t="";return""!==e.section_title&&(t='\n            <div className="search-section-title">\n              '+e.section_title+"\n            </div>\n          "),"\n          <li "+a+'>\n            <div class="search-left">\n              <div class="search-title">\n                '+e.title+'\n              </div>\n            </div>\n            <div class="search-right">\n              '+t+'\n              <div class="search-body">\n                '+e.body+"\n              </div>\n            </div>\n          </li>\n        "},getResultValue:function(e){return""},onSubmit:function(a){a&&(e=encodeURIComponent(e),window.open(a.url+"?s="+e,"_top"))},onUpdate:function(e,a){var t=document.querySelector(".redisearch-logo");e.length?t.innerHTML='<a class="powered-by-redisearch" href="https://oss.redislabs.com/redisearch/"></a>':t.innerHTML=""}})}),[a]),r.a.createElement("div",{id:"redis-sitesearch",className:"redis-sitesearch redis-sitesearch-inline"},r.a.createElement("input",{className:"redis-sitesearch-input"}),r.a.createElement("div",{className:"redis-sitesearch-result-list-wrapper"},r.a.createElement("ul",{className:"redis-sitesearch-result-list"}),r.a.createElement("div",{className:"redisearch-logo"})))},v=t(271),E=t(250),g=t(272),p=t(263),k=t(264),_=t(290),O=t(268),j=(t(265),t(58)),N=t.n(j),y=["color"],w=function(e){var a=e.color,t=void 0===a?"#161F31":a,n=Object(m.a)(e,y);return r.a.createElement("svg",Object(s.a)({width:"24",height:"18",xmlns:"http://www.w3.org/2000/svg"},n),r.a.createElement("g",{stroke:t,strokeWidth:"1.65",fill:"none",fillRule:"evenodd",strokeDasharray:"4.4",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{d:"M1 16.95h24.2M1 9.25h24.2M1 1.55h24.2"})))},C="right";var S=function(){var e,a,t=Object(i.useThemeConfig)(),c=t.navbar,o=c.items,m=c.hideOnScroll,u=c.style,d=t.colorMode.disableSwitch,b=Object(n.useState)(!1),f=b[0],j=b[1],y=Object(n.useState)(!1),S=y[0],I=(y[1],Object(E.a)()),x=I.isDarkTheme,F=I.setLightTheme,T=I.setDarkTheme,M=Object(g.a)(m),L=M.navbarRef,H=M.isNavbarVisible;Object(p.a)(f);var B=Object(n.useCallback)((function(){j(!0)}),[j]),D=Object(n.useCallback)((function(){j(!1)}),[j]),P=Object(n.useCallback)((function(e){return e.target.checked?T():F()}),[F,T]),A=Object(k.a)();Object(n.useEffect)((function(){A===k.b.desktop&&j(!1)}),[A]);var R=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:C)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:C)}))}}(o),U=R.leftItems,q=R.rightItems;return r.a.createElement("nav",{ref:L,className:Object(l.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===u,"navbar--primary":"primary"===u,"navbar-sidebar--show":f},e[N.a.navbarHideable]=m,e[N.a.navbarHidden]=!H,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=o&&0!==o.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:B,onKeyDown:B},r.a.createElement(w,{color:"#FFFFFF"})),r.a.createElement(O.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(l.a)("navbar__title",(a={},a[N.a.hideLogoText]=S,a))}),U.map((function(e,a){return r.a.createElement(_.a,Object(s.a)({},e,{key:a}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},r.a.createElement(h,null),q.map((function(e,a){return r.a.createElement(_.a,Object(s.a)({},e,{key:a}))})),!d&&r.a.createElement(v.a,{className:N.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:x,onChange:P}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:D}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(O.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:D}),!d&&f&&r.a.createElement(v.a,{"aria-label":"Dark mode toggle in sidebar",checked:x,onChange:P})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},o.map((function(e,a){return r.a.createElement(_.a,Object(s.a)({mobile:!0},e,{onClick:D,key:a}))})))))))},I=t(248),x=t(238),F=t(59),T=t.n(F),M=["color"],L=function(e){var a=e.color,t=void 0===a?"#465282":a,n=Object(m.a)(e,M);return r.a.createElement("svg",Object(s.a)({width:"785",height:"158",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},n),r.a.createElement("defs",null,r.a.createElement("path",{d:"M786.344 392.459c-41.822 22.164-258.313 110.84-305.056 135.477-46.742 24.637-72.163 23.812-108.246 6.57-36.082-17.24-267.334-111.664-309.156-131.377-41.822-19.713-42.642-33.657-1.64-49.271C103.25 338.265 332.86 247.94 381.243 229.875c48.383-18.065 65.604-18.065 106.605-2.473 41.003 15.614 256.674 100.996 297.676 115.785 41.002 14.791 42.642 27.912.82 49.273v-.001z",id:"a"}),r.a.createElement("mask",{id:"b",maskContentUnits:"userSpaceOnUse",maskUnits:"objectBoundingBox",x:"0",y:"0",width:"785",height:"331",fill:"#fff"},r.a.createElement("use",{xlinkHref:"#a"}))),r.a.createElement("use",{mask:"url(#b)",xlinkHref:"#a",transform:"translate(-32 -216)",stroke:t,strokeWidth:"4",fill:"none",fillRule:"evenodd",strokeDasharray:"3.637"}))},H=["to","href","label","prependBaseUrlToHref"];function B(e){var a=e.to,t=e.href,n=e.label,l=e.prependBaseUrlToHref,c=Object(m.a)(e,H),i=Object(x.a)(a),o=Object(x.a)(t,{forcePrependBaseUrl:!0});return r.a.createElement(I.a,Object(s.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:l?o:t}:{to:i},c),n)}var D=function(e){var a=e.url,t=e.alt;return r.a.createElement("img",{loading:"lazy",className:"footer__logo",alt:t,src:a})};var P=function(){var e=Object(i.useThemeConfig)().footer,a=e||{},t=a.copyright,n=a.links,c=void 0===n?[]:n,o=a.logo,s=void 0===o?{}:o,m=Object(x.a)(s.src);return e?r.a.createElement("footer",{className:Object(l.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},r.a.createElement(L,{className:"shape"}),r.a.createElement("img",{src:Object(x.a)("/img/code-2.png"),className:"code",alt:""}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},s&&s.src&&r.a.createElement("div",{className:"footer__logo-ctr"},r.a.createElement("span",{className:"footer__logo-tagline"},"Made with </> by"),s.href?r.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener",className:T.a.footerLogoLink},r.a.createElement(D,{alt:s.alt,url:m})):r.a.createElement(D,{alt:s.alt,url:m}))),r.a.createElement("div",{className:"col col--9"},c&&c.length>0&&r.a.createElement("div",{className:"row footer__links"},c.map((function(e,a){return r.a.createElement("div",{key:a,className:"col col--4 footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?r.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(B,e))}))):null)}))))),t?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null)):null},A=t(289),R=t(21),U=t(20),q=t(273);function z(e){var a=Object(U.default)(),t=a.siteConfig,n=a.i18n.currentLocale,l=t.favicon,c=t.themeConfig,o=c.image,m=c.metadatas,u=t.url,d=e.title,b=e.description,f=e.image,h=e.keywords,v=e.permalink,E=e.searchMetadatas,g=Object(i.useTitleFormatter)(d),p=f||o,k=Object(x.a)(p,{absolute:!0}),_=Object(x.a)(l),O=n.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,r.a.createElement("html",{lang:O}),g&&r.a.createElement("title",null,g),g&&r.a.createElement("meta",{property:"og:title",content:g}),l&&r.a.createElement("link",{rel:"shortcut icon",href:_}),b&&r.a.createElement("meta",{name:"description",content:b}),b&&r.a.createElement("meta",{property:"og:description",content:b}),h&&h.length&&r.a.createElement("meta",{name:"keywords",content:h.join(",")}),p&&r.a.createElement("meta",{property:"og:image",content:k}),p&&r.a.createElement("meta",{name:"twitter:image",content:k}),p&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+g}),v&&r.a.createElement("meta",{property:"og:url",content:u+v}),v&&r.a.createElement("link",{rel:"canonical",href:u+v}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{property:"og:image",content:Object(x.a)("/img/share.png")}),r.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto+Mono:wght@400;500;600;700&display=swap",rel:"stylesheet"}),r.a.createElement("link",{href:"/css/redis-sitesearch.css",rel:"stylesheet"}),r.a.createElement("link",{href:"/css/redis-sitesearch-overrides.css",rel:"stylesheet"})),r.a.createElement(q.a,Object(s.a)({tag:i.DEFAULT_SEARCH_TAG,locale:n},E)),r.a.createElement(R.a,null,m.map((function(e,a){return r.a.createElement("meta",Object(s.a)({key:"metadata_"+a},e))}))))}var W=t(274);t(60);a.a=function(e){var a=e.children,t=e.noFooter,n=e.wrapperClassName;return Object(W.a)(),r.a.createElement(A.a,null,r.a.createElement(z,e),r.a.createElement(c.a,null),r.a.createElement(b,null),r.a.createElement(S,null),r.a.createElement("div",{className:Object(l.a)("main-wrapper",n)},a),!t&&r.a.createElement(P,null))}},256:function(e,a,t){"use strict";var n=t(3),r=t(7),l=t(0),c=t.n(l),i=["color"];a.a=function(e){var a=e.color,t=Object(r.a)(e,i);return c.a.createElement("svg",Object(n.a)({width:"47",height:"11",xmlns:"http://www.w3.org/2000/svg"},t),c.a.createElement("g",{fill:"none",fillRule:"evenodd"},c.a.createElement("circle",{fill:a||"#CF5815",cx:"5.5",cy:"5.5",r:"5.5"}),c.a.createElement("circle",{fill:a||"#5961FF",cx:"23.5",cy:"5.5",r:"5.5"}),c.a.createElement("circle",{fill:a||"#14708D",cx:"41.5",cy:"5.5",r:"5.5"})))}},291:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(253),c=t(238),i=t(275),o=t.n(i),s=t(256);a.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("main",{className:"rds-404"},r.a.createElement("img",{src:Object(c.a)("/img/code-3.png"),className:"code",alt:""}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("div",{class:"terminal"},r.a.createElement("div",{className:"terminal-header"},r.a.createElement(s.a,{color:"#FFFFFF"})),r.a.createElement("div",{className:"terminal-body"},"404")),r.a.createElement("h1",{className:"title"},r.a.createElement(o.a,{strings:[">_ Page not found"],typeSpeed:75})),r.a.createElement("a",{href:"/",className:"link"},"Back to homepage"))))))}}}]);