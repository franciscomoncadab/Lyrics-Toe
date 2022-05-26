import express from 'express';
import { registerUser, authLoginUser, confirm, forgotPassword, verifyToken, newPassword, profile}  from '../controllers/userController.js';
import checkAuth from '../middleware/checkAuth.js';


const router = express.Router();

//Auth, Register and confirm users

router.post('/', registerUser); //Register
router.post('/login', authLoginUser); //Auth
router.get('/confirm/:token',confirm); //Confirm user
router.post('/forgotPassword', forgotPassword); //Forgot password
router.route('/forgotPassword/:token').get(verifyToken).post(newPassword);

router.get('/profile', checkAuth, profile); 

export default router;