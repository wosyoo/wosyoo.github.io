"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71529],{71529:function(e,l,o){o.r(l),o.d(l,{GameListRelate:function(){return n}});var t=o(85893),r=o(78174),a=o(41664),i=o.n(a),s=o(67294);let n=e=>{let{posts:l}=e,o=(0,r.deepClone)(l),a=[],i=0;for(;(null==o?void 0:o.length)>0&&i<24;){let e=o.shift();a.push((0,t.jsx)(u,{item:e,isLargeCard:!0},i)),i++}return(0,t.jsx)("div",{className:"game-list-wrapper w-full max-w-full overflow-x-auto",children:(0,t.jsx)("div",{className:"game-grid grid grid-flow-col justify-start gap-2",children:null==a?void 0:a.map((e,l)=>e)})})},u=e=>{var l;let{item:o}=e,{title:r}=o,[a,n]=(0,s.useState)("img"),u=null==o?void 0:o.pageCoverThumbnail,d=null==o?void 0:null===(l=o.ext)||void 0===l?void 0:l.video;return(0,t.jsxs)(i(),{href:"".concat(null==o?void 0:o.href),onMouseOver:()=>{n("video")},onMouseOut:()=>{n("img")},title:r,className:"card-single w-24 h-24 relative shadow rounded-md overflow-hidden flex justify-center items-center \n                group   hover:border-purple-400",children:[(0,t.jsx)("div",{className:"text-xs text-center absolute bottom-0 invisible group-hover:bottom-2 group-hover:visible transition-all duration-200 text-white z-30",children:r}),(0,t.jsx)("div",{className:"h-2/3 w-full absolute left-0 bottom-0 z-20 opacity-0 group-hover:opacity-75 transition-all duration-200",children:(0,t.jsx)("div",{className:"h-full w-full absolute bg-gradient-to-b from-transparent to-black"})}),"video"===a&&(0,t.jsx)("video",{className:"z-10 object-cover w-full h-24 absolute overflow-hidden",loop:"true",autoPlay:!0,preload:"none",children:(0,t.jsx)("source",{src:d,type:"video/mp4"})}),(0,t.jsx)("img",{className:"w-24 h-24 absolute object-cover group-hover:scale-105 duration-100 transition-all",src:u,alt:r})]})}}}]);