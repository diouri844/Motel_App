import { Request, Response } from "express";
import { ReservationService } from "../services/reservation.service";
import { ReservationControllerAbstract } from "../abstract/controllers/reservationController.abstract";
import { CreateReservationDto } from "../types/dto/createReservation.dto";
import { ApiResponse, ResponseStatus } from "../types/apiResponse.type";
import { Reservation } from "../generated/prisma/client";
import { Pagination } from "../types/paginate.type";
import { ReservationFilter } from "../types/reservationFilter.type";

export class ReservationController extends ReservationControllerAbstract {


    async createReservation(req: Request, res: Response): Promise<ApiResponse<Reservation>> {
        const reservationPayload: CreateReservationDto = req.body as CreateReservationDto;
        const reservation = await this.serviceProvider.createReservation(
            reservationPayload
        );
        if (!reservation) {
            return res.status(400).json({
                message: "Server Failed to create new Reservation",
                status: ResponseStatus.ERROR
            });
        }
        return res.status(201).json({ message: "New Reservation created", status: ResponseStatus.SUCCESS, data: reservation });
    }

    async getReservationById(req: Request, res: Response): Promise<ApiResponse<Reservation>> {
        const { reservationId } = req.params;
        const reservation = await this.serviceProvider.getReservationById(reservationId);
        if (!reservation) {
            return res.status(404).json({
                message: "Reservation not found ",
                status: ResponseStatus.NOT_FOUND
            });
        }
        return res.status(200).json({ message: "Reservation retrived with success", status: ResponseStatus.SUCCESS, data: reservation });
    };

    async getAllReservations(req: Request, res: Response): Promise<ApiResponse<Reservation[]>> {
        const { page, perPage, limit, roomId, guestId, hotelId } = req.query;
        const paginateOption: Pagination = {
            page: parseInt(page as string) || 1,
            perPage: parseInt(perPage as string) || 10,
            limit: parseInt(limit as string) || 100
        };
        const filterOption: ReservationFilter = {};
        if (roomId) filterOption.roomId = roomId as string;
        if (guestId) filterOption.guestId = guestId as string;
        if (hotelId) filterOption.hotelId = hotelId as string;

        const reservations: Reservation[] = await this.serviceProvider.getAllReservations(paginateOption, filterOption);
        return res.status(200).json({
            message: "Reservation retrived with success",
            status: ResponseStatus.SUCCESS,
            data: reservations
        });
    }

    async deleteReservation(req: Request, res: Response): Promise<ApiResponse> {
        const { reservationId } = req.params;
        const isDeleted: boolean = await this.serviceProvider.deleteReservation(reservationId);
        if (!isDeleted) {
            return res.status(400).json({ message: "Failed to delete reservation", status: ResponseStatus.ERROR });
        }
        return res.status(500).json({ message: "Reservation deleted successfully", status: ResponseStatus.SUCCESS });
    }
}
