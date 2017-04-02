import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppContainer from './containers/AppContainer';
import SearchPage from './containers/SearchPage';
import UserPage from './containers/UserPage';
import AdminPage from './containers/AdminPage';

export default (
  <Route path="/" component={AppContainer} >
    <IndexRoute component={SearchPage} />

    <Route path="/users/:id" component={UserPage} />
    <Route path="/admin" component={AdminPage} />
  </Route>
);