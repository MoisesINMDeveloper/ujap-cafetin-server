import category from "../../../models/category.prisma"

export const updateCategory = async (id: number, name:string)=>{
    try {
        const updatedCategory = await category.update({
            where : { id },
            data:{ name }
        })
        return updatedCategory
    } catch (error) {
        throw new Error('La categoria no pudo ser actualizada.')
    }
}