const express = require('express')
const Brand = require('../models/brand');
const router = express.Router()
const {authCheck,adminCheck} = require('../middlewares/auth');

router.get('/brand',async (req,res)=>{
    try {
        console.log("brand")
        const brands = await Brand.find();
        res.status(201).send(brands);
    } catch (error) {
        res.status(404).send(error);
    }
})

router.post('/brand',authCheck,adminCheck,async (req,res)=>{
    try {
        const brand = new Brand(req.body);
        await brand.save();
        res.send(brand);
    } catch (error) {
        res.status(501).send({error})
    }
})

router.get('/:id',authCheck,adminCheck,async (req,res)=>{
    try{
        const brand = await Brand.findbyId(req.params.id);
        res.status(201).send(brand);
    }catch(err){
        res.send(err);
    }
})
router.delete('/:id',authCheck,adminCheck,async(req,res)=>{
    try {
        const brand = await Brand.findByIdAndDelete(req.params.id);
        res.send({message:"Item deleted",status:"success"});
    } catch (error) {
        res.status(501).send(error);
    }
})

module.exports = router;




