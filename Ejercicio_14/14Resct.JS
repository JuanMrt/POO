function ejemplo(elemento) {
    console.log("elemento clickeado", elemento);
    if(elemento.textContent == 'Activado!'){
        elemento.style.backgroundColor = 'green'; // Cambia el color de fondo del botón
        elemento.textContent = 'Activado!'; // Cambia el texto del botón
    }
    else{
        elemento.style.backgroundColor = 'red'; // Cambia el color de fondo del botón
        elemento.textContent = 'desactivado!'; // Cambia el texto del botón
    }
   }

