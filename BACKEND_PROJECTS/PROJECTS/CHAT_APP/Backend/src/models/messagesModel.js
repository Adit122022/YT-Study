import mongoose from "mongoose";
 

const messageSchema = new mongoose.Schema({
    fullname:{type:String ,required:true},
    email:{type:String ,required:true,unique:true},
    password:{type:String ,required:true , minlength:[6,"Password must be at least 6 characters"]},
    profilePic:{type:String ,default:""}
}, {timestamps:true});
const Messages = mongoose.model("Message", messageSchema);
export default Messages;