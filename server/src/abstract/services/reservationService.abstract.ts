import { Reservation, PrismaClient } from "../../generated/prisma/client";
import { CreateReservationDto } from "../../types/dto/createReservation.dto";
import { Pagination } from "../../types/paginate.type";
import { prismaClientProvider } from "../../services/prisma.service";
import { Logger as winstonLogger } from "winston";
import logger from "../../config/logger";



export abstract class ReservationServiceAbstract {

    readonly prismaClient: PrismaClient = prismaClientProvider;
    readonly logger: winstonLogger = logger;

    abstract createReservation(
        reaservationPatload: CreateReservationDto
    ): Promise<Reservation | null>;

    abstract getReservationById(reservationId: string): Promise<Reservation | null>;

    abstract getAllReservations(pagination: Pagination): Promise<Reservation[]>;

    abstract deleteReservation(reservationId: string): Promise<boolean>;
}