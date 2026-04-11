(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const C="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/",M="https://media.themoviedb.org/t/p/w200",h="ea1ff8a5c0729fdfb9abfb86dbfa48d9",p="https://api.themoviedb.org/3",f="movie/popular",w="search/movie",L={2:"최악이예요",4:"별로예요",6:"보통이에요",8:"재미있어요",10:"명작이에요"};async function d(t,e,o=""){const n=o===""?"":`&query=${encodeURIComponent(o)}`;try{const r=await fetch(`${p}/${t}?api_key=${h}${n}&language=ko-KR&region=ko-KR&page=${e}`);if(!r.ok)throw new Error(`HTTP ERROR: ${r.status}`);return await r.json()}catch(r){throw r instanceof TypeError?new TypeError("REQUEST ERROR"):r instanceof Error?r:new Error("UNKNOWN ERROR")}}async function I(t){try{const e=await fetch(`${p}/movie/${t}?api_key=${h}&language=ko-KR&region=ko-KR`);if(!e.ok)throw new Error(`HTTP ERROR: ${e.status}`);return await e.json()}catch(e){throw e instanceof TypeError?new TypeError("REQUEST ERROR"):e instanceof Error?e:new Error("UNKNOWN ERROR")}}const N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAdBJREFUeAHtVv9VwjAQvvr8X5zAbKAjZAPZwG6gG5QNxA1wAnCCsgE6QXCCskG8gzu5hhaaAH38wfdeTC25X999SQpwRSK89y84KhyOnqFvcGABJTKAvoDBcg5c8iC8QQJuIA1C+SeOL35+hj6AlRqu2PH/A24BwUIkUhgoeJ7TnyzLVrBhgjCEc0OJz6h3thcxKvEtGn4TMeYQgdvAyRNOVIHhVzTf8TuCUPzR4IvEaHEU6IcESa355d+Wal5h2753rNGo8N3gGoKLGF1HH/9bNlMOKq50rjIOK6DMlyw8aEnEsh/N5APPhlkiFu5DQ8l+eg4hMUPTVhap/yoJp1V+guBG+a5YawcXutaFccHjCguoqgkmIfir8lNGtRYXj5RxAZHw9V01hhRQ9cqJjbAbnoJBcSbtyCNs5MScwbFQAuosSL+9MSs4BqzgtXohEn57RZt96w5dx1L1T0sQu0cb8qEyPCYB+cqZBYGJ4hIf14O3mAls5cJ5hFQ09Z+3l9Bb+foFVARJpusg7D/TvVDBxn5zaFGgiXrvhI2uOmhLQPZyieM9CGAb1tuADbKRLRx/Fvj6x6aATsfBAbuR30UOKeA2lFxJ7Dkg7ZrAFZeMPwwtGrc1qK87AAAAAElFTkSuQmCC",O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAAUCAYAAACtZULwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUdSURBVHgB7VrhcRsrEP6cyX+rBFyBlQpMKrBeBZYreHYFUip4cgVSKkhSgXgVRKlApAKrAx77AA+3t3CcpHGcmXwzjO5gF5Zd2GU5XTjnlgDsxcXFxj9r/0xl5csDulh5mgOrQ+Qfgsj72vCyOl7n5brAifDdKv+zZ9Ub3/V9ZWzS+RVeEy7g2ZetL/v4rlwfWuCdujYovAFIguEMKOhrPTD2HmdElEHnhdO8z56VL5NKf1NfjFD3B28DS1/usnfrS8dzJGPvvEv56IJLXhQ6uxbqfjdjf8KvAx/71cNaMraKhr6p0GqhrkZfhR+PvIhC36NYXw5+8e0E+o7n8TS20rdEu0G7bNMoW8Ihlt2R548Nez8UxlWQvaxFXS+XQn+qM54rxFgX4jjHhHXWi0Ol/jIeivNbN4y9L4uM70GgmUOAr18LtBPXl2/P+HSjbN99meVKFWh4zN6z9m1usCjzc8PYe9fVy9y1Yfsu8hgE//6UyWcFPU5zxQjtO1TggtFpkhrDINplphQj0JQ8i2bvZmg3urBwWmUjPXzJDX4iaGHMUT8zJSgEvTxgJJKxk/vIXcG/Av208FzjybFG24Ry0G6bRffFDdZTtqfl7pfwGcNYYDz+wYlwwVses2j+xkgkY5OCaFXPszZpl14XnhMsCoi7WgtN5E3uY3ks9HEbf7+x+onrp3Va4DeoIHopxaqtLx8RPB6VD+jLptzpaaW0aWw2bhqb20PF3wPKerdZeYnZFINoB23iO01CyqFfYlzkyfHs5NiV+tNC/VcuXaGPfWyT4tMD49+y9u9Z235Ev0tBtqVAN3cnxGwn62UrjL0R6NTQ3HK8Z6vgOb2Q2/QMtGpyt0uTmsT4x1dkNV6jv3NEHjo1u/5dR5KBFseatWmEG7/kEjVrb3HhSqi79f3dNNCdCklvOhqL2n4geKZlLC8oZSMlJGOT4fYFQTSrmzr54ukHzgeLrmL/NzYtMj+2YTLlBtFCXwbHofUOQeEExDnRgrwT+qVC8TydJ8geFPbMWEMTUsy2CEm/Ye2SAaeQFWFQx9iDWQn8EEhxO8lzy9osz0vfIryMcwT92wFSmid5tq2Ts6Eq0s4mpSxjnNJZe+mQJhnOoo4DzgOD/slZQ/ZCBqeNYxvozrKYSP8IKZVGmAd5LDKupGuFkPpdjbngScZOMYJ3bAQeLdQdYoxXGIfSble8//TgxzHCWeI2unfO1xKvO/1n+ObHWqEB7oQTeeRVrHoVjZ9SSSoL9EMbufgNGpGMnY7vCpkS42Gpd0gT+mlZ3RJN71LEyRcVnNegm5uSMjSjoQVo0IZDQbYVk+0L+jnxX5DnNvP0PxHiq0EZS/Tj9VWSKYahtJG4R6uFRhUzgp+pouVDiOQeOVoOZxZhArmA0+hRbHxPd9JD/VPczpVOfAuBphVGqJsxZV1CvvxId+YcuUwGZVihbu3H5vLfQR47geykWPu88xZzst737Kx95YYxi7TFPDu2L91xUExm1cAzZxOv5qKu7U7cVfhL99rLwti1PLsVOht/ULfvMl0oyG7hWBctYYXxB5pPPM2I73aA7yvG4R5tB7Icj9nzE45AdPHH8H5m4YF0a2sM5MaJgdz4owu7gdxF7h4M6m7owIwh0ab4Q78f4jiUJikUPnEiuOFNJXV6Qj/VSih9htyhq5CX53g+oWtJ8lJ3mWxokS1mM9R+w/hsYeycl77opXB5DXnjpXBhaHz6G1neGOd75YKXpX4umRz4Dz1my31xwGpxAAAAAElFTkSuQmCC",k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAALZJREFUeAGtkQENwzAMBK0hCIMFQiAUwiAUQhm0TDoGgVAIg5Ax6Bhk3vaVflUcRVVfekWK7XPsiJypnLNTj+qUf1rVUR1aigMKLI21Yk9dF3VH9xNBBgswIyEa8WEbyQI8kGDOSi8MpeBXUpGG70jr+f6C84UkV2FccT5L9AX0ScrdPS3SlRI6a9P43oTYLJZ23/UpiPQyvvc1SE/dNq2ApyYIjXSDHe2hHWKA/yByRAQ5BtjrDXDaZj4YxEyHAAAAAElFTkSuQmCC";class x{backgroundContainer;constructor(){this.backgroundContainer=document.querySelector(".background-container")}clearHeader(){this.backgroundContainer.innerHTML="",this.backgroundContainer.style.background="none",this.backgroundContainer.style.height="100px"}render(e){this.backgroundContainer.innerHTML=`
            ${this.renderImage()}
            <div class="top-rated-movie">
                <div class="rate">
                  <img src="${N}" class="star" />
                  <span class="rate-value">${e.vote_average.toFixed(1)}</span>
                </div>
                <div class="title">${e.title}</div>
                <button class="primary detail" data-id="${e.id}">자세히 보기</button>
            </div>
      `,this.backgroundContainer.style.background=`url(${C}${e.backdrop_path}) no-repeat center center / cover`,this.backgroundContainer.style.removeProperty("height")}renderSearch(e=""){this.backgroundContainer.innerHTML=`${this.renderImage(e)}`}renderImage(e=""){return`<div class="overlay">
                      <div class="search-container">
                        <h1 class="logo">
                          <img src="${O}" alt="MovieList" />
                        </h1>
                        <form class="search-form">
                          <input
                            type="search"
                            class="search-input"
                            aria-label="영화 검색"
                            placeholder="검색어를 입력하세요"
                            value="${e}"
                          />
                          <button
                          type="submit"
                          class="btn-submit"
                          aria-label="영화 검색 실행"
                          >
                            <img
                            src="${k}"
                            alt=""
                            aria-hidden="true"
                            class="img-search"
                            />
                          </button>
                        </form>
                      </div>
                    </div>`}}class U{element;constructor(){this.element=document.querySelector(".main-title")}render(e){this.element.textContent=e}}const B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAACcXioiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ4SURBVHgB7VlNctMwFP7UwrRl0/YGzgloNwyURd0TQE5AeoK2J2hyAuAEaU9QOEHMgvCzSW9QcwLChqbDNOI9RVEk106sWGZY5JvR+FlRJD29fxlYYYX/F/I79uQXxKgRAjWANh3Ro0ct0l0ptSPxQj2DYg31oIvZ5qHpLmpAcAno07+ZdWBIq+zoN5ZCgoCoQwLnhhK4oBUS8y7xGoFRhwT49CP9eqSfPb3aEBtoiH16BkJQCdDmW7AMl9VFq0w6GUCqdKvGBENoFXpj0R2LvjSUwCsERDAGtPHGVldiqBHeWf0xxwcEQkgJOMZr+3xxpHQ+Mb//CWfMIRmIDSUtlZlhplLrOJED41orIQgDecabHaP6pPY+E2OOEQChJFBkvC4E3lv0CQIgNw4o8Y6UiCNicQdjanxqQrVtQ0s9xk0bGkU5j+zR+E38tFa/1pF6aD1/GXrqfteJfkySzYkfImfjV8CS4mXjfY7jeUNkn+YXSxvxBR3Amc3II+fnEd4CS+tmQlH2bOGoO2JwC8umFS3aI8MckiuBPol3lnilqs3EyfjxQORjak/yxTsPStq/tYraKikMvY2pak769/SOhyTl3ek8j+aswb68g5qgGb4uM1Z+oxgzzg9+rheyvQTQll9xFcpfLwNeW9nMGG2r+4M9xmWAQ760BrCejjDQacI/hVqT1nYMXtDeMnYmCv7chp0asC2soymelRN5VcjPpC5ryhtGpnOMjnjpSEIhN5CR7reJNZvTCPckiT5OUTNIbU9oVwPYm5fkOnM2z5hb0OSeBNlGXcatjbVtdaX03qTNF0p+YUWWc8Mw1cXjUJWVchS3VPS7+s5RurnoJqNUSalSgI3MAnw6m9ivyoSO/lmVuaRgd1pm7lLJHOfz4gBNuIlaFKQ8HKlDicw7G+sBWmUPxisbVcYtrVixhqeojtiiO0XGWgT/dFqoED+BpNSiOlJrPu+g6c+AdEJ6gupIDLVEwe91L5S9dSOVqnyvpB3EjUkiN7Hr4xj8JBD+9CcFv7D8/MgvzfZjwBXxp0XDPa7XZ3NJvysXXxuILTopGsSbppRgwOkHvfb4unFBQpgYytMOSuuwo/+ZosKM4aB0R+mALMiZJGW7lLLnRddMMdUo+y3BRwKxtZEHuYlSFY6o9ualrtymEOq3nr6GcSGcOWOUhA8Dh5ht7KMhSTLUOFdy8yVWC4F91eBcdPGYLv2n66iVNSf95xAlsZwE9Gmp1FcqPY+tjQxpVk7C1Ccl3VqYFOKpNR/39UyKbktAlpeAjw1I65Xv/c+RFTWnGVuUbhf4cX3ibbgXYYxUzSlVBeZlBz4M9FCsmym147Kfj9Tt9P2DOiOLUgz4qFCnsJ/Tao9vX1ya0vjGnDnTsl7IL5XoU5Sc3GlGyhNR2Vn106lSK6lu66YBLEVNn2RrBZevqoRdYYUVvPAXJrOCc9SFL6sAAAAASUVORK5CYII=";class Y{movie;constructor(e){this.movie=e}render(){return`<div class="item" data-id=${this.movie.id}>
      <img
         class="thumbnail"
         src="${M}${this.movie.poster_path}"
         alt="${this.movie.title}"
        />
        <div class="item-desc">
          <p class="rate">
            <img src="${B}" class="star" />
            <span>${this.movie.vote_average.toFixed(1)}</span>
          </p>
          <strong>${this.movie.title}</strong>
        </div>
      </div>
    `}}class Q{render(){return`<div class="movie-skeleton">
      <div class="movie-skeleton__poster"></div>
      <div class="movie-skeleton__details">
       <div class="movie-skeleton__title"></div>
       <div class="movie-skeleton__info"></div>
      </div>
    </div>
    `}}const T="/javascript-movie-review/assets/Nosearch-9C2OvmM-.png";class V{movieList;movieContainer;constructor(){this.movieList=document.querySelector(".thumbnail-list"),this.movieContainer=document.querySelector(".main-result")}showEmpty(){this.movieContainer.innerHTML=`
      <div class="result-none">
        <img src="${T}" alt="검색 결과 없음" class="result-none-image" />
        <p class="result-none-text">검색 결과가 없습니다.</p>
      </div>
    `}clearList(){this.movieList.innerHTML="",this.movieContainer.innerHTML=""}renderSkeleton(){this.clearList();for(let e=0;e<20;e++){const o=document.createElement("li"),n=new Q;o.innerHTML=n.render(),this.movieList?.append(o)}}renderMovieList(e){e.results.forEach(o=>{const n=document.createElement("li"),r=new Y(o);n.innerHTML=r.render(),this.movieList?.append(n)})}}function j(t){const o=JSON.parse(localStorage.getItem("ratedMovies")||"[]").find(n=>n.id===t);return o?o.rating:null}class G{movieInfo;modalContainer;constructor(e){this.movieInfo=e,this.modalContainer=document.querySelector(".container")}renderModal(){const e=j(this.movieInfo.id),n=[2,4,6,8,10].map(r=>`
      <img
        src="${r<=(e??0)?"./src/images/star_filled.png":"./src/images/star_empty.png"}"
        data-id="${r}"
        class="star"
      />
    `).join("");this.modalContainer.insertAdjacentHTML("beforeend",`
    <div class="modal-background active" id="modalBackground">
      <div class="modal" data-id="${this.movieInfo.id}">
        <button class="close-modal" id="closeModal">
          <img src="./src/images/modal_button_close.png" />
        </button>
        <div class="modal-container">
          <div class="modal-image">
            <img
              src="https://image.tmdb.org/t/p/original/${this.movieInfo.poster_path}"
            />
          </div>
          <div class="modal-description">
            <div class="movie-info">
            <h2>${this.movieInfo.title}</h2>
            <p class="category">
              ${this.movieInfo.release_date.split("-")[0]} · ${this.movieInfo.genres.map(r=>r.name).join(", ")}
            </p>
            <p class="rate">
              <span class="rate-label">평균&nbsp;&nbsp;</span>
              <img src="./src/images/star_filled.png" class="star" /><span
                >${this.movieInfo.vote_average.toFixed(1)}</span
              >
            </p>
            </div>
            <hr />
            <div class="my-rating">
              <span class="detail-label">내 별점</span>
              <div class="rating-container">
                <div class="stars">
                  ${n}
                </div>
                ${e?`<span class="detail-label">${L[e]}</span>
                       <span class="my-rating-value">(${e}/10)</span>`:'<span class="detail-label">별점을 선택하세요</span>'}
              </div>
            </div>
            <hr />
            <p class="detail-content">
              <span class="detail-label">줄거리</span>
              ${this.movieInfo.overview!==""?this.movieInfo.overview:"줄거리가 존재하지 않습니다."}
            </p>
          </div>
        </div>
      </div>
    </div>`)}}const A=new x,F=new U,l=new V;function H(t){A.clearHeader(),A.renderSearch(t)}function X(t){A.clearHeader(),A.render(t)}function y(t){F.render(t)}function E(t){l.clearList(),l.renderMovieList(t)}function R(){l.renderSkeleton()}function P(){l.showEmpty()}function q(t){l.renderMovieList(t)}function K(t){new G(t).renderModal()}function S(t){t.classList.remove("active")}function u(t){return t instanceof TypeError?"요청에 실패했습니다. 잠시 후 다시 시도해주세요.":t instanceof Error?"영화 정보를 불러오지 못했습니다.":"알 수 없는 오류가 발생했습니다."}async function m(t){try{y("지금 인기 있는 영화"),R();const e=await d(f,t);X(e.results[0]),E(e)}catch(e){alert(u(e))}}async function Z(t,e){try{y(`"${e}" 검색 결과`),R();const o=await d(w,t,e);H(e),o.results.length===0?P():E(o)}catch(o){alert(u(o))}}async function D(t,e){try{const o=e===""?await d(f,t):await d(w,t,e);q(o)}catch(o){alert(u(o))}}async function g(t){try{const e=await I(t);K(e)}catch(e){alert(u(e))}}function J(t,e){const o=JSON.parse(localStorage.getItem("ratedMovies")||"[]"),n=o.find(r=>r.id===t);n?n.rating=e:o.push({id:t,rating:e}),localStorage.setItem("ratedMovies",JSON.stringify(o))}let a=1,c="";const v=document.querySelector(".background-container"),z=document.querySelector(".thumbnail-list"),b=document.querySelector(".container");addEventListener("load",async()=>{await m(a)});v.addEventListener("submit",async t=>{if(t.preventDefault(),a=1,c=document.querySelector(".search-input").value.trim(),c===""){await m(a);return}await Z(a,c)});v.addEventListener("click",async t=>{t.target.closest(".logo")&&(a=1,c="",await m(a))});window.addEventListener("scroll",async()=>{window.innerHeight+window.scrollY>=document.body.scrollHeight-1&&(a+=1,await D(a,c))});z.addEventListener("click",async t=>{const o=t.target.closest(".item");if(!o)return;const n=Number(o.dataset.id);n&&await g(n)});b.addEventListener("click",async t=>{const e=t.target,o=e.closest(".modal-background");e.closest(".close-modal")&&S(o)});document.addEventListener("keydown",async t=>{if(t.key!=="Escape")return;const e=document.querySelector(".modal-background.active");e&&e.classList.remove("active")});b.addEventListener("click",async t=>{const e=t.target,o=e.closest(".modal"),n=e.closest(".modal-background");if(!o)return;const r=e.closest(".star");if(!r)return;const s=Number(o.dataset.id),i=Number(r.dataset.id);J(s,i),S(n),await g(s)});v.addEventListener("click",async t=>{const o=t.target.closest(".primary");if(!o)return;const n=Number(o.dataset.id);await g(n)});
