import { useState, useEffect } from "react";
import RoomFacade from "@/facade/room.facade";
import { AxiosResponse } from "axios";

export interface Room {
    id: string;
    type: string;
    price: number;
    status: "Available" | "Booked"; // Assuming these are the possible statuses
}

export function useAvailableRooms() {
    const [availableRooms, setAvailableRooms] = useState<Room[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAvailableRooms = async () => {
            setLoading(true);
            setError(null);

            try {
                const response: AxiosResponse = await new RoomFacade().getRoomList();
                if (response.status !== 200) {
                    setError("Failed to fetch available rooms.");
                    return;
                }
                const { data } = response.data;
                const roomList: Room[] = data.roomList;
                const filteredRooms = roomList.filter((room) => room.status === "Available");
                setAvailableRooms(filteredRooms);
            } catch (err) {
                console.error("Error fetching rooms:", err);
                setError("Failed to fetch available rooms.");
            } finally {
                setLoading(false);
            }
        };

        fetchAvailableRooms();
    }, []);

    return { availableRooms, loading, error };
}