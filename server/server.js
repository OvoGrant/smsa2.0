require('dotenv').config()
const express = require("express");
const { auth } = require('express-openid-connect');
const app = express()



const port = process.env.PORT || 3000;

app.use(express.json());
app.use(auth({
  authRequired: false,
  auth0Logout: true,
  secret: process.env.clientSecret,
  baseURL: 'http://localhost:3000',
  clientID: 'lTrFQxMTT1PLUs8NbB4mLrGcE2UZPXr0',
  issuerBaseURL: 'https://dev-sjme0iun.us.auth0.com'
})
);



// get driver connection
const usersRouter = require('./Routes/users');
const stocksRouter = require('./Routes/stocks');

app.use('/users', usersRouter);
app.use('/stocks',stocksRouter);

 
app.get('/',(req,res)=>{
  res.send("hell")
})

app.listen(port, () => {
  // perform a database connection when server starts
  console.log(`Server is running on port: ${port}`);
});