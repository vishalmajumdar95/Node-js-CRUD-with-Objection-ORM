# Objection-ORM
In this simple practice project, I have learn about objection-ORM and migration

-------------------------------------------------------------------------------------

Created a simple Objection-ORM crud. User can sing-up and login and then get user and get by Id and then update user data 

In this pratice project, I have made a backend CRUD using Express framework of NodeJS. I have also used Objection with migration and also mysql database.

## Task Details:
Lets make a simple CRUD objection with only the restful API. a user should be able to:

    -Register using email & password and one more name 
    -Simple Login (email & password)
    -See all users details 
    -User can update details 
### In this simple project I have used MySQL, Express, body-parser, nodemon, knex, objection, bcrypt, morgan, dotenv.

## Installation
#### NodeJs and NPM

    $ sudo apt-get update 
    $ sudo apt-get install curl 
    $ sudo apt install build-essential apt-transport-https lsb-release ca-certificates curl 
    $ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
    $ sudo apt install nodejs
    $ sudo apt install npm

### MYSQL

    $ sudo apt-get update
    $ sudo apt-get install mysql-server
    $ sudo mysql -u root -p
    
#### ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';
Package Installation

    $ npm install 'package_name'
