"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30371,30220,15798],{30220:function(e,n,l){l.r(n),l.d(n,{MenuItemDrop:function(){return o}});var i=l(85893),t=l(41664),r=l.n(t),a=l(11163),s=l(67294);let o=e=>{var n;let{link:l}=e,[t,o]=(0,s.useState)(!1),u=(null==l?void 0:null===(n=l.subMenus)||void 0===n?void 0:n.length)>0,d=(0,a.useRouter)().asPath===(null==l?void 0:l.href);return l&&l.show?(0,i.jsxs)("div",{onMouseOver:()=>o(!0),onMouseOut:()=>o(!1),className:"h-full",children:[!u&&(0,i.jsxs)(r(),{href:null==l?void 0:l.href,target:null==l?void 0:l.target,className:"".concat(d&&"border-b-2 border-[#D2232A]"," h-full flex space-x-1 whitespace-nowrap items-center font-sans menu-link pl-2 pr-4  dark:text-gray-200 no-underline tracking-widest pb-1"),children:[(null==l?void 0:l.icon)&&(0,i.jsx)("i",{className:null==l?void 0:l.icon})," ",(0,i.jsx)("div",{children:null==l?void 0:l.name})]}),u&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"h-full flex space-x-1 whitespace-nowrap items-center cursor-pointer font-sans menu-link pl-2 pr-4  dark:text-gray-200 no-underline tracking-widest pb-1",children:[(null==l?void 0:l.icon)&&(0,i.jsx)("i",{className:null==l?void 0:l.icon})," ",(0,i.jsx)("div",{children:null==l?void 0:l.name})]})}),u&&(0,i.jsx)("ul",{style:{backdropFilter:"blur(3px)"},className:"".concat(t?"visible opacity-100 shadow-lg":"invisible opacity-0"," overflow-hidden bg-white transition-all duration-300 z-20 absolute block  "),children:l.subMenus.map((e,n)=>(0,i.jsx)("li",{className:"cursor-pointer hover:bg-red-300 text-gray-900 hover:text-black tracking-widest transition-all duration-200 dark:border-gray-800  py-1 pr-6 pl-3",children:(0,i.jsx)(r(),{href:e.href,target:null==l?void 0:l.target,children:(0,i.jsxs)("span",{className:"text-sm text-nowrap font-extralight",children:[(null==l?void 0:l.icon)&&(0,i.jsx)("i",{className:null==e?void 0:e.icon,children:" \xa0 "}),e.title]})})},n))})]}):null}},30371:function(e,n,l){l.r(n),l.d(n,{MenuListTop:function(){return o}});var i=l(85893),t=l(69325),r=l(93348),a=l(15798),s=l(30220);let o=e=>{let{customNav:n,customMenu:l}=e,{locale:o}=(0,r.O)(),u=[{id:1,icon:"fa-solid fa-house",name:o.NAV.INDEX,href:"/",show:a.default.MENU_INDEX},{id:2,icon:"fas fa-search",name:o.NAV.SEARCH,href:"/search",show:a.default.MENU_SEARCH},{id:3,icon:"fas fa-archive",name:o.NAV.ARCHIVE,href:"/archive",show:a.default.MENU_ARCHIVE}];n&&(u=u.concat(n));for(let e=0;e<u.length;e++)u[e].id!==e&&(u[e].id=e);return((0,t.JA)("CUSTOM_MENU")&&(u=l),u&&0!==u.length)?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("nav",{id:"nav-mobile",className:"leading-8 justify-center font-light w-full flex",children:null==u?void 0:u.map(e=>e&&e.show&&(0,i.jsx)(s.MenuItemDrop,{link:e},null==e?void 0:e.id))})}):null}},15798:function(e,n,l){l.r(n),n.default={COMMERCE_HOME_BANNER_ENABLE:!0,COMMERCE_TEXT_CENTER_TITLE:"Product Center",COMMERCE_TEXT_CENTER_DESCRIPTION:"The vision of NotionNext is to help you effortlessly and seamlessly build your own website, amplifying the value of your brand.",COMMERCE_TEXT_CENTER_CATEGORY_TITLE:"Product Categories",COMMERCE_TEXT_FOOTER_TITLE:"Contact US",COMMERCE_TEXT_FOOTER_MENU_1:"Product Center",COMMERCE_TEXT_FOOTER_MENU_2:"About US",COMMERCE_FOOTER_RIGHT_IMG_URL:null,COMMERCE_FOOTER_RIGHT_TEXT:null,COMMERCE_HOME_POSTS_COUNT:9,COMMERCE_CONTACT_WHATSAPP_SHOW:!0,COMMERCE_CONTACT_TELEGRAM_SHOW:!0}}}]);