import { PrismaClient, Reservation } from "../generated/prisma/client";
import { ReservationServiceAbstract } from "../abstract/services/reservationService.abstract";
import { Pagination } from "../types/paginate.type";
import logger from "../config/logger";
import { CreateReservationDto } from "../types/dto/createReservation.dto";

export class ReservationService extends ReservationServiceAbstract {

    async createReservation(
        reservationPayload: CreateReservationDto
    ): Promise<Reservation | null> {
        try {
            const reservation = await this.prismaClient.reservation.create({
                data: reservationPayload as Reservation,
            });
            return reservation;
        } catch (error) {
            logger.error("Error creating reservation:", error);
            return null;
        }
    }

    async getReservationById(reservationId: string): Promise<Reservation | null> {
        try {
            return await this.prismaClient.reservation.findUnique({
                where: { id: reservationId },
                include: {
                    hotel: true,
                    guestInformation: true,
                },
            });
        } catch (error) {
            logger.error("Error fetching reservation by ID:", error);
            return null;
        }
    }

    async getAllReservations(pagination: Pagination): Promise<Reservation[]> {
        try {
            const skip = (pagination.page - 1) * pagination.perPage;
            const take = pagination.perPage;

            return await this.prismaClient.reservation.findMany({
                skip,
                take,
                include: {
                    hotel: true,
                    guestInformation: true,
                },
            });
        } catch (error) {
            logger.error("Error fetching reservations:", error);
            return [] as Reservation[];
        }
    }

    async deleteReservation(reservationId: string): Promise<boolean> {
        try {
            await this.prismaClient.reservation.delete({
                where: { id: reservationId },
            });
            return true;
        } catch (error) {
            logger.error("Error deleting reservation:", error);
            return false;
        }
    }
}