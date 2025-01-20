import paydates from "../../../models/payDates.prisma"

export const updatePaydates = async( id :string  , payData: any) =>{
    try {
        const updatePaydates = await paydates.update({
            where:{id:Number(parseInt(id))},
            data: payData
        })
        return updatePaydates
    } catch (error) {
        throw new Error('Error updating paydate')
    }
}