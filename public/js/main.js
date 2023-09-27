//Generates random whole number in Range
function randomizerInRange(min, max) {
  if (min >= max || min < 0 || max < 0) {
    return 'Error: Invalid input. min should be less than max, and both should be non-negative.';
  }
  return  Math.floor(Math.random() * (max - min + 1)) + min;
}

randomizerInRange(1, 2);
