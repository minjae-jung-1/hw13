const express = require("express");

const path = require('path');

const handlebars = require("express-handlebars");

const bodyparser= require('body-parser')

var PORT = process.env.PORT || 8000

const app = express();

app.use(bodyparser());

app.use(express.static("public"));


var expressHandlebars = require('express-handlebars');


app.engine("handlebars", expressHandlebars({defaultLayout:"main",layoutsDir
: path.join(__dirname + "/views/layouts")}))

app.set("view engine", "handlebars")

var routes = require("./controllers/burgers_controller")


app.use(routes)

app.listen(PORT, function(){
    console.log("Listening on port:" ,PORT)
})

// const orm = require("./burger/config/orm")

// orm.selectBurgers()

// console.log(orm)

// orm.insertBurger("cheeseburger", true)

// orm.devouredBurger(1)