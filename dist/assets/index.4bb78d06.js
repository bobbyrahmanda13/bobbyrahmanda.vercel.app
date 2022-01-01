import{r as k,a as f,o as d,c as m,b as n,d as i,w as l,e as w,v as C,n as j,f as p,T as v,p as A,g as E,h as _,t as P,i as $,j as L,k as I,l as O,m as R}from"./vendor.807c6193.js";const N=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};N();var S="/assets/icons8-menu.6526af87.svg",D="/assets/icons8-close.c48f1312.svg";var u=(a,o)=>{const r=a.__vccOpts||a;for(const[s,e]of o)r[s]=e;return r};const B=a=>(A("data-v-c3a3b616"),a=a(),E(),a),T={class:"py-8"},V={class:"backdrop-blur-md fixed inset-x-0 top-0"},H={class:"max-w-6xl mx-auto px-4"},M={class:"flex justify-between"},F=B(()=>n("div",{class:""},[n("h1",{class:"font-bold flex items-center py-5 px-2"},"Bobby Rahmanda")],-1)),q={class:"hidden md:flex items-center space-x-1"},W=_("Home"),z=_("Project"),K=_("About"),Y={class:"md:hidden flex items-center"},G={key:0,class:"",src:S,alt:"menu"},J={key:1,class:"",src:D,alt:"close"},Q=_("Home"),U=_("Project"),X=_("About"),Z={setup(a){const o=k(!1);function r(){o.value=!o.value}return(s,e)=>{const t=f("router-link");return d(),m("div",T,[n("nav",V,[n("div",H,[n("div",M,[F,n("div",q,[i(t,{to:{name:"home"},class:"py-5 px-2 hover:text-primary"},{default:l(()=>[W]),_:1}),i(t,{to:{name:"project"},class:"py-5 px-2 hover:text-primary"},{default:l(()=>[z]),_:1}),i(t,{to:{name:"about"},class:"py-5 px-2 hover:text-primary"},{default:l(()=>[K]),_:1})]),n("div",Y,[n("button",{onClick:r,class:"fill-white"},[o.value?(d(),m("img",J)):(d(),m("img",G))])])])]),i(v,{name:"fade"},{default:l(()=>[w(n("div",{class:j(["text-center md:hidden",{hidden:!o.value}])},[i(t,{to:{name:"home"},class:"block py-3 px-4 text-sm hover:text-primary",onClick:p(r,["prevent"])},{default:l(()=>[Q]),_:1},8,["onClick"]),i(t,{to:{name:"project"},class:"block py-3 hover:text-primary px-4 text-sm",onClick:p(r,["prevent"])},{default:l(()=>[U]),_:1},8,["onClick"]),i(t,{to:{name:"about"},class:"block py-3 px-4 text-sm hover:text-primary",onClick:p(r,["prevent"])},{default:l(()=>[X]),_:1},8,["onClick"])],2),[[C,o.value]])]),_:1})])])}}};var ee=u(Z,[["__scopeId","data-v-c3a3b616"]]);const te={},oe={class:"pb-10"},se={class:"fixed inset-x-0 mb-0 text-center bottom-0 backdrop-blur-sm"},re={class:"font-normal text-[0.8rem] md:text-[1.1rem]"},ne=n("a",{class:"text-primary hover:text-primary-white",href:"mailto:bobbyrahmanda1996@gmail.com"},"Bobby Rahmanda",-1),ae=_(". All Rights Reserved");function ce(a,o){return d(),m("div",oe,[n("div",se,[n("span",re,[_("Copyright \xA9 "+P(new Date().getFullYear())+" ",1),ne,ae])])])}var ie=u(te,[["render",ce]]);const le={class:"border-y-2 min-h-screen border-white"},_e={setup(a){return(o,r)=>{const s=f("router-view");return d(),m("div",le,[i(ee),i(s,null,{default:l(({Component:e})=>[i(v,{name:"slide-fade"},{default:l(()=>[(d(),$(L(e)))]),_:2},1024)]),_:1}),i(ie)])}}};var de=u(_e,[["__scopeId","data-v-93ec1bfc"]]);const me="modulepreload",y={},pe="/",h=function(o,r){return!r||r.length===0?o():Promise.all(r.map(s=>{if(s=`${pe}${s}`,s in y)return;y[s]=!0;const e=s.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${t}`))return;const c=document.createElement("link");if(c.rel=e?"stylesheet":me,e||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),e)return new Promise((b,g)=>{c.addEventListener("load",b),c.addEventListener("error",g)})})).then(()=>o())},ue=()=>h(()=>import("./Home.6dc8f3e5.js"),["assets/Home.6dc8f3e5.js","assets/vendor.807c6193.js"]),he=()=>h(()=>import("./Project.d20c4654.js"),["assets/Project.d20c4654.js","assets/Project.89937aee.css","assets/vendor.807c6193.js"]),fe=()=>h(()=>import("./About.4e8ea713.js"),["assets/About.4e8ea713.js","assets/vendor.807c6193.js"]),ve=[{name:"home",path:"/",component:ue},{name:"project",path:"/project",component:he},{name:"about",path:"/about",component:fe},{path:"/:catchAll(.*)*",redirect:{name:"home"}}],ye=I({history:O(),routes:ve,linkExactActiveClass:"text-primary"});const x=R(de);x.use(ye);x.mount("#app");export{u as _};
