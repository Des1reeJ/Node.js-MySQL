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
    inquirer.prompt({
            type: "list",
            name: "cosmeticBrands",
            message: "Which cosmetic brand would you like to purchase today?",
            choices: ["NYX Cosmetics", "MAC Cosmetics", "Anastasia Beverly Hills", "Loreal", "Rimmel London", "Makeup Forever", "NARS", "Mabelline New York"]
})
.then(function(answer) {
    var query = "SELECT * FROM products";
    connection.query(query, { product: answer.cosmeticBrands }, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log("Product " + res[i].product + " || Name: " + res[i].name + " || Price: " + res[i].price + " || Quantity: " + res[i.quantity]);
      }


})
})
}


// .then(function(answer) {
//     switch (answer.cosmeticBrands) {
//     case "NYX Cosmetics":
//     nameSearch();
//     break;
// // select from statement from database
//     case "find products by department name":
//     departmentSearch();
//     break;

//     case "Find products by price":
//     priceSearch();
//     break;

//     case "Find products by stock quanity":
//     quantitySearch();
//     break;

//     }
// });


   
connection.end();




// create a Nodeapplication called bamazonCustomer.js. Running this application will first display all of the items available for sale. 
// Include the ids, names, and prices of products for sale.
// inquirer.prompt([
// {
//     type: "list",
//     name: "cosmeticBrands",
//     message: "Which cosmetic brand would you like to purchase today?",
//     choices: ["NYX Cosmetics", "MAC Cosmetics", "Anastasia Beverly Hills", "Loreal", "Rimmel London", "Makeup Forever", "NARS", "Mabelline New York"]
//   },


// ]).then(function(user) {
//       // The app should prompt user with two new messages; first should ask them what product they wish to buy
// });



//   user var Query to set up mySQL database 