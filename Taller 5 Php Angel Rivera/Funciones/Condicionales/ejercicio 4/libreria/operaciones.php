<?php
function areas($lad1,$lad2,$lad3) {
    $lado1=$lad1;
    $lado2=$lad2;
    $lado3=$lad3;

    if (areas($lado1)==areas($lado2)&areas($lado3)==areas($lado3)&areas($lado3)==areas($lado1)){
        $resultado ="Las areas de los cuadrados son iguales";
    } else if (areas($lado1)>areas($lado2) & areas($lado1)>areas($lado3)) {
        $resultado ="El primer cuadrado tiene un area mayor";
    } else if (areas($lado2)>areas($lado1) & areas($lado2)>areas($lado3)) {
        $resultado ="El segundo cuadrado tiene un area mayor";
    } else{
        $resultado ="El tercer cuadrado tiene un area mayor";
    }
    return $resultado;
};
function areas($lad1) {
    $lado1=$lad1;
    $area1= $lado1*$lado1;
    return $area1;
};

?>