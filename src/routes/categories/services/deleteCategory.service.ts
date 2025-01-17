import category from "../../../models/category.prisma"

export const deleteCategory = async(id:number)=>{
   try {
    const deletedCategory = await category.delete({
        where: { id }
    })
    return deletedCategory
} catch (error) {
    throw new Error ('Error al eliminar categoria.')
   }
}