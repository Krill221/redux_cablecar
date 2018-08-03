// Simple example of a React "smart" component

import { connect } from 'react-redux';
import Add from '../components/Add';
import * as actions from '../actions/nameCreators';


const mapDispatchToProps = (dispatch) => {
    return {
        allModel: () => dispatch(actions.allModel()),
        addModel: (text) => dispatch(actions.addModel(text)),
        updateModel: (text) => dispatch(actions.updateModel(text)),
        deleteModel: (text) => dispatch(actions.deleteModel(text)),
        deleteAllModel: (text) => dispatch(actions.deleteAllModel(text))
    };
};


export default connect(null, mapDispatchToProps)(Add);
