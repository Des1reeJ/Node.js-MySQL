DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect bamazon_db --
USE bamazon_db;

-- Creates the table "" within bamazon_db --
CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (85) NOT NULL,
department_name VARCHAR (40) NOT NULL,
price DECIMAL (20,2) NOT NULL,
stock_quantity INT NULL,
PRIMARY KEY (item_id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NYX Cosmetics", "Beauty", 45.99, 1);

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("MAC Cosmetics", "Beauty", 60.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Anastasia Bevery Hills", "Beauty", 100.99, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Loreal", "Beauty", 15.75, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rimmel London", "Beauty", 70.99, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Makeup Forever", "Beauty", 60.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NARS",  "Beauty",  150.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mabelline New York", "Beauty", 20.75, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chanel", "Beauty", 170.80, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Estee Lauder", "Beauty",  50.99, 60);




