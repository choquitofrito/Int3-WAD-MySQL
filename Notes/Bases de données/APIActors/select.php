<?php


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


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

if (isset($_GET['first_name'])){
    $first_name = $_GET['first_name']; // ici il faudrait nettoyer.... (sécurité!)
    $first_name = strtoupper($first_name);
    $arrayObjetsActeurs = $actorManager->select(['first_name'=> $first_name]);
 
}
else {
    $arrayObjetsActeurs = $actorManager->select();
}

echo json_encode ($arrayObjetsActeurs);
http_response_code(200);