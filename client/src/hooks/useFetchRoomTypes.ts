import RoomFacade from "@/facade/room.facade";
import { useState, useEffect } from "react";



export function useAvailableRooms() {
    const facade = new RoomFacade();
    const [availableRooms, setAvailableRooms] = useState<String[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAvailableRooms = async () => {
            setLoading(true);
            setError(null);

            try {
                const { data, error } = await facade.client
                    .from('rooms')
                    .select('type')
                    .neq('status', 'Booked')
                    .order('type', { ascending: true });

                if (error || !data) {
                    setError("Failed to fetch available rooms.");
                    return;
                }
                setAvailableRooms([...new Set(data.map(room => room.type))]);
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