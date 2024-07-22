<?php
function saludo($psaludar){
    $saludar = $psaludar;
    return $saludar . "parametros <br>";
}

$saludoExp = function($psaludar){
    $saludar = $psaludar;
    return $saludar ."expresion";
}
?>