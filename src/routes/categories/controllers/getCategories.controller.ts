import { Request, Response } from 'express';
import { getCategory } from '../services/getCategory.service';
export const getCategoriesController = async (req: Request, res: Response) => {
  try {
    const category = await getCategory();
    res.status(200).json(category);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
