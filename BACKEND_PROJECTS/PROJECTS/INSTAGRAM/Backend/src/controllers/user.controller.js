import { validationResult } from "express-validator"
import userModel from "../models/user.js"
import { createUser } from "../services/user.service.js";


export const createUserController  = async (req ,res) =>{
    try{  
 const errors = validationResult(req);
 if(!errors.isEmpty()) return res.status(400).json({message :errors.array()});
 const {username ,email, password } = req.body 
 const user = await createUser( {username,email,password });  // service
 const token = user.generateToken();
 res.status(201).json({user ,token});
    }catch(err){
        console.error(err)
        res.status(500).json({message: "Server Error"})
    }
}