import ReservationFacade from "@/facade/reservation.facade";
import { useState } from "react";




type reservationType = {
    room_id: string;
    guest_id: string;
    hotel_id: string;
    check_in: Date;
    check_out: Date;
    discount_code: string | null;
    final_price: number;
}


export function useAddReservation(reservationPayload: reservationType) {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const addReservation = async () => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await new ReservationFacade().addNewReservation(reservationPayload);
            if (response.error) {
                console.log(response.error.message || "Failed to add reservation");
            }
            setSuccess(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, success, addReservation };
}