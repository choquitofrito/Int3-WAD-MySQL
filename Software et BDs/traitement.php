<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        echo "on reçoit le mail: ". $_GET['adresseEmail'];
        // connectez BD...

        // on devrait carrement vérifier ici si la donnée a le pattern d'une adresse mail
        
        // si l'adresse est ok, continuer
        // autrement, ré-diriger vers la page précédante
        // header();
    ?>
</body>
</html>
