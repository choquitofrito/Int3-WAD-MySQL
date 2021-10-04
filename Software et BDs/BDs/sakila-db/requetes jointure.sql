
-- obtenir toutes les infos de tous les pays et toutes les villes
SELECT * FROM country,city WHERE country.country_id = city.country_id
--                            AND country.country = "Argentina"
-- syntaxe avec inner join
SELECT * FROM country 
INNER JOIN city
ON country.country_id = city.country_id
-- WHERE country.country = "Argentina"


