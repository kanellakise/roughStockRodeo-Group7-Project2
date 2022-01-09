//set up the main homepage route

const router = require('express').Router();
//import necessary models
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  

    // Pass serialized data and session flag into template
    // accepts an argument, an object, which includes all the data to pass to the template
    res.render('homepage')
});

// signup route
//serialize the object down to only the properties you need
router.get('/signup', async (req, res) => {
  
  // Pass serialized data and session flag into template
  res.render('signup')
});


// login route
//serialize the object down to only the properties you need
router.get('/login', async (req, res) => {
  

  // Pass serialized data and session flag into template
  res.render('login')
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: [
            'name',
            'event',
            'user_id'
          ]
        },
      ],
    });

// serialize the entire array 
    const post = postData.get({ plain: true });
//pass data to template
    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    //return error 500
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {

    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

//serialize the entire array
    const user = userData.get({ plain: true });
//pass userdata to template
    res.render('profile', {

      
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//check if user is logged in
router.get('/login', (req, res) => {

  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

// render the login page
  res.render('login');
});

module.exports = router;
