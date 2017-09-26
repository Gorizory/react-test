import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {plus} from '../actions/index';

class Plus extends Component {
  render () {
    return (<button onClick={() => this.props.plus()}> Plus </button>);
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {plus: plus},
    dispatch
  )
}

export default connect(null, matchDispatchToProps)(Plus);