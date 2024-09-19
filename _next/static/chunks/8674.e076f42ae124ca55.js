"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8674,65685,14080],{27134:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(85893),a=r(69325),l=r(9008),s=r.n(l),c=r(67294);function i(e){let{priority:t,id:r,src:l,alt:i,placeholderSrc:d,className:u,width:x,height:h,title:f,onLoad:v,style:m}=e,g=(0,a.JA)("IMAGE_COMPRESS_WIDTH"),p=(0,a.JA)("IMG_LAZY_LOAD_PLACEHOLDER"),y=(0,c.useRef)(null),[w,j]=(0,c.useState)(d||p),N=e=>{"function"==typeof v&&v()},_=()=>{y.current&&(y.current.src!==d&&d?y.current.src=d:y.current.src=p)};(0,c.useEffect)(()=>{let e=o(l,g)||p,t=new Image;t.src=e,t.onload=()=>{j(e),N(e)},t.onerror=_;let r=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){let n=t.target;n.src=e,r.unobserve(n)}})},{rootMargin:"50px 0px"});return y.current&&r.observe(y.current),()=>{y.current&&r.unobserve(y.current)}},[l,g]);let k={ref:y,src:w,alt:i,onLoad:()=>{},onError:_};return r&&(k.id=r),f&&(k.title=f),x&&"auto"!==x&&(k.width=x),h&&"auto"!==h&&(k.height=h),u&&(k.className=u),m&&(k.style=m),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{...k}),t&&(0,n.jsx)(s(),{children:(0,n.jsx)("link",{rel:"preload",as:"image",href:o(l,g)})})]})}let o=(e,t)=>{var r,n;if(!e)return null;let a=(null===(n=window)||void 0===n?void 0:null===(r=n.screen)||void 0===r?void 0:r.width)||t;return a>t?e:e.replace(/width=\d+/,"width=".concat(a)).replace(/w=\d+/,"w=".concat(a))}},67968:function(e,t,r){var n=r(85893),a=r(27134);t.Z=e=>{let{icon:t}=e;return t?t.startsWith("http")||t.startsWith("data:")?(0,n.jsx)(a.Z,{src:t,className:"w-8 h-8 my-auto inline mr-1"}):(0,n.jsx)("span",{className:"mr-1",children:t}):(0,n.jsx)(n.Fragment,{})}},52802:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var n=r(85893),a=r(27134),l=r(67968),s=r(69325),c=r(65685),i=r(14080);function o(e){var t;let{post:r,siteInfo:o}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex flex-col gap-y-4 py-4 px-2 lg:px-0",children:[(0,n.jsxs)("div",{className:"flex justify-center items-center",children:[(0,s.JA)("MAGZINE_POST_LIST_CATEGORY")&&(0,n.jsx)(c.default,{category:null==r?void 0:r.category}),(0,n.jsx)("div",{className:"flex items-center justify-start flex-wrap text-gray-400",children:(0,s.JA)("MAGZINE_POST_LIST_TAG")&&(null==r?void 0:null===(t=r.tagItems)||void 0===t?void 0:t.map(e=>(0,n.jsx)(i.default,{tag:e},e.name)))})]}),(0,n.jsxs)("h2",{className:"text-4xl text-center dark:text-gray-300",children:[(0,s.JA)("POST_TITLE_ICON")&&(0,n.jsx)(l.Z,{icon:null==r?void 0:r.pageIcon}),null==r?void 0:r.title]}),(0,n.jsx)("div",{className:"text-xl text-center",children:null==r?void 0:r.summary})]}),(null==r?void 0:r.type)&&(null==r||r.type,!0)&&(null==r?void 0:r.pageCover)&&(0,n.jsx)("div",{className:"w-full relative md:flex-shrink-0 overflow-hidden",children:(0,n.jsx)(a.Z,{alt:null==r?void 0:r.title,src:null==r?void 0:r.pageCover,className:"object-cover max-h-[60vh] w-full"})})]})}},65685:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(85893),a=r(41664),l=r.n(a);function s(e){let{selected:t,category:r,categoryCount:a}=e;return(0,n.jsx)(l(),{href:"/category/".concat(r),passHref:!0,className:(t?"bg-gray-600 text-white ":"dark:text-gray-400 text-gray-900 ")+"text-sm font-semibold hover:underline flex text-md items-center duration-300 cursor-pointer py-1 whitespace-nowrap",children:(0,n.jsxs)("div",{children:[r," ",a&&"(".concat(a,")")]})})}},14080:function(e,t,r){r.r(t);var n=r(85893),a=r(41664),l=r.n(a);t.default=e=>{let{tag:t,selected:r=!1}=e;return(0,n.jsx)(l(),{href:r?"/":"/tag/".concat(encodeURIComponent(t.name)),passHref:!0,className:"cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200\n        py-1 px-2 text-xs whitespace-nowrap dark:hover:text-white\n         ".concat(r?"text-white dark:text-gray-300 dark:hover:bg-gray-900":"text-gray-900 hover:shadow-xl dark:border-gray-400  dark:bg-gray-800"),children:(0,n.jsxs)("div",{className:" dark:text-gray-400",children:["#",t.name+(t.count?"(".concat(t.count,")"):"")," "]})},t)}}}]);