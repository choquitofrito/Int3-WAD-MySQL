<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    // requête sans placeholders
    include "./config/db.php";

    try {
        $bdd = new PDO(DBDRIVER . ':host=' . DBHOST . ';port=' . DBPORT .
            ';dbname=' . DBNAME . ';charset='
            . DBCHARSET, DBUSER, DBPASS);
    }
    catch (PDOException $e){
        echo "Une erreur de connexion s'est produite <a href='./accueil.php'>Accueil</a>";
        // echo $e->getMessage();
        die();
    }
    
    // $sql = "INSERT INTO `actor` (`id`, `first_name`, `last_name`, `last_update`) VALUES (NULL, \'test\', \'test\', current_timestamp());";

    $sql = "INSERT INTO actor (first_name, last_name, last_update) ". 
            "VALUES (\"LOLO\", \"LAURE\", current_timestamp())";
    $requete = $bdd->prepare ($sql);
    $requete->execute();
    var_dump ($requete->errorInfo());
    var_dump ($bdd->errorInfo());


    ?>
</body>

</html>