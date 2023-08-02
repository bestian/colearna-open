import{Q as Ve,u as ct,a as dt}from"./QIcon.6d082352.js";import{c as N,a as fe,b as vt,e as De}from"./render.5fabfc26.js";import{h as n,g as Z,c as s,r as E,w as Q,ai as ft,o as gt,V as bt,W as mt,K as St,P as xe,X as ge,at as Be,ar as yt,p as $e,au as ht,a3 as A}from"./index.18097bb9.js";import{Q as _t}from"./QSeparator.f5e68fd8.js";import{Q as wt}from"./QList.483167a7.js";import{u as be,a as me}from"./use-dark.8f6d6037.js";import{u as qt,a as Pt,c as Me,Q as Ct}from"./QSelect.731d70ee.js";import{g as kt}from"./use-prevent-scroll.b75a91fc.js";import{Q as ve}from"./QCheckbox.bfa15475.js";import{Q as J}from"./QBtn.944b07d1.js";import{u as Rt,a as Tt,b as xt}from"./use-fullscreen.dc3782cc.js";var Bt=N({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:r}){const g=Z(),{proxy:{$q:i}}=g,b=u=>{r("click",u)};return()=>{if(e.props===void 0)return n("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:b},fe(l.default));let u,d;const c=g.vnode.key;if(c){if(u=e.props.colsMap[c],u===void 0)return}else u=e.props.col;if(u.sortable===!0){const a=u.align==="right"?"unshift":"push";d=vt(l.default,[]),d[a](n(Ve,{class:u.__iconClass,name:i.iconSet.table.arrowUp}))}else d=fe(l.default);const h={class:u.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:u.headerStyle,onClick:a=>{u.sortable===!0&&e.props.sort(u),b(a)}};return n("th",h,d)}}});const Ot=["horizontal","vertical","cell","none"];var Ft=N({name:"QMarkupTable",props:{...be,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Ot.includes(e)}},setup(e,{slots:l}){const r=Z(),g=me(e,r.proxy.$q),i=s(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(g.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>n("div",{class:i.value},[n("table",{class:"q-table"},fe(l.default))])}});function je(e,l){return n("div",e,[n("table",{class:"q-table"},l)])}const Lt={list:wt,table:Ft},Vt=["list","table","__qtable"];var Dt=N({name:"QVirtualScroll",props:{...qt,type:{type:String,default:"list",validator:e=>Vt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:r}){let g;const i=E(null),b=s(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:u,localResetVirtualScroll:d,padVirtualScroll:c,onVirtualScrollEvt:h}=Pt({virtualScrollLength:b,getVirtualScrollTarget:P,getVirtualScrollEl:q}),a=s(()=>{if(b.value===0)return[];const O=(F,R)=>({index:u.value.from+R,item:F});return e.itemsFn===void 0?e.items.slice(u.value.from,u.value.to).map(O):e.itemsFn(u.value.from,u.value.to-u.value.from).map(O)}),S=s(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=s(()=>e.scrollTarget!==void 0?{}:{tabindex:0});Q(b,()=>{d()}),Q(()=>e.scrollTarget,()=>{y(),_()});function q(){return i.value.$el||i.value}function P(){return g}function _(){g=kt(q(),e.scrollTarget),g.addEventListener("scroll",h,xe.passive)}function y(){g!==void 0&&(g.removeEventListener("scroll",h,xe.passive),g=void 0)}function B(){let O=c(e.type==="list"?"div":"tbody",a.value.map(l.default));return l.before!==void 0&&(O=l.before().concat(O)),De(l.after,O)}return ft(()=>{d()}),gt(()=>{_()}),bt(()=>{_()}),mt(()=>{y()}),St(()=>{y()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?je({ref:i,class:"q-table__middle "+S.value},B()):n(Lt[e.type],{...r,ref:i,class:[r.class,S.value],...w.value},B)}}});const $t={xs:2,sm:4,md:6,lg:10,xl:14};function Oe(e,l,r){return{transform:l===!0?`translateX(${r.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Mt=N({name:"QLinearProgress",props:{...be,...ct,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:r}=Z(),g=me(e,r.$q),i=dt(e,$t),b=s(()=>e.indeterminate===!0||e.query===!0),u=s(()=>e.reverse!==e.query),d=s(()=>({...i.value!==null?i.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),c=s(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),h=s(()=>Oe(e.buffer!==void 0?e.buffer:1,u.value,r.$q)),a=s(()=>`with${e.instantFeedback===!0?"out":""}-transition`),S=s(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${a.value} q-linear-progress__track--${g.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),w=s(()=>Oe(b.value===!0?1:e.value,u.value,r.$q)),q=s(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${a.value} q-linear-progress__model--${b.value===!0?"in":""}determinate`),P=s(()=>({width:`${e.value*100}%`})),_=s(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${a.value}`);return()=>{const y=[n("div",{class:S.value,style:h.value}),n("div",{class:q.value,style:w.value})];return e.stripe===!0&&b.value===!1&&y.push(n("div",{class:_.value,style:P.value})),n("div",{class:c.value,style:d.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},De(l.default,y))}}});function jt(e,l){return new Date(e)-new Date(l)}const Qt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function At(e,l,r,g){const i=s(()=>{const{sortBy:d}=l.value;return d&&r.value.find(c=>c.name===d)||null}),b=s(()=>e.sortMethod!==void 0?e.sortMethod:(d,c,h)=>{const a=r.value.find(q=>q.name===c);if(a===void 0||a.field===void 0)return d;const S=h===!0?-1:1,w=typeof a.field=="function"?q=>a.field(q):q=>q[a.field];return d.sort((q,P)=>{let _=w(q),y=w(P);return _==null?-1*S:y==null?1*S:a.sort!==void 0?a.sort(_,y,q,P)*S:ge(_)===!0&&ge(y)===!0?(_-y)*S:Be(_)===!0&&Be(y)===!0?jt(_,y)*S:typeof _=="boolean"&&typeof y=="boolean"?(_-y)*S:([_,y]=[_,y].map(B=>(B+"").toLocaleString().toLowerCase()),_<y?-1*S:_===y?0:S)})});function u(d){let c=e.columnSortOrder;if(yt(d)===!0)d.sortOrder&&(c=d.sortOrder),d=d.name;else{const S=r.value.find(w=>w.name===d);S!==void 0&&S.sortOrder&&(c=S.sortOrder)}let{sortBy:h,descending:a}=l.value;h!==d?(h=d,a=c==="da"):e.binaryStateSort===!0?a=!a:a===!0?c==="ad"?h=null:a=!1:c==="ad"?a=!0:h=null,g({sortBy:h,descending:a,page:1})}return{columnToSort:i,computedSortMethod:b,sort:u}}const Et={filter:[String,Object],filterMethod:Function};function Nt(e,l){const r=s(()=>e.filterMethod!==void 0?e.filterMethod:(g,i,b,u)=>{const d=i?i.toLowerCase():"";return g.filter(c=>b.some(h=>{const a=u(h,c)+"";return(a==="undefined"||a==="null"?"":a.toLowerCase()).indexOf(d)!==-1}))});return Q(()=>e.filter,()=>{$e(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:r}}function zt(e,l){for(const r in l)if(l[r]!==e[r])return!1;return!0}function Fe(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Ht={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Ut(e,l){const{props:r,emit:g}=e,i=E(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:r.rowsPerPageOptions.length!==0?r.rowsPerPageOptions[0]:5},r.pagination)),b=s(()=>{const a=r["onUpdate:pagination"]!==void 0?{...i.value,...r.pagination}:i.value;return Fe(a)}),u=s(()=>b.value.rowsNumber!==void 0);function d(a){c({pagination:a,filter:r.filter})}function c(a={}){$e(()=>{g("request",{pagination:a.pagination||b.value,filter:a.filter||r.filter,getCellValue:l})})}function h(a,S){const w=Fe({...b.value,...a});if(zt(b.value,w)===!0){u.value===!0&&S===!0&&d(w);return}if(u.value===!0){d(w);return}r.pagination!==void 0&&r["onUpdate:pagination"]!==void 0?g("update:pagination",w):i.value=w}return{innerPagination:i,computedPagination:b,isServerSide:u,requestServerInteraction:c,setPagination:h}}function pt(e,l,r,g,i,b){const{props:u,emit:d,proxy:{$q:c}}=e,h=s(()=>g.value===!0?r.value.rowsNumber||0:b.value),a=s(()=>{const{page:R,rowsPerPage:T}=r.value;return(R-1)*T}),S=s(()=>{const{page:R,rowsPerPage:T}=r.value;return R*T}),w=s(()=>r.value.page===1),q=s(()=>r.value.rowsPerPage===0?1:Math.max(1,Math.ceil(h.value/r.value.rowsPerPage))),P=s(()=>S.value===0?!0:r.value.page>=q.value),_=s(()=>(u.rowsPerPageOptions.includes(l.value.rowsPerPage)?u.rowsPerPageOptions:[l.value.rowsPerPage].concat(u.rowsPerPageOptions)).map(T=>({label:T===0?c.lang.table.allRows:""+T,value:T})));Q(q,(R,T)=>{if(R===T)return;const z=r.value.page;R&&!z?i({page:1}):R<z&&i({page:R})});function y(){i({page:1})}function B(){const{page:R}=r.value;R>1&&i({page:R-1})}function O(){const{page:R,rowsPerPage:T}=r.value;S.value>0&&R*T<h.value&&i({page:R+1})}function F(){i({page:q.value})}return u["onUpdate:pagination"]!==void 0&&d("update:pagination",{...r.value}),{firstRowIndex:a,lastRowIndex:S,isFirstPage:w,isLastPage:P,pagesNumber:q,computedRowsPerPageOptions:_,computedRowsNumber:h,firstPage:y,prevPage:B,nextPage:O,lastPage:F}}const It={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Kt=["update:selected","selection"];function Wt(e,l,r,g){const i=s(()=>{const P={};return e.selected.map(g.value).forEach(_=>{P[_]=!0}),P}),b=s(()=>e.selection!=="none"),u=s(()=>e.selection==="single"),d=s(()=>e.selection==="multiple"),c=s(()=>r.value.length!==0&&r.value.every(P=>i.value[g.value(P)]===!0)),h=s(()=>c.value!==!0&&r.value.some(P=>i.value[g.value(P)]===!0)),a=s(()=>e.selected.length);function S(P){return i.value[P]===!0}function w(){l("update:selected",[])}function q(P,_,y,B){l("selection",{rows:_,added:y,keys:P,evt:B});const O=u.value===!0?y===!0?_:[]:y===!0?e.selected.concat(_):e.selected.filter(F=>P.includes(g.value(F))===!1);l("update:selected",O)}return{hasSelectionMode:b,singleSelection:u,multipleSelection:d,allRowsSelected:c,someRowsSelected:h,rowsSelectedNumber:a,isRowSelected:S,clearSelection:w,updateSelection:q}}function Le(e){return Array.isArray(e)?e.slice():[]}const Gt={expanded:Array},Xt=["update:expanded"];function Jt(e,l){const r=E(Le(e.expanded));Q(()=>e.expanded,u=>{r.value=Le(u)});function g(u){return r.value.includes(u)}function i(u){e.expanded!==void 0?l("update:expanded",u):r.value=u}function b(u,d){const c=r.value.slice(),h=c.indexOf(u);d===!0?h===-1&&(c.push(u),i(c)):h!==-1&&(c.splice(h,1),i(c))}return{isRowExpanded:g,setExpanded:i,updateExpanded:b}}const Yt={visibleColumns:Array};function Zt(e,l,r){const g=s(()=>{if(e.columns!==void 0)return e.columns;const d=e.rows[0];return d!==void 0?Object.keys(d).map(c=>({name:c,label:c.toUpperCase(),field:c,align:ge(d[c])?"right":"left",sortable:!0})):[]}),i=s(()=>{const{sortBy:d,descending:c}=l.value;return(e.visibleColumns!==void 0?g.value.filter(a=>a.required===!0||e.visibleColumns.includes(a.name)===!0):g.value).map(a=>{const S=a.align||"right",w=`text-${S}`;return{...a,align:S,__iconClass:`q-table__sort-icon q-table__sort-icon--${S}`,__thClass:w+(a.headerClasses!==void 0?" "+a.headerClasses:"")+(a.sortable===!0?" sortable":"")+(a.name===d?` sorted ${c===!0?"sort-desc":""}`:""),__tdStyle:a.style!==void 0?typeof a.style!="function"?()=>a.style:a.style:()=>null,__tdClass:a.classes!==void 0?typeof a.classes!="function"?()=>w+" "+a.classes:q=>w+" "+a.classes(q):()=>w}})}),b=s(()=>{const d={};return i.value.forEach(c=>{d[c.name]=c}),d}),u=s(()=>e.tableColspan!==void 0?e.tableColspan:i.value.length+(r.value===!0?1:0));return{colList:g,computedCols:i,computedColsMap:b,computedColspan:u}}const Y="q-table__bottom row items-center",Qe={};Me.forEach(e=>{Qe[e]={}});var dl=N({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Qe,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...be,...Rt,...Yt,...Et,...Ht,...Gt,...It,...Qt},emits:["request","virtualScroll",...Tt,...Xt,...Kt],setup(e,{slots:l,emit:r}){const g=Z(),{proxy:{$q:i}}=g,b=me(e,i),{inFullscreen:u,toggleFullscreen:d}=xt(),c=s(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),h=E(null),a=E(null),S=s(()=>e.grid!==!0&&e.virtualScroll===!0),w=s(()=>" q-table__card"+(b.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=s(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(b.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(u.value===!0?" fullscreen scroll":"")),P=s(()=>q.value+(e.loading===!0?" q-table--loading":""));Q(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{S.value===!0&&a.value!==null&&a.value.reset()});const{innerPagination:_,computedPagination:y,isServerSide:B,requestServerInteraction:O,setPagination:F}=Ut(g,M),{computedFilterMethod:R}=Nt(e,F),{isRowExpanded:T,setExpanded:z,updateExpanded:Ae}=Jt(e,r),ee=s(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:o,descending:v}=y.value;return e.filter&&(t=R.value(t,e.filter,L.value,M)),Ue.value!==null&&(t=pe.value(e.rows===t?t.slice():t,o,v)),t}),Se=s(()=>ee.value.length),D=s(()=>{let t=ee.value;if(B.value===!0)return t;const{rowsPerPage:o}=y.value;return o!==0&&(U.value===0&&e.rows!==t?t.length>p.value&&(t=t.slice(0,p.value)):t=t.slice(U.value,p.value)),t}),{hasSelectionMode:$,singleSelection:Ee,multipleSelection:ye,allRowsSelected:Ne,someRowsSelected:he,rowsSelectedNumber:te,isRowSelected:le,clearSelection:ze,updateSelection:H}=Wt(e,r,D,c),{colList:He,computedCols:L,computedColsMap:_e,computedColspan:we}=Zt(e,y,$),{columnToSort:Ue,computedSortMethod:pe,sort:ae}=At(e,y,He,F),{firstRowIndex:U,lastRowIndex:p,isFirstPage:ne,isLastPage:re,pagesNumber:I,computedRowsPerPageOptions:Ie,computedRowsNumber:K,firstPage:oe,prevPage:ie,nextPage:ue,lastPage:se}=pt(g,_,y,B,F,Se),Ke=s(()=>D.value.length===0),We=s(()=>{const t={};return Me.forEach(o=>{t[o]=e[o]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function Ge(){S.value===!0&&a.value.reset()}function Xe(){if(e.grid===!0)return ut();const t=e.hideHeader!==!0?Re:null;if(S.value===!0){const v=l["top-row"],f=l["bottom-row"],m={default:k=>Pe(k.item,l.body,k.index)};if(v!==void 0){const k=n("tbody",v({cols:L.value}));m.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(m.before=t);return f!==void 0&&(m.after=()=>n("tbody",f({cols:L.value}))),n(Dt,{ref:a,class:e.tableClass,style:e.tableStyle,...We.value,scrollTarget:e.virtualScrollTarget,items:D.value,type:"__qtable",tableColspan:we.value,onVirtualScroll:Ye},m)}const o=[Ze()];return t!==null&&o.unshift(t()),je({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},o)}function Je(t,o){if(a.value!==null){a.value.scrollTo(t,o);return}t=parseInt(t,10);const v=h.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(v!==null){const f=h.value.querySelector(".q-table__middle.scroll"),m=v.offsetTop-e.virtualScrollStickySizeStart,k=m<f.scrollTop?"decrease":"increase";f.scrollTop=m,r("virtualScroll",{index:t,from:0,to:_.value.rowsPerPage-1,direction:k})}}function Ye(t){r("virtualScroll",t)}function qe(){return[n(Mt,{class:"q-table__linear-progress",color:e.color,dark:b.value,indeterminate:!0,trackColor:"transparent"})]}function Pe(t,o,v){const f=c.value(t),m=le(f);if(o!==void 0)return o(Ce({key:f,row:t,pageIndex:v,__trClass:m?"selected":""}));const k=l["body-cell"],C=L.value.map(x=>{const G=l[`body-cell-${x.name}`],X=G!==void 0?G:k;return X!==void 0?X(et({key:f,row:t,pageIndex:v,col:x})):n("td",{class:x.__tdClass(t),style:x.__tdStyle(t)},M(x,t))});if($.value===!0){const x=l["body-selection"],G=x!==void 0?x(tt({key:f,row:t,pageIndex:v})):[n(ve,{modelValue:m,color:e.color,dark:b.value,dense:e.dense,"onUpdate:modelValue":(X,st)=>{H([f],[t],X,st)}})];C.unshift(n("td",{class:"q-table--col-auto-width"},G))}const V={key:f,class:{selected:m}};return e.onRowClick!==void 0&&(V.class["cursor-pointer"]=!0,V.onClick=x=>{r("RowClick",x,t,v)}),e.onRowDblclick!==void 0&&(V.class["cursor-pointer"]=!0,V.onDblclick=x=>{r("RowDblclick",x,t,v)}),e.onRowContextmenu!==void 0&&(V.class["cursor-pointer"]=!0,V.onContextmenu=x=>{r("RowContextmenu",x,t,v)}),n("tr",V,C)}function Ze(){const t=l.body,o=l["top-row"],v=l["bottom-row"];let f=D.value.map((m,k)=>Pe(m,t,k));return o!==void 0&&(f=o({cols:L.value}).concat(f)),v!==void 0&&(f=f.concat(v({cols:L.value}))),n("tbody",f)}function Ce(t){return ce(t),t.cols=t.cols.map(o=>A({...o},"value",()=>M(o,t.row))),t}function et(t){return ce(t),A(t,"value",()=>M(t.col,t.row)),t}function tt(t){return ce(t),t}function ce(t){Object.assign(t,{cols:L.value,colsMap:_e.value,sort:ae,rowIndex:U.value+t.pageIndex,color:e.color,dark:b.value,dense:e.dense}),$.value===!0&&A(t,"selected",()=>le(t.key),(o,v)=>{H([t.key],[t.row],o,v)}),A(t,"expand",()=>T(t.key),o=>{Ae(t.key,o)})}function M(t,o){const v=typeof t.field=="function"?t.field(o):o[t.field];return t.format!==void 0?t.format(v,o):v}const j=s(()=>({pagination:y.value,pagesNumber:I.value,isFirstPage:ne.value,isLastPage:re.value,firstPage:oe,prevPage:ie,nextPage:ue,lastPage:se,inFullscreen:u.value,toggleFullscreen:d}));function lt(){const t=l.top,o=l["top-left"],v=l["top-right"],f=l["top-selection"],m=$.value===!0&&f!==void 0&&te.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return n("div",{class:k},[t(j.value)]);let C;if(m===!0?C=f(j.value).slice():(C=[],o!==void 0?C.push(n("div",{class:"q-table__control"},[o(j.value)])):e.title&&C.push(n("div",{class:"q-table__control"},[n("div",{class:["q-table__title",e.titleClass]},e.title)]))),v!==void 0&&(C.push(n("div",{class:"q-table__separator col"})),C.push(n("div",{class:"q-table__control"},[v(j.value)]))),C.length!==0)return n("div",{class:k},C)}const ke=s(()=>he.value===!0?null:Ne.value);function Re(){const t=at();return e.loading===!0&&l.loading===void 0&&t.push(n("tr",{class:"q-table__progress"},[n("th",{class:"relative-position",colspan:we.value},qe())])),n("thead",t)}function at(){const t=l.header,o=l["header-cell"];if(t!==void 0)return t(de({header:!0})).slice();const v=L.value.map(f=>{const m=l[`header-cell-${f.name}`],k=m!==void 0?m:o,C=de({col:f});return k!==void 0?k(C):n(Bt,{key:f.name,props:C},()=>f.label)});if(Ee.value===!0&&e.grid!==!0)v.unshift(n("th",{class:"q-table--col-auto-width"}," "));else if(ye.value===!0){const f=l["header-selection"],m=f!==void 0?f(de({})):[n(ve,{color:e.color,modelValue:ke.value,dark:b.value,dense:e.dense,"onUpdate:modelValue":Te})];v.unshift(n("th",{class:"q-table--col-auto-width"},m))}return[n("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},v)]}function de(t){return Object.assign(t,{cols:L.value,sort:ae,colsMap:_e.value,color:e.color,dark:b.value,dense:e.dense}),ye.value===!0&&A(t,"selected",()=>ke.value,Te),t}function Te(t){he.value===!0&&(t=!1),H(D.value.map(c.value),D.value,t)}const W=s(()=>{const t=[e.iconFirstPage||i.iconSet.table.firstPage,e.iconPrevPage||i.iconSet.table.prevPage,e.iconNextPage||i.iconSet.table.nextPage,e.iconLastPage||i.iconSet.table.lastPage];return i.lang.rtl===!0?t.reverse():t});function nt(){if(e.hideBottom===!0)return;if(Ke.value===!0){if(e.hideNoData===!0)return;const v=e.loading===!0?e.loadingLabel||i.lang.table.loading:e.filter?e.noResultsLabel||i.lang.table.noResults:e.noDataLabel||i.lang.table.noData,f=l["no-data"],m=f!==void 0?[f({message:v,icon:i.iconSet.table.warning,filter:e.filter})]:[n(Ve,{class:"q-table__bottom-nodata-icon",name:i.iconSet.table.warning}),v];return n("div",{class:Y+" q-table__bottom--nodata"},m)}const t=l.bottom;if(t!==void 0)return n("div",{class:Y},[t(j.value)]);const o=e.hideSelectedBanner!==!0&&$.value===!0&&te.value>0?[n("div",{class:"q-table__control"},[n("div",[(e.selectedRowsLabel||i.lang.table.selectedRecords)(te.value)])])]:[];if(e.hidePagination!==!0)return n("div",{class:Y+" justify-end"},ot(o));if(o.length!==0)return n("div",{class:Y},o)}function rt(t){F({page:1,rowsPerPage:t.value})}function ot(t){let o;const{rowsPerPage:v}=y.value,f=e.paginationLabel||i.lang.table.pagination,m=l.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(n("div",{class:"q-table__separator col"})),k===!0&&t.push(n("div",{class:"q-table__control"},[n("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||i.lang.table.recordsPerPage]),n(Ct,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:v,options:Ie.value,displayValue:v===0?i.lang.table.allRows:v,dark:b.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":rt})])),m!==void 0)o=m(j.value);else if(o=[n("span",v!==0?{class:"q-table__bottom-item"}:{},[v?f(U.value+1,Math.min(p.value,K.value),K.value):f(1,Se.value,K.value)])],v!==0&&I.value>1){const C={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(C.size="sm"),I.value>2&&o.push(n(J,{key:"pgFirst",...C,icon:W.value[0],disable:ne.value,onClick:oe})),o.push(n(J,{key:"pgPrev",...C,icon:W.value[1],disable:ne.value,onClick:ie}),n(J,{key:"pgNext",...C,icon:W.value[2],disable:re.value,onClick:ue})),I.value>2&&o.push(n(J,{key:"pgLast",...C,icon:W.value[3],disable:re.value,onClick:se}))}return t.push(n("div",{class:"q-table__control"},o)),t}function it(){const t=e.gridHeader===!0?[n("table",{class:"q-table"},[Re()])]:e.loading===!0&&l.loading===void 0?qe():void 0;return n("div",{class:"q-table__middle"},t)}function ut(){const t=l.item!==void 0?l.item:o=>{const v=o.cols.map(m=>n("div",{class:"q-table__grid-item-row"},[n("div",{class:"q-table__grid-item-title"},[m.label]),n("div",{class:"q-table__grid-item-value"},[m.value])]));if($.value===!0){const m=l["body-selection"],k=m!==void 0?m(o):[n(ve,{modelValue:o.selected,color:e.color,dark:b.value,dense:e.dense,"onUpdate:modelValue":(C,V)=>{H([o.key],[o.row],C,V)}})];v.unshift(n("div",{class:"q-table__grid-item-row"},k),n(_t,{dark:b.value}))}const f={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(f.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(f.onClick=m=>{r("RowClick",m,o.row,o.pageIndex)}),e.onRowDblclick!==void 0&&(f.onDblclick=m=>{r("RowDblclick",m,o.row,o.pageIndex)})),n("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(o.selected===!0?" q-table__grid-item--selected":"")},[n("div",f,v)])};return n("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},D.value.map((o,v)=>t(Ce({key:c.value(o),row:o,pageIndex:v}))))}return Object.assign(g.proxy,{requestServerInteraction:O,setPagination:F,firstPage:oe,prevPage:ie,nextPage:ue,lastPage:se,isRowSelected:le,clearSelection:ze,isRowExpanded:T,setExpanded:z,sort:ae,resetVirtualScroll:Ge,scrollTo:Je,getCellValue:M}),ht(g.proxy,{filteredSortedRows:()=>ee.value,computedRows:()=>D.value,computedRowsNumber:()=>K.value}),()=>{const t=[lt()],o={ref:h,class:P.value};return e.grid===!0?t.push(it()):Object.assign(o,{class:[o.class,e.cardClass],style:e.cardStyle}),t.push(Xe(),nt()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),n("div",o,t)}}});export{dl as Q};