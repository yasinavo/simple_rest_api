const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//set up express app
const app = express();


//connect mongoDB
mongoose.connect('mongodb://localhost/member');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api',require('./routes/api'));

//middleware for error handling
app.use(function (err,req,res,next) {
    res.status(422).send({error:err.message});
});


app.listen(process.env.port||4000,function () {
    console.log('AA');
});

