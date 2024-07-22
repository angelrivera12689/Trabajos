
function  numero1al5PareImpar(){
    let numero1 = parseInt(document.getElementById('txtNum1').value);
    let numero2 = parseInt(document.getElementById('txtNum2').value);
    let iterar = '';
    
    for(let i=numero1;i<=numero2;i++){
        if(i%2===0){
            iterar += '<p style="color:green;">' + i + " Es par" + '</p>' ;
        }else{
            iterar += '<p style="color:red;">' + i + " Es impar" + '</p>' ;
        }
    }
    document.getElementById('mostrar').innerHTML = iterar;
}