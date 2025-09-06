
let peliculas = "";
let numeroDePeliculas = 0;

alert("Armá tu lista de pelis pendientes");

/*funcion de mostrar las opciones*/
function mostrarOpciones() {
    return prompt(
        "Ingresá la nueva peli que te recomendaron\n 1. Nombre de la película pendiente \n 2. Ver películas pendientes\n 3. Salir"
    );
}

/*funcion para agregar películas a mi lista*/
function agregarPeliculas() {
    let nuevaPelicula = prompt("Ingresa una nueva película");

    if (nuevaPelicula && nuevaPelicula.trim() !== "" && isNaN(nuevaPelicula)) {
        nuevaPelicula++;
        peliculas += `${nuevaPelicula}. ${nuevaPelicula}\n`;

        alert("Película agregada a tu lista");
    } else {
        alert("Ingresa el nombre en un formato válido");
    }
}

/*funciona para mostrar las peliculas agregadas*/
function mostrarPeliculas() {
    if (numeroDePeliculas === 0) {
        alert("No hay peliculas para ver");
    } else {
        alert(`Listado de películas\n${peliculas}`);
    }
}

/*funcoina principal que ejecuta*/
function main() {
    let opcion = mostrarOpciones();

    while (opcion !== "3") {
        switch (opcion) {
            case "1":
                agregarPeliculas();
                break;
            case "2":
                mostrarPeliculas();
                break;
            default:
                console.log("Por favor ingresa una película");
                break;
        }

        opcion=mostrarOpciones();
    }

    alert("Que disfrutes la película!");
}

main()


