"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22416,56253],{56253:function(e,t,l){l.r(t);var r=l(85893),n=l(93348);t.default=e=>{let{currentSearch:t}=e,{locale:l}=(0,n.O)();return(0,r.jsx)("div",{className:"flex w-full items-center justify-center min-h-screen mx-auto md:-mt-20",children:(0,r.jsxs)("div",{className:"text-gray-500 dark:text-gray-300",children:[l.COMMON.NO_MORE," ",t&&(0,r.jsx)("div",{children:t})]})})}},22416:function(e,t,l){l.r(t);var r=l(85893),n=l(69325),s=l(93348),i=l(78174),c=l(67294),a=l(68632),d=l(42334),u=l(56253);t.default=e=>{let{posts:t=[],currentSearch:l,showSummary:o=(0,n.JA)("HEO_POST_LIST_SUMMARY",null,a.default),siteInfo:O}=e,{locale:f,NOTION_CONFIG:x}=(0,s.O)(),[h,m]=(0,c.useState)(1),_=(0,n.JA)("POSTS_PER_PAGE",null,x),w=(0,i.getListByPage)(t,h,_),g=!1;t&&(g=h*_<t.length);let E=()=>{g&&m(h+1)},v=()=>{requestAnimationFrame(()=>{window.scrollY+window.outerHeight>(M&&M.current?M.current.clientHeight:0)+100&&E()})};(0,c.useEffect)(()=>(window.addEventListener("scroll",v),()=>{window.removeEventListener("scroll",v)}));let M=(0,c.useRef)(null),N=(0,n.JA)("HEO_HOME_POST_TWO_COLS",!0,a.default);return w&&0!==w.length?(0,r.jsxs)("div",{id:"container",ref:M,className:"w-full",children:[(0,r.jsxs)("div",{className:"".concat(N&&"2xl:grid 2xl:grid-cols-2"," grid-cols-1 gap-5"),children:[" ",w.map(e=>(0,r.jsx)(d.default,{post:e,showSummary:o,siteInfo:O},e.id))]}),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{onClick:()=>{E()},className:"w-full my-4 py-4 text-center cursor-pointer rounded-xl dark:text-gray-200",children:[" ",g?f.COMMON.MORE:"".concat(f.COMMON.NO_MORE)," "]})})]}):(0,r.jsx)(u.default,{currentSearch:l})}}}]);