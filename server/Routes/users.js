const express = require('express')
const pool = require('../db')
const router = express.Router()



router.get('/:id/inventory/',(req,res) => {
    const userId = req.params.id;
    const queryString = `SELECT * FROM INVENTORY WHERE user_id='${userId}'`;
})

router.post(('/:id/invetory/:item'),(req,res) => {
    const userId = req.params.id;
    const item = req.query.item;
    const queryString = `SELECT * FROM INVENTORY WHERE user_id='${userId} and symbol='${item}'`;
    try{
        const result = await pool.query(queryString);
    }
})

router.get('/:id/trades/',(req,res)=>{

})

router.post('/:id/trades/' ,(req,res)=>{

})

router.get('/:id/trades/:tradeId' ,(req,res)=>{

})

router.get('/:id/trades/:tradeId/symbols',(req,res)=>{

})


module.exports = router