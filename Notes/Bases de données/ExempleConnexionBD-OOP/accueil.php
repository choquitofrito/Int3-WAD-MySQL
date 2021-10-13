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
    // var_dump(new Actor("aa", "bb", "2016-07-09"));

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

    include_once "./Actor.class.php";
    include_once "./ActorManager.class.php";
    // $actor1 = new Actor([
    //     "first_name" => "Lula",
    //     "last_name" => "Hugh",
    //     "last_update" => "2016-06-09"
    // ]);
    // $actor2 = new Actor([
    //     "first_name" => "Lili",
    //     "last_name" => "Davis",
    //     "last_update" => "2016-06-09"
    // ]);
    // var_dump($actor1);
    // var_dump($actor2);
    // // changer les valeurs sans set, tous d'un coup!!!
    // $actor2->hydrate([
    //     "last_name" => "Stallone",
    //     "last_update" => "2020-07-09"
    // ]);
    // var_dump($actor2);
    // $actorManager = new ActorManager($bdd); // cet objet gére le CRUD des acteurs

    // $actorManager->insert($actor1);
    // $actorManager->insert($actor2);
    // echo "<br>actor 2 après l'insertion:";
    // var_dump($actor2);


    // $actorManager->delete($actor2);

    $actorManager = new ActorManager($bdd); // cet objet gére le CRUD des acteurs
    $arrayObjetsActeurs = $actorManager->select([
        'first_name' => 'Julie',
        'last_name' => 'De Deken'
    ]);


    ?>
</body>

</html>