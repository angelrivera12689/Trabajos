
function promedio(){
    let num1= parseFloat(document.getElementById('txtNum1').value)
    let num2= parseFloat(document.getElementById('txtNum2').value)
    let num3= parseFloat(document.getElementById('txtNum3').value)
    let  promedio;
    promedio = (num1+num2+num3)/3
    document.getElementById('mostrar').innerHTML = '<strong>' + "El promedio de las notas es: "  + '<br>' + promedio + '</strong>';
    return false;
}