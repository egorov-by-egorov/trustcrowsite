!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}({9:function(t,e){var n=document.querySelectorAll(".news__blocks"),r=document.querySelector(".pagination__box"),a=document.querySelectorAll(".news__pagination-tab"),o=!0,l=!1,i=void 0;try{for(var u,c=n[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){u.value.style.display="none"}}catch(t){l=!0,i=t}finally{try{o||null==c.return||c.return()}finally{if(l)throw i}}document.getElementById("news__blocks-tab1").style.display="block",r.addEventListener("click",function(t){"news__pagination-tab"===t.target.className?function(t){var e=t.target.dataset.tab,r=!0,o=!1,l=void 0;try{for(var i,u=n[Symbol.iterator]();!(r=(i=u.next()).done);r=!0)i.value.style.display="none"}catch(t){o=!0,l=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw l}}var c=!0,s=!1,d=void 0;try{for(var f,y=a[Symbol.iterator]();!(c=(f=y.next()).done);c=!0)f.value.classList.remove("news__pagination-tab--active")}catch(t){s=!0,d=t}finally{try{c||null==y.return||y.return()}finally{if(s)throw d}}document.getElementById(e).style.display="block","news__pagination-tab"===t.target.className&&t.target.classList.add("news__pagination-tab--active")}(t):"news__pagination-back"===t.target.id||t.target.id})}});