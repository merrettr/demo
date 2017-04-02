import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { fetchUsers, getSearchUsers, searchUsers } from '../modules/users';
import List from '../components/List';
import ListItem from '../components/ListItem';
import Search from '../components/Search';

class SearchPage extends Component {
  render() {
    const { users, search, onSearchUsers, onPush } = this.props;

    return (
     <div>
       <Search value={search} onSearch={onSearchUsers}/>
       <List
         items={users}
         onRender={({ id, name }) =>
           <ListItem onClick={() => onPush(`/users/${id}`)} >{name}</ListItem>
         }
         generateKey={user => user.id}
       />
     </div>
    );
  }
}

export default connect(
  (state, props) => ({
    users: getSearchUsers(state, props),
    search: state.users.search,
  }), {
    onFetchUsers: fetchUsers,
    onSearchUsers: searchUsers,
    onPush: push,
  }
)(SearchPage);