"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85100],{85100:function(e,t,a){a.r(t);var r=a(85893),n=a(11163),s=a(67294);let o=!1;t.default=e=>{let{currentTag:t,currentSearch:a,cRef:l,className:i}=e,[u,c]=(0,s.useState)(!1),f=(0,n.useRouter)(),d=(0,s.useRef)();(0,s.useImperativeHandle)(l,()=>({focus:()=>{var e;null==d||null===(e=d.current)||void 0===e||e.focus()}}));let p=()=>{let e=d.current.value;e&&""!==e?(c(!0),location.href="/search/"+e):f.push({pathname:"/"}).then(e=>{})},h=()=>{d.current.value=""},[m,x]=(0,s.useState)(!1),g=e=>{o||(d.current.value=e,e?x(!0):x(!1))};function v(){o=!0}return(0,r.jsxs)("div",{className:"flex w-full bg-gray-100 "+i,children:[(0,r.jsx)("input",{ref:d,type:"text",className:"outline-none w-full text-sm pl-2 transition focus:shadow-lg  leading-10 text-black bg-gray-100 dark:bg-gray-900 dark:text-white",onKeyUp:e=>{13===e.keyCode?p(d.current.value):27===e.keyCode&&h()},onCompositionStart:v,onCompositionUpdate:v,onCompositionEnd:function(){o=!1},onChange:e=>g(e.target.value),defaultValue:a}),(0,r.jsx)("div",{className:"-ml-8 cursor-pointer float-right items-center justify-center py-2",onClick:p,children:(0,r.jsx)("i",{className:"hover:text-black transform duration-200 text-gray-500  dark:hover:text-gray-300 cursor-pointer fas ".concat(u?"fa-spinner animate-spin":"fa-search"," ")})}),m&&(0,r.jsx)("div",{className:"-ml-12 cursor-pointer float-right items-center justify-center py-2",children:(0,r.jsx)("i",{className:"fas fa-times hover:text-black transform duration-200 text-gray-400 cursor-pointer   dark:hover:text-gray-300",onClick:h})})]})}}}]);