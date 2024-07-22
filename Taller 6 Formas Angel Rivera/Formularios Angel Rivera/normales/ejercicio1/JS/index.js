
function saludar(){
    let saludar;
    saludar= document.getElementById('txtSaludo').value;
    document.getElementById('mostrar').innerHTML = '<strong>' + saludar + '</strong>';
    return false;
}