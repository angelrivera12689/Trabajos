<?php
function nacimiento ($anionac1) {
    $aninac1=$anionac1;
    $edad1 = 2024-$aninac1;
    if ($edad1>17) {
        $eda1 =" Es mayor de edad";
    } else{
        $eda1=" Es menor de edad";
    }
    echo $eda1;
    echo "<br>";
    return $edad1;
};

function edad ($anionac1,$anionac2,$anionac3)  {
    $aninac1=$anionac1;
    $aninac2=$anionac2;
    $aninac3=$anionac3;

    $promedio=nacimiento($anionac1)+nacimiento($anionac2)+nacimiento($anionac3);

    if ($promedio>17) {
        $prom=" El promedio cumple con la mayoria de edad";
    } else {
       $prom= " El promedio no comple con la mayoria de edad";
    }
    return $prom;
};



?>