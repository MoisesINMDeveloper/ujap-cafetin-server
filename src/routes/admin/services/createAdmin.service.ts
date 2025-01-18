import userAdminPrisma from '../../../models/userAdmin.prisma';
import { hashPassword } from '../../../utils/bcrypt';

export const createAdmin = async (username: string, password: string) => {
  try {
    // Verificar si ya existe algún administrador
    const adminCount = await userAdminPrisma.count();

    if (adminCount > 0) {
      return { status: 403, message: 'Solo se permite un administrador.' };
    }

    // Verifica si el username ya existe
    const existingAdmin = await userAdminPrisma.findUnique({
      where: { username },
    });

    if (existingAdmin) {
      return { status: 409, message: 'El usuario existe.' };
    }

    // Hashear la contraseña y crear el administrador
    const hashedPassword = await hashPassword(password);
    const admin = await userAdminPrisma.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    return { status: 201, admin };
  } catch (error) {
    return { status: 500, message: 'Problemas con el servidor.' };
  }
};
