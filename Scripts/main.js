// Grab Elements
const selectElement = selector => {
  const element = document.querySelector(selector)
  if(element) return element;
  throw new Error (`Something went wrong, make sure that ${selector} exists or is typed correctly.`);
};

// Nav style on scroll 
const scrollHeader = () => {
  const headerElement = selectElement('.js-header');
  if (this.scrollY >= 15) {
    headerElement.classList.add('activated');
  } else {
    headerElement.classList.remove('activated');
  }
};

window.addEventListener('scroll', scrollHeader);

// open menu & search popup
