//IMPORTS / REQUIRES
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');

//VARIABLES
const app = express();
const c = require('./controller');
let {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;


//TOP LEVEL MIDDLEWARE
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

massive(CONNECTION_STRING).then(dbInstance =>{
  app.set('db', dbInstance);
}).catch(err => console.log(err))

app.use(bodyParser.json());

function checkForCart(req, res, next){
  if(!req.session.cart){
    console.log('resetting cart')
    req.session.cart = []
  } else {
    console.log('have cart', req.session.cart)
  }
  next()
}

app.use(checkForCart);


//ENDPOINTS
app.post('/api/auth/signin', c.signIn)
app.post('/api/auth/register', c.regUser)
app.get('/api/product', c.prodList)
app.get('/api/productDetails/:itemId', c.itemDetails)
app.get('/api/featuredProduct', c.featuredProd)
app.post('/api/cart/add', c.cartAdd)
app.get('/api/cart/get', c.getCart)
// app.put('/api/user/updateUser', c.updateUser)
// app.get('/api/auth', c.authUser)


//LISTEN

app.listen(SERVER_PORT, () => {console.log(`Shadow people are lurking on port ${SERVER_PORT}`)});

