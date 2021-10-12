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
        $bdd = new PDO(DBDRIVER . ':host=' . DBHOST . ';port=' . DBPORT .
            ';dbname=' . DBNAME . ';charset='
            . DBCHARSET, DBUSER, DBPASS);
    } catch (Exception $e) {
        // en mode dev, on veut connaitre toutes les infos
        echo $e->getMessage();
        die();
    }
    // juste pour vérifier si la connexion est ok et le formulaire est bien construit
    // var_dump ($bdd);
    // var_dump ($_POST);

    // stocker le contenu du form dans de variables (chaque input dans une variable)
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $last_update = $_POST['last_update'];

    // filtrer eventuellement avec filter_vars et filter_input
    // pour augmenter la sécurité 


    // créer la requête, dans ce cas un insert
    $sql = "INSERT INTO actor (first_name, last_name, last_update) ".
        "VALUES (:first_name, :last_name, :last_update)";
    
    $requete = $bdd->prepare($sql); // renvoie un PDOStatement
    $requete->bindValue(":first_name", $first_name);
    $requete->bindValue(":last_name", $last_name);
    $requete->bindValue(":last_update", $last_update);
    var_dump ($requete->errorInfo());
    var_dump ($bdd->errorInfo());
    $requete->execute();
   








    ?>

</body>

</html>