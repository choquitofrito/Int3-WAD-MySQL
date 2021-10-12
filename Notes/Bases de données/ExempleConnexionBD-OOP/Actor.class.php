<?php

// classe qui réprésente un Actor, pas de méthodes d'accés à la BD
class Actor {

    public int $id;
    public string $first_name;
    public string $last_name;
    public string $last_update;

    public function __construct ($id ="", $first_name = "" , $last_name = "", $last_update =""){
        $this->id = $id;
        $this->first_name = $first_name;
        $this->last_name = $last_name;
        $this->last_update = $last_update;
    }

    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of first_name
     */ 
    public function getFirst_name()
    {
        return $this->first_name;
    }

    /**
     * Set the value of first_name
     *
     * @return  self
     */ 
    public function setFirst_name($first_name)
    {
        $this->first_name = $first_name;

        return $this;
    }

    /**
     * Get the value of last_name
     */ 
    public function getLast_name()
    {
        return $this->last_name;
    }

    /**
     * Set the value of last_name
     *
     * @return  self
     */ 
    public function setLast_name($last_name)
    {
        $this->last_name = $last_name;

        return $this;
    }

    /**
     * Get the value of last_update
     */ 
    public function getLast_update()
    {
        return $this->last_update;
    }

    /**
     * Set the value of last_update
     *
     * @return  self
     */ 
    public function setLast_update($last_update)
    {
        $this->last_update = $last_update;

        return $this;
    }
}