import client from "@/context/superBaseclietn.context";
import BaseFacade from "@/facade/base.facade";
// import { reservationType } from "@/types/reservation.type";
import { SupabaseClient } from "@supabase/supabase-js";



type reservationType = {
    room_id: string;
    guest_id: string;
    hotel_id: string;
    check_in: Date;
    check_out: Date;
    discount_code: string | null;
    final_price: number;
}

class ReservationFacade implements BaseFacade {
    client: SupabaseClient = client;

    // immplement the get all reservation :
    async getReservationList(): Promise<any> {
        return await this.client.from("reservations").select("*");
    };
    // get reservation by given id :
    async getReservationById(reservationId: string): Promise<any> {
        return await this.client.from("reservations").select("*").eq("id", reservationId).single();
    };
    // remove reservation by given id : 
    async removeReservationById(reservationId: string): Promise<any> {
        return await this.client.from("reservations").delete().eq("id", reservationId);
    }

    // add new reservation : 
    async addNewReservation(payload: reservationType): Promise<any> {
        return await this.client.from("reservations").insert(payload);
    }
}




export default ReservationFacade;