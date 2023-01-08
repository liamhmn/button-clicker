function e(e,t){return Object.keys(t).forEach((function(n){"default"===n||"__esModule"===n||e.hasOwnProperty(n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})),e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}window.gtag("config","UA-59233605-5"),window["ga-disable-UA-59233605-5"]=!1;const n=document.createElement("script");n.async=!0,n.src="https://www.googletagmanager.com/gtag/js?id=UA-59233605-5",document.head.appendChild(n);const r="click",o="button",a=document.getElementById("cursor"),c={button:document.getElementById("button"),counter:document.getElementById("counter"),cursor:a,cursorButton:a.querySelector(o),message:document.getElementById("message"),store:document.getElementById("store")},s=(e,t,n)=>Math.floor(e*Math.pow(t,n));function u(e){return c[e]?c[e]:c[e]=document.getElementById(e)}const l=(e,t)=>`${e.toLocaleString()} ${1===e?"click":"clicks"} per ${t.toLocaleString()} ${1===t?"second":"seconds"}`;var i={},d={};t(d,"clicks",(function(){return b}));const b={current:0,total:0};var h={};t(h,"cursor",(function(){return g}));const g={message:"Upgraded cursor click power.",owned:1,cost:{base:100,rate:2},output:{base:2,current:1}};g.cost.next=g.cost.base,g.output.next=g.output.base;var m={};t(m,"generators",(function(){return p}));const p={generator1:{label:"Generator 1",message:"Purchased Generator 1.",owned:0,delay:10,cost:{base:15,rate:1.15},output:{base:1,current:0}},generator2:{label:"Generator 2",message:"Purchased Generator 2.",owned:0,delay:1,cost:{base:100,rate:1.15},output:{base:1,current:0}},generator3:{label:"Generator 3",message:"Purchased Generator 3.",owned:0,delay:1,cost:{base:1100,rate:1.15},output:{base:8,current:0}},generator4:{label:"Generator 4",message:"Purchased Generator 4.",owned:0,delay:1,cost:{base:12e3,rate:1.15},output:{base:47,current:0}},generator5:{label:"Generator 5",message:"Purchased Generator 5.",owned:0,delay:1,cost:{base:13e4,rate:1.15},output:{base:260,current:0}},generator6:{label:"Generator 6",message:"Purchased Generator 6.",owned:0,delay:1,cost:{base:14e5,rate:1.15},output:{base:1400,current:0}},generator7:{label:"Generator 7",message:"Purchased Generator 7.",owned:0,delay:1,cost:{base:2e7,rate:1.15},output:{base:7800,current:0}},generator8:{label:"Generator 8",message:"Purchased Generator 8.",owned:0,delay:1,cost:{base:33e7,rate:1.15},output:{base:44e3,current:0}},generator9:{label:"Generator 9",message:"Purchased Generator 9.",owned:0,delay:1,cost:{base:51e8,rate:1.15},output:{base:26e4,current:0}},generator10:{label:"Generator 10",message:"Purchased Generator 10.",owned:0,delay:1,cost:{base:75e9,rate:1.15},output:{base:16e5,current:0}},generator11:{label:"Generator 11",message:"Purchased Generator 11.",owned:0,delay:1,cost:{base:1e12,rate:1.15},output:{base:1e7,current:0}},generator12:{label:"Generator 12",message:"Purchased Generator 12.",owned:0,delay:1,cost:{base:14e12,rate:1.15},output:{base:65e6,current:0}},generator13:{label:"Generator 13",message:"Purchased Generator 13.",owned:0,delay:1,cost:{base:17e13,rate:1.15},output:{base:43e7,current:0}},generator14:{label:"Generator 14",message:"Purchased Generator 14.",owned:0,delay:1,cost:{base:21e14,rate:1.15},output:{base:29e8,current:0}},generator15:{label:"Generator 15",message:"Purchased Generator 15.",owned:0,delay:1,cost:{base:26e15,rate:1.15},output:{base:21e9,current:0}},generator16:{label:"Generator 16",message:"Purchased Generator 16.",owned:0,delay:1,cost:{base:31e16,rate:1.15},output:{base:15e10,current:0}}};Object.keys(p).forEach((e=>{const t=p[e];t.cost.next=t.cost.base,t.output.next=t.output.base}));var y={};t(y,"messages",(function(){return k}));const k={1:"The clicking has commenced...",10:"The button has been clicked ten times.",100:"The button has been clicked one hundred times.",1e3:"The button has been clicked one thousand times.",1e4:"The button has been clicked ten thousand times.",1e5:"The button has been clicked one hundred thousand times.",1e6:"The button has been clicked one million times.",1e7:"The button has been clicked ten million times.",1e8:"The button has been clicked one hundred million times.",1e9:"The button has been clicked one billion times.",1e10:"The button has been clicked ten billion times.",1e12:"The button has been clicked one hundred billion times.",1e13:"The button has been clicked one trillion times.",1e14:"The button has been clicked ten trillion times.",1e15:"The button has been clicked one hundred trillion times.",1e16:"The button has been clicked one quadrillion times.",1e17:"The button has been clicked ten quadrillion times.",1e18:"The button has been clicked one hundred quadrillion times.",1e19:"The button has been clicked one quitillion times.",1e20:"The button has been clicked ten quitillion times.",1e21:"The button has been clicked one hundred quitillion times.",1e22:"The button has been clicked one sextillion times."};function x(){c.counter.innerText=b.current.toLocaleString()}function T(){const e=c.cursor,{cursor:t}=i;e.querySelector(".owned").innerText=(t.owned-1).toLocaleString(),e.querySelector(".cost").innerText=t.cost.next.toLocaleString(),e.querySelector(".output-current").innerText=`${t.output.current.toLocaleString()} per click`,e.querySelector(".output-next").innerText=`${t.output.next.toLocaleString()} per click`}function f(e){const t=p[e],n=u(e);n.querySelector(".owned").innerText=t.owned.toLocaleString(),n.querySelector(".cost").innerText=t.cost.next.toLocaleString(),n.querySelector(".output-current").innerText=l(t.output.current,t.delay),n.querySelector(".output-next").innerText=l(t.output.next,t.delay)}function w(e=""){const{total:t}=b;let n;if(e)n=e;else if(k[t])n=k[t],delete k[t];else for(const e in k){t>=e&&(n=k[e],delete k[e]);break}n&&(n=n.toLocaleString(),n!==c.message.innerText&&(c.message.innerText=n))}function G(e,t=!1){const{clicks:n}=i;n.current+=e,t||(n.total+=e,w()),x(),c.cursorButton.disabled=n.current<i.cursor.cost.next;const{generators:r}=i;Object.keys(r).forEach((e=>{u(e).querySelector(o).disabled=n.current<r[e].cost.next}))}function S(e){G(-e,!0)}e(i,d),e(i,h),e(i,m),e(i,y),Object.keys(p).forEach((e=>{const t=p[e],n=c.cursor.cloneNode(!0);n.id=e;const r=n.querySelector(o);r.title=t.label,r.innerText=t.label,c.store.appendChild(n)})),x(),T(),Object.keys(p).forEach((e=>{f(e)})),c.button.addEventListener(r,(()=>{G(i.cursor.output.current)})),c.cursorButton.addEventListener(r,(()=>{if(i.clicks.current>=i.cursor.cost.next){const{cursor:e}=i;S(e.cost.next),function(){const{cursor:e}=i,{cost:t,output:n}=e,r=++e.owned;t.next=s(t.base,t.rate,r-1),n.current=n.next,n.next=Math.round(n.base*r),T()}(),w(e.message)}})),Object.keys(i.generators).forEach((e=>{const t=i.generators[e];u(e).querySelector(o).addEventListener(r,(()=>{i.clicks.current>=t.cost.next&&(S(t.cost.next),function(e){const t=i.generators[e],{cost:n,output:r}=t,o=++t.owned;n.next=s(n.base,n.rate,o),r.current=r.next,r.next=Math.round(r.base*(o+1)),f(e)}(e),t.interval?t.interval.callback=()=>{G(t.output.current)}:(t.interval={callback:()=>{G(t.output.current)}},setInterval(t.interval.callback,1e3*t.delay)),t.message&&w(t.message))}))}));
//# sourceMappingURL=index.75028b3e.js.map
