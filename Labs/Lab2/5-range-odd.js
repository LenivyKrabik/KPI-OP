'use strict';

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

const rangeOdd = (start, end) =>{
    if(end-start<0) return [];
    const arr = new Array(0)
    for(let n = start;n <= end;n++){
        if(n%2!==0)arr.push(n);
    }
    return arr;
};

module.exports = { rangeOdd };
