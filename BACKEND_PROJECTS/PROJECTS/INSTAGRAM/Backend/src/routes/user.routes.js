import { Router } from "express";
import { createUserController } from "../controllers/user.controller.js";
import { registerUserValidator } from "../middlewares/user.middlewares.js";


const router = Router();


router.post('/register' , registerUserValidator, createUserController)
export default router;