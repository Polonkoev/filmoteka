!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("9zi2X"),r("9zi2X");var o=r("fl2xF");r("6VMVE");var l=r("9wPPc");r("f2cZf");var d=document.querySelector(".watched-list"),c=document.querySelector("#addToWatchedBtn"),i=document.querySelector(".card-btn-delete"),a=document.querySelector(".no-movie"),u=localStorage.getItem("watched"),f=JSON.parse(u);f&&0!==f.length?((0,o.markupMovies)(f,d),a.style.display="none"):a.style.display="block",c.addEventListener("click",l.clickOnWatchedBtn),i.addEventListener("click",l.clickOnDeleteWatchedBtn)}();
//# sourceMappingURL=library.a4f7ab32.js.map
