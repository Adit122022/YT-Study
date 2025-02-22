import { Router } from "express";
import { createUserController, LoginUserController } from "../controllers/user.controller.js";
import { loginUserValidator, registerUserValidator } from "../middlewares/user.middlewares.js";


const router = Router();


router.post('/register' , registerUserValidator, createUserController)
router.post('/login' ,loginUserValidator , LoginUserController)
export default router;