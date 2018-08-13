import React, {Fragment} from 'react';
import Message from './Message';


const Messages = ({items}) => {
  return <table className="table">
    <thead>
      <tr>
        <td>id</td>
        <td>text</td>
        <td>created_at</td>
        <td>updated_at</td>
        <td></td>
        <td></td>
      </tr>
    </thead>
    <tbody>
      {
         items.map(item => <Message key={item.id} {...item}/>)
      }
    </tbody></table>
}


export default Messages;
