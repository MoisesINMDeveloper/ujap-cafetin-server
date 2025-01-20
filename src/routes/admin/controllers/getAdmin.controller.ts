import { Request, Response } from 'express';
import { getAdminByUsername } from '../services/getAdmin.service';

export const getAdminByUsernameController = async (
  req: Request,
  res: Response
) => {
  const result = await getAdminByUsername(req.params.username);
  res
    .status(result.status)
    .json(
      result.admin ? { exists: true } : { exists: false, error: result.message }
    );
};
