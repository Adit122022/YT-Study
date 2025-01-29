const {Router} = require("express");
const { registerCaptin, loginCaptain, captainProfile, logoutCaptain } = require("../controllers/captian.controller");
const router = Router();
const { body } = require('express-validator');
const { authCaptain } = require("../middlewares/auth.middlewares");
 
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be at least 3 characters'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be at least 1 character'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle type')
], registerCaptin)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
],loginCaptain)

router.get('/profile' ,authCaptain,captainProfile)
router.get('/logout',logoutCaptain)


module.exports = router