import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const generate_Token = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

const generate_HashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hash(password, salt);
};

export const signup = async (req, res) => {
  const { fullname, email, password } = req.body;
  console.log(req.body);

  try {
    if (!fullname || !email || !password)
      return res.status(400).json({ message: "All fields are required" });
    if (password.length < 6)
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    // user exist or not
    const userExist = User.findOne({ email });
    if (userExist)
      return res.status(400).json({ message: "User already exist" });
    //  if user not exist create user

    const user = await User.create({
      fullname,
      email,
      password: generate_HashPassword(password),
    });
   
    // if user created successfully then generate token and send response
    const token = generate_Token(user._id);
    res.status(200).json({});
  } catch (error) {
    console.log("Signup error  -->"  , error.message )
  }
};

export const login = async(req, res) => {
    const { fullname, email, password } = req.body;
    console.log(req.body);
  
    try {
      if (!fullname || !email || !password)
        return res.status(400).json({ message: "All fields are required" });
      if (password.length < 6)
        return res
          .status(400)
          .json({ message: "Password must be at least 6 characters" });
      // user exist or not
      const userExist = User.findOne({ email });
      if (userExist)
        return res.status(400).json({ message: "User already exist" });
      //  if user not exist create user
  
      const user = await User.create({
        fullname,
        email,
        password: generate_HashPassword(password),
      });
  
      // if user created successfully then generate token and send response
      const token = generate_Token(user._id);
      res.status(200).json({});
    } catch (error) {
      console.log("Signup error  -->"  , error.message )
    }
};
export const logout = (req, res) => {
  res.send("logout route");
};
