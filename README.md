Jacob Anderson PhD (jacobanderson.dev)
=================

This is the personal site for jacobanderson.dev

client
------

The client directory was created using `create-react-app`. There are two Dockerfiles used for the client. One is for local development, using the npm development serer. The other builds the app into static files which are then serves them to nginx.

server
------

The server is a flask backend responsible for exposing an api endpoint for client consumption. 

Development
-----------
`docker-compose -f conf/docker-dev.yml build`
`docker-compose -f conf/docker-dev.yml up`

bash dev script:

`./scripts/dev.sh`

*Note that the react development server will compile and refresh on file changes*

Production
----------
`docker-compose -f conf/docker-prod.yml build`
`docker-compose -f conf/docker-prod.yml up`

bash production script

`./scripts/prod.sh`

