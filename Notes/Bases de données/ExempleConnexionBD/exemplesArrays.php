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
    // exemples d'accés aux arrays

    // array simple, clés numériques
    $noms = ['Julie', 'Judy', 'Anaïs'];
    echo "<ul>";
    foreach ($noms as $val) {
        echo "<li>" . $val . "</li>";
    }
    echo "</ul>";

    $film1 = [
        'titre' => 'Rocky 1',
        'nationalite' => 'USA',
        'duree' => 120
    ];

    var_dump($film1);

    // afficher USA
    echo $film1['nationalite'];

    // erreur: pas d'index numériques!
    // echo $film1[0];

    $vals = [10, 20, 30];

    // si on veut obtener les clés d'un array (n'importe le type)
    $clesFilm1 = array_keys($film1);
    var_dump($clesFilm1);

    $clesVals = array_keys($vals);
    var_dump($clesVals);

    // résultat d'une bd
    include "./config/db.php";

    $bdd = new PDO(DBDRIVER . ':host=' . DBHOST . ';port=' . DBPORT .
        ';dbname=' . DBNAME . ';charset='
        . DBCHARSET, DBUSER, DBPASS);

    $sql = "SELECT * FROM actor";
    $requete = $bdd->prepare($sql);
    $requete->execute();
    $resultat = $requete->fetchAll(PDO::FETCH_ASSOC);

    ?>

</body>

</html>