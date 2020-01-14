// Set Express
var express = require("express");
var app = express();

// Set Port for hosted or local environments
var PORT = process.env.PORT || 8080;

// Setup middleware so it can parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

// Sets the routes js to use in our Express app
app.use(routes);

// Start our server so that it can begin listening for client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
