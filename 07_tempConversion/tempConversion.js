const ftoc = function(number) {
  let aux = (number-32)*(5/9);
  return Math.round(aux * 10)/10;

};

const ctof = function(number) {
  let aux = (number*9/5)+32;
  return Math.round(aux * 10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
