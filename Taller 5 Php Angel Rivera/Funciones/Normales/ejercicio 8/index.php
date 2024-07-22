<?php
    include("./libreria/operaciones.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pago</title>
</head>
<body>
    <?php
        $dias=31;
        $valordia=70000;
        var_dump("Salario: ". salario($dias,$valorDia));
        var_dump("Arl: ". arl($dias,$valorDia));
        var_dump("La salud es: ". salud($dias,$valorDia));
        var_dump("Deducible: ".deducible($dias,$valorDia));
        var_dump("pension: ".pension($dias,$valorDia));  
    ?>
</body>
</html>