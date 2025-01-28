import {Request, Response } from "express";
import paydates from "../../../models/payDates.prisma";

export const getPaydateController = async (req:Request, res:Response) => {
    try {
        const paydate = await paydates.findMany();
        res.status(200).json(paydate);
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
}