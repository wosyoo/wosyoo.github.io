"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13236],{27134:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(85893),s=r(69325),l=r(9008),c=r.n(l),a=r(67294);function i(e){let{priority:t,id:r,src:l,alt:i,placeholderSrc:d,className:u,width:x,height:h,title:m,onLoad:f,style:v}=e,g=(0,s.JA)("IMAGE_COMPRESS_WIDTH"),j=(0,s.JA)("IMG_LAZY_LOAD_PLACEHOLDER"),p=(0,a.useRef)(null),[w,b]=(0,a.useState)(d||j),N=e=>{"function"==typeof f&&f()},y=()=>{p.current&&(p.current.src!==d&&d?p.current.src=d:p.current.src=j)};(0,a.useEffect)(()=>{let e=o(l,g)||j,t=new Image;t.src=e,t.onload=()=>{b(e),N(e)},t.onerror=y;let r=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){let n=t.target;n.src=e,r.unobserve(n)}})},{rootMargin:"50px 0px"});return p.current&&r.observe(p.current),()=>{p.current&&r.unobserve(p.current)}},[l,g]);let E={ref:p,src:w,alt:i,onLoad:()=>{},onError:y};return r&&(E.id=r),m&&(E.title=m),x&&"auto"!==x&&(E.width=x),h&&"auto"!==h&&(E.height=h),u&&(E.className=u),v&&(E.style=v),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{...E}),t&&(0,n.jsx)(c(),{children:(0,n.jsx)("link",{rel:"preload",as:"image",href:o(l,g)})})]})}let o=(e,t)=>{var r,n;if(!e)return null;let s=(null===(n=window)||void 0===n?void 0:null===(r=n.screen)||void 0===r?void 0:r.width)||t;return s>t?e:e.replace(/width=\d+/,"width=".concat(s)).replace(/w=\d+/,"w=".concat(s))}},67968:function(e,t,r){var n=r(85893),s=r(27134);t.Z=e=>{let{icon:t}=e;return t?t.startsWith("http")||t.startsWith("data:")?(0,n.jsx)(s.Z,{src:t,className:"w-8 h-8 my-auto inline mr-1"}):(0,n.jsx)("span",{className:"mr-1",children:t}):(0,n.jsx)(n.Fragment,{})}},13236:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var n=r(85893),s=r(41664),l=r.n(s),c=r(67968),a=r(27134),i=r(69325);function o(e){let{post:t}=e;if(!t)return(0,n.jsx)(n.Fragment,{});let r=(null==t?void 0:t.pageCover)?t.pageCover:(0,i.JA)("HOME_BANNER_IMAGE");return(0,n.jsxs)("div",{id:"header",className:"w-full h-96 relative md:flex-shrink-0 z-10",children:[(0,n.jsx)(a.Z,{priority:!0,src:r,className:"w-full h-full object-cover object-center absolute top-0"}),(0,n.jsx)("header",{id:"article-header-cover",className:"bg-black bg-opacity-70 absolute top-0 w-full h-96 py-10 flex justify-center items-center ",children:(0,n.jsxs)("div",{className:"mt-10",children:[(0,n.jsx)("div",{className:"mb-3 flex justify-center",children:t.category&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l(),{href:"/category/".concat(t.category),passHref:!0,legacyBehavior:!0,children:(0,n.jsx)("div",{className:"cursor-pointer px-2 py-1 mb-2 border rounded-sm dark:border-white text-sm font-medium hover:underline duration-200 shadow-text-md text-white",children:t.category})})})}),(0,n.jsxs)("div",{className:"leading-snug font-bold xs:text-4xl sm:text-4xl md:text-5xl md:leading-snug text-4xl shadow-text-md flex justify-center text-center text-white",children:[(0,i.JA)("POST_TITLE_ICON")&&(0,n.jsx)(c.Z,{icon:t.pageIcon,className:"text-4xl mx-1"}),(0,n.jsx)("div",{className:"text-4xl mx-1",children:t.title})]})]})})]})}}}]);