import{j as o}from"./index.2358dd35.js";var p={logEvent(e,a,n,t=null){window.dataLayer.push({appEventCategory:e,appEventAction:a,appEventLabel:n,sessionId:t}),window.dataLayer.push({event:"appEvent"})},logPage(e,a,n=null){window.dataLayer.push({screenPath:e,screenName:a,sessionId:n}),window.dataLayer.push({event:"appScreenView"})}},r=o(async({router:e})=>{e.afterEach(a=>{p.logPage(a.path,a.name)})});export{r as default};
