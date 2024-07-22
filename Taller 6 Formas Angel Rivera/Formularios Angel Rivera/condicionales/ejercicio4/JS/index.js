
function calcularCuadrados(){
    let lado1= parseInt(document.getElementById('txtLado1').value);
    let lado2= parseInt(document.getElementById('txtLado2').value);
    let lado3= parseInt(document.getElementById('txtLado3').value);
    document.getElementById('lado1').innerHTML = lado1 
    document.getElementById('lado2').innerHTML = lado1 
    document.getElementById('lado3').innerHTML = lado2 
    document.getElementById('lado4').innerHTML = lado2 
    document.getElementById('lado5').innerHTML = lado3 
    document.getElementById('lado6').innerHTML = lado3 

    let area1= calcularArea(lado1);
    let area2= calcularArea(lado2);
    let area3= calcularArea(lado3);
    document.getElementById('area-cuadro.-rojo').innerHTML = area1
    document.getElementById('area-cuadro.-verde').innerHTML = area2
    document.getElementById('area-cuadro.-azul').innerHTML = area3
    document.getElementById('titulo').innerHTML = "Resultado:"

    const cuadro1 = document.createElement('img');
    const cuadro2 = document.createElement('img');
    const cuadro3 = document.createElement('img');

    cuadro1.src='/imagenes/cuadrados/rojo.jpeg'
    cuadro2.src='/imagenes/cuadrados/verde.jpeg'
    cuadro3.src='/imagenes/cuadrados/azul.jpeg'

    cuadro1.style.width = '70px';
    cuadro1.style.height = '70px';
   

    cuadro2.style.width = '70px';
    cuadro2.style.height = '70px';

    cuadro3.style.width = '70px';
    cuadro3.style.height = '70px';
   

    const contenedor = document.getElementById('imagen');
    contenedor.innerHTML = ''; 
    
    
    if(area1==area2 && area1==area3){
        document.getElementById('resultado-cuadro').innerHTML = '<strong>' + "Las areas son iguales" + '</strong>' + '<br>';
        contenedor.appendChild(cuadro1);
        contenedor.appendChild(cuadro2);
        contenedor.appendChild(cuadro3);
    }else if(area1>area2 && area1>area3){
        document.getElementById('resultado-cuadro').innerHTML = '<strong style="color:red;">' + "El cuadrado rojo es mayor" + '</strong>' + '<br>';
        cuadro1.style.margin = '0 auto'; 
        contenedor.style.display = 'flex';
        contenedor.style.justifyContent = 'center';
        contenedor.appendChild(cuadro1);
    }else if(area2>area1 && area2>area3){
        document.getElementById('resultado-cuadro').innerHTML = '<strong style="color:green;">' + "El cuadrado verde es mayor" + '</strong>' + '<br>';
        cuadro2.style.margin = '0 auto'; 
        contenedor.style.display = 'flex';
        contenedor.style.justifyContent = 'center';
        contenedor.appendChild(cuadro2);
    }else{
        document.getElementById('resultado-cuadro').innerHTML = '<strong style="color:blue;">' + "El cuadrado azul es mayor" + '</strong>' + '<br>';
        cuadro3.style.margin = '0 auto'; 
        contenedor.style.display = 'flex';
        contenedor.style.justifyContent = 'center';
        contenedor.appendChild(cuadro3);
    }

}

function calcularArea(lado){
    let area=lado*lado
    return area
}