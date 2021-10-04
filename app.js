const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var schedule = require("node-schedule");
var news = require("./controllers/newsController");
const port = process.env.PORT || 80;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.set("view engine", "ejs");
app.set("views", "views");

//Serve static files
app.use(express.static(path.join(__dirname, "public")));

//Main Route
const mainRoute = require("./routes/mainRoute");
app.use("/", mainRoute);

var j = schedule.scheduleJob("1 1 * * * *", function () {
  //run every hour at minute 1 and 1 sec
  console.log("Index File Updation Request Send.");
  news.news_get();
});

app.listen(port);
console.log(`Listening at port ${port}`);

//Updating Data First Launch
news.news_get();
