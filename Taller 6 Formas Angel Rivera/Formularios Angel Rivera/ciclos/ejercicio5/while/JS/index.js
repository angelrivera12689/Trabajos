function generarTablas() {
    let tablaInicio = parseInt(document.getElementById('txtTablaInicio').value);
    let tablaFin = parseInt(document.getElementById('txtTablaFin').value);
    let pares = 0;
    let impares = 0;

    let tablaMulti = document.getElementById('tabla-multi');
    tablaMulti.innerHTML = '';

    while (tablaInicio <= tablaFin) {
        let multiplicador = 1;
        let iterar = '';

        let tituloTabla = document.createElement('div');
        tituloTabla.id = 'titulo-tabla';
        tituloTabla.innerHTML = `<h5>Tabla del ${tablaInicio}</h5>`;

        let numeros = document.createElement('div');
        numeros.id = 'numeros';

        while (multiplicador <= 5) {
            let resultado = multiplicador * tablaInicio;
            if (resultado % 2 === 0) {
                iterar += `${multiplicador} X ${tablaInicio} = ${resultado} Buzz<br>`;
                pares++;
            } else {
                iterar += `${multiplicador} X ${tablaInicio} = ${resultado} Bass<br>`;
                impares++;
            }
            multiplicador++;
        }

        numeros.innerHTML = `<p>${iterar}</p>`;

        let tabla = document.createElement('div');
        tabla.className = 'tabla';
        tabla.appendChild(tituloTabla);
        tabla.appendChild(numeros);

        tablaMulti.appendChild(tabla);

        tablaInicio++;
    }

    document.getElementById('cantidad-pares').innerHTML = "Pares: " + pares;
    document.getElementById('cantidad-impares').innerHTML = "Impares: " + impares;
}
