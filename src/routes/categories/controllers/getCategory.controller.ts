import { Request, Response } from 'express';
import { getCategoryById } from '../services/getCategorybyId.service';

export const getCategoryController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const category = await getCategoryById(parseInt(id));
    res.status(200).json(category);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
