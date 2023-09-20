require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
//const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const connectDB = require('./server/config/db');

const app = express();
//or statment is for when if I want to upload to server and not host locally.
const PORT = 5000 || process.env.PORT;

//connect to database
connectDB();

//Middleware to be able to search for posts on the page
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser);

app.use(session({
    secret: 'idk4fun',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    //If i want to set a max cookie age
    //cookie: { maxAge: new Date ( Date.now() + (3600000) ) } 
}));

//make it use public folder for styling 
app.use(express.static('public'));

//Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//Routes the endpoint to server folder so avoid clutter
app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/admin'));

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
});