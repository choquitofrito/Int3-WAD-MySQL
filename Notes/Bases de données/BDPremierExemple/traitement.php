<?php
include "./config/db.php";
	
	
$nom = 'Homère';

	
try {
	$bdd = new PDO(DBDRIVER.':host='.DBHOST.';port='.DBPORT.
		';dbname='.DBNAME.';charset='
		.DBCHARSET,DBUSER,DBPASS); 
}
catch (Exception $e){
	die ('Erreur: '.$e->getMessage());
}


	
$sql= "SELECT * FROM Auteur WHERE nom= :nom";

$statement=$bdd->prepare($sql);
$statement->bindValue(":nom",$nom);
$statement->execute();

$tableau = $statement->fetchAll(PDO::FETCH_ASSOC);

foreach ($tableau as $ligne) {
	foreach ($ligne as $cle => $valeur){
		echo $cle. " : ".$valeur . "<br>";
	}
}
	
	
?>


	
