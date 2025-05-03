import { HotelControllerAbstract } from "../abstract/controllers/hotelController.abstract";
import { Hotel } from "../generated/prisma/client";
import { ApiResponse, ResponseStatus } from "../types/apiResponse.type";
import { Request, Response } from "express";
import { Pagination } from "../types/paginate.type";
import { UpdateHotelDto } from "../types/updateHotel.dto";




export class HotelController extends HotelControllerAbstract {

    async createHotel(
        req: Request,
        res: Response
    ): Promise<ApiResponse<Hotel>> {

        const { name, location } = req.body;
        this.logger.info(`Creating new hotel with name: ${name} and location: ${location}`);
        const createHotelResponse: Hotel | null = await this.serviceProvider.createHotel(name, location);
        // check reponse : 
        if (!createHotelResponse) return res.status(500).json({
            status: ResponseStatus.ERROR,
            message: "Error creating new hotel",
            data: null,
            error: "Internal server error"
        });


        return res.status(201).json(
            {
                status: ResponseStatus.SUCCESS,
                message: "New Hotel created successfully",
                data: createHotelResponse as Hotel,
                error: null
            }
        );
    };


    async getHotelById(
        req: Request,
        res: Response
    ): Promise<ApiResponse<Hotel>> {

        // extract the hotel id from the request params
        const { hotelId } = req.params;
        this.logger.info(`Fetching hotel with ID: ${hotelId}`);
        // call the service to get the hotel by id
        const hotelResponse: Hotel | null = await this.serviceProvider.getHotelById(hotelId);
        // check if the hotel exists
        if (!hotelResponse) return res.status(404).json({
            status: ResponseStatus.NOT_FOUND,
            message: "Hotel not found",
            data: null,
            error: "Hotel not found"
        });


        return res.status(200).json({
            status: ResponseStatus.SUCCESS,
            message: "Hotel fetched successfully",
            data: hotelResponse as Hotel,
            error: null
        });
    }


    async getAllHotels(
        req: Request,
        res: Response
    ): Promise<ApiResponse> {
        const { page, perPage, limit } = req.query;
        this.logger.info(`Fetching all hotels with page: ${page} and perPage: ${perPage}`);
        const paginateObject: Pagination = {
            page: Number(page) || 1,
            perPage: Number(perPage) || 10,
            limit: Number(limit) || 100
        };

        const hotelListResponse: Hotel[] = await this.serviceProvider.getAllHotels(
            paginateObject
        );

        if (!hotelListResponse) return res.status(404).json({
            status: ResponseStatus.NOT_FOUND,
            message: "No hotels found",
            data: [] as Hotel[],
            error: "No hotels found"
        });

        return res.status(200).json({
            status: ResponseStatus.SUCCESS,
            message: "Hotels fetched successfully",
            data: {
                hotels: hotelListResponse as Hotel[],
                page: paginateObject.page,
                perPage: paginateObject.perPage,
                total: hotelListResponse.length,
            },
            error: null
        });
    };


    async updateHotel(
        req: Request,
        res: Response
    ): Promise<ApiResponse<Hotel>> {
        const { hotelId } = req.params;
        const newPayload: UpdateHotelDto = req.body as UpdateHotelDto;
        this.logger.info(`Updating hotel with ID: ${hotelId}`);
        const updatedHotelResponse: Hotel | null = await this.serviceProvider.updateHotel(hotelId, newPayload);
        if (!updatedHotelResponse) return res.status(404).json({
            status: ResponseStatus.NOT_FOUND,
            message: "Hotel not found",
            data: null,
            error: "Hotel not found"
        });


        return res.status(202).json({
            status: ResponseStatus.SUCCESS,
            message: "Hotel updated successfully",
            data: updatedHotelResponse as Hotel,
            error: null
        });
    };


    async deleteHotel(
        req: Request,
        res: Response
    ): Promise<ApiResponse> {
        const { hotelId } = req.params;
        this.logger.info(`Deleting hotel with ID: ${hotelId}`);
        const deleteHotelResponse: boolean = await this.serviceProvider.deleteHotel(hotelId);
        if (!deleteHotelResponse) return res.status(404).json({
            status: ResponseStatus.NOT_FOUND,
            message: "Hotel not found",
            data: null,
            error: "Hotel not found"
        });


        return res.status(200).json({
            status: ResponseStatus.SUCCESS,
            message: "Hotel deleted successfully",
            data: null,
            error: null
        });
    };

}