const express = require('express')
const pool = require('../db')
const router = express.Router()
const db = require('../db')
let global = 0;

router.get('/', async (req,res)=>{
    const results = await db.query('SELECT * stocks;')
    res.status(200).json(results.rows)
})

router.post('/', async (req,res)=>{
    const symbol = req.body.symbol;
    const name = req.body.fullname;
    const queryString = `INSERT INTO stocks (id,symbol, full_name) VALUES ('${global++}','${symbol}' , '${name}' );`
    try{
       const res =  await pool.query(queryString)
       res.status(201).send("created")
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

router.get('/:symbol', async (req,res)=>{
    const symbol = req.params.symbol
    const querystring = `SELECT * FROM stocks WHERE (title LIKE '${symbol}')`
    try{
        const response = await db.query(querystring);
        res.status(200).json(response.rows)
    }catch(err){

    }
})

router.get('/:symbol/time',(req,res) => {
    
})

router.post('/:Symbol/time',(req,res)=>{

})

module.exports = router