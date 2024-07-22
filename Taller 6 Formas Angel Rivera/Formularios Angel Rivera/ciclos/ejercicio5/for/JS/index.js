
function generarTablas() {
    let tablaInicio = parseInt(document.getElementById('txtTablaInicio').value);
    let tablaFin = parseInt(document.getElementById('txtTablaFin').value);
    let pares = 0;
    let impares = 0;

    let tablaMulti = document.getElementById('tabla-multi');
    tablaMulti.innerHTML = ''; // Limpiar el contenido previo

    for (let i = tablaInicio; i <= tablaFin; i++) {
        let iterar = '';

        let tituloTabla = document.createElement('div');
        tituloTabla.id = 'titulo-tabla';
        tituloTabla.innerHTML = `<h5>Tabla del ${i}</h5>`;

        let numeros = document.createElement('div');
        numeros.id = 'numeros';

        for (let j = 1; j <= 5; j++) {
            let resultado = j * i;
            if (resultado % 2 === 0) {
                iterar += `${j} X ${i} = ${resultado} Buzz<br>`;
                pares++;
            } else {
                iterar += `${j} X ${i} = ${resultado} Bass<br>`;
                impares++;
            }
        }

        numeros.innerHTML = `<p>${iterar}</p>`;

        let tabla = document.createElement('div');
        tabla.className = 'tabla';
        tabla.appendChild(tituloTabla);
        tabla.appendChild(numeros);

        tablaMulti.appendChild(tabla);
    }

    document.getElementById('cantidad-pares').innerHTML = "Pares: " + pares;
    document.getElementById('cantidad-impares').innerHTML = "Impares: " + impares;
}
