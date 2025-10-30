'use strict';

const max = (matrix) => {
  let allMax = 0;
  for (let y = 0;y<matrix.length;y++){
    const thing = matrix[y];
    let maxVal = 0;
    for (let x = 0;x<thing.length;x++){
      maxVal = maxVal<thing[x] ? thing[x] : maxVal;
    }
    allMax = allMax<maxVal ? maxVal : allMax;
  }
  return allMax;
};

module.exports = { max };
