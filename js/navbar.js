
const navButton = document.getElementsByClassName('navbar-button')[0];
const categories = document.getElementsByClassName('categories2')[0];
navButton.addEventListener('click', showHideCategories);
//adaptive for mobile
function showHideCategories() {
  let isOpen = categories.style.display !== 'none';
  if ( isOpen == true) {
    categories.style.display = 'none';
  } else {
    categories.style.display = 'flex';
  }
}