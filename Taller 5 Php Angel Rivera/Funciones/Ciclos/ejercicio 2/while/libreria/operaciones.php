<?php
function contador($contando) {
    $contar=$contando;
    $numero=4;
    while ($contar<=$numero) {
        $contar++;
        if ($contar%2==0) {
            echo $contar." Es par"."<br>";
        } else {
            echo $contar." Es impar"."<br>";
        }
    }
    return "Fin";
};


?>