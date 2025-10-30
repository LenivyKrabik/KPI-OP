'use strict';

const sum = (...args) => {
  let res = 0;
  for (let iter = 0;iter<args.length;iter++){
    res += args[iter];
  }
  return res;
};

module.exports = { sum };
