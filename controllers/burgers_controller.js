const express = require('express');
var router = express.Router(); 

const burger = require('../models/burger');

const orm = require('../config/orm');

var router = express.Router();

router.get("/", (req, res)=>{
    res.redirect("/burgers");
})
router.get("/burgers",(req,res)=>{
    burger.all((data)=>{
        res.render("index",{
            burger_data: data
        })
    })
})

router.put("/burgers/:burger_id",(req,res)=>{
    let burger_id = req.params.burger_id
    burger.update(burger_id, (data)=>{
        console.log(data)
        res.send("sucess")
    })
});



router.post("/burgers/create", (req,res)=>{
    let burger_name = req.body.burger_name
    // console.log(req.params, req.body)

    burger.create(burger_name, ()=>{
        res.redirect("/burgers")
    })

});

module.exports = router