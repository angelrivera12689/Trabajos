
function verificacionDeEdad(){
    let edad = parseInt(document.getElementById('txtAño').value);

    if(edad>17){
        document.getElementById('verificacion').innerHTML = '<strong style="color:green;">' +" Eres mayor de edad" + '</strong>';
    }else{
        document.getElementById('verificacion').innerHTML = '<strong style="color:red;">' +" Eres menor de edad" + '</strong>';
    }
}