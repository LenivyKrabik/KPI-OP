'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const reducer = (res, num) => (res << 8) + parseInt(num);
  return ip.split('.').reduce(reducer, 0);
};

module.exports = { ipToInt };
