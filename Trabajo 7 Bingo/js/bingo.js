document.addEventListener('DOMContentLoaded', function() {
    let tabla = [];
    let print = '';

    // Generar datos para las tablas
    for (let iteracionTabla = 0; iteracionTabla < 8; iteracionTabla++) {
        let numeroTabla = iteracionTabla + 1;
        let multiplo = [];

        // Generar los múltiplos para cada tabla
        for (let iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            let numeroMultiplo = iteracionMultiplo + 1;
            let resultado = numeroTabla * numeroMultiplo;
            multiplo.push(resultado);
        }

        tabla.push(multiplo);
    }

    // Definir configuraciones de colores por columna para cada tarjeta
    let configuraciones = [
        { tarjeta: 1, columna: 0, color: 'white' },    // Tarjeta 1, columna 0 en blanco
        { tarjeta: 2, columna: 0, color: 'blue' },     // Tarjeta 2, columna 0 en azul
        { tarjeta: 3, columna: 1, color: 'green' },    // Tarjeta 3, columna 1 en verde
        { tarjeta: 4, columna: 2, color: 'red' },      // Tarjeta 4, columna 2 en rojo
        { tarjeta: 5, columna: 3, color: 'orange' },   // Tarjeta 5, columna 3 en naranja
        { tarjeta: 6, columna: 4, color: 'pink' },     // Tarjeta 6, columna 4 en rosa
        { tarjeta: 7, columna: 1, color: 'cyan' },     // Tarjeta 7, columna 1 en cyan
        { tarjeta: 8, columna: 2, color: 'magenta' },  // Tarjeta 8, columna 2 en magenta
    ];

    // Función para determinar si un índice pertenece a los campos X de una tarjeta
    function esCampoX(tarjeta, idx) {
        if (tarjeta === 7) {
            // Patrón automático para la tarjeta 7
            return idx % 4 === 0 || idx % 4 === 2;
        } else if (tarjeta === 8) {
            // Patrón automático para la tarjeta 8
            return idx % 6 === 0 || idx % 4 === 0;
           
        }
        return false;
    }

    // Construir HTML para cada tarjeta utilizando las configuraciones
    tabla.forEach((multiplo, index) => {
        let numeroTabla = index + 1;
        let configuracion = configuraciones.find(config => config.tarjeta === numeroTabla);

        print += `
        <div class="container text-center">
            <div class="row row-cols-3" id="pagina">
                <div class="col">
                    <div class="sub-caja">
                        <div class="titulo">
                            <div class="separacion_letra"><h1>B</h1></div>
                            <div class="separacion_letra"><h1>I</h1></div>
                            <div class="separacion_letra"><h1>N</h1></div>
                            <div class="separacion_letra"><h1>G</h1></div>
                            <div class="separacion_letra"><h1>O</h1></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hr"></div>
            <div class="parte_numerica" id="numerico_${index + 1}">`;

        multiplo.forEach((resultado, idx) => {
            // Verificar si el índice actual debe ser coloreado por ser parte de la X
            if (numeroTabla === 7 || numeroTabla === 8) {
                if (esCampoX(numeroTabla, idx)) {
                    print += `<div class="separacion_numero" style="background-color: ${configuracion.color};"><h1>${resultado}</h1></div>`;
                } else {
                    print += `<div class="separacion_numero"><h1>${resultado}</h1></div>`;
                }
            } else {
                if (idx % 5 === configuracion.columna) {
                    print += `<div class="separacion_numero" style="background-color: ${configuracion.color};"><h1>${resultado}</h1></div>`;
                } else {
                    print += `<div class="separacion_numero"><h1>${resultado}</h1></div>`;
                }
            }
        });
        

        print += `
            </div>
        </div>`;
    });

    // Mostrar todas las tarjetas en el elemento con ID 'pagina'
    document.getElementById('pagina').innerHTML = print;
});
