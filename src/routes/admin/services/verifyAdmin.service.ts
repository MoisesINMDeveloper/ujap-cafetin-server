import { comparePassword } from '../../../utils/bcrypt';
import { getAdminByUsername } from './getAdmin.service';
import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET_KEY || 'your-secret-key';

export const verifyAdminPassword = async (
  username: string,
  password: string
) => {
  try {
    const result = await getAdminByUsername(username);
    const admin = result.admin;

    if (admin && (await comparePassword(password, admin.password))) {
      // Generar el token al validar las credenciales
      const token = jwt.sign(
        { id: admin.id, username: admin.username },
        secretKey,
        { expiresIn: '1h' }
      );
      return { status: 200, admin, token };
    }

    return { status: 401, message: 'Invalid credentials.' };
  } catch (error) {
    return { status: 500, message: 'Internal server error.' };
  }
};
