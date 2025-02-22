import { validationResult } from "express-validator";
import { createUser, loginUser } from "../services/user.service.js";

export const createUserController = async (req, res) => {
    try {
      const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ message: errors.array() });
    const { username, email, password } = req.body;
    console.log(req.body);
    const user = await createUser({ username, email, password }); // service
    const token = user.generateToken();
    res.status(201).json({ user, token });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

export const LoginUserController = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({ message: errors.array() });
    const { email, password } = req.body;
   const user = await loginUser({email,password})
    const token = user.generateToken();
    res.json({ user, token });
  } catch (err) {
    console.error(err);
    res.status(401).send(err.message);
  }
};
