
-- obtenir toutes les infos de tous les pays et toutes les villes
SELECT * FROM country,city WHERE country.country_id = city.country_id
--                            AND country.country = "Argentina"

-- syntaxe avec inner join. L'ordre des tableaux dans le join n'est pas important
SELECT * FROM country 
INNER JOIN city
ON country.country_id = city.country_id
-- WHERE country.country = "Argentina"
-- AND ....

-- on peut selectionner les colonnes dont on a besoin
SELECT country.country, city.city FROM city
INNER JOIN country
ON country.country_id = city.country_id
-- etc... 

SELECT film.title FROM film 
INNER JOIN film_actor
ON film.film_id = film_actor.film_id
INNER JOIN actor
ON film_actor.actor_id = actor.actor_id
WHERE actor.last_name = "COSTNER"








