import type { Request, Response } from 'express';
import product from '../../../models/product.prisma';

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleteProduct = await product.delete({
      where: { id: Number(id) },
    });
    res.status(200).json(deleteProduct);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
