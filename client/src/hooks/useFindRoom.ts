import { useState, useEffect } from "react";
import RoomFacade from "@/facade/room.facade";

interface RoomDetails {
    id: string;
    type: string;
    price: number;
    status: "Available" | "Booked"; // Adjust based on your API response
    [key: string]: any; // Add other fields as needed
}

export function useFindRoom(roomId: string) {
    const [room, setRoom] = useState<RoomDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!roomId) return;

        const fetchRoom = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await new RoomFacade().getRoomById(roomId);
                setRoom(response.data.data); // Assuming the API response contains the room details in `data`
            } catch (err) {
                console.error("Error fetching room details:", err);
                setError("Failed to fetch room details.");
            } finally {
                setLoading(false);
            }
        };

        fetchRoom();
    }, [roomId]);

    return { room, loading, error };
}