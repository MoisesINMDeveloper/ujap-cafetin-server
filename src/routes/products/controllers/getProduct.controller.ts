import { Request, Response } from 'express';
import { getProductService } from '../services/getProduct.service';

export const getProductController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const productId = req.params.id;
    const product = await getProductService(productId);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    res.status(200).json(product);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
