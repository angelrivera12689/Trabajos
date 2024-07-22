
function tablaDel9(){
    let tablaMulti = parseInt(document.getElementById('txtTabla').value);
    document.getElementById('mostrar-tabla').innerHTML = '<h5>' + "Tabla del: " + tablaMulti + '</h5>';
    let iterar = '';

    if(tablaMulti==9){
        let i = 1;
        while (i <= 5) { 
            let resultado = i*9;
            if(resultado%2==0){
                iterar += '9 X ' + i + ' = ' + resultado + " Es par"+ '<br>';
                document.getElementById('tabla-multiplicar').innerHTML = iterar;
            }else{
                iterar += '9 X ' + i + ' = ' + resultado + " Es impar"+ '<br>';
                document.getElementById('tabla-multiplicar').innerHTML = iterar;
            }
            i++;
        }
    }else{
        document.getElementById('tabla-multiplicar').innerHTML = "Error, solo con la del 9";
    }
    return false
}