<?php
include("./Libreria/index.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        var_dump(saludo("Hola mundo"));
        echo "<br>";
        var_dump($saludoExp("Hola mundo"));
    ?>
</body>
</html>