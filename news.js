const fs = require('fs');
const fetch = require('node-fetch');
require('dotenv').config();
const newsSize = process.env.PAGE_SIZE;
const apiKey = process.env.NEWS_API;
const country = process.env.NEWS_COUNTRY;

function news_get () {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&pageSize=${newsSize}`, requestOptions)
      .then(response => response.json())
      .then(json => {
            let pr;
            pr="";
            for (var i=0; i < newsSize; i++){
                var article_title = json.articles[i].title;
                var article_desc = json.articles[i].description;
                var article_url = json.articles[i].url;
                var article_src = json.articles[i].source.name;
                var article_time = json.articles[i].publishedAt;
  
                //hours calculate
                var date2 = Date.parse(article_time);
                var date1 =  new Date();
                var hours = Math.round(Math.abs(date1 - date2)/ (1000 * 60 * 60 ));
                if(hours==0)
                    hours =1;
                
                pr += `<div class="news row">
                <a href="${article_url}" target="_blank" class="news card">
                <h3 class="news">${i+1}<!-- -->. <!-- -->${article_title}</h3>
                <div class="news byline"><span class="news source">${article_src}</span>
                <span class="news timeago"><time dateTime="${article_time}" title="${article_time}">${hours} hours ago</time>
                </span></div><p class="news">${article_desc}</p></a></div>`;
            }
            fs.writeFileSync('res/newsArticles.txt', pr , function (err) {
                if (err) throw err;
            });
        }).catch((err) => {
        console.log(err);
        })
      .catch(error => console.log('error', error));
}

module.exports = { news_get };
