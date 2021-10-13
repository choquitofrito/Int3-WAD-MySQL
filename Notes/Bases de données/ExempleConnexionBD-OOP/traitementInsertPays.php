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
    $countryManager = new CountryManager($bdd);

    $country = $_POST['country'];
    $last_update = $_POST['last_update'];

    // filtrer les variables: enlever les caractères spéciaux, balises etc...
    // filter_vars
    // filter_input
    // htmlspecialchars ...

    $newCountry = new Country([
        'country' => $country,
        'last_update'=> $last_update 
    ]);
    $countryManager->insert($newCountry);





    ?>
</body>

</html>