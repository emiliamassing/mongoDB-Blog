const express = require('express');
const router = express.Router();

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

module.exports = router;