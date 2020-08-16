## SoftUni - ReactJS - Final Project 🥽

## Project Name - UniSoft Meal

There is wordplay in the name, yes.

Website for food recepies.

### REST API

#### What is REST API using
 - <img src="https://img.icons8.com/color/48/000000/nodejs.png"/> - NodeJs with Express
 - <img src="https://img.icons8.com/color/48/000000/mongodb.png"/> - MongoDB with Mongoose

I use .env file for database configuration.

There are only two variables:
DB_PORT
DB_HOST


### Front-end part

 
- <img src="https://img.icons8.com/officel/16/000000/react.png"/> - ReactJS

#### Website Routes
- Home page - it is available for every user.
- Meal detail page - only registered users
- Login
- Register
- Logout
- Profile page - only registered
- Add new recepie - only registered
- Unpublished Meals - only specific users
    *Each user has a level. The levels are: 
        'Observer'
        'Food Tester'
        'Food Critique'
        'Waiter/Waitress'
        'Junior Chef'
        'Station Chef'
        'Steff Chef'
        'Deputy Chef'
        'Head Chef'
        'Executive Chef'
    Posting new recipes is increasing the level.
    You have to be minimum Junior Chef to open page Unpublished
- Chefs - only admins

