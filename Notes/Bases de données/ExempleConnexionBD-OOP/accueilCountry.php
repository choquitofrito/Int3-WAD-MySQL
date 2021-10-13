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


    include_once "./config/db.php";
    try {
        $bdd = new PDO(DBDRIVER . ':host=' . DBHOST . ';port=' . DBPORT .
            ';dbname=' . DBNAME . ';charset='
            . DBCHARSET, DBUSER, DBPASS);
    } catch (Exception $e) {
        // en mode dev, on veut connaitre toutes les infos! Seulement en DEV!
        echo $e->getMessage();
        die();
    }


    include_once "./Country.class.php";
    include_once "./CountryManager.class.php";

    $c1 = new Country(["country" => "Syldavia",
                        "last_update" => "2003-4-5"]);
    var_dump ($c1);
    $countryManager = new CountryManager($bdd);
    $countryManager->insert($c1);


    die();


    ?>
</body>
</html>