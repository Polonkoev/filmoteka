!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequired7c6=a),a.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),a("iE7OH").register(JSON.parse('{"kDwbc":"library-queued.8d9e2162.js","1lSAa":"film_poster_not_found.045a66b9.jpg"}'));var i=document.getElementById("myBtn");i.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?i.style.display="block":i.style.display="none"}));var c=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function l(e){var t=e.flatMap((function(e){return c.filter((function(t){return t.id===e}))})).map((function(e){return e.name}));if(0===t.length)return t.push("Genre unknown"),t;if(t.length>2){var n=t.splice(0,2);return n.push("Other"),n.join(", ")}return t.join(", ")}var d;d=a("aNJCr").getBundleURL("kDwbc")+a("iE7OH").resolve("1lSAa");var u=document.querySelector(".movieList");function s(e){var n=e.map((function(e){var n=e.poster_path,r=e.title,o=e.genre_ids,a=e.release_date,i=e.id,c=JSON.stringify(e),u=new Date(a).getFullYear();return n?'\n            <li class="movieCard" id="'.concat(i,"\" data-movie='").concat(c,'\'>\n            <img class="movieCard__img" src="https://image.tmdb.org/t/p/w500').concat(n,'" alt="').concat(r,'" loading="lazy" />\n            <div class="card_wrap">\n            <p class="movieCard__title">').concat(r.toUpperCase(),' <br />\n            <span class="movieCard__info">').concat(l(o)," | ").concat(u,"</span>\n            </p>\n            </div>\n            </li>"):'\n        <li class="movieCard" id="'.concat(i,'">\n        <img class ="movieCard__img" src="').concat(t(d),' alt="').concat(r.toUpperCase(),'" />\n        <div class="card_wrap">\n        <p class ="movieCard__title">').concat(r.toUpperCase(),' <br/>\n        <p class ="movieCard__info"><span>').concat(l(o)," | ").concat(u,"</span>\n        </p>\n        </div></li>")})).join("");u.insertAdjacentHTML("beforeend",n)}var m=document.querySelector("#addToQueuedBtn"),f=document.querySelector("#removeFromQueuedBtn"),p=document.querySelector(".queued-list");function v(e){var t,n=e.target.closest(".card-block").dataset.movie,r=localStorage.getItem("queued"),o=JSON.parse(r);if(m.style.display="none",f.style.display="block",r){if(o.find((function(e){return e.id==JSON.parse(n).id})))return;Array.isArray(o)&&((t=o).push(JSON.parse(n)),localStorage.setItem("queued",JSON.stringify(t)))}else{t=[JSON.parse(n)],localStorage.setItem("queued",JSON.stringify(t))}if(p){var a=localStorage.getItem("queued"),i=JSON.parse(a);p.innerHTML="",s(i),document.querySelector(".no-movie").style.display="none"}}function y(e){var t=e.target.closest(".card-block").dataset.movie,n=localStorage.getItem("queued"),r=JSON.parse(n);m.style.display="block",f.style.display="none";var o=r.filter((function(e){return e.id!=JSON.parse(t).id}));if(localStorage.setItem("queued",JSON.stringify(o)),p){var a=localStorage.getItem("queued"),i=JSON.parse(a);if(p.innerHTML="",s(i),0===i.length)document.querySelector(".no-movie").style.display="block"}}m.addEventListener("click",v),f.addEventListener("click",y);document.querySelector(".queued-list");var g=document.querySelector("#addToQueuedBtn"),S=document.querySelector("#removeFromQueuedBtn"),b=document.querySelector(".no-movie"),_=localStorage.getItem("queued"),h=JSON.parse(_);h&&0!==h.length?(s(h),b.style.display="none"):b.style.display="block",g.addEventListener("click",v),S.addEventListener("click",y);var q=document.querySelector(".queue"),w=document.querySelector(".watched");q.classList.add("btn-active"),w.classList.remove("btn-active")}();
//# sourceMappingURL=library-queued.8d9e2162.js.map
