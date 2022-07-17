const findTheOldest = function(array) {

    const result = array.sort((lastGuy, nextGuy) => {
        const a = (lastGuy.yearOfDeath - lastGuy.yearOfBirth);
        const b = (nextGuy.yearOfDeath - nextGuy.yearOfBirth);
        return a > b ? -1:1;
    })
    return result[0];
};

// Do not edit below this line
module.exports = findTheOldest;
