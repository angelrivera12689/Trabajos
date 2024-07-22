<?php
function salario($dias,$valordia) {
    $day=$dias;
    $vday=$valordia;
    $totalSalario= $day*$vday;
    return $totalSalario;

};
function subtrans($dias,$valordia) {
    $salarioMin= 1600000;
    $salariotrans=salario($dias,$valordia);
    if ($salariotrans<=2*$salarioMin) {
        $subtransporte=114000;
    } else {
        $subtransporte=0;
    }
    return $subtransporte;
};
function  salud($dias,$valordia) {
    $pagoSalud=salario($dias,$valordia)*0.12;
    return $pagoSalud;
};
function pension($dias,$valordia) {
    $pagoPension=salario($dias,$valordia)*0.16;
    return $pagoPension;   
};
function deducible($dias,$valordia) {
    $pagoDeducible = pension($dias,$valordia)+ salud($dias,$valordia);
    return $pagodeducible;
};
function arl ($dias,$valordia) {
    $pagoArl = salario($dias,$valordia)*0.052;
    return  $pagoArl ;
};
function pagototal($dias,$valordia) {
    $pagoTotal1 = salario($dias,$valordia)+subtrans($dias,$valordia)-deducible($dias,$valordia);
    return $pagoTotal1;
};

?>