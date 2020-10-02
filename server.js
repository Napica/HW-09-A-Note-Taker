// DEPENDENCIES 

const express = require("express");
const path = require("path");

// EXPRESS CONFIG
var app = express();

// PORTS
var PORT = process.env.PORT || 3000;

// MIDDLEWARE

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// location of static files 
app.use(express.static("public"));

// Router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener
app.listen(PORT, function () {
  console.log("App is listening on PORT: " + PORT);
});
