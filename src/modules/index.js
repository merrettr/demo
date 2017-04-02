import entities from './entities';
import users, { userSagas } from './users';

export function* sagas () {
  yield [
    ...userSagas,
  ];
}

export default ({
  entities,
  users,
});