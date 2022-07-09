const removeFromArray = function(array) {
    const args = Array.from(arguments);
    const myArray = [];
    const toRemoveArray = [];
    const aNewArray = [];
    let counter=0;
    for (let j=1; j<args.length; j++){  //creates an array with the elements that have to be removed
        toRemoveArray[j-1]=args[j]; 
    }
   
   
    
    for (let i=0; i<array.length; i++){
        for (let j=0; j<toRemoveArray.length; j++){
            if (array[i] !== toRemoveArray[j]){
            myArray[i]=array[i];
            } else {
                myArray[i] = null;
                break;
            }
        }
    }

    for (let i=0; i<myArray.length; i++){
        if (myArray[i]===null){
            counter++;
        } else if (myArray[i] !== null){
            aNewArray[i-counter]=myArray[i];
        }
    }
    return aNewArray;
    
}

// Do not edit below this line
module.exports = removeFromArray;
