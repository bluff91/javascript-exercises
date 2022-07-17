const fibonacci = function(number) {
    if (number == 0 || number == 1){
        return 1;
    }
    if (number < 0) {
        return "OOPS";
    }
    const fibi = [];
    fibi[0] = 1;
    fibi[1] = 1;
    for (let i =2; i<99; i++){
        fibi[i] = fibi[i-1]+ fibi[i-2];
        console.log(fibi[i]);
        if (number == i){
            return fibi[i-1];
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
