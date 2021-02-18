const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const API_PORT = 4000;
const DB_HOST = '127.0.0.1';
const DB_PORT = 27017;
const DB_NAME = 'taksu_test';

let User = require('./model/user');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log('MongoDB connection extablished successfully');
});

app.get('/all', function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(users);
        }
    });
});

app.post('/register', function(req, res) {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        if (err) {
            res.status(400).send('Failed register user')
            console.log(err);
        } else {
            let user = new User({
                "username": req.body.username,
                "password": hash,
                "name": req.body.name,
            });
    
            user.save()
                .then(user => {
                    res.status(200).json({
                        message: 'User registered successfully'
                    });
                })
                .catch(err => {
                    res.status(400).send('Failed register user')
                });
        }
    });
});

app.post('/login', function(req, res) {
    let query = {
        username: req.body.username
    };

    User.find(query, function(err, user) {
        console.log({
            'request': req.body.password,
            'pass': user[0].password
        })
        bcrypt.compare(req.body.password, user[0].password, function(err, result) {
            if (result) {
                res.status(200).send('User logged in')
            } else {
                res.status(400).send('Username and password combination not match')
            }
        });
    });
});

app.listen(API_PORT, function() {
    console.log("Server is running on port: " + API_PORT);
});