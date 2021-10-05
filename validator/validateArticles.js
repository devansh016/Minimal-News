const isEmpty = require('./isEmpty');

module.exports= validateArticles = (article) => {
  
    if (isEmpty(article.title))
        article.title = "";
    if (isEmpty(article.description))
        article.description = "";
    if (isEmpty(article.url))
        article.url = "";
    if (isEmpty(article.publishedAt))
        article.publishedAt = "";
    
    if (isEmpty(article.source)) {
        article.source = "";
        article.name = "";
    } else {
        if (isEmpty(article.source.name)) {
            article.source.name = "";
        }
    }
        

    return article;


}
