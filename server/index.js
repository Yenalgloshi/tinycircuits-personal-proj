//IMPORTS / REQUIRES
require('dotenv').config();
const express = require('express');


//VARIABLES
const app = express();

let {SERVER_PORT} = process.env;


//TOP LEVEL MIDDLEWARE
// massive(process.env.CONNECTION_STRING).then(dbInstance =>{
//   app.set('db', dbInstance);
// }).catch(err => console.log(err))

// app.use(bodyParser.json());


//ENDPOINTS



//LISTEN

app.listen(SERVER_PORT, () => {console.log(`Shadow people are lurking on port ${SERVER_PORT}`)});

