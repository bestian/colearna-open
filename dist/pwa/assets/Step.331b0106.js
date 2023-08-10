import{Q as b,a as T}from"./QStepper.98f1eaf5.js";import{t as k,v as a,D,A as m,y,H as c,x as u,F as w,S as B,B as C,f as A,C as I,d as E,r as Y,o as x,c as V,_ as N}from"./index.01f89363.js";function U(t){let e=t.replace(/\s+/g," ");return e=e.replace(/\n /g,`
`).replace(/ \n/g,`
`),encodeURI(e).replace(/^%20/,"")}var j={mdToURI:U};function R(t){return h(t).steps}function L(t){var e=h(t).steps,s=h(t).intros;return console.log(s),e.title=(s||[]).unshift(),e.intros=s.filter(n=>!n.match(/\.(jpg|png|gif|webp)$/))||[],e.imgs=(s.filter(n=>n.match(/\.(jpg|png|gif|webp)$/))[0]||[]).filter(n=>n.trim()),e}function h(t){const e=t.split(`
`),s=/(.+)/,n=/^(\d+)\.?.+$/,i=/\[(.*?)\]\((.*?)\)/g,d=[],l=[];let g=!1;for(const r of e){const p=r.trim();if(!p||!s.test(p))continue;if(n.test(p)&&(g=!0),!g){l.push(p);continue}const S=p.match(i);if(S&&S.length>0)for(const $ of S){const[v,M,f]=$.match(/\[(.*?)\]\((.*?)\)/);let _;f.startsWith("!")?_={r:f.replace("!","/"),n:p.replace(v,M)}:f.startsWith("http")&&(_={h:f,n:p.replace(v,M)}),d.push(_)}else d.push({n:p})}const o=l.pop().split("#").map(r=>r.replace(" ","")).filter(r=>r.trim());return{intros:l,steps:d,tags:o}}const Q=`
## \u5B78\u7FD2\u6599\u7406\u7684\u6B65\u9A5F
\u5B78\u7FD2\u6599\u7406\uFF0C\u5176\u5BE6\u5F88\u7C21\u55AE

#\u751F\u6D3B #\u5EDA\u85DD #\u6292\u58D3

1. \u5148\u5728\u5BB6\u88E1\u5EDA\u623F\u5E6B\u5FD9
2. \u53EF\u4EE5\u5230[\u81EA\u7136\u7F8E\u98DFDIY\u7DB2\u7AD9](https://food.bestian.tw)
3. \u8ACB\u770B[\u95DC\u65BC\u6211\u5011](!about)`,q={intros:["## \u5B78\u7FD2\u6599\u7406\u7684\u6B65\u9A5F","\u5B78\u7FD2\u6599\u7406\uFF0C\u5176\u5BE6\u5F88\u7C21\u55AE"],tags:["\u751F\u6D3B","\u5EDA\u85DD","\u6292\u58D3"],steps:[{n:"1. \u5148\u5728\u5BB6\u88E1\u5EDA\u623F\u5E6B\u5FD9"},{h:"https://food.bestian.tw",n:"2. \u53EF\u4EE5\u5230\u81EA\u7136\u7F8E\u98DFDIY\u7DB2\u7AD9"},{r:"/about",n:"3. \u8ACB\u770B\u95DC\u65BC\u6211\u5011"}]},H=`
## \u5B78\u7FD2\u6599\u7406\u7684\u6B65\u9A5F
\u5B78\u7FD2\u6599\u7406\uFF0C\u5176\u5BE6\u5F88\u7C21\u55AE

#\u751F\u6D3B #\u5EDA\u85DD #\u6292\u58D3

1. \u5148\u5728\u5BB6\u88E1\u5EDA\u623F\u5E6B\u5FD9
2. \u81EA\u7136\u7F8E\u98DFDIY\u7DB2\u7AD9
3. \u95DC\u65BC\u6211\u5011
`,W={title:"## \u5B78\u7FD2\u6599\u7406\u7684\u6B65\u9A5F",intros:["\u5B78\u7FD2\u6599\u7406\uFF0C\u5176\u5BE6\u5F88\u7C21\u55AE"],imgs:[],tags:["\u751F\u6D3B","\u5EDA\u85DD","\u6292\u58D3"],steps:[{n:"1. \u5148\u5728\u5BB6\u88E1\u5EDA\u623F\u5E6B\u5FD9"},{h:"https://food.bestian.tw",n:"2. \u81EA\u7136\u7F8E\u98DFDIY\u7DB2\u7AD9"},{r:"/about",n:"3. \u95DC\u65BC\u6211\u5011"}]};var O={parseMarkdownToSteps:h,parseSimpleSteps:R,parseComplexSteps:L,step_input:Q,step_output:q,setp_input_complex:H,step_output_complex:W};function P(t){return(t||"").split(",").filter(e=>e.trim())}var z={parseTags:P};function G(t){var e=new Date(t),s=new Date,n=s.getFullYear()-e.getFullYear();return(s.getMonth()<e.getMonth()||s.getMonth()==e.getMonth()&&s.getDate()<e.getDate())&&n--,n}function J(t,e){var s=new Date(e),n=new Date(t),i=n.getFullYear()-s.getFullYear();return(n.getMonth()<s.getMonth()||n.getMonth()==s.getMonth()&&n.getDate()<s.getDate())&&i--,i}var K={countAge:G,countAgeDiff:J};function X(t){const e=new Date,s=e.getFullYear()+"-"+String(e.getMonth()+1).padStart(2,"0")+"-"+String(e.getDate()).padStart(2,"0")+"T"+String(e.getHours()).padStart(2,"0")+":"+String(e.getMinutes()).padStart(2,"0");return t+s}var Z={autoId:X};const{mdToURI:tt}=j,{parseMarkdownToSteps:et,parseSimpleSteps:st,parseComplexSteps:nt,step_input:ot,step_output:rt,step_input_complex:at,step_output_complex:pt}=O,{parseTags:ut}=z,{countAge:it,countAgeDiff:lt}=K,{autoId:ct}=Z;var F={autoId:ct,mdToURI:tt,countAge:it,countAgeDiff:lt,parseTags:ut,parseMarkdownToSteps:et,parseSimpleSteps:st,parseComplexSteps:nt,step_input:ot,step_output:rt,step_input_complex:at,step_output_complex:pt};const dt={class:"text-dark-green"},gt={key:0},ft=["href"],mt={key:2};function ht(t,e,s,n,i,d){const l=k("router-link"),g=k("q-pa-md");return a(),D(g,null,{default:m(()=>[y("h4",dt,c(t.parsedSteps.intros[0]),1),t.parsedSteps&&t.parsedSteps.intros&&t.parsedSteps.intros.length>0?(a(),u("div",gt,[(a(!0),u(w,null,B(t.parsedSteps.intros,(o,r)=>(a(),u("h6",{class:"text-dark-gray",key:r},c(o),1))),128))])):C("",!0),A(b,{modelValue:t.step,"onUpdate:modelValue":e[0]||(e[0]=o=>t.step=o),"header-nav":"",ref:"stepper",color:"primary",animated:"",rounded:"",bordered:"",vertical:""},{default:m(()=>[(a(!0),u(w,null,B(t.parsedSteps.steps,(o,r)=>(a(),D(T,{name:r,title:o.n,icon:"blind",done:t.step>r},{default:m(()=>[o.r?(a(),D(l,{key:0,to:o.r},{default:m(()=>[I(c(o.n),1)]),_:2},1032,["to"])):o.h?(a(),u("a",{key:1,href:o.h,target:"_blank",rel:"noopener noreferrer"},c(o.n),9,ft)):(a(),u("p",mt,c(o.n||""),1))]),_:2},1032,["name","title","done"]))),256))]),_:1},8,["modelValue"])]),_:1})}const St=E({name:"StepPer",props:{steps:{type:String,default:`
      \u5B78\u7FD2\u6599\u7406\u7684\u6B65\u9A5F\u6709\u54EA\u4E9B\uFF1F
      \u8B93\u6211\u5011\u4F86\u770B\u770B\u5427\uFF01

        1.\u5148\u5728\u5BB6\u88E1\u5EDA\u623F\u5E6B\u5FD9
        2.\u89C0\u5BDF\u5916\u98DF\u5E97\u5BB6\u7684\u98DF\u6750\u642D\u914D
        3.\u63A1\u8CFC\u7684\u6642\u5019\uFF0C\u5E6B\u5FD9\u4E00\u8D77\u63A1\u8CFC
        `}},setup(t){const e=Y(0);return x(()=>{console.log("mounted"),console.log(t.steps),console.log(F.parseMarkdownToSteps(t.steps))}),{step:e,parseMarkdownToSteps:F.parseMarkdownToSteps,parsedSteps:V(()=>F.parseMarkdownToSteps(t.steps))}}});var Ft=N(St,[["render",ht]]);export{Ft as S,F as e};
