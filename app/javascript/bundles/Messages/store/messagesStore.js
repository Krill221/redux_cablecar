import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReduser from '../reducers';
import cablecar from 'redux-cablecar';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReduser,  composeEnhancers(
  applyMiddleware( thunk, cablecar )
))

const options = {
  prefix: 'CABLE'
}
export const car = cablecar.connect(store, 'MessagesChannel', options);
export default store;
