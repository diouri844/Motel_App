import { Logger as winstonLogger } from "winston";
import logger from "../config/logger";
import { Hotel, PrismaClient } from "../generated/prisma/client";
import { prismaClientProvider } from "../services/prisma.service";

export abstract class HotelAbstract {
    readonly prismaClient: PrismaClient = prismaClientProvider;
    readonly logger: winstonLogger = logger;
    /**
     * Create a new hotel entry
     * @param name Hotel name
     * @param location Hotel location
     * @returns Created hotel object
     */
    abstract createHotel(name: string, location: string): Promise<Hotel | null>;

    /**
     * Retrieve a hotel by its ID
     * @param hotelId Unique hotel identifier
     * @returns Hotel object or null if not found
     */
    abstract getHotelById(hotelId: string): Promise<Hotel | null>;

    /**
     * Fetch all hotels with optional filters
     * @param filters Query filters (optional)
     * @returns Array of hotels
     */
    abstract getAllHotels(filters?: object): Promise<Hotel[]>;

    /**
     * Update hotel details
     * @param hotelId Unique hotel identifier
     * @param updates Fields to update
     * @returns Updated hotel object or error
     */
    abstract updateHotel(hotelId: string, updates: object): Promise<Hotel | null>;

    /**
     * Delete a hotel by ID
     * @param hotelId Unique hotel identifier
     * @returns Deletion confirmation or error
     */
    abstract deleteHotel(hotelId: string): Promise<boolean>;
}