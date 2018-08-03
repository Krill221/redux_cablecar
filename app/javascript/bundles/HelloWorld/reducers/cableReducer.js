import {
   SERVER_ALL,
    SERVER_ADD, SERVER_UPDATE,
    SERVER_DELETE, SERVER_DELETE_ALL
 } from '../constants/Constants';


// Initial Store State
var initialState = {
  connected: false,
  items: []
};

// Redux Reducer function
export default (state = initialState, action) => {

  switch (action.type) {
    case 'CABLECAR_CONNECTED':
      return Object.assign({}, state, {
        connected: true
      });

    case 'CABLECAR_DISCONNECTED':
      return Object.assign({}, state, {
        connected: false
      });


    case SERVER_ALL:
      return {...state, items: action.items }
    case SERVER_ADD:
      let items = state.items.slice()
      items.push(action.item)
      return {...state, items: items }
    case SERVER_UPDATE:
      console.log(action.type)
      return state
    case SERVER_DELETE:
      let f_items = state.items.filter( item => item.id != action.id )
      return {...state, items: f_items }
    case SERVER_DELETE_ALL:
      return {...state, items: [] }
    default:
      return state
  }
}
