const mainForm = document.querySelector('.ad-form');

const MIN_LENGTH = 10;
const MAX_LENGTH = 30;


const validateTextInput = (minLength, maxLength, element) => {
  const valueLength = element.value.length;

  if (element.validity.valueMissing) {
    element.setCustomValidity('chawere ra rame');
  } else if (valueLength < MIN_LENGTH) {
    element.setCustomValidity(`Write down at least ${minLength - element.value.length} symbols`);
  } else if (valueLength > MAX_LENGTH) {
    element.setCustomValidity(`There are  ${valueLength - maxLength} more symbols than it's permitted`);
  } else {
    element.setCustomValidity('');
  }

  element.reportValidity();
};

const validateDigitInput = (minPrice, maxPrice, element) => {
  const value = element.value;

  if (element.validity.valueMissing) {
    element.setCustomValidity(`Minimal rent price is ${minPrice}, maximal - ${maxPrice}`);
  } else if (isNaN(value)) {
    element.setCustomValidity('Field only accepts digits');
  } else if (value < minPrice) {
    element.setCustomValidity(`Minimal rent price is ${minPrice} bucks`);
  } else if (value > maxPrice) {
    element.setCustomValidity(`Maximal rent price is ${maxPrice} bucks`);
  } else {
    element.setCustomValidity('');
  }

  element.reportValidity();

};

const validateRooms = () => {
  const guestsElement = document.querySelector('#capacity');
  const roomsElement = document.querySelector('#room_number');

  const guestsOptionList = Array.from(guestsElement.options);


  roomsElement.addEventListener(('change'), (evt) => {
    const newFragment = document.createDocumentFragment();

    guestsElement.innerHTML = ('');

    guestsOptionList.forEach((option) => {
      if(option.value <= evt.target.value && option.value > 0) {
        newFragment.appendChild(option);
      }
    });
    guestsElement.appendChild(newFragment);
  });
};

validateRooms();

const validateForm = () => {
  mainForm.addEventListener('input', (evt) => {
    if (evt.target.matches('#title')) {
      validateTextInput(MIN_LENGTH, MAX_LENGTH, evt.target);
    } else if (evt.target.matches('#price')) {
      validateDigitInput(10, 10000000, evt.target);
    } else {

    }
  });
};

validateForm();

const changeFormState = (parentClass, newClass, disable = true) => {
  const parentElement = document.querySelector(`.${parentClass}`);
  const childrenList = Array.from(parentElement.children);
  const classMethod = disable ? 'add' : 'remove';

  parentElement.classList[classMethod](`${newClass}`);
  childrenList.forEach((childrenListItem) => {
    childrenListItem.disabled = disable;
  });
};

const toggleFormsState = (disable = false) => () => {
  changeFormState('map__filters', 'map__filters--disabled', disable);
  changeFormState('ad-form', 'ad-form--disabled', disable);
};

const disableFormsActivity = toggleFormsState(true);
const enableFormsActivity = toggleFormsState(false);

export { disableFormsActivity, enableFormsActivity, changeFormState };
