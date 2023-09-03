const express = require('express');
const router = express.Router();

//Basic route function, app.get app.post etc. the '' is the /*something*
// then we use a req and res with arrow function
router.get('', (req, res) => {
    //This is naming for tab name
    const locals = {
        title: "Nodejs Blog",
        description: "Simple blog page made using NodeJs, Express, and MongoDB."
    }
    //res.render, chooses a ejs file to render from /// Inside of {locals} can add more variables seperated by commas  
    res.render('index', {locals});
});

//routes to about page
router.get('/about', (req, res) => {
    //res.render, chooses a ejs file to render from 
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});


//Exports the router so it can be used in app.js
module.exports = router;