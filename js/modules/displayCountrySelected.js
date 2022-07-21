let createViewSelected=d=>{$containerSearch.classList.add("hide");let{name:b,population:e,region:f,subregion:g,currencies:h,languages:i,flags:j,capital:k,tld:l,borders:c}=d[0],a=document.createElement("article");a.classList.add("article"),a.innerHTML=`
            <button class="article__back"><a href="index.html">Home</a></button>
            <figure class="article__flag">
                <img class="article__img" src="${j.svg}"/>
            </figure>
            <div class="article__data">
            <h1 class="article__title">${b.common}</h1>
                <section class="article__data--one">
                    <p><span class="article__span">Native Name: </span>${b.common}</p>
                    <p><span class="article__span">Population: </span>${new Intl.NumberFormat().format(e)}</p>
                    <p><span class="article__span">Region: </span>${f}</p>
                    <p><span class="article__span">Sub Region: </span>${g}</p>
                    <p><span class="article__span">Capital: </span>${k[0]}</p>
                </section>
                <section class="article__data--two">
                    <p><span class="article__span">Top level Domain: </span>${l[0]}</p>
                    <p><span class="article__span">Currencies: </span>${Object.values(h)[0].name}</p>
                    <p><span class="article__span">Lenguajes: </span>${Object.values(i)}</p>
                </section>
                ${void 0!=c?`<section class="article__data--borders">
                        <p class="article__span">Border Countries: </p>
                        ${c.map(a=>`<button class="article__border"><a href="#/detailsBorder/${a}">${a}</a></button>`)}
                    </section>`:""}
            </div>
        `,fragment.appendChild(a),$containerCountry.appendChild(fragment)};export{createViewSelected}