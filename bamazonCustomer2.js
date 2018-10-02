var mysql = require("mysql");

// Load the NPM Package inquirer
var inquirer = require("inquirer");

var connection =mysql.createConnection({
    host: "localhost",
    
    // My port;
port: 3306,

// My username
user: "root",

// My Password
password: "root",
database: "bamazon_DB"
});

connection.connect(function(err){
    if (err) throw err;
    runShop();
});

function runShop() {
    var query = connection.query("SELECT * from products", function(err, res) {
        if (err) throw err;
            inquirer
            .prompt([
                {
                    name: "cosmeticBrands",
                    type: "rawlist",
                    choices: function() {
                                var selectionArray = [];
                                    for (var i = 0; i < res.length; i++) {
                                    selectionArray.push(res[i].product_name);
                }
                        return selectionArray;
                },                                              
                    message: "Which cosmetic brand would you like to purchase today?"
                },
                {
                    name: "purchaseQuantity",
                    type: "input",
                    message: "Type in the quantity for your purchase?"
                }
            ]).then(function(answer) {

            console.log(" You selected " + answer.cosmeticBrands + " with a quantity of " + answer.purchaseQuantity);
            connection.query(
                "UPDATE stock_quantity SET ? WHERE ?",
                [
                  {
                    stock_quantity: res[i].stock_quantity - answer.purchaseQuantity
                  },
                  {
                    id: res[i].item_id
                  }
                ],
                function(error) {
                  if (error) throw err;
                  console.log("Your order has been placed successfully!");
                  connection.end();
            });
        } 
    )
}
    )
}
