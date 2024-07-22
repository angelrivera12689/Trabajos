<?php 
 function porcentaje1($not1) {
    $nota1=$not1;
    $porcen1=$nota1*0.2;
    
    return $porcen1;
 };
 function porcentaje2($not2) {
    $nota2=$not2;
    $porcen2=$nota2*0.35;
    
    return $porcen2;
 };
 function porcentaje3($not3) {
    $nota3=$not3;
    $porcen3=$nota3*0.45;
    
    return $porcen3;
 };
function porcentajes($not1,$not2,$not3) {
    $nota1=$not1;
    $nota2=$not2;
    $nota3=$not3;
    $suma=porcentaje1($not1)+porcentaje2($not2)+porcentaje3($not3);
    return $suma;
 };
 function estadistica($not1,$not2,$not3) {
    $nota1=$not1;
    $nota2=$not2;
    $nota3=$not3;
    if (porcentajes($not1,$not2,$not3)>4.5) {
       $valoracion ="la nota es superior";
    } else if (porcentajes($not1,$not2,$not3)<=4.5 & porcentajes($not1,$not2,$not3)>3.5) {
       $valoracion ="la nota es buena";
    } else if (porcentajes($not1,$not2,$not3)<=3.5 & porcentajes($not1,$not2,$not3) >=3.0){
       $valoracion ="la nota es medio";
    } else{
       $valoracion ="la nota es mala";
    }
    echo"El primer porcentaje es: ".porcentaje1($not1)."<br>";
    echo"El segundo porcentaje es: ".porcentaje2($not2)."<br>";
    echo"El tercer porcentaje es: ".porcentaje1($not3)."<br>";
    echo"La suma de porcentajes es: ".porcentajes($not1,$not2,$not3)."<br>";
    return $valoracion;
 };

?>