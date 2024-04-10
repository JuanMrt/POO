function login(){
    
    let nombreUsuario = prompt("Ingrese nombre usuario: ");
    let contraseña = prompt("Ingrese contraseña: ");
    let result = "";
    const usuario = "Iván";
    const contr = "Walala";

    if (nombreUsuario == usuario && contraseña == contr){
        result = "<h2>¡ Lograste acceder!</h2>";
    }else {
        result = "<h2>No lograste acceder</h2>"
    }
        document.getElementById("lista").innerHTML = result;
}
    