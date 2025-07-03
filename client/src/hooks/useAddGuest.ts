import GuestFacade from "@/facade/guest.facade";
import { useState } from "react";



export function useAddGuest(guestInformation: any) {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const addGuest = async () => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await new GuestFacade().createGuest(guestInformation);
            if (response.error) {
                console.log(response.error.message || "Failed to add guest");
                setError(response.error.message || "Failed to add guest");
            }
            setSuccess(true);
            return response.data; // Return the created guest data
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unexpected error occurred");
            return null
        } finally {
            setLoading(false);
        }
    }

    return { loading, error, success, addGuest };
}