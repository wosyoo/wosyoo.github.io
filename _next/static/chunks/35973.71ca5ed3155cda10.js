"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35973],{35973:function(e,a,t){t.r(a);var _=t(85893),s=t(69325),r=t(78174),A=t(67294);a.default=()=>{let[e,a]=(0,A.useState)(),t=(0,A.useRef)(null),i=JSON.parse((0,s.JA)("MUSIC_PLAYER_LRC_TYPE")),l=JSON.parse((0,s.JA)("MUSIC_PLAYER_VISIBLE")),E=JSON.parse((0,s.JA)("MUSIC_PLAYER_AUTO_PLAY")),n=JSON.parse((0,s.JA)("MUSIC_PLAYER_METING")),I=(0,s.JA)("MUSIC_PLAYER_ORDER"),R=(0,s.JA)("MUSIC_PLAYER_AUDIO_LIST"),c=(0,s.JA)("MUSIC_PLAYER"),o=(0,s.JA)("MUSIC_PLAYER_CDN_URL"),p=(0,s.JA)("MUSIC_PLAYER_METING"),M=(0,s.JA)("MUSIC_PLAYER_METING_CDN_URL","https://cdnjs.cloudflare.com/ajax/libs/meting/2.0.1/Meting.min.js"),S=async()=>{if(c){try{await (0,r.loadExternalResource)(o,"js")}catch(e){console.error("音乐组件异常",e)}p&&await (0,r.loadExternalResource)(M,"js"),!n&&window.APlayer&&a(new window.APlayer({container:t.current,fixed:!0,lrcType:i,autoplay:E,order:I,audio:R}))}};return(0,A.useEffect)(()=>(S(),()=>{a(void 0)}),[]),(0,_.jsxs)("div",{className:l?"visible":"invisible",children:[(0,_.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.css"}),n?(0,_.jsx)("meting-js",{fixed:"true",type:"playlist",preload:"auto","lrc-type":(0,s.JA)("MUSIC_PLAYER_METING_LRC_TYPE"),api:(0,s.JA)("MUSIC_PLAYER_METING_API","https://api.i-meto.com/meting/api"),autoplay:E,order:(0,s.JA)("MUSIC_PLAYER_ORDER"),server:(0,s.JA)("MUSIC_PLAYER_METING_SERVER"),id:(0,s.JA)("MUSIC_PLAYER_METING_ID")}):(0,_.jsx)("div",{ref:t,"data-player":e})]})}}}]);