<?php
function salario($dias,$valorDia) {
    $dias=$dias;
    $valorDias=$valorDia;
    $totalSalario= $dias*$valorDias;
    return $totalSalario;
};
function salud($dias,$valorDia) {
    $salud= salario($dias,$valorDia)*0.12;
    return $salud;
};
function pension($dias,$valorDia) {
    $pension= salario($dias,$valorDia)*0.16;
    return $pension;   
};
function deducible($dias,$valorDia) {
    $deducible = pension($dias,$valorDia) + salud($dias,$valorDia);
    return $deducible;
};
function arl ($dias,$valorDia) {
    $arl = salario($dias,$valorDia)*0.052;
    return $arl;
};
function pagototal($dias,$valorDia) {
    $pagoTotal = salario($dias,$valorDia)-deducible($dias,$valorDia);
    return $pagoTotal;
};

?>