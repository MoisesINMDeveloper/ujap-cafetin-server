import { Request, Response } from "express"
import paydates from "../../../models/payDates.prisma"

export const deletePaydateServices = async (req:Request, res:Response)=>{
    try {
        const paydateId = req.params.id
        const  deletedProduct = await paydates.delete({
            where :{
                id:Number(parseInt(paydateId))
            }
        })
        if(!deletedProduct){
            res.status(404).json({message: 'Päydate not found'})
        }
        return
    } catch (error) {
        
    }
}