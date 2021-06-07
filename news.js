const fs = require('fs');
const fetch = require('node-fetch');
const newsSize = 20;

function news_get () {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=906a01de90974496bab3497d0a6f281d&pageSize=${newsSize}`, requestOptions)
      .then(response => response.json())
      .then(json => {
            let pr;
            pr="";
            for (var i=0; i<newsSize; i++){
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
                console.log('Data Fetched and Saved.');
            });

            //CLEARING INDEX FILE
            fs.writeFileSync('index.html',' ');

            //Updating Data IN index file
            const data1 = fs.readFileSync('res/news1.txt', 'utf8');
            const newsArticles = fs.readFileSync('res/newsArticles.txt', 'utf8');
            const data2 = fs.readFileSync('res/news2.txt', 'utf8');
            fs.appendFileSync('index.html', data1);
            fs.appendFileSync('index.html', newsArticles);
            fs.appendFileSync('index.html', data2);

            //Log File Updation
            var c_date =  new Date();
            fs.appendFileSync('res/logs.txt',`${c_date}: Index File Updated.\n`);

        }).catch((err) => {
        console.log(err);
        })
      .catch(error => console.log('error', error));
}

module.exports = { news_get };