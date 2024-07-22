
function mayorOmenor(){
    let num1 =parseInt(document.getElementById('txtNum1').value); 
    let num2 =parseInt(document.getElementById('txtNum2').value); 
    
    if(num1>num2){
        document.getElementById('resultado').innerHTML = "<h5 style=color:red;>"+"El número " + num1 + " es mayor que " + num2 +"</h5>"
    }else if(num2>num1){
        document.getElementById('resultado').innerHTML = "<h5 style=color:green;>"+"El número " + num2 + " es mayor que " + num1 +"</h5>"
    }else{
        document.getElementById('resultado').innerHTML ="<h5 style=color:blue;>"+"Los números son iguales" +"</h5>"
    }
    return false
}