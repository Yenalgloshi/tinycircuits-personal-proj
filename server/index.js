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
  saveUninitialized: false
}));

massive(CONNECTION_STRING).then(dbInstance =>{
  app.set('db', dbInstance);
}).catch(err => console.log(err))

app.use(bodyParser.json());


//ENDPOINTS
app.post('/api/auth/signin', c.signIn)
// app.get('/api/auth', c.authUser)


//LISTEN

app.listen(SERVER_PORT, () => {console.log(`Shadow people are lurking on port ${SERVER_PORT}`)});

