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
