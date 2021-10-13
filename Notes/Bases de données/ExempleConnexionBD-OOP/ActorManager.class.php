<?php

// classe qui gére le CRUD de Actor
class ActorManager
{
    public PDO $bdd;

    public function __construct(PDO $objetBD)
    {
        $this->bdd = $objetBD;
    }

    public function insert(Actor $unActeur): void
    {
        $sql = "INSERT INTO actor (first_name, last_name, last_update) " .
            "VALUES (:first_name, :last_name, :last_update)";

        $requete = $this->bdd->prepare($sql); // renvoie un PDOStatement
        $requete->bindValue(":first_name", $unActeur->first_name);
        $requete->bindValue(":last_name", $unActeur->last_name);
        $requete->bindValue(":last_update", $unActeur->last_update);
        // var_dump($requete->errorInfo());
        // var_dump($this->bdd->errorInfo());
        $requete->execute();
        // on donne un id à l'objet
        $unActeur->hydrate(['id' => $this->bdd->lastInsertId()]);
        // c'est pareil si on n'utilise pas le hydrate:
        // $unActeur->setId($this->bdd->lastInsertId());
    }
    public function delete(Actor $unActeur)
    {
        $sql = "DELETE FROM actor WHERE actor_id=:id";
        $requete = $this->bdd->prepare($sql);
        $requete->bindValue(":id", $unActeur->getId());
        $requete->execute();
        var_dump($requete->errorInfo());
        var_dump($this->bdd->errorInfo());
    }

    // select reçoit un array de filtres et renvoie un array d'objets Actor
    // c'est possible que l'array soit vide ou 
    // qu'il y ait un seul objet dans l'array
    public function select(array $filtres): array
    {
        $sql = "SELECT * FROM actor";
        $requete = $this->bdd->prepare($sql);
        $requete->execute();
        
        $res = $requete->fetchAll(PDO::FETCH_ASSOC);
        // on crée un array d'objets maintenant à partir de l'array 
        // d'arrays
        var_dump ($res[0]);
        $acteurTemp = new Actor($res[0]);
        var_dump ($acteurTemp);
        die();

        // $arrayObjetsActor = [];
        // foreach ($res as $unActorArray){
        //     $arrayObjetsActor[] = $unActorArray;
        // }
        // var_dump ($arrayObjetsActor);
        // die();



        var_dump($res);
        die();
    }

    // public function select ($id = "", $first_name = "" , $last_name = "", $last_update="" ) {

    //     // $sql = "SELECT  ........ :last_update = .....";

    // }
    // public function update()
}
