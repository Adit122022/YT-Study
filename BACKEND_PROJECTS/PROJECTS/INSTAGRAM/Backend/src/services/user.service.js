import userModel from "../models/user.js";

export const createUser = async({username, email, password}) =>{
    try{
        if(!username  || !email || !password) throw new Error("All fields are required [ username , emial , password ]");
        const isUserAlreadyExists = await userModel.findOne({$or:[{username},{email}]});
        if(isUserAlreadyExists) throw new Error("User already exists with this email or username");
        const hashedPassword = await userModel.hashPassword(password);
        const user = new userModel({ username, email, password: hashedPassword });
        await user.save();
        delete user._doc.password;  // for safety 
        return user;
    }catch(err){ 
        console.log(err);
        throw new Error(err.message);
    }
}

export const loginUser = async({email , password}) =>{
try{
    const user = await userModel.findOne({ email });
    if (!user)    throw new Error( "User not found" );
    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error( "Invalid credentials" );
    delete user._doc.password;
    return user;
}catch(err){
    console.log(err);
    throw new Error(err.message);
}
}