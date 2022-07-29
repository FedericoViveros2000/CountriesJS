import {
    options,
    createArticles,
    createObserver, 
    createArticlesFiltered
} from './modules/infinityScroll.js';
import { getCountry, countries } from './modules/requestsCountries.js'
import router from './router/router.js'

document.addEventListener('DOMContentLoaded', e => {
    let start = 0; 
    let end = 10;
    const urlRoot = 'https://restcountries.com/v3.1/';
    let observer = new IntersectionObserver(insertCountries, options);
    let data = [];
  
    router(`${urlRoot}`, observer);

    //Funcion mediante la cual filtramos los paises por region
    $countryRegion.addEventListener('change', () => {
        //Reseteando el inicio y el fin de array de los paises en caso de que se filtren por continente.
        start = 0;
        end = 10;
        $countryRegion.value != 'All' 
        ? getCountry(`${urlRoot}region/${$countryRegion.value}`, observer) 
        : getCountry(`${urlRoot}/lang/spa`, observer) 
    })

    /*
        ?Comprobando si el usuario ya habia activado previamente o no el modo oscuro
    */ 
    localStorage.dark === 'true' ? isDark.classList.add('dark') : isDark.classList.remove('dark');

    $btnMode.addEventListener('click', () => {
        isDark.classList.toggle('dark');
        isDark.classList.contains('dark') ? localStorage.dark = 'true' : localStorage.dark = '';
    })

    //Funcion mediante el cual vamos insertando los paises obtenidos por la API.
    function insertCountries(entries, observer) {
        loader.classList.add('loading');
        entries.forEach(entry => {
            //Si el objeto del DOM enviado es interceptado o entra dentro de el viewport del usuario se acargaran nuevos paises en pantalla
            if (entry.isIntersecting) {
                //Si la cantidad de paises existentes es mayor o igual a la cantidad de paises cargados, se ejecutara el scroll infinito
                if (countries.length >= countries.slice(start += 10, end += 10).length) {
                    data = countries.slice(start += 10, end += 10);
                }
                //Metodo para insertar nuevos paises.
                createArticles(data);
                //Metodo para modificar el observador, mediante el cual detectamos el ultimo pais mostrado y cargamos mas.
                createObserver(observer);
            }
        });
        loader.classList.remove('loading');
    }

    /* 
        ? Evento mediante el cual detectamos los cambios de la vistas a traves de los hashes de la URL
    */
    window.addEventListener('hashchange', () => {
        router(`${urlRoot}`, observer);
    });
    
    /*
        ? Escuchando el evento de Keyup en caso de busqueda a traves del input.
    */
    $inputSearch.addEventListener('keyup', () => {

        //Filtrando los paises de acuerdo al Pais buscado.
        let filteredCountries = countries.filter(data => data.name.official.toLowerCase().split(" ").join('').includes($inputSearch.value.toLowerCase().split(" ").join('')));

        $containerCountry.innerHTML = '';
        
        //Pasando los paises correspondientes al buscado.
        $inputSearch.value != '' ? createArticlesFiltered(filteredCountries) : createArticles(countries.slice(0, 10));

        /*
            TODO Llamando a la funcion que asigna el observador para el scroll infinito, en caso de que se este buscando un pais en especifico, no se asigna el observador
        */
        createObserver(observer);
    })

})

