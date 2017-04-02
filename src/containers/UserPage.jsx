import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { getCurrentUser } from '../modules/users';
import User from '../components/User';

class SearchPage extends Component {
  render() {
    const { user } = this.props;

    return <User {...user} />;
  }
}

export default connect(
  (state, props) => ({
    user: getCurrentUser(state, props),
  }), {
    onPush: push,
  }
)(SearchPage);