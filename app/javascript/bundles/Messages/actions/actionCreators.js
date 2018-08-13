/* eslint-disable import/prefer-default-export */

import { CABLE_ALL, CABLE_ADD, CABLE_UPDATE, CABLE_DELETE, CABLE_DELETE_ALL } from '../constants/Constants';

export const addModel = (text) => {
  return (dispatch) => {
    dispatch({ channel: 'MessagesChannel', type: CABLE_ADD, text: text });
  }
};
export const updateModel = (id, text) => {
  return (dispatch) => {
    dispatch({ channel: 'MessagesChannel', type: CABLE_UPDATE, id: id, text: text });
  }
};
export const deleteModel = (id) => {
  return (dispatch) => {
    dispatch({ channel: 'MessagesChannel', type: CABLE_DELETE, id: id });
  }
};
export const deleteAllModel = () => {
  return (dispatch) => {
    dispatch({ channel: 'MessagesChannel', type: CABLE_DELETE_ALL });
  }
};
