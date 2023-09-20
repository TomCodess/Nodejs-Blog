const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
//used to store password in database as encrypted string
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const adminLayout = '../views/layouts/admin'

/**
 * GET /
 * Admin - Login Page
 */
router.get('/admin', async (req, res) => {
  try {
    const locals = {
        title: "Admin",
        description: "Simple Blog created with NodeJs, Express & MongoDb."
    }

    res.render('admin/index', { locals, layout: adminLayout });
    } catch (error) {
        console.log(error);
    }

});

/**
 * POST /
 * Admin - Check Login
 */
router.post('/admin', async (req, res) => {
    try {
        const {username, password} =  req.body;
        console.log(req.body);
  
      res.redirect('/admin');
      } catch (error) {
          console.log(error);
      }
  
  });

/**
 * POST /
 * Admin - Register
 */
router.post('/register', async (req, res) => {
    try {
        const {username, password} =  req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        
        try{
            const user = await User.create({username, password: hashPassword});
            res.status(201).json({message: 'User created,', user});
        } catch (error){
            if(error.code === 11000){
                res.status(409).json({message:'User already in use'});
            }
            res.status(500).json({message: 'Internal Server error'});
        }
      
      } catch (error) {
          console.log(error);
      }
  
  });


//Exports the router so it can be used in app.js
module.exports = router;