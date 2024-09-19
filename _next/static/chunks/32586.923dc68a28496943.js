"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32586,14396,44630],{5515:function(e,t,n){n.d(t,{_:function(){return r}});var l=n(85893),o=n(67294);let r=e=>{let t,n,r,{children:i,stick:s}=e,a=(0,o.useRef)(null),d=(0,o.useRef)(null),[c,u]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=document.getElementsByClassName("draggable");function l(e){return e||((e=window.event).target=e.srcElement,e.layerX=e.offsetX,e.layerY=e.offsetY),("touchstart"===e.type||"touchmove"===e.type)&&(e.clientX=e.touches[0].clientX,e.clientY=e.touches[0].clientY),e.mx=e.pageX||e.clientX+document.body.scrollLeft,e.my=e.pageY||e.clientY+document.body.scrollTop,e}function o(o){if(e){for(let n of(o=l(o),e))(function(e,t){let{clientX:n,clientY:l}=e,{offsetHeight:o,offsetWidth:r,offsetTop:i,offsetLeft:s}=t.firstElementChild;return n>s&&n<s+r&&l>i&&l<i+o})(o,n)&&(t=n.firstElementChild);t&&("touchstart"===o.type&&(o.preventDefault(),document.documentElement.style.overflow="hidden"),u(!0),n=o.mx-t.offsetLeft,r=o.my-t.offsetTop,document.onmousemove=i,document.ontouchmove=i,document.onmouseup=a,document.ontouchend=a)}}function i(e){e=l(e),d.current=requestAnimationFrame(()=>c(e))}document.onmousedown=o,document.ontouchstart=o;let a=e=>{e=l(e),document.documentElement.style.overflow="auto",cancelAnimationFrame(d.current),u(!1),s&&m(),t=document.ontouchmove=document.ontouchend=document.onmousemove=document.onmouseup=null},c=e=>{if(t){let l=e.mx-n,o=e.my-r;t.style.left=l+"px",t.style.top=o+"px"}};function m(){for(let t of e){let{offsetHeight:e,offsetWidth:n,offsetTop:l,offsetLeft:o}=t.firstElementChild,{clientHeight:r,clientWidth:i}=document.documentElement;l<0&&(t.firstElementChild.style.top="0px"),l>r-e&&(t.firstElementChild.style.top=r-e+"px"),o<0&&(t.firstElementChild.style.left="0px"),o>i-n&&(t.firstElementChild.style.left=i-n+"px"),"left"===s?t.firstElementChild.style.left="0px":"right"===s&&(t.firstElementChild.style.left=i-n+"px")}}return window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m),cancelAnimationFrame(d.current)}},[s]),(0,l.jsx)("div",{className:"draggable ".concat(c?"cursor-grabbing":"cursor-grab"," select-none"),ref:a,children:i})};r.defaultProps={left:0,top:0}},14396:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var l=n(85893),o=n(67294);function r(){let[e,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{"serviceWorker"in navigator&&!(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone||document.referrer.includes("android-app://"))&&(t(!0),window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(e=>{console.log("Service Worker 注册成功:",e)}).catch(e=>{console.log("Service Worker 注册失败:",e)})}),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),window.deferredPrompt=e,t(!0)}))},[]),(0,l.jsx)(l.Fragment,{children:e&&(0,l.jsxs)("div",{className:" justify-center items-center md:flex hidden group text-white w-full rounded-lg m-2 md:m-0 p-2 hover:bg-gray-700 bg-[#1F2030] md:rounded-none md:bg-none",onClick:function(){window.deferredPrompt&&(window.deferredPrompt.prompt(),window.deferredPrompt.userChoice.then(e=>{"accepted"===e.outcome?(t(!1),console.log("用户已同意安装")):console.log("用户已拒绝安装"),window.deferredPrompt=null}))},children:[(0,l.jsx)("i",{alt:"download",title:"download",className:"cursor-pointer fas fa-download group-hover:scale-125 transition-all duration-150 "}),(0,l.jsx)("span",{className:"h-full flex mx-2 md:hidden items-center select-none",children:"Download"})]})})}},44630:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var l=n(85893);function o(){return(0,l.jsxs)("div",{className:"group text-white w-full justify-center items-center flex rounded-lg m-2 md:m-0 p-2 hover:bg-gray-700 bg-[#1F2030] md:rounded-none md:bg-none",onClick:function(){var e,t,n,l,o,r,i,s;null===(t=document)||void 0===t||null===(e=t.querySelector("#game-wrapper"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}),(null===(o=document)||void 0===o?void 0:null===(l=o.getElementById("game-wrapper"))||void 0===l?void 0:null===(n=l.contentWindow)||void 0===n?void 0:n.toggleFullScreen)&&(null===(s=document)||void 0===s||null===(i=s.getElementById("game-wrapper"))||void 0===i||null===(r=i.contentWindow)||void 0===r||r.toggleFullScreen())},children:[(0,l.jsx)("i",{alt:"full screen",title:"full screen",className:"cursor-pointer fas fa-expand group-hover:scale-125 transition-all duration-150 "}),(0,l.jsx)("span",{className:"h-full flex mx-2 md:hidden items-center select-none",children:"FullScreen"})]})}},32586:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var l=n(85893),o=n(5515),r=n(69325),i=n(78174),s=n(41664),a=n.n(s),d=n(67294),c=n(14396),u=n(44630);function m(e){var t,n;let{post:s,siteInfo:m}=e,f=(0,i.deepClone)(s),h=(null==f?void 0:null===(t=f.ext)||void 0===t?void 0:t.new_window)||!1,v=null==f?void 0:null===(n=f.ext)||void 0===n?void 0:n.href,[p,x]=(0,d.useState)(h),[g,w]=(0,d.useState)(!0);function b(){f&&w(!1)}return(0,d.useEffect)(()=>{var e,t,n;x(h);let l=document.getElementById("game-wrapper");(null==l?void 0:l.attachEvent)?null==l||l.attachEvent("onload",b):l&&(l.onload=b),(null===(n=document)||void 0===n?void 0:null===(t=n.getElementById("game-wrapper"))||void 0===t?void 0:null===(e=t.contentDocument.querySelector("title"))||void 0===e?void 0:e.textContent)&&(document.getElementById("game-wrapper").contentDocument.querySelector("title").textContent="".concat((null==f?void 0:f.title)||""," - Play ").concat((null==f?void 0:f.title)||""," on ").concat((0,r.JA)("TITLE")))},[s]),(0,l.jsxs)("div",{className:"".concat(v?"":"hidden"," bg-black w-full xl:h-[calc(100vh-8rem)] h-screen rounded-md relative"),children:[(0,l.jsx)(o._,{stick:"left",children:(0,l.jsxs)("div",{style:{left:"0px",top:"1rem"},className:"text-white fixed xl:hidden group space-x-1 flex items-center z-20 pr-3 pl-1 bg-[#202030] rounded-r-2xl  shadow-lg ",children:[(0,l.jsx)(a(),{href:"/",className:"px-1 py-3 hover:scale-125 duration-200 transition-all",passHref:!0,children:(0,l.jsx)("i",{className:"fas fa-chevron-left"})})," ",(0,l.jsx)("span",{className:"font-serif px-1",onClick:()=>{document.querySelector(".game-info").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})},children:(0,l.jsx)("i",{className:"fas fa-info"})})]})}),p&&(0,l.jsx)("div",{id:"open-tips",className:"animate__animated animate__fadeIn bottom-8 right-4  absolute z-20 flex items-end justify-end",children:(0,l.jsxs)("div",{className:"relative w-96 h-auto bg-white rounded-lg p-2",children:[(0,l.jsx)("div",{className:"absolute right-2",children:(0,l.jsx)("button",{className:"text-xl p-2",onClick:()=>{x(!1)},children:(0,l.jsx)("i",{className:"fas fa-times"})})}),(0,l.jsxs)("div",{className:"p-2 text-lg",children:["If the game fails to load, please try accessing the"," ",(0,l.jsx)("a",{className:"underline text-blue-500",rel:"noReferrer",href:"".concat(null==v?void 0:v.replace("/games-external/common/index.htm?n=","")),target:"_blank",onClick:()=>{x(!1),document.addEventListener("visibilitychange",function e(){"hidden"===document.visibilityState||(w(!0),document.getElementById("game-wrapper").contentWindow.location.reload(),document.removeEventListener("visibilitychange",e))})},children:"source webpage"}),"."]})]})}),g&&(0,l.jsxs)("div",{className:"absolute z-20 w-full xl:h-[calc(100vh-8rem)] h-screen rounded-md overflow-hidden ",children:[(0,l.jsxs)("div",{className:"z-20 absolute bg-black bg-opacity-75 w-full h-full flex flex-col gap-4 justify-center items-center",children:[(0,l.jsxs)("h2",{className:"text-3xl text-white flex gap-2 items-center",children:[(0,l.jsx)("i",{className:"fas fa-spinner animate-spin"}),(null==m?void 0:m.title)||(0,r.JA)("TITLE")]}),(0,l.jsx)("h3",{className:"text-xl text-white",children:(null==m?void 0:m.description)||(0,r.JA)("DESCRIPTION")})]}),(null==f?void 0:f.pageCoverThumbnail)&&(0,l.jsx)("img",{src:null==f?void 0:f.pageCoverThumbnail,className:"w-full h-full object-cover blur-md absolute top-0 left-0 z-0"})]}),(0,l.jsx)("iframe",{id:"game-wrapper",src:v,className:"relative w-full xl:h-[calc(100vh-8rem)] h-screen md:rounded-md overflow-hidden"}),v&&!g&&(0,l.jsxs)("div",{className:"game-decorator bg-[#0B0D14] right-0 bottom-0 flex justify-center z-10 md:absolute",children:[(0,l.jsx)(c.default,{}),(0,l.jsx)(u.default,{})]})]})}}}]);