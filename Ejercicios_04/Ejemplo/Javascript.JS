function identificarMayorEdad() 
    { 
    let resultado = "";
    let edad = prompt("Por favor ingrese su edad: ");
    
    if(edad >= 18) {
        console.log("prueba");
       resultado = `es mayor de edad - tiene : <h2>${edad}</h2>`
    } else {
        resultado = `Es menor de edad - tiene : <h2>${edad}</2>`
        }
        document.getElementById('lista').innerHTML = resultado;
}