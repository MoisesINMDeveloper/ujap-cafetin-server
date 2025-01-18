import product from '../../../models/product.prisma';

export const updateProductService = async (id: string, productData: any) => {
  try {
    const updatedProduct = await product.update({
      where: { id: Number(id) },
      data: productData,
    });

    return updatedProduct;
  } catch (error: any) {
    throw new Error('Error updating product');
  }
};
