CREATE TABLE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(50) NULL,
	price DECIMAL(19,4) NULL,
	stock_quantity INTEGER(5) NULL,
	PRIMARY KEY (item_id)
);
