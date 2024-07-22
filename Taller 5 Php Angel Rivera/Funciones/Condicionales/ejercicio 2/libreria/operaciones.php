<?php
function caledad($anioAct, $anioNac) {
    $aniAct = $anioAct;
    $aniNac = $anioNac;
    $edad = $aniAct - $aniNac;
    if ($edad >= 18) {
        $resul = "Es mayor de edad";
    } else {
        $resul = "Es menor de edad";
    }
    return $resul;
};
?>