"use strict";

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
  return Array.from(new Set(array)); //I guess i am just toooooo good. Because my code is tooooooo short for tests
};

module.exports = { unique };
