
 function contar1al5For(){
    let numero1= parseInt(document.getElementById('txtNum1').value);
    let numero2= parseInt(document.getElementById('txtNum2').value);
    let iterar='';

    for(let i=numero1; i<=numero2;i++){
        iterar+=i
    }
    document.getElementById('mostrar').innerHTML = iterar;
 }