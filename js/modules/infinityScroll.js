let fragment = document.createDocumentFragment();
let $containerCountry = document.getElementById('container-country');
let $inputSearch = document.getElementById('search');
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
  info.map(data => {
    let article = document.createElement('article');
    article.innerHTML = `<article class="container__article" id="${data.name.common}">
                                    <figure class="container__image">
                                        <img src="${data.flags.svg}" alt="${data.name.official}" class="img" loading="lazy">
                                        </figure>
                                        <input type="hidden" value="${data}">
                                        <div class="container__article--text">
                                            <p class="container__article--title"><a href="#/details/${data.name.official}" id="${data.name.official}" class="link">${data.name.official}</a></p>
                                            <p><span class="text-span">Population: </span>${new Intl.NumberFormat().format(data.population)}</p>
                                            <p><span class="text-span">Region: </span>${data.region}</p>
                                        </div>
                                </article>`;
    fragment.appendChild(article);
  })

  $containerCountry.appendChild(fragment);

}

//Metodo para asignar un nuevo observador a cada nuevo ultimo pais, para cargar nuevos resultados.
const createObserver = (observer) => {
  let article = document.querySelectorAll(".container__article")[document.querySelectorAll(".container__article").length - 1];
  if ($inputSearch.value == "") {
    console.log("Interceptado");
    console.log(observer);
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