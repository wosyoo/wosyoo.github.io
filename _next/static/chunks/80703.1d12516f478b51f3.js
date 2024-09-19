"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80703,65685,37165,68596,14329],{27134:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(85893),a=t(69325),s=t(9008),l=t.n(s),c=t(67294);function i(e){let{priority:r,id:t,src:s,alt:i,placeholderSrc:u,className:d,width:h,height:x,title:f,onLoad:g,style:p}=e,m=(0,a.JA)("IMAGE_COMPRESS_WIDTH"),v=(0,a.JA)("IMG_LAZY_LOAD_PLACEHOLDER"),y=(0,c.useRef)(null),[j,N]=(0,c.useState)(u||v),b=e=>{"function"==typeof g&&g()},w=()=>{y.current&&(y.current.src!==u&&u?y.current.src=u:y.current.src=v)};(0,c.useEffect)(()=>{let e=o(s,m)||v,r=new Image;r.src=e,r.onload=()=>{N(e),b(e)},r.onerror=w;let t=new IntersectionObserver(r=>{r.forEach(r=>{if(r.isIntersecting){let n=r.target;n.src=e,t.unobserve(n)}})},{rootMargin:"50px 0px"});return y.current&&t.observe(y.current),()=>{y.current&&t.unobserve(y.current)}},[s,m]);let E={ref:y,src:j,alt:i,onLoad:()=>{},onError:w};return t&&(E.id=t),f&&(E.title=f),h&&"auto"!==h&&(E.width=h),x&&"auto"!==x&&(E.height=x),d&&(E.className=d),p&&(E.style=p),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{...E}),r&&(0,n.jsx)(l(),{children:(0,n.jsx)("link",{rel:"preload",as:"image",href:o(s,m)})})]})}let o=(e,r)=>{var t,n;if(!e)return null;let a=(null===(n=window)||void 0===n?void 0:null===(t=n.screen)||void 0===t?void 0:t.width)||r;return a>r?e:e.replace(/width=\d+/,"width=".concat(a)).replace(/w=\d+/,"w=".concat(a))}},67968:function(e,r,t){var n=t(85893),a=t(27134);r.Z=e=>{let{icon:r}=e;return r?r.startsWith("http")||r.startsWith("data:")?(0,n.jsx)(a.Z,{src:r,className:"w-8 h-8 my-auto inline mr-1"}):(0,n.jsx)("span",{className:"mr-1",children:r}):(0,n.jsx)(n.Fragment,{})}},31761:function(e,r,t){function n(e,r){if(!e||!r)return e||"";let t=new Date(e).toLocaleDateString(r,{year:"numeric",month:"short",day:"numeric"});return"zh"===r.slice(0,2).toLowerCase()?t.replace("年","-").replace("月","-").replace("日",""):t}function a(e,r){let t=new Date(e),n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(let e in/(y+)/.test(r)&&(r=r.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),n)RegExp("("+e+")").test(r)&&(r=r.replace(RegExp.$1,1===RegExp.$1.length?n[e]:("00"+n[e]).substr((""+n[e]).length)));return r.trim()}t.d(r,{Z:function(){return n},x:function(){return a}})},65685:function(e,r,t){t.r(r),t.d(r,{default:function(){return l}});var n=t(85893),a=t(41664),s=t.n(a);function l(e){let{selected:r,category:t,categoryCount:a}=e;return(0,n.jsx)(s(),{href:"/category/".concat(t),passHref:!0,className:(r?"bg-gray-600 text-white ":"dark:text-gray-400 text-gray-900 ")+"text-sm font-semibold hover:underline flex text-md items-center duration-300 cursor-pointer py-1 whitespace-nowrap",children:(0,n.jsxs)("div",{children:[t," ",a&&"(".concat(a,")")]})})}},37165:function(e,r,t){t.r(r);var n=t(85893),a=t(93348),s=t(41664),l=t.n(s),c=t(11163);r.default=e=>{let{page:r,totalPage:t}=e,{locale:s}=(0,a.O)(),i=(0,c.useRouter)(),o=+r,u=i.asPath.split("?")[0].replace(/\/page\/[1-9]\d*/,"").replace(/\/$/,"");return(0,n.jsxs)("div",{className:"my-10 flex justify-between font-medium text-black dark:text-gray-100 space-x-2",children:[(0,n.jsxs)(l(),{href:{pathname:2===o?"".concat(u,"/"):"".concat(u,"/page/").concat(o-1),query:i.query.s?{s:i.query.s}:{}},passHref:!0,rel:"prev",className:"".concat(1===o?"invisible":"block"," text-center w-full duration-200 px-4 py-2 hover:border-gray-500 border-b-2 hover:font-bold"),children:["←",s.PAGINATION.PREV]}),(0,n.jsxs)(l(),{href:{pathname:"".concat(u,"/page/").concat(o+1),query:i.query.s?{s:i.query.s}:{}},passHref:!0,rel:"next",className:"".concat(+(o<t)?"block":"invisible"," text-center w-full duration-200 px-4 py-2 hover:border-gray-500 border-b-2 hover:font-bold"),children:[s.PAGINATION.NEXT,"→"]})]})}},68596:function(e,r,t){t.r(r);var n=t(85893),a=t(27134),s=t(67968),l=t(69325),c=t(93348),i=t(31761),o=t(41664),u=t.n(o),d=t(65685);r.default=e=>{let{post:r}=e,{siteInfo:t}=(0,c.O)(),o=(null==r?void 0:r.pageCoverThumbnail)||(null==t?void 0:t.pageCover);return(0,n.jsx)("div",{className:"mb-6 max-w-screen-3xl",children:(0,n.jsxs)("div",{className:"flex flex-col space-y-3",children:[(0,l.JA)("MAGZINE_POST_LIST_COVER")&&(0,n.jsx)(u(),{href:null==r?void 0:r.href,passHref:!0,className:"cursor-pointer hover:underline leading-tight text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400",children:(0,n.jsx)("div",{className:"w-full h-40 aspect-video overflow-hidden mb-2",children:(0,n.jsx)(a.Z,{src:o,style:o?{}:{height:"0px"},className:"w-full h-40 aspect-video object-cover"})})}),(0,l.JA)("MAGZINE_POST_LIST_CATEGORY")&&(0,n.jsx)(d.default,{category:r.category}),(0,n.jsx)(u(),{href:null==r?void 0:r.href,passHref:!0,className:"text-xl cursor-pointer hover:underline leading-tight text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400",children:(0,n.jsxs)("h2",{children:[(0,l.JA)("POST_TITLE_ICON")&&(0,n.jsx)(s.Z,{icon:r.pageIcon}),r.title]})}),(0,n.jsx)("div",{className:"text-sm",children:(0,i.x)(r.publishDate,"yyyy-MM")})]})},r.id)}},14329:function(e,r,t){t.r(r);var n=t(85893),a=t(93348);r.default=e=>{let{currentSearch:r}=e,{locale:t}=(0,a.O)();return(0,n.jsx)("div",{className:"flex w-full items-center justify-center min-h-screen mx-auto md:-mt-20",children:(0,n.jsxs)("p",{className:"text-gray-500 dark:text-gray-300",children:[t.COMMON.NO_RESULTS_FOUND," ",r&&(0,n.jsx)("div",{children:r})]})})}},80703:function(e,r,t){t.r(r);var n=t(85893),a=t(69325),s=t(93348),l=t(37165),c=t(68596),i=t(14329);r.default=e=>{let{page:r=1,posts:t=[],postCount:o}=e,{NOTION_CONFIG:u}=(0,s.O)(),d=(0,a.JA)("POSTS_PER_PAGE",null,u);return t&&0!==t.length?(0,n.jsxs)("div",{className:"w-full justify-center",children:[(0,n.jsx)("div",{id:"posts-wrapper",children:(0,n.jsx)("ul",{className:"grid grid-cols-1 lg:grid-cols-4 gap-4",children:null==t?void 0:t.map((e,r)=>(0,n.jsx)(c.default,{post:e},r))})}),(0,n.jsx)(l.default,{page:r,totalPage:Math.ceil(o/d)})]}):(0,n.jsx)(i.default,{})}}}]);