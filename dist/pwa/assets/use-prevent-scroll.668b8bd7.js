import{c as We,a as ke}from"./render.3b4af165.js";import{c as E,h as j,r as A,$ as Me,a0 as fe,p as N,a6 as me,w as q,o as $e,K as F,g as K,a7 as Ue,P as b,a8 as he,a as Ge,a3 as Ze,a9 as Je,W as Be,aa as T,ab as et,Y as tt,Z as Ae,ac as ve,ad as ot}from"./index.2358dd35.js";import{c as nt}from"./selection.99ae0757.js";import{a as lt,g as J,v as Ve}from"./vm.78afe1d7.js";import{u as it,a as at}from"./use-dark.de63a3e9.js";import{r as ge,k as rt,h as st}from"./use-key-composition.c382f51a.js";import{g as ut,c as pe,a as ct}from"./Ripple.82e83374.js";var to=We({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=E(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>j("div",{class:n.value},ke(t.default))}});const dt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function ft({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:o,proxy:l,emit:s}=K(),i=A(null);let r=null;function m(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const d={};n===void 0&&(Object.assign(d,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){Me(a,13)===!0&&d.toggle(a)},contextClick(a){l.hide(a),fe(a),N(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:fe,mobileTouch(a){if(d.mobileCleanup(a),m(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const f=a.target;me(d,"anchor",[[f,"touchmove","mobileCleanup","passive"],[f,"touchend","mobileCleanup","passive"],[f,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{r=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),r!==null&&(clearTimeout(r),r=null),e.value===!0&&a!==void 0&&nt()}}),n=function(a=o.contextMenu){if(o.noParentEvent===!0||i.value===null)return;let f;a===!0?l.$q.platform.is.mobile===!0?f=[[i.value,"touchstart","mobileTouch","passive"]]:f=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:f=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],me(d,"anchor",f)});function u(){Ue(d,"anchor")}function g(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;n()}function p(){if(o.target===!1||o.target===""||l.$el.parentNode===null)i.value=null;else if(o.target===!0)g(l.$el.parentNode);else{let a=o.target;if(typeof o.target=="string")try{a=document.querySelector(o.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,n()):(i.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return q(()=>o.contextMenu,a=>{i.value!==null&&(u(),n(a))}),q(()=>o.target,()=>{i.value!==null&&u(),p()}),q(()=>o.noParentEvent,a=>{i.value!==null&&(a===!0?u():n())}),$e(()=>{p(),t!==!0&&o.modelValue===!0&&i.value===null&&s("update:modelValue",!1)}),F(()=>{r!==null&&clearTimeout(r),u()}),{anchorEl:i,canShow:m,anchorEvents:d}}function mt(e,t){const n=A(null);let o;function l(r,m){const d=`${m!==void 0?"add":"remove"}EventListener`,u=m!==void 0?m:o;r!==window&&r[d]("scroll",u,b.passive),window[d]("scroll",u,b.passive),o=m}function s(){n.value!==null&&(l(n.value),n.value=null)}const i=q(()=>e.noParentEvent,()=>{n.value!==null&&(s(),t())});return F(i),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:l}}const ht={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},vt=["beforeShow","show","beforeHide","hide"];function gt({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:l,processOnMount:s}){const i=K(),{props:r,emit:m,proxy:d}=i;let u;function g(h){e.value===!0?f(h):p(h)}function p(h){if(r.disable===!0||h!==void 0&&h.qAnchorHandled===!0||t!==void 0&&t(h)!==!0)return;const v=r["onUpdate:modelValue"]!==void 0;v===!0&&(m("update:modelValue",!0),u=h,N(()=>{u===h&&(u=void 0)})),(r.modelValue===null||v===!1)&&a(h)}function a(h){e.value!==!0&&(e.value=!0,m("beforeShow",h),o!==void 0?o(h):m("show",h))}function f(h){if(r.disable===!0)return;const v=r["onUpdate:modelValue"]!==void 0;v===!0&&(m("update:modelValue",!1),u=h,N(()=>{u===h&&(u=void 0)})),(r.modelValue===null||v===!1)&&L(h)}function L(h){e.value!==!1&&(e.value=!1,m("beforeHide",h),l!==void 0?l(h):m("hide",h))}function C(h){r.disable===!0&&h===!0?r["onUpdate:modelValue"]!==void 0&&m("update:modelValue",!1):h===!0!==e.value&&(h===!0?a:L)(u)}q(()=>r.modelValue,C),n!==void 0&&lt(i)===!0&&q(()=>d.$route.fullPath,()=>{n.value===!0&&e.value===!0&&f()}),s===!0&&$e(()=>{C(r.modelValue)});const P={show:p,hide:f,toggle:g};return Object.assign(d,P),P}let pt=1,wt=document.body;function yt(e,t){const n=document.createElement("div");if(n.id=t!==void 0?`q-portal--${t}--${pt++}`:e,he.globalNodes!==void 0){const o=he.globalNodes.class;o!==void 0&&(n.className=o)}return wt.appendChild(n),n}function bt(e){e.remove()}const O=[];function xt(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return J(e)}else if(e.__qPortal===!0){const n=J(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=J(e)}while(e!=null)}function Et(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Tt(e,t,n,o){const l=A(!1),s=A(!1);let i=null;const r={},m=o==="dialog"&&Et(e);function d(g){if(g===!0){ge(r),s.value=!0;return}s.value=!1,l.value===!1&&(m===!1&&i===null&&(i=yt(!1,o)),l.value=!0,O.push(e.proxy),rt(r))}function u(g){if(s.value=!1,g!==!0)return;ge(r),l.value=!1;const p=O.indexOf(e.proxy);p!==-1&&O.splice(p,1),i!==null&&(bt(i),i=null)}return Ge(()=>{u(!0)}),e.proxy.__qPortal=!0,Ze(e.proxy,"contentEl",()=>t.value),{showPortal:d,hidePortal:u,portalIsActive:l,portalIsAccessible:s,renderPortal:()=>m===!0?n():l.value===!0?[j(Je,{to:i},n())]:void 0}}const Ct={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function St(e,t=()=>{},n=()=>{}){return{transitionProps:E(()=>{const o=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:E(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Ht(){let e;const t=K();function n(){e=void 0}return Be(n),F(n),{removeTick:n,registerTick(o){e=o,N(()=>{e===o&&(Ve(t)===!1&&e(),e=void 0)})}}}function qt(){let e=null;const t=K();function n(){e!==null&&(clearTimeout(e),e=null)}return Be(n),F(n),{removeTimeout:n,registerTimeout(o,l){n(),Ve(t)===!1&&(e=setTimeout(o,l))}}}const Lt=[null,document,document.body,document.scrollingElement,document.documentElement];function Pt(e,t){let n=ut(t);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return Lt.includes(n)?window:n}function Wt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function kt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let Q;function Mt(){if(Q!==void 0)return Q;const e=document.createElement("p"),t=document.createElement("div");pe(e,{width:"100%",height:"200px"}),pe(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let o=e.offsetWidth;return n===o&&(o=t.clientWidth),t.remove(),Q=n-o,Q}function $t(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const k=[];let V;function Bt(e){V=e.keyCode===27}function At(){V===!0&&(V=!1)}function Vt(e){V===!0&&(V=!1,Me(e,27)===!0&&k[k.length-1](e))}function Fe(e){window[e]("keydown",Bt),window[e]("blur",At),window[e]("keyup",Vt),V=!1}function Ft(e){T.is.desktop===!0&&(k.push(e),k.length===1&&Fe("addEventListener"))}function we(e){const t=k.indexOf(e);t>-1&&(k.splice(t,1),k.length===0&&Fe("removeEventListener"))}const M=[];function _e(e){M[M.length-1](e)}function _t(e){T.is.desktop===!0&&(M.push(e),M.length===1&&document.body.addEventListener("focusin",_e))}function zt(e){const t=M.indexOf(e);t>-1&&(M.splice(t,1),M.length===0&&document.body.removeEventListener("focusin",_e))}const{notPassiveCapture:Y}=b,$=[];function I(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=O.length-1;for(;n>=0;){const o=O[n].$;if(o.type.name==="QTooltip"){n--;continue}if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;n--}for(let o=$.length-1;o>=0;o--){const l=$[o];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Dt(e){$.push(e),$.length===1&&(document.addEventListener("mousedown",I,Y),document.addEventListener("touchstart",I,Y))}function ye(e){const t=$.findIndex(n=>n===e);t>-1&&($.splice(t,1),$.length===0&&(document.removeEventListener("mousedown",I,Y),document.removeEventListener("touchstart",I,Y)))}let be,xe;function Ee(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ot(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const le={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{le[`${e}#ltr`]=e,le[`${e}#rtl`]=e});function Te(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:le[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function Kt(e,t){let{top:n,left:o,right:l,bottom:s,width:i,height:r}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],o-=t[0],s+=t[1],l+=t[0],i+=t[0],r+=t[1]),{top:n,bottom:s,height:r,left:o,right:l,width:i,middle:o+(l-o)/2,center:n+(s-n)/2}}function Qt(e,t,n){let{top:o,left:l}=e.getBoundingClientRect();return o+=t.top,l+=t.left,n!==void 0&&(o+=n[1],l+=n[0]),{top:o,bottom:o+1,height:1,left:l,right:l+1,width:1,middle:l,center:o}}function Rt(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function Ce(e,t,n,o){return{top:e[n.vertical]-t[o.vertical],left:e[n.horizontal]-t[o.horizontal]}}function ze(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{ze(e,t+1)},10);return}const{targetEl:n,offset:o,anchorEl:l,anchorOrigin:s,selfOrigin:i,absoluteOffset:r,fit:m,cover:d,maxHeight:u,maxWidth:g}=e;if(T.is.ios===!0&&window.visualViewport!==void 0){const B=document.body.style,{offsetLeft:y,offsetTop:x}=window.visualViewport;y!==be&&(B.setProperty("--q-pe-left",y+"px"),be=y),x!==xe&&(B.setProperty("--q-pe-top",x+"px"),xe=x)}const{scrollLeft:p,scrollTop:a}=n,f=r===void 0?Kt(l,d===!0?[0,0]:o):Qt(l,r,o);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g||"100vw",maxHeight:u||"100vh",visibility:"visible"});const{offsetWidth:L,offsetHeight:C}=n,{elWidth:P,elHeight:h}=m===!0||d===!0?{elWidth:Math.max(f.width,L),elHeight:d===!0?Math.max(f.height,C):C}:{elWidth:L,elHeight:C};let v={maxWidth:g,maxHeight:u};(m===!0||d===!0)&&(v.minWidth=f.width+"px",d===!0&&(v.minHeight=f.height+"px")),Object.assign(n.style,v);const S=Rt(P,h);let w=Ce(f,S,s,i);if(r===void 0||o===void 0)ee(w,f,S,s,i);else{const{top:B,left:y}=w;ee(w,f,S,s,i);let x=!1;if(w.top!==B){x=!0;const H=2*o[1];f.center=f.top-=H,f.bottom-=H+2}if(w.left!==y){x=!0;const H=2*o[0];f.middle=f.left-=H,f.right-=H+2}x===!0&&(w=Ce(f,S,s,i),ee(w,f,S,s,i))}v={top:w.top+"px",left:w.left+"px"},w.maxHeight!==void 0&&(v.maxHeight=w.maxHeight+"px",f.height>w.maxHeight&&(v.minHeight=v.maxHeight)),w.maxWidth!==void 0&&(v.maxWidth=w.maxWidth+"px",f.width>w.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(n.style,v),n.scrollTop!==a&&(n.scrollTop=a),n.scrollLeft!==p&&(n.scrollLeft=p)}function ee(e,t,n,o,l){const s=n.bottom,i=n.right,r=Mt(),m=window.innerHeight-r,d=document.body.clientWidth;if(e.top<0||e.top+s>m)if(l.vertical==="center")e.top=t[o.vertical]>m/2?Math.max(0,m-s):0,e.maxHeight=Math.min(s,m);else if(t[o.vertical]>m/2){const u=Math.min(m,o.vertical==="center"?t.center:o.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,u),e.top=Math.max(0,u-s)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,m-e.top);if(e.left<0||e.left+i>d)if(e.maxWidth=Math.min(i,d),l.horizontal==="middle")e.left=t[o.horizontal]>d/2?Math.max(0,d-i):0;else if(t[o.horizontal]>d/2){const u=Math.min(d,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(i,u),e.left=Math.max(0,u-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(i,d-e.left)}var oo=We({name:"QMenu",inheritAttrs:!1,props:{...dt,...ht,...it,...Ct,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Ee},self:{type:String,validator:Ee},offset:{type:Array,validator:Ot},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...vt,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:o}){let l=null,s,i,r;const m=K(),{proxy:d}=m,{$q:u}=d,g=A(null),p=A(!1),a=E(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),f=at(e,u),{registerTick:L,removeTick:C}=Ht(),{registerTimeout:P}=qt(),{transitionProps:h,transitionStyle:v}=St(e),{localScrollTarget:S,changeScrollEvent:w,unconfigureScrollTarget:B}=mt(e,ce),{anchorEl:y,canShow:x}=ft({showing:p}),{hide:H}=gt({showing:p,canShow:x,handleShow:Re,handleHide:je,hideOnRouteChange:a,processOnMount:!0}),{showPortal:ie,hidePortal:ae,renderPortal:De}=Tt(m,g,Ye,"menu"),X={anchorEl:y,innerRef:g,onClickOutside(c){if(e.persistent!==!0&&p.value===!0)return H(c),(c.type==="touchstart"||c.target.classList.contains("q-dialog__backdrop"))&&Ae(c),!0}},re=E(()=>Te(e.anchor||(e.cover===!0?"center middle":"bottom start"),u.lang.rtl)),Oe=E(()=>e.cover===!0?re.value:Te(e.self||"top start",u.lang.rtl)),Ke=E(()=>(e.square===!0?" q-menu--square":"")+(f.value===!0?" q-menu--dark q-dark":"")),Qe=E(()=>e.autoClose===!0?{onClick:Ne}:{}),se=E(()=>p.value===!0&&e.persistent!==!0);q(se,c=>{c===!0?(Ft(G),Dt(X)):(we(G),ye(X))});function U(){st(()=>{let c=g.value;c&&c.contains(document.activeElement)!==!0&&(c=c.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||c.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||c.querySelector("[autofocus], [data-autofocus]")||c,c.focus({preventScroll:!0}))})}function Re(c){if(l=e.noRefocus===!1?document.activeElement:null,_t(de),ie(),ce(),s=void 0,c!==void 0&&(e.touchPosition||e.contextMenu)){const Z=et(c);if(Z.left!==void 0){const{top:Ie,left:Xe}=y.value.getBoundingClientRect();s={left:Z.left-Xe,top:Z.top-Ie}}}i===void 0&&(i=q(()=>u.screen.width+"|"+u.screen.height+"|"+e.self+"|"+e.anchor+"|"+u.lang.rtl,_)),e.noFocus!==!0&&document.activeElement.blur(),L(()=>{_(),e.noFocus!==!0&&U()}),P(()=>{u.platform.is.ios===!0&&(r=e.autoClose,g.value.click()),_(),ie(!0),n("show",c)},e.transitionDuration)}function je(c){C(),ae(),ue(!0),l!==null&&(c===void 0||c.qClickOutside!==!0)&&(((c&&c.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),P(()=>{ae(!0),n("hide",c)},e.transitionDuration)}function ue(c){s=void 0,i!==void 0&&(i(),i=void 0),(c===!0||p.value===!0)&&(zt(de),B(),ye(X),we(G)),c!==!0&&(l=null)}function ce(){(y.value!==null||e.scrollTarget!==void 0)&&(S.value=Pt(y.value,e.scrollTarget),w(S.value,_))}function Ne(c){r!==!0?(xt(d,c),n("click",c)):r=!1}function de(c){se.value===!0&&e.noFocus!==!0&&ct(g.value,c.target)!==!0&&U()}function G(c){n("escapeKey"),H(c)}function _(){ze({targetEl:g.value,offset:e.offset,anchorEl:y.value,anchorOrigin:re.value,selfOrigin:Oe.value,absoluteOffset:s,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ye(){return j(tt,h.value,()=>p.value===!0?j("div",{role:"menu",...o,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+Ke.value,o.class],style:[o.style,v.value],...Qe.value},ke(t.default)):null)}return F(ue),Object.assign(d,{focus:U,updatePosition:_}),De}});function no(e,t,n){let o;function l(){o!==void 0&&(ve.remove(o),o=void 0)}return F(()=>{e.value===!0&&l()}),{removeFromHistory:l,addToHistory(){o={condition:()=>n.value===!0,handler:t},ve.add(o)}}}let z=0,te,oe,D,ne=!1,Se,He,qe,W=null;function jt(e){Nt(e)&&Ae(e)}function Nt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=ot(e),n=e.shiftKey&&!e.deltaX,o=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),l=n||o?e.deltaY:e.deltaX;for(let s=0;s<t.length;s++){const i=t[s];if($t(i,o))return o?l<0&&i.scrollTop===0?!0:l>0&&i.scrollTop+i.clientHeight===i.scrollHeight:l<0&&i.scrollLeft===0?!0:l>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function Le(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function R(e){ne!==!0&&(ne=!0,requestAnimationFrame(()=>{ne=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:o}=document.scrollingElement;(D===void 0||t!==window.innerHeight)&&(D=n-t,document.scrollingElement.scrollTop=o),o>D&&(document.scrollingElement.scrollTop-=Math.ceil((o-D)/8))}))}function Pe(e){const t=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:l}=window.getComputedStyle(t);te=kt(window),oe=Wt(window),Se=t.style.left,He=t.style.top,qe=window.location.href,t.style.left=`-${te}px`,t.style.top=`-${oe}px`,l!=="hidden"&&(l==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,T.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",R,b.passiveCapture),window.visualViewport.addEventListener("scroll",R,b.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Le,b.passiveCapture))}T.is.desktop===!0&&T.is.mac===!0&&window[`${e}EventListener`]("wheel",jt,b.notPassive),e==="remove"&&(T.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",R,b.passiveCapture),window.visualViewport.removeEventListener("scroll",R,b.passiveCapture)):window.removeEventListener("scroll",Le,b.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Se,t.style.top=He,window.location.href===qe&&window.scrollTo(te,oe),D=void 0)}function Yt(e){let t="add";if(e===!0){if(z++,W!==null){clearTimeout(W),W=null;return}if(z>1)return}else{if(z===0||(z--,z>0))return;if(t="remove",T.is.ios===!0&&T.is.nativeMobile===!0){W!==null&&clearTimeout(W),W=setTimeout(()=>{Pe(t),W=null},100);return}}Pe(t)}function lo(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Yt(t))}}}export{Te as A,Dt as B,to as Q,vt as a,qt as b,gt as c,no as d,lo as e,Wt as f,Pt as g,kt as h,Mt as i,Ct as j,oo as k,Ht as l,St as m,Tt as n,we as o,_t as p,Ft as q,zt as r,dt as s,Ot as t,ht as u,Ee as v,mt as w,ft as x,ye as y,ze as z};
