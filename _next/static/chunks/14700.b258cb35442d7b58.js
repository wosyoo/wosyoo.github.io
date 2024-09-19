"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14700,63730,47503,15798],{27134:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(85893),l=t(69325),a=t(9008),s=t.n(a),c=t(67294);function i(e){let{priority:r,id:t,src:a,alt:i,placeholderSrc:u,className:d,width:E,height:_,title:O,onLoad:T,style:C}=e,f=(0,l.JA)("IMAGE_COMPRESS_WIDTH"),h=(0,l.JA)("IMG_LAZY_LOAD_PLACEHOLDER"),M=(0,c.useRef)(null),[v,R]=(0,c.useState)(u||h),x=e=>{"function"==typeof T&&T()},m=()=>{M.current&&(M.current.src!==u&&u?M.current.src=u:M.current.src=h)};(0,c.useEffect)(()=>{let e=o(a,f)||h,r=new Image;r.src=e,r.onload=()=>{R(e),x(e)},r.onerror=m;let t=new IntersectionObserver(r=>{r.forEach(r=>{if(r.isIntersecting){let n=r.target;n.src=e,t.unobserve(n)}})},{rootMargin:"50px 0px"});return M.current&&t.observe(M.current),()=>{M.current&&t.unobserve(M.current)}},[a,f]);let N={ref:M,src:v,alt:i,onLoad:()=>{},onError:m};return t&&(N.id=t),O&&(N.title=O),E&&"auto"!==E&&(N.width=E),_&&"auto"!==_&&(N.height=_),d&&(N.className=d),C&&(N.style=C),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{...N}),r&&(0,n.jsx)(s(),{children:(0,n.jsx)("link",{rel:"preload",as:"image",href:o(a,f)})})]})}let o=(e,r)=>{var t,n;if(!e)return null;let l=(null===(n=window)||void 0===n?void 0:null===(t=n.screen)||void 0===t?void 0:t.width)||r;return l>r?e:e.replace(/width=\d+/,"width=".concat(l)).replace(/w=\d+/,"w=".concat(l))}},63730:function(e,r,t){t.r(r);var n=t(85893),l=t(93348);r.default=e=>{let{currentSearch:r}=e,{locale:t}=(0,l.O)();return(0,n.jsx)("div",{className:"flex w-full items-center justify-center min-h-screen mx-auto md:-mt-20",children:(0,n.jsxs)("div",{className:"text-gray-500 dark:text-gray-300",children:[t.COMMON.NO_MORE," ",r&&(0,n.jsx)("div",{children:r})]})})}},14700:function(e,r,t){t.r(r);var n=t(85893),l=t(69325),a=t(93348),s=t(78174),c=t(67294),i=t(15798),o=t(63730),u=t(47503);r.default=e=>{let{posts:r=[],currentSearch:t,showSummary:d=i.default.POST_LIST_SUMMARY,siteInfo:E}=e,{NOTION_CONFIG:_}=(0,a.O)(),O=(0,l.JA)("POSTS_PER_PAGE",null,_),[T,C]=(0,c.useState)(1),f=(0,s.getListByPage)(r,T,O),h=!1;r&&(h=T*O<r.length);let M=()=>{h&&C(T+1)},v=()=>{requestAnimationFrame(()=>{window.scrollY+window.outerHeight>(R&&R.current?R.current.clientHeight:0)+100&&M()})};(0,c.useEffect)(()=>(window.addEventListener("scroll",v),()=>{window.removeEventListener("scroll",v)}));let R=(0,c.useRef)(null),{locale:x}=(0,a.O)();return f&&0!==f.length?(0,n.jsxs)("div",{id:"container",ref:R,className:"w-full",children:[(0,n.jsx)("div",{className:"space-y-6 px-2",children:f.map(e=>(0,n.jsx)(u.default,{post:e,showSummary:d,siteInfo:E},e.id))}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{onClick:()=>{M()},className:"w-full my-4 py-4 text-center cursor-pointer rounded-xl dark:text-gray-200",children:[" ",h?x.COMMON.MORE:"".concat(x.COMMON.NO_MORE)," "]})})]}):(0,n.jsx)(o.default,{currentSearch:t})}},47503:function(e,r,t){t.r(r);var n=t(85893),l=t(41664),a=t.n(l),s=t(15798),c=t(69325),i=t(27134);r.default=e=>{let{index:r,post:t,siteInfo:l}=e;return t&&!t.pageCoverThumbnail&&s.default.POST_LIST_COVER_DEFAULT&&(t.pageCoverThumbnail=null==l?void 0:l.pageCover),(0,n.jsx)("div",{className:"".concat(s.default.POST_LIST_COVER_HOVER_ENLARGE?" hover:scale-110 transition-all duration-150":""),children:(0,n.jsxs)("div",{className:"group flex flex-col space-y-2 justify-between  border dark:border-black bg-white dark:bg-hexo-black-gray",children:[(0,n.jsx)(a(),{href:"".concat((0,c.JA)("SUB_PATH",""),"/").concat(t.slug),passHref:!0,legacyBehavior:!0,children:(0,n.jsx)("div",{className:"overflow-hidden m-2",children:(0,n.jsx)(i.Z,{priority:1===r,src:null==t?void 0:t.pageCoverThumbnail,className:"h-auto aspect-square w-full object-cover object-center group-hover:scale-110 duration-500"})})}),(0,n.jsx)("div",{className:"text-center",children:t.title})]},t.id)})}},15798:function(e,r,t){t.r(r),r.default={COMMERCE_HOME_BANNER_ENABLE:!0,COMMERCE_TEXT_CENTER_TITLE:"Product Center",COMMERCE_TEXT_CENTER_DESCRIPTION:"The vision of NotionNext is to help you effortlessly and seamlessly build your own website, amplifying the value of your brand.",COMMERCE_TEXT_CENTER_CATEGORY_TITLE:"Product Categories",COMMERCE_TEXT_FOOTER_TITLE:"Contact US",COMMERCE_TEXT_FOOTER_MENU_1:"Product Center",COMMERCE_TEXT_FOOTER_MENU_2:"About US",COMMERCE_FOOTER_RIGHT_IMG_URL:null,COMMERCE_FOOTER_RIGHT_TEXT:null,COMMERCE_HOME_POSTS_COUNT:9,COMMERCE_CONTACT_WHATSAPP_SHOW:!0,COMMERCE_CONTACT_TELEGRAM_SHOW:!0}}}]);