const sumAll = function(int1, int2) {
    if (int1<0 || int2<0){
        return "ERROR";
    }
    if (typeof(int1) != "number" || typeof(int2) != "number"){
        return "ERROR";
    }
    
    let max=0;
    let min=0;
    
    if(int1<int2){
        min=int1;
        max=int2;
    } else if (int1>int2){
        min=int2;
        max=int1;
    } else {
        max=min;
    }
    
    let sum=0;
    for (let i=min; i<=max; i++){
        sum = sum+i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
