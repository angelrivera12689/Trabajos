
function tabladel5WhileFor() {
    let tablaMulti = parseInt(document.getElementById('txtTabla').value);
    document.getElementById('mostrar-tabla').innerHTML = '<h5>' + "Tabla del: " + tablaMulti + '</h5>';
    let iterar = '';
    
    if(tablaMulti===5){
        for(let i=1; i<=tablaMulti;i++){
            iterar += '5 x ' + i + ' = ' + (5 * i) + '<br>';
        }
        document.getElementById('tabla-multiplicar').innerHTML = iterar;
    }else{
        document.getElementById('tabla-multiplicar').innerHTML = "Error, solo con la del 5";
    }
    return false;
}