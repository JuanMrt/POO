function positivoNegativo(){
    let resultado = "";
    let numero = parseInt(prompt("por favor, ingrese un numero"));
    
    if(numero > 0){
       resultado = `El número <h2>${numero}</h2> es positivo`;
    } else if(numero < 0){
       resultado = `El número <h2>${numero}</h2> es negativo`;
    } else if(numero == 0) {
    resultado = `El número <h2>${numero}</h2> es igual a cero`;
    } else {
    resultado = `Ingrese un valor valido`;
    }
    document.getElementById('lista').innerHTML = resultado;
} 