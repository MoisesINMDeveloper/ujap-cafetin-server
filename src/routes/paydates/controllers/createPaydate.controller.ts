import { Request, Response } from "express";
import paydates from "../../../models/payDates.prisma";

export const createPaydateController = async (req: Request, res: Response) => {
    const { bank, code, cedula, phone } = req.body
    try {
        const newPaydate = await paydates.create({
            data: {
                bank,
                code,
                cedula,
                phone
            }
        });
        res.status(201).json(newPaydate);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}