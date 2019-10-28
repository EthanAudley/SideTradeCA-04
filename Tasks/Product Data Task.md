# Prepraing product data

## Updating the Product table

Below is an example of how you can update the structure of your product table, here we are adding a column that will handle the product image using the type `bytea`

https://www.postgresql.org/docs/9.1/datatype-binary.html

```
UPDATE TABLE $Schema.product
    ADD COLUMN ( product_description TEXT );
```

To start to make the shopping website your own, you can update the product table and set the product name/description to be whatever we want it to be, so you can start to make this your own

```
-- Set the Sandal product to be your own
UPDATE $Schema.product SET product_name = '', product_description = '' WHERE id = 1;
```

## Introduction to views

A view is a way of putting logic for getting data out of a database in one specific place. Any select statement, including joins can live here. It allows you to not be forced to use big select statements inside your code, for example.

https://www.postgresql.org/docs/9.2/sql-createview.html

```
CREATE VIEW $Schema.vw_products AS

SELECT product_id,
       product_name,
       product_description
FROM $Schema.product
```

Then you can simply do `SELECT * FROM $Schema.vw_products`. Can you refactor your users controller to use a view?
