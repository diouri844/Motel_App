export type reservationType = {
    roomId: string;
    checkIn: Date;
    checkOut: Date;
    guestId: string;
    hotelId: string;
    discountCode: string | null;
    finalPrice: number;
};