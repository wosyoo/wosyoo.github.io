"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47503,15798],{27134:function(e,r,t){t.d(r,{Z:function(){return E}});var n=t(85893),l=t(69325),o=t(9008),a=t.n(o),c=t(67294);function E(e){let{priority:r,id:t,src:o,alt:E,placeholderSrc:i,className:u,width:_,height:T,title:d,onLoad:C,style:O}=e,M=(0,l.JA)("IMAGE_COMPRESS_WIDTH"),R=(0,l.JA)("IMG_LAZY_LOAD_PLACEHOLDER"),f=(0,c.useRef)(null),[h,v]=(0,c.useState)(i||R),N=e=>{"function"==typeof C&&C()},b=()=>{f.current&&(f.current.src!==i&&i?f.current.src=i:f.current.src=R)};(0,c.useEffect)(()=>{let e=s(o,M)||R,r=new Image;r.src=e,r.onload=()=>{v(e),N(e)},r.onerror=b;let t=new IntersectionObserver(r=>{r.forEach(r=>{if(r.isIntersecting){let n=r.target;n.src=e,t.unobserve(n)}})},{rootMargin:"50px 0px"});return f.current&&t.observe(f.current),()=>{f.current&&t.unobserve(f.current)}},[o,M]);let g={ref:f,src:h,alt:E,onLoad:()=>{},onError:b};return t&&(g.id=t),d&&(g.title=d),_&&"auto"!==_&&(g.width=_),T&&"auto"!==T&&(g.height=T),u&&(g.className=u),O&&(g.style=O),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{...g}),r&&(0,n.jsx)(a(),{children:(0,n.jsx)("link",{rel:"preload",as:"image",href:s(o,M)})})]})}let s=(e,r)=>{var t,n;if(!e)return null;let l=(null===(n=window)||void 0===n?void 0:null===(t=n.screen)||void 0===t?void 0:t.width)||r;return l>r?e:e.replace(/width=\d+/,"width=".concat(l)).replace(/w=\d+/,"w=".concat(l))}},47503:function(e,r,t){t.r(r);var n=t(85893),l=t(41664),o=t.n(l),a=t(15798),c=t(69325),E=t(27134);r.default=e=>{let{index:r,post:t,siteInfo:l}=e;return t&&!t.pageCoverThumbnail&&a.default.POST_LIST_COVER_DEFAULT&&(t.pageCoverThumbnail=null==l?void 0:l.pageCover),(0,n.jsx)("div",{className:"".concat(a.default.POST_LIST_COVER_HOVER_ENLARGE?" hover:scale-110 transition-all duration-150":""),children:(0,n.jsxs)("div",{className:"group flex flex-col space-y-2 justify-between  border dark:border-black bg-white dark:bg-hexo-black-gray",children:[(0,n.jsx)(o(),{href:"".concat((0,c.JA)("SUB_PATH",""),"/").concat(t.slug),passHref:!0,legacyBehavior:!0,children:(0,n.jsx)("div",{className:"overflow-hidden m-2",children:(0,n.jsx)(E.Z,{priority:1===r,src:null==t?void 0:t.pageCoverThumbnail,className:"h-auto aspect-square w-full object-cover object-center group-hover:scale-110 duration-500"})})}),(0,n.jsx)("div",{className:"text-center",children:t.title})]},t.id)})}},15798:function(e,r,t){t.r(r),r.default={COMMERCE_HOME_BANNER_ENABLE:!0,COMMERCE_TEXT_CENTER_TITLE:"Product Center",COMMERCE_TEXT_CENTER_DESCRIPTION:"The vision of NotionNext is to help you effortlessly and seamlessly build your own website, amplifying the value of your brand.",COMMERCE_TEXT_CENTER_CATEGORY_TITLE:"Product Categories",COMMERCE_TEXT_FOOTER_TITLE:"Contact US",COMMERCE_TEXT_FOOTER_MENU_1:"Product Center",COMMERCE_TEXT_FOOTER_MENU_2:"About US",COMMERCE_FOOTER_RIGHT_IMG_URL:null,COMMERCE_FOOTER_RIGHT_TEXT:null,COMMERCE_HOME_POSTS_COUNT:9,COMMERCE_CONTACT_WHATSAPP_SHOW:!0,COMMERCE_CONTACT_TELEGRAM_SHOW:!0}}}]);