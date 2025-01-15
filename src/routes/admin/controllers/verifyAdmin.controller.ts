import { Request, Response } from 'express';
import { verifyAdminPassword } from '../services/verifyAdmin.service';

export const verifyAdminPasswordController = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  const result = await verifyAdminPassword(username, password);

  res.status(result.status).json(result.admin ? { valid: true, admin: result.admin } : { valid: false, error: result.message });
};
