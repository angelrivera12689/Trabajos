
function porcentaje(){
    let num1= parseInt(document.getElementById('txtNum1').value)
    let num2= parseInt(document.getElementById('txtNum2').value)
    let  resultado;
    resultado= (num1*100)/num2;
    document.getElementById('mostrar').innerHTML = '<strong>' + "el " +num1+ "% " + "de " + num2 + " es " + '<br>' + resultado + '</strong>';
    return false;
}