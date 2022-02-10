require('dotenv').config()
const express = require("express");
const app = express()
const cors = require("cors")


const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())
// get driver connection
const usersRouter = require('./Routes/users');
const stocksRouter = require('./Routes/stocks');
const itemsRouter = require('./Routes/items');
const nlpRouter = require('./Routes/nlp')
const inventoryRouter = require('./Routes/inventory')
app.use('/users', usersRouter);
app.use('/stocks',stocksRouter);
app.use('/inventory',inventoryRouter);
app.use('/nlp',nlpRouter)
app.user('/items',itemsRouter)


app.listen(port, () => {
  // perform a database connection when server starts
  console.log(`Server is running on port: ${port}`);
}); 