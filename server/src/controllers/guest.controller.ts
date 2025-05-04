import { Request, Response } from "express";
import { GuestControllerAbstract } from "../abstract/controllers/guestController.abstract";
import { Guest } from "../generated/prisma/client";
import { ApiResponse, ResponseStatus } from "../types/apiResponse.type";
import { Pagination } from "../types/paginate.type";
import { CreateGuestDto } from "../types/dto/createGuest.dto";
import { UpdateGuestDto } from "../types/dto/updateGuest.dto";


export class GuestController extends GuestControllerAbstract {

    async createGuest(req: Request, res: Response): Promise<ApiResponse<Guest>> {
        try {
            const guestData: CreateGuestDto = req.body;
            this.logger.info(`Creating new guest: ${guestData.name}`);
            const createGuestResponse: Guest | null = await this.serviceProvider.createGuest(guestData);

            if (!createGuestResponse) {
                return res.status(500).json({
                    status: ResponseStatus.ERROR,
                    message: "Error creating new guest",
                    data: null,
                    error: "Internal server error",
                });
            }

            return res.status(201).json({
                status: ResponseStatus.SUCCESS,
                message: "New guest created successfully",
                data: createGuestResponse,
                error: null,
            });
        } catch (error) {
            this.logger.error("Error creating new Guest ", error);
            return res.status(500).json({
                status: ResponseStatus.INTERNAL_SERVER_ERROR,
                message: "Internal server error",
                error
            });
        }
    }

    async findGuestById(req: Request, res: Response): Promise<ApiResponse<Guest>> {
        try {
            const { guestId } = req.params;
            this.logger.info(`Fetching guest with ID: ${guestId}`);

            const guestResponse: Guest | null = await this.serviceProvider.findGuestById(guestId);

            if (!guestResponse) {
                return res.status(404).json({
                    status: ResponseStatus.NOT_FOUND,
                    message: "Guest not found",
                    data: null,
                    error: "Guest not found",
                });
            }

            return res.status(200).json({
                status: ResponseStatus.SUCCESS,
                message: "Guest fetched successfully",
                data: guestResponse,
                error: null,
            });
        } catch (error) {
            this.logger.error("Error fetching guest by ID", error);
            return res.status(500).json({
                status: ResponseStatus.INTERNAL_SERVER_ERROR,
                message: "Internal server error",
                error,
            });
        }
    }

    async getAllGuests(req: Request, res: Response): Promise<ApiResponse<Guest[]>> {
        try {
            const { page, perPage, limit } = req.query;
            this.logger.info(`Fetching all guests with page: ${page}, perPage: ${perPage}`);

            const paginateObject: Pagination = {
                page: Number(page) || 1,
                perPage: Number(perPage) || 10,
                limit: Number(limit) || 100,
            };

            const guestListResponse: Guest[] = await this.serviceProvider.getAllGuests(paginateObject);

            if (!guestListResponse.length) {
                return res.status(404).json({
                    status: ResponseStatus.NOT_FOUND,
                    message: "No guests found",
                    data: [],
                    error: "No guests found",
                });
            }

            return res.status(200).json({
                status: ResponseStatus.SUCCESS,
                message: "Guests fetched successfully",
                data: {
                    guests: guestListResponse,
                    page: paginateObject.page,
                    perPage: paginateObject.perPage,
                    total: guestListResponse.length,
                }
            });
        } catch (error) {
            this.logger.error("Error fetching all guests", error);
            return res.status(500).json({
                status: ResponseStatus.INTERNAL_SERVER_ERROR,
                message: "Internal server error",
                error,
            });
        }
    }

    async updateGuest(req: Request, res: Response): Promise<ApiResponse<Guest>> {
        try {
            const { guestId } = req.params;
            const newPayload: UpdateGuestDto = req.body as UpdateGuestDto;

            if (!guestId) {
                return res.status(400).json({
                    status: ResponseStatus.BAD_REQUEST,
                    message: "Guest ID is required",
                });
            };

            this.logger.info(`Updating guest with ID: ${guestId}`);

            const updatedGuestResponse: Guest | null = await this.serviceProvider.updateGuest(guestId, newPayload);

            if (!updatedGuestResponse) {
                return res.status(404).json({
                    status: ResponseStatus.NOT_FOUND,
                    message: "Guest not found",
                    data: null,
                    error: "Guest not found",
                });
            }

            return res.status(202).json({
                status: ResponseStatus.SUCCESS,
                message: "Guest updated successfully",
                data: updatedGuestResponse,
                error: null,
            });
        } catch (error) {
            this.logger.error("Error updating guest", error);
            return res.status(500).json({
                status: ResponseStatus.INTERNAL_SERVER_ERROR,
                message: "Internal server error",
                error,
            });
        }
    }

    async deleteGuest(req: Request, res: Response): Promise<ApiResponse> {
        try {
            const { guestId } = req.params;
            this.logger.info(`Deleting guest with ID: ${guestId}`);

            const deleteGuestResponse: boolean = await this.serviceProvider.deleteGuest(guestId);

            if (!deleteGuestResponse) {
                return res.status(404).json({
                    status: ResponseStatus.NOT_FOUND,
                    message: "Guest not found",
                    data: null,
                    error: "Guest not found",
                });
            }

            return res.status(200).json({
                status: ResponseStatus.SUCCESS,
                message: "Guest deleted successfully",
                data: null,
                error: null,
            });
        } catch (error) {
            this.logger.error("Error deleting Guest: ", error);
            return res.status(500).json({
                message: "Internal server error",
                status: ResponseStatus.INTERNAL_SERVER_ERROR,
                error
            });
        }
    }
}