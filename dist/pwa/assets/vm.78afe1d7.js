function a(r){if(Object(r.$parent)===r.$parent)return r.$parent;let{parent:e}=r.$;for(;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function n(r,e){typeof e.type=="symbol"?Array.isArray(e.children)===!0&&e.children.forEach(t=>{n(r,t)}):r.add(e)}function o(r){const e=new Set;return r.forEach(t=>{n(e,t)}),Array.from(e)}function i(r){return r.appContext.config.globalProperties.$router!==void 0}function s(r){return r.isUnmounted===!0||r.isDeactivated===!0}export{i as a,o as b,a as g,s as v};
