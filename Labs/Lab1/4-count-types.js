'use strict';

const countTypesInArray = (arr) => {
  const counters = {};
  for (const el of arr) {
    const type = typeof el;
    if(counters[type]!==undefined)
        {
            counters[type]++;
        }
    else 
        {
            counters[type] = 1;
        }
    
  }
  return counters;
};

module.exports = { countTypesInArray };
