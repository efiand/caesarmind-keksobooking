const changeFormState = (parentClass, newClass, disable = true) => {
  const parentElement = document.querySelector(`.${parentClass}`);
  const childrenList = Array.from(parentElement.children);

  if(disable) {
    parentElement.classList.add(`${newClass}`);
    childrenList.forEach((childrenListItem) => {
      childrenListItem.disabled = true;
    });
  } else {
    parentElement.classList.remove(`${newClass}`);
    childrenList.forEach((childrenListItem) => {
      childrenListItem.disabled = false;
    });
  }
};

const disableAllFilters = () => {
  changeFormState('map__filters', 'map__filters--disabled');
  changeFormState('ad-form', 'ad-form--disabled');
};

const enableAllFilters = () => {
  changeFormState('map__filters', 'map__filters--disabled', false);
  changeFormState('ad-form', 'ad-form--disabled', false);
};

export { disableAllFilters, enableAllFilters, changeFormState };
