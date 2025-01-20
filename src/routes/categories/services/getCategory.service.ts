import category from '../../../models/category.prisma';

export const getCategory = async () => {
  try {
    const categories = await category.findMany({
      include: {
        products: true,
      },
    });
    return categories;
  } catch (error) {
    throw new Error('Error al obtener categorias.');
  }
};
