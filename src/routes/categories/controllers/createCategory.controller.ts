import type {Request, Response } from "express";
import { createCategory } from "../services/createCategory.service";

export const createCategoryController = async (req:Request, res:Response) =>{
    const { name } = req.body;
    try {
        const category = await createCategory(name);
        res.status(201).json(category);
    } catch (error:any) {
        res.status(400).json({message: error.message})        
    }
}