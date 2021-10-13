<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



// connecter à la BD 
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


// obtenir tous les acteurs sous la forme d'objets
include_once "./Actor.class.php";
include_once "./ActorManager.class.php";

$actorManager = new ActorManager($bdd); // cet objet gére le CRUD des acteurs

$content = file_get_contents ("php://input");
$objetStdClass = json_decode($content);

$arrActor = (array)$objetStdClass;
$actor = new Actor ($arrActor);

$actorManager->insert($actor);
echo json_encode (["message"=>"L\"acteur a été enregistré"]);
http_response_code(200);