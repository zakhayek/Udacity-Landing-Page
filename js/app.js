// Global variables.
const navElements = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');
const button = document.querySelectorAll("button");

// Build menu by iterating through the navelements
navElements.forEach(element => {
  const navlistElement = `<li class='menu__link landing__container' data-link=${element.id}><a href='#${element.id}'>${element.dataset.nav}</li>`;
  navList.insertAdjacentHTML('beforeend', navlistElement);
})

// Function called by from beneath. Added buffer to rect.top to prevent "flashing" feel. Intentionally does not have to be dead on in order to retain .active.
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (rect.top >= -600 && rect.bottom <= (window.innerHeight));
}

// Checks to see whether the element is in the viewport, then applies or removes the .active class as necessary. Also works on the "Return to Top" button.
navElements.forEach(element => {
  window.addEventListener('scroll', function(event) {
    isElementInViewport(element)
      ? element.classList.add('active')
      : element.classList.remove('active');
  })
})

// Will scroll to appropriate section as clicked.
navList.addEventListener('click', scroll => {
  scroll.preventDefault();
  const parent = scroll.target.parentElement;
  const scrollTo = document.getElementById(parent.dataset.link);
  scrollTo.scrollIntoView({behavior: 'smooth'});
})

// Makes the button take you back to the top of the page.
button.forEach(button =>{
  button.addEventListener('click', function(){
  scrollTo({
    top: 0,
    behavior: 'smooth'});
  })
})
