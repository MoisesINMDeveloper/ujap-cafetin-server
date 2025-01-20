import type { Request, Response } from "express";
import paydates from "../../../models/payDates.prisma";

export const getPaydateServices = async (req: Request, res:Response)=>{
    return await paydates.findMany();
}