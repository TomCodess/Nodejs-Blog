require('dotenv').config();

const express =  require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
//or statment is for when if I want to upload to server and not host locally.
const PORT = 5000 || process.env.PORT;

//make it use public folder for styling 
app.use(express.static('public'));

//Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//Routes the endpoint to server folder so avoid clutter
app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
});