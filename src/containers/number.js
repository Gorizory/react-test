import React, {Component} from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
  render () {
    return (<div>{this.props.number}</div>);
  }
}

function mapStateToProps (state) {
  return {
    number: state.number
  }
}

export default connect(mapStateToProps)(Counter);