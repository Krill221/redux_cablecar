// Simple example of a React "smart" component

import { connect } from 'react-redux';
import Messages from '../components/Messages';

const mapStateToProps = (state) => ({ items: state.cable.items });
export default connect(mapStateToProps)(Messages);
