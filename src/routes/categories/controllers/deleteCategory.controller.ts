import type { Response, Request } from 'express';
import { deleteCategory } from '../services/deleteCategory.service';

export const deleteCategoryController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const category = await deleteCategory(parseInt(id));
    res.status(200).json(category);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
