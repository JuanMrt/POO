function contador(elemento) {
    let contador = parseInt(elemento.getAttribute('data-clicks') || '0');
    contador++;
    elemento.setAttribute('data-clicks', contador);
    elemento.textContent = 'Click ' + contador;
}
