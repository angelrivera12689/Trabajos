

function edad() {

    const fechaNacimiento = new Date(document.getElementById('txtFecha').value);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    const verificacion = document.getElementById('verificacion');
    const imagenEdad = document.getElementById('imagen-edad');

   
    verificacion.innerHTML = '';
    imagenEdad.innerHTML = '';

    if (edad >= 18) {
        verificacion.innerHTML = `<p>Tienes ${edad} años. Eres mayor de edad.</p>`;
        const img = document.createElement('img');
        img.src = '/imagenes/menor y mayor de edad/adulto.jpg'; 
        img.alt = 'Mañor de edad';
        img.className = 'img-fluid'; 
        imagenEdad.appendChild(img);
    } else {
        verificacion.innerHTML = `<p>Tienes ${edad} años. No eres mayor de edad.</p>`;
        const img = document.createElement('img');
        img.src = '/imagenes/menor y mayor de edad/niño.jpg'; 
        img.alt = 'Menor de edad';
        img.className = 'img-fluid'; 
        imagenEdad.appendChild(img);
    }
}
