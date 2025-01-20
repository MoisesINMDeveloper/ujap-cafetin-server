import { Request, Response } from 'express';
import { createAdmin } from '../services/createAdmin.service';

export const createAdminController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const result = await createAdmin(username, password);
  res
    .status(result.status)
    .json(result.admin ? result.admin : { error: result.message });
};
