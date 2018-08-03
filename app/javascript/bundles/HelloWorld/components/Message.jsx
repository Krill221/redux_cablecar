import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions/nameCreators';

const Message = (params) => {
  let input
  return <tr>
    <td>{params.id}</td>
    <td>
      <input
        className="form-control"
        defaultValue={params.text || ''}
        type="text"
        ref={el => input = el}
      />
    </td>
    <td>{params.created_at}</td>
    <td>{params.updated_at}</td>
    <td><Button onClick={() => params.updateModel(params.id, input.value) } >UPDATE</Button></td>
    <td>
      <Button onClick={() => params.deleteModel(params.id) } className="btn-danger" >
        <span className="glyphicon glyphicon-trash"></span>
      </Button>
    </td>
  </tr>
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateModel: (id, text) => dispatch(actions.updateModel(id, text)),
        deleteModel: (id) => dispatch(actions.deleteModel(id)),
    };
};


export default connect(null, mapDispatchToProps)(Message);
