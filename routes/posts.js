const express = require('express');
const router = express.Router();
const BlogpostModel = require('../models/post-model');

/* GET users listing. */
router.get('/', async function(req, res) {
  const blogposts = await BlogpostModel.find().populate('author');
  res.status(200).json(blogposts);
});

router.post('/add', async function(req, res) {
  const blogpost = await BlogpostModel.create(req.body);

  res.status(201).json(blogpost);
});

router.delete('/:id', async function(req, res) {
  await BlogpostModel.findByIdAndDelete({_id: req.params.id})

  res.status(200).json('Post deleted');
});

module.exports = router;