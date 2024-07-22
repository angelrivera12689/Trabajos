
function suma_notas(){
    let num1= parseFloat(document.getElementById('txtNum1').value)
    let num2= parseFloat(document.getElementById('txtNum2').value)
    let num3= parseFloat(document.getElementById('txtNum3').value)
    let  total
    num1=num1*0.3;
    num2=num2*0.3;
    num3=num3*0.4;
    total=num1+num2+num3;
    document.getElementById('mostrar').innerHTML = '<strong>' + "La suma de la nota es "  + '<br>' + total + '</strong>';

}