<?php
function operaciones($poperador,$pnumeroUno,$pnumeroDos) {
    $operador=$poperador;
    $numeroUno = $pnumeroUno;
    $numeroDos = $pnumeroDos;
    if ($operador == "suma") {
       $operacionResultado = suma($pnumeroUno,$pnumeroDos);
    }else if ($operador == "resta") {
       $operacionResultado = resta($pnumeroUno,$pnumeroDos);
    }else if ($operador == "multiplicacion") {
       $operacionResultado = multiplicacion($pnumeroUno,$pnumeroDos);
    }else if ($operador == "division") {
       $operacionResultado = division($pnumeroUno,$pnumeroDos);
    }else{
       $operacionResultado = "Error!!! no se puede operar";
    }
    return $operacionResultado;
 };
 function suma($pnumeroUno,$pnumeroDos){
    $numeroUno = $pnumeroUno;
    $numeroDos = $pnumeroDos;
 
    $sumar = $pnumeroUno + $pnumeroDos;
    return $sumar;
 };
 function resta($pnumeroUno,$pnumeroDos){
    $numeroUno = $pnumeroUno;
    $numeroDos = $pnumeroDos;
 
    $restar = $pnumeroUno - $pnumeroDos;
    return $restar;
 };
 function multiplicacion($pnumeroUno,$pnumeroDos){
    $numeroUno = $pnumeroUno;
    $numeroDos = $pnumeroDos;
 
    $multiplicar = $pnumeroUno * $pnumeroDos;
    return $multiplicar;
 };
 function division($pnumeroUno,$pnumeroDos){
    $numeroUno = $pnumeroUno;
    $numeroDos = $pnumeroDos;
 
    $dividor = $pnumeroUno / $pnumeroDos;
    return $dividor;
 };
 ?>
