import { OFFERS_RUS } from './constants.js';
import { createDomNode } from './utils.js';

export const createCardsFromData = (dataArray) => {
  // Get template from html
  const cardTemplateElement = document.querySelector('#card').content;
  const cardContentElement = cardTemplateElement.querySelector('article');

  // Get final destination div
  const placement = document.querySelector('#map-canvas');
  // Create fragment
  const fragment = document.createDocumentFragment();

  dataArray.forEach((data) => {
    const newElement = cardContentElement.cloneNode(true);
    const fillElement = createDomNode(newElement);

    //// Fill element with:
    // Avatar
    const cardAvatar = newElement.querySelector('.popup__avatar');
    if (data.author.avatar) {
      cardAvatar.src = data.author.avatar;
    } else {
      cardAvatar.remove();
    }

    // Title
    fillElement(data.offer.title, 'popup__title');

    // Address
    fillElement(data.offer.address, 'popup__text--address');

    // Description
    fillElement(data.offer.description, 'popup__description');

    // Capacity
    fillElement(`${data.offer.rooms} комнаты для ${data.offer.guests} гостей`, 'popup__text--capacity');

    // Time
    fillElement(`Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`, 'popup__text--time');

    // Price
    fillElement(` ${data.offer.price} ₽/ночь`, 'popup__text--price');

    // Type
    fillElement(OFFERS_RUS[data.offer.type], 'popup__type');

    // Photos
    fillElement(data.offer.photos, 'popup__photos', (photoLink) => {
      const photo = new Image();

      photo.width = 45;
      photo.height = 40;
      photo.src = photoLink;
      photo.alt = data.offer.title;

      return photo;
    });

    // Features
    fillElement(data.offer.features, 'popup__features', (feature) => {
      const featureElement = document.createElement('li');
      featureElement.classList.add('popup__feature', `popup__feature--${feature}`);

      return featureElement;
    });

    fragment.appendChild(newElement);
  });


  // Adds fragment to final destination
  placement.appendChild(fragment);
};
