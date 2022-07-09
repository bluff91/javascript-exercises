const reverseString = function(string) {
   const myArray = [];

    for (let i=0; i<string.length; i++){
        myArray[string.length-1-i] = string[i];
    }
    
    return myArray.join("");
    
};


// Do not edit below this line
module.exports = reverseString;
