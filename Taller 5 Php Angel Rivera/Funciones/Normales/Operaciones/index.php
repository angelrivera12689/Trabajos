<?php
include("./libreria/index.php");
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
        var_dump(operaciones("suma",7,2));
        var_dump(operaciones("resta",10,2));
        var_dump(operaciones("multiplicacion",67,2));
        var_dump(operaciones("division",37,2));
        
        
    ?>
</body>
</html>