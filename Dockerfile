# Our node app is based on `18-alpine` image 
FROM node:18-alpine

# Setting up the environment variables needed:
ENV NEWS_API = "1234" \
    PAGE_SIZE = 20 \
    NEWS_COUNTRY = "in"

RUN mkdir -p /home/app

COPY . /home/app

RUN touch /home/app/res/newsArticles.txt && cd /home/app

WORKDIR /home/app

EXPOSE 8080

CMD ["node", "app.js"]