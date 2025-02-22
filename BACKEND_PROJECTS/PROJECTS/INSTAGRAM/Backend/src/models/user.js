import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/cofig.js";


const UserSchema = new mongoose.Schema({
    username :{ type:String , required : [true , "Username is required"] , unique:[true , "Username is unique"] , trim:true , lowercase:true , minLength:[3,"Username  must be at Least of three characters"] , maxLength:[20 , "Username must be of 20 characters"] },
    email :{ type:String , required : [true , "email is required"] , unique:[true , "email is unique"] , trim:true , lowercase:true , minLength:[5,"email  must be at Least of 5 characters"] , maxLength:[40 , "email must be of 40 characters"] },
    profileImage :{ type:String , default:"https://i.pinimg.com/736x/b9/cc/68/b9cc6898268e077654e067e90c1e9d00.jpg"},
    password :{ type:String },
})


UserSchema.statics.hashPassword = async function (password) {   //userModels.hashPassword(password)
  if(!password) throw new Error("Password is required");
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}
UserSchema.methods.comparePassword = async function (password) {   //user.comparepassword(password)
    if(!password) throw new Error("Password is Required");
    if(!this.password) throw new Error("Password is Required");
    return bcrypt.compare(password , this.password);
}
 UserSchema.methods.generateToken =  function(){
    return jwt.sign({_id : this._id } ,config.JWT_SECRET , {expiresIn :config.JWT_EXPIRES_IN})
 }
 UserSchema.statics.verifyToken = async function (token){
    if(!token) throw new Error("Token is Required") 
        return jwt.verify(token , config.JWT_SECRET)
 }

 const userModel = mongoose.model("user" , UserSchema)
 export default userModel;