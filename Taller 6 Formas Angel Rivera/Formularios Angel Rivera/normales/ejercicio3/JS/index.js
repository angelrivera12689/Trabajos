function calcular(operador) {
    let num1 = parseFloat(document.getElementById('txtNum1').value);
    let num2 = parseFloat(document.getElementById('txtNum2').value);
    let resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = 'Error: División por cero';
            }
            break;
        default:
            resultado = 'Operador no válido';
    }

    document.getElementById('mostrar').innerHTML = '<strong>' + resultado + '</strong>';
}