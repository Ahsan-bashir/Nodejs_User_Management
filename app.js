require('dotenv').config()

const express = require('express')
const expressLayout = require('express-ejs-layouts')
const connectDB=require('./server/config/db')


const app = express()
const port = process.env.PORT || 5000

// connect Database
connectDB();

//To pass data through forms
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static('public'));
 
// Set Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// routes
app.use('/',require('./server/routes/customer'))

// Handle 404
app.get('*',(req,res)=>{
   res.status(404).render('404')
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
