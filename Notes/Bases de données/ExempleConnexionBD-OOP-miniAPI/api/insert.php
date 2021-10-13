<?php

// il faut faire appel à cette URL en utilisant l'extension Thunder Client ou un autre client d'APIs (Postman, par exemple)
// URL: l'url de cette page
// Body: Le JSON de l'objet à insérer
// exemple: 
// { "first_name" : "lol" ,
//     "last_name" : "lil",
//     "last_update" : "2030-10-10"
// }


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



// importer la config de la BD
include_once "../config/db.php";
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


include_once "../Actor.class.php";
include_once "../ActorManager.class.php";
$actorManager = new ActorManager($bdd); // cet objet gére le CRUD des acteurs

$objetStdClass = json_decode(file_get_contents("php://input"));





// faire un casting vers un array. On prend les propriétés (et leurs valeurs) de l'objet 
// et on crée un array associatif (clé => val)

// cette méthode du simple casting fonctionnera si l'objet n'a pas d'autres objets imbriqués
// (ex: ça n'encodera pas les objets Contact qui se trouvent à l'intérieur d'un objet Repertoire)
// Pour notre exemple c'est suffisant
$arrayDonnees = (array)$objetStdClass;
if (count($arrayDonnees) == 0){
    echo json_encode (["msg" => "insertion FAIL. Pas de données à insérer"]); 
    die();
}

// var_dump ($arrayDonnees); // le format ne sera pas joli, l'extension ne fait pas un rendu du HTML

// le reste est facile grâce à notre constructeur et à hydrate!
$actor = new Actor ($arrayDonnees);
// var_dump ($actor);

$actorManager->insert ($actor);
echo json_encode (["msg" => "insertion OK"]); // ici on ne vérifie si l'insertion a été bien faite pour simplifier le code


