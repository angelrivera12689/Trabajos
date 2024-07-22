//parametros
function MayordeEdad(paEdad){ 
   paEdad=paEdad
   let anioAct = 2024
   let edad = anioAct - paEdad
   let mostrar

   if(edad>17){
     mostrar= " cumple con la mayoria de edad en parametros"
   }else{
     mostrar= " no cumple con la mayoria de edad en parametros"
   }
   return mostrar
}

function edadesPersonas(paAño1,paAño2,paAño3){
    paAño1=paAño1
    paAño2=paAño2
    paAño3=paAño3
    let edad1  = "La primera persona"
    let edad2 = "La segunda  persona" 
    let edad3 = "La tercera  persona"
    let promedio
    let aviso

    console.log(edad1 + MayordeEdad(paAño1))
    console.log(edad2  + MayordeEdad(paAño2))
    console.log(edad3  + MayordeEdad(paAño3))

    promedio= (MayordeEdad(paAño1)+MayordeEdad(paAño2)+edad3  + MayordeEdad(paAño3))/3

    if(promedio>17){
        aviso = "El promedio de las edades si cumple la mayoria de edad en parametros"
        return aviso
    }else{
        aviso = "El promedio de las edades no cumple la mayoria de edad en parametros"
        return aviso
    }
}

//expresion
const MayordeEdadExp = function(paEdad){
   paEdad=paEdad
   let anioAct = 2024
   let edad = anioAct - paEdad
   let mostrar

   if(edad>17){
     mostrar= " cumple con la mayoria de edad en expresión" 
   }else{
     mostrar= " no cumple con la mayoria de edad en expresión"
   }
   return mostrar
}

const edadesPersonasExp = function(paAño1,paAño2,paAño3){
    paAño1=paAño1
    paAño2=paAño2
    paAño3=paAño3
    let edad1  = "La primera persona"
    let edad2 = "La segunda  persona" 
    let edad3 = "La tercera  persona"
    let promedio
    let aviso

    console.log(edad1 + MayordeEdadExp(paAño1))
    console.log(edad2  + MayordeEdadExpp(paAño2))
    console.log(edad3  + MayordeEdadExp(paAño3))

    promedio= (MayordeEdadExp(paAño1)+MayordeEdadExp(paAño2)+edad3  + MayordeEdadExp(paAño3))/3

    if(promedio>17){
        aviso = "El promedio de las edades si cumple la mayoria de edad en expresión"
        return aviso
    }else{
        aviso = "El promedio de las edades no cumple la mayoria de edad en expresión"
        return aviso
    }
}

