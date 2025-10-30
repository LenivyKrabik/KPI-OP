'use strict';

const sum = (...args) => {
  let res = 0;
  for (const val of args){
    res+= val;
  }
  return res || 0;

};

module.exports = { sum };
