import userAdminPrisma from '../../../models/userAdmin.prisma';

export const getAdminByUsername = async (username: string) => {
  try {
    const admin = await userAdminPrisma.findUnique({
      where: { username },
    });

    if (admin) {
      return { status: 200, admin };
    }

    return { status: 404, message: 'Admin not found.' };
  } catch (error) {
    return { status: 500, message: 'Internal server error.' };
  }
};
