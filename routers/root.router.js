const express = require('express');
const {userRouters} = require('./users.routers');

const rootRouter = express.Router();

rootRouter.use('/users', userRouters);


module.exports = {
    rootRouter
};