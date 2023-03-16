const express = require('express');
const router = express.Router();
const BlogpostModel = require('../models/blog-model');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('Blog posts');
});

router.post('/add', function(req, res) {
  req.app.locals.collection('blogposts').insertOne(req.body)
  .then(result  => {
    console.log(result);
    res.redirect('/showPosts');
  });
});

router.post('/', async (req, res) => {
  const blogpost = new BlogpostModel(req.body)
  await blogpost.save();

  res.status(201).json(blogpost);
});

module.exports = router;