import express from 'express';
import PersonController from '../controllers/PersonController.js';

const router = express.Router();

router.post('/missing', PersonController.create);
router.get('/missing', PersonController.listAll);
router.patch('/missing/:id/status', PersonController.updateStatus);

export default router;