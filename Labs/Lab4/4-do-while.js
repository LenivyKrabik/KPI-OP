'use strict';

const sum = (...args) => {
  let res = 0;
  let x = 0;
  do {
    res+=args[x]
    x++;
  } while (x<args.length);
  return res || 0;
  //Why lower limit?
};

module.exports = { sum };
