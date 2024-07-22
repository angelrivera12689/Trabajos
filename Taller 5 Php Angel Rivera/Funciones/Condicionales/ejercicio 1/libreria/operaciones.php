<?php
function mayoria($edad) {
    $edad=$edad;
    if ($edad>=18) {
        $resultado = "Es mayor de edad";
    }else{
        $resultado = "Es menor de edad";
    }
    return $resultado;
};

