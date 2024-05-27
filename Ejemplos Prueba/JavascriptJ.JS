/* Recibir un arreglo numerico con numeros negativosy positivos. Todos los valores negativos reemplazarlos por 0 */

function NoNegatives(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
};

let array = [-2,5,6,10,-20];
alert(NoNegatives(array));
document.getElementById("lista").innerHTML = `<p>Números del 0 al 100 desde 5 en 5 con While:</p> <br><h2> ${array}</h2>`;
