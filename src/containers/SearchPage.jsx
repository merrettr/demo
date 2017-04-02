import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { fetchUsers, getSearchUsers, searchUsers, sortUsers } from '../modules/users';
import List from '../components/List';
import ListItem from '../components/ListItem';
import Search from '../components/Search';
import Sort from '../components/Sort';

class SearchPage extends Component {
  render() {
    const { users, search, ascending, onSearchUsers, onSortUsers, onPush } = this.props;

    return (
     <div>
      <Search value={search} onSearch={onSearchUsers}/>
      <Sort
        ascending={ascending}
        onSort={onSortUsers}
      />
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
    ascending: state.users.ascending,
  }), {
    onFetchUsers: fetchUsers,
    onSearchUsers: searchUsers,
    onSortUsers: sortUsers,
    onPush: push,
  }
)(SearchPage);