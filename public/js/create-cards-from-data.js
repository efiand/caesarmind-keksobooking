
const OFFERS_RUS = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const checksIfExist = (key, element) => {
  if(!key) {
    element.remove();
  }
};

export const createCardsFromData = (randomData) => {
  // Get template from html
  const cardTemplate = document.querySelector('#card').content;
  const cardContent = cardTemplate.querySelector('article');

  // Get final destination div
  const placement = document.querySelector('#map-canvas');
  // Create fragment
  const fragment = document.createDocumentFragment();

  randomData.forEach((data) => {
    const newFragment = cardContent.cloneNode(true);

    const cardAvatar = newFragment.querySelector('.popup__avatar');
    cardAvatar.src = data.author.avatar;

    const cardTitle = newFragment.querySelector('.popup__title');
    cardTitle.textContent = data.offer.title;

    const cardPrice = newFragment.querySelector('.popup__text--price');
    cardPrice.textContent = data.offer.price;
    cardPrice.insertAdjacentHTML('beforeend', ' <span>₽/ночь</span>');

    const cardAddress = newFragment.querySelector('.popup__text--address');
    cardAddress.textContent = data.offer.address;

    const cardCapacity = newFragment.querySelector('.popup__text--capacity');
    cardCapacity.textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;

    const cardTime = newFragment.querySelector('.popup__text--time');
    cardTime.textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;

    const cardDescription = newFragment.querySelector('.popup__description');
    cardDescription.textContent = data.offer.description;

    const cardPhotos = newFragment.querySelector('.popup__photos');
    cardPhotos.innerHTML = '';
    data.offer.photos.forEach((photoLink) => {
      const photo = new Image();

      photo.width = 45;
      photo.height = 40;
      photo.src = photoLink;
      photo.alt = data.offer.title;

      cardPhotos.appendChild(photo);
    });

    const cardFeatures = newFragment.querySelector('.popup__features');
    const cardFeaturesList = cardFeatures.querySelectorAll('.popup__feature');

    cardFeaturesList.forEach((cardFeature) => {
      const isNeccessary = data.offer.features.some(
        (dataFeature) => cardFeature.classList.contains(`popup__feature--${dataFeature}`),
      );

      if(!isNeccessary) {
        cardFeature.remove();
      }
    });

    const cardType = newFragment.querySelector('.popup__type');
    checksIfExist(data.offer.type, cardType);
    cardType.textContent = OFFERS_RUS[data.offer.type];

    fragment.appendChild(newFragment);
  });


  // Adds fragment to final destination
  placement.appendChild(fragment);
};
