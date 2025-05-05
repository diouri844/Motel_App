import { DiscountControllerAbstract } from "../abstract/controllers/discountController.abstract";
import { Discount } from "../generated/prisma/client";
import { ApiResponse, ResponseStatus } from "../types/apiResponse.type";
import { Request, Response } from "express";
import { Pagination } from "../types/paginate.type";
import { CreateDiscountDto } from "../types/dto/createDiscount.dto";

export class DiscountController extends DiscountControllerAbstract {

    async createDiscount(
        req: Request,
        res: Response
    ): Promise<ApiResponse<Discount>> {
        try {
            const discountData: CreateDiscountDto = req.body;
            this.logger.info(`Creating new discount code: ${discountData.code}`);

            const createDiscountResponse: Discount | null = await this.serviceProvider.createDiscount(discountData);

            if (!createDiscountResponse) {
                return res.status(500).json({
                    status: ResponseStatus.ERROR,
                    message: "Error creating discount",
                    data: null,
                    error: "Internal server error",
                });
            }

            return res.status(201).json({
                status: ResponseStatus.SUCCESS,
                message: "Discount created successfully",
                data: createDiscountResponse,
                error: null,
            });
        } catch (error) {
            this.logger.error(`Error creating discount: ${error.message}`);
            return res.status(500).json({
                status: ResponseStatus.INTERNAL_SERVER_ERROR,
                message: "Error creating discount",
                data: null,
                error: error.message,
            });
        }
    }


    async getAllDiscounts(
        req: Request,
        res: Response
    ): Promise<ApiResponse<Discount[]>> {
        try {
            const { page = 1, limit = 10, perPage = 100 } = req.query;
            const pagination: Pagination = {
                page: parseInt(page as string, 10),
                perPage: parseInt(perPage as string, 100),
                limit: parseInt(limit as string, 10),
            };

            this.logger.info(`Fetching all discounts with pagination: ${JSON.stringify(pagination)}`);

            const discounts: Discount[] = await this.serviceProvider.getAllDiscounts(pagination);

            return res.status(200).json({
                status: ResponseStatus.SUCCESS,
                message: "Discounts fetched successfully",
                data: {
                    discounts,
                    ...pagination
                },
            });
        } catch (error) {
            this.logger.error(`Error fetching discounts: ${error.message}`);
            return res.status(500).json({
                status: ResponseStatus.INTERNAL_SERVER_ERROR,
                message: "Error fetching discounts",
                data: null,
                error: error
            });
        }
    }

    async findDiscountById(
        req: Request,
        res: Response
    ): Promise<ApiResponse<Discount>> {
        try {
            const { discountId } = req.params;
            this.logger.info(`Fetching discount with id: ${discountId}`);

            const discount: Discount | null = await this.serviceProvider.findDiscountById(discountId);

            if (!discount) {
                return res.status(404).json({
                    status: ResponseStatus.NOT_FOUND,
                    message: "Discount not found",
                    data: null,
                    error: "Discount not found",
                });
            }

            return res.status(200).json({
                status: ResponseStatus.SUCCESS,
                message: "Discount fetched successfully",
                data: discount,
                error: null,
            });
        } catch (error) {
            this.logger.error(`Error fetching discount: ${error}`);
            return res.status(500).json({
                status: ResponseStatus.INTERNAL_SERVER_ERROR,
                message: "Error fetching discount",
                data: null,
                error: error,
            });
        }
    }

    async deleteDiscount(
        req: Request,
        res: Response
    ): Promise<ApiResponse> {
        try {
            const { discountId } = req.params;
            this.logger.info(`Deleting discount with id: ${id}`);

            const discount: boolean = await this.serviceProvider.deleteDiscount(discountId);

            if (!discount) {
                return res.status(404).json({
                    status: ResponseStatus.NOT_FOUND,
                    message: "Discount not found",
                    data: null,
                    error: "Discount not found",
                });
            }

            return res.status(200).json({
                status: ResponseStatus.SUCCESS,
                message: "Discount deleted successfully",
                data: discount,
                error: null,
            });
        } catch (error) {
            this.logger.error(`Error deleting discount: ${error}`);
            return res.status(500).json({
                status: ResponseStatus.INTERNAL_SERVER_ERROR,
                message: "Error deleting discount",
                data: null,
                error: error,
            });
        }
    }


    async checkDiscount(req: Request, res: Response): Promise<ApiResponse> {
        try {
            const { discountCode } = req.params;
            this.logger.info(`Checking discount code: ${discountCode}`);

            const isValid: boolean = await this.serviceProvider.isValidDiscount(discountCode);


            return res.status(200).json({
                status: ResponseStatus.SUCCESS,
                message: "Discount fetched successfully",
                data: { isValid },
                error: null,
            });
        } catch (error) {
            this.logger.error(`Error fetching discount: ${error}`);
            return res.status(500).json({
                status: ResponseStatus.INTERNAL_SERVER_ERROR,
                message: "Error fetching discount",
                data: null,
                error: error,
            });
        }
    }

    async getValidDiscounts(
        req: Request,
        res: Response
    ): Promise<ApiResponse<Discount[]>> {
        try {
            this.logger.info(`Fetching discount `);
            const { page = 1, limit = 10, perPage = 100 } = req.query;
            const pagination: Pagination = {
                page: parseInt(page as string, 10),
                perPage: parseInt(perPage as string, 100),
                limit: parseInt(limit as string, 10),
            };
            const discount: Discount[] = await this.serviceProvider.getValidDiscounts(pagination);


            return res.status(200).json({
                status: ResponseStatus.SUCCESS,
                message: "Discount fetched successfully",
                data: {
                    discount,
                    ...pagination
                },
                error: null,
            });
        } catch (error) {
            this.logger.error(`Error fetching discount: ${error.message}`);
            return res.status(500).json({
                status: ResponseStatus.INTERNAL_SERVER_ERROR,
                message: "Error fetching discount",
                data: null,
                error: error
            });
        }
    }


    async applyDiscount(
        req: Request,
        res: Response
    ): Promise<ApiResponse<Discount>> {
        try {
            const { discountCode, roomId } = req.body;
            this.logger.info(`Applying discount code: ${discountCode} to room: ${roomId}`);
            const discountResponse: Discount | null = await this.serviceProvider.applyDiscount(discountCode, roomId);

            if (!discountResponse) {
                return res.status(400).json({
                    status: ResponseStatus.ERROR,
                    message: "Invalid discount code or expired",
                    data: null,
                    error: "Discount not found",
                });
            }

            return res.status(200).json({
                status: ResponseStatus.SUCCESS,
                message: "Discount applied successfully",
                data: discountResponse,
                error: null,
            });
        } catch (error) {
            this.logger.error(`Error applying discount: ${error.message}`);
            return res.status(500).json({
                status: ResponseStatus.INTERNAL_SERVER_ERROR,
                message: "Error applying discount",
                data: null,
                error: error.message,
            });
        }
    }
}