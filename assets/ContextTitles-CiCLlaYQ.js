import{ssr as s,ssrHydrationKey as l,escape as o,ssrAttribute as d}from"solid-js/web";import{createSignal as a}from"solid-js";import{createStore as i}from"solid-js/store";import{h as c}from"./routing-BcFUMDVD.js";function g(t){const e=t.getBoundingClientRect();return!!(e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth))}const[b,u]=a(""),[m,h]=i([]),w=t=>{let n=document.getElementById(t)?.querySelectorAll("h2,h3");for(let r=0;r<n?.length;r++)if(g(n[r])){u(n[r].innerText);break}},_=()=>{const e=document.getElementById("DocContent")?.querySelectorAll("h2, h3"),n=[];e?.forEach(r=>{r.id=r.innerText.replaceAll(/[ .&]/g,"_").toLowerCase(),r.className!="nosidebar"&&n.push([r.localName.toLowerCase(),r.innerText])}),h(n)},E=()=>{const t=location.hash;if(t[0]==="#"){const e=t.substring(1);document.getElementById(e)?.scrollIntoView()}};var p=["<div",' h-fit mt-6 xl="sticky top-30"><button class="rounded-lg text-lg bg-blue-1 dark:bg-dark-3 mb-3 w-full" m="t-[-2rem]" xl="rounded-none pb-2 border-l-solid mb-0 pt-0 bg-transparent dark:bg-transparent">Page Contents<div class="i-jam-chevron-down xl:hidden text-slate-7 dark:bg-blue-3"></div></button><div text="slate-5" class="','" mb-5>',"</div></div>"],x=["<a",' href="','"',">","</a>"];function f(t){let e=`rounded-r-lg py-2  px-5 text-darkgrey xl:border-solid border-0 border-l-2 border-slate-2 dark:border-dark-3 ${b()==t[1]?"!border-blue-5 bg-slate-2 xl:bg-sky-1 !text-blue-7 font-medium dark:bg-dark-3 dark:!text-blue-3 dark:border-blue-4":""}`;return t[0]=="h3"?`pl-10 ${e}`:`${e}`}function $(){const[t,e]=a(!1);return s(p,l(),`grid xl:grid py-3 xl:py-0 bg-slate-1 dark:bg-dark-3 xl:bg-transparent xl:dark-bg-transparent ${t()?"":"hidden"}`,o(m.map(n=>s(x,l(),`${o(c().pathname,!0)}#${o(n[1].replaceAll(/[ .&]/g,"_").toLowerCase(),!0)}`,d("class",o(f(n),!0),!1),o(n[1])))))}export{$ as C,_ as a,E as b,m as c,w as g};
