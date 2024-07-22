function calcularNota(){
    let nota1 = parseFloat(document.getElementById('txtNota1').value);
    let nota2 = parseFloat(document.getElementById('txtNota2').value);
    let nota3 = parseFloat(document.getElementById('txtNota3').value);

    let notaCalculada1 = calcularNota1(nota1);
    let notaCalculada2 = calcularNota2(nota2);
    let notaCalculada3 = calcularNota3(nota3);

    document.getElementById('nota-1').innerHTML = '<h5><strong>Nota 1: ' + notaCalculada1.toFixed(2) + '</strong></h5>';
    document.getElementById('nota-2').innerHTML = '<h5><strong>Nota 2: ' + notaCalculada2.toFixed(2) + '</strong></h5>';
    document.getElementById('nota-3').innerHTML = '<h5><strong>Nota 3: ' + notaCalculada3.toFixed(2) + '</strong></h5>';

    let notaFinal = notaCalculada1 + notaCalculada2 + notaCalculada3;
    document.getElementById('total').innerHTML = '<h5><strong>Nota final: ' + notaFinal.toFixed(2) + '</strong></h5>';

    if(notaFinal>4.5){
        document.getElementById('comprobacion').innerHTML = '<h5 style="color:green;"><strong>Nota superior</strong></h5>'
    }else if(notaFinal>3.5){
        document.getElementById('comprobacion').innerHTML = '<h5 style="color:gray;"><strong>Nota buena</strong></h5>'
    }else if(notaFinal>=3.0){
        document.getElementById('comprobacion').innerHTML = '<h5 style="color:yellow;"><strong>Nota media</strong></h5>'
    }else{
        document.getElementById('comprobacion').innerHTML = '<h5 style="color:red;"><strong>Nota mala</strong></h5>'
    }
    return false
}

function calcularNota1(nota1){
    let resultado = nota1 * 0.2;
    return resultado;
}

function calcularNota2(nota2){
    let resultado = nota2 * 0.35;
    return resultado;
}

function calcularNota3(nota3){
    let resultado = nota3 * 0.45;
    return resultado;
}
