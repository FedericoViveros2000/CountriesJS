let fragment = document.createDocumentFragment();
let $containerCountry = document.getElementById('container-country');
let $inputSearch = document.getElementById('search');
let countries = [];
let start = 0;

 //Opciones del Intersection Observer
  let options = {
    root: null,
    rootMargin: "100px 0px",
    threshold: 0.3
  }

  //Funcion para insertar mas paises
  const createArticles = (info) => {
    countries = info;
    console.log(info);
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
        observer.observe(article);
    }else{
      observer.unobserver(article);
    }
  }

  export {
    start,
    fragment,
    options,
    $containerCountry,
    createArticles,
    createObserver
  }