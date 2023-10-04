import {getRandomInteger, getRandomFloatString, getRandomUniqueItem, getRandomItemsFromArray} from './utils.js';

const AVATARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TITLES = [
  'Studio apartment in old Tbilisi',
  'Trendy Apartment in the Heart of Old Tbilisi',
  'Apartment Atoneli',
  '400 Tiny Apartment in Central Tbilisi with Terrace',
  'Cozy Loft near the Tbilisi Botanical Garden',
  'Spacious Condo with Stunning Views in Tbilisi'
];

const DESCRIPTIONS = [
  'Sunny and cozy apartment in the historic part of Tbilisi',
  'Calm and beautiful place in Samegrelo',
  'Studio-type rooms for a productive working environment',
  'Charming room in the heart of Tbilisi',
  'Modern and stylish accommodation in Tbilisi'
];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const TIMES = ['12:00', '13:00', '14:00'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const LATITUDE = {
  from: 35.65,
  to: 35.7
};
const LONGITUDE = {
  from: 139.7,
  to: 139.8
};

const getAvatarId = () => {
  if (AVATARS.length === 0) {
    return null;
  }

  const randomAvatar = getRandomUniqueItem(AVATARS);
  const paddedNumber = randomAvatar.toString().padStart(2, '0');
  return paddedNumber;
};

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateObject = () => ({
  author: {
    avatar: `img/avatars/user${getAvatarId()}.png`
  },
  offer: {
    title: getRandomItem(TITLES),
    price: getRandomInteger(100, 10000),
    type: getRandomItem(TYPES),
    rooms: getRandomInteger(1, 10),
    guests: getRandomInteger(1, 10),
    checkin: getRandomItem(TIMES),
    checkout: getRandomItem(TIMES),
    features: getRandomItemsFromArray(FEATURES),
    description: getRandomItem(DESCRIPTIONS),
    photos: getRandomItem(PHOTOS)
  },
  location: {
    lat: getRandomFloatString(LATITUDE.from, LATITUDE.to, 5),
    lng: getRandomFloatString(LONGITUDE.from, LONGITUDE.to, 5)
  }
});

const randomObjects = Array.from({ length: 10 }, generateObject);

export {randomObjects, generateObject};
