import { Request, Response } from "express";
import { RoomControllerAbstract } from "../abstract/controllers/roomController.abstract";
import { Hotel, Room } from "../generated/prisma/client";
import { ApiResponse, ResponseStatus } from "../types/apiResponse.type";
import { CreateRoomDto } from "../types/dto/createRoom.dto";
import { RoomPref } from "../types/roomPref.type";
import { Pagination } from "../types/paginate.type";
import { UpdateRoomDto } from "../types/dto/updateRoom.dto";




export class RoomController extends RoomControllerAbstract {

    async createRoom(req: Request, res: Response): Promise<ApiResponse<Room>> {
        try {
            const hotelId: string = req.params.hotelId;
            const newRoomPayload: CreateRoomDto = req.body as CreateRoomDto;

            // Validate required fields
            if (!hotelId) {
                return res.status(400).json({
                    status: ResponseStatus.BAD_REQUEST,
                    message: "Hotel ID is required",
                });
            }

            if (!newRoomPayload || !newRoomPayload.type || !newRoomPayload.price) {
                return res.status(400).json({
                    status: ResponseStatus.BAD_REQUEST,
                    message: "Room type and price are required",
                });
            }

            // Call service provider
            const createdRoom: Room | null = await this.serviceProvider.createRoom(hotelId, newRoomPayload);

            if (!createdRoom) {
                this.logger.error(`Failed to create room in Hotel ID: ${hotelId}`);
                return res.status(400).json({
                    status: ResponseStatus.ERROR,
                    message: `Server failed to create new room in hotel ${hotelId}`,
                });
            }

            return res.status(201).json({
                status: ResponseStatus.SUCCESS,
                message: "New room created successfully",
                data: createdRoom,
            });

        } catch (error) {
            this.logger.error(`Error creating room in Hotel ID ${hotelId}:`, error);
            return res.status(500).json({
                status: ResponseStatus.INTERNAL_SERVER_ERROR,
                message: "Internal server error",
            });
        }
    }

    async findRoomById(
        req: Request,
        res: Response
    ): Promise<ApiResponse<Room>> {
        try {
            // Extract room ID
            const roomId: string = req.params.roomId;

            if (!roomId) {
                return res.status(400).json({
                    status: ResponseStatus.BAD_REQUEST,
                    message: "Room ID is required",
                });
            }

            // Call service provider
            const roomTarget: Room | null = await this.serviceProvider.getRoomById(roomId);

            if (!roomTarget) {
                this.logger.error(`Room with ID ${roomId} not found`);
                return res.status(404).json({
                    status: ResponseStatus.NOT_FOUND,
                    message: `Room with ID ${roomId} not found`,
                });
            }

            return res.status(200).json({
                message: "Room retrieved successfully",
                status: ResponseStatus.SUCCESS,
                data: roomTarget,
            });

        } catch (error) {
            this.logger.error(`Error retrieving room with ID ${roomId}:`, error);
            return res.status(500).json({
                status: ResponseStatus.INTERNAL_SERVER_ERROR,
                message: "Internal server error",
            });
        }
    }


    async getRoomList(req: Request, res: Response): Promise<ApiResponse<Room[]>> {
        try {
            // Extract pagination details from query params
            const page: number = Number(req.query.page) || 1;
            const perPage: number = Number(req.query.perPage) || 10;
            const limit: number = Number(req.query.limit) || 100;

            // Extract room preferences
            const preferance: RoomPref = {};
            if (req.query.hotelId) preferance.hotelId = req.query.hotelId as string;
            if (req.query.checkIn) preferance.checkIn = new Date(req.query.checkIn as string);
            if (req.query.checkOut) preferance.checkOut = new Date(req.query.checkOut as string);

            // Call service provider
            const roomList: Room[] = await this.serviceProvider.getAllRooms({ page, perPage, limit }, preferance);

            return res.status(200).json({
                message: "Room list retrieved successfully",
                status: ResponseStatus.SUCCESS,
                data: {
                    roomList,
                    page,
                    perPage
                }
            });

        } catch (error) {
            this.logger.error("Server failed to fetch room list:", error);
            return res.status(500).json({
                message: "Internal server error",
                status: ResponseStatus.INTERNAL_SERVER_ERROR,
                error
            });
        }
    }



    async findHotelRoomList(
        req: Request,
        res: Response
    ): Promise<ApiResponse<Room[]>> {
        try {
            // Extract hotel ID
            const hotelId: string = req.params.hotelId;
            if (!hotelId) {
                return res.status(400).json({
                    message: "Hotel ID is required",
                    status: ResponseStatus.BAD_REQUEST
                });
            }

            // Extract pagination details
            const page: number = Number(req.query.page) || 1;
            const perPage: number = Number(req.query.perPage) || 10;
            const limit: number = Number(req.query.limit) || 100;

            const paginationDetails: Pagination = { page, perPage, limit };

            // Call service provider
            const roomList: Room[] = await this.serviceProvider.getRoomListByHotelId(hotelId, paginationDetails);

            return res.status(200).json({
                message: `Room list retrieved successfully for Hotel ID: ${hotelId}`,
                status: ResponseStatus.SUCCESS,
                data: {
                    roomList,
                    hotelId,
                    ...paginationDetails
                }
            });

        } catch (error) {
            this.logger.error(`Error fetching room list for hotel ${req.params.hotelId}:`, error);
            return res.status(500).json({
                message: "Internal server error",
                status: ResponseStatus.INTERNAL_SERVER_ERROR
            });
        }
    }



    async updateRoom(
        req: Request,
        res: Response
    ): Promise<ApiResponse<Room>> {
        try {
            // Extract parameters
            const { roomId } = req.params;

            if (!roomId) {
                return res.status(400).json({
                    message: "Room ID is required",
                    status: ResponseStatus.BAD_REQUEST
                });
            }

            // Validate update payload
            const newRoomPayload: UpdateRoomDto = req.body as UpdateRoomDto;
            if (!Object.keys(newRoomPayload).length) {
                return res.status(400).json({
                    message: "Update data is required",
                    status: ResponseStatus.BAD_REQUEST
                });
            }

            // Call service provider
            const updatedRoom = await this.serviceProvider.updateRoom(roomId, newRoomPayload);

            if (!updatedRoom) {
                this.logger.error(`Room with ID ${roomId} not found or update failed`);
                return res.status(404).json({
                    message: `Room with ID ${roomId} not found`,
                    status: ResponseStatus.ERROR
                });
            }

            return res.status(200).json({
                message: "Room updated successfully",
                status: ResponseStatus.SUCCESS,
                data: updatedRoom
            });

        } catch (error) {
            this.logger.error("Error updating room:", error);
            return res.status(500).json({
                message: "Internal server error",
                status: ResponseStatus.INTERNAL_SERVER_ERROR
            });
        }
    }

    async deleteRoom(
        req: Request,
        res: Response): Promise<ApiResponse> {
        try {
            const { roomId } = req.params;
            if (!roomId) {
                return res.status(400).json({
                    message: "Room ID is required",
                    status: ResponseStatus.BAD_REQUEST,
                });
            }
            const deleted: boolean = await this.serviceProvider.deleteRoom(roomId);
            if (!deleted) {
                return res.status(404).json({
                    message: "Room not found or already deleted",
                    status: ResponseStatus.NOT_FOUND,
                });
            }

            return res.status(200).json({
                message: "Room deleted successfully",
                status: ResponseStatus.SUCCESS,
            });
        } catch (error) {
            this.logger.error("Error deleting room:", error);
            return res.status(500).json({
                message: "Internal server error",
                status: ResponseStatus.INTERNAL_SERVER_ERROR,
            });
        }
    }

    async roomAvailabilityCheck(
        req: Request,
        res: Response
    ): Promise<ApiResponse> {
        try {

            const { hotelId } = req.params;
            // Extract roomId and dates from request query
            const { roomId, checkIn, checkOut } = req.query;

            // Validate required parameters
            if (!roomId || !checkIn || !checkOut || !hotelId) {
                return res.status(400).json({
                    message: "Room ID,Hotel ID, check-in date, and check-out date are required",
                    status: ResponseStatus.BAD_REQUEST,
                });
            }

            const checkInDate = new Date(checkIn as string);
            const checkOutDate = new Date(checkOut as string);

            // Ensure valid date range
            if (checkInDate >= checkOutDate) {
                return res.status(400).json({
                    message: "Check-in date must be before check-out date",
                    status: ResponseStatus.BAD_REQUEST,
                });
            }

            // Query reservations to check availability
            const conflictingReservations = await this.serviceProvider.checkRoomAvailability(
                roomId as string, hotelId, checkInDate, checkOutDate);

            if (!conflictingReservations) {
                return res.status(200).json({
                    message: "Room is available",
                    status: ResponseStatus.SUCCESS,
                    data: { available: true },
                });
            } else {
                return res.status(200).json({
                    message: "Room is unavailable for the selected dates",
                    status: ResponseStatus.SUCCESS,
                    data: { available: false },
                });
            }
        } catch (error) {
            this.logger.error("Error checking room availability:", error);
            return res.status(500).json({
                message: "Internal server error",
                status: ResponseStatus.INTERNAL_SERVER_ERROR,
            });
        }
    }





}