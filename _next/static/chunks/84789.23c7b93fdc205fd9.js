"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84789,24671,28481],{27134:function(e,r,t){t.d(r,{Z:function(){return o}});var a=t(85893),n=t(69325),s=t(9008),l=t.n(s),i=t(67294);function o(e){let{priority:r,id:t,src:s,alt:o,placeholderSrc:d,className:f,width:h,height:u,title:x,onLoad:v,style:g}=e,m=(0,n.JA)("IMAGE_COMPRESS_WIDTH"),j=(0,n.JA)("IMG_LAZY_LOAD_PLACEHOLDER"),b=(0,i.useRef)(null),[N,A]=(0,i.useState)(d||j),_=e=>{"function"==typeof v&&v()},k=()=>{b.current&&(b.current.src!==d&&d?b.current.src=d:b.current.src=j)};(0,i.useEffect)(()=>{let e=c(s,m)||j,r=new Image;r.src=e,r.onload=()=>{A(e),_(e)},r.onerror=k;let t=new IntersectionObserver(r=>{r.forEach(r=>{if(r.isIntersecting){let a=r.target;a.src=e,t.unobserve(a)}})},{rootMargin:"50px 0px"});return b.current&&t.observe(b.current),()=>{b.current&&t.unobserve(b.current)}},[s,m]);let C={ref:b,src:N,alt:o,onLoad:()=>{},onError:k};return t&&(C.id=t),x&&(C.title=x),h&&"auto"!==h&&(C.width=h),u&&"auto"!==u&&(C.height=u),f&&(C.className=f),g&&(C.style=g),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{...C}),r&&(0,a.jsx)(l(),{children:(0,a.jsx)("link",{rel:"preload",as:"image",href:c(s,m)})})]})}let c=(e,r)=>{var t,a;if(!e)return null;let n=(null===(a=window)||void 0===a?void 0:null===(t=a.screen)||void 0===t?void 0:t.width)||r;return n>r?e:e.replace(/width=\d+/,"width=".concat(n)).replace(/w=\d+/,"w=".concat(n))}},28481:function(e,r,t){t.r(r),t.d(r,{default:function(){return i}});var a=t(85893),n=t(69325),s=t(78174),l=t(67294);function i(e){let{value:r}=e,t=(0,n.JA)("QR_CODE_CDN");return(0,l.useEffect)(()=>{let e;if(r)return(0,s.loadExternalResource)(t,"js").then(t=>{var a;let n=null===(a=window)||void 0===a?void 0:a.QRCode;void 0!==n&&(e=new n(document.getElementById("qrcode"),{text:r,width:256,height:256,colorDark:"#000000",colorLight:"#ffffff",correctLevel:n.CorrectLevel.H}))}),()=>{e&&e.clear()}},[]),(0,a.jsx)("div",{id:"qrcode"})}},84789:function(e,r,t){t.r(r);var a=t(85893),n=t(27134),s=t(11163),l=t.n(s),i=t(24671),o=t(69325);r.default=e=>{let{siteInfo:r}=e;return(0,a.jsx)("div",{id:"info-card",className:"py-4",children:(0,a.jsxs)("div",{className:"items-center justify-center",children:[(0,a.jsx)("div",{className:"hover:scale-105 transform duration-200 cursor-pointer flex justify-center",onClick:()=>{l().push("/about")},children:(0,a.jsx)(n.Z,{src:null==r?void 0:r.icon,className:"rounded-full",width:120,alt:(0,o.JA)("AUTHOR")})}),(0,a.jsx)("div",{className:"text-xl py-2 hover:scale-105 transform duration-200 flex justify-center dark:text-gray-300",children:(0,o.JA)("AUTHOR")}),(0,a.jsx)("div",{className:"font-light text-gray-600 mb-2 hover:scale-105 transform duration-200 flex justify-center dark:text-gray-400",children:(0,o.JA)("BIO")}),(0,a.jsx)(i.default,{})]})})}},24671:function(e,r,t){t.r(r);var a=t(85893),n=t(28481),s=t(69325),l=t(67294);r.default=()=>{let e=(0,s.JA)("CONTACT_GITHUB"),r=(0,s.JA)("CONTACT_TWITTER"),t=(0,s.JA)("CONTACT_TELEGRAM"),i=(0,s.JA)("CONTACT_LINKEDIN"),o=(0,s.JA)("CONTACT_WEIBO"),c=(0,s.JA)("CONTACT_INSTAGRAM"),d=(0,s.JA)("CONTACT_EMAIL"),f=(0,s.JA)("ENABLE_RSS"),h=(0,s.JA)("CONTACT_BILIBILI"),u=(0,s.JA)("CONTACT_YOUTUBE"),x=(0,s.JA)("CONTACT_XIAOHONGSHU"),v=(0,s.JA)("CONTACT_ZHISHIXINGQIU"),g=(0,s.JA)("CONTACT_WEHCHAT_PUBLIC"),[m,j]=(0,l.useState)(!1);return(0,a.jsx)("div",{className:"w-full justify-center flex-wrap flex",children:(0,a.jsxs)("div",{className:"space-x-3 text-xl flex items-center text-gray-600 dark:text-gray-300 ",children:[e&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"github",href:e,children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-github dark:hover:text-green-400 hover:text-green-600"})}),r&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"twitter",href:r,children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-twitter dark:hover:text-green-400 hover:text-green-600"})}),t&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:t,title:"telegram",children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-telegram dark:hover:text-green-400 hover:text-green-600"})}),i&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:i,title:"linkIn",children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-linkedin dark:hover:text-green-400 hover:text-green-600"})}),o&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"weibo",href:o,children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-weibo dark:hover:text-green-400 hover:text-green-600"})}),c&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"instagram",href:c,children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-instagram dark:hover:text-green-400 hover:text-green-600"})}),d&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"email",href:"mailto:".concat(d),children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fas fa-envelope dark:hover:text-green-400 hover:text-green-600"})}),f&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"RSS",href:"/rss/feed.xml",children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fas fa-rss dark:hover:text-green-400 hover:text-green-600"})}),h&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"bilibili",href:h,children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 dark:hover:text-green-400 hover:text-green-600 fab fa-bilibili"})}),u&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"youtube",href:u,children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-youtube dark:hover:text-green-400 hover:text-green-600"})}),x&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"小红书",href:x,children:(0,a.jsx)("img",{className:"transform hover:scale-125 duration-150 w-6",src:"/svg/xiaohongshu.svg",alt:"小红书"})}),v&&(0,a.jsxs)("a",{target:"_blank",rel:"noreferrer",title:"知识星球",href:v,children:[(0,a.jsx)("img",{className:"transform hover:scale-125 duration-150 w-6",src:"/svg/zhishixingqiu.svg",alt:"知识星球"})," "]}),g&&(0,a.jsxs)("button",{onMouseEnter:()=>{j(!0)},onMouseLeave:()=>{j(!1)},"aria-label":"微信公众号",children:[(0,a.jsx)("div",{id:"wechat-button",children:(0,a.jsx)("i",{className:"transform scale-105 hover:scale-125 duration-150 fab fa-weixin  dark:hover:text-green-400 hover:text-green-600"})}),(0,a.jsx)("div",{className:"absolute",children:(0,a.jsx)("div",{id:"pop",className:(m?"opacity-100 ":" invisible opacity-0")+" z-40 absolute bottom-10 -left-10 bg-white shadow-xl transition-all duration-200 text-center",children:(0,a.jsx)("div",{className:"p-2 mt-1 w-28 h-28",children:m&&(0,a.jsx)(n.default,{value:g})})})})]})]})})}}}]);