"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81011,15798],{27134:function(e,r,t){t.d(r,{Z:function(){return c}});var n=t(85893),l=t(69325),s=t(9008),o=t.n(s),a=t(67294);function c(e){let{priority:r,id:t,src:s,alt:c,placeholderSrc:u,className:E,width:d,height:_,title:C,onLoad:T,style:f}=e,O=(0,l.JA)("IMAGE_COMPRESS_WIDTH"),h=(0,l.JA)("IMG_LAZY_LOAD_PLACEHOLDER"),M=(0,a.useRef)(null),[R,v]=(0,a.useState)(u||h),x=e=>{"function"==typeof T&&T()},N=()=>{M.current&&(M.current.src!==u&&u?M.current.src=u:M.current.src=h)};(0,a.useEffect)(()=>{let e=i(s,O)||h,r=new Image;r.src=e,r.onload=()=>{v(e),x(e)},r.onerror=N;let t=new IntersectionObserver(r=>{r.forEach(r=>{if(r.isIntersecting){let n=r.target;n.src=e,t.unobserve(n)}})},{rootMargin:"50px 0px"});return M.current&&t.observe(M.current),()=>{M.current&&t.unobserve(M.current)}},[s,O]);let m={ref:M,src:R,alt:c,onLoad:()=>{},onError:N};return t&&(m.id=t),C&&(m.title=C),d&&"auto"!==d&&(m.width=d),_&&"auto"!==_&&(m.height=_),E&&(m.className=E),f&&(m.style=f),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{...m}),r&&(0,n.jsx)(o(),{children:(0,n.jsx)("link",{rel:"preload",as:"image",href:i(s,O)})})]})}let i=(e,r)=>{var t,n;if(!e)return null;let l=(null===(n=window)||void 0===n?void 0:null===(t=n.screen)||void 0===t?void 0:t.width)||r;return l>r?e:e.replace(/width=\d+/,"width=".concat(l)).replace(/w=\d+/,"w=".concat(l))}},81011:function(e,r,t){t.r(r),t.d(r,{default:function(){return u}});var n=t(85893),l=t(41664),s=t.n(l),o=t(15798),a=t(69325),c=t(93348),i=t(27134);function u(e){let{recommendPosts:r,siteInfo:t}=e,{locale:l}=(0,c.O)();return o.default.ARTICLE_RECOMMEND&&r&&0!==r.length?(0,n.jsxs)("div",{className:"pt-8",children:[(0,n.jsx)("div",{className:" mb-2 px-1 flex flex-nowrap justify-between",children:(0,n.jsxs)("div",{className:"dark:text-gray-300",children:[(0,n.jsx)("i",{className:"mr-2 fas fa-thumbs-up"}),l.COMMON.RELATE_POSTS]})}),(0,n.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:r.map(e=>{let r=(null==e?void 0:e.pageCoverThumbnail)?e.pageCoverThumbnail:null==t?void 0:t.pageCover;return(0,n.jsx)(s(),{title:e.title,href:"".concat((0,a.JA)("SUB_PATH",""),"/").concat(e.slug),passHref:!0,className:"flex h-40 cursor-pointer overflow-hidden",children:(0,n.jsxs)("div",{className:"h-full w-full relative group",children:[(0,n.jsx)("div",{className:"flex items-center justify-center w-full h-full duration-300 ",children:(0,n.jsx)("div",{className:"z-10 text-lg px-4 font-bold text-white text-center shadow-text select-none",children:e.title})}),(0,n.jsx)(i.Z,{src:r,className:"absolute top-0 w-full h-full object-cover object-center group-hover:scale-110 group-hover:brightness-50 transform duration-200"})]})},e.id)})})]}):(0,n.jsx)(n.Fragment,{})}},15798:function(e,r,t){t.r(r),r.default={COMMERCE_HOME_BANNER_ENABLE:!0,COMMERCE_TEXT_CENTER_TITLE:"Product Center",COMMERCE_TEXT_CENTER_DESCRIPTION:"The vision of NotionNext is to help you effortlessly and seamlessly build your own website, amplifying the value of your brand.",COMMERCE_TEXT_CENTER_CATEGORY_TITLE:"Product Categories",COMMERCE_TEXT_FOOTER_TITLE:"Contact US",COMMERCE_TEXT_FOOTER_MENU_1:"Product Center",COMMERCE_TEXT_FOOTER_MENU_2:"About US",COMMERCE_FOOTER_RIGHT_IMG_URL:null,COMMERCE_FOOTER_RIGHT_TEXT:null,COMMERCE_HOME_POSTS_COUNT:9,COMMERCE_CONTACT_WHATSAPP_SHOW:!0,COMMERCE_CONTACT_TELEGRAM_SHOW:!0}}}]);