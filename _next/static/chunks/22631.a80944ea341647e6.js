"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22631,65685,14080],{27134:function(e,r,t){t.d(r,{Z:function(){return o}});var a=t(85893),s=t(69325),n=t(9008),l=t.n(n),c=t(67294);function o(e){let{priority:r,id:t,src:n,alt:o,placeholderSrc:d,className:u,width:h,height:x,title:f,onLoad:m,style:v}=e,g=(0,s.JA)("IMAGE_COMPRESS_WIDTH"),p=(0,s.JA)("IMG_LAZY_LOAD_PLACEHOLDER"),j=(0,c.useRef)(null),[y,N]=(0,c.useState)(d||p),w=e=>{"function"==typeof m&&m()},b=()=>{j.current&&(j.current.src!==d&&d?j.current.src=d:j.current.src=p)};(0,c.useEffect)(()=>{let e=i(n,g)||p,r=new Image;r.src=e,r.onload=()=>{N(e),w(e)},r.onerror=b;let t=new IntersectionObserver(r=>{r.forEach(r=>{if(r.isIntersecting){let a=r.target;a.src=e,t.unobserve(a)}})},{rootMargin:"50px 0px"});return j.current&&t.observe(j.current),()=>{j.current&&t.unobserve(j.current)}},[n,g]);let _={ref:j,src:y,alt:o,onLoad:()=>{},onError:b};return t&&(_.id=t),f&&(_.title=f),h&&"auto"!==h&&(_.width=h),x&&"auto"!==x&&(_.height=x),u&&(_.className=u),v&&(_.style=v),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{..._}),r&&(0,a.jsx)(l(),{children:(0,a.jsx)("link",{rel:"preload",as:"image",href:i(n,g)})})]})}let i=(e,r)=>{var t,a;if(!e)return null;let s=(null===(a=window)||void 0===a?void 0:null===(t=a.screen)||void 0===t?void 0:t.width)||r;return s>r?e:e.replace(/width=\d+/,"width=".concat(s)).replace(/w=\d+/,"w=".concat(s))}},67968:function(e,r,t){var a=t(85893),s=t(27134);r.Z=e=>{let{icon:r}=e;return r?r.startsWith("http")||r.startsWith("data:")?(0,a.jsx)(s.Z,{src:r,className:"w-8 h-8 my-auto inline mr-1"}):(0,a.jsx)("span",{className:"mr-1",children:r}):(0,a.jsx)(a.Fragment,{})}},65685:function(e,r,t){t.r(r),t.d(r,{default:function(){return l}});var a=t(85893),s=t(41664),n=t.n(s);function l(e){let{selected:r,category:t,categoryCount:s}=e;return(0,a.jsx)(n(),{href:"/category/".concat(t),passHref:!0,className:(r?"bg-gray-600 text-white ":"dark:text-gray-400 text-gray-900 ")+"text-sm font-semibold hover:underline flex text-md items-center duration-300 cursor-pointer py-1 whitespace-nowrap",children:(0,a.jsxs)("div",{children:[t," ",s&&"(".concat(s,")")]})})}},22631:function(e,r,t){t.r(r);var a=t(85893),s=t(27134),n=t(67968),l=t(31933),c=t(69325),o=t(93348),i=t(41664),d=t.n(i),u=t(65685),h=t(14080);r.default=e=>{var r,t;let{post:i,showSummary:x}=e,f=(0,c.JA)("MAGZINE_POST_LIST_PREVIEW")&&i.blockMap,{locale:m}=(0,o.O)();return(0,a.jsx)("div",{"data-aos":"fade-up","data-aos-duration":"300","data-aos-once":"false","data-aos-anchor-placement":"top-bottom",className:"mb-6 max-w-screen-3xl ",children:(0,a.jsxs)("div",{className:"flex flex-col w-full",children:[(0,c.JA)("MAGZINE_POST_LIST_COVER")&&(0,a.jsx)(d(),{href:null==i?void 0:i.href,passHref:!0,className:"cursor-pointer hover:underline text-4xl leading-tight  dark:text-gray-300  dark:hover:text-gray-400",children:(0,a.jsx)("div",{className:"w-full max-h-80 object-cover overflow-hidden mb-2",children:(0,a.jsx)(s.Z,{src:i.pageCoverThumbnail,style:i.pageCoverThumbnail?{}:{height:"0px"},className:"w-full max-h-80 object-cover hover:scale-125 duration-150"})})}),(0,a.jsxs)("div",{className:"flex py-2 mr-2 items-center",children:[(0,c.JA)("MAGZINE_POST_LIST_CATEGORY")&&(0,a.jsx)(u.default,{category:i.category}),(0,a.jsx)("div",{className:"flex items-center justify-start flex-wrap space-x-3 text-gray-400",children:(0,c.JA)("MAGZINE_POST_LIST_TAG")&&(null==i?void 0:null===(r=i.tagItems)||void 0===r?void 0:r.map(e=>(0,a.jsx)(h.default,{tag:e},e.name)))})]}),(0,a.jsx)(d(),{href:null==i?void 0:i.href,passHref:!0,className:"cursor-pointer hover:underline leading-tight dark:text-gray-300  dark:hover:text-gray-400",children:(0,a.jsxs)("h2",{className:"text-4xl",children:[(0,c.JA)("POST_TITLE_ICON")&&(0,a.jsx)(n.Z,{icon:i.pageIcon}),i.title]})}),(0,a.jsx)("div",{className:"flex"}),(!f||x)&&(0,a.jsx)("main",{className:"my-4 text-gray-900 dark:text-gray-300 text-lg  leading-7",children:i.summary}),f&&(0,a.jsxs)("div",{className:"overflow-ellipsis truncate",children:[(0,a.jsx)(l.default,{post:i}),(0,a.jsx)("div",{className:"pointer-events-none border-t pt-8 border-dashed",children:(0,a.jsx)("div",{className:"w-full justify-start flex",children:(0,a.jsxs)(d(),{href:null==i?void 0:i.href,passHref:!0,className:"hover:bg-opacity-100 hover:scale-105 duration-200 pointer-events-auto transform font-bold text-gray-500 cursor-pointer",children:[m.COMMON.ARTICLE_DETAIL,(0,a.jsx)("i",{className:"ml-1 fas fa-angle-right"})]})})})]}),(0,a.jsx)("div",{className:"text-sm py-1",children:null===(t=i.date)||void 0===t?void 0:t.start_date})]})},i.id)}},14080:function(e,r,t){t.r(r);var a=t(85893),s=t(41664),n=t.n(s);r.default=e=>{let{tag:r,selected:t=!1}=e;return(0,a.jsx)(n(),{href:t?"/":"/tag/".concat(encodeURIComponent(r.name)),passHref:!0,className:"cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200\n        py-1 px-2 text-xs whitespace-nowrap dark:hover:text-white\n         ".concat(t?"text-white dark:text-gray-300 dark:hover:bg-gray-900":"text-gray-900 hover:shadow-xl dark:border-gray-400  dark:bg-gray-800"),children:(0,a.jsxs)("div",{className:" dark:text-gray-400",children:["#",r.name+(r.count?"(".concat(r.count,")"):"")," "]})},r)}}}]);