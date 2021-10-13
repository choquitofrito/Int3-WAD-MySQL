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
        $sql = "DELETE FROM actor WHERE id=:id";
        $requete = $this->bdd->prepare($sql);
        $requete->bindValue(":id", $unActeur->getId());
        $requete->execute();
        var_dump($requete->errorInfo());
        var_dump($this->bdd->errorInfo());
    }

    // select reçoit un array de filtres et renvoie un array d'objets Actor
    // c'est possible que l'array soit vide ou 
    // qu'il y ait un seul objet dans l'array
    public function select(array $filtres = []): array
    {
        $sql = "SELECT * FROM actor";
        // on veut obtenir une requête dans cet esprit:
        // SELECT * from actor WHERE first_name=:first_name AND last_name=:last_name
        if (count($filtres) > 0) {
            $sql = $sql . " WHERE ";

            $arrayFiltresRequete = [];
            foreach ($filtres as $nomFiltre => $valeur) {
                $arrayFiltresRequete[] = $nomFiltre . "=:" . $nomFiltre;
            }
            // var_dump($arrayFiltresRequete);
            $sql = $sql . implode(" AND ", $arrayFiltresRequete);
        }

        $requete = $this->bdd->prepare($sql);

        // on veut faire bindValue de cette manière:
        // $requete->bindValue(":first_name",$filtres['first_name']);
        // $requete->bindValue(":last_name",$filtres['last_name']);
        foreach ($filtres as $nomFiltre => $valFiltre) {
            $requete->bindValue(":" . $nomFiltre, $valFiltre);
        }


        // debugger tout le temps le contenu du $sql 
        // var_dump($sql);
        // die();
        $requete->execute();

        $res = $requete->fetchAll(PDO::FETCH_ASSOC);

        // exemple de création d'un objet à partir d'un array. Notre constructer est adapté :
        // var_dump ($res[0]);
        // $acteurTemp = new Actor($res[0]);
        // var_dump ($acteurTemp);
        // die();


        // on crée un array d'objets à partir de l'array 
        // d'arrays

        $arrayObjetsActor = [];
        foreach ($res as $unActorArray) {
            $arrayObjetsActor[] = new Actor($unActorArray);
        }
        return $arrayObjetsActor;
    }


    // on cherche un seul objet!
    public function selectParId(int $id): Actor
    {
        $sql = "SELECT * FROM actor WHERE id=:id";
        $requete = $this->bdd->prepare($sql);
        $requete->bindValue(":id",$id);
        $requete->execute();
        $arrayUnActeur = $requete->fetch(PDO::FETCH_ASSOC); // une seule ligne, un seul array
        return new Actor($arrayUnActeur);

    }



    // public function select ($id = "", $first_name = "" , $last_name = "", $last_update="" ) {

    //     // $sql = "SELECT  ........ :last_update = .....";

    // }
    // public function update()
}
