require('dotenv').config()
const express = require("express");
const app = express()
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

mongoose.connect(process.env.ATLAS_URI,{useNewUrlParser:true})
const db =  mongoose.connection
db.once('open', () => {console.log("hello word")});
app.use(express.json());

// get driver connection
const usersRouter = require('./Routes/users');
const stocksRouter = require('./Routes/stocks');

app.use('/users', usersRouter);
app.use('/stocks',stocksRouter)



 
app.listen(port, () => {
  // perform a database connection when server starts
  console.log(`Server is running on port: ${port}`);
});