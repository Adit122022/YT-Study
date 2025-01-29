const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const captianSchema = new mongoose.Schema({
    fullname:{ 
        firstname:{type:String, required:true ,minlength:[3,"First name must be at least 3 characters long"]},
        lastname:{type:String ,minlength:[3,"last name must be at least 3 characters long"]},
    },
    email:{type:String, required:true, unique:true,lowecase:true , match:[/^\S+@\S+\.\S+$/ , 'Please enter a valid email address']  ,minlength:[ 5,"Email must be at least 5 characters long"]},
        password:{type:String, required:true ,select : false},
    socketId:{type:String},  
    status:{ type:String, enum:['active' , 'inactive'] ,default:'inactive'},
    vehicle:{ 
        color:{type:String, required:true ,minlength : [3,'Color must be atleast of  3 characters ']},
        plate:{ type:String ,required :true, minlength:[3, "Plate must be at least 3 characters long"]},
        capacity:{ type:Number , required:true , min :[1,'Capacity must be at least 1'] },
        vehicleType:{type:String,required:true,enum:['car','motorcycle','auto']}
    },
    location:{ 
        lat:{type:Number},
        lng:{type:Number} 
    }
})
captianSchema.methods.generateAuthToken = function(){ 
    const token = jwt.sign({_id:this._id} ,process.env.JWT_SECRET ,{expiresIn: '24h'})
    return token;
}
captianSchema.methods.comparePassword = async function(password){       return await bcrypt.compare(password,this.password); }
captianSchema.statics.hashPassword    =  async function(password){       return await bcrypt.hash(password,10)  }

module.exports.captainModel = mongoose.model('captain' ,captianSchema)