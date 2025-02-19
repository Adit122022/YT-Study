const { validationResult } = require("express-validator")
const { captainModel } = require("../models/captian.model")
const captainService = require('../services/captian.service');
const blacklistTokenModel = require("../models/blacklistToken.model");

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

module.exports.loginCaptain = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())    return res.status(400).json({errors :errors.array()});
    
    const {email , password} = req.body;
    const captain = await captainModel.findOne({email}).select('+password');
    if(!captain) return res.status(401).json({message: 'Ivalid email or password'});
    const isMatch = await captain.comparePassword(password);
    if(!isMatch) return res.status(401).json({message : 'Invalid email or password'});
    const token = captain.generateAuthToken();
    res.cookie('token',token);
    res.status(200).json({token,captain});
}
module.exports.captainProfile = async(req,res,next)=>{
    res.status(200).json(req.captain);
}
module.exports.logoutCaptain = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blacklistTokenModel.create({token}) ;
    res.clearCookie('token');
    res.status(200).json({message:'Successfully logged out from Captain'}) 
}