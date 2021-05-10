const express = require('express');
const mongoose = require('mongoose');
const app =express();
const PORT = 3012; 

const cors = require('cors')

const bodyParser = require('body-parser')

 
// create application/json parser 
app.use(cors());

 

 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// mongodb connection URL
const URL_DB = 'mongodb://localhost:27017/food_delivery_company';
 mongoose.connect(URL_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

// import of routes where all routes got intergrated
const routes = require('./routes/routes'); 

app.use(routes);

app.listen(PORT,() => {
    console.log("The server is running");
});