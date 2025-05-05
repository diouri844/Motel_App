
export type CreateDiscountDto = {
    hotelId: string;
    roomId: string | null;
    code: string;
    percentage: number;
    validUntil: string;
}