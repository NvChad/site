import{F as T,a as v,g as ee,G as $,H as K,e as A,n as te,u as W,I as q,o as ne,J as re,K as se,b as oe}from"./web-BodIy5GG.js";function ae(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,o){if(n)return!(n=!1);const a={to:r,options:o,defaultPrevented:!1,preventDefault:()=>a.defaultPrevented=!0};for(const i of e)i.listener({...a,from:i.location,retry:l=>{l&&(n=!0),i.navigate(r,{...o,resolve:!1})}});return!a.defaultPrevented}return{subscribe:t,confirm:s}}let I;function U(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),I=window.history.state._depth}U();function Ee(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function Se(e,t){let n=!1;return()=>{const s=I;U();const r=s==null?null:I-s;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const ce=/^(?:[a-z0-9]+:)?\/\//i,ie=/^\/+|(\/)\/+$/g,le="http://sr";function S(e,t=!1){const n=e.replace(ie,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function L(e,t,n){if(ce.test(t))return;const s=S(e),r=n&&S(n);let o="";return!r||t.startsWith("/")?o=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?o=s+r:o=r,(o||"/")+S(t,!o)}function ue(e,t){if(e==null)throw new Error(t);return e}function fe(e,t){return S(e).replace(/\/*(\*.*)?$/g,"")+S(t)}function z(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function he(e,t,n){const[s,r]=e.split("/*",2),o=s.split("/").filter(Boolean),a=o.length;return i=>{const l=i.split("/").filter(Boolean),f=l.length-a;if(f<0||f>0&&r===void 0&&!t)return null;const u={path:a?"":"/",params:{}},g=h=>n===void 0?void 0:n[h];for(let h=0;h<a;h++){const p=o[h],m=l[h],P=p[0]===":",b=P?p.slice(1):p;if(P&&j(m,g(b)))u.params[b]=m;else if(P||!j(m,p))return null;u.path+=`/${m}`}if(r){const h=f?l.slice(-f).join("/"):"";if(j(h,g(r)))u.params[r]=h;else return null}return u}}function j(e,t){const n=s=>s.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function de(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,o)=>r+(o.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function pe(e){const t=new Map,n=ee();return new Proxy({},{get(s,r){return t.has(r)||T(n,()=>t.set(r,v(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function H(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return H(s).reduce((o,a)=>[...o,...r.map(i=>i+a)],[])}const ge=100,me=K(),N=K(),B=()=>ue($(me),"<A> and 'use' router primitives can be only used inside a Route."),ye=()=>$(N)||B().base,Ae=e=>{const t=ye();return v(()=>t.resolvePath(e()))},Le=e=>{const t=B();return v(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Be=()=>B().navigatorFactory(),Fe=()=>B().location;function we(e,t=""){const{component:n,load:s,children:r,info:o}=e,a=!r||Array.isArray(r)&&!r.length,i={key:e,component:n,load:s,info:o};return G(e.path).reduce((l,f)=>{for(const u of H(f)){const g=fe(t,u);let h=a?g:g.split("/*",1)[0];h=h.split("/").map(p=>p.startsWith(":")||p.startsWith("*")?p:encodeURIComponent(p)).join("/"),l.push({...i,originalPath:u,pattern:h,matcher:he(h,!a,e.matchFilters)})}return l},[])}function ve(e,t=0){return{routes:e,score:de(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const o=e[r],a=o.matcher(n);if(!a)return null;s.unshift({...a,route:o})}return s}}}function G(e){return Array.isArray(e)?e:[e]}function Re(e,t="",n=[],s=[]){const r=G(e);for(let o=0,a=r.length;o<a;o++){const i=r[o];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const l=we(i,t);for(const f of l){n.push(f);const u=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!u)Re(i.children,f.pattern,n,s);else{const g=ve([...n],s.length);s.push(g)}n.pop()}}}return n.length?s:s.sort((o,a)=>a.score-o.score)}function Pe(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function be(e,t){const n=new URL(le),s=v(l=>{const f=e();try{return new URL(f,n)}catch{return console.error(`Invalid path ${f}`),l}},n,{equals:(l,f)=>l.href===f.href}),r=v(()=>s().pathname),o=v(()=>s().search,!0),a=v(()=>s().hash),i=()=>"";return{get pathname(){return r()},get search(){return o()},get hash(){return a()},get state(){return t()},get key(){return i()},query:pe(ne(o,()=>z(s())))}}let w;function Oe(e,t,n,s={}){const{signal:[r,o],utils:a={}}=e,i=a.parsePath||(c=>c),l=a.renderPath||(c=>c),f=a.beforeLeave||ae(),u=L("",s.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!r().value&&o({value:u,replace:!0,scroll:!1});const[g,h]=A(!1),p=async c=>{h(!0);try{await re(c)}finally{h(!1)}},[m,P]=A(r().value),[b,k]=A(r().state),J=be(m,b),C=[],F=A([]),M={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(c){return L(u,c)}};return te(()=>{const{value:c,state:d}=r();W(()=>{c!==m()&&p(()=>{w="native",P(c),k(d),q(),F[1]([])}).then(()=>{w=void 0})})}),{base:M,location:J,isRouting:g,renderPath:l,parsePath:i,navigatorFactory:Q,beforeLeave:f,preloadRoute:Y,singleFlight:s.singleFlight===void 0?!0:s.singleFlight,submissions:F};function X(c,d,R){W(()=>{if(typeof d=="number"){d&&(a.go?a.go(d):console.warn("Router integration does not support relative routing"));return}const{replace:O,resolve:_,scroll:x,state:E}={replace:!1,resolve:!0,scroll:!0,...R},y=_?c.resolvePath(d):L("",d);if(y===void 0)throw new Error(`Path '${d}' is not a routable path`);if(C.length>=ge)throw new Error("Too many redirects");const D=m();if((y!==D||E!==b())&&!se){if(f.confirm(y,R)){const Z=C.push({value:D,replace:O,scroll:x,state:b()});p(()=>{w="navigate",P(y),k(E),q(),F[1]([])}).then(()=>{C.length===Z&&(w=void 0,V({value:y,state:E}))})}}})}function Q(c){return c=c||$(N)||M,(d,R)=>X(c,d,R)}function V(c){const d=C[0];d&&((c.value!==d.value||c.state!==d.state)&&o({...c,replace:d.replace,scroll:d.scroll}),C.length=0)}function Y(c,d){const R=Pe(n(),c.pathname),O=w;w="preload";for(let _ in R){const{route:x,params:E}=R[_];x.component&&x.component.preload&&x.component.preload();const{load:y}=x;d&&y&&T(t(),()=>y({params:E,location:{pathname:c.pathname,search:c.search,hash:c.hash,query:z(c),state:null,key:""},intent:"preload"}))}w=O}}function _e(e,t,n,s,r){const{base:o,location:a}=e,{pattern:i,component:l,load:f}=s().route,u=v(()=>s().path);l&&l.preload&&l.preload();const g=f?f({params:r,location:a,intent:w||"initial"}):void 0;return{parent:t,pattern:i,path:u,params:r,outlet:()=>l?oe(l,{params:r,location:a,data:g,get children(){return n()}}):n(),resolvePath(p){return L(o.path(),p,u())}}}export{me as R,Oe as a,pe as b,Re as c,N as d,_e as e,ae as f,Pe as g,Be as h,Ae as i,Le as j,Ee as k,S as l,le as m,Se as n,U as s,Fe as u};
