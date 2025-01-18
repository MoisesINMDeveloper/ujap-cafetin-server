import { Request, Response } from 'express';
import { getAllProduct } from '../services/getAllProduct.service';

export const getAllProductController = async (req: Request, res: Response) => {
  try {
    const products = await getAllProduct();
    res.status(200).json(products);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
