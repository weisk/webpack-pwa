webpackJsonp([1],{3:function(n,e,t){"use strict";function o(){document.body.innerHTML=u.a,document.querySelector(".nav-admin").addEventListener("click",()=>{t.i(a.b)("admin")}),document.querySelector(".nav-login").addEventListener("click",()=>{t.i(a.b)("login")}),document.querySelector(".nav-unknown").addEventListener("click",()=>{t.i(a.b)("unknown")});const n=localStorage.random;return n&&(document.querySelector(".content").innerText=`${n} (updating...)`),t.i(i.a)("https://httpbin.org/bytes/10").then(n=>{document.querySelector(".content").innerText=localStorage.random=n}).catch(e=>{n?document.querySelector(".content").innerText=`${n} (Sorry you are offline, this was the last result)`:document.querySelector(".content").innerText="Sorry you are offline."})}function c(){return Promise.resolve()}Object.defineProperty(e,"__esModule",{value:!0});var r=t(9),u=t.n(r),i=t(8),a=t(0);e.open=o,e.close=c},8:function(n,e,t){"use strict";function o(n){return fetch(n).then(n=>n.blob()).then(n=>new Promise((e,t)=>{const o=new FileReader;o.onload=(()=>{e(o.result.split(",")[1])}),o.readAsDataURL(n)}))}e.a=o},9:function(n,e){n.exports="<h1>Dashboard</h1> <p><button class=nav-admin>Go to admin page</button></p> <p><button class=nav-login>Go to login page</button></p> <p><button class=nav-unknown>Go to unknown page</button></p> <p>Here is some random data for you. Fetched from the internet (when you are connected):</p> <p class=content></p>"}});