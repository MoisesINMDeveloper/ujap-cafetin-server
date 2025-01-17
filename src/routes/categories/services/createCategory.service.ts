import category from "../../../models/category.prisma"

export const createCategory = async (name:string)=>{
    try{
        const existingCategory = await category.findUnique({
            where: { name }
        });
        if(existingCategory){
            throw new Error("La categoria ya existe.")
        }

        const newCategory = await category.create({
            data:{
                name,
            }
        });
        return newCategory
    } catch(error) {
        throw new Error('La categoria no ha sido creada.')
    }
}