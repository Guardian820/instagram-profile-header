!function(t){var r={};function n(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)n.d(e,i,function(r){return t[r]}.bind(null,i));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=0)}([function(t,r,n){window.InstaBox=n(1).InstaBox},function(t,r,n){"use strict";n.r(r),n.d(r,"InstaBox",function(){return e});n(2);class e{constructor(t){this.instaBioContainer=document.querySelector("#"+t),this.url="https://instagram.com/"+t,this.userModel={username:t,img:"",name:"",bio:"",external_url:"",followers:"",following:"",posts:"",wrapperDivToDisplay:"#"+t},this.start()}start(){this.renderDisplay(this.instaBioContainer),fetch(this.url).then(t=>t.text()).then(t=>(this.userModel.img=this.getInfo("img",t),this.userModel.name=this.getInfo("name",t),this.userModel.bio=this.getInfo("bio",t),this.userModel.external_url=this.getInfo("external_url",t),this.userModel.followers=this.getInfo("followers",t),this.userModel.following=this.getInfo("following",t),this.userModel.posts=this.getInfo("posts",t),this.userModel)).then(t=>{this.queryItem("follow_button").attributes[1].nodeValue=this.url,this.queryItem("img").src=t.img,this.queryItem("username").innerText=t.username,this.queryItem("name").innerText=t.name,this.queryItem("bio").innerHTML=this.unicodeToChar(t.bio).replace(/\\n/g,"<br />").replace(/\"\,/,""),this.queryItem("external_url").innerText=t.external_url,this.queryItem("external_url").attributes[1].nodeValue=t.external_url,this.queryItem("followers").innerText=t.followers,this.queryItem("following").innerText=t.following,this.queryItem("posts").innerText=t.posts,this.loaded()})}getInfo(t,r){var n={img:/\"profile_pic_url\":\"(http.+?)\"/,bio:/\"biography\":\"(.+?)\"/,external_url:/\"external_url\":\"(.+?)\"/,name:/\"full_name\":\"(.+?)\"/,followers:/\"edge_followed_by\":\{\"count\":(.+?)\},/,following:/\"edge_follow\":\{\"count\":(.+?)\},/,posts:/\"edge_owner_to_timeline_media\":\{\"count\":(.+?)\,\"/};return r.match(n[t])?r.match(n[t])[1]:""}queryItem(t){var r=this.userModel.wrapperDivToDisplay+" .insta-bio-container "+{follow_button:".profile-edit-btn",img:".profile-image img",username:".profile-user-name",name:".profile-real-name",bio:".profile-bio p",external_url:"a.external-url",followers:".profile-stat-count.followers",following:".profile-stat-count.following",posts:".profile-stat-count.posts"}[t];return document.querySelector(r)}unicodeToChar(t){return t.replace(/\\u[\dA-F]{4}/gi,function(t){return String.fromCharCode(parseInt(t.replace(/\\u/g,""),16))})}adaptToContainerSize(){var t=this.instaBioContainer.offsetWidth;this.instaBioContainer.className="",t<=741&&(this.instaBioContainer.className="insta-bio-small-display")}loaded(){document.querySelector(this.userModel.wrapperDivToDisplay+" .insta-bio-container").className="insta-bio-container",document.querySelector(this.userModel.wrapperDivToDisplay+" .spinner-loader-wrapper").remove();var t=this;window.addEventListener("resize",function(r){t.adaptToContainerSize()},!0),this.adaptToContainerSize()}renderDisplay(t){t.innerHTML='<div class="spinner-loader-wrapper"><div class="spinner"></div></div><div class="insta-bio-container do-not-display"><div class="profile"><div class="profile-image"><div class="circle"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;" xml:space="preserve"><circle cx="50" cy="50" r="40" /></svg></div><img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"></div><div class="profile-user-settings"><h1 class="profile-user-name">Mayk Brito</h1><a class="profile-edit-btn" href="#" target="_blank">Follow</a></div><div class="profile-stats"><ul><li><span class="profile-stat-count posts">164</span> posts</li><li><span class="profile-stat-count followers">188</span> followers</li><li><span class="profile-stat-count following">206</span> following</li></ul></div><div class="profile-bio"><span class="profile-real-name">Jane Doe</span><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p><a class="external-url" href="#" target="_blank">https://re9sites.com</a></div></div></div>'}}},function(t,r,n){var e=n(3);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(5)(e,i);e.locals&&(t.exports=e.locals)},function(t,r,n){(r=t.exports=n(4)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,600);",""]),r.push([t.i,"@import url(https://use.fontawesome.com/releases/v5.0.8/css/all.css);",""]),r.push([t.i,".insta-bio-container {\r\n  box-sizing: border-box;\r\n  font-family: \"Open Sans\", Arial, sans-serif;\r\n\tbackground-color: #fafafa;\r\n\tcolor: #262626;\r\n\tmax-width: 93.5rem;\r\n\tmargin: 0 auto;\r\n\tpadding: 0 2rem;\r\n  background-color: #fff;\r\n}\r\n\r\n.insta-bio-container img {\r\n\tdisplay: block;\r\n}\r\n\r\n.profile {\r\n  padding: 5rem 0;\r\n}\r\n\r\n.profile:after {\r\n  content: '';\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.profile-image {\r\n  float: left;\r\n  width: calc(33.333% - 1rem);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-right: 3rem;\r\n}\r\n\r\n.profile-image img {\r\n  border-radius: 50%;\r\n}\r\n\r\n.profile-user-settings,\r\n.profile-stats,\r\n.profile-bio {\r\n\tfloat: left;\r\n\twidth: calc(66.666% - 2rem);\r\n}\r\n\r\n.profile-user-settings {\r\n\tmargin-top: 1.5rem;\r\n}\r\n\r\n.profile-user-name {\r\n\tdisplay: inline-block;\r\n\tfont-size: 28px;\r\n\tfont-weight: 300;\r\n  vertical-align: bottom;\r\n}\r\n\r\na.profile-edit-btn {\r\n  background-color:#3897f0;\r\n\tdisplay: inline-block;\r\n\tfont-size: 14px;\r\n\tline-height: 1.8;\r\n\tborder: 0.1rem solid #3897f0;\r\n\tborder-radius: 4px;\r\n\tpadding: 2px 9px;\r\n\tmargin-left: 2rem;\r\n\tcursor: pointer;\r\n  color:#fff !important;\r\n  text-decoration:none;\r\n}\r\n\r\n.profile-stats {\r\n\tmargin-top: 2rem;\r\n}\r\n\r\n.profile-stats ul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.profile-stats li {\r\n\tdisplay: inline-block;\r\n\tfont-size: 16px;\r\n\tline-height: 1.5;\r\n\tmargin-right: 4rem;\r\n\tcursor: pointer;\r\n}\r\n\r\n.profile-stats li:last-of-type {\r\n\tmargin-right: 0;\r\n}\r\n\r\n.profile-bio {  \r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tline-height: 1.5;\r\n\tmargin-top: 2rem;\r\n}\r\n\r\n.profile-real-name,\r\n.profile-stat-count,\r\n.profile-edit-btn {\r\n\tfont-weight: 600;\r\n}\r\n\r\na.external-url {\r\n  color:#003569 !important;\r\n  text-decoration:none;\r\n  font-weight:600;\r\n}\r\n\r\n/* Media Query - do not worked inside another component - resolved with JS*/\r\n/* @media screen and (max-width: 810px) { */\r\n\r\n\t.insta-bio-small-display .profile {\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t\tpadding: 4rem 0;\r\n\t}\r\n\r\n\t.insta-bio-small-display .profile::after {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.insta-bio-small-display .profile-image,\r\n\t.insta-bio-small-display .profile-user-settings,\r\n\t.insta-bio-small-display .profile-bio,\r\n\t.insta-bio-small-display .profile-stats {\r\n\t\tfloat: none;\r\n\t\twidth: auto;\r\n\t}\r\n\r\n\t.insta-bio-small-display .profile-image img {\r\n\t\twidth: 7.7rem;\r\n\t}\r\n\r\n\t.insta-bio-small-display .profile-user-settings {\r\n\t\tflex-basis: calc(100% - 10.7rem);\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t\tmargin-top: 1rem;\r\n\t}\r\n\r\n\t.insta-bio-small-display .profile-user-name {\r\n\t\tfont-size: 2.2rem;\r\n\t}\r\n\r\n\t.insta-bio-small-display .profile-edit-btn {\r\n\t\torder: 1;\r\n\t\tpadding: 0;\r\n\t\ttext-align: center;\r\n\t\tmargin-top: 1rem;\r\n\t}\r\n\r\n\t.insta-bio-small-display .profile-edit-btn {\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t.insta-bio-small-display .profile-bio{\r\n\t\tfont-size: 1.4rem;\r\n\t\tmargin-top: 1.5rem;\r\n    \r\n\t}\r\n\r\n\t.insta-bio-small-display .profile-edit-btn,\r\n\t.insta-bio-small-display .profile-bio,\r\n\t.insta-bio-small-display .profile-stats {\r\n\t\tflex-basis: 100%;\r\n\t}\r\n\r\n\t.insta-bio-small-display .profile-stats {\r\n\t\torder: 1;\r\n\t\tmargin-top: 1.5rem;\r\n\t}\r\n\r\n\t.insta-bio-small-display .profile-stats ul {\r\n\t\tdisplay: flex;\r\n\t\ttext-align: center;\r\n\t\tpadding: 1.2rem 0;\r\n\t\tborder-top: 0.1rem solid #dadada;\r\n\t\tborder-bottom: 0.1rem solid #dadada;\r\n\t}\r\n\r\n\t.insta-bio-small-display .profile-stats li {\r\n\t\tfont-size: 1.4rem;\r\n\t\tflex: 1;\r\n\t\tmargin: 0;\r\n\t}\r\n\r\n\t.insta-bio-small-display .profile-stat-count {\r\n\t\tdisplay: block;\r\n\t}\r\n/* } */\r\n\r\n\r\n/* @supports (display: grid) { */\r\n\t.profile {\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: 1fr 2fr;\r\n\t\tgrid-template-rows: repeat(3, auto);\r\n\t\tgrid-column-gap: 3rem;\r\n\t\talign-items: center;\r\n\t}\r\n\r\n\t.profile-image {\r\n\t\tgrid-row: 1 / -1;\r\n\t}\r\n\r\n\r\n\t.profile-image,\r\n\t.profile-user-settings,\r\n\t.profile-stats,\r\n\t.profile-bio {\r\n\t\twidth: auto;\r\n/* \t\tmargin: 0; */\r\n\t}\r\n\r\n/* \t@media (max-width: 40rem) { */\r\n\t\t.insta-bio-small-display .profile {\r\n\t\t\tgrid-template-columns: auto 1fr;\r\n\t\t\tgrid-row-gap: 1.5rem;\r\n\t\t}\r\n\r\n\t\t.insta-bio-small-display .profile-image {\r\n\t\t\tgrid-row: 1 / 2;\r\n\t\t}\r\n\r\n\t\t.insta-bio-small-display .profile-user-settings {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgrid-template-columns: auto 1fr;\r\n\t\t\tgrid-gap: 1rem;\r\n\t\t}\r\n\r\n\t\t.insta-bio-small-display .profile-edit-btn,\r\n\t\t.insta-bio-small-display .profile-stats,\r\n\t\t.insta-bio-small-display .profile-bio {\r\n\t\t\tgrid-column: 1 / -1;\r\n\t\t}\r\n\r\n\t\t.insta-bio-small-display .profile-user-settings,\r\n\t\t.insta-bio-small-display .profile-edit-btn,\r\n\t\t.insta-bio-small-display .profile-settings-btn {\r\n\t\t\tmargin: 0;\r\n\t\t}\r\n/* \t} */\r\n/* } END OF GRID */\r\n\r\n\r\n/* LOADER - Spinner */\r\n.do-not-display {display:none !important}\r\n.please-display {display:initial !important}\r\n\r\n.spinner-loader-wrapper {\r\n    display:flex;\r\n  justify-content:center;\r\n  align-items:center;\r\n  height:100vh;\r\n  width:100vw;\r\n}\r\n.spinner {\r\n\twidth: 5rem;\r\n\theight: 5rem;\r\n\tborder: 0.6rem solid #999;\r\n\tborder-bottom-color: transparent;\r\n\tborder-radius: 50%;\r\n\tmargin: 0 auto;\r\n  translate: (50%, 50%);\r\n\tanimation: spinner 1s linear infinite;\r\n}\r\n@keyframes spinner {\r\n\tto {\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n.circle {\r\n  display:flex;\r\n  justify-content:center;\r\n  align-items:center;\r\n  position:absolute;\r\n  width: 205px;\r\n}\r\n.circle svg {\r\n  position: absolute;\r\n  fill: none;\r\n  stroke: #8a3ab9;\r\n  stroke-linecap: round;\r\n  stroke-width: 1.5;\r\n  stroke-dasharray: 0;\r\n  stroke-dashoffset: 0;\r\n  animation: stroke-draw 5s ease-out infinite alternate;\r\n}\r\n\r\n@keyframes stroke-draw {\r\n  from {\r\n    stroke: #8a3ab9;\r\n    stroke-dasharray: 0;\r\n  }\r\n  to {\r\n    stroke: #cd486b;\r\n    transform: rotate(180deg);\r\n    stroke-dasharray: 0;\r\n  }\r\n}\r\n\r\n/* @media screen and (max-width: 810px) { */\r\n  .insta-bio-small-display .circle {\r\n    width: 170px;\r\n  }\r\n/* } */",""])},function(t,r,n){"use strict";t.exports=function(t){var r=[];return r.toString=function(){return this.map(function(r){var n=function(t,r){var n=t[1]||"",e=t[3];if(!e)return n;if(r&&"function"==typeof btoa){var i=(s=e,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=e.sources.map(function(t){return"/*# sourceURL="+e.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}var s;return[n].join("\n")}(r,t);return r[2]?"@media "+r[2]+"{"+n+"}":n}).join("")},r.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var e={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(e[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];null!=s[0]&&e[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),r.push(s))}},r}},function(t,r,n){var e,i,o={},s=(e=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=e.apply(this,arguments)),i}),a=function(t){var r={};return function(t,n){if("function"==typeof t)return t();if(void 0===r[t]){var e=function(t,r){return r?r.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}r[t]=e}return r[t]}}(),l=null,p=0,f=[],d=n(6);function u(t,r){for(var n=0;n<t.length;n++){var e=t[n],i=o[e.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](e.parts[s]);for(;s<e.parts.length;s++)i.parts.push(y(e.parts[s],r))}else{var a=[];for(s=0;s<e.parts.length;s++)a.push(y(e.parts[s],r));o[e.id]={id:e.id,refs:1,parts:a}}}}function c(t,r){for(var n=[],e={},i=0;i<t.length;i++){var o=t[i],s=r.base?o[0]+r.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};e[s]?e[s].parts.push(a):n.push(e[s]={id:s,parts:[a]})}return n}function m(t,r){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var e=f[f.length-1];if("top"===t.insertAt)e?e.nextSibling?n.insertBefore(r,e.nextSibling):n.appendChild(r):n.insertBefore(r,n.firstChild),f.push(r);else if("bottom"===t.insertAt)n.appendChild(r);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(t.insertAt.before,n);n.insertBefore(r,i)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var r=f.indexOf(t);r>=0&&f.splice(r,1)}function g(t){var r=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var e=function(){0;return n.nc}();e&&(t.attrs.nonce=e)}return b(r,t.attrs),m(t,r),r}function b(t,r){Object.keys(r).forEach(function(n){t.setAttribute(n,r[n])})}function y(t,r){var n,e,i,o;if(r.transform&&t.css){if(!(o="function"==typeof r.transform?r.transform(t.css):r.transform.default(t.css)))return function(){};t.css=o}if(r.singleton){var s=p++;n=l||(l=g(r)),e=x.bind(null,n,s,!1),i=x.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var r=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(r,t.attrs),m(t,r),r}(r),e=function(t,r,n){var e=n.css,i=n.sourceMap,o=void 0===r.convertToAbsoluteUrls&&i;(r.convertToAbsoluteUrls||o)&&(e=d(e));i&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([e],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,r),i=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(r),e=function(t,r){var n=r.css,e=r.media;e&&t.setAttribute("media",e);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){h(n)});return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else i()}}t.exports=function(t,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(r=r||{}).attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=s()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var n=c(t,r);return u(n,r),function(t){for(var e=[],i=0;i<n.length;i++){var s=n[i];(a=o[s.id]).refs--,e.push(a)}t&&u(c(t,r),r);for(i=0;i<e.length;i++){var a;if(0===(a=e[i]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete o[a.id]}}}};var v,w=(v=[],function(t,r){return v[t]=r,v.filter(Boolean).join("\n")});function x(t,r,n,e){var i=n?"":e.css;if(t.styleSheet)t.styleSheet.cssText=w(r,i);else{var o=document.createTextNode(i),s=t.childNodes;s[r]&&t.removeChild(s[r]),s.length?t.insertBefore(o,s[r]):t.appendChild(o)}}},function(t,r){t.exports=function(t){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=r.protocol+"//"+r.host,e=n+r.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,r){var i,o=r.trim().replace(/^"(.*)"$/,function(t,r){return r}).replace(/^'(.*)'$/,function(t,r){return r});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:e+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}]);