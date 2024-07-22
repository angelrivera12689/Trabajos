//--------***VARIABLES GLOBALES***--------- //
let personas = []; //el array principal
let nomina = []; //el array para almacenar la nomina 
let salarioMin=1600000
let numeroRegistros;
let mostrar;
let mostrarRetencion;



//--------***FUNCIONES***--------- //

// Función para calcular salario
const funcionSalario = function(paValorDia, paDias) {
    return paDias * paValorDia;
};
//funcion que calcula el subsidio de transporte
const funcioSubtrans = function(paSalario){
    if(paSalario<salarioMin*2){
        paSalario= paSalario+120000 
        mostrar= "Si se aplica el subsidio de transporte " + paSalario
    }else{
        paSalario= paSalario+0
        mostrar= "No se aplica el subsidio de transporte " 
}
return mostrar
}
// funcion que calcula la salud
const funcionSalud=function(paSalario){
    return paSalario * 0.12
}
// funcion que calcula la pension
const funcionPension=function(paSalario){
    return paSalario * 0.16
}
// funcion que calcula el arl
const funcionArl=function(paSalario){
    return paSalario * 0.052
}
// funcion que calcula el deducible
const funcionDeducible = function(paSalario){
    return funcionSalud(paSalario) + funcionPension(paSalario) + funcionArl(paSalario)
}
//funcion que calcula la retencion del salario
const funcionRetener = function(paSalario) {
    if (paSalario > salarioMin * 12) {
        paSalario = paSalario * 0.08;
        mostrarRetencion = "Retencion de 0.08  " + paSalario;
    } else if (paSalario > salarioMin * 8) {
        paSalario = paSalario * 0.04;
        mostrarRetencion = "Retencion de 0.04 " + paSalario;
    } else if (paSalario > salarioMin * 6) {
        paSalario = paSalario * 0.02;
        mostrarRetencion = "Retencion de 0.02 " + paSalario;
    } else {
        mostrarRetencion = "No aplica retención";
    }
    return mostrarRetencion;
};

// funcion que clacula el total
const funcionTotal=function(paSalario){
    return paSalario - funcionDeducible(paSalario)
}



//--------***REGISTRO DE PERSONAS***--------- //
personas = [
    {id:1079175835 , nombre:'Sofia', apellido:'Ortiz',cargo:'Aseadora',valorDia:43000 ,diasTrabajado:31 },
    {id:1897563421 , nombre:'Gustavo', apellido:'Suarez',cargo:'Director de Marketing',valorDia: 700000 ,diasTrabajado: 31 },
    {id:1335098765 , nombre:'Eliana', apellido:'Camargo',cargo:'Directora de Recursos Humano',valorDia:30000 ,diasTrabajado:31  },
    {id:1240975434 , nombre:'Susana', apellido:'Arango',cargo:'Aseadora',valorDia: 43000 ,diasTrabajado:31 },
    {id:1234567865 , nombre:'Carlos', apellido:'Puentes',cargo:'Director Comercial',valorDia: 10000000 ,diasTrabajado: 31 },
    {id:1234567886, nombre:'Keiner', apellido:'Cespedes',cargo:'Contador',valorDia:5000000  ,diasTrabajado: 31 },
    {id:1232456787 , nombre:'Andres', apellido:'Horta',cargo:'Atencion al cliente',valorDia: 120000 ,diasTrabajado: 31 },
    {id:1233235648 , nombre:'Paubla', apellido:'Ortega',cargo:'Director de Innovacion',valorDia: 3300000 ,diasTrabajado: 31 },
    {id:1542356759, nombre:'Luis', apellido:'Rodriguez',cargo:'Atencion al cliente',valorDia:2270000  ,diasTrabajado: 31 },
    {id:1234865320 , nombre:'Angel', apellido:'Rivera',cargo:'Drector de Tecnologia',valorDia:2000000  ,diasTrabajado: 31 }
];

// Crear  el numero de objetos del registro
numeroRegistros = personas.length;

for (let iteracion = 0; iteracion < numeroRegistros; iteracion++) {
    let trabajador = personas[iteracion]; //permite rescorre toda el registro
    let salarioCalculado = funcionSalario(trabajador.valorDia, trabajador.diasTrabajado); //calcula el salario de la persona
    let subTransCalculada=funcioSubtrans(salarioCalculado);
    let retencionCalculada=funcionRetener(salarioCalculado);
    let saludCalculada = funcionSalud(salarioCalculado);
    let pensionCalculada=funcionPension(salarioCalculado);
    let arlCalculada= funcionArl(salarioCalculado);
    let deducibleCalculada=funcionDeducible(salarioCalculado);
    let totalCalculada=funcionTotal(salarioCalculado);
    nomina.push({
        id: trabajador.id,
        nombre: trabajador.nombre,
        apellido: trabajador.apellido,
        cargo: trabajador.cargo,
        salario: salarioCalculado,
        subTransporte: subTransCalculada,
        retencion: retencionCalculada,
        salud: saludCalculada ,
        pension:  pensionCalculada,
        arl:arlCalculada,
        deducible: deducibleCalculada,
        total:totalCalculada,
    });

    console.log(
        "ID: " + trabajador.id + "\n" +
        "Nombre: " + trabajador.nombre + "\n" +
        "Apellido: " + trabajador.apellido + "\n" +
        "Cargo: " + trabajador.cargo + "\n" +
        "Salario: "  + salarioCalculado + "\n" +
        "Subsidio de transporte: "  + subTransCalculada + "\n" +
        "Retención: "  + retencionCalculada + "\n" +
        "Salud: "  + saludCalculada+ "\n" +
        "Pensión: "  + pensionCalculada + "\n" +
        "ARL: "  + arlCalculada + "\n" +
        "Deducible: "  + deducibleCalculada + "\n" +
        "Total: "  + totalCalculada + "\n" 
    )

}



//console.log(nomina);//imprime el final de todo