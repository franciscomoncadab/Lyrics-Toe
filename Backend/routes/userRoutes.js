import express from 'express';
import { registerUser,  } from '../controllers/userController.js';

const router = express.Router();

//Auth, Register and confirm users

router.post('/', registerUser) //Register
router.post('/login', Auth); //Auth
export default router;