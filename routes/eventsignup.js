var app = require("express").Router()


app.get("/events",(req,res) => {
    res.render("eventsignup")
})


module.exports = app;
