import express from 'express';
const router = express.Router()

import { createShift, 
    getAllShifts, 
    updateShift, 
    deleteShift, 
    showStats } from '../controllers/shiftsController.js'


router.route('/').post(createShift).get(getAllShifts)
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteShift).patch(updateShift)

export default router