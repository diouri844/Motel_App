// actions.ts

//import { Action } from 'redux';
import * as actionTypes from './crmAction.type';

// Define action creators
export const setCrmData = (data: any[]) => ({
  type: actionTypes.SET_CRM_DATA,
  payload: data
});

export const setSearchQuery = (query: string) => ({
  type: actionTypes.SET_SEARCH_QUERY,
  payload: query
});

export const clearSearchQuery = () => ({
  type: actionTypes.CLEAR_SEARCH_QUERY
});

export const addCRM = (newCRM: any) => (
  {
    type: actionTypes.ADD_CRM,
    payload: newCRM
  }
);

export const removeCRM = (crmTargetId: string) => (
  {
    type: actionTypes.REMOVE_CRM,
    payload: crmTargetId
  }
);
