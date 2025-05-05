import { combineReducers } from 'redux';
import * as actionTypes from './crmAction.type';
import { inventoryReducerConfig } from "@/stores/Inventory/inventory.reducer";
import { customerReducerConfig } from "@/stores/Customer/customer.reducer";
import { orderReducerConfig } from "@/stores/Order/order.reducer";
import { stockReducerConfig } from '../Stock/stock.reducer';
import { productReducerConfig } from '../Product/product.reducer';


// define an intial state for crm store : 
// Define initial state
const initialCrmState = {
  crmData: [],
  searchQuery: ''
};


// define crm reducer : 
const crmReducer = (state = initialCrmState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_CRM_DATA:
      return {
        ...state,
        crmData: action.payload
      };
    case actionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };
    case actionTypes.CLEAR_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: ''
      };
    case actionTypes.ADD_CRM:
      return {
        ...state,
        crmData: [...state.crmData, action.payload]
      };
    case actionTypes.REMOVE_CRM:
      return {
        ...state,
        crmData: state.crmData.filter(
          crm => crm.id !== action.payload
        )
      };
    default:
      return state;
  }
};

// export reducer 
const rootReducer = combineReducers(
  {
    crm: crmReducer,
    inventory: inventoryReducerConfig,
    customer: customerReducerConfig,
    order: orderReducerConfig,
    stock: stockReducerConfig,
    product: productReducerConfig
  }
);

export default rootReducer;








