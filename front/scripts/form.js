const axios = require("axios");

function validateForm({title, director, year, duration, rate, poster, genre}){
    if(!title || !director || !year || !duration || !rate || !genre.length || !poster) return 'Debes llenar todos los campos.';

    if (isNaN(year)) return `"${year}" no es un año válido.`;

    if (isNaN(rate)) return `"${rate}" no es un rating válido.`;

    if (!poster.includes('https://')) return `"${poster}" no es una URL valida.`;

    return null;
}

function resetHandler(){
    document.getElementById('title').value = '';
    document.getElementById('director').value = '';
    document.getElementById('year').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('poster').value = '';
    
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(genero => {
        genero.checked = false;
    })
}

function handleClick(){
    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const year = document.getElementById('year').value;
    const duration = document.getElementById('duration').value;
    const rate = document.getElementById('rate').value;
    const poster = document.getElementById('poster').value;

    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const genre = [];

    checkboxes.forEach(genero => {
        genre.push(genero.value);
    });

    const pelicula = {title, year, duration, director, rate, poster, genre};
    console.log(pelicula);

    const error = validateForm(pelicula);

    if(error) return alert(error);

    const URL = "https://movloom.onrender.com";

    axios.post(URL, pelicula)
    .then(() => {alert('Película creada y ya disponible.')})
    .catch((error) => {alert('Error al crear la película.')})
}


module.exports = {
    handleClick,
    resetHandler
}
