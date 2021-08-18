const express = require('express');

const userRouters = express.Router();

userRouters.get('/', (req, res) => {
    res.send('users routers work');
});

module.exports = {
    userRouters
};