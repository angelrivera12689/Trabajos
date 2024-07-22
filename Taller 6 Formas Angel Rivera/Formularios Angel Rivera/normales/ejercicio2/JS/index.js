
function sumar(){
    let num1= parseInt(document.getElementById('txtNum1').value)
    let num2= parseInt(document.getElementById('txtNum2').value)
    let  resultado;
    resultado= num1 + num2;
    document.getElementById('mostrar').innerHTML = '<strong>' + resultado + '</strong>';
    return false;
}