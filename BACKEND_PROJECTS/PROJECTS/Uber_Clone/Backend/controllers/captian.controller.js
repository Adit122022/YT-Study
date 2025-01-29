const { validationResult } = require("express-validator")
const { captainModel } = require("../models/captian.model")
const captainService = require('../services/captian.service')

module.exports.registerCaptin = async(req,res,next)=>{
 const error = validationResult(req);
 if(!error.isEmpty())    return res.status(400).json({errors : error.array()})
    const { fullname, email, password,vehicle } = req.body;
const isCaptainAlreadyExists = await captainModel.findOne({email});
    if(isCaptainAlreadyExists) return res.status(400).json({message: "Email already exists"});
    const hashedPassword = await captainModel.hashPassword(password);
    const captain = await captainService.createCaptian({ 
        firstname:fullname.firstname, 
        lastname:fullname.lastname,
        email,
        password : hashedPassword,
        color:vehicle.color ,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
     });
      const token = captain.generateAuthToken();
    res.status(201).json({ token,captain });

 
}