<?php

declare(strict_types=1);

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
    public function delete(Actor $unActeur): void
    {
        $sql = "DELETE FROM actor WHERE id=:id";
        $requete = $this->bdd->prepare($sql);
        $requete->bindValue(":id", $unActeur->getId());
        $requete->execute();
        var_dump($requete->errorInfo());
        var_dump($this->bdd->errorInfo());
    }

    public function select(array $params = []): array | Actor
    {
        // requête de base
        $sql = "SELECT * FROM actor";

        // s'il y a un filtre
        if (count($params) > 0) {
            $sql .= " WHERE ";
            $colonnes = array_keys($params);
            $arrayWhere = [];
            foreach ($colonnes as $colonne) {
                // on rajoute chaque couple colonne = :param 
                // ex: "first_name =:first_name" 
                $arrayWhere[] = $colonne . "=:" . $colonne;
            }
            // créer un string, couples séparées par AND
            $sql = $sql . implode(" AND ", $arrayWhere);
        }

        // toujours, filtres et pas de filtres
        $requete = $this->bdd->prepare($sql);

        // s'il y a un filtre
        if (count($params) > 0) {
            foreach ($params as $colonneWhere => $valWhere) {
                $requete->bindValue(":" . $colonneWhere, $valWhere);
            }
        }

        // toujours, filtres et pas de filtres
        $requete->execute();
        $res = $requete->fetchAll(PDO::FETCH_ASSOC);

        return $res; // renvoyer un array d'objets même quand le résultat est un seul objet

    }

    // trop compliqué de faire un selecte de cette manière...
    // public function select ($id = "", $first_name = "" , $last_name = "", $last_update="" ) {

    //     // $sql = "SELECT  ........ :last_update = .....";

    // }
    // public function update()
}
