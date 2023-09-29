const redBox = document.querySelector('.red-box');
const blueBox = document.querySelector('.blue-box');
const yellowBox = document.querySelector('.yellow-box');
const purpleBox = document.querySelector('.purple-box');

const home = document.querySelector('.home');
const about = document.querySelector('.about');
const product = document.querySelector('.product');
const contact = document.querySelector('.contact');

redBox.addEventListener('mouseenter', () => {
  home.style.transform = "scale(1.4) rotate(360deg)";
});

blueBox.addEventListener('mouseenter', () => {
  about.style.transform = "scale(1.4) rotate(360deg)";
});

yellowBox.addEventListener('mouseenter', () => {
  product.style.transform = "scale(1.4) rotate(360deg)";
});

purpleBox.addEventListener('mouseenter', () => {
  contact.style.transform = "scale(1.4) rotate(360deg)";
});


redBox.addEventListener('mouseleave', () => {
  home.style.transform = '';
});

blueBox.addEventListener('mouseleave', () => {
  about.style.transform = '';
});

yellowBox.addEventListener('mouseleave', () => {
  product.style.transform = '';
});

purpleBox.addEventListener('mouseleave', () => {
  contact.style.transform = '';
});
