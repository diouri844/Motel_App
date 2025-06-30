import { useEffect, useState } from "react";
import RoomFacade from "@/facade/room.facade";

export interface CheckRoomParams {
    hotelId: string;
    roomId: string;
    checkIn: string; // ISO date string
    checkOut: string; // ISO date string
}

export function useCheckRoomAvailability(initialParams?: CheckRoomParams) {
    const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const checkRoomAvailability = async ({ hotelId, roomId, checkIn, checkOut }: CheckRoomParams) => {
        setLoading(true);
        setError(null);

        try {
            const response = await new RoomFacade().checkRoom(hotelId, roomId);
            console.log("Room availability response:", response);
            // check reservation status :
            setIsAvailable(response.data.data.available);
            setMessage(response.data.message);
        } catch (err) {
            console.error("Error checking room availability:", err);
            setError("Failed to check room availability.");
            setIsAvailable(null);
        } finally {
            setLoading(false);
        }
    };

    // Automatically check availability when initialParams change
    useEffect(() => {
        if (initialParams) {
            checkRoomAvailability(initialParams);
        }
    }, [
        initialParams?.hotelId,
        initialParams?.roomId,
        initialParams?.checkIn,
        initialParams?.checkOut,
    ]);

    return { isAvailable, loading, error, checkRoomAvailability, message };
}