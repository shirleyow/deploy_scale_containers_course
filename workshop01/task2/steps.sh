docker network create mynet
docker volume create db-vol
docker run -d --name mydb --network mynet --mount type=volume,src=db-vol,dst=/var/lib/mysql stackupiss/northwind-db:v1
docker run -d --name myapp --network mynet -e DB_HOST=mydb -e DB_USER=root -e DB_PASSWORD=changeit -p 8080:3000 stackupiss/northwind-app:v1