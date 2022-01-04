var app = require("express").Router()

app.use("/", require("./homeroutes"));
app.use("/events",require("./eventsignup"))


modules.exports = app;
