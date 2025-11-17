'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
    const ans = array1.slice();
    for (let item of array2){
        const i = array1.indexOf(item);
        if (i!==-1) ans.splice(i, 1);
    }
    return ans;
};

module.exports = { difference };
