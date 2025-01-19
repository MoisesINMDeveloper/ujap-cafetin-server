import { Request, Response } from 'express';
import product from '../../../models/product.prisma';
export const deleteProductController = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await product.delete({
      where: {
        id: parseInt(productId),
      },
    });
    if (!deletedProduct) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    res.status(200).json('Product deleted successfully');
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
