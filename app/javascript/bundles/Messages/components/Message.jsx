import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions/actionCreators';

class Message extends React.Component {
  constructor(props){
    super(props)
    this.state={text: this.props.text || ''}
  }
  componentWillReceiveProps(nextProps) {
    this.setState({text: nextProps.text});
  }
  handleChange(e){
    this.setState({text: e.target.value});
  }
  render() {
    let input
    let params = this.props
    return <tr>
      <td>{params.id}</td>
      <td>
        <input
          className="form-control"
          value={this.state.text}
          onChange={(e) => this.handleChange(e) }
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
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateModel: (id, text) => dispatch(actions.updateModel(id, text)),
        deleteModel: (id) => dispatch(actions.deleteModel(id)),
    };
};


export default connect(null, mapDispatchToProps)(Message);
