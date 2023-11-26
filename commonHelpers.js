import{a as p,i as l,S as b}from"./assets/vendor-da648799.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="23308675-3bdf2416796cf281a4ef874ab",L="https://pixabay.com/api/";async function u(s,r=1){const n={key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:40};return(await p.get(`${L}?key=${d}`,{params:n})).data}const m={loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more")};function w(){m.loader.classList.remove("hidden")}function v(){m.loader.classList.add("hidden")}const i={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more"),guard:document.querySelector(".js-guard")};let c=1,f;i.form.addEventListener("submit",M);const S={root:null,rootMargin:"300px",threshold:1},g=new IntersectionObserver(q,S);function $(){f=new b(".gallery__link",{})}async function M(s){s.preventDefault(),w(),i.gallery.innerHTML="",c=1;const{searchQuery:r}=s.currentTarget.elements,n=r.value.trim().toLowerCase();try{const o=await u(n,c);if(o.hits.length<=0){l.show({title:"Warrning",message:"Sorry, there are no images matching your search query. Please try again.",color:"yellow",position:"bottomRight"});return}l.show({title:"Success",message:`Hooray! We found ${o.totalHits} images.`,color:"green",position:"bottomRight"}),i.gallery.innerHTML=h(o.hits),$()}catch(o){l.show({title:"Error",message:`${o.message}`,color:"red",position:"topRight"})}finally{v(),g.observe(i.guard)}}function h(s){return s.map(({webformatURL:r,tags:n,largeImageURL:o,likes:e,views:t,comments:a,downloads:y})=>`<div class="photo-card">
        <a class='gallery__link' href=${o}>
    <img src=${r} alt=${n}  loading="lazy" />
    </a>
    <div class="info">
        <p class="info-item">
            <b>Likes</b>
            ${e}
        </p>
            <p class="info-item">
        <b>Views</b>
        ${t}
        </p>
        <p class="info-item">
            <b>Comments</b>
            ${a}
        </p>
        <p class="info-item">
            <b>Downloads</b>
            ${y}
        </p>
    </div>
    
</div>`).join("")}async function q(s){s.forEach(async r=>{if(r.isIntersecting){c+=1;const n=i.form.searchQuery.value.trim().toLowerCase();try{const o=await u(n,c);o.hits.length<=0&&(l.show({title:"Warrning",message:"No more images to load.",color:"yellow",position:"bottomRight"}),g.unobserve(i.guard)),i.gallery.insertAdjacentHTML("beforeend",h(o.hits)),f.refresh()}catch(o){l.show({title:"Error",message:`${o.message}`,color:"red",position:"bottomRight"})}}})}
//# sourceMappingURL=commonHelpers.js.map
