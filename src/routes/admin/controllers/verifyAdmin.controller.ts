import { Request, Response } from 'express';
import { verifyAdminPassword } from '../services/verifyAdmin.service';

export const verifyAdminPasswordController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { username, password } = req.body;
  const result = await verifyAdminPassword(username, password);

  if (result.status === 200) {
    res.status(result.status).json({
      valid: true,
      admin: result.admin,
      token: result.token,
    });
  } else {
    res.status(result.status).json({ valid: false, error: result.message });
  }
};
