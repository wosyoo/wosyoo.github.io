"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11183,91251,9016,33427,43580],{27134:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(85893),a=t(69325),s=t(9008),l=t.n(s),c=t(67294);function i(e){let{priority:r,id:t,src:s,alt:i,placeholderSrc:u,className:d,width:f,height:h,title:x,onLoad:p,style:m}=e,g=(0,a.JA)("IMAGE_COMPRESS_WIDTH"),v=(0,a.JA)("IMG_LAZY_LOAD_PLACEHOLDER"),N=(0,c.useRef)(null),[j,b]=(0,c.useState)(u||v),w=e=>{"function"==typeof p&&p()},y=()=>{N.current&&(N.current.src!==u&&u?N.current.src=u:N.current.src=v)};(0,c.useEffect)(()=>{let e=o(s,g)||v,r=new Image;r.src=e,r.onload=()=>{b(e),w(e)},r.onerror=y;let t=new IntersectionObserver(r=>{r.forEach(r=>{if(r.isIntersecting){let n=r.target;n.src=e,t.unobserve(n)}})},{rootMargin:"50px 0px"});return N.current&&t.observe(N.current),()=>{N.current&&t.unobserve(N.current)}},[s,g]);let I={ref:N,src:j,alt:i,onLoad:()=>{},onError:y};return t&&(I.id=t),x&&(I.title=x),f&&"auto"!==f&&(I.width=f),h&&"auto"!==h&&(I.height=h),d&&(I.className=d),m&&(I.style=m),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{...I}),r&&(0,n.jsx)(l(),{children:(0,n.jsx)("link",{rel:"preload",as:"image",href:o(s,g)})})]})}let o=(e,r)=>{var t,n;if(!e)return null;let a=(null===(n=window)||void 0===n?void 0:null===(t=n.screen)||void 0===t?void 0:t.width)||r;return a>r?e:e.replace(/width=\d+/,"width=".concat(a)).replace(/w=\d+/,"w=".concat(a))}},91251:function(e,r,t){t.r(r);var n=t(85893),a=t(69325),s=t(78174),l=t(41664),c=t.n(l),i=t(11163),o=t(33427);r.default=e=>{let{post:r,className:t}=e,l=(0,i.useRouter)().asPath.split("?")[0]==="/"+r.slug,u=""!==r.pageIcon?r.pageIcon:(0,a.JA)("IMG_LAZY_LOAD_PLACEHOLDER");return u=-1!==r.pageIcon.indexOf("amazonaws.com")?r.pageIcon+"&width=88":r.pageIcon,(0,n.jsx)(c(),{href:null==r?void 0:r.href,target:(0,s.checkStartWithHttp)(r.slug)?"_blank":"_self",passHref:!0,children:(0,n.jsx)("div",{className:"".concat(t," h-full rounded-2xl p-4 dark:bg-neutral-800 cursor-pointer bg-white hover:bg-white dark:hover:bg-gray-800 ").concat(l?"bg-green-50 text-green-500":""),children:(0,n.jsxs)("div",{className:"stack-entry w-full flex space-x-3 select-none dark:text-neutral-200",children:[(0,a.JA)("POST_TITLE_ICON")&&(0,n.jsx)(o.default,{icon:u,size:"10",className:"text-6xl w-11 h-11 mx-1 my-0 flex-none"}),(0,n.jsxs)("div",{className:"stack-comment flex-auto",children:[(0,n.jsx)("p",{className:"title font-bold",children:r.title}),(0,n.jsx)("p",{className:"description font-normal",children:r.summary?r.summary:"暂无简介"})]})]})},r.id)})}},11183:function(e,r,t){t.r(r);var n=t(85893),a=t(69325),s=t(91251),l=t(9016),c=t(43580);r.default=e=>{let{page:r=1,posts:t=[],postCount:i}=e,o=Math.ceil(i/parseInt((0,a.JA)("POSTS_PER_PAGE",null,NOTION_CONFIG)));return t&&0!==t.length?(0,n.jsxs)("div",{className:"w-full justify-center",children:[(0,n.jsx)("div",{id:"posts-wrapper",children:null==t?void 0:t.map(e=>(0,n.jsx)(s.default,{post:e},e.id))}),(0,n.jsx)(c.default,{page:r,totalPage:o})]}):(0,n.jsx)(l.default,{})}},9016:function(e,r,t){t.r(r);var n=t(85893),a=t(93348);r.default=e=>{let{currentSearch:r}=e,{locale:t}=(0,a.O)();return(0,n.jsx)("div",{className:"flex w-full items-center justify-center min-h-screen mx-auto md:-mt-20",children:(0,n.jsxs)("p",{className:"text-gray-500 dark:text-gray-300",children:[t.COMMON.NO_RESULTS_FOUND,"  ",r&&(0,n.jsx)("div",{children:r})]})})}},33427:function(e,r,t){t.r(r);var n=t(85893),a=t(27134);r.default=e=>{let{icon:r}=e;return r?r.startsWith("http")||r.startsWith("data:")?(0,n.jsx)(a.Z,{src:r,className:"w-10 h-10 inline"}):(0,n.jsx)("span",{className:"mr-1 text-4xl",children:r}):(0,n.jsx)(n.Fragment,{})}},43580:function(e,r,t){t.r(r);var n=t(85893),a=t(41664),s=t.n(a),l=t(11163),c=t(93348);r.default=e=>{let{page:r,totalPage:t}=e,{locale:a}=(0,c.O)(),i=(0,l.useRouter)(),o=+r,u=i.asPath.replace(/\/page\/[1-9]\d*/,"").replace(/\/$/,"");return(0,n.jsxs)("div",{className:"my-10 flex justify-between font-medium text-black dark:text-gray-100 space-x-2",children:[(0,n.jsxs)(s(),{href:{pathname:2===o?"".concat(u,"/"):"".concat(u,"/page/").concat(o-1),query:i.query.s?{s:i.query.s}:{}},passHref:!0,rel:"prev",className:"".concat(1===o?"invisible":"block"," text-center w-full duration-200 px-4 py-2 hover:border-green-500 border-b-2 hover:font-bold"),children:["←",a.PAGINATION.PREV]}),(0,n.jsxs)(s(),{href:{pathname:"".concat(u,"/page/").concat(o+1),query:i.query.s?{s:i.query.s}:{}},passHref:!0,rel:"next",className:"".concat(+(o<t)?"block":"invisible"," text-center w-full duration-200 px-4 py-2 hover:border-green-500 border-b-2 hover:font-bold"),children:[a.PAGINATION.NEXT,"→"]})]})}}}]);