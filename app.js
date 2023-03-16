const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

async function init() {
    try {
        const options = {useNewUrlParser: true, useUnifiedTopology: true};
        await mongoose.connect('mongodb://127.0.0.1:27017', options)
        console.log('Connected to database');
    } catch (err) {
        console.log("error", err);
    }
};

module.exports = app;

init();
