import {
    loadingSqueleton, 
    createObserver, 
    createArticles
} from '../modules/infinityScroll.js';
import {createViewSelected} from '../modules/displayCountrySelected.js'
let countries = [];
let articles = []; 
//Funcion general para solicitar todos los paises existentes
const getCountry = async (url, observer) => {
    try {
        loadingSqueleton();
        let contries = await fetch(url);
        countries = await contries.json();
        articles = countries.slice(0, 10);
        //Limpiando el contenido HTML que aparece en la carga inicial, y si es que ya se vieron los detalles de un pais
        $containerCountry.innerHTML = "";
        createArticles(articles);
        createObserver(observer);
    } catch (err) {
        console.warn(err);
    }
}

//Funcion para solicitar los datos del pais seleccionado a la API REST.
const getCountrySelected = async (url) => {
    try {
        loadingSqueleton();
        let response = await fetch(url);
        countries = await response.json();
        $containerCountry.innerHTML = "";
        //Insertando la vista mediante la cual vamos a mostrar los datos a detalle sobre el pais seleccionado
        createViewSelected(countries);
    } catch (err) {
        console.warn(err);
    }
}

export {
    getCountrySelected, 
    getCountry,
    countries,
    articles,
}