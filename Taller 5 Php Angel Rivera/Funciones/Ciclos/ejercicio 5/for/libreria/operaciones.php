<?php
function tablas($contador1) {
    $par=0;
    $impar=0;
    $contar1=$contador1;

    for ($contar1; $contar1 <= 5; $contar1++) {
        for ($contar2 = 1; $contar2 <= 5; $contar2++) {

            $resultado = $contar1 * $contar2;

            echo $contar1."X".$contar2."=".$resultado;

            if ($resultado%2==0) {
                echo " Buzz <br>";
                $par++;
            } else{
                echo " Bass <br>";
                $impar++;
            }
        }
        
    }
    echo "cantidad de pares ".$par."<br>";
    echo "cantidad de impares ".$impar."<br>";
    return "Finalizacion";
};

?>