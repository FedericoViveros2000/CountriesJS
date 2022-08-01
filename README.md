

# Countries JS

Esta es una *[Single Page Aplication](https://developer.mozilla.org/en-US/docs/Glossary/SPA)* desarrollada completamente con HTML, CSS y JavaScript vanilla, utilizando API's nativas del navegador.

!["Preview de la aplicacion"](./img/desktop-preview.jpg)

## Características.

* Incorpora el sistema de *infinity scroll* para mostrar el contenido de la aplicación, mediante la cual optimizamos la carga de los recursos.
* Incorpora *[lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)* para la carga diferida de imagenes, la cual aporta una mayor fluidez y rápidez a la aplicación.
* Para una mayor sensación de control y amigabilidad con el usuario, incorpora  el sistema de *loading skeleton*, el cual muestra la carga de los datos en la aplicación.
* Posee un sistema de filtrado mediante el nombre o el continente de los paises.
* Posee un sistema de enrutamiento nativo mediante la API nativa *[location](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)*.
* Posee la característica de seleccionar el tema de la aplicación *(modo oscuro / modo claro)*. 

## API REST.
Para esta SPA utilizamos la API Rest de *[REST Countries]("https://restcountries.com/")* en la version 3.1. Con los siguientes endpoints.

Para obtener todos los paises existentes:
```
🔗 https://restcountries.com/v3.1/all
```

Para filtrar los paises por región:

```
🔗 https://restcountries.com/v3.1/region/{region}
```

Para obtener los datos de las fronteras de los paises:

```
🔗 https://restcountries.com/v3.1/alpha/{pais}
```

## API's nativas utilizadas.
Para que el desarrollo de esta *[Single Page Aplication](https://developer.mozilla.org/en-US/docs/Glossary/SPA)* o *Aplicacion de una sola página* sea lo mas pura posible utilizamos las siguientes API's ya nativas de JavaScript.

* *[Location](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)* para el manejo de las rutas dinamicas.

* *[Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)* para el consumo de la API REST *[utilizada](#api-rest)*.

* *[LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)* para la persistencia del tema de la aplicación.

* *[Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)* para el manejo del *Infinity Scroll* o scroll infinito.

## Autor

* José Viveros [github/José](https://github.com/FedericoViveros2000).

## Contacto
Gmail: [josevivers2000@gmail.com](josevivers2000@gmail.com).

