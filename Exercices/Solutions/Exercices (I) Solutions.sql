-- 1
SELECT * FROM film;
-- 2
SELECT country.country FROM country; 
-- 3
SELECT first_name, last_name, email FROM customer

-- 6
SELECT * FROM customer WHERE last_name="White" AND first_name="Betty"
-- 6.1 tous les clients qui s'appellent Betty (prénom) en plus 
-- de tous les clients qui s'appellent Whie (nom)
SELECT * FROM customer WHERE last_name="White" OR first_name="Betty"
-- 6.2 tous les clients sauf Betty White
SELECT * FROM customer WHERE last_name <> "White" OR first_name <> "Betty"
-- alternative
SELECT * FROM customer WHERE NOT (last_name = "White" AND first_name = "Betty") ORDER BY first_name

-- Exemples LIKE
SELECT * FROM clients WHERE nom LIKE "B%" OR nom LIKE "D%"
SELECT * FROM clients WHERE nom = "B" OR nom = "D"
