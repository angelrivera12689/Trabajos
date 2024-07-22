function area_Cuadrado() {
    let lado = parseFloat(document.getElementById('txtLado1').value);
    let area_Cuadrado = lado * lado;
    document.getElementById('lado1').innerHTML = '<strong>' + lado + '</strong>';
    document.getElementById('lado2').innerHTML = '<strong>' + lado + '</strong>';
    document.getElementById('area').innerHTML = '<strong>' + area_Cuadrado + '</strong>';
    return false;
}

function area_Triangulo() {
    let altura = parseFloat(document.getElementById('txtAlturaTri').value);
    let base = parseFloat(document.getElementById('txtBaseTri').value);

    let area_Tri = (base*altura) /2;
    document.getElementById('altura-tri').innerHTML = '<strong>' + altura + '</strong>';
    document.getElementById('altura-tri-2').innerHTML = '<strong>' + altura + '</strong>';
    document.getElementById('area-tri').innerHTML = '<strong>' + area_Tri + '</strong>';
    document.getElementById('base-tri').innerHTML = '<strong>' + base + '</strong>';
    return false;
}

function area_Rectangulo() {
    let alturaRect = parseFloat(document.getElementById('txtAlturaRec').value);
    let baseRect = parseFloat(document.getElementById('txtBaseRec').value);

    let area_Rect = baseRect*alturaRect;
    document.getElementById('altura-Rect').innerHTML = '<strong>' + alturaRect + '</strong>';
    document.getElementById('area-Rect').innerHTML = '<strong>' + area_Rect + '</strong>';
    document.getElementById('base-Rect').innerHTML = '<strong>' + baseRect + '</strong>';
    return false;
}



