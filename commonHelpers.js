import{A as w,S as a,N as h,K as B,M as V,P as I,a as g,b as f}from"./assets/vendor-68567733.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const P=document.querySelector(".header-btn"),l=document.querySelector(".backdrop");function C(){l.classList.remove("backdrop--hide"),l.classList.add("backdrop--show")}P.addEventListener("click",C);const O=document.querySelector(".mobmenu__close");O.addEventListener("click",y);function y(){l.classList.remove("backdrop--show"),l.classList.add("backdrop--hide")}const M=document.querySelector(".menu-btn"),N=document.querySelector(".header-menu");function L(){N.classList.toggle("visually-hidden")}M.addEventListener("click",L);const S=Array.from(document.querySelectorAll(".header-menu-link"));S.push(document.querySelector(".header-order"));for(const e of S)e.addEventListener("click",t=>{t.preventDefault(),document.getElementById(e.getAttribute("href")).scrollIntoView({behavior:"smooth"}),L()});const E=Array.from(document.querySelectorAll(".mobmenu-link"));E.push(document.querySelector(".mobmenu-order"));for(const e of E)e.addEventListener("click",t=>{t.preventDefault(),document.getElementById(e.getAttribute("href")).scrollIntoView({behavior:"smooth"}),y()});const $=Array.from(document.querySelectorAll(".container-about")),q=$.map(e=>e.querySelector(".accordion-list"));new w(q,{showMultiple:!0,elementClass:"accordion-element",triggerClass:"accordion-title",panelClass:"accordion-description",openOnInit:[0],onOpen:function(e){e.querySelector(".accordion-title").classList.add("active")},onClose:function(e){e.querySelector(".accordion-title").classList.remove("active")}});const T=q[0].querySelector(".accordion-title");T.classList.add("active");new a(".skills-container",{loop:!0,direction:"horizontal",allowSlideNext:!0,setWrapperSize:!0,modules:[h,B,V],simulateTouch:!0,grabCursor:!0,spaceBetween:0,speed:1e3,navigation:{nextEl:".swipe-next-button"},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0},mousewheel:{invert:!0}});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});const D="https://portfolio-js.b.goit.study/api/reviews",x=document.querySelector(".review-list"),j=document.querySelector(".review-buttons-wrapper");async function z(){return(await g.get(D)).data}z().then(e=>{H(e),new a(".reviews-swiper",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,swipeHandler:".reviews-list-item",speed:400,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:18}},navigation:{prevEl:".previous-btn",nextEl:".next-btn"},keyboard:{enabled:!0},mousewheel:{invert:!0}})}).catch(e=>{x.innerHTML=`<li class="error-item">
       <p class="error-title">Oops, something went wrong 😢</p>
       <p class="error-text-describe">Problems with downloading content from the server. Error: ${e.message}</p>
    </li>`,j.classList.add("hide")});function H(e){const t=e.map(({avatar_url:s,author:i,review:o})=>`
        <li class="review-item swiper-slide">
          <img class="review-avatar" src="${s}" alt="author avatar"/>
          <p class="review-author-name">${i}</p>
          <p class="review-author-text">${o}</p>
        </li>`).join("");x.insertAdjacentHTML("beforeend",t)}a.use([h,I]);new a(".projects-swiper",{direction:"horizontal",slidesPerView:1,spaceBetween:100,speed:800,loop:!1,slidesPerGroup:1,effect:"cube",grabCursor:!0,allowTouchMove:!0,EdgeSwipeDetection:!0,EdgeSwipeThreshold:10,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},navigation:{nextEl:".swiper-button-next-right",prevEl:".swiper-button-prev-left"},hashNavigation:{watchState:!0},mousewheel:{enabled:!0},keyboard:{enabled:!0}});a.use([h]);const _=Array.from(document.querySelectorAll(".accordion-container"));new w(_,{elementClass:"item",triggerClass:"item-box",panelClass:"item-text",onOpen:function(e){e.querySelector(".btn-arrow-toggl").classList.add("active")},onClose:function(e){e.querySelector(".btn-arrow-toggl").classList.remove("active")}});const u=document.querySelector(".covers-section");let K=new IntersectionObserver(function(e){for(let t of e)t.isIntersecting?u.classList.add("in-viewport"):u.classList.remove("in-viewport")});K.observe(u);const n=document.getElementById("user-email"),A=document.getElementById("user-comments"),b=document.querySelector(".order-button"),k=document.querySelector(".order-form"),m=document.querySelector(".succes"),p=document.querySelector(".error");let c;n.addEventListener("invalid",function(e){e.preventDefault()});function v(e){n.checkValidity()?(b.disabled=!1,p.classList.add("is-hidden"),m.classList.remove("is-hidden"),n.reportValidity()):(b.disabled=!0,p.classList.remove("is-hidden"),m.classList.add("is-hidden"),n.reportValidity())}n.addEventListener("focus",v);n.addEventListener("input",v);n.addEventListener("blur",v);const U="https://portfolio-js.b.goit.study/api",R=async e=>{e.preventDefault();try{const t={email:n.value,comment:A.value},s=await g.post(`${U}/requests`,t,{headers:{"Content-Type":"application/json"}});console.log(s.data),c=f.create(`<div class="modal">
            <button class="close-btn" id="close-btn" type="button">
              <svg class="close-btn-icon" width="22" height="22">
                <use href="./img/symbol-defs.svg#icon-x"></use>
              </svg> 
            </button>
              <div class modal-message">
                <h3 class="modal-title">${s.data.title}</h3>
                <p class="modal-text">${s.data.message}</p>
              </div>
          </div>`),c.show(),document.getElementById("close-btn").addEventListener("click",()=>{c.close()})}catch(t){console.log(t),c=f.create(`<div class="modal">
            <button class="close-btn" id="close-btn" type="button">
              <svg class="close-btn-icon" width="22" height="22">
                <use href="./img/symbol-defs.svg#icon-x"></use>
              </svg> 
            </button>
             <div class "modal-message">
               <h3 class="modal-title">Oops...something went wrong</h3>
               <p class="modal-text">${t.response.data.message}</p>
             </div>
          </div>`),c.show(),document.getElementById("close-btn").addEventListener("click",()=>{c.close()})}finally{k.reset(),m.classList.add("is-hidden"),p.classList.add("is-hidden")}};k.addEventListener("submit",R);function W(e){const s=e.value;if(s.length>35){const i=s.substring(0,35);e.value=i+"…"}}A.addEventListener("input",function(){W(this)});
//# sourceMappingURL=commonHelpers.js.map
