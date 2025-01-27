const express =require ('express');
const router = express.Router();
const { body , validationResult } = require('express-validator');
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt'); // this is for password incryption
const jwt =require('jsonwebtoken'); 

router.get('/register', (req,res) =>{
    res.render('register');
})
router.post( '/register',
        body('email').trim().isEmail().isLength({min:10}),
        body('username').trim().isLength({ min: 3 }),
        body('password').trim().isLength({ min: 5 }),
        // controller
async  (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(),
                message :"INVALID DATA !"
             });
        }
        const { email , username , password } = req.body;
        const hashPassword = await bcrypt.hash(password ,10)
     const newUser = await userModel.create({
        email,
        username,
        password :hashPassword
     })
     res.json(newUser);
    });

router.get('/login', (req,res) =>{
    res.render('login');
})
router.post('/login',
    body('username').trim().isLength({min:5}), 
    body('password').trim().isLength({min:5}),   
    async (req,res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(404).json({
                error:errors.array(),
                message: 'Invalid username or password'
            })
        }
        const { username, password } = req.body;
        const user = await userModel.findOne({ username:username });
        if(!user) {
            return res.status(404).json({
                error: 'UserName or Password is incorrect'
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(404).json({
                error: 'UserName or Password is incorrect'
            })
        }
        const token =jwt.sign({
            userId: user._id,
            email:user.email,
            username:user.username,  
        },process.env.JWT_SECRET,)
        res.json({ token: token })
})

module.exports = router;