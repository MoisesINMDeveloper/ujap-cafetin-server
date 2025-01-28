import paydates from "../../../models/payDates.prisma";
import { Request, Response } from "express";

export const putPaydateController = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { bank, code, cedula, phone } = req.body;

  try {
    const updatedPaydate = await paydates.update({
      where: { id: Number(id) },
      data: {
        bank,
        code,
        cedula,
        phone,
      },
    });

    res.status(200).json(updatedPaydate);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
