const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', async (req,res)=>{
    const results = await db.query('SELECT * FROM test;')
    res.status(200).json(results.rows)
})

router.post('/', async (req,res)=>{
    const symbol = req.body.symbol
    const name = req.body.name
   try{ const querystring = `INSERT INTO test (title,name) VALUES ('${symbol}','${name}');`
    await db.query(querystring)
    res.status(201).json({message:201})
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

router.get('/:symbol', async (req,res)=>{
    const symbol = req.params.symbol
    const querystring = `SELECT * FROM test WHERE (title LIKE '${symbol}')`
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