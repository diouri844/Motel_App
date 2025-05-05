import { Reservation } from "../../generated/prisma/client";
import { CreateReservationDto } from "../../types/dto/createReservation.dto";
import { Pagination } from "../../types/paginate.type";



export abstract class ReservationServiceAbstract {
    abstract createReservation(
        reaservationPatload: CreateReservationDto
    ): Promise<Reservation | null>;

    abstract getReservationById(reservationId: string): Promise<Reservation | null>;

    abstract getAllReservations(pagination: Pagination): Promise<Reservation[]>;

    abstract deleteReservation(reservationId: string): Promise<boolean>;
}