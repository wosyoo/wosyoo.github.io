"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70038,47172],{27134:function(e,r,t){t.d(r,{Z:function(){return o}});var a=t(85893),n=t(69325),s=t(9008),l=t.n(s),i=t(67294);function o(e){let{priority:r,id:t,src:s,alt:o,placeholderSrc:f,className:d,width:u,height:h,title:x,onLoad:A,style:T}=e,m=(0,n.JA)("IMAGE_COMPRESS_WIDTH"),v=(0,n.JA)("IMG_LAZY_LOAD_PLACEHOLDER"),N=(0,i.useRef)(null),[g,j]=(0,i.useState)(f||v),C=e=>{"function"==typeof A&&A()},_=()=>{N.current&&(N.current.src!==f&&f?N.current.src=f:N.current.src=v)};(0,i.useEffect)(()=>{let e=c(s,m)||v,r=new Image;r.src=e,r.onload=()=>{j(e),C(e)},r.onerror=_;let t=new IntersectionObserver(r=>{r.forEach(r=>{if(r.isIntersecting){let a=r.target;a.src=e,t.unobserve(a)}})},{rootMargin:"50px 0px"});return N.current&&t.observe(N.current),()=>{N.current&&t.unobserve(N.current)}},[s,m]);let b={ref:N,src:g,alt:o,onLoad:()=>{},onError:_};return t&&(b.id=t),x&&(b.title=x),u&&"auto"!==u&&(b.width=u),h&&"auto"!==h&&(b.height=h),d&&(b.className=d),T&&(b.style=T),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{...b}),r&&(0,a.jsx)(l(),{children:(0,a.jsx)("link",{rel:"preload",as:"image",href:c(s,m)})})]})}let c=(e,r)=>{var t,a;if(!e)return null;let n=(null===(a=window)||void 0===a?void 0:null===(t=a.screen)||void 0===t?void 0:t.width)||r;return n>r?e:e.replace(/width=\d+/,"width=".concat(n)).replace(/w=\d+/,"w=".concat(n))}},70038:function(e,r,t){t.r(r);var a=t(85893),n=t(27134),s=t(11163),l=t.n(s),i=t(47172),o=t(69325);r.default=e=>{let{siteInfo:r}=e;return(0,a.jsx)("div",{id:"info-card",className:"py-4",children:(0,a.jsxs)("div",{className:"items-center justify-center",children:[(0,a.jsx)("div",{className:"hover:scale-105 transform duration-200 cursor-pointer flex justify-center",onClick:()=>{l().push("/about")},children:(0,a.jsx)(n.Z,{src:null==r?void 0:r.icon,className:"rounded-full",width:120,alt:(0,o.JA)("AUTHOR")})}),(0,a.jsx)("div",{className:"text-xl py-2 hover:scale-105 transform duration-200 flex justify-center dark:text-gray-300",children:(0,o.JA)("AUTHOR")}),(0,a.jsx)("div",{className:"font-light text-gray-600 mb-2 hover:scale-105 transform duration-200 flex justify-center dark:text-gray-400",children:(0,o.JA)("BIO")}),(0,a.jsx)(i.default,{})]})})}},47172:function(e,r,t){t.r(r);var a=t(85893),n=t(69325);r.default=()=>(0,a.jsxs)("div",{className:"space-x-3 text-xl text-gray-600 dark:text-gray-400 flex-wrap flex justify-center ",children:[(0,n.JA)("CONTACT_GITHUB")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"github",href:(0,n.JA)("CONTACT_GITHUB"),children:(0,a.jsx)("i",{className:"fab fa-github transform hover:scale-125 duration-150 hover:text-green-600"})}),(0,n.JA)("CONTACT_TWITTER")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"twitter",href:(0,n.JA)("CONTACT_TWITTER"),children:(0,a.jsx)("i",{className:"fab fa-twitter transform hover:scale-125 duration-150 hover:text-green-600"})}),(0,n.JA)("CONTACT_TELEGRAM")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:(0,n.JA)("CONTACT_TELEGRAM"),title:"telegram",children:(0,a.jsx)("i",{className:"fab fa-telegram transform hover:scale-125 duration-150 hover:text-green-600"})}),(0,n.JA)("CONTACT_LINKEDIN")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:(0,n.JA)("CONTACT_LINKEDIN"),title:"linkedIn",children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-linkedin dark:hover:text-indigo-400 hover:text-indigo-600"})}),(0,n.JA)("CONTACT_WEIBO")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"weibo",href:(0,n.JA)("CONTACT_WEIBO"),children:(0,a.jsx)("i",{className:"fab fa-weibo transform hover:scale-125 duration-150 hover:text-green-600"})}),(0,n.JA)("CONTACT_INSTAGRAM")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"instagram",href:(0,n.JA)("CONTACT_INSTAGRAM"),children:(0,a.jsx)("i",{className:"fab fa-instagram transform hover:scale-125 duration-150 hover:text-green-600"})}),(0,n.JA)("CONTACT_EMAIL")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"email",href:"mailto:".concat((0,n.JA)("CONTACT_EMAIL")),children:(0,a.jsx)("i",{className:"fas fa-envelope transform hover:scale-125 duration-150 hover:text-green-600"})}),JSON.parse((0,n.JA)("ENABLE_RSS"))&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"RSS",href:"/rss/feed.xml",children:(0,a.jsx)("i",{className:"fas fa-rss transform hover:scale-125 duration-150 hover:text-green-600"})})]})}}]);