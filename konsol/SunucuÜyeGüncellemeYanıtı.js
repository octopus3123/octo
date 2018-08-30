//Octopus by R4dar
//
//v2

const ddiff = require('return-deep-diff');
module.exports = (oMember, nMember) => {
  console.log(ddiff(oMember, nMember));
};
