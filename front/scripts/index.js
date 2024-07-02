const axios = require('axios');
const { handleClick, resetHandler } = require('./form');

const container = document.getElementById('container');
const featured = document.getElementById('featured');

//Se desestructuran las propiedades de los objetos que llegan desde la función getMovies.
function cardGenerator({title, year, rate, poster}){

    //Se crea un único elemento div en el que se añaden las etiquetas.
    const movie = document.createElement('div');
    movie.classList.add('movie')

    //Dentro del div se crean las siguientes propiedades con sus respectivos valores.
    movie.innerHTML = `
        <img src = ${poster}>
        <div class = superposition></div>
        <div class = complete_info>
            <h3 class = title>${title}</h3>
            <div class = info>
            <p><img src = /assets/home/rating.svg> <span>${rate}</span> /10</p>
            <p class = year>${year}</p>
            </div>
        </div>
    `;

    // <p>Director: ${director}</p>
    // <p>Duración: ${duration}</p>
    // <p>Género: ${genre}</p>

    return movie;
};

function featuredGenerator({title, year, director, duration, rate, poster}){

    //Se crea un único elemento div en el que se añaden las etiquetas.
    const movie = document.createElement('div');
    movie.classList.add('featured_container')

    //Dentro del div se crean las siguientes propiedades con sus respectivos valores.
    movie.innerHTML = `
    <div class = featured_movie>
        <div>
            <img src = ${poster}>
        </div>
        <div>
            <h3 class = title>${title}</h3>
            <div class = featured_info>
                <p class = rate><img src = /assets/home/rating.svg <span>${rate}</span> /10</p>
                <p>${duration}</p>
                <p>${year}</p>
            </div>
            <p>${director}</p>
        </div>
    </div>
    `;

    return movie;
}

const URL = 'https://movloom.onrender.com';

async function getMovies(){
    try {
        const response = await axios.get(URL);
        
        //Se guarda en la variable los datos que contiene la promesa.
        const movies = response.data;

        //Por cada elemento del arreglo se ejecuta cardGenerator y se guarda en la constante.
        const HTMLElements = movies.map(movie => cardGenerator(movie));
    
        //Filtro de movies con un rate superior a 8.5. Extrae 5 movies del array unicamente.
        const featuredMovies = movies.filter(movie => movie.rate >= 9).slice(0, 5);
    
        const HTMLFeatured = featuredMovies.map(movie => featuredGenerator(movie));
    
        //Por cada div con sus etiquetas que contiene 'elementosHTML' se ejecuta un appendChild que renderiza cada div en el DOM. 
        HTMLElements.forEach(movie => {
             container.appendChild(movie);
        })
    
        HTMLFeatured.forEach(movie => {
            featured.appendChild(movie);
        })
        
    } catch (error) {
        console.error('Error Obtaining Movies:', error.message);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname === '/') {
        getMovies();
    }

    const createButton = document.getElementById('createButton');
    const resetButton = document.getElementById('resetButton');

    createButton?.addEventListener('click', handleClick);
    resetButton?.addEventListener('click', resetHandler);
})






// console.log(tempData);
//  //Se desestructuran las propiedades de cada objeto del arreglo.
//  const elementosHTML = tempData.map(({title, year, director, duration, genre, rate, poster}) => {

//      const contenedor = document.getElementById('contenedor')

//      //Se crea una etiqueta div para cada movie.
//      const pos = document.createElement('img')
//      const pelicula = document.createElement('div');
//      const div = document.createElement('div');
//      const titulo = document.createElement('h3')
//      const año = document.createElement('p')
//      const dir = document.createElement('p')
//      const duracion = document.createElement('p')
//      const genero = document.createElement('p')
//      const calificacion = document.createElement('p')

//      const infoCompleta = document.createElement('div');
//      const date = document.createElement('div');

//      pos.src = poster
//      titulo.innerHTML = title
//      año.innerHTML = year
//      dir.innerHTML = director
//      duracion.innerHTML = duration
//      genero.innerHTML = genre
//      calificacion.innerHTML = `<img src = ./assets/rating.svg> <span>${rate}</span>/10`
    
//      contenedor.appendChild(pelicula);
     
//      pelicula.appendChild(pos);
//      pelicula.appendChild(div);
//      div.classList.add('superposicion')
//      pelicula.classList.add('pelicula')
//      infoCompleta.classList.add('infoCompleta')

//      pelicula.appendChild(infoCompleta);
//      infoCompleta.appendChild(titulo);
//      infoCompleta.appendChild(date);
     
//      date.classList.add('info');
//      titulo.classList.add('titulo')
     
//      date.appendChild(calificacion);
//      date.appendChild(año);

//      año.classList.add('año')

    

//     //  pelicula.appendChild(dir);
//     //  pelicula.appendChild(duracion);
//     //  pelicula.appendChild(genero);

//     const destacadas = document.getElementById('destacadas');

//     if
//  })
