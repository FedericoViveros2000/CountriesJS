
let $container = document.querySelector('.container');
let fragment = document.createDocumentFragment();

//Funcion para solicitar los datos del pais seleccionado a la API REST.
const getCountrySelected = async (url) => {
    console.log(url);
    try {
        let response = await fetch(url);
        let data = await response.json();
        createViewSelected(data);
    }catch(err){
        console.warn(err);
    }
}

//Funcion mediante la cual cargamos la vista con los datos del pais seleccionado.
let createViewSelected = (data) => {

    $container.innerHTML = '';
    
    data.map(info => {
        let $countrySelected = document.createElement('article');
        $countrySelected.classList.add('article');
        $countrySelected.innerHTML = `
            <figure class="article__flag">
                <button><a href="/"><- Back</a></button>
                <img src="${info.flags.svg}"/>
            </figure>
            <div class="article__data">
                <section class="article__data--one">
                    <h1>${info.name.common}</h1>
                    <p><span>Native Name: </span>${info.name.common}</p>
                    <p><span>Population: </span>${info.population}</p>
                    <p><span>Region: </span>${info.region}</p>
                    <p><span>Sub Region: </span>${info.subregion}</p>
                    <p><span>Capital: </span>${info.capital[0]}</p>
                </section>
                <section class="article__data--two">
                    <p><span>Top level Domain</span></p>
                    <p><span>Currencies </span>${Object.values(info.currencies)}</p>
                    <p><span>Lenguajes </span>${Object.values(info.languages)}</p>
                    <p>Border Countries:</p>
                </section>
            </div>

        `
        fragment.appendChild($countrySelected);
    })

    $container.appendChild(fragment);

}

export {getCountrySelected}