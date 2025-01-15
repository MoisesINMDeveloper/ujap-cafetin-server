import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { verifyAdminPassword } from '../services/verifyAdmin.service';

const secretKey = process.env.JWT_SECRET_KEY || 'your-secret-key';

// Autenticarse como administrador
export const loginAdminController = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  const result = await verifyAdminPassword(username, password);

  if (result.status === 200 && result.admin) {
    const token = jwt.sign({ id: result.admin.id, username: result.admin.username }, secretKey, { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(result.status).json({ error: result.message });
  }
};
