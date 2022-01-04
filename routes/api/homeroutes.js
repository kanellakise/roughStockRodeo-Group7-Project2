var app = require("express").Router()


app.get("/",(req,res) => {
    res.render("homepage")
})


module.exports = app;
