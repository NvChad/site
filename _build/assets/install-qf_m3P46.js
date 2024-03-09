import{k as e,e as D,j as L,h as j,t,l as s,m as r,n as y,p as g,r as I,a as _}from"./web-CBU83r8B.js";import{c as P}from"./clipboard-DzJ4oxno.js";var R=t("<li>If you're using Command Prompt(CMD)"),M=t("<pre class=hljs>git clone https://github.com/NvChad/starter %USERPROFILE%\\AppData\\Local\\nvim && nvim"),O=t("<li>If you're using PowerShell(pwsh)"),U=t("<pre class=hljs>git clone https://github.com/NvChad/starter $ENV:USERPROFILE\\AppData\\Local\\nvim && nvim"),F=t("<b>If the above path doesnt work, try any of these paths :"),V=t("<li>For CMD : %LOCALAPPDATA%\\nvim "),H=t("<pre class=hljs>C:\\Users\\%USERNAME%\\AppData\\Local\\nvim"),T=t("<li>For PowerShell : $ENV:LocalAppData\\nvim "),q=t("<pre class=hljs>C:\\Users\\$ENV:USERNAME\\AppData\\Local\\nvim"),z=t('<div flex="~ wrap"gap-5><!$><!/><div w=full grid="~ gap4"><!$><!/><!$><!/>'),B=t("<button><div></div> <!$><!/>"),G=t("<pre class=hljs>");const h=[{name:"linux / macos",cmd:"git clone https://github.com/NvChad/starter ~/.config/nvim && nvim",icon:"i-mingcute:hashtag-fill"},{name:"windows",icon:"i-mdi:windows",cmds:[e(R),e(M),e(O),e(U),e(F),e(V),e(H),e(T),e(q)]},{name:"docker",icon:"i-nonicons:docker-16",cmd:`docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep build-base wget --update
  git clone https://github.com/NvChad/starter ~/.config/nvim
  nvim
  '`}],[l,J]=D(h[0]);L(()=>{l(),P("DocContent")});const W=()=>(()=>{var o=e(z),u=o.firstChild,[m,b]=s(u.nextSibling),c=m.nextSibling,f=c.firstChild,[p,S]=s(f.nextSibling),E=p.nextSibling,[C,k]=s(E.nextSibling);return r(o,()=>h.map(a=>(()=>{var i=e(B),d=i.firstChild,w=d.nextSibling,N=w.nextSibling,[x,A]=s(N.nextSibling);return i.$$click=()=>J(a),r(i,()=>a.name,x,A),y(n=>{var $=l().name==a.name?"bg-emerald2 dark:bg-sky3 dark:text-black":"",v=a.icon;return $!==n.e&&g(i,n.e=$),v!==n.t&&g(d,n.t=v),n},{e:void 0,t:void 0}),I(),i})()),m,b),r(c,(()=>{var a=_(()=>!!l()?.cmd);return()=>a()&&(()=>{var i=e(G);return r(i,()=>l()?.cmd),i})()})(),p,S),r(c,(()=>{var a=_(()=>!!l()?.cmds);return()=>a()&&l().cmds})(),C,k),o})();j(["click"]);export{W as O,h as o,J as s};
