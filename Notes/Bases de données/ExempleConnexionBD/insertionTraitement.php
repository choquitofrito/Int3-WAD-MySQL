<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    On va insérer un acteur.
    <?php
    // importer la config de la BD
    include_once "./config/db.php";
    // connecter à la BD
    try {
        $bdd = new PDO (

        );
    }
    catch (Exception $e){
        // en mode dev, on veut connaitre toutes les infos
        echo $e->getMessage();
        die();
    }


    ?>

</body>
</html>