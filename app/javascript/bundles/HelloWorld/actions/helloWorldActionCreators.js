/* eslint-disable import/prefer-default-export */

import { ADD_MESSAGE, LOAD_ITEMS_SUCCESS } from '../constants/helloWorldConstants';

/*export const addMessage = (text) => ({
  type: ADD_MESSAGE,
  text,
})
*/

export const fetchAddToServerSuccess = (text) => ({
  type: LOAD_ITEMS_SUCCESS,
  text: text
})

export const addMessage = (text) => {
    return (dispatch) => {
        dispatch(fetchAddToServerSuccess('loading...'))
        fetch('/hello_world/add?text='+text)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((json) => dispatch(fetchAddToServerSuccess(json.name)))
    };
}
