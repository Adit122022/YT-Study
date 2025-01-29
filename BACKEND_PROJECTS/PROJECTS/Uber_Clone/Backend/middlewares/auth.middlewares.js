const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    const isBlacklisted = await UserModel.findOne({token: token});
    if(isBlacklisted) return res.status(403).json({ message: "Blacklisted" });
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded._id);
 req.user = user;

   return next();
  } catch (e) { return res.status(500).json({ message: e.message }); } 
}