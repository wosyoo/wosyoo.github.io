(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87506,7939,87430,48064,25441,11988,4936,60680,31184,85293,59883,20765,81623,15798,91577],{93096:function(e,t,r){var a="Expected a function",n=0/0,s=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,u="object"==typeof self&&self&&self.Object===Object&&self,f=d||u||Function("return this")(),x=Object.prototype.toString,h=Math.max,m=Math.min,v=function(){return f.Date.now()};function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==x.call(t))return n;if(j(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=j(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var a=i.test(e);return a||o.test(e)?c(e.slice(2),a?2:8):l.test(e)?n:+e}e.exports=function(e,t,r){var n=!0,s=!0;if("function"!=typeof e)throw TypeError(a);return j(r)&&(n="leading"in r?!!r.leading:n,s="trailing"in r?!!r.trailing:s),function(e,t,r){var n,s,l,i,o,c,d=0,u=!1,f=!1,x=!0;if("function"!=typeof e)throw TypeError(a);function N(t){var r=n,a=s;return n=s=void 0,d=t,i=e.apply(a,r)}function T(e){var r=e-c,a=e-d;return void 0===c||r>=t||r<0||f&&a>=l}function E(){var e,r,a,n=v();if(T(n))return b(n);o=setTimeout(E,(e=n-c,r=n-d,a=t-e,f?m(a,l-r):a))}function b(e){return(o=void 0,x&&n)?N(e):(n=s=void 0,i)}function _(){var e,r=v(),a=T(r);if(n=arguments,s=this,c=r,a){if(void 0===o)return d=e=c,o=setTimeout(E,t),u?N(e):i;if(f)return o=setTimeout(E,t),N(c)}return void 0===o&&(o=setTimeout(E,t)),i}return t=g(t)||0,j(r)&&(u=!!r.leading,l=(f="maxWait"in r)?h(g(r.maxWait)||0,t):l,x="trailing"in r?!!r.trailing:x),_.cancel=function(){void 0!==o&&clearTimeout(o),d=0,n=c=s=o=void 0},_.flush=function(){return void 0===o?i:b(v())},_}(e,t,{leading:n,maxWait:t,trailing:s})}},27134:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(85893),n=r(69325),s=r(9008),l=r.n(s),i=r(67294);function o(e){let{priority:t,id:r,src:s,alt:o,placeholderSrc:d,className:u,width:f,height:x,title:h,onLoad:m,style:v}=e,j=(0,n.JA)("IMAGE_COMPRESS_WIDTH"),g=(0,n.JA)("IMG_LAZY_LOAD_PLACEHOLDER"),N=(0,i.useRef)(null),[T,E]=(0,i.useState)(d||g),b=e=>{"function"==typeof m&&m()},_=()=>{N.current&&(N.current.src!==d&&d?N.current.src=d:N.current.src=g)};(0,i.useEffect)(()=>{let e=c(s,j)||g,t=new Image;t.src=e,t.onload=()=>{E(e),b(e)},t.onerror=_;let r=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){let a=t.target;a.src=e,r.unobserve(a)}})},{rootMargin:"50px 0px"});return N.current&&r.observe(N.current),()=>{N.current&&r.unobserve(N.current)}},[s,j]);let C={ref:N,src:T,alt:o,onLoad:()=>{},onError:_};return r&&(C.id=r),h&&(C.title=h),f&&"auto"!==f&&(C.width=f),x&&"auto"!==x&&(C.height=x),u&&(C.className=u),v&&(C.style=v),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{...C}),t&&(0,a.jsx)(l(),{children:(0,a.jsx)("link",{rel:"preload",as:"image",href:c(s,j)})})]})}let c=(e,t)=>{var r,a;if(!e)return null;let n=(null===(a=window)||void 0===a?void 0:null===(r=a.screen)||void 0===r?void 0:r.width)||t;return n>t?e:e.replace(/width=\d+/,"width=".concat(n)).replace(/w=\d+/,"w=".concat(n))}},91577:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var a=r(85893),n=r(69325),s=r(93348),l=r(78174),i=r(67294);function o(){let{theme:e,switchTheme:t}=(0,s.O)(),r=JSON.parse((0,n.JA)("WIDGET_PET")),o=(0,n.JA)("WIDGET_PET_LINK"),c=(0,n.JA)("WIDGET_PET_SWITCH_THEME");return((0,i.useEffect)(()=>{r&&!(0,l.isMobile)()&&Promise.all([(0,l.loadExternalResource)("https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/live2d.min.js","js")]).then(e=>{var t;if(void 0!==(null===(t=window)||void 0===t?void 0:t.loadlive2d))try{loadlive2d("live2d",o)}catch(e){console.error("读取PET模型",e)}})},[e]),r)?(0,a.jsx)("canvas",{id:"live2d",width:"280",height:"250",onClick:function(){c&&t()},className:"cursor-grab",onMouseDown:e=>e.target.classList.add("cursor-grabbing"),onMouseUp:e=>e.target.classList.remove("cursor-grabbing")}):(0,a.jsx)(a.Fragment,{})}},7939:function(e,t,r){"use strict";r.r(t),r.d(t,{AnalyticsCard:function(){return s}});var a=r(85893),n=r(48064);function s(e){let{postCount:t}=e;return(0,a.jsxs)(n.default,{children:[(0,a.jsxs)("div",{className:"ml-2 mb-3 ",children:[(0,a.jsx)("i",{className:"fas fa-chart-area"})," 统计"]}),(0,a.jsxs)("div",{className:"text-xs  font-light justify-center mx-7",children:[(0,a.jsx)("div",{className:"inline",children:(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("div",{children:"文章数:"}),(0,a.jsx)("div",{children:t})]})}),(0,a.jsx)("div",{className:"hidden busuanzi_container_page_pv ml-2",children:(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("div",{children:"访问量:"}),(0,a.jsx)("div",{className:"busuanzi_value_page_pv"})]})}),(0,a.jsx)("div",{className:"hidden busuanzi_container_site_uv ml-2",children:(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("div",{children:"访客数:"}),(0,a.jsx)("div",{className:"busuanzi_value_site_uv"})]})})]})]})}},87430:function(e,t,r){"use strict";r.r(t);var a=r(85893),n=r(93348),s=r(5152);let l=r.n(s)()(()=>Promise.resolve().then(r.bind(r,31933)),{loadableGenerated:{webpack:()=>[31933]}});t.default=e=>{let{post:t,className:r}=e,{locale:s}=(0,n.O)();return(null==t?void 0:t.blockMap)?(0,a.jsx)("div",{className:r,children:(0,a.jsxs)("section",{id:"announcement-wrapper",className:"dark:text-gray-300 border dark:border-black rounded-xl lg:p-6 p-4 bg-white dark:bg-hexo-black-gray",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("i",{className:"mr-2 fas fa-bullhorn"}),s.COMMON.ANNOUNCEMENT]}),t&&(0,a.jsx)("div",{id:"announcement-content",children:(0,a.jsx)(l,{post:t,className:"text-center"})})]})}):(0,a.jsx)(a.Fragment,{})}},48064:function(e,t,r){"use strict";r.r(t);var a=r(85893);t.default=e=>{let{children:t,headerSlot:r,className:n}=e;return(0,a.jsxs)("div",{className:n,children:[(0,a.jsx)(a.Fragment,{children:r}),(0,a.jsx)("section",{className:"card shadow-md hover:shadow-md dark:text-gray-300 border dark:border-black rounded-xl lg:p-6 p-4 bg-white dark:bg-hexo-black-gray lg:duration-100",children:t})]})}},25441:function(e,t,r){"use strict";r.r(t);var a=r(85893),n=r(67294),s=r(93096),l=r.n(s),i=r(89163),o=r(85293),c=r(93348);t.default=e=>{let{toc:t}=e,{locale:r}=(0,c.O)();(0,n.useEffect)(()=>(window.addEventListener("scroll",x),x(),()=>{window.removeEventListener("scroll",x)}),[]);let s=(0,n.useRef)(null),d=[],[u,f]=(0,n.useState)(null),x=(0,n.useCallback)(l()(()=>{var e;let t=document.getElementsByClassName("notion-h"),r=null,a=u;for(let e=0;e<t.length;++e){let n=t[e];if(!n||!(n instanceof Element))continue;a||(a=n.getAttribute("data-id"));let s=n.getBoundingClientRect(),l=Math.max(150,(r?s.top-r.bottom:0)/4);if(s.top-l<0){a=n.getAttribute("data-id"),r=s;continue}break}f(a);let n=d.indexOf(a)||0;null==s||null===(e=s.current)||void 0===e||e.scrollTo({top:28*n,behavior:"smooth"})},200));return!t||t.length<1?(0,a.jsx)(a.Fragment,{}):(0,a.jsxs)("div",{className:"px-3 py-1",children:[(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("i",{className:"mr-1 fas fa-stream"}),r.COMMON.TABLE_OF_CONTENTS]}),(0,a.jsx)("div",{className:"w-full py-3",children:(0,a.jsx)(o.default,{})}),(0,a.jsx)("div",{className:"overflow-y-auto max-h-36 lg:max-h-96 overscroll-none scroll-hidden",ref:s,children:(0,a.jsx)("nav",{className:"h-full  text-black",children:t.map(e=>{let t=(0,i.Gw)(e.id);return d.push(t),(0,a.jsx)("a",{href:"#".concat(t),className:"notion-table-of-contents-item duration-300 transform font-light dark:text-gray-200\n            notion-table-of-contents-item-indent-level-".concat(e.indentLevel," "),children:(0,a.jsx)("span",{style:{display:"inline-block",marginLeft:16*e.indentLevel},className:"truncate ".concat(u===t?"font-bold text-red-600":""),children:e.text})},t)})})})]})}},11988:function(e,t,r){"use strict";r.r(t);var a=r(85893),n=r(41664),s=r.n(n);t.default=e=>{let{currentCategory:t,categories:r}=e;return r?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{id:"category-list",className:"dark:border-gray-600 flex flex-wrap  mx-4",children:r.map(e=>{let r=t===e.name;return(0,a.jsx)(s(),{href:"/category/".concat(e.name),passHref:!0,className:(r?"hover:text-white dark:hover:text-white bg-red-600 text-white ":"dark:text-gray-400 text-gray-500 hover:text-white dark:hover:text-white hover:bg-red-600")+"  text-sm w-full items-center duration-300 px-2  cursor-pointer py-1 font-light",children:(0,a.jsxs)("div",{children:[" ",(0,a.jsx)("i",{className:"mr-2 fas ".concat(r?"fa-folder-open":"fa-folder")}),e.name,"(",e.count,")"]})},e.name)})})}):(0,a.jsx)(a.Fragment,{})}},4936:function(e,t,r){"use strict";r.r(t),r.d(t,{InfoCard:function(){return d}});var a=r(85893),n=r(11163),s=r(48064),l=r(59883),i=r(31184),o=r(27134),c=r(69325);function d(e){let{className:t,siteInfo:r}=e,d=(0,n.useRouter)();return(0,a.jsxs)(s.default,{className:t,children:[(0,a.jsx)("div",{className:"justify-center items-center flex py-6 dark:text-gray-100  transform duration-200 cursor-pointer",onClick:()=>{d.push("/")},children:(0,a.jsx)(o.Z,{src:null==r?void 0:r.icon,className:"rounded-full",width:120,alt:(0,c.JA)("AUTHOR")})}),(0,a.jsx)("div",{className:"font-medium text-center text-xl pb-4",children:(0,c.JA)("AUTHOR")}),(0,a.jsx)("div",{className:"text-sm text-center",children:(0,c.JA)("BIO")}),(0,a.jsx)(i.default,{...e}),(0,a.jsx)(l.default,{})]})}},60680:function(e,t,r){"use strict";r.r(t);var a=r(85893),n=r(69325),s=r(27134),l=r(93348),i=r(41664),o=r.n(i),c=r(11163);t.default=e=>{let{latestPosts:t,siteInfo:r}=e,i=(0,c.useRouter)().asPath,{locale:d}=(0,l.O)();return t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:" mb-2 px-1 flex flex-nowrap justify-between",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("i",{className:"mr-2 fas fas fa-history"}),d.COMMON.LATEST_POSTS]})}),t.map(e=>{let t=i==="".concat((0,n.JA)("SUB_PATH",""),"/").concat(e.slug),l=(null==e?void 0:e.pageCoverThumbnail)?e.pageCoverThumbnail:null==r?void 0:r.pageCover;return(0,a.jsxs)(o(),{title:e.title,href:"".concat((0,n.JA)("SUB_PATH",""),"/").concat(e.slug),passHref:!0,className:"my-3 flex",children:[(0,a.jsx)("div",{className:"w-20 h-14 overflow-hidden relative",children:(0,a.jsx)(s.Z,{src:"".concat(l),className:"object-cover w-full h-full"})}),(0,a.jsx)("div",{className:(t?" text-red-400 ":"dark:text-gray-400 ")+" text-sm overflow-x-hidden hover:text-red-600 px-2 duration-200 w-full rounded  hover:text-red-400 cursor-pointer items-center flex",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"line-clamp-2 menu-link",children:e.title}),(0,a.jsx)("div",{className:"text-gray-500",children:e.lastEditedDay})]})})]},e.id)})]}):(0,a.jsx)(a.Fragment,{})}},31184:function(e,t,r){"use strict";r.r(t);var a=r(85893),n=r(93348),s=r(41664),l=r.n(s),i=r(15798);t.default=e=>{let{postCount:t,categoryOptions:r,tagOptions:s}=e,{locale:o}=(0,n.O)(),c=(0,a.jsx)("div",{className:"text-center",children:t}),d=(0,a.jsx)("div",{className:"text-center",children:null==r?void 0:r.length}),u=(0,a.jsx)("div",{className:"text-center",children:null==s?void 0:s.length}),f=[{name:o.COMMON.ARTICLE,href:"/archive",slot:c,show:i.default.MENU_ARCHIVE},{name:o.COMMON.CATEGORY,href:"/category",slot:d,show:i.default.MENU_CATEGORY},{name:o.COMMON.TAGS,href:"/tag",slot:u,show:i.default.MENU_TAG}];for(let e=0;e<f.length;e++)f[e].id!==e&&(f[e].id=e);return(0,a.jsx)("nav",{id:"nav",className:"leading-8 flex justify-center  dark:text-gray-200 w-full",children:f.map(e=>e.show?(0,a.jsx)(l(),{title:e.name,href:e.href,target:null==e?void 0:e.target,className:"py-1.5 my-1 px-2 duration-300 text-base justify-center items-center cursor-pointer",children:(0,a.jsxs)("div",{className:"w-full items-center justify-center hover:scale-105 duration-200 transform dark:hover:text-red-400 hover:text-red-600",children:[(0,a.jsx)("div",{className:"text-center",children:e.name}),(0,a.jsx)("div",{className:"text-center font-semibold",children:e.slot})]})},"".concat(e.slug)):null)})}},85293:function(e,t,r){"use strict";r.r(t);var a=r(85893),n=r(67294),s=r(78174);t.default=e=>{let{targetRef:t,showPercent:r=!0}=e,l=(null==t?void 0:t.current)||t,[i,o]=(0,n.useState)(0),c=()=>{let e=l||s.isBrowser&&document.getElementById("article-wrapper");if(e){let t=e.clientHeight,r=parseFloat((window.pageYOffset/(t-window.outerHeight)*100).toFixed(0));r>100&&(r=100),r<0&&(r=0),o(r)}};return(0,n.useEffect)(()=>(document.addEventListener("scroll",c),()=>document.removeEventListener("scroll",c)),[]),(0,a.jsx)("div",{className:"h-4 w-full shadow-2xl bg-gray-700 rounded-sm",children:(0,a.jsx)("div",{className:"h-4 bg-red-600 duration-200 rounded-sm",style:{width:"".concat(i,"%")},children:r&&(0,a.jsxs)("div",{className:"text-right text-white text-xs",children:[i,"%"]})})})}},87506:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var a=r(85893),n=r(48064),s=r(11988),l=r(60680),i=r(20765),o=r(25441),c=r(4936),d=r(7939),u=r(15798),f=r(69325),x=r(5152),h=r.n(x),m=r(87430),v=r(93348),j=r(91577);let g=h()(()=>Promise.all([r.e(16688),r.e(917),r.e(82477),r.e(71078)]).then(r.bind(r,71078)),{loadableGenerated:{webpack:()=>[71078]}}),N=h()(()=>{let e=(0,a.jsx)(a.Fragment,{});try{e=Promise.all([r.e(72893),r.e(94535)]).then(r.bind(r,94535))}catch(e){console.error(e)}return e},{loadableGenerated:{webpack:()=>[94535]},ssr:!1});function T(e){let{post:t,currentCategory:r,categories:x,latestPosts:h,tags:T,currentTag:E,showCategory:b,showTag:_,rightAreaSlot:C,notice:p}=e,{locale:O}=(0,v.O)();return(0,a.jsxs)("div",{id:"sideRight",className:"space-y-4 lg:w-80 lg:pt-0 px-2 pt-4",children:[(0,a.jsx)(c.InfoCard,{...e}),u.default.WIDGET_ANALYTICS&&(0,a.jsx)(d.AnalyticsCard,{...e}),b&&(0,a.jsxs)(n.default,{children:[(0,a.jsxs)("div",{className:"ml-2 mb-1 ",children:[(0,a.jsx)("i",{className:"fas fa-th"})," ",O.COMMON.CATEGORY]}),(0,a.jsx)(s.default,{currentCategory:r,categories:x})]}),_&&(0,a.jsx)(n.default,{children:(0,a.jsx)(i.default,{tags:T,currentTag:E})}),u.default.WIDGET_LATEST_POSTS&&h&&h.length>0&&(0,a.jsx)(n.default,{children:(0,a.jsx)(l.default,{...e})}),(0,a.jsx)(m.default,{post:p}),(0,f.JA)("COMMENT_WALINE_SERVER_URL")&&(0,f.JA)("COMMENT_WALINE_RECENT")&&(0,a.jsx)(g,{}),(0,a.jsxs)("div",{className:"sticky top-20",children:[t&&t.toc&&t.toc.length>1&&(0,a.jsx)(n.default,{children:(0,a.jsx)(o.default,{toc:t.toc})}),C,(0,a.jsx)(N,{}),(0,a.jsx)(j.default,{})]})]})}},59883:function(e,t,r){"use strict";r.r(t);var a=r(85893),n=r(69325);t.default=()=>(0,a.jsx)("div",{className:"w-full justify-center flex-wrap flex",children:(0,a.jsxs)("div",{className:"space-x-3 text-xl text-gray-600 dark:text-gray-300 ",children:[(0,n.JA)("CONTACT_GITHUB")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"github",href:(0,n.JA)("CONTACT_GITHUB"),children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-github dark:hover:text-red-400 hover:text-red-600"})}),(0,n.JA)("CONTACT_TWITTER")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"twitter",href:(0,n.JA)("CONTACT_TWITTER"),children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-twitter dark:hover:text-red-400 hover:text-red-600"})}),(0,n.JA)("CONTACT_TELEGRAM")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:(0,n.JA)("CONTACT_TELEGRAM"),title:"telegram",children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-telegram dark:hover:text-red-400 hover:text-red-600"})}),(0,n.JA)("CONTACT_LINKEDIN")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:(0,n.JA)("CONTACT_LINKEDIN"),title:"linkIn",children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-linkedin dark:hover:text-red-400 hover:text-red-600"})}),(0,n.JA)("CONTACT_WEIBO")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"weibo",href:(0,n.JA)("CONTACT_WEIBO"),children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-weibo dark:hover:text-red-400 hover:text-red-600"})}),(0,n.JA)("CONTACT_INSTAGRAM")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"instagram",href:(0,n.JA)("CONTACT_INSTAGRAM"),children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-instagram dark:hover:text-red-400 hover:text-red-600"})}),(0,n.JA)("CONTACT_EMAIL")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"email",href:"mailto:".concat((0,n.JA)("CONTACT_EMAIL")),children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fas fa-envelope dark:hover:text-red-400 hover:text-red-600"})}),JSON.parse((0,n.JA)("ENABLE_RSS"))&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"RSS",href:"/rss/feed.xml",children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fas fa-rss dark:hover:text-red-400 hover:text-red-600"})}),(0,n.JA)("CONTACT_BILIBILI")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"bilibili",href:(0,n.JA)("CONTACT_BILIBILI"),children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-bilibili dark:hover:text-red-400 hover:text-red-600"})}),(0,n.JA)("CONTACT_YOUTUBE")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"youtube",href:(0,n.JA)("CONTACT_YOUTUBE"),children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-youtube dark:hover:text-red-400 hover:text-red-600"})})]})})},20765:function(e,t,r){"use strict";r.r(t);var a=r(85893),n=r(81623);t.default=e=>{let{tags:t,currentTag:r}=e;return t?(0,a.jsxs)("div",{id:"tags-group",className:"dark:border-gray-600 space-y-2",children:[(0,a.jsxs)("div",{className:"font-light text-xs ml-2 mb-2",children:[(0,a.jsx)("i",{className:"mr-1 fas fa-tag"}),"标签"]}),(0,a.jsx)("div",{className:"px-4",children:t.map(e=>{let t=e.name===r;return(0,a.jsx)(n.default,{tag:e,selected:t},e.name)})})]}):(0,a.jsx)(a.Fragment,{})}},81623:function(e,t,r){"use strict";r.r(t);var a=r(85893),n=r(41664),s=r.n(n);t.default=e=>{let{tag:t,selected:r=!1}=e;return(0,a.jsx)(s(),{href:r?"/":"/tag/".concat(encodeURIComponent(t.name)),passHref:!0,className:"cursor-pointer inline-block rounded hover:bg-red-400 dark:hover:text-white  hover:text-white duration-200\n        mr-2 py-0.5 px-1 text-xs whitespace-nowrap \n         ".concat(r?"text-white dark:text-gray-300 bg-black dark:bg-black dark:hover:bg-red-900":"text-gray-600 hover:shadow-xl dark:border-gray-400 notion-".concat(t.color,"_background ")),children:(0,a.jsxs)("div",{className:"font-light",children:[r&&(0,a.jsx)("i",{className:"mr-1 fa-tag"})," ",t.name+(t.count?"(".concat(t.count,")"):"")," "]})},t)}},15798:function(e,t,r){"use strict";r.r(t),t.default={COMMERCE_HOME_BANNER_ENABLE:!0,COMMERCE_TEXT_CENTER_TITLE:"Product Center",COMMERCE_TEXT_CENTER_DESCRIPTION:"The vision of NotionNext is to help you effortlessly and seamlessly build your own website, amplifying the value of your brand.",COMMERCE_TEXT_CENTER_CATEGORY_TITLE:"Product Categories",COMMERCE_TEXT_FOOTER_TITLE:"Contact US",COMMERCE_TEXT_FOOTER_MENU_1:"Product Center",COMMERCE_TEXT_FOOTER_MENU_2:"About US",COMMERCE_FOOTER_RIGHT_IMG_URL:null,COMMERCE_FOOTER_RIGHT_TEXT:null,COMMERCE_HOME_POSTS_COUNT:9,COMMERCE_CONTACT_WHATSAPP_SHOW:!0,COMMERCE_CONTACT_TELEGRAM_SHOW:!0}}}]);