'use strict';

const pipe = (...fns) => {
    for (const f of fns){
        if (typeof f !== "function") throw new Error("All argumetns should be functions!");
    }
    return (x) => {
        let ehh = x;
        for (const f of fns){
            ehh = f(ehh);
        }
        return ehh;
    };
};
module.exports = { pipe };
