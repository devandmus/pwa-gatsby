"use strict";(self.webpackChunkpwa_gastby=self.webpackChunkpwa_gastby||[]).push([[678],{615:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var o=n(294),c={padding:"16px",margin:"auto",borderRadius:"8px",backgroundColor:"#6a3280",border:0,color:"white",cursor:"pointer"},r=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],r=(0,o.useRef)(null);return(0,o.useLayoutEffect)((function(){window&&window.addEventListener("beforeinstallprompt",(function(e){console.log("APP NOT INSTALLED"),e.preventDefault(),r.current=e,n(!0)}))}),[]),o.createElement(o.Fragment,null,t&&o.createElement("button",{type:"button",onClick:function(){var e=r.current;e.prompt(),e.userChoice.then((function(e){"accepted"===e.outcome?(n(!1),console.log("Accepted")):console.log("Not accepted")}))},style:Object.assign({},c)},"Click here to install"))},a=function(){return o.createElement("main",{className:"container"},o.createElement("section",{className:"section"},o.createElement("h1",{className:"title"},"PWA Gastby test"),o.createElement("p",{className:"subtitle"},"PWA test ",o.createElement("strong",null,"only works in Chrome!"),"!"),o.createElement(r,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-14a6035370db4f7acc5b.js.map