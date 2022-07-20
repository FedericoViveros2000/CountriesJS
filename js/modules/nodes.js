//Fragmento para ir insertando
let fragment = document.createDocumentFragment(); 

//Seccion para el tipo de tema de la aplicacion.
const $btnMode = document.getElementById('btn-dark');
let isDark =  document.body;

//Seccion de busqueda y filtros.
const $countryRegion = document.getElementById('countryRegion'); 
const $containerSearch = document.querySelector('.search');
const $inputSearch = document.getElementById('search');

//Loader de carga para el scroll infinito.
const loader = document.getElementById('loader');

//Seccion para la carga de los paises
const $containerCountry = document.getElementById('container-country');



