import { validationResult } from "express-validator"
import userModel from "../models/user.js"


export const createUserController  = async (req ,res) =>{
    try{  
 const errors = validationResult(req);
 if(!errors.isEmpty()) return res.status(400).json({message :errors.array()});
 res.send({message : " regsiter"})
    }catch(err){
        console.error(err)
        res.status(500).json({message: "Server Error"})
    }
}