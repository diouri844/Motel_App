import { HotelAbstract } from "../abstract/hotel.abstract";
import { Hotel, PrismaClient } from "../generated/prisma/client";
import { CreateHotelDto } from "../types/createHotel.dto";

export class HotelService extends HotelAbstract {


    async createHotel(
        name: string,
        location: string
    ): Promise<Hotel | null> {
        try {
            const hotelPayload: CreateHotelDto = {
                name,
                location,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const newCreatedHotel: Hotel = await this.prismaClient.hotel.create({
                data: hotelPayload,
            });
            return newCreatedHotel;
        } catch (error) {
            this.logger.error("Error creating hotel:", error);
            return null;
        }
    }
    async getHotelById(hotelId: string): Promise<Hotel | null> {

        try {
            const targetHotel: Hotel | null = await this.prismaClient.hotel.findUnique({
                where: { id: hotelId },
                include: {
                    rooms: true,
                },
            });
            if (!targetHotel) return null;
            return targetHotel;
        } catch (error) {
            this.logger.error("Error fetching hotel by ID:", error);
            return null;
        }
    };

    async getAllHotels(
        paginate: object,
        filters?: object
    ): Promise<Hotel[]> {
        try {
            const hotelList: Hotel[] = await this.prismaClient.hotel.findMany({
                where: filters,
                include: {
                    rooms: true,
                },
                ...paginate,
            });
            return hotelList;
        }
        catch (error) {
            this.logger.error("Error fetching all hotels:", error);
            return [];
        }
    }
    async updateHotel(
        hotelId: string,
        updates: object
    ): Promise<Hotel | null> { return null; }

    async deleteHotel(hotelId: string): Promise<boolean> { return false; }
}