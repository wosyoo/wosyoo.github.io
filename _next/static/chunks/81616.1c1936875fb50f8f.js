"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81616,86429,68020,89837,20682,53369,68849,98971,74077,98318,71529,97517,88836,1347,53145,68275,90865,16967,5113,18119],{86429:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var l=a(85893),r=a(79035),s=a(69325),n=a(78174),i=a(5152),o=a.n(i),d=a(11163),c=a(67294),u=e=>{let{siteInfo:t}=e,a=(0,s.JA)("COMMENT_ARTALK_CSS"),r=(0,s.JA)("COMMENT_ARTALK_SERVER"),i=(0,s.JA)("LANG"),o=(0,s.JA)("TITLE");(0,c.useEffect)(()=>{d()},[]);let d=async()=>{var e,t;await (0,n.loadExternalResource)(a,"css"),null===(t=window)||void 0===t||null===(e=t.Artalk)||void 0===e||e.init({server:r,el:"#artalk",locale:i,site:o})};return(0,l.jsx)("div",{id:"artalk"})};let x=o()(()=>Promise.all([a.e(99322),a.e(16688),a.e(917),a.e(82477),a.e(48096)]).then(a.bind(a,48096)),{loadableGenerated:{webpack:()=>[48096]},ssr:!1}),m=o()(()=>a.e(2374).then(a.bind(a,2374)),{loadableGenerated:{webpack:()=>[2374]},ssr:!1}),f=o()(()=>a.e(26090).then(a.bind(a,26090)),{loadableGenerated:{webpack:()=>[26090]},ssr:!1}),h=o()(()=>a.e(5820).then(a.bind(a,5820)),{loadableGenerated:{webpack:()=>[5820]},ssr:!1}),v=o()(()=>a.e(70052).then(a.bind(a,70052)),{loadableGenerated:{webpack:()=>[70052]},ssr:!1}),p=o()(()=>a.e(90939).then(a.bind(a,90939)),{loadableGenerated:{webpack:()=>[90939]},ssr:!1}),g=o()(()=>Promise.all([a.e(25675),a.e(31176)]).then(a.bind(a,31176)),{loadableGenerated:{webpack:()=>[31176]},ssr:!1}),j=o()(()=>a.e(65445).then(a.bind(a,65445)),{loadableGenerated:{webpack:()=>[65445]},ssr:!1});var b=e=>{let{frontMatter:t,className:a}=e,i=(0,d.useRouter)(),[o,b]=(0,c.useState)(!1),w=(0,c.useRef)(null),N=(0,s.JA)("COMMENT_ARTALK_SERVER"),y=(0,s.JA)("COMMENT_TWIKOO_ENV_ID"),k=(0,s.JA)("COMMENT_WALINE_SERVER_URL"),C=(0,s.JA)("COMMENT_VALINE_APP_ID"),E=(0,s.JA)("COMMENT_GISCUS_REPO"),_=(0,s.JA)("COMMENT_CUSDIS_APP_ID"),M=(0,s.JA)("COMMENT_UTTERRANCES_REPO"),O=(0,s.JA)("COMMENT_GITALK_CLIENT_ID"),A=(0,s.JA)("COMMENT_WEBMENTION_ENABLE");return((0,c.useEffect)(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(b(!0),e.unobserve(t.target))})});return w.current&&e.observe(w.current),()=>{w.current&&e.unobserve(w.current)}},[t]),n.isBrowser&&("giscus"in i.query||"comment"===i.query.target)&&setTimeout(()=>{var e,t;let a=i.asPath.replace("?target=comment","");history.replaceState({},"",a),null===(t=document)||void 0===t||null===(e=t.getElementById("comment"))||void 0===e||e.scrollIntoView({block:"start",behavior:"smooth"})},1e3),t)?(0,n.isSearchEngineBot)()||(null==t?void 0:t.comment)==="Hide"?null:(0,l.jsxs)("div",{id:"comment",ref:w,className:"comment mt-5 text-gray-800 dark:text-gray-300 ".concat(a||""),children:[!o&&(0,l.jsxs)("div",{className:"text-center",children:["Loading...",(0,l.jsx)("i",{className:"fas fa-spinner animate-spin text-3xl "})]}),o&&(0,l.jsxs)(r.Z,{children:[N&&(0,l.jsx)("div",{children:(0,l.jsx)(u,{})},"Artalk"),y&&(0,l.jsx)("div",{children:(0,l.jsx)(f,{})},"Twikoo"),k&&(0,l.jsx)("div",{children:(0,l.jsx)(x,{})},"Waline"),C&&(0,l.jsx)("div",{name:"reply",children:(0,l.jsx)(j,{path:t.id})},"Valine"),E&&(0,l.jsx)("div",{children:(0,l.jsx)(p,{className:"px-2"})},"Giscus"),_&&(0,l.jsx)("div",{children:(0,l.jsx)(m,{frontMatter:t})},"Cusdis"),M&&(0,l.jsx)("div",{children:(0,l.jsx)(v,{issueTerm:t.id,className:"px-2"})},"Utterance"),O&&(0,l.jsx)("div",{children:(0,l.jsx)(h,{frontMatter:t})},"GitTalk"),A&&(0,l.jsx)("div",{children:(0,l.jsx)(g,{frontMatter:t,className:"px-2"})},"WebMention")]})]},null==t?void 0:t.id):(0,l.jsx)(l.Fragment,{children:"Loading..."})}},67968:function(e,t,a){var l=a(85893),r=a(27134);t.Z=e=>{let{icon:t}=e;return t?t.startsWith("http")||t.startsWith("data:")?(0,l.jsx)(r.Z,{src:t,className:"w-8 h-8 my-auto inline mr-1"}):(0,l.jsx)("span",{className:"mr-1",children:t}):(0,l.jsx)(l.Fragment,{})}},68020:function(e,t,a){a.r(t);var l=a(85893),r=a(69325),s=a(5152);let n=a.n(s)()(()=>Promise.all([a.e(56249),a.e(40892)]).then(a.bind(a,40892)),{loadableGenerated:{webpack:()=>[40892]},ssr:!1});t.default=e=>{let{post:t}=e;return JSON.parse((0,r.JA)("POST_SHARE_BAR_ENABLE"))&&t&&(null==t?void 0:t.type)==="Post"?(0,l.jsx)("div",{className:"m-1 overflow-x-auto",children:(0,l.jsx)("div",{className:"flex w-full md:justify-end",children:(0,l.jsx)(n,{post:t})})}):(0,l.jsx)(l.Fragment,{})}},79035:function(e,t,a){var l=a(85893),r=a(67294),s=a(69325);t.Z=e=>{let{className:t,children:a}=e,[n,i]=(0,r.useState)(0),o=a.filter(e=>e);return 0===o.length?(0,l.jsx)(l.Fragment,{}):(0,l.jsxs)("div",{className:"mb-5 duration-200 ".concat(t),children:[!(1===o.length&&(0,s.JA)("COMMENT_HIDE_SINGLE_TAB"))&&(0,l.jsx)("ul",{className:"flex justify-center space-x-5 pb-4 dark:text-gray-400 text-gray-600 overflow-auto",children:o.map((e,t)=>(0,l.jsx)("li",{className:"".concat(n===t?"font-black border-b-2 border-red-600 text-red-600 animate__animated animate__jello":"font-extralight cursor-pointer"," text-sm font-sans"),onClick:()=>i(t),children:e.key},t))}),(0,l.jsx)("div",{children:o.map((e,t)=>(0,l.jsx)("section",{className:"".concat(n===t?"opacity-100 static h-auto":"opacity-0 absolute h-0 pointer-events-none overflow-hidden"),children:e},t))})]})}},53040:function(e,t,a){a.d(t,{f:function(){return r}});let{loadExternalResource:l}=a(78174),r=async()=>{await l("/css/wow/animate.css","css"),await l("https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js","js");let e=window.WOW;e&&new e().init()}},89837:function(e,t,a){a.r(t);var l=a(85893),r=a(5152);let s=a.n(r)()(()=>Promise.resolve().then(a.bind(a,31933)),{loadableGenerated:{webpack:()=>[31933]}});t.default=e=>{let{notice:t,className:a}=e;return(null==t?void 0:t.blockMap)?(0,l.jsx)("div",{className:a,children:(0,l.jsx)("section",{id:"announcement-wrapper",className:"mb-10",children:t&&(0,l.jsx)("div",{id:"announcement-content",children:(0,l.jsx)(s,{post:t})})})}):null}},20682:function(e,t,a){a.r(t),a.d(t,{ArticleLock:function(){return n}});var l=a(85893),r=a(93348),s=a(67294);let n=e=>{let{validPassword:t}=e,{locale:a}=(0,r.O)(),n=()=>{let e=document.getElementById("password");if(!t(null==e?void 0:e.value)){let e=document.getElementById("tips");e&&(e.innerHTML="",e.innerHTML="<div class='text-red-500 animate__shakeX animate__animated'>".concat(a.COMMON.PASSWORD_ERROR,"</div>"))}},i=(0,s.useRef)(null);return(0,s.useEffect)(()=>{i.current.focus()},[]),(0,l.jsx)("div",{id:"container",className:"w-full flex justify-center items-center h-96 ",children:(0,l.jsxs)("div",{className:"text-center space-y-3",children:[(0,l.jsx)("div",{className:"font-bold",children:a.COMMON.ARTICLE_LOCK_TIPS}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("input",{id:"password",type:"password",onKeyDown:e=>{"Enter"===e.key&&n()},ref:i,className:"outline-none w-full text-sm pl-5 rounded-l transition focus:shadow-lg font-light leading-10 text-black dark:bg-gray-500 bg-gray-50"}),(0,l.jsx)("div",{onClick:n,className:"px-3 whitespace-nowrap cursor-pointer items-center justify-center py-2 rounded-r duration-300 bg-gray-300",children:(0,l.jsxs)("i",{className:"duration-200 cursor-pointer fas fa-key dark:text-black",children:["\xa0",a.COMMON.SUBMIT]})})]}),(0,l.jsx)("div",{id:"tips"})]})})}},53369:function(e,t,a){a.r(t),a.d(t,{default:function(){return n}});var l=a(85893),r=a(41664),s=a.n(r);function n(e){let{archiveTitle:t,archivePosts:a}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{id:t,className:"pt-16 pb-4 text-3xl dark:text-gray-300",children:t}),(0,l.jsx)("ul",{children:a[t].map(e=>{var t;return(0,l.jsx)("li",{className:"border-l-2 p-1 text-xs md:text-base items-center  hover:scale-x-105 hover:border-gray-500 dark:hover:border-gray-300 dark:border-gray-400 transform duration-500",children:(0,l.jsxs)("div",{id:null==e?void 0:e.publishDay,children:[(0,l.jsx)("span",{className:"text-gray-400",children:null===(t=e.date)||void 0===t?void 0:t.start_date})," ","\xa0",(0,l.jsx)(s(),{href:null==e?void 0:e.href,passHref:!0,className:"dark:text-gray-400  dark:hover:text-gray-300 overflow-x-hidden hover:underline cursor-pointer text-gray-600",children:e.title})]})},e.id)})})]},t)}},63228:function(e,t,a){a.r(t),a.d(t,{BlogListPage:function(){return o}});var l=a(85893),r=a(69325),s=a(93348),n=a(51140),i=a(68275);let o=e=>{let{page:t=1,postCount:a}=e,{NOTION_CONFIG:o}=(0,s.O)(),d=(0,r.JA)("POSTS_PER_PAGE",null,o);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{id:"posts-wrapper",className:"my-4 select-none",children:(0,l.jsx)(n.GameListIndexCombine,{...e})}),(0,l.jsx)(i.default,{page:t,showNext:t<Math.ceil(a/d)})]})}},68849:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var l=a(85893),r=a(93348);function s(e){let{tag:t,category:a}=e,{locale:s}=(0,r.O)();return t?(0,l.jsxs)("div",{className:"flex items-center text-xl mt-4 px-2",children:[(0,l.jsx)("i",{className:"mr-2 fas fa-tag"}),s.COMMON.TAGS,":",t]}):a?(0,l.jsxs)("div",{className:"flex items-center text-xl mt-4 px-2",children:[(0,l.jsx)("i",{className:"mr-2 fas fa-th"}),s.COMMON.CATEGORY,":",a]}):(0,l.jsx)(l.Fragment,{})}},98971:function(e,t,a){a.r(t);var l=a(85893),r=a(93348),s=a(67294);t.default=e=>{let{cRef:t,className:a}=e,{isDarkMode:n,toggleDarkMode:i}=(0,r.O)();return(0,s.useImperativeHandle)(t,()=>({handleChangeDarkMode:()=>{i()}})),(0,l.jsxs)("div",{onClick:i,className:"".concat(a||""," flex items-center"),children:[(0,l.jsx)("i",{className:"w-6 mr-2 fas ".concat(n?"fa-sun":"fa-moon px-0.5")}),n?"Dark Mode":"Light Mode"," "]})}},74077:function(e,t,a){a.r(t),a.d(t,{Footer:function(){return s}});var l=a(85893),r=a(69325);let s=e=>{let t=new Date().getFullYear(),a=(0,r.JA)("SINCE"),s=parseInt(a)<t?a+"-"+t:t;return(0,l.jsx)("footer",{className:"z-10 dark:bg-black bg-white p-2 rounded-lg relative mt-6 flex-shrink-0 mb-4 w-full shadow dark:text-gray-200 ",children:(0,l.jsxs)("div",{className:"w-full flex justify-between p-4 ",children:[(0,l.jsxs)("p",{children:["\xa9 ",(0,r.JA)("TITLE")," ",s]}),(0,l.jsx)("p",{children:(0,r.JA)("DESCRIPTION")}),(0,l.jsxs)("span",{className:"dark:text-gray-200 no-underline ml-4",children:["Powered by",(0,l.jsxs)("a",{href:"https://github.com/tangly1024/NotionNext",className:" hover:underline",children:[" ","NotionNext ",(0,r.JA)("VERSION")," "]})]})]})})}},98318:function(e,t,a){a.r(t),a.d(t,{GameListNormal:function(){return o}});var l=a(85893),r=a(78174),s=a(41664),n=a.n(s),i=a(67294);let o=e=>{let{games:t,maxCount:a=18}=e,s=(0,r.deepClone)(t),n=[],i=0;for(;(null==s?void 0:s.length)>0&&i<a;){let e=s.shift();n.push((0,l.jsx)(d,{item:e,isLargeCard:!0},i)),i++}return(0,l.jsx)("div",{className:"game-list-wrapper w-full",children:(0,l.jsx)("div",{className:"game-grid mx-auto w-full h-full grid grid-cols-3 gap-2",children:null==n?void 0:n.map((e,t)=>e)})})},d=e=>{var t;let{item:a}=e,{title:r}=a,s=a.pageCoverThumbnail,[o,d]=(0,i.useState)("img"),c=null==a?void 0:null===(t=a.ext)||void 0===t?void 0:t.video;return(0,l.jsxs)(n(),{href:"".concat(null==a?void 0:a.href),onMouseOver:()=>{d("video")},onMouseOut:()=>{d("img")},title:r,className:"card-single h-28 w-28 relative shadow rounded-md overflow-hidden flex justify-center items-center \n                group   hover:border-purple-400",children:[(0,l.jsx)("div",{className:"absolute text-sm bottom-2 transition-all duration-200 text-white z-30",children:r}),(0,l.jsx)("div",{className:"h-1/2 w-full absolute left-0 bottom-0 z-20 opacity-75 transition-all duration-200",children:(0,l.jsx)("div",{className:"h-full w-full absolute bg-gradient-to-b from-transparent to-black"})}),"video"===o&&(0,l.jsx)("video",{className:"z-10 object-cover w-auto h-28 absolute overflow-hidden",loop:"true",autoPlay:!0,preload:"none",children:(0,l.jsx)("source",{src:c,type:"video/mp4"})}),(0,l.jsx)("img",{className:"w-full h-full absolute object-cover",src:s,alt:r})]})}},71529:function(e,t,a){a.r(t),a.d(t,{GameListRelate:function(){return o}});var l=a(85893),r=a(78174),s=a(41664),n=a.n(s),i=a(67294);let o=e=>{let{posts:t}=e,a=(0,r.deepClone)(t),s=[],n=0;for(;(null==a?void 0:a.length)>0&&n<24;){let e=a.shift();s.push((0,l.jsx)(d,{item:e,isLargeCard:!0},n)),n++}return(0,l.jsx)("div",{className:"game-list-wrapper w-full max-w-full overflow-x-auto",children:(0,l.jsx)("div",{className:"game-grid grid grid-flow-col justify-start gap-2",children:null==s?void 0:s.map((e,t)=>e)})})},d=e=>{var t;let{item:a}=e,{title:r}=a,[s,o]=(0,i.useState)("img"),d=null==a?void 0:a.pageCoverThumbnail,c=null==a?void 0:null===(t=a.ext)||void 0===t?void 0:t.video;return(0,l.jsxs)(n(),{href:"".concat(null==a?void 0:a.href),onMouseOver:()=>{o("video")},onMouseOut:()=>{o("img")},title:r,className:"card-single w-24 h-24 relative shadow rounded-md overflow-hidden flex justify-center items-center \n                group   hover:border-purple-400",children:[(0,l.jsx)("div",{className:"text-xs text-center absolute bottom-0 invisible group-hover:bottom-2 group-hover:visible transition-all duration-200 text-white z-30",children:r}),(0,l.jsx)("div",{className:"h-2/3 w-full absolute left-0 bottom-0 z-20 opacity-0 group-hover:opacity-75 transition-all duration-200",children:(0,l.jsx)("div",{className:"h-full w-full absolute bg-gradient-to-b from-transparent to-black"})}),"video"===s&&(0,l.jsx)("video",{className:"z-10 object-cover w-full h-24 absolute overflow-hidden",loop:"true",autoPlay:!0,preload:"none",children:(0,l.jsx)("source",{src:c,type:"video/mp4"})}),(0,l.jsx)("img",{className:"w-24 h-24 absolute object-cover group-hover:scale-105 duration-100 transition-all",src:d,alt:r})]})}},53536:function(e,t,a){a.r(t),a.d(t,{GameListRecent:function(){return o}});var l=a(85893),r=a(78174),s=a(11163),n=a(67294),i=a(81616);let o=e=>{let{maxCount:t=14}=e,{recentGames:a}=(0,i.useGameGlobal)(),s=(0,r.deepClone)(a),n=[],o=0;for(;(null==s?void 0:s.length)>0&&o<t;){let e=null==s?void 0:s.shift();e&&(n.push((0,l.jsx)(d,{item:e,isLargeCard:!0},o)),o++)}return 0===n.length?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"game-list-recent-wrapper w-full max-w-full overflow-x-auto pt-4 px-2 md:px-0",children:(0,l.jsx)("div",{className:"game-grid md:flex grid grid-flow-col gap-2",children:null==n?void 0:n.map((e,t)=>e)})})})},d=e=>{var t;let{item:a}=e,o=(0,s.useRouter)(),{recentGames:d,setRecentGames:c}=(0,i.useGameGlobal)(),{title:u}=a||{},[x,m]=(0,n.useState)("img"),[f,h]=(0,n.useState)(!0),v=()=>{h(!f)},p=()=>{let e=(0,r.deepClone)(d),t=e.findIndex(e=>(null==e?void 0:e.title)===a.title);-1!==t&&(e.splice(t,1),c(e),localStorage.setItem("recent_games",JSON.stringify(e)))},g=null==a?void 0:a.pageCoverThumbnail,j=null==a?void 0:null===(t=a.ext)||void 0===t?void 0:t.video;return(0,l.jsxs)("div",{onClick:()=>{o.push(null==a?void 0:a.href)},onMouseOver:()=>{m("video")},onMouseOut:()=>{m("img")},title:u,className:"cursor-pointer card-single h-28 w-28 relative shadow rounded-md overflow-hidden flex justify-center items-center \n                group hover:border-purple-400",children:[(0,l.jsx)("button",{className:"absolute right-0.5 top-1 z-20",onClick:e=>{e.stopPropagation(),p()},onMouseEnter:v,onMouseLeave:v,children:f?(0,l.jsx)("i",{className:"fas fa-clock-rotate-left w-6 h-6 flex items-center justify-center shadow rounded-full bg-white text-blue-500 text-sm"}):(0,l.jsx)("i",{className:"fas fa-trash-can w-6 h-6 flex items-center justify-center shadow rounded-full bg-white text-red-500 text-sm"})}),(0,l.jsx)("div",{className:"absolute text-sm bottom-2 transition-all duration-200 text-white z-30",children:u}),(0,l.jsx)("div",{className:"h-1/2 w-full absolute left-0 bottom-0 z-20 opacity-75 transition-all duration-200",children:(0,l.jsx)("div",{className:"h-full w-full absolute bg-gradient-to-b from-transparent to-black"})}),"video"===x&&(0,l.jsx)("video",{className:"z-10 object-cover w-auto h-28 absolute overflow-hidden",loop:"true",autoPlay:!0,preload:"none",children:(0,l.jsx)("source",{src:j,type:"video/mp4"})}),(0,l.jsx)("img",{className:"w-full h-full absolute object-cover group-hover:scale-105 duration-100 transition-all",src:g,alt:u})]})}},97517:function(e,t,a){a.r(t);var l=a(85893),r=a(41664),s=a.n(r);t.default=function(e){let{currentCategory:t,categoryOptions:a}=e;return a?(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(s(),{className:"mx-2",href:"/category",children:(0,l.jsx)("i",{className:"fas fa-bars"})}),(0,l.jsx)("div",{id:"category-list",className:"dark:border-gray-600 flex flex-wrap py-1",children:a.map(e=>{let a=t===e.name;return(0,l.jsx)(s(),{href:"/category/".concat(e.name),passHref:!0,className:" ".concat(a?"bg-green-500 text-white ":"dark:text-gray-300 hover:bg-green-500 rounded-lg hover:text-white","  whitespace-nowrap overflow-ellipsis items-center px-2 cursor-pointer py-1 font-bold"),children:e.name},e.name)})})]}):(0,l.jsx)(l.Fragment,{})}},88836:function(e,t,a){a.r(t);var l=a(85893),r=a(41664),s=a.n(r),n=a(5113);t.default=function(e){var t;let{tagOptions:a,currentTag:r}=e;return a?(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(s(),{href:"/tag",children:(0,l.jsx)("i",{className:"fas fa-tags p-2"})}),(0,l.jsx)("div",{id:"tags-group",className:"flex flex-wrap p-1 gap-2",children:null==a?void 0:null===(t=a.slice(0,20))||void 0===t?void 0:t.map(e=>{let t=e.name===r;return(0,l.jsx)(n.default,{tag:e,selected:t},e.name)})})]}):(0,l.jsx)(l.Fragment,{})}},57825:function(e,t,a){a.r(t),a.d(t,{default:function(){return n}});var l=a(85893),r=a(81616),s=a(1347);function n(e){let{siteInfo:t}=e,{setSideBarVisible:a}=(0,r.useGameGlobal)();return(0,l.jsx)("header",{className:"z-20",children:(0,l.jsxs)("div",{className:"w-full py-2 rounded-md bg-white shadow-md hover:shadow-xl transition-shadow duration-200 dark:bg-[#1F2030] flex justify-between items-center px-4",children:[(0,l.jsx)(s.default,{siteInfo:t}),(0,l.jsx)("button",{className:"flex xl:hidden",onClick:()=>{a(!0)},children:(0,l.jsx)("i",{className:"fas fa-search"})})]})})}},1347:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var l=a(85893),r=a(69325),s=a(41664),n=a.n(s);function i(e){let{siteInfo:t}=e;return(0,l.jsx)(n(),{passHref:!0,href:"/",className:"logo rounded cursor-pointer flex flex-col items-center",children:(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("h1",{className:"text-2xl dark:text-white font-bold font-serif",children:null==t?void 0:t.title}),(0,l.jsx)("h2",{className:"text-xs text-gray-400 whitespace-nowrap",children:(0,r.JA)("BIO")})]})})}},53145:function(e,t,a){a.r(t),a.d(t,{MenuItemDrop:function(){return i}});var l=a(85893),r=a(41664),s=a.n(r),n=a(67294);let i=e=>{var t;let{link:a}=e,[r,i]=(0,n.useState)(!1);if(!a||!a.show)return null;let o=(null==a?void 0:null===(t=a.subMenus)||void 0===t?void 0:t.length)>0;return(0,l.jsx)("li",{children:(0,l.jsxs)("div",{className:"cursor-pointer relative",onMouseOver:()=>i(!0),onMouseOut:()=>i(!1),children:[!o&&(0,l.jsx)("div",{className:"dark:text-gray-50 nav hover:scale-105 transition-transform duration-200",children:(0,l.jsxs)(s(),{href:null==a?void 0:a.href,className:"flex flex-nowrap",target:null==a?void 0:a.target,children:[(0,l.jsx)("div",{className:"w-6 mr-2 text-center",children:(null==a?void 0:a.icon)&&(0,l.jsx)("i",{className:null==a?void 0:a.icon})}),null==a?void 0:a.name]})}),o&&(0,l.jsxs)("div",{className:"dark:text-gray-50 nav",children:[(null==a?void 0:a.icon)&&(0,l.jsx)("i",{className:"".concat(null==a?void 0:a.icon," w-6 text-center")})," ",null==a?void 0:a.name,(0,l.jsx)("i",{className:"absolute right-0 top-0 px-2 h-full flex items-center fas fa-chevron-left duration-500 transition-all ".concat(r?" rotate-180":""," ")})]}),o&&(0,l.jsx)("ul",{className:"".concat(r?"visible opacity-100 -left-5 ml-40":"invisible opacity-0 -left-4 "," rounded shadow-md z-30 -mt-2 py-2 px-4 absolute top-0 hover:scale-105 transition-all duration-200 border-gray-100  bg-white  dark:bg-black"),children:a.subMenus.map((e,t)=>(0,l.jsx)("div",{className:"text-gray-700 dark:text-gray-200  tracking-widest transition-all duration-200 ",children:(0,l.jsx)(s(),{href:e.href,target:null==a?void 0:a.target,children:(0,l.jsxs)("span",{className:"text-sm text-nowrap font-extralight",children:[(null==a?void 0:a.icon)&&(0,l.jsx)("i",{className:null==e?void 0:e.icon,children:" \xa0 "}),e.title]})})},t))})]})})}},38105:function(e,t,a){a.r(t),a.d(t,{MenuList:function(){return c}});var l=a(85893),r=a(69325),s=a(93348),n=a(81616),i=a(80809),o=a(98971),d=a(53145);let c=e=>{let{setSideBarVisible:t}=(0,n.useGameGlobal)(),{customNav:a,customMenu:c}=e,{locale:u}=(0,s.O)(),x=[{id:1,icon:"fas fa-home",name:u.NAV.INDEX,href:"/",show:!0},{id:2,icon:"fas fa-th",name:u.COMMON.CATEGORY,href:"/category",show:(0,r.JA)("GAME_MENU_CATEGORY",null,i.default)},{id:3,icon:"fas fa-tag",name:u.COMMON.TAGS,href:"/tag",show:(0,r.JA)("GAME_MENU_TAG",null,i.default)}],m=[].concat(x);return a&&(m=x.concat(a)),(0,r.JA)("CUSTOM_MENU")&&(m=c),(0,l.jsxs)("ul",{className:"dark:text-white p-4 space-y-4 shadow-md hover:shadow-xl transition-shadow duration-200 bg-white dark:bg-hexo-black-gray my-4 rounded-md",children:[(0,l.jsx)("li",{children:(0,l.jsxs)("button",{className:"flex items-center hover:scale-105 transition-transform duration-200",onClick:()=>{t(!0)},children:[(0,l.jsx)("i",{className:"fas fa-search w-6 mr-2"}),(0,l.jsx)("span",{children:"Search"})]})}),(0,l.jsx)("li",{children:(0,l.jsx)("button",{className:"flex items-center hover:scale-105 transition-transform duration-200",children:(0,l.jsx)(o.default,{className:"text-center"})})}),(null==m?void 0:m.length)>0&&(0,l.jsx)("hr",{}),null==m?void 0:m.map((e,t)=>e&&e.show&&(0,l.jsx)(d.MenuItemDrop,{link:e},t))]})}},68275:function(e,t,a){a.r(t);var l=a(85893),r=a(93348),s=a(41664),n=a.n(s),i=a(11163);t.default=e=>{let{page:t,showNext:a}=e,{locale:s}=(0,r.O)(),o=(0,i.useRouter)(),d=+t,c=o.asPath.split("?")[0].replace(/\/page\/[1-9]\d*/,"").replace(/\/$/,"").replace(".html","");return(0,l.jsxs)("div",{className:"my-10 flex justify-between font-medium text-black dark:text-gray-100 space-x-2",children:[(0,l.jsxs)(n(),{href:{pathname:2===d?"".concat(c,"/"):"".concat(c,"/page/").concat(d-1),query:o.query.s?{s:o.query.s}:{}},passHref:!0,rel:"prev",className:"".concat(1===d?"invisible":"visible"," text-center w-full duration-200 px-4 py-2 hover:border-black dark:border-hexo-black-gray border-b-2 hover:font-bold"),children:["←",s.PAGINATION.PREV]}),(0,l.jsxs)(n(),{href:{pathname:"".concat(c,"/page/").concat(d+1),query:o.query.s?{s:o.query.s}:{}},passHref:!0,rel:"next",className:"".concat(a?"visible":"invisible"," text-center w-full duration-200 px-4 py-2 hover:border-black dark:border-hexo-black-gray border-b-2 hover:font-bold"),children:[s.PAGINATION.NEXT,"→"]})]})}},20654:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var l=a(85893),r=a(67968),s=a(41664),n=a.n(s),i=a(16967),o=a(69325);function d(e){let{post:t}=e;return(0,l.jsx)("section",{className:"flex-wrap flex m-2 text-gray--600 dark:text-gray-400 font-light leading-8",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:(null==t?void 0:t.type)!=="Page"&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(n(),{href:"/category/".concat(null==t?void 0:t.category),passHref:!0,className:"cursor-pointer text-xs font-bold hover:underline mr-2",children:null==t?void 0:t.category})})}),(0,l.jsxs)("h1",{className:"font-bold text-3xl text-black dark:text-white",children:[(0,o.JA)("POST_TITLE_ICON")&&(0,l.jsx)(r.Z,{icon:null==t?void 0:t.pageIcon}),null==t?void 0:t.title]}),(null==t?void 0:t.type)!=="Page"&&(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("nav",{className:"flex my-2 items-start text-gray-500 dark:text-gray-400",children:[(null==t?void 0:t.tags)&&(0,l.jsx)("div",{className:"flex flex-wrap max-w-full overflow-x-auto article-tags",children:null==t?void 0:t.tags.map(e=>(0,l.jsx)(i.default,{tag:e},e))}),(0,l.jsxs)("span",{className:"hidden busuanzi_container_page_pv mr-2",children:[(0,l.jsx)("i",{className:"mr-1 fas fa-fire"}),"\xa0",(0,l.jsx)("span",{className:"mr-2 busuanzi_value_page_pv"})]})]})})]})})}},11871:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var l=a(85893),r=a(69325),s=a(78174),n=a(67294),i=a(81616),o=a(80809),d=a(98318),c=a(1347);function u(e){let{allNavPages:t,siteInfo:a}=e,{sideBarVisible:u,setSideBarVisible:x,filterGames:m,setFilterGames:f}=(0,i.useGameGlobal)(),h=(0,n.useRef)(null),v=(0,s.deepClone)(t);return(0,n.useEffect)(()=>{u&&setTimeout(()=>{h.current.focus()},100)},[u,h]),(0,l.jsxs)("div",{className:"px-3",children:[(0,l.jsxs)("div",{className:"py-2 flex justify-between",children:[(0,l.jsx)(c.default,{siteInfo:a}),(0,l.jsx)("button",{onClick:()=>{x(!1)},children:(0,l.jsx)("i",{className:"fas fa-times"})})]}),(0,l.jsx)("input",{autoFocus:!0,id:"search-input",ref:h,className:"w-full h-12 rounded px-3 text-black",onChange:e=>{let t=e.target.value;if(!t||""===t){f(null==v?void 0:v.filter(e=>{var t;return null===(t=e.tags)||void 0===t?void 0:t.some(e=>e===(0,r.JA)("GAME_RECOMMEND_TAG","Recommend",o.default))}));return}let a=null==v?void 0:v.filter(e=>e.title.toLowerCase().includes(t.toLowerCase())||e.id.toLowerCase().includes(t.toLowerCase())||e.id.toLowerCase().replace("-","").includes(t.toLowerCase().replace("-","")));f((0,s.deepClone)(a))},placeholder:"Input the name of game"}),(0,l.jsx)("div",{className:"py-4",children:(0,l.jsx)(d.GameListNormal,{games:m})})]})}},90865:function(e,t,a){a.r(t);var l=a(85893),r=a(11163),s=a(67294);t.default=e=>{let{children:t,isOpen:a,onOpen:n,onClose:i,className:o}=e,d=(0,r.useRouter)();(0,s.useEffect)(()=>{let e=()=>{c(!1)};return d.events.on("routeChangeComplete",e),()=>{d.events.off("routeChangeComplete",e)}},[d.events]);let c=e=>{e?n&&n():i&&i();let t=window.document.getElementById("sidebar-drawer"),a=window.document.getElementById("sidebar-drawer-background");e?(null==t||t.classList.replace("-ml-96","ml-0"),null==a||a.classList.replace("hidden","block")):(null==t||t.classList.replace("ml-0","-ml-96"),null==a||a.classList.replace("block","hidden"))};return(0,l.jsxs)("div",{id:"sidebar-wrapper",className:"top-0 ".concat(o),children:[(0,l.jsx)("div",{id:"sidebar-drawer",className:"".concat(a?"ml-0 visible opacity-100":"-ml-96 invisible opacity-0"," w-96 bg-[#83FFE7] dark:bg-black shadow-black shadow-lg flex flex-col duration-300 fixed h-full left-0 overflow-y-scroll scroll-hidden top-0 z-30"),children:t}),(0,l.jsx)("div",{id:"sidebar-drawer-background",onClick:()=>{c(!1)},className:"".concat(a?"visible opacity-100":"invisible opacity-0 "," animate__animated animate__fadeIn fixed top-0 duration-300 left-0 z-20 w-full h-full bg-black/70")})]})}},16967:function(e,t,a){a.r(t);var l=a(85893),r=a(41664),s=a.n(r);t.default=e=>{let{tag:t}=e;return(0,l.jsx)(s(),{href:"/tag/".concat(encodeURIComponent(t)),children:(0,l.jsx)("p",{className:"cursor-pointer hover:bg-gray-50 dark:hover:bg-hexo-black-gray mr-1 rounded-full px-2 py-1 border leading-none text-sm dark:border-gray-600",children:t})})}},5113:function(e,t,a){a.r(t);var l=a(85893),r=a(41664),s=a.n(r);t.default=e=>{let{tag:t,selected:a=!1}=e;return(0,l.jsx)(s(),{href:a?"/":"/tag/".concat(encodeURIComponent(t.name)),className:" rounded hover:text-white hover:bg-green-500 text-black dark:text-white dark:bg-gray-800 py-0.5 px-1 ",passHref:!0,children:(0,l.jsxs)("span",{className:"flex flex-nowrap cursor-pointer",children:["# ",(0,l.jsx)("span",{children:t.name})," ",(0,l.jsx)("span",{className:"h-full flex items-start text-xs ml-1",children:t.count?"".concat(t.count):""})]})},t)}},81616:function(e,t,a){a.r(t),a.d(t,{Layout404:function(){return H},LayoutArchive:function(){return D},LayoutBase:function(){return J},LayoutCategoryIndex:function(){return V},LayoutIndex:function(){return F},LayoutPostList:function(){return B},LayoutSearch:function(){return z},LayoutSlug:function(){return U},LayoutTagIndex:function(){return W},THEME_CONFIG:function(){return S.default},useGameGlobal:function(){return P}});var l=a(85893),r=a(86429),s=a(46767),n=a(84588),i=a(31933),o=a(43838),d=a(78174),c=a(68020),u=a(69325),x=a(53040),m=a(41664),f=a.n(m),h=a(67294),v=a(89837),p=a(20682),g=a(53369),j=a(63228),b=a(92008),w=a(68849),N=a(74077),y=a(32586),k=a(51140),C=a(71529),E=a(53536),_=a(97517),M=a(88836),O=a(57825),A=a(38105),L=a(20654),I=a(11871),T=a(90865),S=a(80809),G=a(18119);let R=(0,h.createContext)(),P=()=>(0,h.useContext)(R),J=e=>{let{allNavPages:t,children:a,siteInfo:r}=e,n=(0,h.useRef)(null),[i,o]=(0,h.useState)(""),[c,m]=(0,h.useState)((0,d.deepClone)(null==t?void 0:t.filter(e=>{var t;return null===(t=e.tags)||void 0===t?void 0:t.some(e=>e===(0,u.JA)("GAME_RECOMMEND_TAG","Recommend",S.default))}))),[f,v]=(0,h.useState)([]),[p,g]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{(0,x.f)()},[]),(0,l.jsx)(R.Provider,{value:{searchModal:n,filterKey:i,setFilterKey:o,recentGames:f,setRecentGames:v,filterGames:c,setFilterGames:m,sideBarVisible:p,setSideBarVisible:g},children:(0,l.jsxs)("div",{id:"theme-game",className:"".concat((0,u.JA)("FONT_STYLE")," w-full h-full min-h-screen justify-center dark:bg-black dark:bg-opacity-50 dark:text-gray-300 scroll-smooth"),children:[(0,l.jsx)(G.Style,{}),(0,l.jsxs)("div",{id:"wrapper",className:"relative flex justify-between w-full h-full mx-auto",children:[(0,l.jsx)("div",{className:"w-52 hidden xl:block relative z-10",children:(0,l.jsxs)("div",{className:"py-4 px-2 sticky top-0 h-screen flex flex-col justify-between",children:[(0,l.jsxs)("div",{className:"select-none",children:[(0,l.jsx)(O.default,{siteInfo:r}),(0,l.jsx)(A.MenuList,{...e})]}),(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)(s.AdSlot,{})})]})}),(0,l.jsxs)("main",{className:"flex-grow w-full h-full flex flex-col min-h-screen overflow-x-auto md:p-2",children:[(0,l.jsx)("div",{className:"flex-grow h-full",children:a}),(0,l.jsx)(N.Footer,{})]})]}),(0,l.jsx)(T.default,{isOpen:p,onClose:()=>{g(!1)},children:(0,l.jsx)(I.default,{siteInfo:r,...e})})]})})},F=e=>{let{tagOptions:t,currentTag:a,categoryOptions:r,currentCategory:n,siteInfo:i}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"p-2 xl:hidden",children:(0,l.jsx)(O.default,{siteInfo:i})}),(0,l.jsx)(E.GameListRecent,{}),(0,l.jsx)(B,{...e}),(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)(s.AdSlot,{type:"in-article"})}),(0,l.jsxs)("div",{className:"w-full bg-white dark:bg-hexo-black-gray rounded-lg p-2",children:[(0,l.jsx)(_.default,{categoryOptions:r,currentCategory:n}),(0,l.jsx)("hr",{}),(0,l.jsx)(M.default,{tagOptions:t,currentTag:a}),(0,l.jsx)(v.default,{...e,className:"p-2"})]})]})},B=e=>{let{posts:t}=e,{filterKey:a}=P(),r=[];return r=a&&t?t.filter(e=>{let t=(null==e?void 0:e.tags)?null==e?void 0:e.tags.join(" "):"";return(e.title+e.summary+t).toLowerCase().includes(a.toLowerCase())}):(0,d.deepClone)(t),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.default,{...e}),"page"===(0,u.JA)("POST_LIST_STYLE")?(0,l.jsx)(j.BlogListPage,{posts:r,...e}):(0,l.jsx)(b.BlogListScroll,{posts:r,...e})]})},z=e=>{let{keyword:t,posts:a}=e;(0,h.useEffect)(()=>{d.isBrowser&&(0,n.Z)({doms:document.getElementById("posts-wrapper"),search:t,target:{element:"span",className:"text-red-500 border-b border-dashed"}})},[]);let{filterKey:r}=P(),s=[];return s=r&&a?a.filter(e=>{let t=(null==e?void 0:e.tags)?null==e?void 0:e.tags.join(" "):"";return(e.title+e.summary+t).toLowerCase().includes(r.toLowerCase())}):(0,d.deepClone)(a),(0,l.jsx)(l.Fragment,{children:"page"===(0,u.JA)("POST_LIST_STYLE")?(0,l.jsx)(j.BlogListPage,{...e,posts:s}):(0,l.jsx)(b.BlogListScroll,{...e,posts:s})})},D=e=>{let{archivePosts:t}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"mb-10 pb-20 md:py-12 p-3  min-h-screen w-full",children:Object.keys(t).map(e=>(0,l.jsx)(g.default,{archiveTitle:e,archivePosts:t},e))})})},U=e=>{let{setRecentGames:t}=P(),{post:a,siteInfo:n,allNavPages:u,recommendPosts:x,lock:m,validPassword:f}=e,v=(0,d.shuffleArray)((0,d.deepClone)(u));return!function(e,t){if(!d.isBrowser||!e)return;let a={id:null==e?void 0:e.id,name:(null==e?void 0:e.title)+" | "+t.title,short_name:null==e?void 0:e.title,description:(null==e?void 0:e.summary)||t.description,icons:[{src:(0,o.h)(null==e?void 0:e.pageCoverThumbnail,192),type:"image/png",sizes:"192x192"}],form_factor:"phone",start_url:window.location.href,scope:window.location.href,display:"standalone",background_color:"#181818",theme_color:"#181818"},l=document.querySelector('link[rel="manifest"]');l&&l.parentNode&&l.parentNode.contains(l)&&l.parentNode.removeChild(l);let r=document.createElement("link");r.rel="manifest";let s=URL.createObjectURL(new Blob([JSON.stringify(a)],{type:"application/json"}));r.href=s,document.head.appendChild(r),window.addEventListener("unload",()=>{URL.revokeObjectURL(s)})}(a,n),(0,h.useEffect)(()=>{let e=localStorage.getItem("recent_games")?JSON.parse(localStorage.getItem("recent_games")):[],l=e.findIndex(e=>(null==e?void 0:e.id)===(null==a?void 0:a.id));if(-1===l)e.unshift(a);else{let t=e.splice(l,1)[0];e.unshift(t)}localStorage.setItem("recent_games",JSON.stringify(e)),t(e)},[a]),(0,l.jsxs)(l.Fragment,{children:[m&&(0,l.jsx)(p.ArticleLock,{validPassword:f}),!m&&(0,l.jsxs)("div",{id:"article-wrapper",children:[(0,l.jsx)("div",{className:"game-detail-wrapper w-full grow flex",children:(0,l.jsxs)("div",{className:"w-full md:py-2",children:[(0,l.jsx)(y.default,{post:a,siteInfo:n}),(0,l.jsxs)("div",{className:"game-info  dark:text-white py-2 px-2 md:px-0 mt-14 md:mt-0",children:[(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)(C.GameListRelate,{posts:x})}),a&&(0,l.jsxs)("div",{className:"bg-white shadow-md my-2 p-4 rounded-md dark:bg-black",children:[(0,l.jsx)(L.default,{post:a}),(0,l.jsx)(i.default,{post:a}),(0,l.jsx)(s.AdSlot,{}),(0,l.jsx)(c.default,{post:a}),(0,l.jsx)(r.default,{frontMatter:a})]})]})]})}),(0,l.jsx)(k.GameListIndexCombine,{posts:v})]})]})},H=e=>(0,l.jsx)(l.Fragment,{children:"404 Not found."}),V=e=>{let{categoryOptions:t}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{id:"category-list",className:"duration-200 flex flex-wrap my-4 gap-2",children:null==t?void 0:t.map(e=>(0,l.jsx)(f(),{href:"/category/".concat(e.name),passHref:!0,legacyBehavior:!0,children:(0,l.jsxs)("div",{className:"bg-white rounded-lg hover:text-black dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600 px-5 cursor-pointer py-2 hover:bg-gray-100",children:[e.name,"(",e.count,")"]})},e.name))})})},W=e=>{let{tagOptions:t}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{children:(0,l.jsx)("div",{id:"tags-list",className:"duration-200 flex flex-wrap my-4 gap-2",children:t.map(e=>(0,l.jsxs)(f(),{href:"/tag/".concat(encodeURIComponent(e.name)),passHref:!0,className:" select-none cursor-pointer flex bg-white rounded-lg hover:bg-gray-500 hover:text-white duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-white  hover:shadow-xl  dark:bg-gray-800",children:[(0,l.jsx)("i",{className:"mr-1 fas fa-tag"})," ",e.name+(e.count?"(".concat(e.count,")"):"")," "]},e.name))})})})}},18119:function(e,t,a){a.r(t),a.d(t,{Style:function(){return n}});var l=a(85893),r=a(1822),s=a.n(r);let n=()=>(0,l.jsx)(s(),{id:"61e7943fd9775666",children:".dark body{background-color:black}body{background-color:#fff;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http:\nbackground-attachment: fixed;\nbackground-size: cover;\n}\n\n)}"})}}]);