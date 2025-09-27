
// let peliculas = "";
// let numeroDePeliculas = 0;
// let listaPeliculas = [];

// alert("Armá tu lista de pelis pendientes");

// /*funcion de mostrar las opciones*/
// function mostrarOpciones() {
//     return prompt(
//         "Ingresá la nueva peli que te recomendaron\n 1. Nombre de la película pendiente \n 2. Ver películas pendientes\n 3. Salir"
//     );
// }

// /*funcion para agregar películas a mi lista*/
// function agregarPeliculas() {
//     let nuevaPelicula = prompt("Ingresa una nueva película");

//     if (nuevaPelicula && nuevaPelicula.trim() !== "" && isNaN(nuevaPelicula)) {

//         listaPeliculas.push(nuevaPelicula);
//         peliculas += `${nuevaPelicula}. ${nuevaPelicula}\n`;

//         alert("Película agregada a tu lista");
//     } else {
//         alert("Ingresa el nombre en un formato válido");
//     }
// }

// /*funciona para mostrar las peliculas agregadas*/
// function mostrarPeliculas() {
//     if (numeroDePeliculas === 0) {
//         alert("No hay peliculas para ver");
//     } else {
//         alert(`Listado de películas\n${peliculas}`);
//     }
// }

// /*funcoina principal que ejecuta*/
// function main() {
//     let opcion = mostrarOpciones();

//     while (opcion !== "3") {
//         switch (opcion) {
//             case "1":
//                 agregarPeliculas();
//                 break;
//             case "2":
//                 mostrarPeliculas();
//                 break;
//             default:
//                 console.log("Por favor ingresa una película");
//                 break;
//         }

//         opcion=mostrarOpciones();
//     }

//     alert("Que disfrutes la película!");
// }

// main()


const form = document.getElementById("movieForm");
const container = document.getElementById("movieContainer");
let movieId = 1;
let movies = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("movieName").value;
    const type = document.getElementById("movieType").value;
    const description = document.getElementById("movieDescription").value;


    const movie = {
        id: movieId++,
        name: name,
        type: type,
        description: description,
    };

    movies.push(movie);
    renderMovie(movie);
    form.reset();
});


function renderMovie(movie) {
    const movieDiv = document.createElement("div");
    movieDiv.dataset.id = movie.id;

    movieDiv.innerHTML = `
    <div>
    <p><strong>${movie.name}</strong> - ${movie.type}</p>
    <p>${movie.description}</p>
    <button>Eliminar</button>
    </div>

    `;

    movieDiv.querySelector("button").addEventListener("click", () => {
        deleteMovie(movie.id);
    });
    container.appendChild(movieDiv);
}

function deleteMovie(id) {
    movies = movies.filter((movie) => movie.id != id);

    /*Elimina sólo la película correspondiente */
    const movieDiv = container.querySelector(`[data-id]="${id}"`);
    if(movieDiv) movieDiv.remove();
}

