import React, { Fragment } from 'react';
import AddContainer from '../containers/AddContainer';
import MessageContainer from '../containers/MessageContainer';

const Group = () => {
  let input
  return <Fragment>
    <AddContainer/>
    <MessageContainer/>
  </Fragment>
}

export default Group;
