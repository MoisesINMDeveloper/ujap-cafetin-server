import { Request, Response } from 'express';
import product from '../../../models/product.prisma';
export const deleteProductcontroller = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await product.delete({
      where: {
        id: parseInt(productId),
      },
    });
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(deletedProduct);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
