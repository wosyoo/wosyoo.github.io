(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16269,46695,38377],{93096:function(e,t,n){var i="Expected a function",r=0/0,a=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,f=d||u||Function("return this")(),h=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return f.Date.now()};function x(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==h.call(t))return r;if(x(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=x(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var i=o.test(e);return i||s.test(e)?c(e.slice(2),i?2:8):l.test(e)?r:+e}e.exports=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw TypeError(i);return x(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),function(e,t,n){var r,a,l,o,s,c,d=0,u=!1,f=!1,h=!0;if("function"!=typeof e)throw TypeError(i);function b(t){var n=r,i=a;return r=a=void 0,d=t,o=e.apply(i,n)}function y(e){var n=e-c,i=e-d;return void 0===c||n>=t||n<0||f&&i>=l}function j(){var e,n,i,r=g();if(y(r))return w(r);s=setTimeout(j,(e=r-c,n=r-d,i=t-e,f?v(i,l-n):i))}function w(e){return(s=void 0,h&&r)?b(e):(r=a=void 0,o)}function N(){var e,n=g(),i=y(n);if(r=arguments,a=this,c=n,i){if(void 0===s)return d=e=c,s=setTimeout(j,t),u?b(e):o;if(f)return s=setTimeout(j,t),b(c)}return void 0===s&&(s=setTimeout(j,t)),o}return t=p(t)||0,x(n)&&(u=!!n.leading,l=(f="maxWait"in n)?m(p(n.maxWait)||0,t):l,h="trailing"in n?!!n.trailing:h),N.cancel=function(){void 0!==s&&clearTimeout(s),d=0,r=c=a=s=void 0},N.flush=function(){return void 0===s?o:w(g())},N}(e,t,{leading:r,maxWait:t,trailing:a})}},46695:function(e,t,n){"use strict";n.r(t);var i=n(85893),r=n(67294),a=n(78174);t.default=e=>{let{targetRef:t,showPercent:n=!0}=e,l=(null==t?void 0:t.current)||t,[o,s]=(0,r.useState)(0),c=()=>{let e=l||a.isBrowser&&document.getElementById("article-wrapper");if(e){let t=e.clientHeight,n=parseFloat((window.pageYOffset/(t-window.outerHeight)*100).toFixed(0));n>100&&(n=100),n<0&&(n=0),s(n)}};return(0,r.useEffect)(()=>(document.addEventListener("scroll",c),()=>document.removeEventListener("scroll",c)),[]),(0,i.jsx)("div",{className:"h-4 w-full shadow-2xl bg-gray-400 ",children:(0,i.jsx)("div",{className:"h-4 bg-gray-600 duration-200",style:{width:"".concat(o,"%")},children:n&&(0,i.jsxs)("div",{className:"text-right text-white text-xs",children:[o,"%"]})})})}},38377:function(e,t,n){"use strict";n.r(t);var i=n(85893),r=n(67294),a=n(93096),l=n.n(a),o=n(89163),s=n(46695);t.default=e=>{let{toc:t}=e;(0,r.useEffect)(()=>(window.addEventListener("scroll",u),u(),()=>{window.removeEventListener("scroll",u)}),[]);let n=(0,r.useRef)(null),a=[],[c,d]=(0,r.useState)(null),u=(0,r.useCallback)(l()(()=>{var e;let t=document.getElementsByClassName("notion-h"),i=null,r=c;for(let e=0;e<t.length;++e){let n=t[e];if(!n||!(n instanceof Element))continue;r||(r=n.getAttribute("data-id"));let a=n.getBoundingClientRect(),l=Math.max(150,(i?a.top-i.bottom:0)/4);if(a.top-l<0){r=n.getAttribute("data-id"),i=a;continue}break}d(r);let l=a.indexOf(r)||0;null==n||null===(e=n.current)||void 0===e||e.scrollTo({top:28*l,behavior:"smooth"})},200));return!t||t.length<1?(0,i.jsx)(i.Fragment,{}):(0,i.jsxs)("div",{className:"px-3",children:[(0,i.jsx)("div",{className:"w-full pb-1",children:(0,i.jsx)(s.default,{})}),(0,i.jsx)("div",{className:"overflow-y-auto max-h-96 overscroll-none scroll-hidden",ref:n,children:(0,i.jsx)("nav",{className:"h-full  text-black dark:text-gray-300",children:t.map(e=>{let t=(0,o.Gw)(e.id);return a.push(t),(0,i.jsx)("a",{href:"#".concat(t),className:"notion-table-of-contents-item duration-300 transform font-light\n              notion-table-of-contents-item-indent-level-".concat(e.indentLevel," "),children:(0,i.jsx)("span",{style:{display:"inline-block",marginLeft:16*e.indentLevel},className:"truncate ".concat(c===t?" font-bold text-red-400 underline":""),children:e.text})},t)})})})]})}},16269:function(e,t,n){"use strict";n.r(t);var i=n(85893),r=n(38377),a=n(67294),l=n(93348);t.default=e=>{let{post:t,cRef:n}=e;(0,a.useImperativeHandle)(n,()=>({handleSwitchVisible:()=>c()}));let[o,s]=(0,a.useState)(!1),c=()=>{s(!o)},{locale:d}=(0,l.O)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"fixed top-0 right-0 z-40 ",children:(0,i.jsx)("div",{className:(o?"animate__slideInRight ":" -mr-72 animate__slideOutRight")+" shadow-card animate__animated animate__faster  w-60 duration-200 fixed right-4 top-16 rounded py-2 bg-white dark:bg-gray-600",children:t&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"font-bold pb-2 text-center text-black dark:text-white ",children:d.COMMON.TABLE_OF_CONTENTS}),(0,i.jsx)("div",{className:"dark:text-gray-400 text-gray-600 dark:bg-gray-800",children:(0,i.jsx)(r.default,{toc:t.toc})})]})})}),(0,i.jsx)("div",{id:"right-drawer-background",className:(o?"block":"hidden")+" fixed top-0 left-0 z-30 w-full h-full",onClick:c})]})}}}]);