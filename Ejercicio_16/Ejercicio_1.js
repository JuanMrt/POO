function clicks(numeros) {
    let clicks = parseInt(numeros.getAttribute('data=clicks') || '0')
    clicks ++;
    numeros.setAttribute('data=clicks', clicks);
    numeros.textContent = 'Click ' + clicks; 
}