const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/contributors/data", contributors_data);
router.get("/contributors", contributors);
router.get("/feedback", feedback_page);
router.get("/", home_page);

// Serve Contributors Data
function contributors_data(req, res, next) {
  res.sendFile(path.join(__dirname, "../" + "res" + "/" + "contributors.json"));
}

// Serve Contributors Page
function contributors(req, res, next) {
  res.sendFile(
    path.join(__dirname, "../" + "views" + "/" + "contributors.html")
  );
}

// Serve Feedback page
function feedback_page(req, res, next) {
  res.sendFile(path.join(__dirname, "../" + "views" + "/" + "feedback.html"));
}

//Serve Home Page
function home_page(req, res, next) {
  var article = fs.readFileSync(
    path.join(__dirname, "../" + "res" + "/" + "newsArticles.txt"),
    "utf8"
  );
  res.render("index.ejs", {
    data: article,
  });
}

module.exports = router;
