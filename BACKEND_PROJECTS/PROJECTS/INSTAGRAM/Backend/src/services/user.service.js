import userModel from "../models/user";

const createUser = async({username, email, password}) =>{
    try{
        if(!username  || !email || !password) throw new Error("Invalid username or email")
    }
}