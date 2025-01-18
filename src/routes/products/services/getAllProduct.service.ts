import product from '../../../models/product.prisma';

export const getAllProduct = async () => {
  return await product.findMany();
};
