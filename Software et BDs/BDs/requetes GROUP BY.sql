SELECT film.rating, COUNT(film.film_id)
FROM film
GROUP BY film.rating;

-- SELECT nationalite, COUNT(id)
-- FROM stagiaires
-- GROUP BY nationalite

SELECT film.language_id, COUNT(film.film_id) 
FROM film 
GROUP BY film.language_id;



SELECT language.name, COUNT(film.film_id) 
FROM film 
INNER JOIN language
ON film.language_id = language.language_id
GROUP BY language.name;


SELECT country.country, COUNT (country.country_id)
FROM country
INNER JOIN city
ON country.country_id = city.country_id
GROUP BY country.country;



SELECT country.country, COUNT (country.country_id) AS decompteVilles
FROM country
INNER JOIN city
ON country.country_id = city.country_id
GROUP BY country.country
ORDER BY decompteVilles DESC




















