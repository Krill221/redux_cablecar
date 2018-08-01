import React, { Fragment } from 'react';

const Add = ({ addMessage }) => {
  let input
  return <div>
      <label htmlFor="name">
        Say hello to:
      </label>
      <input
        id="name"
        type="text"
        ref={el => input = el}
      />
    <button onClick={(e) => addMessage(input.value)} >Add</button>
    <hr />
  </div>
}


export default Add;
