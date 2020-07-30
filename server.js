const express = require("express");

const handlebars = require("express-handlebars");

var PORT = process.env.PORT || 8000

const app = express();

var expressHandlebars = require('express-handlebars');


app.engine("handlebars", expressHandlebars({defaultLayout:"main"}))

app.set("view engine", "handlebars")

var routes = require("./burger/controllers/burgers_controller")

app.use(routes)

app.listen(PORT, function(){
    console.log("Listening on port:" ,PORT)
})

// const orm = require("./burger/config/orm")

// orm.selectBurgers()

// console.log(orm)

// orm.insertBurger("cheeseburger", true)

// orm.devouredBurger(1)