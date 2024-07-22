<?php
function prom1($nota1) {
    $not1 = $nota1;
    $prom1 = ($not1*0.3)/100;
    return $prom1;
};

function prom2($nota2) {
    $not2 = $nota2;
    $prom2 = ($not2*0.4)/100;
    return $prom2;
};
function prom3($nota3) {
    $not3 = $nota3;
    $prom3= ($not2*0.4)/100;
    return $prome3;
};

function sumaprom($nota1,$nota2,$nota3) {
    $not1 = $nota1;
    $not2 = $nota2;
    $not3 = $nota3;
    $suma = prom1($nota1) + prom2($nota2) + prom3($nota3);
    return $suma;
};
?>