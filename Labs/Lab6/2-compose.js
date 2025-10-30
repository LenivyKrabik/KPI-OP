'use strict';

const compose = (...fns) => {
    const errorHandlers =[];
    const finFuction = (x) => {
        try{
        let ehh = x;
        for (let i = fns.length-1;i>=0;i--){
            ehh = fns[i](ehh);
        }
        return ehh;    
        }
        catch (error) {
            for (const handler of errorHandlers){
                handler(error);
            }
        }
    };
    finFuction.on = (err, handler) => {
        if (err==="error") errorHandlers.push(handler);
    }
    return finFuction;
};
module.exports = { compose };
