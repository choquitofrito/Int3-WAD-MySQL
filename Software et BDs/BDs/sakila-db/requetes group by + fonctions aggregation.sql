-- fonctions d'aggregation (COUNT, SUM, AVG, MAX, MIN...)

-- count compte si le champ choisi n'est pas null
SELECT COUNT(actor.actor_id) FROM actor;

SELECT COUNT(customer.customer_id) FROM customer;
-- si on compte les emails on obtient moins
-- car il y a de clients qui n'ont pas un mail
SELECT COUNT(customer.email) FROM customer;

SELECT COUNT(*)
FROM customer;

SELECT AVG(film.rental_rate) FROM film;
-- pas de problèmes si les couleurs changent,
-- souvent ce sont de mots reservées du langage
SELECT length FROM film;

SELECT SUM(film.rental_rate) FROM film;
SELECT MAX(film.rental_rate) FROM film;
SELECT COUNT(film.rental_rate) FROM film;

-- Exemple de sous-requête
SELECT film.title, film.rental_rate FROM film WHERE 
film.rental_rate = 
(SELECT MAX(film.rental_rate) FROM film);










