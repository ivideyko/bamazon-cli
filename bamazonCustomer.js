const MYSQL = require("mysql");
const INQUIRE = require("inquirer");
const TABLE = require("cli-table");

const DB = MYSQL.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

DB.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + DB.threadId + "\n");

  listProducts();
});

function purchase() {

    INQUIRE
      .prompt([
        {
          name: "productId",
          type: "input",
          message: "Enter the ID of the product you would like to buy:"
        },
        {
          name: "quantity",
          type: "input",
          message: "Enter quantity to buy:"
        }
      ])
      .then(function(answer) {
        DB.query("SELECT * FROM products WHERE item_id = ?", answer.productId, function(err, res) {
          if (err) throw err;

          var productId = res[0].item_id;
          var quantity = res[0].stock_quantity;
          var product = res[0].product_name;
          var total = (res[0].price * answer.quantity).toFixed(2);
          var newStock;

          // If user wants more than we have
          if (answer.quantity > quantity) {
            console.log("\nSorry, our stock is too low for this order.");
            console.log("We have " + quantity + " " + product + "(s) in stock at this time.\n"
            );

            listProducts();
          } else {

            newStock = quantity - answer.quantity;
            DB.query("UPDATE products SET ? WHERE ?", 
              [
                {
                  stock_quantity: newStock
                },
                {
                  item_id: productId
                }
              ], 
              function(err, res) {
                if (err) throw err;

                console.log("\nYou purchased " + answer.quantity + " " + product + "(s).");
                console.log("Your total for this order is: $" + total);
                console.log("Thank you for shopping at Bamazon.com.");
            });
            DB.end();
          }
      });
  });
}

function listProducts() {

  console.log("Welcome to Bamazon.com!\n");
  console.log("Here is what we have for sale:\n");

  DB.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    var table = new TABLE({
      head: ['ID', 'PRODUCT', 'DEPARTMENT', 'PRICE', 'STOCK'],
      colWidths: [8, 40, 40, 9, 7]
    });

    for (var i = 0; i < res.length; i++) {
      table.push([
        res[i].item_id, 
        res[i].product_name, 
        res[i].department_name, 
        res[i].price, 
        res[i].stock_quantity]);
    }

    console.log(table.toString());
    console.log("\n");

    purchase();
  });
}
