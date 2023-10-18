const express = require('express');
const Router=express.Router();
const customerController=require('../controllers/customerController')

// customer routes
Router.get('/',customerController.homepage)
module.exports=Router;