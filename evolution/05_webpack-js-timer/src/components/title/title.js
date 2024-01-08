const title = (title = '') => {
  const element = document.createElement('h1');
  element.innerHTML = title;
  return element;
};

export default title;
