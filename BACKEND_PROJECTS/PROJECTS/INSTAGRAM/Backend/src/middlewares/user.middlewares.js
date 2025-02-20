import {body} from 'express-validator'

 export const registerUserValidator = [
    body('username')
    .isString().withMessage('username must be a string')
    .isLength({min:3 , max:20}).withMessage('Username must be between 3 and 20 characters')
    .custom((value) =>value === value.toLowerCase()).withMessage('Username must be lowercase'),
body('email')
    .isEmail().withMessage('Email must be a valid email'),
body('password')
    .isString().withMessage('Password must be a valid password')
    .isLength({min:4 , max:8}).withMessage('Password must be between 6 and 8 characters')
]