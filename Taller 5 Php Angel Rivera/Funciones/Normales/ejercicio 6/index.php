<?php
    include("./libreria/operaciones.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Promedios</title>
</head>
<body>
    <?php
        var_dump("promedio 1: ".$prom1(22));
        echo "<br>";
        var_dump("promedio 2: ".$prom2(63));
        echo "<br>";
        var_dump("promedio 3: ".$prom3(87));
        echo "<br>";
        var_dump("suma de promedios: ".$promedios(22,45,37));
        
    ?>
</body>
</html>