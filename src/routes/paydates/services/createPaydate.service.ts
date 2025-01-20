import paydates from '../../../models/payDates.prisma';
export const createPaydateServices = async (payData: any) => {
    try {
        const newPaydate = await paydates.create({
            data: payData
        });
        return newPaydate;
    } catch (error) {
        throw new Error('Error creating paydate');
    }
}