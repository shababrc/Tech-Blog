const router = require('express').Router();
const {Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
    //TODO: Add code to find all the posts and the associated users and render homepage
    try {
        const postData = await Post.findAll(
            {include: [User]}
        )
        const posts = postData.map((post => post.get({plain: true})));

        res.render('homepage', {
            posts,
        })
    } catch (error) {
        res.status(500).json(error);
    }
  });
  
  router.get('/post/:id', async (req, res) => {
   //TODO: Add code to find one of the post and the associated user and render posts
  });
  
  // Use withAuth middleware to prevent access to route
  router.get('/dashboard', async (req, res) => {
    //TODO: Add code to find the loggedIn user and their associated projects and render profile
    res.render('comment')
  });
  
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('signup');
  });
  
  module.exports = router;
