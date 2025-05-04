import { Guest } from "@prisma/client";
import { CreateGuestDto } from "../../types/dto/createGuest.dto";
import { UpdateGuestDto } from "../../types/dto/updateGuest.dto";


export abstract class GuestServiceAbstract {
    /**
     * Create a new guest
     * @param guestData Guest details
     * @returns Created guest object or null
     */
    abstract createGuest(guestData: CreateGuestDto): Promise<Guest | null>;

    /**
     * Find a guest by ID
     * @param guestId Unique guest identifier
     * @returns Guest object or null if not found
     */
    abstract findGuestById(guestId: string): Promise<Guest | null>;

    /**
     * Find a guest by ID
     * @param gestEmail Unique guest identifier
     * @returns Guest object or null if not found
     */
    abstract findGuestByEmail(guestEmail: string): Promise<Guest | null>;

    /**
     * Find a guest by ID
     * @param guestPhone Unique guest identifier
     * @returns Guest object or null if not found
     */
    abstract findGuestByPhone(guestPhone: string): Promise<Guest | null>;

    /**
     * Fetch all guests with pagination
     * @param page Page number
     * @param perPage Number of results per page
     * @returns Array of guest objects
     */
    abstract getAllGuests(page: number, perPage: number): Promise<Guest[]>;

    /**
     * Update guest details
     * @param guestId Unique guest identifier
     * @param updateData Fields to update
     * @returns Updated guest object or error
     */
    abstract updateGuest(guestId: string, updateData: UpdateGuestDto): Promise<Guest | null>;

    /**
     * Delete a guest by ID
     * @param guestId Unique guest identifier
     * @returns Deletion confirmation or error
     */
    abstract deleteGuest(guestId: string): Promise<boolean>;
}