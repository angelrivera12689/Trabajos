function tablaDel9For() {
    let tablaMulti = parseInt(document.getElementById('txtTabla').value);
    let mostrarTabla = document.getElementById('mostrar-tabla');
    let tablaMultiplicar = document.getElementById('tabla-multiplicar');
    mostrarTabla.innerHTML = '<h5>' + "Tabla del: " + tablaMulti + '</h5>';
    let iterar = '';

    if (tablaMulti === 9) {
        for (let i = 1; i <= 5; i++) {
            let resultado = i * 9;
            if (resultado % 2 === 0) {
                iterar += '9 x ' + i + ' = ' + resultado + " Es par" + '<br>';
            } else {
                iterar += '9 x ' + i + ' = ' + resultado + " Es impar" + '<br>';
            }
        }
        tablaMultiplicar.innerHTML = iterar;
    } else {
        tablaMultiplicar.innerHTML = "Error, solo con la del 9";
    }
    return false;
}