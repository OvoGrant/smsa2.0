const express = require('express')
const pool = require('../db')
const router = express.Router()
const db = require('../db')


router.get('/',(req,res)=>{
    const results = await pool.query
})

router.post('/',(req,res)=>{

})

router.get('/:stock_id',(req,res)=>{

})

router.get('/:stock_id/?source,?start?end',(req,res)=>{

})


module.exports = router