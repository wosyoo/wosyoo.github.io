"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16800],{16800:function(e,t,r){r.r(t),r.d(t,{MenuItemDrop:function(){return s}});var n=r(85893),l=r(41664),i=r.n(l),a=r(11163),o=r(67294);let s=e=>{var t,r;let{link:l}=e,[s,d]=(0,o.useState)(!1),c=(0,a.useRouter)();if(!l||!l.show)return null;let u=(null==l?void 0:null===(t=l.subMenus)||void 0===t?void 0:t.length)>0,h=c.pathname===l.href||c.asPath===l.href;return(0,n.jsxs)("li",{className:"cursor-pointer list-none items-center flex mx-2",onMouseOver:()=>d(!0),onMouseOut:()=>d(!1),children:[u&&(0,n.jsx)("div",{className:"px-2 h-full whitespace-nowrap duration-300 text-sm justify-between dark:text-gray-300 cursor-pointer flex flex-nowrap items-center "+(h?"bg-green-600 text-white hover:text-white":"hover:text-green-600"),children:(0,n.jsxs)("div",{children:[(null==l?void 0:l.icon)&&(0,n.jsx)("i",{className:null==l?void 0:l.icon})," ",null==l?void 0:l.name,u&&(0,n.jsx)("i",{className:"px-2 fas fa-chevron-down duration-500 transition-all ".concat(s?" rotate-180":"")})]})}),!u&&(0,n.jsx)("div",{className:"px-2 h-full whitespace-nowrap duration-300 text-sm justify-between dark:text-gray-300 cursor-pointer flex flex-nowrap items-center "+(h?"bg-green-600 text-white hover:text-white":"hover:text-green-600"),children:(0,n.jsxs)(i(),{href:null==l?void 0:l.href,target:null==l?void 0:l.target,children:[(null==l?void 0:l.icon)&&(0,n.jsx)("i",{className:null==l?void 0:l.icon})," ",null==l?void 0:l.name]})}),u&&(0,n.jsx)("ul",{className:"".concat(s?"visible opacity-100 top-12 ":"invisible opacity-0 top-10 "," border-gray-100  bg-white  dark:bg-black dark:border-gray-800 transition-all duration-300 z-20 absolute block drop-shadow-lg "),children:null==l?void 0:null===(r=l.subMenus)||void 0===r?void 0:r.map((e,t)=>(0,n.jsx)("li",{className:"not:last-child:border-b-0 border-b text-gray-700 dark:text-gray-200  hover:bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200  dark:border-gray-800 py-3 pr-6 pl-3",children:(0,n.jsx)(i(),{href:e.href,target:null==l?void 0:l.target,children:(0,n.jsxs)("span",{className:"text-xs font-extralight",children:[(null==l?void 0:l.icon)&&(0,n.jsx)("i",{className:null==e?void 0:e.icon,children:" \xa0 "}),e.title]})})},t))})]})}}}]);