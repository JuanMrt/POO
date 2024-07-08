console.log("vinculado correctamente")


function declararVariables() {
    let ahora = 2024;
    let fecha_nac = 2007;
    let resultado = ahora - fecha_nac;
    alert("Mi edad es: " + resultado);
    }
    

    function asignarValores() {
    let var1 = 45;
    let var2 = var1;
    alert("El valor de var2 es: " + var2);
    }
    

    function realizarOperaciones() {
    let num1 = 7;
    let num2 = 16;
    let num3 = 42;
    let suma = num1 + num2 + num3
    let resta = num1 - num3;
    let multi = num2 * num3;
    let divi = num1 / 120;
    
    alert(`la suma es: ${suma}  \n la resta es: ${resta} \n la multi es: ${multi} \n la division es: ${divi} `);
    }
    
    
    function manipularCadenas() {
    let direccion = "tepual";
    let n_casa = "8401";
    let mens = direccion + " " + n_casa;
    let long = mens.length;
    alert(`Direccion: ${mens} \nLongitud: ${long} \nantepenultimo Caracter:${mens[3]}`);
    }
    
    // Ejercicio 5:suma de valores
    // Instrucciones: Crear una función llamada “Suma_indices()”
    // Crear un arreglo  de largo 7 (1,2,3,4,5,6,7)
    // Sumar el ultimo valor, con el penúltimo más el 1 valor de las posiciones
    // Mostrar el resultado en el HTML con un Alert
    function Suma_indices() {
    let array = [1, 2, 3, 4, 5, 6, 7];
    let long2 = array[array.length -1]
    let long3 = array[array.length -2]
    let long1 = array[0];
    let resul = long1 + long2 + long3
    
    alert("el resultado es :"+ resul )
    }