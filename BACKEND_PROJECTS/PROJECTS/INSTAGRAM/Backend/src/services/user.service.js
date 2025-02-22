import userModel from "../models/user";

export const createUser = async({username, email, password}) =>{
    try{
        if(!username  || !email || !password) throw new Error("All fields are required [ username , emial , password ]");
        const isUserAlreadyExists = await userModel.findOne({$or:[{username},{email}]});
        if(isUserAlreadyExists) throw new Error("User already exists with this email or username");
        const hashedPassword = await userModel.hashedPassword(password);
        const user = await userModel.create({username ,email , password :hashedPassword});
        delete user._doc.password;  // for safety 
        return user;
    }catch(err){ console.log(err);}
}