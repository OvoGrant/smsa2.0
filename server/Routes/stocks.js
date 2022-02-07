const express = require('express')
const router = express.Router()
const Stock = require('../Models/StockData')

router.get('/', async (req,res)=>{
    try{
        const stocks = await Stock.find()
        res.json(stocks)
    } catch(err){
        res.status(500).json({message: err.message})
    }
})

router.post('/', async (req,res)=>{
    Symbol = req.body.symbol
    const stock = new Stock({
        Date: req.body.Date,
        Sub: req.body.Sub,
        Pol: req.body.Pol,
        Source: req.body.Source,
        Price: req.body.Price
    })
    try{
        const newstock = await stock.save()
        res.status(201).json(newstock)
    }catch(err){
        res.status(400).json(err.message)
    }
})

router.get('/:symbol',(req,res)=>{
})

router.get('/:symbol/time',(req,res) => {

})

router.post('/:Symbol/time',(req,res)=>{

})

module.exports = router