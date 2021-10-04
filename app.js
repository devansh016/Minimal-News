const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var schedule = require("node-schedule");
var news = require("./news.js");
const fs = require("fs");

const port = process.env.PORT || 80;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.set("view engine", "ejs");
app.set("views", "views");

//Serve static files
app.use(express.static(path.join(__dirname, "public")));

//Refresh Data
app.use("/refresh", (req, res, next) => {
  news.news_get();
  res.status = 200;
  res.send("refresh done");
});

// Serve Contributors Data
app.use("/contributors/data", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/" + "res" + "/" + "contributors.json"));
});
// Serve Contributors Page
app.use("/contributors", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/" + "views" + "/" + "contributors.html"));
});

// Serve Feedback page
app.use("/feedback", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/" + "views" + "/" + "feedback.html"));
});

//Serve Index Page
app.use("/:county?", (req, res, next) => {
  news.news_get(req.params.county);
  var article = fs.readFileSync("res/newsArticles.txt", "utf8");
  res.render("index.ejs", {
    data: article,
  });
});

var j = schedule.scheduleJob("1 1 * * * *", function () {
  //run every hour at minute 1 and 1 sec
  console.log("Index File Updation Request Send.");
  news.news_get();
});

app.listen(port);
console.log(`Listening at port ${port}`);

//Updating Data First Launch
news.news_get();
