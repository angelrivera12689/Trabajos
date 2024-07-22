<?php

 function areaCuadrado($pnumUno,$pnumDos){
     $pnumUno = $pnumUno;
     $pnumDos = $pnumDos;
    
     $areaCuadrado = $pnumUno * $pnumDos;
     return $areaCuadrado;
 };
 function areaTriagulo($pnumUno,$pnumDos){
     $pnumUno = $pnumUno;
     $pnumDos = $pnumDos;
 
     $areaTriagulo = ($pnumUno * $pnumoDos)/2;
     return $areaTriagulo;
 };
 function areaRectangulo($pnumUno,$pnumDos){
     $pnumUno = $pnumUno;
     $pnumDos = $pnumDos;
     $areaRectangulo = $pnumUno * $pnumDos;   
     return $areaRectangulo;
 };
 
function geometricas ($figura,$pnumUno, $pnumDos){
    $pnumUno = $pnumUno;
    $pnumDos = $pnumDos;
    $figura = $figura;

    if ($figura == "cuadrado") {
        $area = areaCuadrado($pnumUno,$pnumDos);
    } else if ($figura == "rectangulo") {
        $area = areaRectangulo($pnumUno, $pnumDos);
    } else if ($figura == "triangulo") {
        $area = areaTriagulo($pnumUno, $pnumDos);
    } else {
        $area = "Error!!! no se puede operar";
    }
 
    return $area;
 };
?>