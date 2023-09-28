//Generates random number in range
const getRandomNumber = function(min, max) {
  // If min/max have equal values returns min
  if(max === min) {
    return min;
  }
  // If min is a larger number than max, their positions are swapped for correct calculation
  if(min > max) {
    return getRandomNumber(max, min);
  }
  // If any argument is less than 0,
  //the function calls itself recursively with the argument transformed using Math.abs().
  if(min < 0 || max < 0) {
    return getRandomNumber(Math.abs(min), Math.abs(max));
  }

  return  Math.random() * (max - min + 1) + min;
};

//Generates random whole number in range
const getRandomInteger = (min, max) => Math.floor(getRandomNumber(min, max));

// Generates random floating number in range
// with an argument to specify number of decimal digits
const getRandomFloatString = (min, max, decimal) => getRandomNumber(min,max).toFixed(decimal);

getRandomInteger(1, 5);
getRandomFloatString(1, 5, 3);
