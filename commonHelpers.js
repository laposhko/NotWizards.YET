import{S as u,N as p,P as L,a as h,K as S,E,M as q,A as x,b as m}from"./assets/vendor-1a96c6ea.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const A=document.querySelector(".header-btn"),c=document.querySelector(".backdrop");function k(){c.classList.remove("backdrop--hide"),c.classList.add("backdrop--show")}A.addEventListener("click",k);const M=document.querySelector(".mobmenu__close");M.addEventListener("click",f);function f(){c.classList.remove("backdrop--show"),c.classList.add("backdrop--hide")}const P=document.querySelector(".menu-btn"),B=document.querySelector(".header-menu");function b(){B.classList.toggle("visually-hidden")}P.addEventListener("click",b);const v=Array.from(document.querySelectorAll(".header-menu-link"));v.push(document.querySelector(".header-order"));for(const e of v)e.addEventListener("click",s=>{s.preventDefault(),document.getElementById(e.getAttribute("href")).scrollIntoView({behavior:"smooth"}),b()});const w=Array.from(document.querySelectorAll(".mobmenu-link"));w.push(document.querySelector(".mobmenu-order"));for(const e of w)e.addEventListener("click",s=>{s.preventDefault(),document.getElementById(e.getAttribute("href")).scrollIntoView({behavior:"smooth"}),f()});const O="https://portfolio-js.b.goit.study/api/reviews",g=document.querySelector(".review-list"),V=document.querySelector(".review-buttons-wrapper");async function I(){return(await h.get(O)).data}I().then(e=>{C(e),new u(".swiper",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,swipeHandler:".reviews-list-item",speed:400,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:18}},navigation:{prevEl:".previous-btn",nextEl:".next-btn"},keyboard:{enabled:!0},mousewheel:{invert:!0}})}).catch(e=>{g.innerHTML=`<li class="error-item">
       <p class="error-title">Oops, something went wrong 😢</p>
       <p class="error-text-describe">Problems with downloading content from the server. Error: ${e.message}</p>
    </li>`,V.classList.add("hide")});function C(e){const s=e.map(({avatar_url:r,author:i,review:t})=>`
        <li class="review-item swiper-slide">
          <img class="review-avatar" src="${r}" alt="author avatar"/>
          <p class="review-author-name">${i}</p>
          <p class="review-author-text">${t}</p>
        </li>`).join("");g.insertAdjacentHTML("beforeend",s)}u.use([p,L]);new u(".swiper",{modules:[p,S,E,q],direction:"horizontal",slidesPerView:1,spaceBetween:100,speed:800,loop:!1,slidesPerGroup:1,effect:"cube",grabCursor:!0,allowTouchMove:!0,EdgeSwipeDetection:!0,EdgeSwipeThreshold:10,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},navigation:{nextEl:".swiper-button-next-right",prevEl:".swiper-button-prev-left"},hashNavigation:{watchState:!0},mousewheel:{enabled:!0},keyboard:{enabled:!0}});const N=Array.from(document.querySelectorAll(".accordion-container"));new x(N,{elementClass:"item",triggerClass:"btn-arrow-toggl",panelClass:"item-text",onOpen:function(e){console.log(e.querySelector("svg")),e.querySelector("button").classList.add(".is-rotate")}});const n=document.getElementById("user-email"),$=document.getElementById("user-comments");document.querySelector(".order-button");const y=document.querySelector(".order-form"),a=document.querySelector(".succes"),d=document.querySelector(".error");n.addEventListener("invalid",function(e){e.preventDefault()});n.addEventListener("focus",function(e){e.preventDefault(),n.checkValidity?d.classList.add("is-hidden"):a.classList.add("is-hidden")});n.addEventListener("blur",function(){n.checkValidity()?(d.classList.add("is-hidden"),a.classList.remove("is-hidden"),n.reportValidity()):(d.classList.remove("is-hidden"),a.classList.add("is-hidden"),n.reportValidity())});const D="https://portfolio-js.b.goit.study/api",j=async e=>{e.preventDefault();try{const s={email:n.value,comment:$.value},r=await h.post(`${D}/requests`,s,{headers:{"Content-Type":"application/json"}});console.log(r.data),m.create(`<div class="modal">
            <button class="close-btn" type="button">
              <svg class="close-btn-icon" width="22" height="22">
                <use href="./img/symbol-defs#icon-x.svg"></use>
              </svg> 
            </button>
              <div class modal-message">
                <h3 class="modal-title">${r.data.title}</h3>
                <p class="modal-text">${r.data.message}</p>
              </div>
          </div>`).show()}catch(s){console.log(s),m.create(`<div class="modal">
            <button class="close-btn" type="button">
              <svg class="close-btn-icon" width="22" height="22">
                <use href="./img/symbol-defs#icon-x.svg"></use>
              </svg> 
            </button>
             <div class "modal-message">
               <h3 class="modal-title">Oops...something went wrong</h3>
               <p class="modal-text">${s.response.data.message}</p>
             </div>
          </div>`).show()}finally{y.reset(),a.classList.add("is-hidden")}};y.addEventListener("submit",j);
//# sourceMappingURL=commonHelpers.js.map
