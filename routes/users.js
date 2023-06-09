const express = require('express');
const router = express.Router();
const UserModel = require('../models/user-model');
const CryptoJs = require('crypto-js');

/* GET users listing. */
router.get('/', async function(req, res) {
  const users = await UserModel.find();
  res.status(200).json(users);
});

router.post('/add', async function(req, res){
  let newUser = await UserModel.create({
    username: req.body.username,
    password: CryptoJs.SHA3(req.body.password).toString()
  });

  console.log("New user", newUser);
  res.status(201).json(newUser);
});

router.post('/login', async function(req, res) {
  const login = {
    username: req.body.username,
    password: req.body.password
  }

  let findUser = await UserModel.findOne({username: login.username});
  if(CryptoJs.SHA3(login.password).toString() === findUser.password) {
    res.status(201).json({username: findUser.username, _id: findUser.id});

    console.log(findUser.isLoggedIn);
    console.log('Login succecssful');
  } else {
    res.status(401).json('Incorrect username or password');
  }
});

router.delete('/:id', async function(req, res) {
  await UserModel.findByIdAndDelete({_id: req.params.id})

  res.status(200).json('User deleted');
});

module.exports = router;
