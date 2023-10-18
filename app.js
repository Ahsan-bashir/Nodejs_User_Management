require('dotenv').config()

const express = require('express')
const expressLayout = require('express-ejs-layouts')

const app = express()
const port = process.env.PORT || 5000

//To pass data through forms

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static('public'));
 
// Set Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Home 
app.get('/',(req,res)=>{
    const locals={
        title:"Nodejs",
        description:"Nodejs User Management System"
    }
    res.render('index',locals);
})

// Handle 404
app.get('*',(req,res)=>{
   res.status(404).render('404')
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
