function ParesWhile(){
    let contador = 2;
    let array = [];

    while (contador <= 20){
        array.push(contador);
        contador+=2;
    }
    document.getElementById("lista").innerHTML = `<p>Números del 0 al 100 desde 5 en 5 con While:</p> <br><h2> ${array}</h2>`;
}
