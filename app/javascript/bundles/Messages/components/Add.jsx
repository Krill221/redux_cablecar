import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';


const Add = (params) => {
  let input
  return <div className="input-group">
      <input
        className="form-control"
        id="text"
        type="text"
        ref={el => input = el}
      />
    <span className="input-group-btn">
        <Button onClick={() => params.addModel(input.value) } >ADD</Button>
        <Button onClick={() => params.deleteAllModel() } >DELETE ALL</Button>
    </span>
  </div>
}


export default Add;
