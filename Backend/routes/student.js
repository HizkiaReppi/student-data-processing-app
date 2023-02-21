import express from 'express';
import { addData, deleteAllData, deleteData, getAllData, getDetailData, updateData } from '../controllers/student.js';
import { validateStudent } from '../middleware/index.js';

const router = express.Router();

router.post('/', validateStudent, addData);
router.get('/', getAllData);
router.get('/:id', getDetailData);
router.put('/:id', validateStudent, updateData);
router.delete('/:id', deleteData);
router.delete('/', deleteAllData);

export default router;
