// define a crm store based on defined reducer and action types :
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "@/stores/CRM/crm.reducer";



// define store :
const CrmStore = configureStore(
    { reducer: rootReducer }
);
export default CrmStore;