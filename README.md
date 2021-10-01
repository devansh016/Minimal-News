# Minimal-News

Minimal News is a text only news aggregator with the following objectives:
1. Clean headlines: Clean, clickbait-free headlines that get straight to the point.
2. Fast: The news data is refreshed every 60 mins and and static pages are served.
3. Minimal: No images, comments, or any other distractions.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.
Also create the .env file and add environment variables as mentioned below.

```sh
git clone git@github.com:devansh016/Minimal-News.git
npm install
npm start
```
## Environment Variable Required
```sh
NEWS_API = "1234567" #Get your api from newsapi.org
PAGE_SIZE = 20       #Number of news articles
NEWS_COUNTRY = "in"  #Country code
```

Your app should now be running on [localhost](http://localhost/) at port 80.

## User Interface

### Light Mode

![Minimal News Home Light](/res/images/minimalnews_light.png "Minimal News Homepage Light")

![Minimal News Feedback](/res/images/feedback_light.PNG "Minimal News Feedback Light")

### Dark Mode

![Minimal News Home Dark](/res/images/minimalnews_dark.png "Minimal News Homepage Dark")

![Minimal News Feedback](/res/images/feedback_dark.PNG "Minimal News Feedback Dark")

