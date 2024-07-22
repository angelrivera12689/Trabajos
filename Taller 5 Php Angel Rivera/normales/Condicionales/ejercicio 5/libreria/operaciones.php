<?php
$anioNac1=2005;
$anioNac2=2002;
$anioNac3=2014;
$promedio;
$anioAc=2024;

$edad1=$anioAc-$anioNac1;
$edad2=$anioAc-$anioNac2;
$edad3=$anioAc-$anioNac3;

if($edad1>17){
    echo "es mayor de edad." ."<br>"; 
}
else{
    echo "es menor de edad." ."<br>";
}
if($edad2>17){ 
    echo "es mayor de edad." ."<br>";
}
else{
    echo "es menor de edad." ."<br>";
}
if($edad3>17){
    echo "es mayor de edad." ."<br>";
}
else{
    echo "es menor de edad." ."<br>";
}
$suma=$edad1+$edad2+$edad3;
$promedio= $suma/3;

if($promedio>17){
    echo "el promedio cumple con la mayoria de edad." ."<br>";
}
else{
    echo "el promedio no cumple con la mayoria de edad." ."<br>";
}

?>