let header = document.querySelector('#header');
let mainTitle = document.querySelector('#main-title');
let bird1 = document.querySelector('#bird1');
let bird2 = document.querySelector('#bird2');
let forest = document.querySelector('#forest');
let rocks = document.querySelector('#rocks');
let buttonExplore = document.querySelector('#button-explore');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  // Header
  header.style.top = value * 0.5 + 'px';

  // Main Title
  mainTitle.style.top = 38 + value * -0.5 + '%';

  // Bird 1
  bird1.style.top = value * -1.5 + 'px';
  bird1.style.left = value * 2 + 'px';

  //Bird 2
  bird2.style.top = value * -1.5 + 'px';
  bird2.style.left = value * -5 + 'px';

  // Forest
  forest.style.top = value * 0.25 + 'px';

  // Rocks
  rocks.style.top = value * -0.12 + 'px';

  // Button Explore
  buttonExplore.style.marginTop = value * 1.5 + 'px';
  

  console.log(value);
});