const mongoose = require('mongoose');

 const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: { type: String, default:"https://i.pinimg.com/736x/b5/0d/33/b50d33b48b2bce63993a4fa303a047db.jpg"}
 },{ timestamps: true })

 



const User = mongoose.model('User', UserSchema);
   
 module.exports = User;
