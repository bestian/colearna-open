import{c as $,a as z,d as L,e as O}from"./render.5fabfc26.js";import{u as V,a as K,b as U,c as X}from"./use-panel.df2272e5.js";import{c as l,h as t,w as I,o as j,K as G,X as H,g as J}from"./index.18097bb9.js";import{Q as f}from"./QBtn.944b07d1.js";import{u as R,a as W}from"./use-dark.8f6d6037.js";import{u as Y,a as Z,b as p}from"./use-fullscreen.dc3782cc.js";var ue=$({name:"QCarouselSlide",props:{...V,imgSrc:String},setup(e,{slots:r}){const i=l(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>t("div",{class:"q-carousel__slide",style:i.value},z(r.default))}});const ee=["top","right","bottom","left"],ae=["regular","flat","outline","push","unelevated"];var ce=$({name:"QCarousel",props:{...R,...K,...Y,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>ae.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>ee.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Z,...U],setup(e,{slots:r}){const{proxy:{$q:i}}=J(),T=W(e,i);let o=null,s;const{updatePanelsList:B,getPanelContent:Q,panelDirectives:D,goToPanel:_,previousPanel:h,nextPanel:q,getEnabledPanels:F,panelIndex:c}=X(),{inFullscreen:C}=p(),N=l(()=>C.value!==!0&&e.height!==void 0?{height:e.height}:{}),v=l(()=>e.vertical===!0?"vertical":"horizontal"),A=l(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(C.value===!0?" fullscreen":"")+(T.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${v.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${b.value}`:"")),x=l(()=>{const a=[e.prevIcon||i.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||i.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&i.lang.rtl===!0?a.reverse():a}),S=l(()=>e.navigationIcon||i.iconSet.carousel.navigationIcon),E=l(()=>e.navigationActiveIcon||S.value),b=l(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),g=l(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));I(()=>e.modelValue,()=>{e.autoplay&&m()}),I(()=>e.autoplay,a=>{a?m():o!==null&&(clearTimeout(o),o=null)});function m(){const a=H(e.autoplay)===!0?Math.abs(e.autoplay):5e3;o!==null&&clearTimeout(o),o=setTimeout(()=>{o=null,a>=0?q():h()},a)}j(()=>{e.autoplay&&m()}),G(()=>{o!==null&&clearTimeout(o)});function y(a,u){return t("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${a} q-carousel__navigation--${b.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[t("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},F().map(u))])}function M(){const a=[];if(e.navigation===!0){const u=r["navigation-icon"]!==void 0?r["navigation-icon"]:n=>t(f,{key:"nav"+n.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${n.active===!0?"":"in"}active`,...n.btnProps,onClick:n.onClick}),d=s-1;a.push(y("buttons",(n,P)=>{const w=n.props.name,k=c.value===P;return u({index:P,maxIndex:d,name:w,active:k,btnProps:{icon:k===!0?E.value:S.value,size:"sm",...g.value},onClick:()=>{_(w)}})}))}else if(e.thumbnails===!0){const u=e.controlColor!==void 0?` text-${e.controlColor}`:"";a.push(y("thumbnails",d=>{const n=d.props;return t("img",{key:"tmb#"+n.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${n.name===e.modelValue?"":"in"}active`+u,src:n.imgSrc||n["img-src"],onClick:()=>{_(n.name)}})}))}return e.arrows===!0&&c.value>=0&&((e.infinite===!0||c.value>0)&&a.push(t("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${v.value} absolute flex flex-center`},[t(f,{icon:x.value[0],...g.value,onClick:h})])),(e.infinite===!0||c.value<s-1)&&a.push(t("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${v.value} absolute flex flex-center`},[t(f,{icon:x.value[1],...g.value,onClick:q})]))),O(r.control,a)}return()=>(s=B(r),t("div",{class:A.value,style:N.value},[L("div",{class:"q-carousel__slides-container"},Q(),"sl-cont",e.swipeable,()=>D.value)].concat(M())))}});export{ce as Q,ue as a};