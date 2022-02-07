const express = require('express')
const router = express.Router()
const user = require('../Models/Users')


router.get('/', async (req,res)=>{
    try {
        const subscribers  = await subscriber.find()
        res.send(subscribers)
    }catch(err){
        console.log(error)
    }
})

router.post('/',(req,res)=>{

})

router.get('/:id',(req,res)=> {

})

router.put('/:id',(req,res)=>{

})

router.delete('/:id',(req,res)=>{

})

router.get('/:id/holdings',(req,res) => {
 
})



module.exports = router