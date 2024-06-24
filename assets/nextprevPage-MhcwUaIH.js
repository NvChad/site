import{ssr as s,ssrHydrationKey as a,ssrAttribute as l,escape as r,createComponent as c}from"solid-js/web";import{createSignal as m,Show as x}from"solid-js";import{A as h}from"./components-Tq_E1bZh.js";import{h as v}from"./routing-BcFUMDVD.js";var $=["<div",' class="grid pl-4 gap-3 rounded-none" border="0 l solid slate-2 dark:dark-4" ml-3 pl-5>',"</div>"],_=["<div",' class="grid gap-5"><button class="rounded-xl gap-20 bg-blue-1 text-slate-7 dark:bg-dark-3 dark:text-white-2 p-2 w-full"><div class="vertCentered" font-medium><div',"></div> <!--$-->",'<!--/--></div><div class="','">',"</div></button><!--$-->","<!--/--></div>"],b=["<div"," i-jam:chevron-down></div>"],p=["<div"," i-jam:chevron-right></div>"],w=["<aside","",'><div h-full flex flex-col gap-5 class="[&amp;_*]:text-base dark:text-slate-4">',"</div></aside>"],y=["<div","></div>"];const k=[{label:["Quickstart","i-mingcute:safe-flash-fill"],items:[["Install","quickstart/install"],["Post Install","quickstart/post-install"],["Learn basic Lua","quickstart/learn-lua"]]},{label:["Configure","i-line-md:cog-filled"],items:[["Walkthrough","config/walkthrough"],["Manage Plugins","config/plugins"],["LSP Configuration","config/lsp"],["Mappings","config/mappings"],["UI Plugin","config/nvchad_ui"],["Theming","config/theming"],["Snippets","config/snippets"]]},["Features","features","i-tabler:server-cog"],["Recipes","recipes","i-mingcute:tool-fill"],["Api Functions","api","i-mdi:atom-variant"],["Contributing","contribute","i-mdi-github"],["Faq","faq","i-octicon:question-16"],["Credits","credits","i-line-md:heart"]],[C,E]=m(!1);function L(e){const t=e.labels.filter(n=>v().pathname==`/docs/${n[1]}`).length,[i,f]=m(t==1);return s(_,a(),l("class",r(e.BtnLabel[1],!0),!1),r(e.BtnLabel[0]),`bg-blue-2 dark:bg-dark-4 p-1 rounded-full
                  ${i()?"dark:text-red-3":"dark:text-white-2"}`,i()?b[0]+a()+b[1]:p[0]+a()+p[1],r(c(x,{get when(){return i()},get children(){return s($,a(),r(e.labels.map(n=>c(h,{activeClass:"text-slate-7 dark:text-white-2 font-bold",get href(){return n[1]},get children(){return n[0]}}))))}})))}function F(){return s(w,a()+l("class",r(`h-fit xl:sticky z-10 xl:top-24 xl:flex flex-col
     bg-white-1 dark:bg-dark-2
     text-gray-600 dark:text-grey rounded-xl w-full lt-xl:pb5`,!0),!1),l("hidden",!C(),!0),r(k.map(t=>t.label?c(L,{get BtnLabel(){return t.label},get labels(){return t.items}}):c(h,{get href(){return t[1]},class:"vertCentered",activeClass:"font-medium text-blue dark:text-blue-3",get children(){return[s(y,a()+l("class",r(t[2],!0),!1)),t[0]]}}))))}var S=["<div"," flex justify-between><!--$-->","<!--/--><!--$-->","<!--/--></div>"],q=["<a","><button","><div i-ph:arrow-left-bold></div><!--$-->","<!--/--></button></a>"],u=["<div","></div>"],A=["<a","><button","><!--$-->","<!--/--><div i-ph:arrow-right-bold></div></button></a>"];let o=[];k.forEach(e=>{Array.isArray(e)?o.push(e):e.items.forEach(t=>{o.push(t)})});function d(e,t){let i="",f=v().pathname.replace(/^\/docs\//,"");return o.forEach((n,g)=>{f==n[1]&&o[g+e]&&(i=o[g+e][t?1:0])}),i}const M=()=>{const e="!bg-transparent font-normal text-blue-6 dark:text-blue-4  p-3 px-5 dark:border-dark-4",t="1 solid slate-2";return s(S,a(),d(-1)?s(q,a()+l("href","/docs/"+r(d(-1,!0),!0),!1),l("border",r(t,!0),!1)+l("class",r(e,!0),!1),r(d(-1))):u[0]+a()+u[1],d(1)?s(A,a()+l("href","/docs/"+r(d(1,!0),!0),!1),l("border",r(t,!0),!1)+l("class",r(e,!0),!1),r(d(1))):u[0]+a()+u[1])};export{M as N,F as S,C as m};
