import{O as b,s as w}from"./index.64b96c71.js";const u=[];function I(e,t){return{subscribe:d(e,t).subscribe}}function d(e,t=b){let n;const o=new Set;function r(s){if(w(e,s)&&(e=s,n)){const i=!u.length;for(const l of o)l[1](),u.push(l,e);if(i){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function c(s){r(s(e))}function a(s,i=b){const l=[s,i];return o.add(l),o.size===1&&(n=t(r)||b),s(e),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:r,update:c,subscribe:a}}var g;const y=((g=globalThis.__sveltekit_ylfez9)==null?void 0:g.base)??"";var k;const E=((k=globalThis.__sveltekit_ylfez9)==null?void 0:k.assets)??y,A="1692340735846",O="sveltekit:snapshot",x="sveltekit:scroll",U="sveltekit:index",p={tap:1,hover:2,viewport:3,eager:4,off:-1};function L(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function N(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const _={...p,"":p.hover};function m(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function z(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=m(e)}}function P(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!o||S(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:r,target:o,download:c}}function V(e){let t=null,n=null,o=null,r=null,c=null,a=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),c===null&&(c=f(s,"reload")),a===null&&(a=f(s,"replacestate")),s=m(s);function i(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:_[o??"off"],preload_data:_[r??"off"],keep_focus:i(t),noscroll:i(n),reload:i(c),replace_state:i(a)}}function h(e){const t=d(e);let n=!0;function o(){n=!0,t.update(a=>a)}function r(a){n=!1,t.set(a)}function c(a){let s;return t.subscribe(i=>{(s===void 0||n&&i!==s)&&a(s=i)})}return{notify:o,set:r,subscribe:c}}function R(){const{set:e,subscribe:t}=d(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${E}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==A;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:o}}function S(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let v;function Y(e){v=e.client}function j(e){return(...t)=>v[e](...t)}const q={url:h({}),page:h({}),navigating:d(null),updated:R()};export{U as I,p as P,x as S,O as a,P as b,V as c,q as d,y as e,z as f,L as g,Y as h,S as i,j,I as r,N as s,d as w};
