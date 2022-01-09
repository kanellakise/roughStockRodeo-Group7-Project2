const router = require('express').Router();
const { User } = require('../../models');

//create new user route
//accesing session information in the route
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    //initiate the creation of the session and runs the function once complete
    req.session.save(() => {
      req.session.user_id = userData.id;
      //sests a boolean describing whether or not the user is logged in
      req.session.logged_in = true;

      //gives server access to user's user_id and username
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//user login route
//accesing session information in the route

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

//error control for email 
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    //error control for invalid password
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      //notifies user they have successfully logged in
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    //error control for login
    res.status(400).json(err);
  }
});

//user logout route
//accesing session information in the route

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {

    //destroys session variables
    req.session.destroy(() => {
      //send back 204 code after session has been successfully destroyed
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
