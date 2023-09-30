const API_BASE_URL = 'http://localhost:8000';

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
const todoReadManyUrl = () =>
  `${API_BASE_URL}/api/v1/todo/items`;

const todoCreateUrl = () =>
  `${API_BASE_URL}/api/v1/todo/items`;

const todoUpdateUrl = (todoId) =>
  `${API_BASE_URL}/api/v1/todo/${todoId}/update`;

const todoDeleteUrl = (todoId) =>
  `${API_BASE_URL}/api/v1/todo/items/`;

const todoReadOneUrl = (userId, id) =>
  `/api/v1/todo/${userId}/todo/${id}`;

const todoChangeStatusUrl = (userId, id) =>
  `/api/v1/todo/${userId}/todo/${id}`;


const TODO = {
  READ_MANY: todoReadManyUrl,
  CREATE: todoCreateUrl,
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
  READ_ONE: usersReadOneUrl,
  CHANGE_STATUS: usersChangeStatusUrl
};

const URLS = {
  TODO,
  USER
};

export default URLS;
