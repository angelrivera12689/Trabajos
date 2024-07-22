<?php
function tabla9($nu1,$nu2) {
    $num1=$nu1;
    $num2=$nu2;
    while ($num1<$num2) {
        $num1++;
        $resultado=$num1 * 9;
        echo "9X".$num1."=".$resultado;
        if ($resultado%2==0) {
            echo " Es par <br>";
        } else{
            echo " Es impar <br>";
        }
    }
    return "Fin";
};

?>