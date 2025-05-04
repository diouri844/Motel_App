import { GuestServiceAbstract } from "../abstract/services/guest.abstract";
import { Guest } from "../generated/prisma/client";
import { CreateGuestDto } from "../types/dto/createGuest.dto";
import { UpdateGuestDto } from "../types/dto/updateGuest.dto";
import { Pagination } from "../types/paginate.type";



export class GuestService extends GuestServiceAbstract {

    async createGuest(guestData: CreateGuestDto): Promise<Guest | null> {
        try {
            return await this.prismaClient.guest.create({ data: guestData });
        } catch (error) {
            this.logger.error("Error creating guest:", error);
            return null;
        }
    }

    async findGuestById(guestId: string): Promise<Guest | null> {
        try {
            return await this.prismaClient.guest.findUnique(
                {
                    where: { id: guestId },
                    include: { Reservation: true }

                });
        } catch (error) {
            this.logger.error("Error finding guest by ID:", error);
            return null;
        }
    }
    async findGuestByEmail(guestEmail: string): Promise<Guest | null> {
        try {
            return await this.prismaClient.guest.findUnique(
                {
                    where: { email: guestEmail },
                    include: { Reservation: true }
                });
        } catch (error) {
            this.logger.error("Error finding guest by ID:", error);
            return null;
        }
    };
    async findGuestByPhone(guestPhone: string): Promise<Guest | null> {
        try {
            return await this.prismaClient.guest.findFirst(
                {
                    where: { phone: guestPhone },
                    include: { Reservation: true }
                });
        } catch (error) {
            this.logger.error("Error finding guest by ID:", error);
            return null;
        }
    };



    async getAllGuests(paginate: Pagination): Promise<Guest[]> {
        try {
            const skip = (paginate.page - 1) * paginate.perPage;
            return await this.prismaClient.guest.findMany(
                {
                    where: {},
                    include: {
                        Reservation: true
                    },
                    skip,
                    take: paginate.perPage
                }
            );
        } catch (error) {
            this.logger.error("Error fetching all guests:", error);
            return [];
        }
    }

    async updateGuest(guestId: string, updateData: UpdateGuestDto): Promise<Guest | null> {
        try {
            return await this.prismaClient.guest.update({ where: { id: guestId }, data: updateData });
        } catch (error) {
            this.logger.error("Error updating guest:", error);
            return null;
        }
    }

    async deleteGuest(guestId: string): Promise<boolean> {
        try {
            await this.prismaClient.guest.delete({ where: { id: guestId } });
            return true;
        } catch (error) {
            this.logger.error("Error deleting guest:", error);
            return false;
        }
    }
}