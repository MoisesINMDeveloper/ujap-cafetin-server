import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProductService = async (id: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
      include: { category: true },
    });

    return product;
  } catch (error: any) {
    throw new Error('Error fetching product');
  }
};
