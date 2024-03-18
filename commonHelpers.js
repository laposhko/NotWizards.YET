import{S as m,N as w,P as L,a as p,A as S,b as u}from"./assets/vendor-d3622fc6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const q=document.querySelector(".header-btn"),c=document.querySelector(".backdrop");function E(){c.classList.remove("backdrop--hide"),c.classList.add("backdrop--show")}q.addEventListener("click",E);const A=document.querySelector(".mobmenu__close");A.addEventListener("click",h);function h(){c.classList.remove("backdrop--show"),c.classList.add("backdrop--hide")}const x=document.querySelector(".menu-btn"),k=document.querySelector(".header-menu");function f(){k.classList.toggle("visually-hidden")}x.addEventListener("click",f);const v=Array.from(document.querySelectorAll(".header-menu-link"));v.push(document.querySelector(".header-order"));for(const e of v)e.addEventListener("click",s=>{s.preventDefault(),document.getElementById(e.getAttribute("href")).scrollIntoView({behavior:"smooth"}),f()});const g=Array.from(document.querySelectorAll(".mobmenu-link"));g.push(document.querySelector(".mobmenu-order"));for(const e of g)e.addEventListener("click",s=>{s.preventDefault(),document.getElementById(e.getAttribute("href")).scrollIntoView({behavior:"smooth"}),h()});const B="https://portfolio-js.b.goit.study/api/reviews",b=document.querySelector(".review-list"),I=document.querySelector(".review-buttons-wrapper");async function O(){return(await p.get(B)).data}O().then(e=>{P(e),new m(".swiper",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,swipeHandler:".reviews-list-item",speed:400,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:18}},navigation:{prevEl:".previous-btn",nextEl:".next-btn"},keyboard:{enabled:!0},mousewheel:{invert:!0}})}).catch(e=>{b.innerHTML=`<li class="error-item">
       <p class="error-title">Oops, something went wrong 😢</p>
       <p class="error-text-describe">Problems with downloading content from the server. Error: ${e.message}</p>
    </li>`,I.classList.add("hide")});function P(e){const s=e.map(({avatar_url:n,author:i,review:t})=>`
        <li class="review-item swiper-slide">
          <img class="review-avatar" src="${n}" alt="author avatar"/>
          <p class="review-author-name">${i}</p>
          <p class="review-author-text">${t}</p>
        </li>`).join("");b.insertAdjacentHTML("beforeend",s)}m.use([w,L]);const V=Array.from(document.querySelectorAll(".accordion-container"));new S(V,{elementClass:"item",triggerClass:"btn-arrow-toggl",panelClass:"item-text",onOpen:function(e){console.log(e.querySelector("svg")),e.querySelector("button").classList.add(".is-rotate")}});const r=document.getElementById("user-email"),M=document.getElementById("user-comments");document.querySelector(".order-button");const y=document.querySelector(".order-form"),a=document.querySelector(".succes"),d=document.querySelector(".error");r.addEventListener("invalid",function(e){e.preventDefault()});r.addEventListener("focus",function(e){e.preventDefault(),r.checkValidity?d.classList.add("is-hidden"):a.classList.add("is-hidden")});r.addEventListener("blur",function(){r.checkValidity()?(d.classList.add("is-hidden"),a.classList.remove("is-hidden"),r.reportValidity()):(d.classList.remove("is-hidden"),a.classList.add("is-hidden"),r.reportValidity())});const $="https://portfolio-js.b.goit.study/api",N=async e=>{e.preventDefault();try{const s={email:r.value,comment:M.value},n=await p.post(`${$}/requests`,s,{headers:{"Content-Type":"application/json"}});console.log(n.data),u.create(`<div class="modal">
            <button class="close-btn" type="button">
              <svg class="close-btn-icon" width="22" height="22">
                <use href="./img/symbol-defs#icon-x.svg"></use>
              </svg> 
            </button>
              <div class modal-message">
                <h3 class="modal-title">${n.data.title}</h3>
                <p class="modal-text">${n.data.message}</p>
              </div>
          </div>`).show()}catch(s){console.log(s),u.create(`<div class="modal">
            <button class="close-btn" type="button">
              <svg class="close-btn-icon" width="22" height="22">
                <use href="./img/symbol-defs#icon-x.svg"></use>
              </svg> 
            </button>
             <div class "modal-message">
               <h3 class="modal-title">Oops...something went wrong</h3>
               <p class="modal-text">${s.response.data.message}</p>
             </div>
          </div>`).show()}finally{y.reset(),a.classList.add("is-hidden")}};y.addEventListener("submit",N);
//# sourceMappingURL=commonHelpers.js.map
