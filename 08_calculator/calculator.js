const add = function(num1, num2) {
	return (num1+num2);
};

const subtract = function(num1, num2) {
	return (num1-num2);
};

const sum = function( myArray ) {
  let total=0;
  for (let i=0; i<myArray.length; i++){
  total = total + myArray[i]
  }
  return total;
};

const multiply = function( myArray) {
  let rezultat = 1;
  for (let i=0; i<myArray.length; i++){
    rezultat = rezultat * myArray[i];
  }
   

  return rezultat;
};

const power = function(a,b) {
  let rezultat=1;
  for (let i=0; i<b; i++){
    rezultat = rezultat*a;
  }
  return rezultat;
	
};

const factorial = function(number) {
  if (number == 0) { return 1;}
  let rezultat = 1;
  

  for (let i=number; i>0; i--){
   rezultat*=i;
    
  }
  return rezultat;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
