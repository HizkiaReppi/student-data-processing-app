import express from 'express';
import { addData, deleteData, getAllData, getDetailData, updateData } from '../controllers/student.js';
import { validateStudent } from '../middleware/index.js';

const router = express.Router();

router.post('/', validateStudent, addData);
router.get('/', getAllData);
router.get('/:id', getDetailData);
router.put('/:id', validateStudent, updateData);
router.delete('/:id', deleteData);

export default router;
