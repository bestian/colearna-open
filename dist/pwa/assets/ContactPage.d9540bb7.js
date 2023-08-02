import{u as o}from"./use-meta.66f1f4fa.js";import{S as s}from"./Step.03bc38ac.js";import{Q as u}from"./QPage.a1ba8dcd.js";import{t as i,v as a,D as n,A as p,f as r,_ as m,d as c,r as l}from"./index.18097bb9.js";import"./QStepper.d261cb00.js";import"./render.5fabfc26.js";import"./use-panel.df2272e5.js";import"./touch.3df10340.js";import"./selection.a32d342a.js";import"./use-cache.b0833c75.js";import"./vm.78afe1d7.js";import"./QIcon.6d082352.js";import"./Ripple.886f62f6.js";import"./use-dark.8f6d6037.js";function d(t,h,_,f,C,b){const e=i("step");return a(),n(u,{padding:""},{default:p(()=>[r(e,{steps:t.steps},null,8,["steps"])]),_:1})}const g=c({name:"IndexPage",components:{Step:s},props:["uid","me","users","user","email","photoURL","isLogout","isInApp"],setup(){return o({title:"\u806F\u7D61\u6211\u5011",noscript:{default:"This is content for browsers with no JS (or disabled JS)"}}),{steps:l(`
        \u8981\u5982\u4F55\u53C3\u8207\u672C\u5C08\u6848\u7684\u958B\u767C\u5462\uFF1F

        #join #open-source #contribute

        1. [\u5148\u9032\u5165\u6B64\u5C08\u6848](https://www.github.com/bestian/colearna-open/)
        2. [\u770BWiki](https://github.com/bestian/colearna-open/wiki)
        3. [\u770BREADME.md](https://github.com/bestian/colearna-open#readme)
        4. [\u932F\u8AA4\u56DE\u5831\u548C\u529F\u80FD\u5EFA\u8B70\uFF0C\u8ACB\u4E0AIssues](https://github.com/bestian/colearna-open/issues)
        `)}},mounted(){},methods:{go(){this.$nextTick(()=>{this.step++})},loginGoogle(){this.$emit("loginGoogle")},logout(){this.$emit("logout")}}});var G=m(g,[["render",d]]);export{G as default};
