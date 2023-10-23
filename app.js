require('dotenv').config()

const express = require('express')
const expressLayout = require('express-ejs-layouts')
const flash =require('express-flash-message')
const session=require('express-session')
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
 
// Express Session
app.use(
    session({
        secret: process.env.SESSION_SECRET || 'secret',
        resave: false,
        saveUninitialized:true,
        cookie: { maxAge: 60 * 60 * 24 * 7 } // 1 week

    })
)
// Flash Message 
app.use(flash({ sessionKeyName: 'flashMessage' }));

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

// PORT
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
