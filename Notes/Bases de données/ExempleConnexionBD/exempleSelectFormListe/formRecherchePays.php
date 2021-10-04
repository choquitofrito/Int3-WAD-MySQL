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
    include "../config/db.php";

    try {
        $bdd = new PDO(DBDRIVER . ':host=' . DBHOST . ';port=' . DBPORT .
            ';dbname=' . DBNAME . ';charset='
            . DBCHARSET, DBUSER, DBPASS);
    } catch (PDOException $e) {
        echo "Une erreur de connexion s'est produite <a href='./accueil.php'>Accueil</a>";
        // echo $e->getMessage();
        die();
    }

    // toutes les villes d'un pays
    $sql = "SELECT country.country FROM country ";
    $requete = $bdd->prepare($sql);
    $requete->execute();
    $res = $requete->fetchAll(PDO::FETCH_ASSOC);
    // var_dump ($res);
    ?>
    <form action="./traitementRecherchePays.php" method="POST">
        <!-- Pays:<input type="text" name="nomPays"> -->
        <select name="nomPays">
            <!-- <option value='Italy'>Italy</option> -->
            <!-- <option value='France'>France</option> -->
            <?php
            foreach ($res as $unPays){
                echo "<option value='". $unPays['country']; // attention! c'est le nom de la colonne dans la BD!!
                echo "'>". $unPays['country'];
                echo "</option>\n";
            }
            ?>
        </select>

        <input type="submit" value="Rechercher">
    </form>
</body>

</html>