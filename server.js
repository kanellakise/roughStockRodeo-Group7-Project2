var express = require('express');
var bodyparser = require('body-parse');
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/signup',function(req,res){
 res.write('<html>');
res.write('<form action="http://localhost:3000/signup_submit" method="POST">');
res.write('<input type="text" name="full_name" placeholder="Enter Full Name"> <br>'); 
res.write('<input type="text" name="home_state" placeholder="Enter Home State"> <br>'); 
res.write('<input type="event-type" name="event" placeholder="Enter Event"> <br>'); 
res.write('<button type="submit">Create New </button><br>');
res.write('<a href=http://localhost:3000/signin><button type="button">Submit</button></a>');
res.write('</form>');
res.write('</html>');
});

app.post('signup_submit',function(req,res){

console.log(req.body);
});
app.listen(3000);
