const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

//new post route
//accesing session information in the route

router.post('/', async (req, res) => {
  try {
    //async
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
    //error control for new post
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete post route
//accesing session information in the route

router.delete('/delete/:id', withAuth, async (req, res) => {
  try {
    //asnync behavoir
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      //error control for incorrect post ID
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    //error control for post
    res.status(500).json(err);
  }
});

module.exports = router;