!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n),n("9zi2X"),n("9zi2X");var r=n("fl2xF");n("6VMVE");var l=n("f2cZf");n("9wPPc");var d=document.querySelector(".queued-list"),u=document.querySelector("#addToQueuedBtn"),c=document.querySelector("#removeFromQueuedBtn"),i=document.querySelector(".no-movie"),a=localStorage.getItem("queued"),s=JSON.parse(a);console.log(s),s&&0!==s.length?((0,r.markupMovies)(s,d),i.style.display="none"):i.style.display="block",u.addEventListener("click",l.clickOnQueuedBtn),c.addEventListener("click",l.clickOnDeleteQueuedBtn);var f=document.querySelector(".queue"),v=document.querySelector(".watched");f.classList.add("btn-active"),v.classList.remove("btn-active")}();
//# sourceMappingURL=library-queued.129e7655.js.map
