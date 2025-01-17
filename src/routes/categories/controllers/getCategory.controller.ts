import { Request, Response } from "express";
import { getCategoryById } from "../services/getCategorybyId.service";

export const getCategoryController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.body;
    try {
        const category = await getCategoryById(id);
        res.status(200).json(category);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};
