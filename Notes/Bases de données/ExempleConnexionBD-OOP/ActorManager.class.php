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
        $unActeur->hydrate (['id' => $this->bdd->lastInsertId()]);
        // c'est pareil si on n'utilise pas le hydrate:
        // $unActeur->setId($this->bdd->lastInsertId());
    }
    // public function select ($id = "", $first_name = "" , $last_name = "", $last_update="" ) {

    //     // $sql = "SELECT  ........ :last_update = .....";

    // }
    // public function delete ()
    // public function update()
}
