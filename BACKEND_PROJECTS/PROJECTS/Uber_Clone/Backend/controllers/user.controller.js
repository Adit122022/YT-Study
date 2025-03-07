    const blacklistTokenModel = require('../models/blacklistToken.model')
const {UserModel} = require('../models/user.model')
    const userService = require('../services/user.service')
    const { validationResult } = require('express-validator')

    module.exports.registerUser = async (req,res,next)=>{
    const error = validationResult(req) 
    if(!error.isEmpty()){
        return res.status(400).json({errors : error.array()})
    }
    const { fullname, email, password } = req.body;
     const isUserAlready = await UserModel.findOne({email});
     if(isUserAlready) return res.status(400).json({message: 'Email already exists'})
    const hashedPassword = await UserModel.hashPassword(password);
    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password : hashedPassword
        }) 
    const token = user.generateAuthToken();
    res.status(201).json({token,user});
    }
    module.exports.loginUser =async (req, res, next)=>{
    const error = validationResult(req)
    if(!error.isEmpty())    return res.status(400).json({errors : error.array()})
        const {email , password } = req.body;
       
    const user = await UserModel.findOne({email}).select('+password');
       
        if(!user) return res.status(401).json({message : "Invalid email or password"});
       
        const isMatch = await user.comparePassword(password);
       
        if(!isMatch) return res.status(401).json({message: 'Invalid email or password '});
       
        const token = user.generateAuthToken();
        //  cookie will be updated when user is logged in again with 
        res.cookie('token',token);
       
        res.status(200).json({token, user});
    

    }
    // profile controller
    module.exports.UserProfile =async (req, res, next)=>{
    res.status(200).json(req.user);
    }
    module.exports.logoutUser = async (req, res, next)=>{
        res.clearCookie('token');
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];
        await blacklistTokenModel.create({token})
        res.status(200).json({message: 'Logged out successfully'});
    }