
 function contar1al5(){
    let numero1= parseInt(document.getElementById('txtNum1').value);
    let numero2= parseInt(document.getElementById('txtNum2').value);
    let iterar='';

    while(numero1<=numero2){
      iterar += numero1;
      numero1 ++
    }
    document.getElementById('mostrar').innerHTML = iterar;
 }