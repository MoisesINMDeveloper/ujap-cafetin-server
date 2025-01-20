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
<<<<<<< HEAD
router.get('/all-categories', getCategoriesController);
=======
router.get('/all-categories', authenticatedReq, getCategoriesController);
>>>>>>> d007b5b992be42dd50c525f5347fba5fa48acee7
router.get('/:id', authenticatedReq, getCategoryController);
router.put('/', authenticatedReq, updateCategoryController);
router.delete('/:id', authenticatedReq, deleteCategoryController);

export default router;
