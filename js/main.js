import {
    $containerCountry,
    options,
    fragment,
    createArticles,
    createObserver
} from './modules/infinityScroll.js';
import {
    getCountrySelected
}from './modules/displayCountrySelected.js'

document.addEventListener('DOMContentLoaded', e => {
    let start = 0;
    let end = 10;
    let loader = document.getElementById('loader');
    let countries = [];
    let urlRoot = 'https://restcountries.com/v3.1/';
    let $inputSearch = document.getElementById('search');
    let observer = new IntersectionObserver(insertCountries, options);
    let articles = [];
    let btnMode = document.getElementById('btn-dark');
    let isDark =  document.body;
    let countryRegion = document.getElementById('countryRegion');

    countryRegion.addEventListener('change', ()=> {
        getCountry(`${urlRoot}region/${countryRegion.value}`)
    })

    //Funcion mediante el cual vamos insertando los paises obtenidos por la API.
    function insertCountries(entries, observer) {
        loader.classList.add('loading');
        entries.forEach(entry => {
            //Si el objeto del DOM enviado es interceptado o entra dentro de el viewport del usuario se acargaran nuevos paises en pantalla
            if (entry.isIntersecting) {
                countries.slice(start += 10, end += 10).forEach(country => {
                    articles.push(country);
                });
                //Metodo para insertar nuevos paises.
                createArticles(articles);
                //Metodo para modificar el observador, mediante el cual detectamos el ultimo pais mostrado y cargamaos mas.
                createObserver(observer);
            }
        });
        loader.classList.remove('loading');
    }

    localStorage.dark == 'true' ? isDark.classList.add('dark') : isDark.classList.remove('dark');

    btnMode.addEventListener('click', () => {
        isDark.classList.toggle('dark');
        console.log(isDark.classList.contains('dark'));
        isDark.classList.contains('dark') ? localStorage.dark = 'true' : localStorage.dark = '';
    })

    //Loading Squeleton para cuando aun no se carguen los paises 
    const loadingSqueleton = () => {
        for (let index = 0; index < 8; index++) {
            let article = document.createElement('article');
            article.classList.add('squeleton__article');
            article.innerHTML = `     <figure class="squeleton__image">                         
                            </figure>
                            <p class="squeleton__text"></p>
                            <p class="squeleton__text"></p>
                            <p class="squeleton__text"></p>
                            <p class="squeleton__text"></p>
                            <p class="squeleton__text"></p>
                            <p class="squeleton__text"></p>
                            <p class="squeleton__text"></p>`
            fragment.appendChild(article);
        }

        $containerCountry.appendChild(fragment);
    }

    //Obteniendo los paises desde la API.
    const getCountry = async (url) => {
        try {
            loadingSqueleton();
            let contries = await fetch(url);
            countries = await contries.json();
            $containerCountry.innerHTML = '';
            articles = countries.slice(start, end);
            createArticles(articles);
            createObserver(observer);
        } catch (err) {
            console.warn(err);
        }
    }

    //Obteniendo todos los paises existentes
    getCountry(`${urlRoot}all`);

    window.addEventListener('hashchange', () => {
        let ruta = location.hash;
        if (ruta.includes('#/details')) {
            let name = ruta.slice(10);
            //Metodo mediante el cual obtenemos el pais seleccionado por el usuario.
            getCountrySelected(`${urlRoot}name/${name}`);
        } else {
            console.log('Cambio');
            getCountry(`${urlRoot}all`);
        }
    });

    /*
        ? Escuchando el evento de Keyup en caso de busqueda a traves del input.
    */
    $inputSearch.addEventListener('keyup', () => {

        //Filtrando los paises de acuerdo al Pais buscado.
        let filteredCountries = countries.filter(data => data.name.official.toLowerCase().includes($inputSearch.value.toLowerCase()));

        $containerCountry.innerHTML = '';

        //Pasando los paises correspondientes al buscado.
        $inputSearch.value != '' ? createArticles(filteredCountries) : createArticles(articles);

        /*
            TODO Llamando a la funcion que asigna el observador para el scroll infinito, en caso de que se este buscando un pais en especifico, no se asigna el observador
        */
        createObserver(observer);
    })

})