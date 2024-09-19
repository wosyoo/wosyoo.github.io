"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37221,63730,5434,47503,15798],{27134:function(e,r,t){t.d(r,{Z:function(){return c}});var n=t(85893),a=t(69325),o=t(9008),l=t.n(o),s=t(67294);function c(e){let{priority:r,id:t,src:o,alt:c,placeholderSrc:i,className:u,width:E,height:h,title:f,onLoad:_,style:b}=e,v=(0,a.JA)("IMAGE_COMPRESS_WIDTH"),T=(0,a.JA)("IMG_LAZY_LOAD_PLACEHOLDER"),p=(0,s.useRef)(null),[C,O]=(0,s.useState)(i||T),x=e=>{"function"==typeof _&&_()},g=()=>{p.current&&(p.current.src!==i&&i?p.current.src=i:p.current.src=T)};(0,s.useEffect)(()=>{let e=d(o,v)||T,r=new Image;r.src=e,r.onload=()=>{O(e),x(e)},r.onerror=g;let t=new IntersectionObserver(r=>{r.forEach(r=>{if(r.isIntersecting){let n=r.target;n.src=e,t.unobserve(n)}})},{rootMargin:"50px 0px"});return p.current&&t.observe(p.current),()=>{p.current&&t.unobserve(p.current)}},[o,v]);let m={ref:p,src:C,alt:c,onLoad:()=>{},onError:g};return t&&(m.id=t),f&&(m.title=f),E&&"auto"!==E&&(m.width=E),h&&"auto"!==h&&(m.height=h),u&&(m.className=u),b&&(m.style=b),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{...m}),r&&(0,n.jsx)(l(),{children:(0,n.jsx)("link",{rel:"preload",as:"image",href:d(o,v)})})]})}let d=(e,r)=>{var t,n;if(!e)return null;let a=(null===(n=window)||void 0===n?void 0:null===(t=n.screen)||void 0===t?void 0:t.width)||r;return a>r?e:e.replace(/width=\d+/,"width=".concat(a)).replace(/w=\d+/,"w=".concat(a))}},63730:function(e,r,t){t.r(r);var n=t(85893),a=t(93348);r.default=e=>{let{currentSearch:r}=e,{locale:t}=(0,a.O)();return(0,n.jsx)("div",{className:"flex w-full items-center justify-center min-h-screen mx-auto md:-mt-20",children:(0,n.jsxs)("div",{className:"text-gray-500 dark:text-gray-300",children:[t.COMMON.NO_MORE," ",r&&(0,n.jsx)("div",{children:r})]})})}},37221:function(e,r,t){t.r(r);var n=t(85893),a=t(69325),o=t(93348),l=t(63730),s=t(5434),c=t(47503);r.default=e=>{let{page:r=1,posts:t=[],postCount:d,siteInfo:i}=e,{NOTION_CONFIG:u}=(0,o.O)(),E=(0,a.JA)("POSTS_PER_PAGE",null,u),h=Math.ceil(d/E);return!t||0===t.length||r>h?(0,n.jsx)(l.default,{}):(0,n.jsxs)("div",{id:"container",className:"w-full",children:[(0,n.jsx)("div",{className:"py-4 gap-4 grid grid-cols-3",children:null==t?void 0:t.map(e=>(0,n.jsx)(c.default,{index:t.indexOf(e),post:e,siteInfo:i},e.id))}),d>=E&&(0,n.jsx)(s.default,{page:r,totalPage:h})]})}},5434:function(e,r,t){t.r(r);var n=t(85893),a=t(41664),o=t.n(a),l=t(11163);function s(e,r,t){return(0,n.jsx)(o(),{href:1===e?"".concat(t,"/"):"".concat(t,"/page/").concat(e),passHref:!0,className:(e+""==r+""?"font-bold bg-red-400 dark:bg-red-500 text-white ":"border-b duration-500 border-red-300 hover:border-red-400 ")+" border-white dark:border-red-700 dark:hover:border-red-400 cursor-pointer pb-0.5 w-6 text-center font-light hover:font-bold",children:e},e)}r.default=e=>{let{page:r,totalPage:t}=e,a=(0,l.useRouter)(),c=+r,d=r<t,i=a.asPath.split("?")[0].replace(/\/page\/[1-9]\d*/,"").replace(/\/$/,""),u=function(e,r,t,a){let o=[];if(a<=7)for(let t=1;t<=a;t++)o.push(s(t,r,e));else{o.push(s(1,r,e));let l=t-2;l<=1&&(l=2),l+5>a&&(l=a-5),l>2&&o.push((0,n.jsx)("div",{children:"... "},-1));for(let t=0;t<5;t++)l+t<a&&o.push(s(l+t,r,e));l+5<a&&o.push((0,n.jsx)("div",{children:"... "},-2)),o.push(s(a,r,e))}return o}(i,r,c,t);return(0,n.jsxs)("div",{className:"mt-10 mb-5  flex justify-center items-end font-medium text-black duration-500 dark:text-gray-300 py-3 space-x-2",children:[(0,n.jsx)(o(),{href:{pathname:2===c?"".concat(i,"/"):"".concat(i,"/page/").concat(c-1),query:a.query.s?{s:a.query.s}:{}},rel:"prev",className:"".concat(1===c?"invisible":"block"," pb-0.5 border-white dark:border-red-700 hover:border-red-400 dark:hover:border-red-400 w-6 text-center cursor-pointer duration-200  hover:font-bold"),children:(0,n.jsx)("i",{className:"fas fa-angle-left"})}),u,(0,n.jsx)(o(),{href:{pathname:"".concat(i,"/page/").concat(c+1),query:a.query.s?{s:a.query.s}:{}},rel:"next",className:"".concat(+d?"block":"invisible"," pb-0.5 border-b border-red-300 dark:border-red-700 hover:border-red-400 dark:hover:border-red-400 w-6 text-center cursor-pointer duration-500  hover:font-bold"),children:(0,n.jsx)("i",{className:"fas fa-angle-right"})})]})}},47503:function(e,r,t){t.r(r);var n=t(85893),a=t(41664),o=t.n(a),l=t(15798),s=t(69325),c=t(27134);r.default=e=>{let{index:r,post:t,siteInfo:a}=e;return t&&!t.pageCoverThumbnail&&l.default.POST_LIST_COVER_DEFAULT&&(t.pageCoverThumbnail=null==a?void 0:a.pageCover),(0,n.jsx)("div",{className:"".concat(l.default.POST_LIST_COVER_HOVER_ENLARGE?" hover:scale-110 transition-all duration-150":""),children:(0,n.jsxs)("div",{className:"group flex flex-col space-y-2 justify-between  border dark:border-black bg-white dark:bg-hexo-black-gray",children:[(0,n.jsx)(o(),{href:"".concat((0,s.JA)("SUB_PATH",""),"/").concat(t.slug),passHref:!0,legacyBehavior:!0,children:(0,n.jsx)("div",{className:"overflow-hidden m-2",children:(0,n.jsx)(c.Z,{priority:1===r,src:null==t?void 0:t.pageCoverThumbnail,className:"h-auto aspect-square w-full object-cover object-center group-hover:scale-110 duration-500"})})}),(0,n.jsx)("div",{className:"text-center",children:t.title})]},t.id)})}},15798:function(e,r,t){t.r(r),r.default={COMMERCE_HOME_BANNER_ENABLE:!0,COMMERCE_TEXT_CENTER_TITLE:"Product Center",COMMERCE_TEXT_CENTER_DESCRIPTION:"The vision of NotionNext is to help you effortlessly and seamlessly build your own website, amplifying the value of your brand.",COMMERCE_TEXT_CENTER_CATEGORY_TITLE:"Product Categories",COMMERCE_TEXT_FOOTER_TITLE:"Contact US",COMMERCE_TEXT_FOOTER_MENU_1:"Product Center",COMMERCE_TEXT_FOOTER_MENU_2:"About US",COMMERCE_FOOTER_RIGHT_IMG_URL:null,COMMERCE_FOOTER_RIGHT_TEXT:null,COMMERCE_HOME_POSTS_COUNT:9,COMMERCE_CONTACT_WHATSAPP_SHOW:!0,COMMERCE_CONTACT_TELEGRAM_SHOW:!0}}}]);