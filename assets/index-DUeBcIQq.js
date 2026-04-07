(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const L="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/",C="https://media.themoviedb.org/t/p/w200",M="ea1ff8a5c0729fdfb9abfb86dbfa48d9",b="https://api.themoviedb.org/3",p="movie/popular",g="search/movie";async function A(e,t,n=""){const o=n===""?"":`&query=${encodeURIComponent(n)}`;try{const r=await fetch(`${b}/${e}?api_key=${M}${o}&language=ko-KR&page=${t}`);if(!r.ok)throw new Error(`HTTP ERROR: ${r.status}`);return await r.json()}catch(r){throw r instanceof TypeError?new Error("NETWORK ERROR"):r instanceof Error?r:new Error("UNKNOWN ERROR")}}const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAACcXioiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ4SURBVHgB7VlNctMwFP7UwrRl0/YGzgloNwyURd0TQE5AeoK2J2hyAuAEaU9QOEHMgvCzSW9QcwLChqbDNOI9RVEk106sWGZY5JvR+FlRJD29fxlYYYX/F/I79uQXxKgRAjWANh3Ro0ct0l0ptSPxQj2DYg31oIvZ5qHpLmpAcAno07+ZdWBIq+zoN5ZCgoCoQwLnhhK4oBUS8y7xGoFRhwT49CP9eqSfPb3aEBtoiH16BkJQCdDmW7AMl9VFq0w6GUCqdKvGBENoFXpj0R2LvjSUwCsERDAGtPHGVldiqBHeWf0xxwcEQkgJOMZr+3xxpHQ+Mb//CWfMIRmIDSUtlZlhplLrOJED41orIQgDecabHaP6pPY+E2OOEQChJFBkvC4E3lv0CQIgNw4o8Y6UiCNicQdjanxqQrVtQ0s9xk0bGkU5j+zR+E38tFa/1pF6aD1/GXrqfteJfkySzYkfImfjV8CS4mXjfY7jeUNkn+YXSxvxBR3Amc3II+fnEd4CS+tmQlH2bOGoO2JwC8umFS3aI8MckiuBPol3lnilqs3EyfjxQORjak/yxTsPStq/tYraKikMvY2pak769/SOhyTl3ek8j+aswb68g5qgGb4uM1Z+oxgzzg9+rheyvQTQll9xFcpfLwNeW9nMGG2r+4M9xmWAQ760BrCejjDQacI/hVqT1nYMXtDeMnYmCv7chp0asC2soymelRN5VcjPpC5ryhtGpnOMjnjpSEIhN5CR7reJNZvTCPckiT5OUTNIbU9oVwPYm5fkOnM2z5hb0OSeBNlGXcatjbVtdaX03qTNF0p+YUWWc8Mw1cXjUJWVchS3VPS7+s5RurnoJqNUSalSgI3MAnw6m9ivyoSO/lmVuaRgd1pm7lLJHOfz4gBNuIlaFKQ8HKlDicw7G+sBWmUPxisbVcYtrVixhqeojtiiO0XGWgT/dFqoED+BpNSiOlJrPu+g6c+AdEJ6gupIDLVEwe91L5S9dSOVqnyvpB3EjUkiN7Hr4xj8JBD+9CcFv7D8/MgvzfZjwBXxp0XDPa7XZ3NJvysXXxuILTopGsSbppRgwOkHvfb4unFBQpgYytMOSuuwo/+ZosKM4aB0R+mALMiZJGW7lLLnRddMMdUo+y3BRwKxtZEHuYlSFY6o9ualrtymEOq3nr6GcSGcOWOUhA8Dh5ht7KMhSTLUOFdy8yVWC4F91eBcdPGYLv2n66iVNSf95xAlsZwE9Gmp1FcqPY+tjQxpVk7C1Ccl3VqYFOKpNR/39UyKbktAlpeAjw1I65Xv/c+RFTWnGVuUbhf4cX3ibbgXYYxUzSlVBeZlBz4M9FCsmym147Kfj9Tt9P2DOiOLUgz4qFCnsJ/Tao9vX1ya0vjGnDnTsl7IL5XoU5Sc3GlGyhNR2Vn106lSK6lu66YBLEVNn2RrBZevqoRdYYUVvPAXJrOCc9SFL6sAAAAASUVORK5CYII=",R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAAUCAYAAACtZULwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUdSURBVHgB7VrhcRsrEP6cyX+rBFyBlQpMKrBeBZYreHYFUip4cgVSKkhSgXgVRKlApAKrAx77AA+3t3CcpHGcmXwzjO5gF5Zd2GU5XTjnlgDsxcXFxj9r/0xl5csDulh5mgOrQ+Qfgsj72vCyOl7n5brAifDdKv+zZ9Ub3/V9ZWzS+RVeEy7g2ZetL/v4rlwfWuCdujYovAFIguEMKOhrPTD2HmdElEHnhdO8z56VL5NKf1NfjFD3B28DS1/usnfrS8dzJGPvvEv56IJLXhQ6uxbqfjdjf8KvAx/71cNaMraKhr6p0GqhrkZfhR+PvIhC36NYXw5+8e0E+o7n8TS20rdEu0G7bNMoW8Ihlt2R548Nez8UxlWQvaxFXS+XQn+qM54rxFgX4jjHhHXWi0Ol/jIeivNbN4y9L4uM70GgmUOAr18LtBPXl2/P+HSjbN99meVKFWh4zN6z9m1usCjzc8PYe9fVy9y1Yfsu8hgE//6UyWcFPU5zxQjtO1TggtFpkhrDINplphQj0JQ8i2bvZmg3urBwWmUjPXzJDX4iaGHMUT8zJSgEvTxgJJKxk/vIXcG/Av208FzjybFG24Ry0G6bRffFDdZTtqfl7pfwGcNYYDz+wYlwwVses2j+xkgkY5OCaFXPszZpl14XnhMsCoi7WgtN5E3uY3ks9HEbf7+x+onrp3Va4DeoIHopxaqtLx8RPB6VD+jLptzpaaW0aWw2bhqb20PF3wPKerdZeYnZFINoB23iO01CyqFfYlzkyfHs5NiV+tNC/VcuXaGPfWyT4tMD49+y9u9Z235Ev0tBtqVAN3cnxGwn62UrjL0R6NTQ3HK8Z6vgOb2Q2/QMtGpyt0uTmsT4x1dkNV6jv3NEHjo1u/5dR5KBFseatWmEG7/kEjVrb3HhSqi79f3dNNCdCklvOhqL2n4geKZlLC8oZSMlJGOT4fYFQTSrmzr54ukHzgeLrmL/NzYtMj+2YTLlBtFCXwbHofUOQeEExDnRgrwT+qVC8TydJ8geFPbMWEMTUsy2CEm/Ye2SAaeQFWFQx9iDWQn8EEhxO8lzy9osz0vfIryMcwT92wFSmid5tq2Ts6Eq0s4mpSxjnNJZe+mQJhnOoo4DzgOD/slZQ/ZCBqeNYxvozrKYSP8IKZVGmAd5LDKupGuFkPpdjbngScZOMYJ3bAQeLdQdYoxXGIfSble8//TgxzHCWeI2unfO1xKvO/1n+ObHWqEB7oQTeeRVrHoVjZ9SSSoL9EMbufgNGpGMnY7vCpkS42Gpd0gT+mlZ3RJN71LEyRcVnNegm5uSMjSjoQVo0IZDQbYVk+0L+jnxX5DnNvP0PxHiq0EZS/Tj9VWSKYahtJG4R6uFRhUzgp+pouVDiOQeOVoOZxZhArmA0+hRbHxPd9JD/VPczpVOfAuBphVGqJsxZV1CvvxId+YcuUwGZVihbu3H5vLfQR47geykWPu88xZzst737Kx95YYxi7TFPDu2L91xUExm1cAzZxOv5qKu7U7cVfhL99rLwti1PLsVOht/ULfvMl0oyG7hWBctYYXxB5pPPM2I73aA7yvG4R5tB7Icj9nzE45AdPHH8H5m4YF0a2sM5MaJgdz4owu7gdxF7h4M6m7owIwh0ab4Q78f4jiUJikUPnEiuOFNJXV6Qj/VSih9htyhq5CX53g+oWtJ8lJ3mWxokS1mM9R+w/hsYeycl77opXB5DXnjpXBhaHz6G1neGOd75YKXpX4umRz4Dz1my31xwGpxAAAAAElFTkSuQmCC",x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAALZJREFUeAGtkQENwzAMBK0hCIMFQiAUwiAUQhm0TDoGgVAIg5Ax6Bhk3vaVflUcRVVfekWK7XPsiJypnLNTj+qUf1rVUR1aigMKLI21Yk9dF3VH9xNBBgswIyEa8WEbyQI8kGDOSi8MpeBXUpGG70jr+f6C84UkV2FccT5L9AX0ScrdPS3SlRI6a9P43oTYLJZ23/UpiPQyvvc1SE/dNq2ApyYIjXSDHe2hHWKA/yByRAQ5BtjrDXDaZj4YxEyHAAAAAElFTkSuQmCC";class U{backgroundContainer;constructor(){this.backgroundContainer=document.querySelector(".background-container")}clearHeader(){this.backgroundContainer.innerHTML="",this.backgroundContainer.style.background="none",this.backgroundContainer.style.height="100px"}render(t){this.backgroundContainer.innerHTML=`
            <div class="top-rated-movie">
                <div class="rate">
                  <img src="${f}" class="star" />
                  <span class="rate-value">${t.vote_average.toFixed(1)}</span>
                </div>
                <div class="title">${t.title}</div>
                <button class="primary detail">자세히 보기</button>
            </div>
            ${this.renderImage()}
      `,this.backgroundContainer.style.background=`url(${L}${t.backdrop_path}) no-repeat center center / cover`,this.backgroundContainer.style.removeProperty("height")}renderSearch(t=""){this.backgroundContainer.innerHTML=`${this.renderImage(t)}`}renderImage(t=""){return`<div class="overlay">
                <div class="search-container">
                <h1 class="logo">
                    <img src="${R}" alt="MovieList" />
                </h1>
                <form class="search-form">
                    <input
                    type="search"
                    class="search-input"
                    aria-label="영화 검색"
                    placeholder="검색어를 입력하세요"
                    value="${t}"
                    />
                    <button
                      type="submit"
                      class="btn-submit"
                      aria-label="영화 검색 실행"
                    >
                        <img
                            src="${x}"
                            alt=""
                            aria-hidden="true"
                            class="img-search"
                        />
                     </button>
                 </form>
                </div>
            </div>`}}class Y{element;constructor(){this.element=document.querySelector(".main-title")}render(t){this.element.textContent=t}}class O{movie;constructor(t){this.movie=t}render(){return`<div class="item">
      <img
         class="thumbnail"
         src="${C}${this.movie.poster_path}"
         alt="${this.movie.title}"
        />
        <div class="item-desc">
          <p class="rate">
            <img src="${f}" class="star" />
            <span>${this.movie.vote_average.toFixed(1)}</span>
          </p>
          <strong>${this.movie.title}</strong>
        </div>
      </div>
    `}}class N{render(){return`<div class="movie-skeleton">
      <div class="movie-skeleton__poster"></div>
      <div class="movie-skeleton__details">
       <div class="movie-skeleton__title"></div>
       <div class="movie-skeleton__info"></div>
      </div>
    </div>
    `}}const V="/javascript-movie-review/assets/Nosearch-9C2OvmM-.png";class j{movieList;movieContainer;constructor(){this.movieList=document.querySelector(".thumbnail-list"),this.movieContainer=document.querySelector(".main-result")}showEmpty(){this.movieContainer.innerHTML=`
      <div class="result-none">
        <img src="${V}" alt="검색 결과 없음" class="result-none-image" />
        <p class="result-none-text">검색 결과가 없습니다.</p>
      </div>
    `}clearList(){this.movieList.innerHTML="",this.movieContainer.innerHTML=""}renderSkeleton(){this.clearList();for(let t=0;t<20;t++){const n=document.createElement("li"),o=new N;n.innerHTML=o.render(),this.movieList?.append(n)}}renderMovieList(t){t.results.forEach(n=>{const o=document.createElement("li"),r=new O(n);o.innerHTML=r.render(),this.movieList?.append(o)})}}const d=new U,k=new Y,l=new j;function B(e){d.clearHeader(),d.renderSearch(e)}function Q(e){d.clearHeader(),d.render(e)}function y(e){k.render(e)}function E(e){l.clearList(),l.renderMovieList(e)}function h(e,t,n){e.style.display=t===n?"none":"block"}function S(){l.renderSkeleton()}function T(){l.showEmpty()}function I(e){l.renderMovieList(e)}function m(e){return e instanceof TypeError?"네트워크 연결을 확인해주세요.":e instanceof Error?"영화 정보를 불러오지 못했습니다.":"알 수 없는 오류가 발생했습니다."}async function v(e,t){try{y("지금 인기 있는 영화"),S();const n=await A(p,e);Q(n.results[0]),E(n),h(t,n.total_pages,e)}catch(n){alert(m(n))}}async function G(e,t,n){try{y(`"${t}" 검색 결과`),S();const o=await A(g,e,t);B(t),o.results.length===0?T():E(o),h(n,o.total_pages,e)}catch(o){alert(m(o))}}async function X(e,t,n){try{const o=t===""?await A(p,e):await A(g,e,t);I(o),h(n,o.total_pages,e)}catch(o){alert(m(o))}}let s=1,c="";const a=document.querySelector(".btn-more"),w=document.querySelector(".background-container");addEventListener("load",async()=>{await v(s,a)});w.addEventListener("submit",async e=>{if(e.preventDefault(),s=1,c=document.querySelector(".search-input").value.trim(),c===""){await v(s,a);return}await G(s,c,a)});w.addEventListener("click",async e=>{e.target.closest(".logo")&&(s=1,c="",await v(s,a))});a.addEventListener("click",async()=>{s+=1,await X(s,c,a)});
