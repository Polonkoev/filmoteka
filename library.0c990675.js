function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"bHX8u":"library.0c990675.js","2vuFq":"film_poster_not_found.045a66b9.jpg"}'));const a=document.getElementById("myBtn");a.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?a.style.display="block":a.style.display="none"}));const d=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function l(e){const t=e.flatMap((e=>d.filter((t=>t.id===e)))).map((e=>e.name));if(0===t.length){return t.push("Genre unknown"),t}if(t.length>2){const e=t.splice(0,2);return e.push("Other"),e.join(", ")}return t.join(", ")}var c;c=new URL(i("kyEFX").resolve("2vuFq"),import.meta.url).toString();const s=document.querySelector(".movieList");function u(e){const n=e.map((e=>{const{poster_path:n,title:o,genre_ids:r,release_date:i,id:a}=e,d=JSON.stringify(e),s=new Date(i).getFullYear();return n?`\n            <li class="movieCard" id="${a}" data-movie='${d}'>\n            <img class="movieCard__img" src="https://image.tmdb.org/t/p/w500${n}" alt="${o}" loading="lazy" />\n            <div class="card_wrap">\n            <p class="movieCard__title">${o.toUpperCase()} <br />\n            <span class="movieCard__info">${l(r)} | ${s}</span>\n            </p>\n            </div>\n            </li>`:`\n        <li class="movieCard" id="${a}">\n        <img class ="movieCard__img" src="${t(c)} alt="${o.toUpperCase()}" />\n        <div class="card_wrap">\n        <p class ="movieCard__title">${o.toUpperCase()} <br/>\n        <p class ="movieCard__info"><span>${l(r)} | ${s}</span>\n        </p>\n        </div></li>`})).join("");s.insertAdjacentHTML("beforeend",n)}const m=document.querySelector(".movieList"),y=document.querySelector(".overlay"),p=document.querySelector(".modal-close"),f=document.querySelector(".overlay-bg"),v=document.querySelector(".cinema-card img"),g=document.querySelector(".card-title"),S=document.querySelector("#modal-vote"),h=document.querySelector("#modal-votes"),b=document.querySelector("#modal-popularity"),w=document.querySelector("#modal-original"),q=document.querySelector("#modal-genre"),_=document.querySelector("#modal-content"),k=document.querySelector(".card-block"),L=document.querySelector("#addToWatchedBtn"),O=document.querySelector(".card-btn-delete"),T=document.querySelector("#addToQueuedBtn"),E=document.querySelector(".card-btn-delete-queued");function N(){y.classList.add("is-hidden")}m.addEventListener("click",(function(e){const t=e.target.closest(".movieCard");if(t){y.classList.remove("is-hidden"),window.addEventListener("keydown",(function e(t){27===t.keyCode&&(N(),this.removeEventListener("keydown",e))}));const e=JSON.parse(t.dataset.movie);_.innerHTML=e.overview,v.src="https://image.tmdb.org/t/p/w500"+e.poster_path,g.innerHTML=e.title,S.innerHTML=e.vote_average,h.innerHTML=e.vote_count,b.innerHTML=e.popularity,w.innerHTML=e.original_title,q.innerHTML=l(e.genre_ids),k.dataset.movie=t.dataset.movie;const n=localStorage.getItem("watched"),o=localStorage.getItem("queued"),r=JSON.parse(n),i=JSON.parse(o);if(r){r.find((t=>t.id==e.id))?(L.style.display="none",O.style.display="block"):(L.style.display="block",O.style.display="none")}if(i){i.find((t=>t.id==e.id))?(T.style.display="none",E.style.display="block"):(T.style.display="block",E.style.display="none")}}})),p.addEventListener("click",N),f.addEventListener("click",N);const C=document.querySelector("#addToWatchedBtn"),H=document.querySelector(".card-btn-delete"),J=document.querySelector(".watched-list");function M(e){const t=e.target.closest(".card-block").dataset.movie,n=localStorage.getItem("watched"),o=JSON.parse(n);let r;if(C.style.display="none",H.style.display="block",n){if(o.find((e=>e.id==JSON.parse(t).id)))return;Array.isArray(o)&&(r=o,r.push(JSON.parse(t)),localStorage.setItem("watched",JSON.stringify(r)))}else{r=[JSON.parse(t)],localStorage.setItem("watched",JSON.stringify(r))}if(J){const e=localStorage.getItem("watched"),t=JSON.parse(e);J.innerHTML="",u(t);document.querySelector(".no-movie").style.display="none"}}function $(e){const t=e.target.closest(".card-block").dataset.movie,n=localStorage.getItem("watched"),o=JSON.parse(n);C.style.display="block",H.style.display="none";const r=o.filter((e=>e.id!=JSON.parse(t).id));if(localStorage.setItem("watched",JSON.stringify(r)),J){const e=localStorage.getItem("watched"),t=JSON.parse(e);if(J.innerHTML="",u(t),0===t.length){document.querySelector(".no-movie").style.display="block"}}}C.addEventListener("click",M),H.addEventListener("click",$);document.querySelector(".watched-list");const F=document.querySelector("#addToWatchedBtn"),I=document.querySelector(".card-btn-delete"),j=document.querySelector(".no-movie"),A=localStorage.getItem("watched"),x=JSON.parse(A);x&&0!==x.length?(u(x),j.style.display="none"):j.style.display="block",F.addEventListener("click",M),I.addEventListener("click",$);
//# sourceMappingURL=library.0c990675.js.map
