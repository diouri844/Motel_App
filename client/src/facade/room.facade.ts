import BaseFacade from "@/facade/base.facade";
import { SupabaseClient } from "@supabase/supabase-js";
import client from "@/context/superBaseclietn.context";



class RoomFacade implements BaseFacade {

    client: SupabaseClient = client;

    // get all rooms : 
    async getRoomList(): Promise<any> {
        return await this.client.from("rooms").select("*");
    }


    // update room status from available to reserved :
    async updateRoomStatus(roomId: string, status: string): Promise<any> {
        return await this.client.from("rooms")
            .update({ status: status })
            .eq("id", roomId)
            .select("*")
            .single();
    };

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
        roomId: string,
    ): Promise<any> {
        return await this.client.from("rooms")
            .select("*")
            .eq("type", roomId)
            .eq("hotel_id", "8650780c-111b-4f69-962f-0ede0d836f71")// hotel id selected has no rooms 
            .eq("status", 'Available')
    }

}


export default RoomFacade;