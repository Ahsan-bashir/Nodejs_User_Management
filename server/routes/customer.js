const express = require('express');
const Router=express.Router();
const customerController=require('../controllers/customerController')

// customer routes
Router.get('/',customerController.homepage)
Router.get('/add',customerController.addCustomer)
Router.post('/add',customerController.postCustomer)

Router.get('/view/:id',customerController.view)
Router.get('/edit/:id',customerController.edit)
Router.put('/edit/:id',customerController.editPost)
Router.delete('/edit/:id',customerController.deleteCustomer)

Router.get('/search',customerController.searchCustomer)
module.exports=Router;
