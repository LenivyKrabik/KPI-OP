'use strict';

const sum = (...args) => {
  let res = 0;
  let x = 0;
  while (x<args.length){
    res+=args[x]
    x++;
  }
  return res || 0;
};

module.exports = { sum };
