"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86211,86429,68020,3643,71641,20888,3854,83537,57696,1201,66478],{86429:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var a=r(85893),n=r(79035),s=r(69325),l=r(78174),i=r(5152),c=r.n(i),o=r(11163),d=r(67294),u=e=>{let{siteInfo:t}=e,r=(0,s.JA)("COMMENT_ARTALK_CSS"),n=(0,s.JA)("COMMENT_ARTALK_SERVER"),i=(0,s.JA)("LANG"),c=(0,s.JA)("TITLE");(0,d.useEffect)(()=>{o()},[]);let o=async()=>{var e,t;await (0,l.loadExternalResource)(r,"css"),null===(t=window)||void 0===t||null===(e=t.Artalk)||void 0===e||e.init({server:n,el:"#artalk",locale:i,site:c})};return(0,a.jsx)("div",{id:"artalk"})};let x=c()(()=>Promise.all([r.e(99322),r.e(16688),r.e(917),r.e(82477),r.e(48096)]).then(r.bind(r,48096)),{loadableGenerated:{webpack:()=>[48096]},ssr:!1}),m=c()(()=>r.e(2374).then(r.bind(r,2374)),{loadableGenerated:{webpack:()=>[2374]},ssr:!1}),h=c()(()=>r.e(26090).then(r.bind(r,26090)),{loadableGenerated:{webpack:()=>[26090]},ssr:!1}),f=c()(()=>r.e(5820).then(r.bind(r,5820)),{loadableGenerated:{webpack:()=>[5820]},ssr:!1}),N=c()(()=>r.e(70052).then(r.bind(r,70052)),{loadableGenerated:{webpack:()=>[70052]},ssr:!1}),g=c()(()=>r.e(90939).then(r.bind(r,90939)),{loadableGenerated:{webpack:()=>[90939]},ssr:!1}),E=c()(()=>Promise.all([r.e(25675),r.e(31176)]).then(r.bind(r,31176)),{loadableGenerated:{webpack:()=>[31176]},ssr:!1}),_=c()(()=>r.e(65445).then(r.bind(r,65445)),{loadableGenerated:{webpack:()=>[65445]},ssr:!1});var p=e=>{let{frontMatter:t,className:r}=e,i=(0,o.useRouter)(),[c,p]=(0,d.useState)(!1),T=(0,d.useRef)(null),j=(0,s.JA)("COMMENT_ARTALK_SERVER"),v=(0,s.JA)("COMMENT_TWIKOO_ENV_ID"),b=(0,s.JA)("COMMENT_WALINE_SERVER_URL"),y=(0,s.JA)("COMMENT_VALINE_APP_ID"),O=(0,s.JA)("COMMENT_GISCUS_REPO"),w=(0,s.JA)("COMMENT_CUSDIS_APP_ID"),A=(0,s.JA)("COMMENT_UTTERRANCES_REPO"),M=(0,s.JA)("COMMENT_GITALK_CLIENT_ID"),I=(0,s.JA)("COMMENT_WEBMENTION_ENABLE");return((0,d.useEffect)(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(p(!0),e.unobserve(t.target))})});return T.current&&e.observe(T.current),()=>{T.current&&e.unobserve(T.current)}},[t]),l.isBrowser&&("giscus"in i.query||"comment"===i.query.target)&&setTimeout(()=>{var e,t;let r=i.asPath.replace("?target=comment","");history.replaceState({},"",r),null===(t=document)||void 0===t||null===(e=t.getElementById("comment"))||void 0===e||e.scrollIntoView({block:"start",behavior:"smooth"})},1e3),t)?(0,l.isSearchEngineBot)()||(null==t?void 0:t.comment)==="Hide"?null:(0,a.jsxs)("div",{id:"comment",ref:T,className:"comment mt-5 text-gray-800 dark:text-gray-300 ".concat(r||""),children:[!c&&(0,a.jsxs)("div",{className:"text-center",children:["Loading...",(0,a.jsx)("i",{className:"fas fa-spinner animate-spin text-3xl "})]}),c&&(0,a.jsxs)(n.Z,{children:[j&&(0,a.jsx)("div",{children:(0,a.jsx)(u,{})},"Artalk"),v&&(0,a.jsx)("div",{children:(0,a.jsx)(h,{})},"Twikoo"),b&&(0,a.jsx)("div",{children:(0,a.jsx)(x,{})},"Waline"),y&&(0,a.jsx)("div",{name:"reply",children:(0,a.jsx)(_,{path:t.id})},"Valine"),O&&(0,a.jsx)("div",{children:(0,a.jsx)(g,{className:"px-2"})},"Giscus"),w&&(0,a.jsx)("div",{children:(0,a.jsx)(m,{frontMatter:t})},"Cusdis"),A&&(0,a.jsx)("div",{children:(0,a.jsx)(N,{issueTerm:t.id,className:"px-2"})},"Utterance"),M&&(0,a.jsx)("div",{children:(0,a.jsx)(f,{frontMatter:t})},"GitTalk"),I&&(0,a.jsx)("div",{children:(0,a.jsx)(E,{frontMatter:t,className:"px-2"})},"WebMention")]})]},null==t?void 0:t.id):(0,a.jsx)(a.Fragment,{children:"Loading..."})}},27134:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(85893),n=r(69325),s=r(9008),l=r.n(s),i=r(67294);function c(e){let{priority:t,id:r,src:s,alt:c,placeholderSrc:d,className:u,width:x,height:m,title:h,onLoad:f,style:N}=e,g=(0,n.JA)("IMAGE_COMPRESS_WIDTH"),E=(0,n.JA)("IMG_LAZY_LOAD_PLACEHOLDER"),_=(0,i.useRef)(null),[p,T]=(0,i.useState)(d||E),j=e=>{"function"==typeof f&&f()},v=()=>{_.current&&(_.current.src!==d&&d?_.current.src=d:_.current.src=E)};(0,i.useEffect)(()=>{let e=o(s,g)||E,t=new Image;t.src=e,t.onload=()=>{T(e),j(e)},t.onerror=v;let r=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){let a=t.target;a.src=e,r.unobserve(a)}})},{rootMargin:"50px 0px"});return _.current&&r.observe(_.current),()=>{_.current&&r.unobserve(_.current)}},[s,g]);let b={ref:_,src:p,alt:c,onLoad:()=>{},onError:v};return r&&(b.id=r),h&&(b.title=h),x&&"auto"!==x&&(b.width=x),m&&"auto"!==m&&(b.height=m),u&&(b.className=u),N&&(b.style=N),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{...b}),t&&(0,a.jsx)(l(),{children:(0,a.jsx)("link",{rel:"preload",as:"image",href:o(s,g)})})]})}let o=(e,t)=>{var r,a;if(!e)return null;let n=(null===(a=window)||void 0===a?void 0:null===(r=a.screen)||void 0===r?void 0:r.width)||t;return n>t?e:e.replace(/width=\d+/,"width=".concat(n)).replace(/w=\d+/,"w=".concat(n))}},67968:function(e,t,r){var a=r(85893),n=r(27134);t.Z=e=>{let{icon:t}=e;return t?t.startsWith("http")||t.startsWith("data:")?(0,a.jsx)(n.Z,{src:t,className:"w-8 h-8 my-auto inline mr-1"}):(0,a.jsx)("span",{className:"mr-1",children:t}):(0,a.jsx)(a.Fragment,{})}},68020:function(e,t,r){r.r(t);var a=r(85893),n=r(69325),s=r(5152);let l=r.n(s)()(()=>Promise.all([r.e(56249),r.e(40892)]).then(r.bind(r,40892)),{loadableGenerated:{webpack:()=>[40892]},ssr:!1});t.default=e=>{let{post:t}=e;return JSON.parse((0,n.JA)("POST_SHARE_BAR_ENABLE"))&&t&&(null==t?void 0:t.type)==="Post"?(0,a.jsx)("div",{className:"m-1 overflow-x-auto",children:(0,a.jsx)("div",{className:"flex w-full md:justify-end",children:(0,a.jsx)(l,{post:t})})}):(0,a.jsx)(a.Fragment,{})}},79035:function(e,t,r){var a=r(85893),n=r(67294),s=r(69325);t.Z=e=>{let{className:t,children:r}=e,[l,i]=(0,n.useState)(0),c=r.filter(e=>e);return 0===c.length?(0,a.jsx)(a.Fragment,{}):(0,a.jsxs)("div",{className:"mb-5 duration-200 ".concat(t),children:[!(1===c.length&&(0,s.JA)("COMMENT_HIDE_SINGLE_TAB"))&&(0,a.jsx)("ul",{className:"flex justify-center space-x-5 pb-4 dark:text-gray-400 text-gray-600 overflow-auto",children:c.map((e,t)=>(0,a.jsx)("li",{className:"".concat(l===t?"font-black border-b-2 border-red-600 text-red-600 animate__animated animate__jello":"font-extralight cursor-pointer"," text-sm font-sans"),onClick:()=>i(t),children:e.key},t))}),(0,a.jsx)("div",{children:c.map((e,t)=>(0,a.jsx)("section",{className:"".concat(l===t?"opacity-100 static h-auto":"opacity-0 absolute h-0 pointer-events-none overflow-hidden"),children:e},t))})]})}},3643:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var a=r(85893),n=r(69325);function s(e){let{orientation:t="vertical",sticky:r=!1,className:s}=e,l=(0,n.JA)("AD_WWADS_ID");return l?(0,a.jsx)("div",{"data-id":l,className:"wwads-cn \n            ".concat("vertical"===t?"wwads-vertical":"wwads-horizontal","\n            ").concat(r?"wwads-sticky":""," z-10 ").concat(s||"")}):null}},31761:function(e,t,r){function a(e,t){if(!e||!t)return e||"";let r=new Date(e).toLocaleDateString(t,{year:"numeric",month:"short",day:"numeric"});return"zh"===t.slice(0,2).toLowerCase()?r.replace("年","-").replace("月","-").replace("日",""):r}function n(e,t){let r=new Date(e),a={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};for(let e in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length))),a)RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?a[e]:("00"+a[e]).substr((""+a[e]).length)));return t.trim()}r.d(t,{Z:function(){return a},x:function(){return n}})},71641:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var a=r(85893),n=r(93348),s=r(41664),l=r.n(s),i=r(66478),c=r(69325);function o(e){let{author:t,url:r}=e,{locale:s}=(0,n.O)();return(0,c.JA)("NEXT_ARTICLE_COPYRIGHT",null,i.default)?(0,a.jsx)("section",{className:"dark:text-gray-300 mt-6",children:(0,a.jsxs)("ul",{className:"overflow-x-auto whitespace-nowrap text-sm dark:bg-gray-700 bg-gray-100 p-5 leading-8 border-l-2 border-blue-500",children:[(0,a.jsxs)("li",{children:[(0,a.jsxs)("strong",{className:"mr-2",children:[s.COMMON.AUTHOR,":"]}),(0,a.jsx)(l(),{href:"/about",className:"hover:underline",children:t})]}),(0,a.jsxs)("li",{children:[(0,a.jsxs)("strong",{className:"mr-2",children:[s.COMMON.URL,":"]}),(0,a.jsx)("a",{className:"hover:underline",href:r,children:r})]}),(0,a.jsxs)("li",{children:[(0,a.jsxs)("strong",{className:"mr-2",children:[s.COMMON.COPYRIGHT,":"]}),s.COMMON.COPYRIGHT_NOTICE]})]})}):(0,a.jsx)(a.Fragment,{})}},86211:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var a=r(85893),n=r(86429),s=r(27134),l=r(67968),i=r(31933),c=r(68020),o=r(3643),d=r(69325),u=r(93348),x=r(31761),m=r(41664),h=r.n(m),f=r(11163),N=r(66478),g=r(71641),E=r(20888),_=r(83537),p=r(57696),T=r(1201);function j(e){let{post:t,recommendPosts:r,prev:m,next:j}=e,v=(0,d.JA)("LINK")+(0,f.useRouter)().asPath,{locale:b}=(0,u.O)(),y=(0,d.JA)("NEXT_ARTICLE_INFO",null,N.default);return(0,a.jsx)("div",{className:"shadow md:hover:shadow-2xl overflow-x-auto flex-grow mx-auto w-screen md:w-full ",children:(0,a.jsxs)("div",{itemScope:!0,itemType:"https://schema.org/Movie",className:"overflow-y-hidden py-10 px-4 lg:pt-24 md:px-24  dark:border-gray-700 bg-white dark:bg-hexo-black-gray",children:[y&&(0,a.jsxs)("header",{"data-aos":"fade-down","data-aos-duration":"400","data-aos-once":"true","data-aos-anchor-placement":"top-bottom",children:[(0,d.JA)("NEXT_POST_HEADER_IMAGE_VISIBLE",null,N.default)&&(null==t?void 0:t.type)&&(null==t||t.type,!0)&&(null==t?void 0:t.pageCover)&&(0,a.jsx)("div",{className:"w-full relative md:flex-shrink-0 overflow-hidden",children:(0,a.jsx)(s.Z,{alt:t.title,src:null==t?void 0:t.pageCover,className:"object-center w-full"})}),(0,a.jsxs)("div",{className:" text-center font-bold text-3xl text-black dark:text-white font-serif pt-6",children:[(0,d.JA)("POST_TITLE_ICON")&&(0,a.jsx)(l.Z,{icon:t.pageIcon}),t.title]}),(0,a.jsxs)("section",{className:"mt-2 text-gray-500 dark:text-gray-400 font-light leading-7 text-sm",children:[(0,a.jsx)("div",{className:"flex flex-wrap justify-center",children:(null==t?void 0:t.type)!=="Page"&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h(),{href:"/archive#".concat((0,x.x)(null==t?void 0:t.publishDate,"yyyy-MM")),passHref:!0,legacyBehavior:!0,children:(0,a.jsxs)("div",{className:"pl-1 mr-2 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 border-b dark:border-gray-500 border-dashed",children:[(0,a.jsx)("i",{className:"far fa-calendar mr-1"})," ",null==t?void 0:t.publishDay]})}),(0,a.jsxs)("span",{className:"mr-2",children:[" ","| ",(0,a.jsx)("i",{className:"far fa-calendar-check mr-2"}),t.lastEditedDay," "]}),(0,a.jsxs)("div",{className:"hidden busuanzi_container_page_pv font-light mr-2",children:[(0,a.jsx)("i",{className:"mr-1 fas fa-eye"}),(0,a.jsx)("span",{className:"mr-2 busuanzi_value_page_pv"})]})]})}),(0,a.jsx)(T.default,{})]})]}),(0,a.jsxs)("article",{id:"article-wrapper",className:"mx-auto",children:[(0,a.jsx)(o.default,{className:"w-full",orientation:"horizontal"}),t&&(0,a.jsx)(i.default,{post:t}),(0,a.jsx)(o.default,{className:"w-full",orientation:"horizontal"})]}),y&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.default,{post:t}),(null==t?void 0:t.type)==="Post"&&(0,a.jsx)(g.default,{author:(0,d.JA)("AUTHOR"),url:v}),(null==t?void 0:t.type)==="Post"&&(0,a.jsx)(_.default,{currentPost:t,recommendPosts:r}),(0,a.jsxs)("section",{className:"flex justify-between",children:[t.category&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"cursor-pointer my-auto text-md mr-2 hover:text-black dark:hover:text-white border-b dark:text-gray-500 border-dashed",children:(0,a.jsx)(h(),{href:"/category/".concat(t.category),legacyBehavior:!0,children:(0,a.jsxs)("a",{children:[(0,a.jsx)("i",{className:"mr-1 far fa-folder-open"})," ",t.category]})})})}),(null==t?void 0:t.type)==="Post"&&(0,a.jsx)(a.Fragment,{children:t.tagItems&&(0,a.jsxs)("div",{className:"flex items-center flex-nowrap leading-8 p-1 py-4 overflow-x-auto",children:[(0,a.jsxs)("div",{className:"hidden md:block dark:text-gray-300 whitespace-nowrap",children:[b.COMMON.TAGS,":\xa0"]}),t.tagItems.map(e=>(0,a.jsx)(p.default,{tag:e},e.name))]})})]}),(null==t?void 0:t.type)==="Post"&&(0,a.jsx)(E.default,{prev:m,next:j})]}),(0,a.jsx)("div",{className:"duration-200 w-full dark:border-gray-700 bg-white dark:bg-hexo-black-gray",children:(0,a.jsx)(n.default,{frontMatter:t})})]})})}},20888:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var a=r(85893),n=r(41664),s=r.n(n);function l(e){let{prev:t,next:r}=e;return t&&r?(0,a.jsxs)("section",{className:"text-gray-800 border-t dark:text-gray-300 flex flex-wrap lg:flex-nowrap lg:space-x-10 justify-between py-2",children:[t&&(0,a.jsxs)(s(),{href:"/".concat(t.slug),passHref:!0,className:"text-sm py-3 text-gray-500 hover:underline cursor-pointer",children:[(0,a.jsx)("i",{className:"mr-1 fas fa-angle-double-left"}),t.title]}),r&&(0,a.jsxs)(s(),{href:"/".concat(r.slug),passHref:!0,className:"text-sm flex py-3 text-gray-500 hover:underline cursor-pointer",children:[r.title,(0,a.jsx)("i",{className:"ml-1 my-1 fas fa-angle-double-right"})]})]}):(0,a.jsx)(a.Fragment,{})}},83537:function(e,t,r){r.r(t);var a=r(85893),n=r(41664),s=r.n(n),l=r(93348),i=r(66478),c=r(69325);t.default=e=>{let{recommendPosts:t}=e,{locale:r}=(0,l.O)();return(0,c.JA)("NEXT_ARTICLE_RELATE_POSTS",null,i.default)&&t&&!(t.length<1)?(0,a.jsxs)("div",{className:"pt-2 border pl-4 py-2 my-4 dark:text-gray-300 ",children:[(0,a.jsxs)("div",{className:"mb-2 font-bold text-lg",children:[r.COMMON.RELATE_POSTS," :"]}),(0,a.jsx)("ul",{className:"font-light text-sm",children:t.map(e=>(0,a.jsx)("li",{className:"py-1",children:(0,a.jsx)(s(),{href:"/".concat(e.slug),className:"cursor-pointer hover:underline",children:e.title})},e.id))})]}):(0,a.jsx)(a.Fragment,{})}},57696:function(e,t,r){r.r(t);var a=r(85893),n=r(41664),s=r.n(n),l=r(93348);t.default=e=>{let{tag:t,selected:r}=e,{locale:n}=(0,l.O)();return t||n.COMMON.NOTAG,(0,a.jsx)(s(),{href:r?"/":"/tag/".concat(encodeURIComponent(t.name)),passHref:!0,legacyBehavior:!0,children:(0,a.jsx)("li",{className:"notion-".concat(t.color,"_background dark:bg-gray-700 list-none cursor-pointer rounded-md  \n        duration-200 mr-1 my-1 px-2 py-1 text-sm whitespace-nowrap \n         hover:bg-gray-200 dark:hover:bg-gray-800 "),children:(0,a.jsxs)("div",{className:"text-gray-600 dark:text-gray-300 dark:hover:text-white",children:[r&&(0,a.jsx)("i",{className:"fas fa-tag mr-1"})," ","".concat(t.name," ")," ",t.count?"(".concat(t.count,")"):""]})})})}},1201:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var a=r(85893),n=r(93348),s=r(67294);function l(){(0,s.useEffect)(()=>{!function(){var e,t;let r=function(e){if(!e)return 0;let t=0;try{t=(e=(e=(e=(e=e.replace(/(\r\n+|\s+|　+)/g,"龘")).replace(/[\x00-\xff]/g,"m")).replace(/m+/g,"*")).replace(/龘+/g,"")).length}catch(e){}return t}((t=null===(e=document.getElementById("notion-article"))||void 0===e?void 0:e.innerHTML)?t=t.replace(/<[^>]+>|&[^>]+;/g,"").trim():"");document.getElementById("wordCount").innerHTML=r,document.getElementById("readTime").innerHTML=Math.floor(r/400)+1,document.getElementById("wordCountWrapper").classList.remove("hidden")}()});let{locale:e}=(0,n.O)();return(0,a.jsxs)("div",{id:"wordCountWrapper",className:"flex justify-center my-auto font-light",children:[(0,a.jsx)("i",{className:"mr-1 fas fa-file-word my-auto"}),(0,a.jsxs)("span",{className:"hidden md:block",children:[e.COMMON.WORD_COUNT,"≈"]}),(0,a.jsx)("strong",{id:"wordCount",children:"0"})," \xa0|\xa0 ",(0,a.jsx)("i",{className:"mr-1 fas fa-clock my-auto"}),e.COMMON.READ_TIME," ",(0,a.jsx)("span",{className:"hidden md:block",children:"≈"})," ",(0,a.jsx)("strong",{id:"readTime",children:"0"})," ",e.COMMON.MINUTE]})}},66478:function(e,t,r){r.r(t),t.default={NEXT_HOME_BANNER:!0,NEXT_HOME_BANNER_STRINGS:["Hi，我是一个程序员","Hi，我是一个打工人","Hi，我是一个干饭人","欢迎来到我的博客\uD83C\uDF89"],NEXT_NAV_TYPE:"normal",NEXT_POST_LIST_COVER:!1,NEXT_POST_LIST_PREVIEW:!0,NEXT_POST_LIST_SUMMARY:!1,NEXT_POST_HEADER_IMAGE_VISIBLE:!1,NEXT_RIGHT_BAR:!0,NEXT_RIGHT_LATEST_POSTS:!0,NEXT_RIGHT_CATEGORY_LIST:!0,NEXT_RIGHT_TAG_LIST:!0,NEXT_RIGHT_AD:!1,NEXT_MENU_HOME:!0,NEXT_MENU_CATEGORY:!0,NEXT_MENU_TAG:!0,NEXT_MENU_ARCHIVE:!0,NEXT_MENU_SEARCH:!0,NEXT_WIDGET_TO_TOP:!0,NEXT_WIDGET_TO_BOTTOM:!1,NEXT_WIDGET_DARK_MODE:!1,NEXT_WIDGET_TOC:!0,NEXT_ARTICLE_RELATE_POSTS:!0,NEXT_ARTICLE_COPYRIGHT:!0,NEXT_ARTICLE_INFO:!0}}}]);