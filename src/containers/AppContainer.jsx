import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { fetchUsers, getUsers } from '../modules/users';
import App from '../components/App';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';

class AppContainer extends Component {
  componentWillMount() {
    const { users, onFetchUsers } = this.props;

    if (users.length === 0) {
      onFetchUsers();
    }
  }

  render() {
    const { isFetching, children, onRoute } = this.props;

    if (isFetching) {
      return <Spinner />
    }

    return <App>
      <Navbar onRoute={onRoute} />
      {children}
    </App>;
  }
}

export default connect(
  (state, { children }) => ({
    users: getUsers(state),
    isFetching: state.users.isFetching,
    children,
  }), {
    onFetchUsers: fetchUsers,
    onRoute: push,
  }
)(AppContainer);