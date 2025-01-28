import { Request, Response } from 'express';
import deliveryPrisma from '../../../models/delivery.prisma';
export const deleteDeliveryController = async (req:Request, res:Response) => {
    try {
        const {id} = req.params;
        const deletedDeliveryOption = await deliveryPrisma.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.status(200).json(deletedDeliveryOption);
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}  