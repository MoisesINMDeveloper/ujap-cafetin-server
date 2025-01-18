import category from '../../../models/category.prisma';

export const getCategoryById = async (id: number) => {
  try {
    const categoryFound = await category.findUnique({
      where: { id },
      include: {
        products: true,
      },
    });

    if (!categoryFound) {
      throw new Error('Categoria no encontrada');
    }
    return categoryFound;
  } catch (error) {
    throw new Error('Error al obtener la categoria.');
  }
};
