import{a as l}from"./assets/vendor-34f890c2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const d=document.querySelector(".header-btn"),n=document.querySelector(".backdrop");d.addEventListener("click",()=>{n.classList.remove("backdrop--hide"),n.classList.add("backdrop--show")});const u=document.querySelector(".mobmenu__close");u.addEventListener("click",()=>{n.classList.remove("backdrop--show"),n.classList.add("backdrop--hide")});const m=document.querySelector(".menu-btn"),a=document.querySelector(".header-menu");m.addEventListener("click",()=>{a.classList.toggle("visually-hidden")});const h=document.querySelectorAll(".header-menu-link");for(const t of h)t.addEventListener("click",r=>{r.preventDefault();const s=t.getAttribute("href");document.getElementById(s).scrollIntoView({behavior:"smooth"}),a.classList.toggle("visually-hidden")});const f=document.querySelectorAll(".mobmenu-link");for(const t of f)t.addEventListener("click",r=>{r.preventDefault();const s=t.getAttribute("href");document.getElementById(s).scrollIntoView({behavior:"smooth"}),n.classList.remove("backdrop--show"),n.classList.add("backdrop--hide")});const p="https://portfolio-js.b.goit.study/api/reviews",v=document.querySelector(".review-list");function b(t){const r=t.map(({author:s,avatar_url:c,review:e})=>`<li class="review-item">
        <div class="review-avatar-container">
            <img class="review-avatar" src="${c}" alt="author avatar"/>
        </div>
        <p class="review-author-name">${s}</p>
        <p class="review-author-text">${e}</p>
        </li>`).join("");v.insertAdjacentHTML("beforeend",r)}async function y(){return(await l.get(p)).data}y().then(t=>{b(t)}).catch(t=>console.log(t));
//# sourceMappingURL=commonHelpers.js.map
