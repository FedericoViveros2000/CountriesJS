import {getCountry, getCountrySelected} from '../modules/requestsCountries.js';

/*
    TODO Enrutador mediante el cual obtenemos los datos de nuestra SPA (Single Page Aplication), de acuerdo al hash que se encuentre en la URL el estado de la aplicacion ira cambiando
*/
const router = (urlRequest = "https://restcountries.com/v3.1/", observer = '') => {
    let ruta = location.hash;
    switch (ruta === '' || ruta !== '') {
        //Si se encuentra en la vista principal.
        case ruta === '': 
            getCountry(`${urlRequest}all`, observer);
        break;

        //Si se encuentra en la vista de detalles.
        case ruta.includes('#/details/'):
            let name = ruta.slice(10);
            getCountrySelected(`${urlRequest}name/${name}`)    
        break;

        //Si se intenta acceder a una vista no existente.
        default:
            console.log("Error 404");
        break;
    }

}

export default router;