import{Q as T}from"./QImg.c938e23e.js";import{Q as n}from"./QIcon.b4043da1.js";import{Q as g}from"./QSeparator.d75f13fe.js";import{Q as C}from"./QItem.0c495f16.js";import{Q as I}from"./QList.ed48b97e.js";import{Q as L}from"./QPage.2d8ed0a5.js";import{u as D}from"./use-meta.e0f0e96f.js";import{_ as F,G as A,aw as S,r as s,t as d,C as v,z as c,x as e,d as o,U as l,B as r,K as k,S as $,v as u,R as w,F as x}from"./index.77d05b19.js";import"./QSpinner.b1074e63.js";import"./render.5ee1ca64.js";import"./use-dark.9e437509.js";import"./use-router-link.bf56abb7.js";import"./vm.78afe1d7.js";const M=A({name:"IndexPage",props:["uid","me","users","user","email","photoURL","isLogout","isInApp","teachers"],setup(t){const m=S(),h={title:t.teachers[Number(m.params.tid)].name,noscript:{default:"This is content for browsers with no JS (or disabled JS)"}};D(h);const p=s({totalCount:1200}),_=s(!1),f=s(!1),i=s(!1),a=s(""),y=s(""),B=s("style"),Q=s(1),b=s("");return{name:a,new_email:y,meta:p,step:Q,slide:B,myKey2:b,done1:_,done2:f,done3:i}},mounted(){},methods:{go(){this.$nextTick(()=>{this.step++})},loginGoogle(){this.$emit("loginGoogle")},logout(){this.$emit("logout")}}}),H={class:"row padded flex flex-center text-left"},N={class:"col-4"},P={class:"margin-left"},E={class:"text-blue margin-left"},G={class:"row padded"},R={class:"col-12"},V={class:"text-left text-dark-green"},J=["innerHTML"],K={class:"row padded"},U={class:"col-12"},z={class:"text-left text-dark-green"},q=["innerHTML"],O={class:"row padded"},W={class:"col-12"},X={class:"text-left text-dark-green"},Y={class:"row padded"},Z={class:"col-12"},j={class:"text-left text-dark-green"},ee={class:"text-dark-gray fluid text-left"};function te(t,m,h,p,_,f){return d(),v(L,{padding:!0},{default:c(()=>[e("div",H,[o(T,{src:t.teachers[t.$route.params.tid].img,style:{width:"150px",height:"150px","border-radius":"50%","margin-left":"2em"}},null,8,["src"]),e("div",N,[e("h4",P,l(t.teachers[t.$route.params.tid].name),1),e("h6",E,[o(n,{name:"check_circle"}),r(" Colearna \u8A8D\u8B49")])])]),o(g),e("div",G,[e("div",R,[e("h4",V,[o(n,{name:"edit_note"}),r("\u7C21\u4ECB")]),e("p",{innerHTML:t.teachers[t.$route.params.tid].des},null,8,J)])]),e("div",K,[e("div",U,[e("h4",z,[o(n,{name:`
  lightbulb_outline`}),r("\u6559\u5B78\u7406\u5FF5")]),e("p",{innerHTML:t.teachers[t.$route.params.tid].thought},null,8,q)])]),k(e("div",O,[e("div",W,[e("h4",X,[o(n,{name:"school"}),r("\u5C08\u696D\u8B49\u7167")]),o(I,null,{default:c(()=>[(d(!0),u(x,null,w(t.teachers[t.$route.params.tid].certifications,(i,a)=>(d(),v(C,{class:"text-dark-gray text-left p-16",key:a},{default:c(()=>[r(l(a+1)+"\uFF1A"+l(i),1)]),_:2},1024))),128))]),_:1})])],512),[[$,t.teachers[t.$route.params.tid].certifications]]),o(g),e("div",Y,[e("div",Z,[e("h4",j,[o(n,{name:"maps_home_work"}),r("\u958B\u8FA6\u8AB2\u7A0B")]),(d(!0),u(x,null,w(t.teachers[t.$route.params.tid].classes,(i,a)=>(d(),u("p",{class:"text-dark-gray fluid text-left",key:a},l(i),1))),128)),k(e("p",ee,"\u9080\u7D04\u4E2D",512),[[$,!t.teachers[t.$route.params.tid].classes]])])])]),_:1})}var _e=F(M,[["render",te],["__scopeId","data-v-0dbe691b"]]);export{_e as default};
