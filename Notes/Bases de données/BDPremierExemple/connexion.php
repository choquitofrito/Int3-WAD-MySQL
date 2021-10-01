<?php
// 1. Configurer la connexion
include "./config/db.php";
	

$bdd = new PDO(DBDRIVER.':host='.DBHOST.';port='.DBPORT.
	';dbname='.DBNAME.';charset='
	.DBCHARSET,DBUSER,DBPASS); 


?>