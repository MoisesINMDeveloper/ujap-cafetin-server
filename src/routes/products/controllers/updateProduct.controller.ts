import type { Request, Response } from 'express';
import { updateProductService } from '../services/updateProduct.service';

export const updateProductController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const productId = req.params.id;
    const productData = req.body;
    const updatedProduct = await updateProductService(productId, productData);
    if (!updatedProduct) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    res.status(200).json(updatedProduct);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
