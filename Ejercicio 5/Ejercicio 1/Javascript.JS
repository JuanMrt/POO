function contarWhile(){
    let contador = 5;
    let array = [];

    while (contador <= 100){
        array.push(contador);
        contador+=5;
    }
    document.getElementById("lista").innerHTML = `<p>Números del 0 al 100 desde 5 en 5 con While:</p> <br><h2> ${array}</h2>`;
}
