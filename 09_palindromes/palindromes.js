const palindromes = function (string) {
  /*  processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    const reverseString = [];
    for (let i=0; i < processedString.length; i++){
        reverseString[processedString.length-1-i] = processedString[i];
    }
   
    if (reverseString.join("") === processedString){
        return true;
    } else {
        return false;
    }*/

    processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    console.log(processedString.split(""));
    console.log(processedString.split("").reverse());
    console.log(processedString.split("").reverse().join(""));
    return processedString.split("").reverse().join("") == processedString;
    
};



// Do not edit below this line
module.exports = palindromes;
