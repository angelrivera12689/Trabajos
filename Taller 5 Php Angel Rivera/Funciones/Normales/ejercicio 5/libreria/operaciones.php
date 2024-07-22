<?php
function promedios($nota1,$nota2,$nota3) {
    $not1 = $nota1;
    $not2 = $nota2;
    $not3 = $nota3;

    $promedio = ($not1+$not2+$not3)/3;
    return $promedio;
};

