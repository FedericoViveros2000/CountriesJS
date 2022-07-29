//Funcion mediante la cual cargamos la vista con los datos del pais seleccionado.

let createViewSelected = (data) => {

    $containerSearch.classList.add('hide');
    let { name, population, region, subregion, currencies, languages, flags, capital, tld, borders } = data[0];
    let $countrySelected = document.createElement('article');
    $countrySelected.classList.add('article');
    $countrySelected.innerHTML = `
            <button class="article__back"><a href="index.html">Home</a></button>
            <figure class="article__flag">
                <img class="article__img" src="${flags.svg}"/>
            </figure>
            <div class="article__data">
            <h1 class="article__title">${name.common}</h1>
                <section class="article__data--one">
                    <p><span class="article__span">Native Name: </span>${name.common}</p>
                    <p><span class="article__span">Population: </span>${new Intl.NumberFormat().format(population)}</p>
                    <p><span class="article__span">Region: </span>${region}</p>
                    <p><span class="article__span">Sub Region: </span>${subregion}</p>
                    <p><span class="article__span">Capital: </span>${capital[0]}</p>
                </section>
                <section class="article__data--two">
                    <p><span class="article__span">Top level Domain: </span>${tld[0]}</p>
                    <p><span class="article__span">Currencies: </span>${Object.values(currencies)[0].name}</p>
                    <p><span class="article__span">Lenguajes: </span>${Object.values(languages)}</p>
                </section>
                ${borders != undefined ? 
                    `<section class="article__data--borders">
                        <p class="article__span">Border Countries: </p>
                        ${borders.map(data => `<button class="article__border"><a href="#/detailsBorder/${data}">${data}</a></button>`)}
                    </section>`
                : ''}
            </div>
        `
    fragment.appendChild($countrySelected);

    $containerCountry.appendChild(fragment);
};

export {
    createViewSelected
}