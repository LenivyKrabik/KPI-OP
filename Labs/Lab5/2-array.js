'use strict';

const array = () => {
    const arr = [];
    let index = (i) => arr[i];
    index.push = (x) => arr.push(x);
    index.pop = (x) => arr.pop(x);
    return index;
};

module.exports = { array };
