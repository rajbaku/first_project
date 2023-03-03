const route = require('express').Router();
const {signup,getbill} = require('../controller/controller.js');

route.post('/user/signup',signup);
route.post('/product/getbill',getbill);

module.exports = route;