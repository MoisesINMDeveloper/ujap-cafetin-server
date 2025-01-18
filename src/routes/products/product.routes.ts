import { Router } from 'express';
import { authenticatedReq } from '../../middleware/auth.middleware';
import {
  createProductController,
  getAllProductController,
  updateProductController,
  getProductController,
} from './controllers';

const router = Router();

router.post('/', authenticatedReq, createProductController);
router.get('/', authenticatedReq, getAllProductController);
router.get('/:id', authenticatedReq, getProductController);
router.put('/:id', authenticatedReq, updateProductController);

export default router;
