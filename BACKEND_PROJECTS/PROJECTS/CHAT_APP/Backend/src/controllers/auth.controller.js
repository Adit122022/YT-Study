const User = require("../models/user.model");

module.exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Validate the input data
    if (!username || !email || !password)
      return res.status(400).json({ msg: "Please enter all fields" });
    if (password < 6)
      return res.status(400).json({ msg: "Password must be of 6 characters" });
    // Check for existing user
    if (User.findOne({ email }))
      return res.status(400).json({ msg: "User already exists" });
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create a new user
    const user = new User({ username, email, password: hashedPassword });
    if (!user) return res.status(400).json({ msg: " could not create user" });
    await user.save();
    // Return a JWT token
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
module.exports.login = (req, res) => {
  res.send("login!");
};
module.exports.logout = (req, res) => {
  res.send("logout!");
};
