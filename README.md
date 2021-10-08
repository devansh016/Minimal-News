<p align="center"><img src="res/images/banner.png"></img> </p>

---

[Minimal News](https://minimal-news.herokuapp.com/) is a text only news aggregator with the following objectives:

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

## Make Your First Contribution

1. Fork this repository, **star this repository** , and clone it onto your machine.
   ```
   git clone https://github.com/<my_account>/Minimal-News.git
   ```
1. Create a new branch and switch to it.

   ```
   cd Minimal-News
   git checkout -b <new_branch_name>
   ```

1. Make changes to the code on that branch, add your details in [res/contributors.json](contributors.json) and commit.
1. Push the commit to GitHub.

   ```
   git push origin <new_branch_name>
   ```

1. Make a pull request on GitHub.

## User Interface

### Light Mode

![Minimal News Home Light](/res/images/minimalnews_light.png "Minimal News Homepage Light")

![Minimal News Contributors Light](/res/images/contributors_light.png "Minimal News Contributors Light")

### Dark Mode

![Minimal News Home Dark](/res/images/minimalnews_dark.png "Minimal News Homepage Dark")

## License

Distributed under the MIT License. See [LICENSE](/LICENSE) for more information.
