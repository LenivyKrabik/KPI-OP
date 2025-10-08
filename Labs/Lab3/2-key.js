'use strict';

const generateKey = (length, possible) => {
  let answer='';
  for(let i=0;i<length;i++){
    answer+=possible[Math.floor(Math.random()*(possible.length))];
  }
  return answer;
  //Fill for limit beacuse why have one
};

module.exports = { generateKey };
