import{c as g,w as v,V as k,W as O,a as E}from"./index.77d05b19.js";const T=Object.prototype.toString,m=Object.prototype.hasOwnProperty,w=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(t=>"[object "+t+"]"));function p(t){if(t!==Object(t)||w.has(T.call(t))===!0||t.constructor&&m.call(t,"constructor")===!1&&m.call(t.constructor.prototype,"isPrototypeOf")===!1)return!1;let n;for(n in t);return n===void 0||m.call(t,n)}function b(){let t,n,e,r,o,l,i=arguments[0]||{},c=1,f=!1;const d=arguments.length;for(typeof i=="boolean"&&(f=i,i=arguments[1]||{},c=2),Object(i)!==i&&typeof i!="function"&&(i={}),d===c&&(i=this,c--);c<d;c++)if((t=arguments[c])!==null)for(n in t)e=i[n],r=t[n],i!==r&&(f===!0&&r&&((o=Array.isArray(r))||p(r)===!0)?(o===!0?l=Array.isArray(e)===!0?e:[]:l=p(e)===!0?e:{},i[n]=b(f,l,r)):r!==void 0&&(i[n]=r));return i}let s=null,h;const u=[];function P(t){t.title&&(t.title=t.titleTemplate?t.titleTemplate(t.title):t.title,delete t.titleTemplate),[["meta","content"],["link","href"]].forEach(n=>{const e=t[n[0]],r=n[1];for(const o in e){const l=e[o];l.template&&(Object.keys(l).length===1?delete e[o]:(l[r]=l.template(l[r]||""),delete l.template))}})}function j(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!0;for(const e in t)if(t[e]!==n[e])return!0}function y(t){return["class","style"].includes(t)===!1}function A(t){return["lang","dir"].includes(t)===!1}function M(t,n){const e={},r={};return t===void 0?{add:n,remove:r}:(t.title!==n.title&&(e.title=n.title),["meta","link","script","htmlAttr","bodyAttr"].forEach(o=>{const l=t[o],i=n[o];if(r[o]=[],l==null){e[o]=i;return}e[o]={};for(const c in l)i.hasOwnProperty(c)===!1&&r[o].push(c);for(const c in i)l.hasOwnProperty(c)===!1?e[o][c]=i[c]:j(l[c],i[c])===!0&&(r[o].push(c),e[o][c]=i[c])}),{add:e,remove:r})}function L({add:t,remove:n}){t.title&&(document.title=t.title),Object.keys(n).length!==0&&(["meta","link","script"].forEach(e=>{n[e].forEach(r=>{document.head.querySelector(`${e}[data-qmeta="${r}"]`).remove()})}),n.htmlAttr.filter(A).forEach(e=>{document.documentElement.removeAttribute(e)}),n.bodyAttr.filter(y).forEach(e=>{document.body.removeAttribute(e)})),["meta","link","script"].forEach(e=>{const r=t[e];for(const o in r){const l=document.createElement(e);for(const i in r[o])i!=="innerHTML"&&l.setAttribute(i,r[o][i]);l.setAttribute("data-qmeta",o),e==="script"&&(l.innerHTML=r[o].innerHTML||""),document.head.appendChild(l)}}),Object.keys(t.htmlAttr).filter(A).forEach(e=>{document.documentElement.setAttribute(e,t.htmlAttr[e]||"")}),Object.keys(t.bodyAttr).filter(y).forEach(e=>{document.body.setAttribute(e,t.bodyAttr[e]||"")})}function S(){s=null;const t={title:"",titleTemplate:null,meta:{},link:{},script:{},htmlAttr:{},bodyAttr:{}};for(let n=0;n<u.length;n++){const{active:e,val:r}=u[n];e===!0&&b(!0,t,r)}P(t),L(M(h,t)),h=t}function a(){s!==null&&clearTimeout(s),s=setTimeout(S,50)}function C(t){{const n={active:!0};if(typeof t=="function"){const e=g(t);n.val=e.value,v(e,r=>{n.val=r,n.active===!0&&a()})}else n.val=t;u.push(n),a(),k(()=>{n.active=!0,a()}),O(()=>{n.active=!1,a()}),E(()=>{u.splice(u.indexOf(n),1),a()})}}export{b as e,C as u};
