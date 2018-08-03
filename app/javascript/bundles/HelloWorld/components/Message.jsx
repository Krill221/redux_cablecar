import React from 'react';

const Message = (item) => {
  return <tr>
    <td>{item.id}</td>
    <td>{item.text}</td>
    <td>{item.created_at}</td>
    <td>{item.updated_at}</td>
  </tr>
}
export default Message;
