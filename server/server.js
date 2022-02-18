require('dotenv').config()
const express = require("express");
const app = express()
const cors = require("cors")
const jwt = require('express-jwt')
const jwks  = require('jwks-rsa')

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-sjme0iun.us.auth0.com/.well-known/jwks.json'
}),
audience: 'http://localhost:5000',
issuer: 'https://dev-sjme0iun.us.auth0.com/',
algorithms: ['RS256']
}).unless({path:['/stocks']});

const port = process.env.PORT || 5000;

app.use(jwtCheck)
app.use(express.json());
app.use(cors())
// get driver connection
const usersRouter = require('./Routes/users');
const stocksRouter = require('./Routes/stocks');
const nlpRouter = require('./Routes/nlp')
const inventoryRouter = require('./Routes/inventory')
app.use('/users', usersRouter);
app.use('/stocks',stocksRouter);
app.use('/inventory',inventoryRouter);
app.use('/nlp',nlpRouter);


app.listen(port, () => {
  // perform a database connection when server starts
  console.log(`Server is running on port: ${port}`);
}); 