import merge from 'lodash/merge';

const initialState = {
  users: {},
};

export default (state = initialState, { response }) => {
  if (response && response.entities) {
    return merge({}, state, response.entities);
  }

  return state;
};