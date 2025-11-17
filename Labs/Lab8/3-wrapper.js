'use strict';

const contract = (fn, ...types) => (...args) => {
    for (let i = 0; i<args.length;i++){
        if (typeof types[i]!== typeof args[i]) throw new TypeError();
    }
    const res = fn(...args);
    if (typeof res !== typeof types[types.length-1]) {throw new TypeError();}
    else return res;//////////////////////////////////////////////////
};

module.exports = { contract };
