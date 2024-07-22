function tabladel5While() {
    let tablaMulti = parseInt(document.getElementById('txtTabla').value);
    document.getElementById('mostrar-tabla').innerHTML = '<h5>' + "Tabla del: " + tablaMulti + '</h5>';
    let iterar = '';

    if (tablaMulti === 5) {
        let i = 1; 
        while (i <= 5) { 
            iterar += '5 x ' + i + ' = ' + (5 * i) + '<br>';
            i++;
        }
        document.getElementById('tabla-multiplicar').innerHTML = iterar;
    } else {
        document.getElementById('tabla-multiplicar').innerHTML = "Error, solo con la del 5";
    }
    return false;
}
