USE bamazon;

INSERT INTO products 
(product_name, department_name, price, stock_quantity)
VALUES
("Swiffer Sweeper", "Household", 25.79, 17),
("Toilet Paper - 12 count", "Household", 7.99, 500),
("Blue Buffalo Dog Food - #40 Bag", "Pet", 47.95, 20),
("Doggy Bags - 20 count", "Pet", 3.50, 35),
("Premium Dog House", "Pet", 2400.00, 3);

SELECT * FROM products;
