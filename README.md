# news
Blog web app

### Running

From the project's root folder.

##### Fire the containers
```
$ docker-compose build
$ docker-compose up -d
```

##### Run the migrations
```
$ docker exec api yarn db:seed
```

##### Stop the containers
```
$ docker-compose stop
```

##### Start the containers
```
$ docker-compose start
```

##### Destroy the containers (to be recreated from scratch)
```
$ docker-compose down
```
