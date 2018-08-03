import React, {Fragment} from 'react';
import Message from './Message';


const Messages = ({items}) => {
  return <table><tbody>
      {
         items.map(item => <Message key={item.id} {...item}/>)
      }
    </tbody></table>
}


export default Messages;
