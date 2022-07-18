let $container = document.querySelector('.container');
let fragment = document.createDocumentFragment();

//Funcion mediante la cual cargamos la vista con los datos del pais seleccionado.
let createViewSelected = (data) => {
    $container.innerHTML = '';
    data.map(info => {
        let $countrySelected = document.createElement('article');
        $countrySelected.classList.add('article');
        $countrySelected.innerHTML = `
            <button class="article__back"><a href="/">Back</a></button>
            <figure class="article__flag">
                <img class="article__img" src="${info.flags.svg}"/>
            </figure>
            <div class="article__data">
                <section class="article__data--one">
                    <h1>${info.name.common}</h1>
                    <p><span class="article__span">Native Name: </span>${info.name.common}</p>
                    <p><span class="article__span">Population: </span>${info.population}</p>
                    <p><span class="article__span">Region: </span>${info.region}</p>
                    <p><span class="article__span">Sub Region: </span>${info.subregion}</p>
                    <p><span class="article__span">Capital: </span>${info.capital[0]}</p>
                </section>
                <section class="article__data--two">
                    <p><span class="article__span">Top level Domain</span></p>
                    <p><span class="article__span">Currencies: </span>${Object.values(info.currencies)[0].name}</p>
                    <p><span class="article__span">Lenguajes </span>${Object.values(info.languages)}</p>
                   
                </section>
            </div>
        `
        fragment.appendChild($countrySelected);

    })

    // ${info.borders != undefined ? `<p class="border">Border Countries: </p>
    //     ${info.borders.map(data => `<button class="article__border"><a href="#/details/${data}">
    //     ${data}
    //     </a></button>`)}` 
    // : ''}

    $container.appendChild(fragment);
};

export {
    createViewSelected
}