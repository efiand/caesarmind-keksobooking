//Generates random whole number in Range
function randomizeNumber(min, max) {
  // If min/max have equal values returns min
  if(max === min) {
    return min;
  }
  // If min is a larger number than max, their positions are swapped for correct calculation
  if(min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  // If any argument is less than 0,
  //the function calls itself recursively with the argument transformed using Math.abs().
  if(min < 0 || max < 0) {
    return randomizeNumber(Math.abs(min), Math.abs(max));
  }

  return  Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generates random floating number in Range
// with an argument to specify number of decimal digits
function randomizeDecimals(min, max, decimals) {
  // If min/max have equal values returns min
  if(max === min) {
    return min;
  }
  // If min is a larger number than max, their positions are swapped for correct calculation
  if(min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  // If any argument is less than 0,
  // the function calls itself recursively with the argument transformed using Math.abs().
  if(min < 0 || max < 0) {
    return randomizeDecimals(Math.abs(min), Math.abs(max));
  }

  const randomNum =  Math.random() * (max - min + 1) + min;
  return randomNum.toFixed(decimals);
}

randomizeNumber(1, 5);
randomizeDecimals(1, 5, 3);
