import{u as i}from"./use-meta.66f1f4fa.js";import{Q as n}from"./QPage.a1ba8dcd.js";import{v as p,D as c,A as d,E as u,G as _,y as a,_ as l,d as m,r as t}from"./index.18097bb9.js";import"./render.5fabfc26.js";const h=e=>(u("data-v-458e4915"),e=e(),_(),e),f=h(()=>a("div",{class:"row padded"},[a("h4",null,"\u65BD\u5DE5\u4E2D")],-1));function g(e,r,o,s,$,w){return p(),c(n,{class:"faq"},{default:d(()=>[f]),_:1})}const v=m({name:"FAQPage",props:["uid","me","users","user","email","photoURL","isLogout","isInApp"],setup(){const e=t([]);i({title:"FAQ",noscript:{default:"This is content for browsers with no JS (or disabled JS)"}});const o=t({totalCount:1200}),s=t(0);return{meta:o,step:s,show:e}},mounted(){},methods:{go(){this.$nextTick(()=>{this.step++})},loginGoogle(){this.$emit("loginGoogle")},logout(){this.$emit("logout")}}});var S=l(v,[["render",g],["__scopeId","data-v-458e4915"]]);export{S as default};
