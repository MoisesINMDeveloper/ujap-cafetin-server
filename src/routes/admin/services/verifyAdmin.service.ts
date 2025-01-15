import { comparePassword } from '../../../utils/bcrypt';
import { getAdminByUsername } from './getAdmin.service';

export const verifyAdminPassword = async (username: string, password: string) => {
  try {
    const result = await getAdminByUsername(username);
    const admin = result.admin;

    if (admin && await comparePassword(password, admin.password)) {
      return { status: 200, admin };
    }

    return { status: 401, message: 'Invalid credentials.' };
  } catch (error) {
    return { status: 500, message: 'Internal server error.' };
  }
};
