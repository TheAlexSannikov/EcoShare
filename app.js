var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
   res.render("index");
});

app.get("/about", function(req, res) {
   res.render("about");
});

app.get("/suggestions", function(req, res) {
   res.render("suggestions");
});

app.get("/login", function(req, res) {
   res.render("login");
});

app.get("/signup", function(req, res) {
   res.render("signup");
});


app.listen(3000, function() {
   console.log("Server has started.");
});
