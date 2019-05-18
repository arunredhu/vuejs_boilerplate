export const reflectKeys = (arr = [], prefix) =>
  arr.reduce((obj, key) => {
    const value = prefix ? prefix + ' ' + key : key;
    obj[key] = value;

    return obj;
  }, {});
