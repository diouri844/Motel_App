import { GuestServiceAbstract } from "../abstract/services/guest.abstract";
import { Guest, PrismaClient } from "../generated/prisma/client";
import { CreateGuestDto } from "../types/dto/createGuest.dto";
import { UpdateGuestDto } from "../types/dto/updateGuest.dto";
import { Pagination } from "../types/paginate.type";

export class GuestService extends GuestServiceAbstract {

    async createGuest(guestPayload: CreateGuestDto): Promise<Guest | null> {
        try {
            return await this.prismaClient.guest.create({ data: guestPayload });
        } catch (error) {
            console.error("Error creating new guest:", error);
            return null;
        }
    }

    async findGuestById(guestId: string): Promise<Guest | null> {
        try {
            return await this.prismaClient.guest.findUnique({ where: { id: guestId } });
        } catch (error) {
            console.error("Error finding guest by ID:", error);
            return null;
        }
    }

    async findGuestByEmail(guestEmail: string): Promise<Guest | null> {
        try {
            return await this.prismaClient.guest.findUnique({ where: { email: guestEmail } });
        } catch (error) {
            console.error("Error finding guest by ID:", error);
            return null;
        }
    }


    async findGuestByPhone(guestPhone: string): Promise<Guest | null> {
        try {
            return await this.prismaClient.guest.findFirst({ where: { phone: guestPhone } });
        } catch (error) {
            console.error("Error finding guest by ID:", error);
            return null;
        }
    }


    async getAllGuests(pagination: Pagination): Promise<Guest[]> {
        try {
            const { page, perPage } = pagination;
            const skip = (page - 1) * perPage;
            return await this.prismaClient.guest.findMany({ skip, take: perPage });
        } catch (error) {
            console.error("Error fetching all guests:", error);
            return [];
        }
    }

    async updateGuest(guestId: string, guestPayload: UpdateGuestDto): Promise<Guest | null> {
        try {
            return await this.prismaClient.guest.update({ where: { id: guestId }, data: guestPayload });
        } catch (error) {
            console.error("Error updating guest:", error);
            return null;
        }
    }

    async deleteGuest(guestId: string): Promise<boolean> {
        try {
            await this.prismaClient.guest.delete({ where: { id: guestId } });
            return true;
        } catch (error) {
            console.error("Error deleting guest:", error);
            return false;
        }
    }
}