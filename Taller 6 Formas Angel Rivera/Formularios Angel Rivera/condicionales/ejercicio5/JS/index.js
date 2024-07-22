function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

function EdadComprobada() {
    const fechaNacimiento1 = document.getElementById('txtanio1').value;
    const fechaNacimiento2 = document.getElementById('txtanio2').value;
    const fechaNacimiento3 = document.getElementById('txtanio3').value;

    if (fechaNacimiento1 && fechaNacimiento2 && fechaNacimiento3) {
        const edad1 = calcularEdad(fechaNacimiento1);
        const edad2 = calcularEdad(fechaNacimiento2);
        const edad3 = calcularEdad(fechaNacimiento3);


        document.getElementById('persona-1').innerHTML = `Persona 1: ${edad1} años - ${edad1 >= 18 ? 'Mayor de edad' : 'Menor de edad'}`;
        document.getElementById('persona-2').innerHTML = `Persona 2: ${edad2} años - ${edad2 >= 18 ? 'Mayor de edad' : 'Menor de edad'}`;
        document.getElementById('persona-3').innerHTML = `Persona 3: ${edad3} años - ${edad3 >= 18 ? 'Mayor de edad' : 'Menor de edad'}`;

        
        const mayoresEdad = [edad1, edad2, edad3].filter(edad => edad >= 18).length;
        if (mayoresEdad >= 2) {
            document.getElementById('promedio').innerHTML = 'El promedio cumple la mayoria  de edad.';
        } else {
            document.getElementById('promedio').innerHTML = 'El promedio no cumple la mayoria de edad.';
        }
        
        
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, ingresa todas las fechas de nacimiento.';
    }
    
}