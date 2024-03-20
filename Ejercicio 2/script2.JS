// Ejercicio 1: Declaración de variables


function MiEdad() {
    let Ahora = 2024;
    let FechaNac = 2007;
    let Resultado = Ahora - FechaNac;
    alert(`Mi edad es de: ${Resultado}`);
    
    
    
    }
    
    // Ejercicio 2: Asignación de valores
    
    function AsignarValores() {
    let Var1 = 37;
    let Var2 = Var1;
    alert(`El valor de Var2 es: ${Var2}`);
    
    
    }
    
    // Ejercicio 3: Operaciones matemáticas
    
    function Operaciones() {
    let Num2 = 745;
    let Num1 = 180;
    let Num3 = 45;
    let Suma = Num1 + Num2 + Num3;
    let Resta = Num1 - Num3;
    let Multi = Num2 * Num3;
    let Divi = Num1 / 120;
    
    alert(`El valor de Suma es ${Suma}\nEl valor de la Resta es ${Resta}\nEl valor de la Multi es  ${Multi}\nEl valor de la Division es ${Divi}`);
    
    }
    
    // Ejercicio 4: Manipulación de cadenas
    
    function MiDireccion() {
    let Direccion = "Calle Capricornio, El bosque";
    let NumeroDeCasa = "9926";
    let Mensaje = "Yo vivo en: " + Direccion + " " + NumeroDeCasa;
    let Longitud = Mensaje.length;
    alert(`Mensaje: ${Mensaje} \nLongitud: ${Longitud} \nPrimer Caracter: ${$Mensaje[0]}`);
    
    }
    
    function Suma_indices() {
        let Valor = [1,2,3,4,5,6,7];
        let ultimoValor = Valor[Valor.length -1];
        let penultimoValor = Valor[Valor.length -2];
        let primerValor = Valor[0];
        Suma = ultimoValor + penultimoValor + primerValor
    alert(`La suma de los valores es ${Suma}`);
    
    }
    