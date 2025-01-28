import deliveryPrisma from "../../../models/delivery.prisma";
import { Request, Response } from "express";
export const createDeliveryOptionService = async (req:Request, res:Response) => {
  try{
    const {name, fee} = req.body;
    const newDeliveryOption = await deliveryPrisma.create({
      data: {
        name,
        fee
      }
    });
    res.status(201).json(newDeliveryOption);
  } catch(error: any){
        res.status(400).json({message: error.message});
    }
}