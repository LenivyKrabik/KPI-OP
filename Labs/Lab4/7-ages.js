'use strict';

const ages = (persons) => {
  const daBois = {};
  for (const dude in persons){
    daBois[dude] = persons[dude].died - persons[dude].born;
  }

  return daBois;
};

module.exports = { ages };
