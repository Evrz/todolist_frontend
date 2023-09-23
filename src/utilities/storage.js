/**
 * 
 * ALWAYS USE setToStorage AND getFromStorage FUNCTIONS FOR READ, WRITE operations.
 * 
 */

// Storage
const setToStorage = (key, data, storage) => {
  storage.setItem(key, JSON.stringify(data));
};
const getFromStorage = (key, storage) => {
  let data = null;
  if (storage) {
    data = storage.getItem(key);
    data = (data) ? JSON.parse(data) : null;
  }
  return data;
};

// Local Storage
const setToLocalStorage = (key, data) => {
  if (window && window.localStorage) setToStorage(key, data, window.localStorage);
};
const getFromLocalStorage = (key) => getFromStorage(key, window?.localStorage);

// Session Storage
const setToSessionStorage = (key, data) => {
  if (window && window.sessionStorage) setToStorage(key, data, window.sessionStorage);
};
const getFromSessionStorage = (key) => getFromStorage(key, window?.sessionStorage);

// Clear All Storages
const clear = () => {
  if (window && window.localStorage) {
    window.localStorage.clear();
    window.sessionStorage.clear();
  }
};

// User
const writeUserData = (details) => setToSessionStorage('user', details);
const readUserData = () => getFromSessionStorage('user');

// Token
const writeTokens = (details) => setToLocalStorage('tokens', details);
const readTokens = () => getFromLocalStorage('tokens');

const writeOnboaringState = (details) => setToLocalStorage('onboarding', details);
const readOnboaringState = () => getFromLocalStorage('onboarding');

const writeOrganizationId = (details) => setToLocalStorage('organization', details);
const readOrganizationId = () => getFromLocalStorage('organization');

// Create your custom functions here...
// const myCustomFunction = () => {
//     //
// }

const Storage = {
  // user
  writeUserData,
  readUserData,
  // tokens
  writeTokens,
  readTokens,
  // others
  clear,
  // onboarding state
  writeOnboaringState,
  readOnboaringState,
  // organization
  writeOrganizationId,
  readOrganizationId,
};

export default Storage;