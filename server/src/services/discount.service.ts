
import { DiscountServiceAbstract } from "../abstract/services/discount.abstract";
import { Discount } from "../generated/prisma/client";
import { CreateDiscountDto } from "../types/dto/createDiscount.dto";
import { Pagination } from "../types/paginate.type";

export class DiscountService extends DiscountServiceAbstract {

    async createDiscount(discountData: CreateDiscountDto): Promise<Discount | null> {
        try {
            return await this.prismaClient.discount.create({
                data: { ...discountData, validUntil: new Date(discountData.validUntil) }
            });
        } catch (error) {
            this.logger.error("Error creating discount:", error);
            return null;
        }
    }


    async isValidDiscount(discountCode: string): Promise<boolean> {
        try {
            const discount = await this.prismaClient.discount.findFirst({
                where: {
                    code: discountCode
                }
            });
            if (!discount) {
                this.logger.warn(`Discount with code ${discountCode} not found`);
                return false;
            }
            // Check if the discount is still valid
            if (discount.validUntil && new Date(discount.validUntil) >= new Date()) {
                return true;
            }
            this.logger.warn(`Discount with code ${discountCode} has expired`);
            return false;
        } catch (error) {
            this.logger.error("Error validating discount:", error);
            return false;
        }
    }

    async findDiscountById(discountId: string): Promise<Discount | null> {
        try {
            return await this.prismaClient.discount.findUnique({ where: { id: discountId } });
        } catch (error) {
            this.logger.error("Error finding discount by ID:", error);
            return null;
        }
    }

    async getAllDiscounts(paginate: Pagination): Promise<Discount[]> {
        try {
            const skip = (paginate.page - 1) * paginate.perPage;
            return await this.prismaClient.discount.findMany({ skip, take: paginate.perPage });
        } catch (error) {
            this.logger.error("Error fetching all discounts:", error);
            return [];
        }
    }

    async getValidDiscounts(paginate: Pagination): Promise<Discount[]> {
        try {
            const currentDate = new Date();
            const { page = 1, limit = 100, perPage = 10 } = paginate;
            const skip = (page - 1) * perPage;
            return await this.prismaClient.discount.findMany({
                where: {
                    validUntil: { gte: currentDate },
                },
                skip,
                take: perPage,
            });
        } catch (error) {
            this.logger.error("Error fetching valid discounts:", error);
            return [] as Discount[];
        }
    }

    async deleteDiscount(discountId: string): Promise<boolean> {
        try {
            await this.prismaClient.discount.delete({ where: { id: discountId } });
            return true;
        } catch (error) {
            this.logger.error("Error deleting discount:", error);
            return false;
        }
    }

    async applyDiscount(discountCode: string, roomId: string): Promise<Discount | null> {
        try {
            return await this.prismaClient.discount.findFirst({
                where: {
                    code: discountCode,
                    roomId,
                    validUntil: { gte: new Date() } // Ensure discount is still valid
                }
            });
        } catch (error) {
            this.logger.error("Error applying discount:", error);
            return null;
        }
    }
}