const express = require('express');
const Router=express.Router();
const customerController=require('../controllers/customerController')

// customer routes
Router.get('/',customerController.homepage)
Router.get('/add',customerController.addCustomer)
Router.post('/add',customerController.postCustomer)

Router.get('/view/:id',customerController.view)
module.exports=Router;
