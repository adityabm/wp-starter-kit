# WordPress with MySQL using Docker Compose

This project uses Docker Compose to set up a WordPress installation with a MySQL database.

## Requirements

To use this project, follow these steps:

1. Clone the repository
2. Navigate to the project directory
3. Start the containers with `docker-compose up -d`
4. Access WordPress at `http://localhost:8080`
5. Access MySQL at `mysql -h localhost -P 3306 -u admin -padmin`

## Project Structure

The project consists of two services:

- db: a MySQL database container
- wordpress: a WordPress container that depends on the db service

The configuration is defined in the docker-compose.yml file.

## Configuration

Environment Variables:

- WORDPRESS_DB_HOST: db:3306
- WORDPRESS_DB_USER: admin
- WORDPRESS_DB_PASSWORD: admin

Ports:

- 3306: MySQL database port
- 8080: WordPress port

Volumes:

- db_data: persistent volume for MySQL database data
- wp_data: persistent volume for WordPress data
