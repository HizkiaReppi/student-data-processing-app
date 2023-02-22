import express from 'express';
import { register } from '../controllers/user.js'
import { validateUser } from '../middleware/index.js'

const router = express.Router();

router.post('/register', validateUser, register);

export default router;
