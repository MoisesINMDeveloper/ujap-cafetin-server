import { Router } from 'express';
import {
  createCategoryController,
  deleteCategoryController,
  getCategoriesController,
  getCategoryController,
  updateCategoryController,
} from './controllers';
import { authenticatedReq } from '../../middleware/auth.middleware';

const router = Router();
router.post('/', authenticatedReq, createCategoryController);
router.get('/all-categories', getCategoriesController);
router.get('/:id', authenticatedReq, getCategoryController);
router.put('/:id', authenticatedReq, updateCategoryController);
router.delete('/:id', authenticatedReq, deleteCategoryController);

export default router;
