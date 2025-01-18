import type { Request, Response } from 'express';
import { updateCategory } from '../services/updateCategory.service';

export const updateCategoryController = async (req: Request, res: Response) => {
  const { id, name } = req.body;
  try {
    const category = await updateCategory(id, name);
    res.status(200).json(category);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
