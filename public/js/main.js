//Generates random number in range
const getRandomNumber = (min, max) => {
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

  return Math.random() * (max - min + 1) + min;
};

//Generates random whole number in range
const getRandomInteger = (min, max) => Math.floor(getRandomNumber(min, max));

// Generates random floating number in range
// with an argument to specify number of decimal digits
const getRandomFloatString = (min, max, decimal) => getRandomNumber(min, max).toFixed(decimal);

// Choose random items from another array and generate new one
// without having duplicated items in new array
const getItemsFromArray = (array) => {
  const duplicatedArray = array.slice();
  const resultArray = [];

  //random number to determine how many times we should take item from array
  const itterationNumber = getRandomInteger(1, array.length);

  for (let i = 0; i < itterationNumber; i++) {
    //checker to not get same items from an array
    const number = getRandomInteger(0, duplicatedArray.length - 1);
    const index = duplicatedArray[number];
    duplicatedArray.splice(duplicatedArray.indexOf(index), 1);

    resultArray.push(index);
  }

  return resultArray;
};

const avatars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const titles = [
  'Studio apartment in old Tbilisi',
  'Trendy Apartment in the Heart of Old Tbilisi',
  'Apartment Atoneli',
  '400 Tiny Apartment in Central Tbilisi with Terrace',
  'Cozy Loft near the Tbilisi Botanical Garden',
  'Spacious Condo with Stunning Views in Tbilisi'
];

const description = [
  'Sunny and cozy apartment in the historic part of Tbilisi',
  'Calm and beautiful place in Samegrelo',
  'Studio-type rooms for a productive working environment',
  'Charming room in the heart of Tbilisi',
  'Modern and stylish accommodation in Tbilisi'
];
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const times = ['12:00', '13:00', '14:00'];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const latitude = {
  from: 35.65,
  to: 35.7
};
const longitude = {
  from: 139.7,
  to: 139.8
};

const getAvatarId = () => {
  if (avatars.length === 0) {
    return null;
  }
  const number = getRandomInteger(0, avatars.length - 1);
  const index = avatars[number];
  avatars.splice(avatars.indexOf(index), 1);

  const paddedNumber = index.toString().padStart(2, '0');
  return paddedNumber;
};

const generateObject = () => ({
  author: {
    avatar: `img/avatars/user${getAvatarId()}.png`
  },
  offer: {
    title: titles[getRandomInteger(0, titles.length - 1)],
    price: getRandomInteger(100, 10000),
    type: types[getRandomInteger(0, types.length - 1)],
    rooms: getRandomInteger(1, 10),
    guests: getRandomInteger(1, 10),
    checkin: times[getRandomInteger(0, times.length - 1)],
    checkout: times[getRandomInteger(0, times.length - 1)],
    features: getItemsFromArray(features),
    description: description[getRandomInteger(0, description.length - 1)],
    photos: photos[getRandomInteger(0, photos.length - 1)]
  },
  location: {
    lat: getRandomFloatString(latitude.from, latitude.to, 5),
    lng: getRandomFloatString(longitude.from, longitude.to, 5)
  }
});

const randomObjects = Array.from({ length: 10 }, generateObject);
