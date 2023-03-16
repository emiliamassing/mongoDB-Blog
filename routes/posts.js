const express = require('express');
const router = express.Router();
const BlogpostModel = require('../models/blog-model');

/* GET users listing. */
router.get('/', async (req, res) => {
  const blogposts = await BlogpostModel.find();
  res.status(200).json(blogposts);
});

router.post('/add', async (req, res) => {
  const blogpost = await BlogpostModel.create(req.body);

  res.status(201).json(blogpost);
});

module.exports = router;