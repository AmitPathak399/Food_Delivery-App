const exppress  = require('express');
const router = exppress.Router()
// const User = require('../models/User');
const {UserModel}=require("../models/User")
// const { model } = require('mongoose');

router.post("/createuser", async (req,res) =>{
    let payload=req.body;
    console.log(payload);
    try{
       const datas = new UserModel(payload);
       await datas.save();
       res.send({"mssg":"data added to db"})
    }
    catch (error){
        console.log(error)
        res.json({success:false})
    }
})

module.exports = router;