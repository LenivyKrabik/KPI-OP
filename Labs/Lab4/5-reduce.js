'use strict';

const sum = (...args) => args.length!==0?args.reduce((ac,cur)=>ac+cur):0;

module.exports = { sum };
