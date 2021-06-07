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

//To Get Logs File
app.use('/admin/logs', (req,res,next) => {
    res.sendFile(path.join(__dirname, 'res/logs.txt'));
});
//To Get FeedBack File
app.use('/admin/feedback', (req,res,next) => {
    res.sendFile(path.join(__dirname, 'res/feedback.txt'));
});

//Feedback API
app.use('/api/feedback', (req,res,next) => {
    var fb = JSON.stringify(req.body);
    fs.appendFileSync('res/feedback.txt',`\n ${c_date}: ${fb}`)
    console.log(fb);
    res.status = 200;
    res.redirect('/');
    return res.send();
});

//To Send Feedback File
app.use('/feedback', (req,res,next) => {
    res.sendFile(path.join(__dirname, 'feedback.html'));
});

app.use('/', (req,res,next) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

var j = schedule.scheduleJob('1 1 * * * *', function() { //run every hour at minute 1 and 1 sec
    //Log File Updated
    var c_date =  new Date();
    fs.appendFileSync('res/logs.txt',`${c_date}: Index File Updation Request Send.\n`);

    news.news_get; 
});

app.listen(port);
console.log(`Listening at port ${port}`);

//Log File Updated
var c_date =  new Date();
fs.appendFileSync('res/logs.txt',`${c_date}: Listening at port ${port}\n`);