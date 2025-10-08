'use strict';

const methods = iface => {
  const myKeys=[];
  for(const key in iface){
    if (typeof iface[key] == "function"){
      myKeys.push([key, iface[key].length]);
    }
  }
  return myKeys;       
};

module.exports = { methods };
