import { Request, Response } from 'express';
import product from '../../../models/product.prisma';

export const createProductController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { title, price, images, description, categoryId } = req.body;
  try {
    const newProduct = await product.create({
      data: {
        title,
        price,
        images: Array.isArray(images) ? images : [images],
        description,
        category: {
          connect: { id: categoryId },
        },
      },
    });
    res.status(201).json(newProduct);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
