//import { CreateDiscountDto } from "../types/dto/createDiscount.dto";
//import { UpdateDiscountDto } from "../types/dto/updateDiscount.dto";
import { Pagination } from "../../types/paginate.type"
import { Logger as winstonLogger } from "winston";
import logger from "../../config/logger";
import { Discount, PrismaClient } from "../../generated/prisma/client";
import { prismaClientProvider } from "../../services/prisma.service";
import { CreateDiscountDto } from "../../types/dto/createDiscount.dto";


export abstract class DiscountServiceAbstract {
    readonly prismaClient: PrismaClient = prismaClientProvider;
    readonly logger: winstonLogger = logger;
    /**
     * Create a new discount
     * @param discountData Discount details
     * @returns Created discount object or null
     */
    abstract createDiscount(discountData: CreateDiscountDto): Promise<Discount | null>;

    /**
     * Find a discount by ID
     * @param discountId Unique discount identifier
     * @returns Discount object or null if not found
     */
    abstract findDiscountById(discountId: string): Promise<Discount | null>;

    /**
     * Fetch all discounts with pagination
     * @param paginate Pagination details
     * @returns Array of discount objects
     */
    abstract getAllDiscounts(paginate: Pagination): Promise<Discount[]>;




    /**
     * Check if a discount code is valid
     * @param discountCode Discount code
     * @returns True if valid, false otherwise
     */
    abstract isValidDiscount(discountCode: string): Promise<boolean>;

    /**
     * Fetch all valid discounts only  with pagination
     * @param paginate Pagination details
     * @returns Array of discount objects
     */
    abstract getValidDiscounts(paginate: Pagination): Promise<Discount[]>;

    /**
     * Delete a discount by ID
     * @param discountId Unique discount identifier
     * @returns Deletion confirmation or error
     */
    abstract deleteDiscount(discountId: string): Promise<boolean>;

    /**
     * Apply discount to a room reservation
     * @param discountCode Discount code
     * @param roomId Room ID
     * @returns Discount details or null if invalid
     */
    abstract applyDiscount(discountCode: string, roomId: string): Promise<Discount | null>;
}