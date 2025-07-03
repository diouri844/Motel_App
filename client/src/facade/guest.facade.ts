import client from "@/context/superBaseclietn.context";
import BaseFacade from "@/facade/base.facade";
// import { reservationType } from "@/types/reservation.type";
import { SupabaseClient } from "@supabase/supabase-js";




class GuestFacade implements BaseFacade {
    client: SupabaseClient = client;
    // create new guest details : 
    async createGuest(payload: any): Promise<any> {
        return await this.client.from("guests").insert(payload);
    }
}

export default GuestFacade;