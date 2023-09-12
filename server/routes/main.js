const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Basic route function, app.get app.post etc. the '' is the /*something*
// then we use a req and res with arrow function

/**
 * GET /
 * HOME
 */
router.get('', async (req, res) => {
    try{
        //This is naming for tab name
        const locals = {
        title: "Nodejs Blog",
        description: "Simple blog page made using NodeJs, Express, and MongoDB."
        }

        //Number of posts to display variable here
        let perPage = 5;
        let page = req.query.page || 1;

        //more advanced way to get older posts
        const data = await Post.aggregate([ {$sort: {createdAt: -1} } ])
        //controls how many 
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec();
        
        //Gets the number of posts
        const count = await Post.count();
        const nextPage = parseInt(page) + 1;
        const hasNextPage = nextPage <= Math.ceil(count / perPage);
        
        //res.render, chooses a ejs file to render from /// Inside of {locals} can add more variables seperated by commas  
        res.render('index', {
            locals, 
            data,
            current: page,
            nextPage: hasNextPage ? nextPage : null
        });
    } catch (error) {
        console.log(error);
    }
});

/**
 * GET /
 * Post : id
 */
router.get('/post/:id', async (req, res) => {
    try{
        let slug = req.params.id;

        const data = await Post.findById({_id: slug});
        const locals = {
            title: data.title,
            description: "Simple blog page made using NodeJs, Express, and MongoDB."
        }
        //res.render, chooses a ejs file to render from /// Inside of {locals} we can add more variables seperated by commas  
        res.render('post', {locals, data});
    } catch (error) {
        console.log(error);
    }
});

/**
 * POST /
 * Post - searchTerm
 */
router.post('/search', async (req, res) => {
    try{
        const locals = {
            title: "Search",
            description: "Simple blog page made using NodeJs, Express, and MongoDB."
        }

        let searchTerm = req.body.searchTerm;
        //removes special characters in search
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "")
        
        const data = await Post.find({
            //Search for the title and body name in database
            $or: [
                {title: {$regex: new RegExp(searchNoSpecialChar, 'i')}},
                {body: {$regex: new RegExp(searchNoSpecialChar, 'i')}}
            ]
        });
        res.render('search', {locals, data});
    } catch (error) {
        console.log(error);
    }
});













//routes to about page
router.get('/about', (req, res) => {
    //res.render, chooses a ejs file to render from 
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});















// function insertPostData () {
    //   Post.insertMany([
    //     {
    //       title: "Building APIs with Node.js",
    //       body: "Learn how to use Node.js to build RESTful APIs using frameworks like Express.js"
    //     },
    //     {
    //       title: "Deployment of Node.js applications",
    //       body: "Understand the different ways to deploy your Node.js applications, including on-premises, cloud, and container environments..."
    //     },
    //     {
    //       title: "Authentication and Authorization in Node.js",
    //       body: "Learn how to add authentication and authorization to your Node.js web applications using Passport.js or other authentication libraries."
    //     },
    //     {
    //       title: "Understand how to work with MongoDB and Mongoose",
    //       body: "Understand how to work with MongoDB and Mongoose, an Object Data Modeling (ODM) library, in Node.js applications."
    //     },
    //     {
    //       title: "build real-time, event-driven applications in Node.js",
    //       body: "Socket.io: Learn how to use Socket.io to build real-time, event-driven applications in Node.js."
    //     },
    //     {
    //       title: "Discover how to use Express.js",
    //       body: "Discover how to use Express.js, a popular Node.js web framework, to build web applications."
    //     },
    //     {
    //       title: "Asynchronous Programming with Node.js",
    //       body: "Asynchronous Programming with Node.js: Explore the asynchronous nature of Node.js and how it allows for non-blocking I/O operations."
    //     },
    //     {
    //       title: "Learn the basics of Node.js and its architecture",
    //       body: "Learn the basics of Node.js and its architecture, how it works, and why it is popular among developers."
    //     },
    //     {
    //       title: "NodeJs Limiting Network Traffic",
    //       body: "Learn how to limit netowrk traffic."
    //     },
    //     {
    //       title: "Learn Morgan - HTTP Request logger for NodeJs",
    //       body: "Learn Morgan."
    //     },
    //   ])
    // }
    
    // insertPostData();




//Exports the router so it can be used in app.js
module.exports = router;