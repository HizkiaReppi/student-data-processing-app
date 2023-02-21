import express from 'express';
import { addData } from '../controllers/student.js';
import { validateStudent } from '../middleware/index.js';

const router = express.Router();

router.post('/', validateStudent, addData);

export default router;
