function contarParesImpares() {
    let numero1 = parseInt(document.getElementById('txtNum1').value);
    let numero2 = parseInt(document.getElementById('txtNum2').value);
    let iterar = '';

   

    while (numero1 <= numero2) {
        if (numero1 % 2 == 0) {
            iterar += '<p style="color:green;">' + numero1 + " Es par" + '</p>' ;
        } else {
            iterar += '<p style="color:red;">' + numero1 + " Es impar" + '</p>' ;
        }
        numero1++;
    }

    document.getElementById('mostrar').innerHTML = iterar;
}
