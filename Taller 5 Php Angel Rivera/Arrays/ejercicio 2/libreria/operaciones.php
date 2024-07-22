<?php
    $numeros=[1,2,3,4,5,6,7,8,9,10];
    $cantidad =count($numeros);      
    $par=[];
    $impar=[];
    for($interar=0;$interar<$cantidad;$interar++){
        if($numeros[$interar]%2==0){
            array_push($par,$numeros[$interar]);
        }else{
            array_push($impar,$numeros[$interar]);
        }
    }
    echo "Valores del array ".print_r($numeros)."<br>";
    echo "Estos valores son pares: " . implode(", ", $par) . "<br>";
    echo "Estos valores son impares: " . implode(", ", $impar) . "<br>";
?>