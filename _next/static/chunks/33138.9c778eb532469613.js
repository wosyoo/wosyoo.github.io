"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33138],{33138:function(e,l,a){a.r(l);var r=a(85893),d=a(11163),s=a(67294);l.default=e=>{let{children:l,isOpen:a,onOpen:i,onClose:n,className:t}=e,c=(0,d.useRouter)();(0,s.useEffect)(()=>{let e=()=>{o(!1)};return c.events.on("routeChangeComplete",e),()=>{c.events.off("routeChangeComplete",e)}},[c.events]);let o=e=>{e?i&&i():n&&n();let l=window.document.getElementById("sidebar-drawer"),a=window.document.getElementById("sidebar-drawer-background");e?(null==l||l.classList.replace("-mr-72","mr-0"),null==a||a.classList.replace("hidden","block")):(null==l||l.classList.replace("mr-0","-mr-72"),null==a||a.classList.replace("block","hidden"))};return(0,r.jsxs)("div",{id:"sidebar-wrapper",className:" block lg:hidden top-0 "+t,children:[(0,r.jsx)("div",{id:"sidebar-drawer",className:"".concat(a?"mr-0 w-72 visible":"-mr-72 max-w-side invisible"," bg-gray-50 right-0 top-0 dark:bg-hexo-black-gray shadow-black shadow-lg flex flex-col duration-300 fixed h-full overflow-y-scroll scroll-hidden z-30"),children:l}),(0,r.jsx)("div",{id:"sidebar-drawer-background",onClick:()=>{o(!1)},className:"".concat(a?"block":"hidden"," animate__animated animate__fadeIn fixed top-0 duration-300 left-0 z-20 w-full h-full bg-black/70")})]})}}}]);