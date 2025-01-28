const {UserModel} = require("../models/user.model");

module.exports.createUser = async({ email, password, firstname , lastname }) => {

    if(!email || !password || !firstname ) throw new Error('All fields are required');

    const user = UserModel.create({  fullname : { firstname,lastname}, email , password })
    return user;
}