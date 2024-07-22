<?php
function numeros($num1,$num2) {
    $num1 = $nmu1;
    $num2 = $nmu2;
    if ($num1==$num2) {
        $resultado = "Son iguales";
    }else if ($num1>$num2) {
        $resultado= $num1 ." Es mayor";
    }else{
        $resultado= $num2 ." Es mayor";
    }
    return $resultado;
};

