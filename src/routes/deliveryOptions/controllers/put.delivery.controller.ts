import { Request, Response } from "express";
import deliveryPrisma from "../../../models/delivery.prisma";
export const putDeliveryController = async (req:Request, res:Response) => {
    try {
        const {id} = req.params;
        const {deliveryOption} = req.body;
        const updatedDeliveryOption = await deliveryPrisma.update({
            where: {
                id: parseInt(id)
            },
            data: {
                deliveryOption: deliveryOption
            }
        });
        res.status(200).json(updatedDeliveryOption);
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
}