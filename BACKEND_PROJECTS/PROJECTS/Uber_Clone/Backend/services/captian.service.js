const {captainModel} = require('../models/captian.model');

module.exports.createCaptian = async ({firstname , lastname ,email ,password,color,plate,capacity,vehicleType}) =>{
if(!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vehicleType ){
    throw new Error('All fields must be required') ;
}
const captain = captainModel.create({
    fullname:{ firstname , lastname}, email,password,
    vehicle:{ color , plate,capacity, vehicleType}
})
return captain;
}