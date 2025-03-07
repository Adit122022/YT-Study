const {Router} = require('express');
const { body } = require('express-validator');
const { registerUser ,loginUser, UserProfile, logoutUser } = require('../controllers/user.controller');
const {authUser} = require('../middlewares/auth.middlewares')

const router = Router();

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min :3}).withMessage('Invalid first name'),
    body('fullname.lastname').isLength({min :3}).withMessage('Invalid last name'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
] , registerUser)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],loginUser)

router.get('/profile',authUser, UserProfile)
router.get('/logout' ,logoutUser)
module.exports = router;