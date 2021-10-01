<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SELECT BD</title>
</head>

<body>
    <?php
    // le but de cette page est de faire un SELECT dans la BD (sakila)
    // On veut obtenir la liste d'acteurs dans un array et puis
    // l'afficher


    // Connecter à la BD (créer un objet de la classe PDO)
    // On doit envoyer quelques paramètres dans le constructeur

    // adresse : localhost
    // port : 3306
    // nom de la BD: sakila
    // user (login): root
    // password: "root" ou "" par défaut 

    include "./config/db.php";

    $bdd = new PDO(DBDRIVER . ':host=' . DBHOST . ';port=' . DBPORT .
        ';dbname='. DBNAME . ';charset='
        . DBCHARSET, DBUSER, DBPASS);

    // var_dump ($bdd);

    // Créer une requête SQL dans un string 
    $sql = "SELECT * FROM actor";

    // Préparer la requête (l'envoyer au serveur sans la lancer!)
    // (Notation de -> au lieu du . en PHP)
    // Prepare renvoie un objet de la class PDOStatement (requête)
    $requete = $bdd->prepare($sql);
    
    // Lancer (execute) la requête (PDOStatement)
    $requete->execute();
    
    // Obtenir le résultat sous la forme d'un array
    $resultat = $requete->fetchAll(PDO::FETCH_ASSOC);

    // chaque élément de l'array est un tableau
    // for ($i=0;$i<count($resultat);$i++){
    //     // une boucle pour parcourir chaque array (chaque ligne du résultat)
    //     foreach ($resultat[$i] as $cle => $val){
    //         echo "<br>";
    //         echo "cle: ".$cle. "<br>";
    //         echo "val: ".$val;
    //     }
    // }


    // chaque élément de l'array est un tableau : système simple
    foreach ($resultat as $ligne){
        // une boucle pour parcourir chaque array (chaque ligne du résultat)
        foreach ($ligne as $cle => $val){
            echo "<br>";
            echo "cle: ".$cle. "<br>";
            echo "val: ".$val;
        }
        // On pourrait juste afficher les champs de notre choix 
        // au lieu de parcourir tous
        echo $ligne['last_name'];
        
    }
    
    var_dump($resultat);






    ?>
</body>

</html>