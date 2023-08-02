import{Q as A}from"./QIcon.6d082352.js";import{Q as v}from"./QInput.d1a9891f.js";import{Q as f}from"./QBtn.944b07d1.js";import{Q as K}from"./QImg.1b5986fe.js";import{Q}from"./QCardSection.1a712652.js";import{Q as w}from"./QCard.5905d466.js";import{Q as x}from"./QPage.a1ba8dcd.js";import{u as I}from"./use-meta.66f1f4fa.js";import{_ as $,d as B,r as a,v as i,D as m,A as r,y as s,f as l,C as g,z as h,x as _,S as C,F as k,H as u,E as S,G as D}from"./index.18097bb9.js";import"./render.5fabfc26.js";import"./use-key-composition.492df6eb.js";import"./QSpinner.05d8e97a.js";import"./use-dark.8f6d6037.js";import"./Ripple.886f62f6.js";import"./use-router-link.3dd3ea6d.js";import"./vm.78afe1d7.js";const F=B({name:"ArticlesPage",props:["uid","me","users","articles","trips","user","email","photoURL","isLogout","isInApp","myKey","dummyImg"],setup(){I({title:"\u6700\u65B0\u6D88\u606F",noscript:{default:"This is content for browsers with no JS (or disabled JS)"}});const o=a({totalCount:1200}),n=a(0),c=a(""),p=a("style"),y=a(["\u5C08\u6B04","\u8A2A\u8AC7","\u89AA\u8077","\u6700\u65B0\u6D88\u606F"]);return{meta:o,step:n,myKey2:c,slide:p,cs:y}},mounted(){},methods:{fil(e,o){return o?e.filter(function(n){return JSON.stringify(n).indexOf(o)>-1}):e},go(){this.$nextTick(()=>{this.step++})},loginGoogle(){this.$emit("loginGoogle")},logout(){this.$emit("logout")},noHTML(e){return e.replace(/<\/?div.+?>/g,"").replace(/<p>/g,"").replace(/<\p>/g,"")},gotoA(e){this.$router.push("/zoom_in_art/"+e)}}}),V=e=>(S("data-v-64baa384"),e=e(),D(),e),E={class:"row light-yellow-back long-padded"},L={id:"news-search",class:"text-center med"},T={class:"text-center fluid"},N={class:"row white-back flex flex-center padded"},P=V(()=>s("h2",{class:"text-center fluid text-dark-green"},"\u6700\u65B0\u6587\u7AE0",-1)),z={class:"text-left text-black bold"},G={class:"text-left text-gray bold"},H={class:"text-left text-gray tiny"};function J(e,o,n,c,p,y){return i(),m(x,null,{default:r(()=>[s("div",E,[s("h4",L,[l(v,{modelValue:e.myKey2,"onUpdate:modelValue":o[0]||(o[0]=t=>e.myKey2=t),type:"search",rounded:"rounded",outlined:"outlined",placeholder:"\u641C\u5C0B"},{append:r(()=>[l(A,{name:"search"})]),_:1},8,["modelValue"])]),s("h4",T,[l(f,{unelevated:"",rounded:"",class:h(["margin",{"or-back":e.myKey2=="","text-white":e.myKey2=="","text-gray":e.myKey2!="","gray-bordered":e.myKey2!=""}]),onClick:o[1]||(o[1]=t=>e.myKey2="")},{default:r(()=>[g("\u5168\u90E8\u6587\u7AE0")]),_:1},8,["class"]),(i(!0),_(k,null,C(e.cs,(t,d)=>(i(),m(f,{unelevated:"",rounded:"",class:h(["margin",{"or-back":e.myKey2==t,"text-white":e.myKey2==t,"text-gray":e.myKey2!=t,"gray-bordered":e.myKey2!=t}]),key:d,onClick:b=>e.myKey2=t},{default:r(()=>[g(u(t),1)]),_:2},1032,["onClick","class"]))),128))])]),s("div",N,[P,(i(!0),_(k,null,C(e.articles,(t,d)=>(i(),m(w,{class:"my-article-card clickable",key:d,onClick:b=>e.gotoA(t.id)},{default:r(()=>[l(K,{fit:"contain",src:t.img||e.dummyImg,alt:t.title,style:{"max-height":"280px"}},null,8,["src","alt"]),l(Q,null,{default:r(()=>[s("h4",z,u(t.title||t.id),1),s("h6",G,u(t.sub||e.noHTML(t.text).substring(0,50))+" ... ",1),s("p",H,u(t.author||"\u672C\u5718\u968A\u8207AI\u5408\u4F5C\u751F\u6210"),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))])]),_:1})}var ie=$(F,[["render",J],["__scopeId","data-v-64baa384"]]);export{ie as default};