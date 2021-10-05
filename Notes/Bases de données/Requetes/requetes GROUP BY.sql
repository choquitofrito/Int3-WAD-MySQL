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

-- exercice 30 : nombre de locations par client
SELECT rental.customer_id, COUNT(rental.rental_id) FROM rental
GROUP BY rental.customer_id;






SELECT country.country, COUNT (country.country_id)
FROM country
INNER JOIN city
ON country.country_id = city.country_id
GROUP BY country.country;



SELECT country.country, COUNT (city.country_id) AS decompteVilles
FROM country
INNER JOIN city
ON country.country_id = city.country_id
GROUP BY country.country
HAVING decompteVilles > 30
ORDER BY decompteVilles DESC;


SELECT film.rental_rate, COUNT (film.film_id) 
FROM film
GROUP BY film.rental_rate
HAVING film.rental_rate < 4;

-- filtre après le regroupement (HAVING)
-- plus lourd
SELECT film.rental_rate, COUNT (film.film_id) 
FROM film
GROUP BY film.rental_rate
HAVING film.rental_rate < 4;

-- filtre avant le regroupement, plus efficace
SELECT film.rental_rate, COUNT (film.film_id) 
FROM film
WHERE film.rental_rate < 4
GROUP BY film.rental_rate;




















