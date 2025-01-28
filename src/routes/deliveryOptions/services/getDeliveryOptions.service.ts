import { Request, Response } from 'express';
import deliveryPrisma from '../../../models/delivery.prisma';
export const getDeliveryOptionsServices = async (req:Request, res:Response) => {
    try {
        const deliveryOptions = await deliveryPrisma.findMany();
        res.status(200).json(deliveryOptions);
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
}