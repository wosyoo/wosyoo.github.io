"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83107],{22468:function(e,t,l){var i=l(85893),r=l(67294);let s=e=>{let{collapseRef:t}=e,l=(0,r.useRef)(null),s=e.type||"vertical";(0,r.useImperativeHandle)(t,()=>({updateCollapseHeight:t=>{let{height:i,increase:r}=t;e.isOpen&&(l.current.style.height=l.current.scrollHeight,l.current.style.height="auto")}}));let n=e=>{let t=e.scrollHeight,l=e.scrollWidth;requestAnimationFrame(function(){switch(s){case"horizontal":e.style.width=l+"px",requestAnimationFrame(function(){e.style.width="0px"});break;case"vertical":e.style.height=t+"px",requestAnimationFrame(function(){e.style.height="0px"})}})},a=e=>{let t=e.scrollHeight,l=e.scrollWidth,i=0;switch(s){case"horizontal":e.style.width=l+"px",i=setTimeout(()=>{e.style.width="auto"},400);break;case"vertical":e.style.height=t+"px",i=setTimeout(()=>{e.style.height="auto"},400)}clearTimeout(i)};return(0,r.useEffect)(()=>{e.isOpen?a(l.current):n(l.current),(null==e?void 0:e.onHeightChange)&&e.onHeightChange({height:l.current.scrollHeight,increase:e.isOpen})},[e.isOpen]),(0,i.jsx)("div",{ref:l,style:"vertical"===s?{height:"0px",willChange:"height"}:{width:"0px",willChange:"width"},className:"".concat(e.className||""," overflow-hidden duration-200 "),children:e.children})};s.defaultProps={isOpen:!1},t.Z=s},83107:function(e,t,l){l.r(t),l.d(t,{MenuItemCollapse:function(){return c}});var i=l(85893),r=l(22468),s=l(41664),n=l.n(s),a=l(67294);let c=e=>{var t;let{link:l}=e,[s,c]=(0,a.useState)(!1),o=(null==l?void 0:null===(t=l.subMenus)||void 0===t?void 0:t.length)>0,[h,u]=(0,a.useState)(!1);return l&&l.show?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"w-full px-8 py-3 text-left border-b dark:bg-hexo-black-gray dark:border-black",onClick:()=>{c(!s)},children:[!o&&(0,i.jsx)(n(),{href:null==l?void 0:l.href,target:null==l?void 0:l.target,className:"items-center flex justify-between pl-2 pr-4 dark:text-gray-200 no-underline tracking-widest pb-1",children:(0,i.jsxs)("span",{className:"text-blue-600 dark:text-blue-300 hover:text-red-400 transition-all items-center duration-200",children:[(null==l?void 0:l.icon)&&(0,i.jsx)("span",{className:"mr-2",children:(0,i.jsx)("i",{className:l.icon})}),null==l?void 0:l.name]})}),o&&(0,i.jsxs)("div",{onClick:o?()=>{u(!h)}:null,className:"items-center flex justify-between pl-2 pr-4 cursor-pointer  dark:text-gray-200 no-underline tracking-widest pb-1",children:[(0,i.jsxs)("span",{className:"text-blue-600 dark:text-blue-300 hover:text-red-400 transition-all items-center duration-200",children:[(null==l?void 0:l.icon)&&(0,i.jsx)("span",{className:"mr-2",children:(0,i.jsx)("i",{className:l.icon})}),null==l?void 0:l.name]}),(0,i.jsx)("i",{className:"px-2 fa fa-plus transition-all duration-200 ".concat(h&&"rotate-45"," text-gray-400")})]})]}),o&&(0,i.jsx)(r.Z,{isOpen:h,onHeightChange:e.onHeightChange,children:l.subMenus.map((e,t)=>(0,i.jsx)("div",{className:"dark:bg-black text-left px-10 justify-start text-blue-600 dark:text-blue-300 bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200 border-b dark:border-gray-800 py-3 pr-6",children:(0,i.jsx)(n(),{href:e.href,target:null==l?void 0:l.target,children:(0,i.jsxs)("span",{className:"ml-4 text-sm",children:[(null==e?void 0:e.icon)&&(0,i.jsx)("span",{className:"mr-2 w-4",children:(0,i.jsx)("i",{className:e.icon})}),e.title]})})},t))})]}):null}}}]);