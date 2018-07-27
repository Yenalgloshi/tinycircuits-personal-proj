//IMPORTS / REQUIRES
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');
const path = require('path'); // Usually moved to the start of file

//VARIABLES
const app = express();
const c = require('./controller');
let {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING, STRIPE_SECRET} = process.env;


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

app.use( express.static( `${__dirname}/../build` ) );


//ENDPOINTS
app.post('/api/auth/signin', c.signIn)
// app.post('/api/auth/register', c.regUser)
app.get('/api/product', c.prodList)
app.get('/api/productDetails/:itemId', c.itemDetails)
app.get('/api/featuredProduct', c.featuredProd)
app.post('/api/cart/add', c.cartAdd)
app.get('/api/cart/get', c.getCart)
app.post('/api/user/info', c.checkForUser)
app.put('/api/user/update', c.addNewUserInfo)
app.delete('/api/cart/delete:itemID', c.cartDelete, c.getCart)
app.post('/api/payment', c.handlePayment)

//LISTEN

app.listen(SERVER_PORT, () => {console.log(`Shadow people are lurking on port ${SERVER_PORT}`)});

