import { HotelAbstract } from "../abstract/services/hotel.abstract";
import { Hotel, PrismaClient } from "../generated/prisma/client";
import { CreateHotelDto } from "../types/dto/createHotel.dto";
import { Pagination } from "../types/paginate.type";
import { UpdateHotelDto } from "../types/dto/updateHotel.dto";

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
        paginate: Pagination
    ): Promise<Hotel[]> {
        try {

            const skip = (paginate.page - 1) * paginate.perPage;
            const take = paginate.perPage;
            const hotelList: Hotel[] = await this.prismaClient.hotel.findMany({
                include: {
                    rooms: true,
                },
                skip,
                take
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
        newPayload: UpdateHotelDto
    ): Promise<Hotel | null> {
        try {
            const updatedHotel: Hotel | null = await this.prismaClient.hotel.update({
                where: { id: hotelId },
                data: {
                    ...newPayload,
                    updatedAt: new Date(),
                },
            });
            return updatedHotel;
        }
        catch (error) {
            this.logger.error("Error updating hotel:", error);
            return null;
        }
    }

    async deleteHotel(
        hotelId: string
    ): Promise<boolean> {
        try {
            await this.prismaClient.hotel.delete({
                where: { id: hotelId },
            });
            return true;
        } catch (error) {
            this.logger.error("Error deleting hotel:", error);
            return false;
        }
    }
}