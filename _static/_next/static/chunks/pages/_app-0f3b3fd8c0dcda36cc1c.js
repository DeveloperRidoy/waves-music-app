_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"+mbi":function(e,t,o){"use strict";var p,c=new Uint8Array(16);function a(){if(!p&&!(p="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return p(c)}var r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(e){return"string"===typeof e&&r.test(e)},n=[],d=0;d<256;++d)n.push((d+256).toString(16).substr(1));var h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]).toLowerCase();if(!i(o))throw TypeError("Stringified UUID is invalid");return o};var s=function(e,t,o){var p=(e=e||{}).random||(e.rng||a)();if(p[6]=15&p[6]|64,p[8]=63&p[8]|128,t){o=o||0;for(var c=0;c<16;++c)t[o+c]=p[c];return t}return h(p)},l=[{id:s(),name:"Far From Home",artist:"Toonorth",audio:"https://mp3.chillhop.com/serve.php/?mp3=7814",cover:"https://chillhop.com/wp-content/uploads/2020/07/ad7fc4dda66ba986466fd2b1c416b0b12411ee28-1024x1024.jpg"},{id:s(),name:"Rest Until Dark",artist:"Sleepy Fish",audio:"https://mp3.chillhop.com/serve.php/?mp3=10015",cover:"https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg"},{id:s(),name:"Witch Hat",artist:"Sleepy Fish",audio:"https://mp3.chillhop.com/serve.php/?mp3=10021",cover:"https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg"},{id:s(),name:"Endlress Sky",artist:"Sleepy Fish",audio:"https://mp3.chillhop.com/serve.php/?mp3=10017",cover:"https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg"},{id:s(),name:"Butterfly",artist:"Sleepy Fish",audio:"https://mp3.chillhop.com/serve.php/?mp3=10023",cover:"https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg"},{id:s(),name:"After Dark",artist:"Sean lewis",audio:"https://mp3.chillhop.com/serve.php/?mp3=8105",cover:"https://chillhop.com/wp-content/uploads/2020/07/be9e5dca9d4c9015c407a2d2590af8a0e5e278ce-1024x1024.jpg"},{id:s(),name:"Canary Forest",artist:"Middle School, Aso, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg"},{id:s(),name:"Beaver Creek",artist:"Middle School, Aso, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10076",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg"},{id:s(),name:"Under The City Start",artist:"Middle School, Aso, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg"},{id:s(),name:"Maple Leaf Pt.2",artist:"Philanthrope",audio:"https://mp3.chillhop.com/serve.php/?mp3=10243",cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg"},{id:s(),name:"Wild Life",artist:"Philanthrope",audio:"https://mp3.chillhop.com/serve.php/?mp3=10263",cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg"},{id:s(),name:"Upstate",artist:"Philanthrope",audio:"https://mp3.chillhop.com/serve.php/?mp3=10245",cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg"},{id:s(),name:"Ocean Patio",artist:"Philanthrope, Dayle",audio:"https://mp3.chillhop.com/serve.php/?mp3=8036",cover:"https://chillhop.com/wp-content/uploads/2020/07/ad7fc4dda66ba986466fd2b1c416b0b12411ee28-1024x1024.jpg"},{id:s(),name:"Hidden Structure",artist:"Leavv, Flitz&Suppe",audio:"https://mp3.chillhop.com/serve.php/?mp3=9913",cover:"https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg"},{id:s(),name:"Dancing Droplets",artist:"Leavv",audio:"https://mp3.chillhop.com/serve.php/?mp3=9915",cover:"https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg"},{id:s(),name:"Flushing the Stairs",artist:"Leavv",audio:"https://mp3.chillhop.com/serve.php/?mp3=9917",cover:"https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg"},{id:s(),name:"Fox",artist:"Sworn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9224",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg"},{id:s(),name:"Tumbling",artist:"Sworn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9225",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg"}];t.a=l},0:function(e,t,o){o("GcxT"),e.exports=o("nOHt")},"1TCz":function(e,t,o){"use strict";o.r(t);var p=o("rePB"),c=o("nKUr"),a=o("dZHa");o("zPlV");function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,p)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){Object(p.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}t.default=function(e){var t=e.Component,o=e.pageProps;return Object(c.jsx)(a.b,{children:Object(c.jsx)(t,i({},o))})}},GcxT:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o("1TCz")}])},dZHa:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var p=o("nKUr"),c=o("q1tI"),a=o("+mbi"),r=Object(c.createContext)(null);t.b=function(e){var t=e.children,o={libraryStatus:!1,currentSong:{playing:!1,currentTime:0,durationTime:0,name:a.a[0].name,artist:a.a[0].artist,cover:a.a[0].cover,audio:a.a[0].audio,id:a.a[0].id,volume:1},songSelected:!0,loop:!1},i=Object(c.useState)(o),n=i[0],d=i[1];return Object(p.jsx)(r.Provider,{value:[n,d],children:t})}},rePB:function(e,t,o){"use strict";function p(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}o.d(t,"a",(function(){return p}))},zPlV:function(e,t,o){}},[[0,0,1,2]]]);