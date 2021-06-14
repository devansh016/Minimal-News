const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var schedule = require('node-schedule');
var news = require('./news.js');
const fs = require('fs');

const port = process.env.PORT || 80;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

//Serve static files
app.use(express.static(path.join(__dirname, 'public')));

//Refresh Data
app.use('/refresh', (req,res,next) => {
    news.news_get();
    res.status =200;
    res.send('refresh done');
});
// Serve Feedback page
app.use('/feedback', (req,res,next) => {
    res.sendFile(path.join(__dirname, "/" + "views" + "/" + "feedback.html"));
});
//Serve Index Page
app.use('/', (req,res,next) => {
    res.sendFile(path.join(__dirname, "/" + "views" + "/" + "index.html"));
});


var j = schedule.scheduleJob('1 1 * * * *', function() { //run every hour at minute 1 and 1 sec
    console.log("Index File Updation Request Send." );
    news.news_get(); 
});

app.listen(port);
console.log(`Listening at port ${port}`);

//Updating Data First Launch
news.news_get();