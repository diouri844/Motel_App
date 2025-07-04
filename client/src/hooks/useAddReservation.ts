import ReservationFacade from "@/facade/reservation.facade";
import { useState } from "react";




type reservationType = {
    room_id: string;
    guest_id: string;
    hotel_id: string;
    check_in: string;
    check_out: string;
    discount_code: string;
    final_price: number;
}


export function useAddReservation() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const addReservation = async (reservationPayload: reservationType) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await new ReservationFacade().addNewReservation({
                ...reservationPayload,
                check_in: new Date(reservationPayload.check_in),
                check_out: new Date(reservationPayload.check_out),
            });
            if (response.error) {
                console.log(response.error.message || "Failed to add reservation");
            }
            setSuccess(true);
            return response;
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unexpected error occurred");
            return null;
        }
    };

    return { loading, error, success, addReservation };
}