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


//To Send Favicon
app.use('/favicon.ico', express.static('res/favicon.png'));

//To Get FeedBack File
app.use('/admin/feedback', (req,res,next) => {
    res.sendFile(path.join(__dirname, 'res/feedback.txt'));
});

//Feedback API
app.use('/api/feedback', (req,res,next) => {
    var fb = JSON.stringify(req.body);
    fs.appendFileSync('res/feedback.txt',`\n ${c_date}: ${fb}`)

    //Logs Updated
    console.log(fb);
    
    res.status = 200;
    res.redirect('/');
    return res.send();
});

//To server CSS File
app.get('/css/index.css', function(req, res) {
    res.sendFile(__dirname + "/" + "res" + "/" + "css" + "/" + "style_index.css");
});
app.get('/css/feedback.css', function(req, res) {
    res.sendFile(__dirname + "/" + "res" + "/" + "css" + "/" + "style_feedback.css");
});

//To Send Feedback File
app.use('/feedback', (req,res,next) => {
    res.sendFile(path.join(__dirname, "/" + "views" + "/" + "feedback.html"));
});

//Refresh Data
app.use('/refresh', (req,res,next) => {

    news.news_get();
    res.status =200;
    res.send('refresh done');

    //Logs Updated
    console.log("Refresh Done.");
});

app.use('/', (req,res,next) => {
    res.sendFile(path.join(__dirname, "/" + "views" + "/" + "index.html"));
});

var j = schedule.scheduleJob('1 1 * * * *', function() { //run every hour at minute 1 and 1 sec

    //Logs Updated
    console.log("Index File Updation Request Send." );

    news.news_get(); 
});

app.listen(port);
console.log(`Listening at port ${port}`);
//Updating Data First Launch
news.news_get();