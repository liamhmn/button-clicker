!function(){(0,window.gtag)("config","UA-59233605-5"),window["ga-disable-UA-59233605-5"]=!1;var e=document.createElement("script");e.async=!0,e.src="https://www.googletagmanager.com/gtag/js?id=UA-59233605-5",document.head.appendChild(e);var t="click",n="button",r=document.getElementById("cursor"),o={button:document.getElementById("button"),counter:document.getElementById("counter"),cursor:r,cursorButton:r.querySelector(n),message:document.getElementById("message"),store:document.getElementById("store")},a=function(e,t,n){return Math.floor(e*Math.pow(t,n))};function c(e){var t=o[e];return t||(o[e]=document.getElementById(e))}var s=function(e,t){return"".concat(e.toLocaleString()," ").concat(1===e?"click":"clicks"," per ").concat(t.toLocaleString()," ").concat(1===t?"second":"seconds")},u={current:0,total:0},l={message:"Upgraded cursor click power.",owned:1,cost:{base:100,next:100,rate:2},output:{base:2,next:2,current:1}},i={generator1:{label:"Generator 1",message:"Purchased Generator 1.",owned:0,delay:10,cost:{base:15,next:15,rate:1.15},output:{base:1,next:1,current:0}},generator2:{label:"Generator 2",message:"Purchased Generator 2.",owned:0,delay:1,cost:{base:100,next:100,rate:1.15},output:{base:1,next:1,current:0}},generator3:{label:"Generator 3",message:"Purchased Generator 3.",owned:0,delay:1,cost:{base:1100,next:1100,rate:1.15},output:{base:8,next:8,current:0}},generator4:{label:"Generator 4",message:"Purchased Generator 4.",owned:0,delay:1,cost:{base:12e3,next:12e3,rate:1.15},output:{base:47,next:47,current:0}},generator5:{label:"Generator 5",message:"Purchased Generator 5.",owned:0,delay:1,cost:{base:13e4,next:13e4,rate:1.15},output:{base:260,next:260,current:0}},generator6:{label:"Generator 6",message:"Purchased Generator 6.",owned:0,delay:1,cost:{base:14e5,next:14e5,rate:1.15},output:{base:1400,next:1400,current:0}},generator7:{label:"Generator 7",message:"Purchased Generator 7.",owned:0,delay:1,cost:{base:2e7,next:2e7,rate:1.15},output:{base:7800,next:7800,current:0}},generator8:{label:"Generator 8",message:"Purchased Generator 8.",owned:0,delay:1,cost:{base:33e7,next:33e7,rate:1.15},output:{base:44e3,next:44e3,current:0}},generator9:{label:"Generator 9",message:"Purchased Generator 9.",owned:0,delay:1,cost:{base:51e8,next:51e8,rate:1.15},output:{base:26e4,next:26e4,current:0}},generator10:{label:"Generator 10",message:"Purchased Generator 10.",owned:0,delay:1,cost:{base:75e9,next:75e9,rate:1.15},output:{base:16e5,next:16e5,current:0}},generator11:{label:"Generator 11",message:"Purchased Generator 11.",owned:0,delay:1,cost:{base:1e12,next:1e12,rate:1.15},output:{base:1e7,next:1e7,current:0}},generator12:{label:"Generator 12",message:"Purchased Generator 12.",owned:0,delay:1,cost:{base:14e12,next:14e12,rate:1.15},output:{base:65e6,next:65e6,current:0}},generator13:{label:"Generator 13",message:"Purchased Generator 13.",owned:0,delay:1,cost:{base:17e13,next:17e13,rate:1.15},output:{base:43e7,next:43e7,current:0}},generator14:{label:"Generator 14",message:"Purchased Generator 14.",owned:0,delay:1,cost:{base:21e14,next:21e14,rate:1.15},output:{base:29e8,next:29e8,current:0}},generator15:{label:"Generator 15",message:"Purchased Generator 15.",owned:0,delay:1,cost:{base:26e15,next:26e15,rate:1.15},output:{base:21e9,next:21e9,current:0}},generator16:{label:"Generator 16",message:"Purchased Generator 16.",owned:0,delay:1,cost:{base:31e16,next:31e16,rate:1.15},output:{base:15e10,next:15e10,current:0}}},d={1:"The clicking has commenced...",10:"The button has been clicked ten times.",100:"The button has been clicked one hundred times.",1e3:"The button has been clicked one thousand times.",1e4:"The button has been clicked ten thousand times.",1e5:"The button has been clicked one hundred thousand times.",1e6:"The button has been clicked one million times.",1e7:"The button has been clicked ten million times.",1e8:"The button has been clicked one hundred million times.",1e9:"The button has been clicked one billion times.",1e10:"The button has been clicked ten billion times.",1e12:"The button has been clicked one hundred billion times.",1e13:"The button has been clicked one trillion times.",1e14:"The button has been clicked ten trillion times.",1e15:"The button has been clicked one hundred trillion times.",1e16:"The button has been clicked one quadrillion times.",1e17:"The button has been clicked ten quadrillion times.",1e18:"The button has been clicked one hundred quadrillion times.",1e19:"The button has been clicked one quitillion times.",1e20:"The button has been clicked ten quitillion times.",1e21:"The button has been clicked one hundred quitillion times.",1e22:"The button has been clicked one sextillion times."};function b(){o.counter.innerText=u.current.toLocaleString()}function h(){var e=o.cursor,t=l;e.querySelector(".owned").innerText=(t.owned-1).toLocaleString(),e.querySelector(".cost").innerText=t.cost.next.toLocaleString(),e.querySelector(".output-current").innerText="".concat(t.output.current.toLocaleString()," per click"),e.querySelector(".output-next").innerText="".concat(t.output.next.toLocaleString()," per click")}function g(e){var t=i[e],n=c(e);n.querySelector(".owned").innerText=t.owned.toLocaleString(),n.querySelector(".cost").innerText=t.cost.next.toLocaleString(),n.querySelector(".output-current").innerText=s(t.output.current,t.delay),n.querySelector(".output-next").innerText=s(t.output.next,t.delay)}function m(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=u.total;if(t)e=t;else if(d[n])e=d[n],delete d[n];else for(var r in d){n>=r&&(e=d[r],delete d[r]);break}e&&(e=e.toLocaleString())!==o.message.innerText&&(o.message.innerText=e)}function x(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=u;r.current+=e,t||(r.total+=e,m()),b(),o.cursorButton.disabled=r.current<l.cost.next;var a=i;Object.keys(a).forEach((function(e){c(e).querySelector(n).disabled=r.current<a[e].cost.next}))}function p(e){x(-e,!0)}Object.keys(i).forEach((function(e){var t=i[e],r=o.cursor.cloneNode(!0);r.id=e;var a=r.querySelector(n);a.title=t.label,a.innerText=t.label,o.store.appendChild(r)})),b(),h(),Object.keys(i).forEach((function(e){g(e)})),o.button.addEventListener(t,(function(){x(l.output.current)})),o.cursorButton.addEventListener(t,(function(){if(u.current>=l.cost.next){var e=l;p(e.cost.next),function(){var e=l,t=e.cost,n=e.output,r=++e.owned;t.next=a(t.base,t.rate,r-1),n.current=n.next,n.next=Math.round(n.base*r),h()}(),m(e.message)}})),Object.keys(i).forEach((function(e){var r=i[e];c(e).querySelector(n).addEventListener(t,(function(){u.current>=r.cost.next&&(p(r.cost.next),function(e){var t=i[e],n=t.cost,r=t.output,o=++t.owned;n.next=a(n.base,n.rate,o),r.current=r.next,r.next=Math.round(r.base*(o+1)),g(e)}(e),r.interval?r.interval.callback=function(){x(r.output.current)}:(r.interval={callback:function(){x(r.output.current)}},setInterval(r.interval.callback,1e3*r.delay)),r.message&&m(r.message))}))}))}();
//# sourceMappingURL=index.91443691.js.map
