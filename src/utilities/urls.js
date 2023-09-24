// user url templates
const usersCreateUrl = () => `api/users/v1/user`;
const usersReadManyUrl = () =>
  `api/users/v1/users`;
const usersReadOneUrl = (userId) =>
  `api/users/v1/user/${userId}`;
const usersUpdateUrl = (userId, id) =>
  `api/users/v1/user/${userId}`;
const usersChangeStatusUrl = (userId, id) =>
  `api/users/v1/user/${userId}`;
const usersDeleteUrl = (userId, id) =>
  `api/users/v1/user/${userId}`;

// todo url templates
const todoCreateUrl = userId => `api/todos/v1/${userId}/todo`;
const todoReadManyUrl = userId =>
  `api/todos/v1/${userId}/todo`;
const todoReadOneUrl = (userId, id) =>
  `api/todos/v1/${userId}/todo/${id}`;
const todoUpdateUrl = (userId, id) =>
  `api/todos/v1/${userId}/todo/${id}`;
const todoChangeStatusUrl = (userId, id) =>
  `api/todos/v1/${userId}/todo/${id}`;
const todoDeleteUrl = (userId, id) =>
  `api/todos/v1/${userId}/todo/${id}`;

const TODO = {
  CREATE: todoCreateUrl,
  READ_MANY: todoReadManyUrl,
  READ_ONE: todoReadOneUrl,
  UPDATE: todoUpdateUrl,
  DELETE: todoDeleteUrl,
  CHANGE_STATUS: todoChangeStatusUrl
};

const USER = {
  CREATE: usersCreateUrl,
  UPDATE: usersUpdateUrl,
  DELETE: usersDeleteUrl,
  READ_MANY: usersReadManyUrl,
  READ_ONE: usersReadOneUrl
};

const URLS = {
  TODO,
  USER
};

export default URLS;
