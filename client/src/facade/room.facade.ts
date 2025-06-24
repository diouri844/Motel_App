import BaseFacade from "@/facade/base.facade";
import { SupabaseClient } from "@supabase/supabase-js";
import client from "@/context/superBaseclietn.context";



class RoomFacade implements BaseFacade {

    client: SupabaseClient = client;

    // get all rooms : 
    async getRoomList(): Promise<any> {
        return await this.client.from("rooms").select("*");
    }

    // get a single roomm details by id 
    async getRoomById(roomId: string): Promise<any> {
        return await this.client.from("rooms").select("*").eq("id", roomId).single();
    };

    // find rooms by type :
    async findRoomsByType(roomType: string): Promise<any> {
        return await this.client.from("rooms")
            .select("*")
            .eq("type", roomType);
    }

    // check room availibility :
    async checkRoom(
        hotelId: string,
        roomId: string,
        checkIn: string,
        checkOut: string
    ): Promise<any> {
        return await this.client.from("rooms")
            .select("*")
            .eq("id", roomId)
            .eq("hotelId", hotelId)
            .eq("checkIn", checkIn).
            eq("checkOut", checkOut)
            .single();
    }

}


export default RoomFacade;