// Simple example of a React "smart" component

import { connect } from 'react-redux';
import Add from '../components/Add';
import * as actions from '../actions/nameCreators';


const mapDispatchToProps = (dispatch) => {
    return {
        allModel: () => dispatch(actions.allModel()),
        addModel: (text) => dispatch(actions.addModel(text)),
        deleteAllModel: () => dispatch(actions.deleteAllModel())
    };
};


export default connect(null, mapDispatchToProps)(Add);
