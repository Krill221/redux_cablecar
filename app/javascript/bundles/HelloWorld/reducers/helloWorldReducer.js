import { combineReducers } from 'redux';
import { ADD_MESSAGE, LOAD_ITEMS_SUCCESS } from '../constants/helloWorldConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return action.text;
    case LOAD_ITEMS_SUCCESS:
      return action.text;
    default:
      return state;
  }
};

const helloWorldReducer = combineReducers({ name });

export default helloWorldReducer;
