import { PrismaClient } from '@prisma/client';
import { hashPassword, comparePassword } from '../utils/bcrypt';

const prisma = new PrismaClient();

export const createAdmin = async (username: string, password: string) => {
  // Verifica si el username ya existe
  const existingAdmin = await prisma.userAdmin.findUnique({
    where: { username },
  });

  if (existingAdmin) {
    throw new Error('Username already exists');
  }

  const hashedPassword = await hashPassword(password);
  return await prisma.userAdmin.create({
    data: {
      username,
      password: hashedPassword,
    },
  });
};

export const getAdminByUsername = async (username: string) => {
  return await prisma.userAdmin.findUnique({
    where: { username },
  });
};

export const verifyAdminPassword = async (username: string, password: string) => {
  const admin = await getAdminByUsername(username);
  if (admin && await comparePassword(password, admin.password)) {
    return admin;
  }
  return null;
};
