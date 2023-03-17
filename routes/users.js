const express = require('express');
const router = express.Router();
const UserModel = require('../models/user-model');
const CryptoJs = require('crypto-js');

/* GET users listing. */
router.get('/', async function(req, res) {
  const users = await UserModel.find();
  res.status(200).json.apply(users);
});

router.post('/add', async function(req, res){
  let newUser = await UserModel.create({
    username: req.body.username,
    password: CryptoJs.SHA3(req.body.password).toString()
  })

  console.log("New user", newUser);
  res.status(201).json(newUser);
});

module.exports = router;
