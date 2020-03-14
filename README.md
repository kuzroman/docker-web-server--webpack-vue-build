# docker-web-server--webpack-vue-build

### Backend

Install docker for macOS https://download.docker.com/mac/stable/Docker.dmg

Docker example with Apache, MySql 8.0, PhpMyAdmin and Php

- You can use MariaDB 10.1 if you checkout to the tag `mariadb-10.1`
- You can use MySql 5.7 if you checkout to the tag `mysql5.7`

I use docker-compose as an orchestrator. To run these containers:

```
docker-compose up -d
```

Open phpmyadmin at http://localhost:8000
Open web browser to look at a simple php example at http://localhost:8001

Run mysql client:

- `docker-compose exec db mysql -u root -p` 

Enjoy !

### Frontend

You can work with it without backend & docker!
Go to www and install npm modules
```
cd www
npm i
```

#### For local developing
run npm serve and go to http://localhost:9001/
```
npm run serve
```
You can change port at www/webpack.development.js

Main template - www/src/templates/index.twig


#### For build to production
```
npm run build
```
it create main.js in www/dist
