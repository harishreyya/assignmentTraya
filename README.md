# Traya assignment

## Introduction
A mern stack application for adding reviews to Traya health products.

## Demo Video
[Video Link](https://drive.google.com/file/d/1_aeTJxR4OQ_HY--NG4OSuKvAMUqIbK3Q/view)
## Features
The key features of application.

- validation and error handling for API requests
- authentication and authorization mechanisms to ensure secure access to the API endpoints
- APIs for retrieving task statistics

## Deployed link
[link](https://frontend-traya.vercel.app/)

## Installation or How to run the app
I created cloud database using MongoDb Atlas. So, if you want to run our code then please read the instructions below :
- Clone our repository `[https://github.com/harishreyya/BliveEV](https://github.com/harishreyya/assignmentTraya.git)`
- Open the code in your VS code, open Backend folder in the terminal by running `cd Backend`
-Now run `npm install` or `npm i` which will install all the required packages of node
- After installation, now run `npm run server` and  you will see `server is listening on 4000` 
- Simlutaniously, open a new terminal and run `cd frontend` by which you get into frontend folder
- Now here, run `npm install` or `npm i` which will install all the required packages of react aswell
- After installation, now run `npm start` and  you will see a new window will be opening in the default browser which is running on port `http://localhost:3000`
- Open MongoDb compass and url `mongodb://localhost:27017/review` which will create database collection named review
- Now you see app running, you can click on `Register` to sign in and after that you will be redirected to Home page where you can create tasks and enjoy.


## Usage
As there are some validations please follow this when using -
 - Regsiter first with name, username, email and password
 - Name should be `Alphabets only`
 - username should be having `atleast one number or one alphabet`
 - After registering anytime you can logout and login with your credentials
 - Create review clicking on `add` button


## Technology Stack
List and provide a brief overview of the technologies used in the project.

- MongoDB
- Express JS
- React JS
- Node JS
 
 ### Dependencies and packages

#### Backend
- `express-validator` <br/>
   used for validation
- `mongoose`<br/>
  connecting MongoDB to the Node js server
- `jsonwebtoken`<br/>
  generate a token for securely transmitting information
- `nodemon`<br/>
  It monitors your project and automatically restarts when detects any changes.
- `cors`<br/>
  allowing browser should permit loading resources
- `dotenv`<br/>
  to store “environment variables”

#### Frontend
- `axios`<br/>
  JavaScript library to make HTTP requests or fetching data
- `moment` <br/>
  for displaying dates and times in JavaScript
- `react-router-dom`<br/>
  implementaion of dynamic routing 
- `react-toastify`<br/>
  pacakge used to display backend messages
- `bootstrap.min.css`<br/>
  a file which I used from `bootswatch` free theme for bootstrap to style the app components like for headers, forms, buttons etc.

#### Cloud Deployment

- `AWS`
used EC2 for deploying the MongoDb (database), node js (Backend) and react js (frontend)
- `vercel`
for deploying react js (frontend)
