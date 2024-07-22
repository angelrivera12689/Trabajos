<?php
function tabladel5($table) {
    $tabla=$table;
    $num = 5;

    for ($tabla; $tabla <= $num; $tabla++) {
       $resultado=$num * $tabla;
         echo $num."X".$tabla."=".$resultado."<br>";
        
    }
    return "Fin";
};

