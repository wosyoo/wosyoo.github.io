"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82249],{27134:function(e,r,t){t.d(r,{Z:function(){return i}});var a=t(85893),s=t(69325),n=t(9008),l=t.n(n),c=t(67294);function i(e){let{priority:r,id:t,src:n,alt:i,placeholderSrc:d,className:u,width:h,height:x,title:m,onLoad:f,style:g}=e,p=(0,s.JA)("IMAGE_COMPRESS_WIDTH"),j=(0,s.JA)("IMG_LAZY_LOAD_PLACEHOLDER"),v=(0,c.useRef)(null),[N,b]=(0,c.useState)(d||j),y=e=>{"function"==typeof f&&f()},E=()=>{v.current&&(v.current.src!==d&&d?v.current.src=d:v.current.src=j)};(0,c.useEffect)(()=>{let e=o(n,p)||j,r=new Image;r.src=e,r.onload=()=>{b(e),y(e)},r.onerror=E;let t=new IntersectionObserver(r=>{r.forEach(r=>{if(r.isIntersecting){let a=r.target;a.src=e,t.unobserve(a)}})},{rootMargin:"50px 0px"});return v.current&&t.observe(v.current),()=>{v.current&&t.unobserve(v.current)}},[n,p]);let w={ref:v,src:N,alt:i,onLoad:()=>{},onError:E};return t&&(w.id=t),m&&(w.title=m),h&&"auto"!==h&&(w.width=h),x&&"auto"!==x&&(w.height=x),u&&(w.className=u),g&&(w.style=g),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{...w}),r&&(0,a.jsx)(l(),{children:(0,a.jsx)("link",{rel:"preload",as:"image",href:o(n,p)})})]})}let o=(e,r)=>{var t,a;if(!e)return null;let s=(null===(a=window)||void 0===a?void 0:null===(t=a.screen)||void 0===t?void 0:t.width)||r;return s>r?e:e.replace(/width=\d+/,"width=".concat(s)).replace(/w=\d+/,"w=".concat(s))}},67968:function(e,r,t){var a=t(85893),s=t(27134);r.Z=e=>{let{icon:r}=e;return r?r.startsWith("http")||r.startsWith("data:")?(0,a.jsx)(s.Z,{src:r,className:"w-8 h-8 my-auto inline mr-1"}):(0,a.jsx)("span",{className:"mr-1",children:r}):(0,a.jsx)(a.Fragment,{})}},4930:function(e,r,t){var a=t(85893),s=t(69325);r.Z=e=>{let{post:r,className:t}=e;return JSON.parse((0,s.JA)("COMMENT_TWIKOO_COUNT_ENABLE"))?(0,a.jsxs)("a",{href:"".concat(r.slug,"?target=comment"),className:"mx-1 hidden comment-count-wrapper-".concat(r.id," ").concat(t||""),children:[(0,a.jsx)("i",{className:"far fa-comment mr-1"}),(0,a.jsx)("span",{className:"comment-count-text-".concat(r.id)})]}):null}},31761:function(e,r,t){function a(e,r){if(!e||!r)return e||"";let t=new Date(e).toLocaleDateString(r,{year:"numeric",month:"short",day:"numeric"});return"zh"===r.slice(0,2).toLowerCase()?t.replace("年","-").replace("月","-").replace("日",""):t}function s(e,r){let t=new Date(e),a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(let e in/(y+)/.test(r)&&(r=r.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),a)RegExp("("+e+")").test(r)&&(r=r.replace(RegExp.$1,1===RegExp.$1.length?a[e]:("00"+a[e]).substr((""+a[e]).length)));return r.trim()}t.d(r,{Z:function(){return a},x:function(){return s}})},82249:function(e,r,t){t.r(r),t.d(r,{BlogItem:function(){return m}});var a=t(85893),s=t(27134),n=t(67968),l=t(31933),c=t(4930),i=t(69325),o=t(93348),d=t(31761),u=t(41664),h=t.n(u),x=t(74678);let m=e=>{var r,t;let{post:u}=e,{NOTION_CONFIG:m}=(0,o.O)(),f=(0,i.JA)("SIMPLE_POST_COVER_ENABLE",!1,x.default),g=(0,i.JA)("POST_LIST_PREVIEW",!1,m)&&u.blockMap;return(0,a.jsxs)("div",{className:"h-42 my-6 pb-12 border-b dark:border-gray-800",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("div",{className:"article-cover h-full",children:f&&(0,a.jsx)("div",{className:"overflow-hidden mr-2 w-56 h-full",children:(0,a.jsx)(h(),{href:u.href,passHref:!0,legacyBehavior:!0,children:(0,a.jsx)(s.Z,{src:null==u?void 0:u.pageCoverThumbnail,className:"w-56 h-full object-cover object-center group-hover:scale-110 duration-500"})})})}),(0,a.jsxs)("article",{className:"article-info",children:[(0,a.jsx)("h2",{className:"mb-2",children:(0,a.jsxs)(h(),{href:u.href,className:"blog-item-title font-bold text-black text-2xl menu-link",children:[(0,i.JA)("POST_TITLE_ICON")&&(0,a.jsx)(n.Z,{icon:u.pageIcon}),u.title]})}),(0,a.jsxs)("header",{className:"mb-5 text-md text-gray-700 dark:text-gray-300 flex-wrap flex leading-6",children:[(0,a.jsxs)("div",{className:"space-x-2",children:[(0,a.jsxs)("span",{children:[" ",(0,a.jsxs)("a",{href:(0,i.JA)("SIMPLE_AUTHOR_LINK",null,x.default),className:"p-1 hover:text-red-400 transition-all duration-200",children:[(0,a.jsx)("i",{className:"fa-regular fa-user"})," ",(0,i.JA)("AUTHOR")]})]}),(0,a.jsx)("span",{children:(0,a.jsxs)(h(),{className:"p-1 hover:text-red-400 transition-all duration-200",href:"/archive#".concat((0,d.x)(null==u?void 0:u.publishDate,"yyyy-MM")),children:[(0,a.jsx)("i",{className:"fa-regular fa-clock"})," ",(null===(r=u.date)||void 0===r?void 0:r.start_date)||u.createdTime]})}),(0,a.jsx)("span",{children:(0,a.jsx)(c.Z,{post:u})})]}),(0,a.jsxs)("div",{children:[u.category&&(0,a.jsxs)(h(),{href:"/category/".concat(u.category),className:"p-1",children:[" ",(0,a.jsxs)("span",{className:"hover:text-red-400 transition-all duration-200",children:[(0,a.jsx)("i",{className:"fa-regular fa-folder mr-0.5"}),u.category]})]}),(null==u?void 0:u.tags)&&(null==u?void 0:null===(t=u.tags)||void 0===t?void 0:t.length)>0&&(null==u?void 0:u.tags.map(e=>(0,a.jsx)(h(),{href:"/tag/".concat(e),className:" hover:text-red-400 transition-all duration-200",children:(0,a.jsxs)("span",{children:[" /",e]})},e)))]})]}),(0,a.jsxs)("main",{className:"text-gray-700 dark:text-gray-300 leading-normal mb-6",children:[!g&&(0,a.jsxs)(a.Fragment,{children:[u.summary,u.summary&&(0,a.jsx)("span",{children:"..."})]}),g&&(null==u?void 0:u.blockMap)&&(0,a.jsxs)("div",{className:"overflow-ellipsis truncate",children:[(0,a.jsx)(l.default,{post:u}),(0,a.jsx)("hr",{className:"border-dashed py-4"})]})]})]})]}),(0,a.jsx)("div",{className:"block",children:(0,a.jsxs)(h(),{href:u.href,className:"inline-block rounded-sm text-blue-600 dark:text-blue-300  text-xs dark:border-gray-800 border hover:text-red-400 transition-all duration-200 hover:border-red-300 h-9 leading-8 px-5",children:["Continue Reading"," ",(0,a.jsx)("i",{className:"fa-solid fa-angle-right align-middle"})]})})]},u.id)}}}]);