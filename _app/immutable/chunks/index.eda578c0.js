function x(){}const rt=t=>t;function Tt(t,e){for(const n in e)t[n]=e[n];return t}function ot(t){return t()}function et(){return Object.create(null)}function E(t){t.forEach(ot)}function H(t){return typeof t=="function"}function ie(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function se(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function Nt(t){return Object.keys(t).length===0}function ct(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function re(t){let e;return ct(t,n=>e=n)(),e}function oe(t,e,n){t.$$.on_destroy.push(ct(e,n))}function ce(t,e,n,i){if(t){const s=lt(t,e,n,i);return t[0](s)}}function lt(t,e,n,i){return t[1]&&i?Tt(n.ctx.slice(),t[1](i(e))):n.ctx}function le(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function ae(t,e,n,i,s,o){if(s){const r=lt(e,n,i,o);t.p(r,s)}}function ue(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function fe(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function _e(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function de(t){const e={};for(const n in t)e[n]=!0;return e}function he(t){return t??""}function me(t,e,n){return t.set(n),e}function pe(t){return t&&H(t.destroy)?t.destroy:x}function ye(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const At=["",!0,1,"true","contenteditable"],at=typeof window<"u";let ut=at?()=>window.performance.now():()=>Date.now(),V=at?t=>requestAnimationFrame(t):x;const N=new Set;function ft(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&V(ft)}function _t(t){let e;return N.size===0&&V(ft),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}const ge=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let W=!1;function Mt(){W=!0}function St(){W=!1}function jt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:jt(1,s,_=>e[n[_]].claim_order,a))-1;i[c]=n[f]+1;const u=f+1;n[u]=c,s=Math.max(u,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<o.length&&r[c].claim_order>=o[a].claim_order;)a++;const f=a<o.length?o[a]:null;t.insertBefore(r[c],f)}}function Dt(t,e){t.appendChild(e)}function dt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ot(t){const e=X("style");return Pt(dt(t),e),e.sheet}function Pt(t,e){return Dt(t.head||t,e),e.sheet}function Lt(t,e){if(W){for(Ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){t.insertBefore(e,n||null)}function Rt(t,e,n){W&&!n?Lt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function O(t){t.parentNode&&t.parentNode.removeChild(t)}function $e(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function ht(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Y(t){return document.createTextNode(t)}function be(){return Y(" ")}function we(){return Y("")}function xe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ee(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ve(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Z(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const qt=["width","height"];function Bt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&qt.indexOf(i)===-1?t[i]=e[i]:Z(t,i,e[i])}function ke(t,e){for(const n in e)Z(t,n,e[n])}function zt(t,e){Object.keys(e).forEach(n=>{Ft(t,n,e[n])})}function Ft(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:Z(t,e,n)}function Te(t){return/-/.test(t)?zt:Bt}function Gt(t){return Array.from(t.childNodes)}function mt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function pt(t,e,n,i,s=!1){mt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function yt(t,e,n,i){return pt(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ne(t,e,n){return yt(t,e,n,X)}function Ae(t,e,n){return yt(t,e,n,ht)}function Wt(t,e){return pt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Y(e),!0)}function Me(t){return Wt(t," ")}function nt(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Se(t,e){const n=nt(t,"HTML_TAG_START",0),i=nt(t,"HTML_TAG_END",n);if(n===i)return new it(void 0,e);mt(t);const s=t.splice(n,i-n+1);O(s[0]),O(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new it(o,e)}function It(t,e){e=""+e,t.data!==e&&(t.data=e)}function Jt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function je(t,e,n){~At.indexOf(n)?Jt(t,e):It(t,e)}function Ce(t,e){t.value=e??""}function De(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Oe(t,e,n){t.classList[n?"add":"remove"](e)}function gt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Pe(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Kt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=ht(n.nodeName):this.e=X(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Ht(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(O)}}class it extends Kt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Rt(this.t,this.n[n],e)}}function Le(t,e){return new t(e)}const z=new Map;let F=0;function Qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ut(t,e){const n={stylesheet:Ot(e),rules:{}};return z.set(t,n),n}function $t(t,e,n,i,s,o,r,l=0){const c=16.666/i;let a=`{
`;for(let p=0;p<=1;p+=c){const y=e+(n-e)*o(p);a+=p*100+`%{${r(y,1-y)}}
`}const f=a+`100% {${r(n,1-n)}}
}`,u=`__svelte_${Qt(f)}_${l}`,_=dt(t),{stylesheet:h,rules:d}=z.get(_)||Ut(_,t);d[u]||(d[u]=!0,h.insertRule(`@keyframes ${u} ${f}`,h.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${i}ms linear ${s}ms 1 both`,F+=1,u}function K(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),F-=s,F||Vt())}function Vt(){V(()=>{F||(z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&O(e)}),z.clear())})}let P;function D(t){P=t}function M(){if(!P)throw new Error("Function called outside component initialization");return P}function He(t){M().$$.on_mount.push(t)}function Re(t){M().$$.after_update.push(t)}function qe(t){M().$$.on_destroy.push(t)}function Be(){const t=M();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=gt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function ze(t,e){return M().$$.context.set(t,e),e}function Fe(t){return M().$$.context.get(t)}function Ge(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const T=[],st=[];let A=[];const Q=[],bt=Promise.resolve();let U=!1;function wt(){U||(U=!0,bt.then(xt))}function We(){return wt(),bt}function L(t){A.push(t)}function Ie(t){Q.push(t)}const J=new Set;let k=0;function xt(){if(k!==0)return;const t=P;do{try{for(;k<T.length;){const e=T[k];k++,D(e),Xt(e.$$)}}catch(e){throw T.length=0,k=0,e}for(D(null),T.length=0,k=0;st.length;)st.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];J.has(n)||(J.add(n),n())}A.length=0}while(T.length);for(;Q.length;)Q.pop()();U=!1,J.clear(),D(t)}function Xt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}function Yt(t){const e=[],n=[];A.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),A=e}let C;function Et(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function G(t,e,n){t.dispatchEvent(gt(`${e?"intro":"outro"}${n}`))}const B=new Set;let w;function Je(){w={r:0,c:[],p:w}}function Ke(){w.r||E(w.c),w=w.p}function vt(t,e){t&&t.i&&(B.delete(t),t.i(e))}function Zt(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),w.c.push(()=>{B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const kt={duration:0};function Qe(t,e,n){const i={direction:"in"};let s=e(t,n,i),o=!1,r,l,c=0;function a(){r&&K(t,r)}function f(){const{delay:_=0,duration:h=300,easing:d=rt,tick:g=x,css:p}=s||kt;p&&(r=$t(t,0,1,h,_,d,p,c++)),g(0,1);const y=ut()+_,S=y+h;l&&l.abort(),o=!0,L(()=>G(t,!0,"start")),l=_t(v=>{if(o){if(v>=S)return g(1,0),G(t,!0,"end"),a(),o=!1;if(v>=y){const j=d((v-y)/h);g(j,1-j)}}return o})}let u=!1;return{start(){u||(u=!0,K(t),H(s)?(s=s(i),Et().then(f)):f())},invalidate(){u=!1},end(){o&&(a(),o=!1)}}}function Ue(t,e,n){const i={direction:"out"};let s=e(t,n,i),o=!0,r;const l=w;l.r+=1;function c(){const{delay:a=0,duration:f=300,easing:u=rt,tick:_=x,css:h}=s||kt;h&&(r=$t(t,1,0,f,a,u,h));const d=ut()+a,g=d+f;L(()=>G(t,!1,"start")),_t(p=>{if(o){if(p>=g)return _(0,1),G(t,!1,"end"),--l.r||E(l.c),!1;if(p>=d){const y=u((p-d)/f);_(1-y,y)}}return o})}return H(s)?Et().then(()=>{s=s(i),c()}):c(),{end(a){a&&s.tick&&s.tick(1,0),o&&(r&&K(t,r),o=!1)}}}function Ve(t,e){Zt(t,1,1,()=>{e.delete(t.key)})}function Xe(t,e,n,i,s,o,r,l,c,a,f,u){let _=t.length,h=o.length,d=_;const g={};for(;d--;)g[t[d].key]=d;const p=[],y=new Map,S=new Map,v=[];for(d=h;d--;){const m=u(s,o,d),$=n(m);let b=r.get($);b?i&&v.push(()=>b.p(m,e)):(b=a($,m),b.c()),y.set($,p[d]=b),$ in g&&S.set($,Math.abs(d-g[$]))}const j=new Set,tt=new Set;function I(m){vt(m,1),m.m(l,f),r.set(m.key,m),f=m.first,h--}for(;_&&h;){const m=p[h-1],$=t[_-1],b=m.key,R=$.key;m===$?(f=m.first,_--,h--):y.has(R)?!r.has(b)||j.has(b)?I(m):tt.has(R)?_--:S.get(b)>S.get(R)?(tt.add(b),I(m)):(j.add(R),_--):(c($,r),_--)}for(;_--;){const m=t[_];y.has(m.key)||c(m,r)}for(;h;)I(p[h-1]);return E(v),p}function Ye(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=e[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ze(t){return typeof t=="object"&&t!==null?t:{}}function tn(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function en(t){t&&t.c()}function nn(t,e){t&&t.l(e)}function te(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||L(()=>{const r=t.$$.on_mount.map(ot).filter(H);t.$$.on_destroy?t.$$.on_destroy.push(...r):E(r),t.$$.on_mount=[]}),o.forEach(L)}function ee(t,e){const n=t.$$;n.fragment!==null&&(Yt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(t,e){t.$$.dirty[0]===-1&&(T.push(t),wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function sn(t,e,n,i,s,o,r,l=[-1]){const c=P;D(t);const a=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:s,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:et(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(u,_,...h)=>{const d=h.length?h[0]:_;return a.ctx&&s(a.ctx[u],a.ctx[u]=d)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](d),f&&ne(t,u)),_}):[],a.update(),f=!0,E(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){Mt();const u=Gt(e.target);a.fragment&&a.fragment.l(u),u.forEach(O)}else a.fragment&&a.fragment.c();e.intro&&vt(t.$$.fragment),te(t,e.target,e.anchor,e.customElement),St(),xt()}D(c)}class rn{$destroy(){ee(this,1),this.$destroy=x}$on(e,n){if(!H(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Nt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{xe as $,te as A,ee as B,Xe as C,Lt as D,L as E,Qe as F,Ue as G,Ve as H,Tt as I,ht as J,Ae as K,ke as L,Ye as M,x as N,_e as O,fe as P,ce as Q,ae as R,rn as S,ue as T,le as U,oe as V,Ze as W,M as X,Fe as Y,Bt as Z,pe as _,be as a,H as a0,E as a1,ze as a2,de as a3,$e as a4,Ce as a5,Ee as a6,me as a7,Pe as a8,qe as a9,Oe as aa,tn as ab,Ie as ac,Be as ad,ge as ae,rt as af,ye as ag,je as ah,Te as ai,se as aj,re as ak,ct as al,it as am,Se as an,Ge as ao,ve as ap,he as aq,Rt as b,Me as c,Zt as d,we as e,Ke as f,vt as g,O as h,sn as i,Re as j,X as k,Ne as l,Gt as m,Z as n,He as o,De as p,Y as q,Wt as r,ie as s,We as t,It as u,Je as v,st as w,Le as x,en as y,nn as z};
