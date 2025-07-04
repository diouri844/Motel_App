

import RoomFacade from "@/facade/room.facade";
import { useState } from "react";


export function useUpdateStatus() {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);


    const updateRoomStatus = async (roomId: string, status: string) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await new RoomFacade().updateRoomStatus(roomId, status);
            if (response.error) {
                console.log(response.error.message || "Failed to update room status");
                setError(response.error.message || "Failed to update room status");
            } else {
                setSuccess(true);
            }
            return response;
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unexpected error occurred");
            return null;
        } finally {
            setLoading(false);
        }
    };


    return { loading, error, success, updateRoomStatus };
};