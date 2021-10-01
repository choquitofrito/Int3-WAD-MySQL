# Exercices basiques de base de données

#### CRUD de base

-   Créez une page où on affichera les informations de tous les livres

-   Créez une page qui permet de chercher un livre

-   Créez une page contenant un formulaire où on peut saisir des
    informations sur un nouveau livre pour l\'insérer dans la BD

-   Modifiez la page d\'affichage (ou créez une nouvelle) de livres pour
    rajouter un bouton \"update\" à côté de chaque livre. Quand on
    clique sur ce bouton, on affichera les données du livre choisi dans
    une nouvelle page **sous la forme d\'un formulaire**. On pourra
    modifier le contenu de chaque champ et faire submit pour mettre à
    jour le livre dans la BD

-   Modifiez la page d\'affichage pour rajouter un bouton \"delete\" à
    côté de chaque livre. Si on clique sur ce bouton, le livre sera
    effacé de la BD et on reviendra sur la page d\'affichage

####  Modification d\'un template

-   Sur le template \"digitco\" (faites une copie), modifiez le code
    pour afficher trois images en utilisant du PHP et sans répéter du
    code. Les images doivent provenir d\'une bd et seront stockées dans
    un dossier \"images\" dans le serveur. Créez une BD simple contenant
    un tableau

# Exercices base requêtes SQL

## Requêtes sans filtre

1.  Obtenez la liste de clients, toutes les informations

2.  Obtenez le nom et le prénom de tous les clients

3.  Obtenez le titre et le prix de tous les livres

4.  Obtenez tous les noms de clients en majuscule (UPPER)

## Requêtes avec filtre simple (WHERE)

5.  Obtenez l\'adresse de tous les clients qui s\'appellent \'Jones\'

6.  Obtenez tous les livres de la collection \"Asterix\"

7.  Obtenez tous les livres qui coûtent plus de 20 euros

8.  Obtenez la liste de livres en ordre alphabétique (ascendant) en
    utilisant \"ORDER BY\"

<https://www.w3schools.com/sql/sql_orderby.asp>

9.  Obtenez tous les clients dont le nom commence par 'J' (utilisez
    LIKE)

<https://www.w3schools.com/sql/sql_like.asp>

10. Obtenez tous les clients dont le nom contient la lettre 'e'

## Requêtes avec filtre AND et OR (WHERE)

11. Obtenez tous les livres qui coûtent entre 10 et 20 euros

12. Obtenez tous les livres qui coûtent moins de 13 euros et les livres
    qui coûtent plus de 25 dans la même requête

13. Obtenez tous les livres de la collection \"Asterix\" qui coûtent
    moins de 20 euros

14. Obtenez tous les livres publiés à partir de 2008 (y inclus 2008)

Suivez cet schéma (les dates doivent être mises entre guillemets et le
format doit être respecté) :

[SELECT](http://localhost/phpmyadmin/url.php?url=https://dev.mysql.com/doc/refman/5.5/en/select.html)
\* FROM \`emprunt\` WHERE date_emprunt \> \"2008/01/01\"

15. Obtenez les livres empruntés pendant le mois de Février de 2015
    (MONTH : <https://www.w3schools.com/sql/func_mysql_month.asp>)

16. Obtenez les livres empruntés après le 1^er^ janvier 2015 (le plus
    récent le premier)

## Requêtes avec plusieurs tableaux (jointures -- JOIN)

17. Obtenez les titres des livres empruntés par chaque client

18. Obtenez une liste de tous les exemplaires de chaque livre

19. Considérez qu'un emprunt peut durer deux semaines au maximum.
    Obtenez une liste des exemplaires empruntés et des dates limite des
    emprunts (utilisez ADDDATE)

## Requêtes diverses

20. Obtenez le nombre de clients avec COUNT()
    <https://www.w3schools.com/sql/func_mysql_count.asp>

21. Obtenez le nombre de livres qui se trouvent à la bibliothèque

22. Obtenez le nombre de clients dont le nom contient la lettre 'b'

23. Obtenez le nombre d'exemplaires disponibles

24. Obtenez le nombre d'exemplaires disponibles d'un titre de votre
    choix

25. Obtenez tous les livres dont le titre commence par 'V'

26. Obtenez le nombre d'exemplaires de chaque livre (afficher le code du
    livre, pas besoin du titre)

27. Obtenez le nombre d'exemplaires de chaque livre (afficher le titre
    du livre aussi)

28. Obtenez la liste d'exemplaires qui ont été empruntés cette année

29. Obtenez le nombre d'emprunts par année

30. Obtenez le nombre de emprunts réalisés par chaque client
