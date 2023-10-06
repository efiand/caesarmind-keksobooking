// Generates random number in range
const getRandomNumber = (min, max, integer = true) => {
  // If min/max have equal values returns min
  if (max === min) {
    return min;
  }
  // If min is a larger number than max, their positions are swapped for correct calculation
  if (min > max) {
    return getRandomNumber(max, min);
  }
  // If any argument is less than 0,
  //the function calls itself recursively with the argument transformed using Math.abs().
  if (min < 0 || max < 0) {
    return getRandomNumber(Math.abs(min), Math.abs(max));
  }

  // If we have floating number as argument
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return Math.random() * (max - min) + min;
  }

  return Math.random() * (max - min + Number(integer)) + min;
};

//Generates random whole number in range
const getRandomInteger = (min, max) => Math.floor(getRandomNumber(min, max));

// Generates random floating number in range
// with an argument to specify number of decimal digits
const getRandomFloatString = (min, max, decimal) => getRandomNumber(min, max, false).toFixed(decimal);

// Checker function to get unique items from array every single time
const getRandomUniqueItem = (array) => {
  const randomNumber = getRandomInteger(0, array.length - 1);
  const randomElement = array[randomNumber];
  array.splice(randomNumber, 1);

  return randomElement;
};

// Choose random amount of items from another array and generate new one
// without having duplicated items in new array
const getRandomItemsFromArray = (array) => {
  const duplicatedArray = array.slice();
  const resultArray = [];

  //random number to determine how many times we should take item from array
  const iterationNumber = getRandomInteger(1, array.length);

  for (let i = 0; i < iterationNumber; i++) {
    resultArray.push(getRandomUniqueItem(duplicatedArray));
  }

  return resultArray;
};

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

export {getRandomNumber, getRandomInteger, getRandomFloatString, getRandomUniqueItem, getRandomItemsFromArray, getRandomItem};
