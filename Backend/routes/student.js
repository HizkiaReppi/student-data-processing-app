import express from 'express';
import { addData } from '../controllers/student.js';

const router = express.Router();

router.post('/', addData);

export default router;
