<?php


class CountryManager
{

    public PDO $bdd;

    public function __construct(PDO $bdd)
    {
        $this->bdd = $bdd;
    }

    public function insert(Country $unCountry): void
    {
        $sql = "INSERT INTO country (country, last_update) " .
            "VALUES (:country, :last_update)";

        $requete = $this->bdd->prepare($sql); // renvoie un PDOStatement
        $requete->bindValue(":country", $unCountry->country);
        $requete->bindValue(":last_update", $unCountry->last_update);
        $requete->execute();
        $unCountry->hydrate(['id' => $this->bdd->lastInsertId()]);
    }

    public function delete(Country $unCountry)
    {
        $sql = "DELETE FROM country WHERE id=:id";
        $requete = $this->bdd->prepare($sql);
        $requete->bindValue(":id", $unCountry->getId());
        $requete->execute();
        var_dump($requete->errorInfo());
        var_dump($this->bdd->errorInfo());
    }


    // select reçoit un array de filtres et renvoie un array d'objets Country
    // c'est possible que l'array soit vide ou 
    // qu'il y ait un seul objet dans l'array
    public function select(array $filtres = []): array
    {
        $sql = "SELECT * FROM country";
        if (count($filtres) > 0) {
            $sql = $sql . " WHERE ";

            $arrayFiltresRequete = [];
            foreach ($filtres as $nomFiltre => $valeur) {
                $arrayFiltresRequete[] = $nomFiltre . "=:" . $nomFiltre;
            }
            $sql = $sql . implode(" AND ", $arrayFiltresRequete);
        }

        $requete = $this->bdd->prepare($sql);

        foreach ($filtres as $nomFiltre => $valFiltre) {
            $requete->bindValue(":" . $nomFiltre, $valFiltre);
        }

        $requete->execute();

        $res = $requete->fetchAll(PDO::FETCH_ASSOC);
        $arrayObjetsCountry = [];
        foreach ($res as $unCountryArray) {
            $arrayObjetsCountry[] = new Country($unCountryArray);
        }
        return $arrayObjetsCountry;
    }

    // on cherche un seul objet!
    public function selectParId(int $id): Country
    {
        $sql = "SELECT * FROM country WHERE id=:id";
        $requete = $this->bdd->prepare($sql);
        $requete->bindValue(":id", $id);
        $requete->execute();
        $arrayUnActeur = $requete->fetch(PDO::FETCH_ASSOC); // une seule ligne, un seul array
        return new Country($arrayUnActeur);
    }

    public function update(Country $unCountry): void
    {
        $sql = "UPDATE country SET country = :country, 
                                    last_update = :last_update
                    WHERE id=:id";
        $requete = $this->bdd->prepare($sql);
        $requete->bindValue(":id", $unCountry->getId());
        $requete->bindValue(":country", $unCountry->getCountry());
        $requete->bindValue(":last_update", $unCountry->getLast_update());
        $requete->execute();
    }
    
}
