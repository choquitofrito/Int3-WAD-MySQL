# Projet exemple COVID

Nous voulons réaliser un mini-projet permettant d'accéder à des informations concernant l'épidemie de COVID.

Dans ce projet, nous voulons utiliser un ensemble de données concernant le virus covid dans le monde. Nous disposons d'un ensemble de données de l'OMS contenant des données sur le nombre d'infections et de décès dans différentes régions. Notre objectif est de trouver des moyens de montrer ces informations correctement.

Nous commencerons par des recherches simples (basées sur de formulaires) et plus tard nous créerons des graphiques montrant l'évolution du virus, comparant les données de différents pays (choisis ou non par un utilisateur), etc... C'est plus un projet libre qu'un devoir fixé, donc chaque élève peut chercher autant qu'il peut en utilisant son imagination.

<br>

## Information technique:

<br>

- La base de données à importer (déjà en format .sql) se trouve dans **bds**. Importez aussi **canvasjs_db.sql** pour pouvoir lancer les exemples de CanvasJs.

- Le dossier pour le projet en soi sera **ProjectCovid**. Créez votre propre dossier, n'utilisez pas le dossier cloné du repo.
Ici on propose d'avoir un dossier **pages** à l'intérieur et le dossier **assets** (il contient déjà bootstrap, jQuery et fontawesome)

- Nous utiliserons une librairie de JS pour créer de graphiques (CanvasJS). La librairie est déjà téléchargée, et des exemples d'utilisation en PHP se trouvent dans le dossier **PHPCanvasJS-exemples**. Vous pouvez les visualiser en navigant dans le serveur:

https://localhost/Int3-WAD-MySQL/Exercices/CovidBD/PHPCanvasJS-exemples/chart-types/
  
    Note: n'utilisez la sidebar pour naviguer, les liens ne sont pas adaptés

Observez le code de **bar.php** pour avoir une idée du fonctionnement de la librairie (si vous voulez aller loin il faudra lire la doc, mais ce n'est pas strictement indispensable dans notre contexte).

**On profitera de ces exemples pour créer nos propres pages dans le site**. Le code n' est pas compliqué, essayez de le comprendre. Commencez, par exemple, par le graphique de barres. Observez qu'il faut uniquement créer un array contenant de données pour chaque serie de données **en PHP**. La configuration et création du graphique se fait toujours en **.js**, plus bas dans la page.
JS peut utiliser les données genérées en PHP car on génére les données en JSON grâce à **echo (json_encode ($arrayPHP))**.


<br>

# Actions à implementer

<br>

### Sans graphiques

<br>

1. Formulaire pour rechercher, à partir d'une liste déroulante de pays, le nombre de cas accumulé du pays choisi. Obtenir uniquement le chiffre le plus récent (LIMIT 1 et tri doivent vous aider...)
   
2. Formulaire pour rechercher les pays qui depassent un certain nombre d'infections accummulées (input dans le form)

3. Formulaire pour obtenir la proportion entre les infections et le déces pour chaque pays. Triez le résultat
   
4. Formulaire pour rechercher le nombre de decés par année d'un pays (choisir l'année et le pays d'une liste déroulante) 

5. Formulaire pour rechercher le nombre d'infections par région et par année (choisir la région et l'année, on affichera les résultats pour tous les pays de la région) 

6. Formulaire pour rechercher, à partir d'une liste déroulante de regions, le nombre de cas accumulé pour cette région

7. Inventez vous mêmes de requêtes qui pourraient s'avérer utiles dans une recherche

<br>

## Graphiques

<br>

Le but de cette section est de savoir utiliser un minimum CanvasJS. Profitez des exemples déjà faits (dossier  PHPCanvasJS-exemples/chart-types) pour apprendre comment JS et PHP interagissent, ainsi que pour manipuler les structures de données que vous recevez de la BD. Utilisez votre imagination, vous pouvez commencer par faire ces exemples: 

<br>

1. Nombre d'infections par région (graphique à barres)

2. Nombre d'infections par année dans tout le monde (graphique à barres)

3. Dix premiers pays par nombre d'infections. Pour une utilisation réelle, cela devrait être calculé en pourcentage, mais nous n'avons pas la population de chaque pays
   
4. Choisir un pays et voir l''evolution des infections par année
   
5. Graphique circulaire avec les infections par région

Vous pouvez inventer tous les exemples que vous voulez... c'est une excuse pour apprendre la manipulation de données et les requêtes d'une manière plus divertissante et utile.



