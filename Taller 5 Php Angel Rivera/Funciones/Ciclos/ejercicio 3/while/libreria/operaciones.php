<?php
function tabladel5($tabl) {
    $tabla=$tabl;
    $num = 5;
    while ($tabla<$num) {
        $tabla++;
        $resultado=$num * $tabla;
         echo $num."X".$tabla."=".$resultado."<br>";
    }
    return "Fin";
};

$tabladel5=function ($tabl) {
    $tabla=$tabl;
   $num = 5;
    while ($tabla<$num) {
        $tabla++;
        $resultado=$num * $tabla;
         echo $num."X".$tabla."=".$resultado."<br>";
    }
    return "Fin";
};
?>