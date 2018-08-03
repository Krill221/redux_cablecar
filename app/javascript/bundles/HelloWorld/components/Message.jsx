import React from 'react';
import { Button } from 'react-bootstrap';

const Message = (item) => {
  return <tr>
    <td>{item.id}</td>
    <td>{item.text}</td>
    <td>{item.created_at}</td>
    <td>{item.updated_at}</td>
  </tr>
}
export default Message;
