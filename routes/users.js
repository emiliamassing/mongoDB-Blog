const express = require('express');
const router = express.Router();
const UserModel = require('../models/user-model');

/* GET users listing. */
router.get('/', async function(req, res) {
  const users = await UserModel.find();
  res.status(200).json.apply(users);
});

router.post('/add', async function(req, res){
  const user = await UserModel.create(req.body);
  res.status(201).json(user);
});

module.exports = router;
