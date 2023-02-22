import express from 'express';
import { register, login } from '../controllers/user.js'
import { validateLogin, validateUser } from '../middleware/index.js'

const router = express.Router();

router.post('/register', validateUser, register);
router.post('/login', validateLogin, login);

export default router;
