import React from 'react';
import { Provider } from 'react-redux';
//import cablecar from 'redux-cablecar';


import store, {car} from '../store/messagesStore';
import AddContainer from '../containers/AddContainer';
import Group from '../components/Group';


// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
class HelloWorldApp extends React.Component{
 render(){
   return <Provider store={store}>
      <Group cablecar={car} />
    </Provider>
  }
}

export default HelloWorldApp;
