-- fonctions d'aggregation (COUNT, SUM, AVG, MAX, MIN...)

-- count compte si le champ choisi n'est pas null
SELECT COUNT(actor.actor_id) FROM actor;

SELECT COUNT(customer.customer_id) FROM customer;
-- si on compte les emails on obtient moins
-- car il y a de clients qui n'ont pas un mail
SELECT COUNT(customer.email) FROM customer;

SELECT COUNT(*)
FROM customer;








