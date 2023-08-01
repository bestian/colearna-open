import{c as M,ap as Ge,aq as xt,r as A,w as ne,h,Y as re,g as Ht,ar as Ct,n as Le}from"./index.77d05b19.js";import{Q as N}from"./QBtn.945b3288.js";import{u as qt,a as kt}from"./use-dark.9e437509.js";import{u as Ot}from"./use-cache.b0833c75.js";import{b as It,l as jt,j as Tt}from"./use-key-composition.c346f35a.js";import{p as b}from"./format.3e32b8d9.js";import{c as Vt,a as $t}from"./render.5ee1ca64.js";const Q=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function Ft(e,r,c){return Object.prototype.toString.call(e)==="[object Date]"&&(c=e.getDate(),r=e.getMonth()+1,e=e.getFullYear()),Zt(qe(e,r,c))}function Qe(e,r,c){return pe(Nt(e,r,c))}function Et(e){return At(e)===0}function fe(e,r){return r<=6?31:r<=11||Et(e)?30:29}function At(e){const r=Q.length;let c=Q[0],u,d,o,D,i;if(e<c||e>=Q[r-1])throw new Error("Invalid Jalaali year "+e);for(i=1;i<r&&(u=Q[i],d=u-c,!(e<u));i+=1)c=u;return D=e-c,d-D<6&&(D=D-d+S(d+4,33)*33),o=I(I(D+1,33)-1,4),o===-1&&(o=4),o}function Ke(e,r){const c=Q.length,u=e+621;let d=-14,o=Q[0],D,i,m,x,f;if(e<o||e>=Q[c-1])throw new Error("Invalid Jalaali year "+e);for(f=1;f<c&&(D=Q[f],i=D-o,!(e<D));f+=1)d=d+S(i,33)*8+S(I(i,33),4),o=D;x=e-o,d=d+S(x,33)*8+S(I(x,33)+3,4),I(i,33)===4&&i-x===4&&(d+=1);const Y=S(u,4)-S((S(u,100)+1)*3,4)-150,F=20+d-Y;return r||(i-x<6&&(x=x-i+S(i+4,33)*33),m=I(I(x+1,33)-1,4),m===-1&&(m=4)),{leap:m,gy:u,march:F}}function Nt(e,r,c){const u=Ke(e,!0);return qe(u.gy,3,u.march)+(r-1)*31-S(r,7)*(r-7)+c-1}function Zt(e){const r=pe(e).gy;let c=r-621,u,d,o;const D=Ke(c,!1),i=qe(r,3,D.march);if(o=e-i,o>=0){if(o<=185)return d=1+S(o,31),u=I(o,31)+1,{jy:c,jm:d,jd:u};o-=186}else c-=1,o+=179,D.leap===1&&(o+=1);return d=7+S(o,30),u=I(o,30)+1,{jy:c,jm:d,jd:u}}function qe(e,r,c){let u=S((e+S(r-8,6)+100100)*1461,4)+S(153*I(r+9,12)+2,5)+c-34840408;return u=u-S(S(e+100100+S(r-8,6),100)*3,4)+752,u}function pe(e){let r=4*e+139361631;r=r+S(S(4*e+183187720,146097)*3,4)*4-3908;const c=S(I(r,1461),4)*5+308,u=S(I(c,153),5)+1,d=I(S(c,153),12)+1;return{gy:S(r,1461)-100100+S(8-d,6),gm:d,gd:u}}function S(e,r){return~~(e/r)}function I(e,r){return e-~~(e/r)*r}const Bt=["gregorian","persian"],zt={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:e=>Bt.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},Lt=["update:modelValue"];function z(e){return e.year+"/"+b(e.month)+"/"+b(e.day)}function Qt(e,r){const c=M(()=>e.disable!==!0&&e.readonly!==!0),u=M(()=>c.value===!0?0:-1),d=M(()=>{const i=[];return e.color!==void 0&&i.push(`bg-${e.color}`),e.textColor!==void 0&&i.push(`text-${e.textColor}`),i.join(" ")});function o(){return e.locale!==void 0?{...r.lang.date,...e.locale}:r.lang.date}function D(i){const m=new Date,x=i===!0?null:0;if(e.calendar==="persian"){const f=Ft(m);return{year:f.jy,month:f.jm,day:f.jd}}return{year:m.getFullYear(),month:m.getMonth()+1,day:m.getDate(),hour:x,minute:x,second:x,millisecond:x}}return{editable:c,tabindex:u,headerClass:d,getLocale:o,getCurrentDate:D}}const et=864e5,Rt=36e5,Ce=6e4,tt="YYYY-MM-DDTHH:mm:ss.SSSZ",Xt=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,Pt=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,xe={};function Jt(e,r){const c="("+r.days.join("|")+")",u=e+c;if(xe[u]!==void 0)return xe[u];const d="("+r.daysShort.join("|")+")",o="("+r.months.join("|")+")",D="("+r.monthsShort.join("|")+")",i={};let m=0;const x=e.replace(Pt,Y=>{switch(m++,Y){case"YY":return i.YY=m,"(-?\\d{1,2})";case"YYYY":return i.YYYY=m,"(-?\\d{1,4})";case"M":return i.M=m,"(\\d{1,2})";case"MM":return i.M=m,"(\\d{2})";case"MMM":return i.MMM=m,D;case"MMMM":return i.MMMM=m,o;case"D":return i.D=m,"(\\d{1,2})";case"Do":return i.D=m++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return i.D=m,"(\\d{2})";case"H":return i.H=m,"(\\d{1,2})";case"HH":return i.H=m,"(\\d{2})";case"h":return i.h=m,"(\\d{1,2})";case"hh":return i.h=m,"(\\d{2})";case"m":return i.m=m,"(\\d{1,2})";case"mm":return i.m=m,"(\\d{2})";case"s":return i.s=m,"(\\d{1,2})";case"ss":return i.s=m,"(\\d{2})";case"S":return i.S=m,"(\\d{1})";case"SS":return i.S=m,"(\\d{2})";case"SSS":return i.S=m,"(\\d{3})";case"A":return i.A=m,"(AM|PM)";case"a":return i.a=m,"(am|pm)";case"aa":return i.aa=m,"(a\\.m\\.|p\\.m\\.)";case"ddd":return d;case"dddd":return c;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return i.Z=m,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return i.ZZ=m,"(Z|[+-]\\d{2}\\d{2})";case"X":return i.X=m,"(-?\\d+)";case"x":return i.x=m,"(-?\\d{4,})";default:return m--,Y[0]==="["&&(Y=Y.substring(1,Y.length-1)),Y.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),f={map:i,regex:new RegExp("^"+x)};return xe[u]=f,f}function at(e,r){return e!==void 0?e:r!==void 0?r.date:xt.date}function Re(e,r=""){const c=e>0?"-":"+",u=Math.abs(e),d=Math.floor(u/60),o=u%60;return c+b(d)+r+b(o)}function Wt(e,r,c,u,d){const o={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(d!==void 0&&Object.assign(o,d),e==null||e===""||typeof e!="string")return o;r===void 0&&(r=tt);const D=at(c,Ge.props),i=D.months,m=D.monthsShort,{regex:x,map:f}=Jt(r,D),Y=e.match(x);if(Y===null)return o;let F="";if(f.X!==void 0||f.x!==void 0){const T=parseInt(Y[f.X!==void 0?f.X:f.x],10);if(isNaN(T)===!0||T<0)return o;const V=new Date(T*(f.X!==void 0?1e3:1));o.year=V.getFullYear(),o.month=V.getMonth()+1,o.day=V.getDate(),o.hour=V.getHours(),o.minute=V.getMinutes(),o.second=V.getSeconds(),o.millisecond=V.getMilliseconds()}else{if(f.YYYY!==void 0)o.year=parseInt(Y[f.YYYY],10);else if(f.YY!==void 0){const T=parseInt(Y[f.YY],10);o.year=T<0?T:2e3+T}if(f.M!==void 0){if(o.month=parseInt(Y[f.M],10),o.month<1||o.month>12)return o}else f.MMM!==void 0?o.month=m.indexOf(Y[f.MMM])+1:f.MMMM!==void 0&&(o.month=i.indexOf(Y[f.MMMM])+1);if(f.D!==void 0){if(o.day=parseInt(Y[f.D],10),o.year===null||o.month===null||o.day<1)return o;const T=u!=="persian"?new Date(o.year,o.month,0).getDate():fe(o.year,o.month);if(o.day>T)return o}f.H!==void 0?o.hour=parseInt(Y[f.H],10)%24:f.h!==void 0&&(o.hour=parseInt(Y[f.h],10)%12,(f.A&&Y[f.A]==="PM"||f.a&&Y[f.a]==="pm"||f.aa&&Y[f.aa]==="p.m.")&&(o.hour+=12),o.hour=o.hour%24),f.m!==void 0&&(o.minute=parseInt(Y[f.m],10)%60),f.s!==void 0&&(o.second=parseInt(Y[f.s],10)%60),f.S!==void 0&&(o.millisecond=parseInt(Y[f.S],10)*10**(3-Y[f.S].length)),(f.Z!==void 0||f.ZZ!==void 0)&&(F=f.Z!==void 0?Y[f.Z].replace(":",""):Y[f.ZZ],o.timezoneOffset=(F[0]==="+"?-1:1)*(60*F.slice(1,3)+1*F.slice(3,5)))}return o.dateHash=b(o.year,6)+"/"+b(o.month)+"/"+b(o.day),o.timeHash=b(o.hour)+":"+b(o.minute)+":"+b(o.second)+F,o}function Xe(e){const r=new Date(e.getFullYear(),e.getMonth(),e.getDate());r.setDate(r.getDate()-(r.getDay()+6)%7+3);const c=new Date(r.getFullYear(),0,4);c.setDate(c.getDate()-(c.getDay()+6)%7+3);const u=r.getTimezoneOffset()-c.getTimezoneOffset();r.setHours(r.getHours()-u);const d=(r-c)/(et*7);return 1+Math.floor(d)}function Z(e,r,c){const u=new Date(e),d=`set${c===!0?"UTC":""}`;switch(r){case"year":case"years":u[`${d}Month`](0);case"month":case"months":u[`${d}Date`](1);case"day":case"days":case"date":u[`${d}Hours`](0);case"hour":case"hours":u[`${d}Minutes`](0);case"minute":case"minutes":u[`${d}Seconds`](0);case"second":case"seconds":u[`${d}Milliseconds`](0)}return u}function ve(e,r,c){return(e.getTime()-e.getTimezoneOffset()*Ce-(r.getTime()-r.getTimezoneOffset()*Ce))/c}function nt(e,r,c="days"){const u=new Date(e),d=new Date(r);switch(c){case"years":case"year":return u.getFullYear()-d.getFullYear();case"months":case"month":return(u.getFullYear()-d.getFullYear())*12+u.getMonth()-d.getMonth();case"days":case"day":case"date":return ve(Z(u,"day"),Z(d,"day"),et);case"hours":case"hour":return ve(Z(u,"hour"),Z(d,"hour"),Rt);case"minutes":case"minute":return ve(Z(u,"minute"),Z(d,"minute"),Ce);case"seconds":case"second":return ve(Z(u,"second"),Z(d,"second"),1e3)}}function Pe(e){return nt(e,Z(e,"year"),"days")+1}function Je(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const We={YY(e,r,c){const u=this.YYYY(e,r,c)%100;return u>=0?b(u):"-"+b(Math.abs(u))},YYYY(e,r,c){return c!=null?c:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return b(e.getMonth()+1)},MMM(e,r){return r.monthsShort[e.getMonth()]},MMMM(e,r){return r.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return Je(this.Q(e))},D(e){return e.getDate()},Do(e){return Je(e.getDate())},DD(e){return b(e.getDate())},DDD(e){return Pe(e)},DDDD(e){return b(Pe(e),3)},d(e){return e.getDay()},dd(e,r){return this.dddd(e,r).slice(0,2)},ddd(e,r){return r.daysShort[e.getDay()]},dddd(e,r){return r.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return Xe(e)},ww(e){return b(Xe(e))},H(e){return e.getHours()},HH(e){return b(e.getHours())},h(e){const r=e.getHours();return r===0?12:r>12?r%12:r},hh(e){return b(this.h(e))},m(e){return e.getMinutes()},mm(e){return b(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return b(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return b(Math.floor(e.getMilliseconds()/10))},SSS(e){return b(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,r,c,u){const d=u==null?e.getTimezoneOffset():u;return Re(d,":")},ZZ(e,r,c,u){const d=u==null?e.getTimezoneOffset():u;return Re(d)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function Ut(e,r,c,u,d){if(e!==0&&!e||e===1/0||e===-1/0)return;const o=new Date(e);if(isNaN(o))return;r===void 0&&(r=tt);const D=at(c,Ge.props);return r.replace(Xt,(i,m)=>i in We?We[i](o,D,u,d):m===void 0?i:m.split("\\]").join("]"))}const J=20,Gt=["Calendar","Years","Months"],Ue=e=>Gt.includes(e),He=e=>/^-?[\d]+\/[0-1]\d$/.test(e),p=" \u2014 ";function L(e){return e.year+"/"+b(e.month)}var oa=Vt({name:"QDate",props:{...zt,...It,...qt,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:He},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:He},navigationMaxYearMonth:{type:String,validator:He},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:Ue}},emits:[...Lt,"rangeStart","rangeEnd","navigation"],setup(e,{slots:r,emit:c}){const{proxy:u}=Ht(),{$q:d}=u,o=kt(e,d),{getCache:D}=Ot(),{tabindex:i,headerClass:m,getLocale:x,getCurrentDate:f}=Qt(e,d);let Y;const F=jt(e),T=Tt(F),V=A(null),R=A(Fe()),H=A(x()),rt=M(()=>Fe()),ot=M(()=>x()),E=M(()=>f()),g=A(Ee(R.value,H.value)),O=A(e.defaultView),ke=d.lang.rtl===!0?"right":"left",oe=A(ke.value),me=A(ke.value),he=g.value.year,le=A(he-he%J-(he<0?J:0)),C=A(null),lt=M(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(o.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),X=M(()=>e.color||"primary"),W=M(()=>e.textColor||"white"),ue=M(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),ge=M(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),$=M(()=>ge.value.filter(t=>typeof t=="string").map(t=>Ye(t,R.value,H.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),U=M(()=>{const t=a=>Ye(a,R.value,H.value);return ge.value.filter(a=>Ct(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),ie=M(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=Qe(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),ye=M(()=>e.calendar==="persian"?z:(t,a,n)=>Ut(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?R.value:a,n===void 0?H.value:n,t.year,t.timezoneOffset)),ee=M(()=>$.value.length+U.value.reduce((t,a)=>t+1+nt(ie.value(a.to),ie.value(a.from)),0)),Oe=M(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length!==0)return e.title;if(C.value!==null){const n=C.value.init,s=ie.value(n);return H.value.daysShort[s.getDay()]+", "+H.value.monthsShort[n.month-1]+" "+n.day+p+"?"}if(ee.value===0)return p;if(ee.value>1)return`${ee.value} ${H.value.pluralDay}`;const t=$.value[0],a=ie.value(t);return isNaN(a.valueOf())===!0?p:H.value.headerTitle!==void 0?H.value.headerTitle(a,t):H.value.daysShort[a.getDay()]+", "+H.value.monthsShort[t.month-1]+" "+t.day}),ut=M(()=>$.value.concat(U.value.map(a=>a.from)).sort((a,n)=>a.year-n.year||a.month-n.month)[0]),it=M(()=>$.value.concat(U.value.map(a=>a.to)).sort((a,n)=>n.year-a.year||n.month-a.month)[0]),Ie=M(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length!==0)return e.subtitle;if(ee.value===0)return p;if(ee.value>1){const t=ut.value,a=it.value,n=H.value.monthsShort;return n[t.month-1]+(t.year!==a.year?" "+t.year+p+n[a.month-1]+" ":t.month!==a.month?p+n[a.month-1]:"")+" "+a.year}return $.value[0].year}),se=M(()=>{const t=[d.iconSet.datetime.arrowLeft,d.iconSet.datetime.arrowRight];return d.lang.rtl===!0?t.reverse():t}),je=M(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):H.value.firstDayOfWeek),st=M(()=>{const t=H.value.daysShort,a=je.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),B=M(()=>{const t=g.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():fe(t.year,t.month)}),ct=M(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),q=M(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),k=M(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),Me=M(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return q.value!==null&&q.value.year>=g.value.year&&(t.year.prev=!1,q.value.year===g.value.year&&q.value.month>=g.value.month&&(t.month.prev=!1)),k.value!==null&&k.value.year<=g.value.year&&(t.year.next=!1,k.value.year===g.value.year&&k.value.month<=g.value.month&&(t.month.next=!1)),t}),ce=M(()=>{const t={};return $.value.forEach(a=>{const n=L(a);t[n]===void 0&&(t[n]=[]),t[n].push(a.day)}),t}),Te=M(()=>{const t={};return U.value.forEach(a=>{const n=L(a.from),s=L(a.to);if(t[n]===void 0&&(t[n]=[]),t[n].push({from:a.from.day,to:n===s?a.to.day:void 0,range:a}),n<s){let l;const{year:_,month:v}=a.from,y=v<12?{year:_,month:v+1}:{year:_+1,month:1};for(;(l=L(y))<=s;)t[l]===void 0&&(t[l]=[]),t[l].push({from:void 0,to:l===s?a.to.day:void 0,range:a}),y.month++,y.month>12&&(y.year++,y.month=1)}}),t}),te=M(()=>{if(C.value===null)return;const{init:t,initHash:a,final:n,finalHash:s}=C.value,[l,_]=a<=s?[t,n]:[n,t],v=L(l),y=L(_);if(v!==j.value&&y!==j.value)return;const w={};return v===j.value?(w.from=l.day,w.includeFrom=!0):w.from=1,y===j.value?(w.to=_.day,w.includeTo=!0):w.to=B.value,w}),j=M(()=>L(g.value)),dt=M(()=>{const t={};if(e.options===void 0){for(let n=1;n<=B.value;n++)t[n]=!0;return t}const a=typeof e.options=="function"?e.options:n=>e.options.includes(n);for(let n=1;n<=B.value;n++){const s=j.value+"/"+b(n);t[n]=a(s)}return t}),vt=M(()=>{const t={};if(e.events===void 0)for(let a=1;a<=B.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:n=>e.events.includes(n);for(let n=1;n<=B.value;n++){const s=j.value+"/"+b(n);t[n]=a(s)===!0&&ct.value(s)}}return t}),ft=M(()=>{let t,a;const{year:n,month:s}=g.value;if(e.calendar!=="persian")t=new Date(n,s-1,1),a=new Date(n,s-1,0).getDate();else{const l=Qe(n,s,1);t=new Date(l.gy,l.gm-1,l.gd);let _=s-1,v=n;_===0&&(_=12,v--),a=fe(v,_)}return{days:t.getDay()-je.value-1,endDay:a}}),Ve=M(()=>{const t=[],{days:a,endDay:n}=ft.value,s=a<0?a+7:a;if(s<6)for(let v=n-s;v<=n;v++)t.push({i:v,fill:!0});const l=t.length;for(let v=1;v<=B.value;v++){const y={i:v,event:vt.value[v],classes:[]};dt.value[v]===!0&&(y.in=!0,y.flat=!0),t.push(y)}if(ce.value[j.value]!==void 0&&ce.value[j.value].forEach(v=>{const y=l+v-1;Object.assign(t[y],{selected:!0,unelevated:!0,flat:!1,color:X.value,textColor:W.value})}),Te.value[j.value]!==void 0&&Te.value[j.value].forEach(v=>{if(v.from!==void 0){const y=l+v.from-1,w=l+(v.to||B.value)-1;for(let ae=y;ae<=w;ae++)Object.assign(t[ae],{range:v.range,unelevated:!0,color:X.value,textColor:W.value});Object.assign(t[y],{rangeFrom:!0,flat:!1}),v.to!==void 0&&Object.assign(t[w],{rangeTo:!0,flat:!1})}else if(v.to!==void 0){const y=l+v.to-1;for(let w=l;w<=y;w++)Object.assign(t[w],{range:v.range,unelevated:!0,color:X.value,textColor:W.value});Object.assign(t[y],{flat:!1,rangeTo:!0})}else{const y=l+B.value-1;for(let w=l;w<=y;w++)Object.assign(t[w],{range:v.range,unelevated:!0,color:X.value,textColor:W.value})}}),te.value!==void 0){const v=l+te.value.from-1,y=l+te.value.to-1;for(let w=v;w<=y;w++)t[w].color=X.value,t[w].editRange=!0;te.value.includeFrom===!0&&(t[v].editRangeFrom=!0),te.value.includeTo===!0&&(t[y].editRangeTo=!0)}g.value.year===E.value.year&&g.value.month===E.value.month&&(t[l+E.value.day-1].today=!0);const _=t.length%7;if(_>0){const v=7-_;for(let y=1;y<=v;y++)t.push({i:y,fill:!0})}return t.forEach(v=>{let y="q-date__calendar-item ";v.fill===!0?y+="q-date__calendar-item--fill":(y+=`q-date__calendar-item--${v.in===!0?"in":"out"}`,v.range!==void 0&&(y+=` q-date__range${v.rangeTo===!0?"-to":v.rangeFrom===!0?"-from":""}`),v.editRange===!0&&(y+=` q-date__edit-range${v.editRangeFrom===!0?"-from":""}${v.editRangeTo===!0?"-to":""}`),(v.range!==void 0||v.editRange===!0)&&(y+=` text-${v.color}`)),v.classes=y}),t}),mt=M(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});ne(()=>e.modelValue,t=>{if(Y===t)Y=0;else{const a=Ee(R.value,H.value);G(a.year,a.month,a)}}),ne(O,()=>{V.value!==null&&u.$el.contains(document.activeElement)===!0&&V.value.focus()}),ne(()=>g.value.year+"|"+g.value.month,()=>{c("navigation",{year:g.value.year,month:g.value.month})}),ne(rt,t=>{ze(t,H.value,"mask"),R.value=t}),ne(ot,t=>{ze(R.value,t,"locale"),H.value=t});function $e(){const t=E.value,a=ce.value[L(t)];(a===void 0||a.includes(t.day)===!1)&&be(t),De(t.year,t.month)}function ht(t){Ue(t)===!0&&(O.value=t)}function gt(t,a){["month","year"].includes(t)&&(t==="month"?Ne:_e)(a===!0?-1:1)}function De(t,a){O.value="Calendar",G(t,a)}function yt(t,a){if(e.range===!1||!t){C.value=null;return}const n=Object.assign({...g.value},t),s=a!==void 0?Object.assign({...g.value},a):n;C.value={init:n,initHash:z(n),final:s,finalHash:z(s)},De(n.year,n.month)}function Fe(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function Ye(t,a,n){return Wt(t,a,n,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Ee(t,a){const n=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(n.length===0)return Ae();const s=n[n.length-1],l=Ye(s.from!==void 0?s.from:s,t,a);return l.dateHash===null?Ae():l}function Ae(){let t,a;if(e.defaultYearMonth!==void 0){const n=e.defaultYearMonth.split("/");t=parseInt(n[0],10),a=parseInt(n[1],10)}else{const n=E.value!==void 0?E.value:f();t=n.year,a=n.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+b(a)+"/01"}}function Ne(t){let a=g.value.year,n=Number(g.value.month)+t;n===13?(n=1,a++):n===0&&(n=12,a--),G(a,n),ue.value===!0&&de("month")}function _e(t){const a=Number(g.value.year)+t;G(a,g.value.month),ue.value===!0&&de("year")}function Mt(t){G(t,g.value.month),O.value=e.defaultView==="Years"?"Months":"Calendar",ue.value===!0&&de("year")}function Dt(t){G(g.value.year,t),O.value="Calendar",ue.value===!0&&de("month")}function Yt(t,a){const n=ce.value[a];(n!==void 0&&n.includes(t.day)===!0?we:be)(t)}function P(t){return{year:t.year,month:t.month,day:t.day}}function G(t,a,n){if(q.value!==null&&t<=q.value.year&&(t=q.value.year,a<q.value.month&&(a=q.value.month)),k.value!==null&&t>=k.value.year&&(t=k.value.year,a>k.value.month&&(a=k.value.month)),n!==void 0){const{hour:l,minute:_,second:v,millisecond:y,timezoneOffset:w,timeHash:ae}=n;Object.assign(g.value,{hour:l,minute:_,second:v,millisecond:y,timezoneOffset:w,timeHash:ae})}const s=t+"/"+b(a)+"/01";s!==g.value.dateHash&&(oe.value=g.value.dateHash<s==(d.lang.rtl!==!0)?"left":"right",t!==g.value.year&&(me.value=oe.value),Le(()=>{le.value=t-t%J-(t<0?J:0),Object.assign(g.value,{year:t,month:a,day:1,dateHash:s})}))}function Ze(t,a,n){const s=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;Y=s;const{reason:l,details:_}=Be(a,n);c("update:modelValue",s,l,_)}function de(t){const a=$.value[0]!==void 0&&$.value[0].dateHash!==null?{...$.value[0]}:{...g.value};Le(()=>{a.year=g.value.year,a.month=g.value.month;const n=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():fe(a.year,a.month);a.day=Math.min(Math.max(1,a.day),n);const s=K(a);Y=s;const{details:l}=Be("",a);c("update:modelValue",s,t,l)})}function Be(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...P(a.target),from:P(a.from),to:P(a.to)}}:{reason:`${t}-day`,details:P(a)}}function K(t,a,n){return t.from!==void 0?{from:ye.value(t.from,a,n),to:ye.value(t.to,a,n)}:ye.value(t,a,n)}function be(t){let a;if(e.multiple===!0)if(t.from!==void 0){const n=z(t.from),s=z(t.to),l=$.value.filter(v=>v.dateHash<n||v.dateHash>s),_=U.value.filter(({from:v,to:y})=>y.dateHash<n||v.dateHash>s);a=l.concat(_).concat(t).map(v=>K(v))}else{const n=ge.value.slice();n.push(K(t)),a=n}else a=K(t);Ze(a,"add",t)}function we(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const n=K(t);t.from!==void 0?a=e.modelValue.filter(s=>s.from!==void 0?s.from!==n.from&&s.to!==n.to:!0):a=e.modelValue.filter(s=>s!==n),a.length===0&&(a=null)}Ze(a,"remove",t)}function ze(t,a,n){const s=$.value.concat(U.value).map(l=>K(l,t,a)).filter(l=>l.from!==void 0?l.from.dateHash!==null&&l.to.dateHash!==null:l.dateHash!==null);c("update:modelValue",(e.multiple===!0?s:s[0])||null,n)}function _t(){if(e.minimal!==!0)return h("div",{class:"q-date__header "+m.value},[h("div",{class:"relative-position"},[h(re,{name:"q-transition--fade"},()=>h("div",{key:"h-yr-"+Ie.value,class:"q-date__header-subtitle q-date__header-link "+(O.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:i.value,...D("vY",{onClick(){O.value="Years"},onKeyup(t){t.keyCode===13&&(O.value="Years")}})},[Ie.value]))]),h("div",{class:"q-date__header-title relative-position flex no-wrap"},[h("div",{class:"relative-position col"},[h(re,{name:"q-transition--fade"},()=>h("div",{key:"h-sub"+Oe.value,class:"q-date__header-title-label q-date__header-link "+(O.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:i.value,...D("vC",{onClick(){O.value="Calendar"},onKeyup(t){t.keyCode===13&&(O.value="Calendar")}})},[Oe.value]))]),e.todayBtn===!0?h(N,{class:"q-date__header-today self-start",icon:d.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:i.value,onClick:$e}):null])])}function Se({label:t,type:a,key:n,dir:s,goTo:l,boundaries:_,cls:v}){return[h("div",{class:"row items-center q-date__arrow"},[h(N,{round:!0,dense:!0,size:"sm",flat:!0,icon:se.value[0],tabindex:i.value,disable:_.prev===!1,...D("go-#"+a,{onClick(){l(-1)}})})]),h("div",{class:"relative-position overflow-hidden flex flex-center"+v},[h(re,{name:"q-transition--jump-"+s},()=>h("div",{key:n},[h(N,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:i.value,...D("view#"+a,{onClick:()=>{O.value=a}})})]))]),h("div",{class:"row items-center q-date__arrow"},[h(N,{round:!0,dense:!0,size:"sm",flat:!0,icon:se.value[1],tabindex:i.value,disable:_.next===!1,...D("go+#"+a,{onClick(){l(1)}})})])]}const bt={Calendar:()=>[h("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[h("div",{class:"q-date__navigation row items-center no-wrap"},Se({label:H.value.months[g.value.month-1],type:"Months",key:g.value.month,dir:oe.value,goTo:Ne,boundaries:Me.value.month,cls:" col"}).concat(Se({label:g.value.year,type:"Years",key:g.value.year,dir:me.value,goTo:_e,boundaries:Me.value.year,cls:""}))),h("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},st.value.map(t=>h("div",{class:"q-date__calendar-item"},[h("div",t)]))),h("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[h(re,{name:"q-transition--slide-"+oe.value},()=>h("div",{key:j.value,class:"q-date__calendar-days fit"},Ve.value.map(t=>h("div",{class:t.classes},[t.in===!0?h(N,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:i.value,...D("day#"+t.i,{onClick:()=>{wt(t.i)},onMouseover:()=>{St(t.i)}})},t.event!==!1?()=>h("div",{class:"q-date__event bg-"+t.event}):null):h("div",""+t.i)]))))])])],Months(){const t=g.value.year===E.value.year,a=s=>q.value!==null&&g.value.year===q.value.year&&q.value.month>s||k.value!==null&&g.value.year===k.value.year&&k.value.month<s,n=H.value.monthsShort.map((s,l)=>{const _=g.value.month===l+1;return h("div",{class:"q-date__months-item flex flex-center"},[h(N,{class:t===!0&&E.value.month===l+1?"q-date__today":null,flat:_!==!0,label:s,unelevated:_,color:_===!0?X.value:null,textColor:_===!0?W.value:null,tabindex:i.value,disable:a(l+1),...D("month#"+l,{onClick:()=>{Dt(l+1)}})})])});return e.yearsInMonthView===!0&&n.unshift(h("div",{class:"row no-wrap full-width"},[Se({label:g.value.year,type:"Years",key:g.value.year,dir:me.value,goTo:_e,boundaries:Me.value.year,cls:" col"})])),h("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},n)},Years(){const t=le.value,a=t+J,n=[],s=l=>q.value!==null&&q.value.year>l||k.value!==null&&k.value.year<l;for(let l=t;l<=a;l++){const _=g.value.year===l;n.push(h("div",{class:"q-date__years-item flex flex-center"},[h(N,{key:"yr"+l,class:E.value.year===l?"q-date__today":null,flat:!_,label:l,dense:!0,unelevated:_,color:_===!0?X.value:null,textColor:_===!0?W.value:null,tabindex:i.value,disable:s(l),...D("yr#"+l,{onClick:()=>{Mt(l)}})})]))}return h("div",{class:"q-date__view q-date__years flex flex-center"},[h("div",{class:"col-auto"},[h(N,{round:!0,dense:!0,flat:!0,icon:se.value[0],tabindex:i.value,disable:s(t),...D("y-",{onClick:()=>{le.value-=J}})})]),h("div",{class:"q-date__years-content col self-stretch row items-center"},n),h("div",{class:"col-auto"},[h(N,{round:!0,dense:!0,flat:!0,icon:se.value[1],tabindex:i.value,disable:s(a),...D("y+",{onClick:()=>{le.value+=J}})})])])}};function wt(t){const a={...g.value,day:t};if(e.range===!1){Yt(a,j.value);return}if(C.value===null){const n=Ve.value.find(l=>l.fill!==!0&&l.i===t);if(e.noUnset!==!0&&n.range!==void 0){we({target:a,from:n.range.from,to:n.range.to});return}if(n.selected===!0){we(a);return}const s=z(a);C.value={init:a,initHash:s,final:a,finalHash:s},c("rangeStart",P(a))}else{const n=C.value.initHash,s=z(a),l=n<=s?{from:C.value.init,to:a}:{from:a,to:C.value.init};C.value=null,be(n===s?a:{target:a,...l}),c("rangeEnd",{from:P(l.from),to:P(l.to)})}}function St(t){if(C.value!==null){const a={...g.value,day:t};Object.assign(C.value,{final:a,finalHash:z(a)})}}return Object.assign(u,{setToday:$e,setView:ht,offsetCalendar:gt,setCalendarTo:De,setEditingRange:yt}),()=>{const t=[h("div",{class:"q-date__content col relative-position"},[h(re,{name:"q-transition--fade"},bt[O.value])])],a=$t(r.default);return a!==void 0&&t.push(h("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&T(t,"push"),h("div",{class:lt.value,...mt.value},[_t(),h("div",{ref:V,class:"q-date__main col column",tabindex:-1},t)])}}});export{oa as Q,Wt as _,Lt as a,Qt as b,Ut as f,z as g,zt as u};
