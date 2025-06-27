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


    // get room featres by room id :
    async getRoomFeaturesById(roomId: string): Promise<any> {
        const roomfeaturesId = await this.client.from("room_features")
            .select("*")
            .eq("room_id", roomId);
        if (roomfeaturesId.error) return null
        const idList: string[] = roomfeaturesId.data.map((feature: any) => feature.feature_id);
        console.log("Room Features IDs:", idList);
        const resultList: any[] = [];
        idList.forEach(
            async (item: string) => {
                const res = await this.client.from("features")
                    .select("name")
                    .eq("id", item);
                if (res.error) return null;
                resultList.push(res.data[0].name);
            });
        return resultList;
    };


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