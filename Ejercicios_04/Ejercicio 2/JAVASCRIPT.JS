
function identificarTemperatura() {
    let temperatura = parseInt(prompt("ingrese la temperatura actual en grados Celsius"));

    if (temperatura < 0) {
        document.getElementById("lista").innerHTML = "Hace frío";
    } else if (temperatura >= 0 && temperatura <= 25) {
        document.getElementById("lista").innerHTML = "La temperatura es agradable";
    } else if (temperatura > 25) { 
        document.getElementById("lista").innerHTML = "Hace calor";
    } else {
        document.getElementById("lista").innerHTML = "Valor incorrecto";
    }
}