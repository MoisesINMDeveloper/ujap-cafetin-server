import { Request, Response } from 'express';
import paydates from '../../../models/payDates.prisma';
export const deletePaydateController = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    await paydates.delete({
      where: { id: Number(id) },
    });

    res.status(204).end();
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}