// Ejercicio 1: Declaración de variables
function MiEdad() {
    const Ahora = 2024;
    const FechaNac = 2007;
    const Resultado = Ahora - FechaNac;
    console.log(`Mi edad es de: ${Resultado}`);
}

// Ejercicio 2: Asignación de valores
function AsignarValores() {
    const Var1 = 37;
    const Var2 = Var1;
    console.log(`El valor de Var2 es: ${Var2}`);
}

// Ejercicio 3: Operaciones matemáticas
function Operaciones() {
    const Num2 = 745;
    const Num1 = 180;
    const Num3 = 45;
    const Suma = Num1 + Num2 + Num3;
    const Resta = Num1 - Num3;
    const Multi = Num2 * Num3;
    const Divi = Num1 / 120;

    console.log(`El valor de Suma es ${Suma}\nEl valor de la Resta es ${Resta}\nEl valor de la Multi es ${Multi}\nEl valor de la Division es ${Divi}`);
}

// Ejercicio 4: Manipulación de cadenas
function MiDireccion() {
    const Direccion = "Calle Capricornio, El bosque";
    const NumeroDeCasa = "9926";
    const Mensaje = `Yo vivo en: ${Direccion} ${NumeroDeCasa}`;
    const Longitud = Mensaje.length;
    console.log(`Mensaje: ${Mensaje} \nLongitud: ${Longitud} \nPrimer Caracter: ${Mensaje[0]}`);
}

// Ejercicio 5: Suma de índices
function Suma_indices() {
    const Valor = [1, 2, 3, 4, 5, 6, 7];
    const ultimoValor = Valor[Valor.length - 1];
    const penultimoValor = Valor[Valor.length - 2];
    const primerValor = Valor[0];
    const Suma = ultimoValor + penultimoValor + primerValor;
    console.log(`La suma de los valores es ${Suma}`);
}

// Llamada a las funciones
MiEdad();
AsignarValores();
Operaciones();
MiDireccion();
Suma_indices();
