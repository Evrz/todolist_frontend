const ABC_CONSTANTS = {
  TEST_CONSTANT1: 200,
  TEST_CONSTANT2: 20
};

const HTTP_METHODS = {
  HEAD: 'HEAD',
  GET: 'GET',
  PUT: 'PUT',
  PATCH: 'PATCH',
  POST: 'POST',
  DELETE: 'DELETE'
};


const PLACEHOLDER = {
  DATA: '--',
  DATE: '----/----/----',
  MONEY: '₹__'
};


const TOAST = {
  ERROR: {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored'
  },
  WARNING: {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored'
  },
  SUCCESS: {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored'
  }
};

export {
  ABC_CONSTANTS
};

const CONSTANTS = {
  TOAST,
  HTTP_METHODS,
  PLACEHOLDER
};

export default CONSTANTS;
