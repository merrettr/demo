import { createAction } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import { schema } from 'normalizr';
import { createSelector } from 'reselect';
import callApi from './util/api';

// action types
const FETCH = 'demo/users/FETCH';
const FETCH_REQUEST = 'demo/users/FETCH_REQUEST';
const FETCH_SUCCESS = 'demo/users/FETCH_SUCCESS';
const FETCH_ERROR = 'demo/users/FETCH_ERROR';
const SEARCH = 'demo/users/SEARCH';

// action creators
export const fetchUsers = createAction(FETCH);
export const searchUsers = createAction(SEARCH);


// schemas
const userSchema = new schema.Entity('users');
const usersSchema = new schema.Array(userSchema);


// sagas
function* onFetchUsers() {
  yield* callApi(
    [ FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR ],
    {
      endpoint: '/users',
      schema: usersSchema,
    },
  );
}

export const userSagas = [
  takeLatest(FETCH, onFetchUsers),
];

// selectors
const usersSelector = ({
  entities: { users },
  users: { ids, search }
}) => ids.map(id => users[id]);

const searchSelector = ({
  users: { search }
}) => search;

const currentUserSelector = ({
  entities: { users }
}, {
  params: { id }
}) => users[id];

export const getUsers = createSelector(
  [ usersSelector ],
  users => users,
);

export const getSearchUsers = createSelector(
  [ usersSelector, searchSelector ],
  (users, search) => users
    .filter(({ name }) => !search || name.toLowerCase().indexOf(search) >= 0),
);

export const getCurrentUser = createSelector(
  [ currentUserSelector ],
  user => user,
);


// reducer
const initialState = {
  ids: [],
  isFetching: true,
  error: null,
  search: '',
};

export default (state = initialState, { type, payload, response }) => {
  switch (type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ids: response.result,
      };
    case FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: response,
      };
    case SEARCH:
      return {
        ...state,
        search: payload.toLowerCase(),
      };
    default:
      return state;
  }
};