<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="./insertionTraitement.php" method="POST">
        Prénom:<input type="text" name="first_name"><br>
        Nom:<input type="text" name="last_name"><br>
        Last update:<input type="date" name="last_update" max="<?php echo date("Y-m-d");
                                                                ?>"><br>
        <input type="submit" value="Envoyer">
    </form>
</body>

</html>