"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[67427,54849,51521,18699,68632],{22468:function(e,t,l){var r=l(85893),i=l(67294);let a=e=>{let{collapseRef:t}=e,l=(0,i.useRef)(null),a=e.type||"vertical";(0,i.useImperativeHandle)(t,()=>({updateCollapseHeight:t=>{let{height:r,increase:i}=t;e.isOpen&&(l.current.style.height=l.current.scrollHeight,l.current.style.height="auto")}}));let n=e=>{let t=e.scrollHeight,l=e.scrollWidth;requestAnimationFrame(function(){switch(a){case"horizontal":e.style.width=l+"px",requestAnimationFrame(function(){e.style.width="0px"});break;case"vertical":e.style.height=t+"px",requestAnimationFrame(function(){e.style.height="0px"})}})},s=e=>{let t=e.scrollHeight,l=e.scrollWidth,r=0;switch(a){case"horizontal":e.style.width=l+"px",r=setTimeout(()=>{e.style.width="auto"},400);break;case"vertical":e.style.height=t+"px",r=setTimeout(()=>{e.style.height="auto"},400)}clearTimeout(r)};return(0,i.useEffect)(()=>{e.isOpen?s(l.current):n(l.current),(null==e?void 0:e.onHeightChange)&&e.onHeightChange({height:l.current.scrollHeight,increase:e.isOpen})},[e.isOpen]),(0,r.jsx)("div",{ref:l,style:"vertical"===a?{height:"0px",willChange:"height"}:{width:"0px",willChange:"width"},className:"".concat(e.className||""," overflow-hidden duration-200 "),children:e.children})};a.defaultProps={isOpen:!1},t.Z=a},27134:function(e,t,l){l.d(t,{Z:function(){return c}});var r=l(85893),i=l(69325),a=l(9008),n=l.n(a),s=l(67294);function c(e){let{priority:t,id:l,src:a,alt:c,placeholderSrc:_,className:E,width:d,height:u,title:f,onLoad:h,style:O}=e,g=(0,i.JA)("IMAGE_COMPRESS_WIDTH"),m=(0,i.JA)("IMG_LAZY_LOAD_PLACEHOLDER"),H=(0,s.useRef)(null),[T,C]=(0,s.useState)(_||m),A=e=>{"function"==typeof h&&h()},R=()=>{H.current&&(H.current.src!==_&&_?H.current.src=_:H.current.src=m)};(0,s.useEffect)(()=>{let e=o(a,g)||m,t=new Image;t.src=e,t.onload=()=>{C(e),A(e)},t.onerror=R;let l=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){let r=t.target;r.src=e,l.unobserve(r)}})},{rootMargin:"50px 0px"});return H.current&&l.observe(H.current),()=>{H.current&&l.unobserve(H.current)}},[a,g]);let p={ref:H,src:T,alt:c,onLoad:()=>{},onError:R};return l&&(p.id=l),f&&(p.title=f),d&&"auto"!==d&&(p.width=d),u&&"auto"!==u&&(p.height=u),E&&(p.className=E),O&&(p.style=O),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{...p}),t&&(0,r.jsx)(n(),{children:(0,r.jsx)("link",{rel:"preload",as:"image",href:o(a,g)})})]})}let o=(e,t)=>{var l,r;if(!e)return null;let i=(null===(r=window)||void 0===r?void 0:null===(l=r.screen)||void 0===l?void 0:l.width)||t;return i>t?e:e.replace(/width=\d+/,"width=".concat(i)).replace(/w=\d+/,"w=".concat(i))}},54849:function(e,t,l){l.r(t);var r=l(85893),i=l(69325),a=l(93348),n=l(41664),s=l.n(n),c=l(68632);t.default=e=>{let{postCount:t,categoryOptions:l,tagOptions:n}=e,{locale:o}=(0,a.O)(),_=(0,r.jsx)("div",{className:"text-center",children:t}),E=(0,r.jsx)("div",{className:"text-center",children:null==l?void 0:l.length}),d=(0,r.jsx)("div",{className:"text-center",children:null==n?void 0:n.length}),u=[{name:o.COMMON.ARTICLE,href:"/archive",slot:_,show:(0,i.JA)("HEO_MENU_ARCHIVE",null,c.default)},{name:o.COMMON.CATEGORY,href:"/category",slot:E,show:(0,i.JA)("HEO_MENU_CATEGORY",null,c.default)},{name:o.COMMON.TAGS,href:"/tag",slot:d,show:(0,i.JA)("HEO_MENU_TAG",null,c.default)}];return(0,r.jsx)("nav",{id:"nav",className:"dark:text-gray-200 w-full px-5",children:u.map((e,t)=>e.show?(0,r.jsx)("div",{className:"",children:(0,r.jsx)(s(),{title:e.href,href:e.href,target:null==e?void 0:e.target,className:"w-full flex items-center justify-between py-1 hover:scale-105 duration-200 transform dark:hover:text-indigo-400 hover:text-indigo-600 px-2 cursor-pointer",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{children:[e.name," :"]}),(0,r.jsx)("div",{className:"font-semibold",children:e.slot})]})})},t):null)})}},51521:function(e,t,l){l.r(t),l.d(t,{MenuItemCollapse:function(){return c}});var r=l(85893),i=l(22468),a=l(41664),n=l.n(a),s=l(67294);let c=e=>{var t;let{link:l}=e,[a,c]=(0,s.useState)(!1),o=(null==l?void 0:null===(t=l.subMenus)||void 0===t?void 0:t.length)>0,[_,E]=(0,s.useState)(!1);return l&&l.show?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"select-none w-full p-2 border dark:border-gray-600 rounded-lg text-left dark:bg-[#1e1e1e]",onClick:()=>{c(!a)},children:[!o&&(0,r.jsx)(n(),{href:null==l?void 0:l.href,target:null==l?void 0:l.target,className:"font-extralight  flex justify-between pl-2 pr-4 dark:text-gray-200 no-underline tracking-widest",children:(0,r.jsxs)("span",{className:" transition-all items-center duration-200",children:[(null==l?void 0:l.icon)&&(0,r.jsx)("i",{className:l.icon+" mr-4"}),null==l?void 0:l.name]})}),o&&(0,r.jsxs)("div",{onClick:o?()=>{E(!_)}:null,className:"font-extralight flex items-center justify-between pl-2 pr-4 cursor-pointer  dark:text-gray-200 no-underline tracking-widest",children:[(0,r.jsxs)("span",{className:"transition-all items-center duration-200",children:[(null==l?void 0:l.icon)&&(0,r.jsx)("i",{className:l.icon+" mr-4"}),null==l?void 0:l.name]}),(0,r.jsx)("i",{className:"select-none px-2 fas fa-chevron-left transition-all duration-200 ".concat(_?"-rotate-90":""," text-gray-400")})]})]}),o&&(0,r.jsx)(i.Z,{isOpen:_,className:"rounded-xl",children:l.subMenus.map((e,t)=>(0,r.jsx)("div",{className:"dark:bg-hexo-black-gray dark:text-gray-200 text-left px-3 justify-start bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200  py-3 pr-6",children:(0,r.jsx)(n(),{href:e.href,target:null==l?void 0:l.target,children:(0,r.jsxs)("span",{className:"text-sm ml-4 whitespace-nowrap",children:[(null==l?void 0:l.icon)&&(0,r.jsx)("i",{className:e.icon+" mr-2"})," ",e.title]})})},t))})]}):null}},18699:function(e,t,l){l.r(t),l.d(t,{MenuListSide:function(){return c}});var r=l(85893),i=l(69325),a=l(93348),n=l(68632),s=l(51521);let c=e=>{let{customNav:t,customMenu:l}=e,{locale:c}=(0,a.O)(),o=[{icon:"fas fa-archive",name:c.NAV.ARCHIVE,href:"/archive",show:(0,i.JA)("HEO_MENU_ARCHIVE",null,n.default)},{icon:"fas fa-search",name:c.NAV.SEARCH,href:"/search",show:(0,i.JA)("HEO_MENU_SEARCH",null,n.default)},{icon:"fas fa-folder",name:c.COMMON.CATEGORY,href:"/category",show:(0,i.JA)("HEO_MENU_CATEGORY",null,n.default)},{icon:"fas fa-tag",name:c.COMMON.TAGS,href:"/tag",show:(0,i.JA)("HEO_MENU_TAG",null,n.default)}];return(t&&(o=t.concat(o)),(0,i.JA)("CUSTOM_MENU")&&(o=l),o&&0!==o.length)?(0,r.jsx)("nav",{className:"flex-col space-y-1",children:null==o?void 0:o.map((e,t)=>(0,r.jsx)(s.MenuItemCollapse,{link:e},t))}):null}},67427:function(e,t,l){l.r(t);var r=l(85893),i=l(69325),a=l(27134),n=l(11163),s=l(54849),c=l(18699);t.default=e=>{let{siteInfo:t}=e,l=(0,n.useRouter)();return(0,r.jsxs)("div",{id:"side-bar",children:[(0,r.jsx)("div",{className:"h-52 w-full flex justify-center",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{onClick:()=>{l.push("/")},className:"justify-center items-center flex hover:rotate-45 py-6 hover:scale-105 dark:text-gray-100  transform duration-200 cursor-pointer",children:(0,r.jsx)(a.Z,{src:null==t?void 0:t.icon,className:"rounded-full",width:80,alt:(0,i.JA)("AUTHOR")})}),(0,r.jsx)(s.default,{...e})]})}),(0,r.jsx)(c.MenuListSide,{...e})]})}},68632:function(e,t,l){l.r(t),t.default={HEO_HOME_POST_TWO_COLS:!0,HEO_LOADING_COVER:!0,HEO_HOME_BANNER_ENABLE:!0,HEO_SITE_CREATE_TIME:"2021-09-21",HEO_NOTICE_BAR:[{title:"欢迎来到我的博客",url:"https://blog.tangly1024.com"},{title:"访问文档中心获取更多帮助",url:"https://docs.tangly1024.com"}],HEO_HERO_REVERSE:!1,HEO_HERO_BODY_REVERSE:!1,HEO_HERO_TITLE_1:"分享编程",HEO_HERO_TITLE_2:"与思维认知",HEO_HERO_TITLE_3:"TANGLY1024.COM",HEO_HERO_TITLE_4:"新版上线",HEO_HERO_TITLE_5:"NotionNext4.0 轻松定制主题",HEO_HERO_TITLE_LINK:"https://tangly1024.com",HEO_HERO_CATEGORY_1:{title:"必看精选",url:"/tag/必看精选"},HEO_HERO_CATEGORY_2:{title:"热门文章",url:"/tag/热门文章"},HEO_HERO_CATEGORY_3:{title:"实用教程",url:"/tag/实用教程"},HEO_HERO_RECOMMEND_POST_TAG:"推荐",HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME:!1,HEO_INFOCARD_GREETINGS:["你好！我是","\uD83D\uDD0D 分享与热心帮助","\uD83E\uDD1D 专修交互与设计","\uD83C\uDFC3 脚踏实地行动派","\uD83C\uDFE0 智能家居小能手","\uD83E\uDD16️ 数码科技爱好者","\uD83E\uDDF1 团队小组发动机"],HEO_INFO_CARD_URL1:"/about",HEO_INFO_CARD_ICON1:"fas fa-user",HEO_INFO_CARD_URL2:"https://github.com/tangly1024",HEO_INFO_CARD_ICON2:"fab fa-github",HEO_INFO_CARD_URL3:"https://www.tangly1024.com",HEO_INFO_CARD_TEXT3:"了解更多",HEO_GROUP_ICONS:[{title_1:"AfterEffect",img_1:"/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp",color_1:"#989bf8",title_2:"Sketch",img_2:"/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp",color_2:"#ffffff"},{title_1:"Docker",img_1:"/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp",color_1:"#57b6e6",title_2:"Photoshop",img_2:"/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp",color_2:"#4082c3"},{title_1:"FinalCutPro",img_1:"/images/heo/20233e777652412247dd57fd9b48cf997c01070702.webp",color_1:"#ffffff",title_2:"Python",img_2:"/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp",color_2:"#ffffff"},{title_1:"Swift",img_1:"/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp",color_1:"#eb6840",title_2:"Principle",img_2:"/images/heo/2023f76570d2770c8e84801f7e107cd911b5073202.webp",color_2:"#8f55ba"},{title_1:"illustrator",img_1:"/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp",color_1:"#f29e39",title_2:"CSS3",img_2:"/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp",color_2:"#2c51db"},{title_1:"JS",img_1:"/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp",color_1:"#f7cb4f",title_2:"HTML",img_2:"/images/heo/202372b4d760fd8a497d442140c295655426070302.webp",color_2:"#e9572b"},{title_1:"Git",img_1:"/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp",color_1:"#df5b40",title_2:"Rhino",img_2:"/images/heo/20231ca53fa0b09a3ff1df89acd7515e9516173302.webp",color_2:"#1f1f1f"}],HEO_SOCIAL_CARD:!0,HEO_SOCIAL_CARD_TITLE_1:"交流频道",HEO_SOCIAL_CARD_TITLE_2:"加入我们的社群讨论分享",HEO_SOCIAL_CARD_TITLE_3:"点击加入社群",HEO_SOCIAL_CARD_URL:"https://docs.tangly1024.com/article/how-to-question",HEO_MENU_INDEX:!0,HEO_MENU_CATEGORY:!0,HEO_MENU_TAG:!0,HEO_MENU_ARCHIVE:!0,HEO_MENU_SEARCH:!0,HEO_POST_LIST_COVER:!0,HEO_POST_LIST_COVER_HOVER_ENLARGE:!1,HEO_POST_LIST_COVER_DEFAULT:!0,HEO_POST_LIST_SUMMARY:!0,HEO_POST_LIST_PREVIEW:!1,HEO_POST_LIST_IMG_CROSSOVER:!0,HEO_ARTICLE_ADJACENT:!0,HEO_ARTICLE_COPYRIGHT:!0,HEO_ARTICLE_RECOMMEND:!0,HEO_WIDGET_LATEST_POSTS:!0,HEO_WIDGET_ANALYTICS:!1,HEO_WIDGET_TO_TOP:!0,HEO_WIDGET_TO_COMMENT:!0,HEO_WIDGET_DARK_MODE:!0,HEO_WIDGET_TOC:!0}}}]);