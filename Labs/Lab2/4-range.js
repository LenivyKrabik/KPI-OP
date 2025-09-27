'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start, end) =>{
    if(end-start<0) return [];
    const arr = new Array(end-start)
    let i = 0;
    for(let n = start;n <= end;n++){
        arr[i++] = n;
    }
    return arr;
};

module.exports = { range };
