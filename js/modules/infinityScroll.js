const fragment = document.createDocumentFragment();
const $containerCountry = document.getElementById('container-country');
const $containerSearch = document.querySelector('.search');
const $inputSearch = document.getElementById('search');
let start = 0;

//Opciones del Intersection Observer
let options = {
  root: null,
  rootMargin: "100px 0px",
  threshold: 0.3
}

//Loading Squeleton para cuando aun no se carguen los paises 
const loadingSqueleton = () => {
  for (let index = 0; index < 8; index++) {
    let article = document.createElement('article');
    article.classList.add('squeleton__article');
    article.innerHTML = `<figure class="squeleton__image">                         
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

//Funcion para insertar mas paises
const createArticles = (info) => {
    
  //Si existen articulos relacionados con la palabra buscada
  if (info.length > 0) {
    $containerSearch.classList.remove('hide');
    info.map(data => {
      let { name, flags, population, region } = data;
      let article = document.createElement('article');
      article.innerHTML = `<article class="container__article" id="${name.common}">
                                      <figure class="container__image">
                                          <img src="${flags.svg}" alt="${name.official}" class="img" loading="lazy">
                                          </figure>
                                          <div class="container__article--text">
                                              <p class="container__article--title"><a href="#/details/${name.official}" id="${name.official}" class="link">${name.official}</a></p>
                                              <p><span class="text-span">Population: </span>${new Intl.NumberFormat().format(population)}</p>
                                              <p><span class="text-span">Region: </span>${region}</p>
                                          </div>
                                  </article>`;
      fragment.appendChild(article);
    })
    $containerCountry.appendChild(fragment);

  }else{
    $containerCountry.innerHTML = `
                          <div class="notFound">
                              <img src="./img/no-results.png" class="notFound__img"/>
                              <h1>No se han encontrado resultados</h1>
                          </div>`;
  }

}

//Metodo para asignar un nuevo observador a cada nuevo ultimo pais, para cargar nuevos resultados.
const createObserver = (observer) => {
  let article = document.querySelectorAll(".container__article")[document.querySelectorAll(".container__article").length - 1];
  if ($inputSearch.value == "") {
    observer.observe(article);
  }
}

//Exportando las funciones a utilizar en los demas archivos js.
export {
  start,
  fragment,
  options,
  $containerCountry,
  createArticles,
  createObserver,
  loadingSqueleton
}