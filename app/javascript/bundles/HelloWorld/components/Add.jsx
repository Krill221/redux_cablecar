import React, { Fragment } from 'react';

const Add = (params) => {
  let input
  return <div>
      <label htmlFor="name">
        text:
      </label>
      <input
        id="name"
        type="text"
        ref={el => input = el}
      />
    <button onClick={() => params.allModel() } >ALL</button>
      <button onClick={() => params.addModel(input.value) } >ADD</button>
      <button onClick={() => params.updateModel(input.value) } >UPDATE</button>
      <button onClick={() => params.deleteModel(input.value) } >DELETE</button>
      <button onClick={() => params.deleteAllModel() } >DELETE ALL</button>
    <hr />
  </div>
}


export default Add;
