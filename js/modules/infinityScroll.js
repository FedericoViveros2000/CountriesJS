let start=0,options={root:null,rootMargin:"100px 0px",threshold:.3},loadingSqueleton=()=>{for(let b=0;b<8;b++){let a=document.createElement("article");a.classList.add("squeleton__article"),a.innerHTML=`<figure class="squeleton__image">                         
                          </figure>
                          <p class="squeleton__text"></p>
                          <p class="squeleton__text"></p>
                          <p class="squeleton__text"></p>
                          <p class="squeleton__text"></p>
                          <p class="squeleton__text"></p>
                          <p class="squeleton__text"></p>
                          <p class="squeleton__text"></p>`,fragment.appendChild(a)}$containerCountry.appendChild(fragment)},createArticles=a=>{$containerSearch.classList.remove("hide"),a.map(c=>{let{name:a,flags:d,population:e,region:f}=c,b=document.createElement("article");b.innerHTML=`<article class="container__article" id="${a.common}">
                              <figure class="container__image">
                                <img src="${d.svg}" alt="${a.official}" class="img img__load" loading="lazy">
                              </figure>
                              <div class="container__article--text">
                                  <p class="container__article--title"><a href="#/details/${a.official}" id="${a.official}" class="link">${a.official}</a></p>
                                  <p><span class="text-span">Population: </span>${new Intl.NumberFormat().format(e)}</p>
                                  <p><span class="text-span">Region: </span>${f}</p>
                              </div>
                          </article>`,fragment.appendChild(b)}),$containerCountry.appendChild(fragment),document.querySelectorAll(".img__load").forEach(a=>{a.addEventListener("error",()=>{a.src="./img/imgNotFound.png"})})},createArticlesFiltered=a=>{a.length>0?createArticles(a):$containerCountry.innerHTML=`
                           <div class="notFound">
                               <img src="./img/no-results.png" class="notFound__img"/>
                               <h1>No results found</>
                           </div>`},createObserver=a=>{let b=document.querySelectorAll(".container__article")[document.querySelectorAll(".container__article").length-1];""==$inputSearch.value&&a.observe(b)};export{start,options,createArticles,createObserver,loadingSqueleton,createArticlesFiltered}