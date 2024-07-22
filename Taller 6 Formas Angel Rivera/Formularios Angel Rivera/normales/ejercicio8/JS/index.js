

function calcularSueldo(){
    let diasTrabajados = parseInt(document.getElementById('txtDias').value);
    let valorDia = parseInt(document.getElementById('txtValorDia').value);
    let sueldo = diasTrabajados * valorDia;
    let salud= parseFloat(calcularSalud(sueldo));
    let pension = parseFloat(calcularPension(sueldo));
    let arl =  parseFloat(calcularArl(sueldo));
    let deducible= salud+pension+arl
    let total= sueldo-deducible

    if (isNaN(diasTrabajados) || isNaN(valorDia)) {
        alert('Por favor, ingrese valores numéricos válidos.');
    }

    document.getElementById('mostrar-sueldo').innerHTML = '<strong><h4>Sueldo:</h4></strong>';
    document.getElementById('sueldo-mostrado').innerHTML ='<h5>'+ "$"+ sueldo+'</h5>';
    document.getElementById('mostrar-salud').innerHTML = '<strong><h4>Seguro de salud:</h4></strong>';
    document.getElementById('salud-mostrado').innerHTML ='<h5>'+ "$"+ salud+'</h5>';
    document.getElementById('mostrar-pension').innerHTML = '<strong><h4>Seguro de pensión:</h4></strong>';
    document.getElementById('pension-mostrado').innerHTML ='<h5>'+ "$"+ pension+'</h5>';
    document.getElementById('mostrar-arl').innerHTML = '<strong><h4>Arl:</h4></strong>';
    document.getElementById('arl-mostrado').innerHTML ='<h5>'+ "$"+ arl+'</h5>';
    document.getElementById('mostrar-deducible').innerHTML = '<strong><h4>Deducible:</h4></strong>';
    document.getElementById('deducible-mostrado').innerHTML ='<h5>'+ "$"+ deducible+'</h5>';
    document.getElementById('mostrar-linea').innerHTML = '<strong>____________________________________________</strong>';
    document.getElementById('mostrar-total').innerHTML = '<strong><h4>Total:</h4></strong>';
    document.getElementById('total-mostrado').innerHTML ='<h5>'+ "$"+ total+'</h5>';
    return false;
}

function calcularSalud(sueldo){
    let salud;
    salud=sueldo*0.12
    salud=salud.toFixed(2)
    return (salud);
}

function calcularPension(sueldo){
    let pension;
    pension=sueldo*0.16
    pension=pension.toFixed(2)
    return (pension);
}

function calcularArl(sueldo){
    let arl;
    arl=sueldo*0.052
    arl=arl.toFixed(2)
    return (arl);
}

