let salarioMin = 1400000; // salario mínimo
let subTransporte = 162000; // subsidio de transporte

function calcularPago() {
    let dias = parseInt(document.getElementById('txtDias').value);
    let valorDia = parseInt(document.getElementById('txtValorDia').value);
    let salario = dias * valorDia;

    document.getElementById('salario').innerHTML = '<h5><strong>Salario calculado: $' + salario + '</strong></h5>';
    
    // primera condición
    if (salario > 2 * salarioMin) {
        salario += subTransporte;
        document.getElementById('sub-trans').innerHTML = '<h5 style="color: green; font-size: 15px; margin-top: -8px;">Se le aplica subsidio de transporte.</h5><h5 style="margin-top: -8px;">Salario total: $' + salario + '</h5>';
    } else {
        document.getElementById('sub-trans').innerHTML = '<h5 style="color: red; font-size: 15px; margin-top: -8px;">No se le aplica subsidio de transporte.</h5><h5 style="margin-top: -8px;">Salario total: $' + salario + '</h5>';
    }

    let salud = calcularSalud(salario);
    document.getElementById('salud').innerHTML = '<h5 style="margin-top: -8px;">Salud: $' + salud + '</h5>';
    
    let pension = calcularPension(salario);
    document.getElementById('pension').innerHTML = '<h5 style="margin-top: -8px;">Pensión: $' + pension + '</h5>';

    let arl = calcularArl(salario);
    document.getElementById('arl').innerHTML = '<h5 style="margin-top: -8px;">ARL: $' + arl + '</h5>';

    let deducible = salud + pension + arl;
    document.getElementById('deducible').innerHTML = '<h5 style="margin-top: -8px;">Deducible: $' + deducible + '</h5>';

    // segunda condición
    let retencion;
    if (salario > 4 * salarioMin) {
        retencion = salario * 0.04;
        document.getElementById('retencion').innerHTML = '<h5 style="margin-top: -8px;">Retención: $' + retencion + ' <span style="color: red;">(con retención)</span></h5>';
    } else {
        retencion = 0;
        document.getElementById('retencion').innerHTML = '<h5 style="margin-top: -8px;">Retención: $' + retencion + ' <span style="color: green;">(sin retención)</span></h5>';
    }

    let pagoTotal = salario - deducible
    document.getElementById('total').innerHTML = '<h5 style="margin-top: -8px;">Total: $' + pagoTotal + '</h5>';

    return false;
}

function calcularSalud(salario) {
    let salud = salario * 0.12;
    return salud;
}

function calcularPension(salario) {
    let pension = salario * 0.16;
    return pension;
}

function calcularArl(salario) {
    let arl = salario * 0.052;
    return arl;
}

