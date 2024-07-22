<?php
    include("./libreria/operaciones.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Geometria</title>
</head>
<body>
    <?php
        var_dump("Area del triangulo: ".geometricas("triangulo",10,23));
        echo "<br>";
        var_dump("Area del cuadrado: ".geometricas("cuadrado",34,34));
        echo "<br>";
        var_dump("Area del rectangulo: ".geometricas("rectangulo",15,34));
        echo "<br><br>";
        
    
    ?>
</body>
</html>