export const create_UUID = () => {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
};

const getTotalPages = (totalItems, itemsPerPage) => {
  return Math.ceil(totalItems / itemsPerPage);
};

const convertStringToTitleCase = string => {
  return string
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const convertStringToKey = string => string.toLowerCase().replace(/_| /g, '-');

const UTILITY = {
  getTotalPages,
  convertStringToTitleCase,
  convertStringToKey
};

export default UTILITY;
