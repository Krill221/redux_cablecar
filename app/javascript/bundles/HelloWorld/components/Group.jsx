import React, {Component, Fragment } from 'react';
import AddContainer from '../containers/AddContainer';
import MessagesContainer from '../containers/MessagesContainer';

class Group extends Component {
  componentDidMount(){
  }
  render() {
    let input
    return <Fragment>
      <AddContainer/>
      <MessagesContainer/>
    </Fragment>
  }
}
export default Group;
