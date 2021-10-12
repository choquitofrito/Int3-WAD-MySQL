<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


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

// prendre l'id de l'URL. Cette API n'a pas d'autre filtres, juste l'id
if (isset($_GET['id'])) {
    $res = $actorManager->select(['actor_id'=>$_GET['id']]); // un array contenant un seul acteur, mias un array 
                                                    // On peut implementer la selection de plusieurs manières
                                                    // Ex: faire un selectId qui renvoie un seul objet
}
else {
    $res = $actorManager->select(); // un array contenant tous les acteurs. 
                                    // on peut aussi implementer une méthode séparée selectAll ou findAll.
}
// on renvoie le résultat en JSON pour que le client puis l'utiliser depuis n'importe quel langage (ex: JS)

// on devrait gérer les erreurs (try-catch si la requête plante etc... ) mais on ne le fera pas ici

// on envoie un code de OK et l'array en format JSON
http_response_code(200);
echo json_encode($res);