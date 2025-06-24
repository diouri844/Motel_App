//import { Axios } from "axios";

import { SupabaseClient } from "@supabase/supabase-js";

//import FacadeOptions from "@/types/BaseFacade.type";


export default interface BaseFacade {
    client: SupabaseClient;
};
