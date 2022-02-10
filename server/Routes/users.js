const express = require('express')
const pool = require('../db')
const router = express.Router()


router.get('/', async (req,res)=>{
    try{
        const result = await pool.query(`SELECT * FROM users`)
        res.status(200).json(results.rows)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

router.post('/',(req,res)=>{
    
})

router.get('/:id',(req,res)=> {

})


router.delete('/:id',(req,res)=>{

})

router.get('/:id/inventory/:inventoryId',(req,res) => {
 
})

router.post(('/:id/invetory/:item'),(req,res) => {

})






module.exports = router