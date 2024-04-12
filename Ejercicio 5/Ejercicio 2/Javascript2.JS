function contarWhile2() {
    let contador = 1;
    let total = 0;
    let numeros = "";

    while (contador <= 9) { // Solo necesitas llegar hasta 9 porque no hay "+" después del último número
        total += contador;
        numeros += contador + "+";
        contador++;
    }
    total += contador; // Agregar el último número al total
    numeros += contador; // Agregar el último número a la cadena de números

    document.getElementById("lista").innerHTML = `<p>Números del 1 al 9 sumados:</p><br><h2>${numeros} = ${total}</h2>`;
}
