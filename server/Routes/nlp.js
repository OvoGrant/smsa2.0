const express = require('express')
const pool = require('../db')
const router = express.Router()


router.get('/', async (req,res)=>{
    try{
        const result = await pool.query(`SELECT * FROM nlp`);
        res.status(200).json(result.rows);
    }catch(err){
        res.status(400).send({message: err.message});
    }
})

router.post('/', async (req,res)=>{
    const symbol = req.body.symbol
    const compound = req.body.symbol
    const date = req.body.date;
    try{
        await pool.query(`INSERT INTO nlp (symbol, compound, date) VALUES('${symbol}','${compound}','${date}');`)
        res.status(201).send("Good Job little guy")
    }catch(err){
        res.status(404).send({message: err.message})
    }
})

router.get('/:stock_id/:start/:end',(req,res)=>{
    const stock = req.stock_id;
    const start = req.body.start;
    const end = req.body.end;
    try{
        const result = await pool.query(`SELECT * FROM nlp where symbol is '${stock}' AND date BETWEEN ${start} AND ${end};`);
        res.status(200).json(result.rows);
    }catch(err){
        res.status(400).send({message: err.message});
    }
})


module.exports = router